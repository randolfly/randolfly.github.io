---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - dotNet
---


# CSharp 实现依赖注入

## 问题的提出

开发中，尤其是大型项目的开发中，为了降低模块间、类间的耦合关系，比较提倡基于接口开发，但在实现中也必须面临最终是 “谁” 提供实体类的问题。Martin Fowler 在《Inversion of Control Containers and the Dependency Injection pattern》中也提到了标准的三种实现方式——Constructor Injection、Setter Injection 和 Interface Injection，很全面的阐释了这个问题。

对于 C# 而言，由于语法元素上本身要比 Java 丰富，如何实施注入还有些技巧和特色之处。这方面微软的 ObjectBuilder 是个不错的教科书，对三种标准方式的实现也都很到位，但就是有些庞大了。

本文中，笔者借鉴 Martin Fowler 的撰文，也通过一些精简的代码片断向读者介绍 C# 实现依赖注入的基本技巧。

我有个习惯，每天晚上要看天气预报，就以这个开始好了，先定义待注入对象的抽象行为描述，然后增加一个假的实体类，相关代码和单元测试如下：

C#

```C#
using System; 
namespace VisionLogic.Training.DependencyInjection.Scenario 
{ 
    /// <summary> 
    /// 抽象注入对象接口 
    /// </summary> 
    public interface IWeatherReader 
    { 
        string Current { get; } 
    } 
}
```

C#

```C#
using System; 
namespace VisionLogic.Training.DependencyInjection.Scenario.Raw 
{ 
    /// <summary> 
    /// 伪造的一个实现类 
    /// </summary> 
    class FakeWeatherReader : IWeatherReader 
    { 
        public string Current { get { return string.Empty; } } 
    } 

    /// <summary> 
    /// 客户程序 
    /// </summary> 
    public class Client 
    { 
        protected IWeatherReader reader = new FakeWeatherReader(); 
        public virtual string Weather 
        { 
            get 
            { 
                string current = reader.Current; 
                switch (current) 
                { 
                    case "s": return "sunny"; 
                    case "r": return "rainy"; 
                    case "c": return "cloudy"; 
                    default: 
                    return "unknown"; 
                } 
            } 
        } 
    } 
}
```

Unit Test

```C#
using Microsoft.VisualStudio.TestTools.UnitTesting; 
using VisionLogic.Training.DependencyInjection.Scenario; 
using VisionLogic.Training.DependencyInjection.Scenario.Raw; 
namespace VisionLogic.Training.DependencyInjection.Scenario.UnitTest.Raw 
{ 
    [TestClass] 
    public class WeatherReaderTest 
    { 
        [TestMethod] 
        public void Test() 
        { 
            Client client = new Client(); 
            Assert.AreEqual<string>("unknown", client.Weather); 
        } 
    } 
}
```

问题就出现了，虽然美好的愿望是 Client 仅仅依赖抽象的 IWeatherReader，但之前总要和一个实体类 “轧” 一道，那么实际的效果就是实体类作了修改、重新编译了，Client 也要处理，没有真正达到隔离的目的。依赖注入通过引入第三方责任者的方法，相对好的梳理了这个关系，这位重要的角色就是一个 Assembler 类，他和实体类型打交道，对 Client 而言他总是可以根据约定，加工出需要的 IWeatherReader。

## 进一步的分析

看上去，Client 被解放了，但又套住了 Assembler，为了尽量让他与实体类间松散些需要做什么呢？

首先要完成自己的职责：可以找到合适的实现类实例，不管是重新构造一个还是找个现成的。
既要根据需要加工接口 IWeatherReader，又要让自己尽量不与大量的实体类纠缠在一起，最好的办法就是从. Net Framework 中再找到一个 “第三方”，这里选中了 System.Activator。
还有就是当客户程序调用 Assembler 的时候，它需要知道需要通过哪个实现类的实例返回，该项工作一方面可以通过一个字典完成，也可以通过配置解决，两者应用都很普遍，怎么选择呢——抽象，提取一个接口，然后都实现。
由于本文主要介绍依赖注入的实现，为了简单起见，采用一个伪造的内存字典方式，而非基于 System.Configuration 的配置系统实现一个 Assembler 的协同类。

C# 新增一个用于管理抽象类型——实体类型映射关系的类型 ITypeMap

```C#
using System; 
using System.Collections.Generic; 
namespace VisionLogic.Training.DependencyInjection.Scenario 
{ 
    /// <summary> 
    /// 考虑到某些类型没有无参的构造函数，增加了描述构造信息的专门结构 
    /// </summary> 
    public class TypeConstructor 
    { 
        private Type type; 
        private object[] constructorParameters; 

        public TypeConstructor(Type type, params object[] constructorParameters) 
        { 
            this.type = type; 
            this.constructorParameters = constructorParameters; 
        } 
        public TypeConstructor(Type type) : this(type, null) { } 
        public Type Type { get { return type; } } 
        public object[] ConstructorParameters { get { return constructorParameters; } } 
    } 

    /// <summary> 
    /// 管理抽象类型与实体类型的字典类型 
    /// </summary> 
    public interface ITypeMap 
    { 
        TypeConstructor this[Type target]{get;} 
    } 
}
```

C# 实现一个 Assembler 类型，为了示例方便，同时实现了一个 ITypeMap 和 IWeatherReader

```C#
using System; 
using System.Collections.Generic; 
namespace VisionLogic.Training.DependencyInjection.Scenario 
{ 
    /// <summary> 
    /// 测试用的实体类 
    /// </summary> 
    public class WeatherReaderImpl : IWeatherReader 
    { 
        private string weather; 
        public WeatherReaderImpl(string weather) 
        { 
            this.weather = weather; 
        } 
        public string Current 
        { 
            get { return weather; } 
        }
    }     

    /// <summary> 
    /// 管理抽象类型与实际实体类型映射关系，实际工程中应该从配置系统、参数系统获得。 
    /// 这里为了示例方便，采用了一个纯内存字典的方式。 
    /// </summary> 
    public class MemoryTypeMap : ITypeMap 
    { 
        private Dictionary<Type, TypeConstructor> dictionary = new Dictionary<Type, TypeConstructor>(); 
        public static readonly ITypeMap Instance; 

        /// <summary> 
        /// Singleton 
        /// </summary> 
        private MemoryTypeMap(){} 
        static MemoryTypeMap() 
        { 
            MemoryTypeMap singleton = new MemoryTypeMap(); 
            // 注册抽象类型需要使用的实体类型 
            // 该类型实体具有构造参数，实际的配置信息可以从外层机制获得。 
            singleton.dictionary.Add(typeof(IWeatherReader), new TypeConstructor( 
            typeof(WeatherReaderImpl), "s")); 
            Instance = singleton; 
        }

        /// <summary> 
        /// 根据注册的目标抽象类型，返回一个实体类型及其构造参数数组 
        /// </summary> 
        /// <param ></param> 
        /// <returns></returns> 
        public TypeConstructor this[Type type] 
        { 
            get 
            { 
                TypeConstructor result; 
                if (!dictionary.TryGetValue(type, out result)) 
                    return null; 
                else 
                    return result; 
            } 
        } 
    } 

    public class Assembler<T> where T : class 
    { 
        /// <summary> 
        /// 其实TypeMap工程上本身就是个需要注入的类型，可以通过访问配置系统获得， 
        /// 这里为了示例的方便，手工配置了一些类型映射信息。 
        /// </summary> 
        private static ITypeMap map = MemoryTypeMap.Instance; 
        public T Create() 
        { 
            TypeConstructor constructor = map[typeof(T)]; 
            if (constructor != null) 
            { 
                if (constructor.ConstructorParameters == null) 
                    return (T)Activator.CreateInstance(constructor.Type); 
                else 
                    return (T)Activator.CreateInstance(constructor.Type, constructor.ConstructorParameters); 
                } 
            else 
                return null; 
        } 
    } 
}
```

Unit Test

```C#
using Microsoft.VisualStudio.TestTools.UnitTesting; 
using VisionLogic.Training.DependencyInjection.Scenario; 
namespace VisionLogic.Training.DependencyInjection.Scenario.UnitTest 
{ 
    [TestClass()] 
    public class AssemblerTest 
    { 
        [TestMethod] 
        public void Test() 
        { 
            IWeatherReader reader = new Assembler<IWeatherReader>().Create(); 
            Assert.IsNotNull(reader); 
            Assert.AreEqual<System.Type>(typeof(WeatherReaderImpl), reader.GetType()); 
        } 
    } 
}
```

## 经典方式下的注入实现

在完成了 Assembler 这个基础环境后，就是怎么注入的问题了，下面是对三种方式的经典方法实现：

### Constructor Injection 方式 （构造注入）
Unit Test - Constructor

```C#
using Microsoft.VisualStudio.TestTools.UnitTesting; 
using VisionLogic.Training.DependencyInjection.Scenario; 
namespace VisionLogic.Training.DependencyInjection.Scenario.UnitTest 
{ 
    [TestClass] 
    public class ConstructorInjectionTest 
    { 
        class Client 
        { 
            private IWeatherReader reader; 
            public Client(IWeatherReader reader) 
            { 
                this.reader = reader; 
            } 
        } 

        [TestMethod] 
        public void Test() 
        { 
            IWeatherReader reader = new Assembler<IWeatherReader>().Create(); 
            Client client = new Client(reader); 
            Assert.IsNotNull(client); 
        } 
    } 
}
```

### Setter Injection 方式 （Setter 注入）

Unit Test - Setter

```C#
using Microsoft.VisualStudio.TestTools.UnitTesting; 
using VisionLogic.Training.DependencyInjection.Scenario; 
namespace VisionLogic.Training.DependencyInjection.Scenario.UnitTest 
{ 
    [TestClass] 
    public class SetterInjectionTest 
    { 
        class Client 
        { 
            private IWeatherReader reader; 
            public IWeatherReader Reader 
            { 
                get { return reader; } 
                set { reader = value; } 
            } 
        }

        [TestMethod] 
        public void Test() 
        { 
            IWeatherReader reader = new Assembler<IWeatherReader>().Create(); 
            Client client = new Client(); 
            client.Reader = reader; 
            Assert.IsNotNull(client.Reader); 
        } 
    } 
}
```

### Interface Injection 方式 （接口注入）

Unit Test - Interface

```C#
using Microsoft.VisualStudio.TestTools.UnitTesting; 
using VisionLogic.Training.DependencyInjection.Scenario; 
namespace VisionLogic.Training.DependencyInjection.Scenario.UnitTest 
{ 
    [TestClass] 
    public class InterfaceInjectionTest 
    { 
        interface IClientWithWeatherReader 
        { 
            IWeatherReader Reader { get; set;} 
        } 

        class Client : IClientWithWeatherReader 
        { 
            private IWeatherReader reader; 

            #region IClientWithWeatherReader Members 
            public IWeatherReader Reader 
            { 
                get { return reader; } 
                set { reader = value; } 
            } 
            #endregion 
        } 

        [TestMethod] 
        public void Test() 
        { 
            IWeatherReader reader = new Assembler<IWeatherReader>().Create(); 
            Client client = new Client(); 
            IClientWithWeatherReader clientWithReader = client; 
            clientWithReader.Reader = reader; 
            Assert.IsNotNull(clientWithReader.Reader); 
        } 
    } 
}
```

### Attribute Injection 方式（用属性注入）

C# 还可以通过 Attribute 注入，Enterprise Library 中大量使用这种方式将各种第三方机制加入到类系统中。例如：

* 运行监控需要的 Performance Counter。
* 用于构造过程的指标信息。
* 用于日志、密码处理。
* 等等。

注：Java 语言虽然发展比较慢，但在 Java 5 种也提供了类似的 Annotation 的机制，换了个名字省去被评估为 “抄袭” 的嫌疑。）
为了演示方便，下面设计一个应用情景：

## 应用实例

### Scenario
1、 应用需要一个集中的机制了解系统中实际创建过多少个特定类型对象的实例，用于评估系统的 Capacity 要求。
2、 为了防止系统资源被用尽，需要控制每类对象实例数量。

怎么实现呢？如下：
1、增加一个内存的注册器，登记每个类已经创建过的实例实例数量。
2、然后给每个类贴个标签——Attribute，让 Assembler 在生成的对象的时候根据标签的内容把对象登记到注册器。

### 代码实现

定义抽象业务实体

C#

```C#
using System; 
namespace VisionLogic.Training.DependencyInjection.Scenario.Attributer 
{ 
    /// <summary> 
    /// 抽象的处理对象 
    /// </summary> 
    public interface IObjectWithGuid 
    { 
        string Guid { get; set;} 
    } 
}
```

定义需要注入的限制接口，并用一个 Attribute 管理它
C#

```C#
using System; 
namespace VisionLogic.Training.DependencyInjection.Scenario.Attributer 
{ 
    /// <summary> 
    /// 需要注入的用以限制最大数量的接口 
    /// </summary> 
    public interface ICapacityConstraint 
    { 
        int Max { get;} 
    } 

    public class CapacityConstraint : ICapacityConstraint 
    { 
        private int max; 
        public CapacityConstraint(){this.max = 0;} // 默认情况下不限制 
        public CapacityConstraint(int max) { this.max = max; } 
        public int Max { get { return max; } } 
    } 

    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)] 
    public class ConstraintAttribute : Attribute 
    { 
        private ICapacityConstraint capacity; 
        public ConstraintAttribute(int max) { this.capacity = new CapacityConstraint(max); } 
        public ConstraintAttribute() { this.capacity = null; } 
        public ICapacityConstraint Capacity { get { return capacity; } } 
    } 
}
```

Assembler 上增加通过 Attribute 注入限制的响应。
::: note 
这里和上一个比少了一个TMap，也就是虚拟-实现的映射。
根据我个人理解，上面服务是调用虚拟接口，因此需要这个映射来完成后面Assembler的实体类创建。但是对于属性，用户使用的时候直接调用属性，就不需要这个映射了
:::


C#

```C#
using System; 
using System.Collections.Generic; 
namespace VisionLogic.Training.DependencyInjection.Scenario.Attributer 
{ 
    public class Assembler 
    { 
        /// <summary> 
        /// 登记相关类型对“最大容量”属性的使用情况 
        /// </summary> 
        private IDictionary<Type, ConstraintAttribute> attributeRegistry = new Dictionary<Type, ConstraintAttribute>(); 

        /// <summary> 
        /// 登记每个类型（如须受到“最大容量”属性限制的话），实际已经创建的对象数量 
        /// </summary> 
        private IDictionary<Type, int> usageRegistry = new Dictionary<Type, int>(); 
        public T Create<T>() where T : IObjectWithGuid, new() 
        { 
            ICapacityConstraint constraint = GetAttributeDefinedMax(typeof(T)); 
            if ((constraint == null) || (constraint.Max <= 0)) // max <= 0 代表是不需要限制数量的。 
                return InternalCreate<T>(); 
            else 
            { 
                if (usageRegistry[typeof(T)] < constraint.Max) // 检查是否超出容量限制 
                { 
                    usageRegistry[typeof(T)]++; // 更新使用情况注册信息 
                    return InternalCreate<T>(); 
                } 
                else 
                    return default(T); 
            } 
        } 

        // helper method 
        // 直接生成特定实例，并setter 方式注入其guid。 
        private T InternalCreate<T>() 
        where T : IObjectWithGuid, new() 
        { 
            T result = new T(); 
            result.Guid = Guid.NewGuid().ToString(); 
            return result; 
        } 

        /// helper method. 
        // 获取特定类型所定义的最大数量, 同时视情况维护attributeRegistry 和usageRegistry 的注册信息。 
        private ICapacityConstraint GetAttributeDefinedMax(Type type) 
        { 
            ConstraintAttribute attribute = null; 
            if (!attributeRegistry.TryGetValue(type, out attribute)) //新的待创建的类型 
            { 
                // 填充相关类型的“最大容量”属性注册信息 
                object[] attributes = type.GetCustomAttributes(typeof(ConstraintAttribute), false); 
                if ((attributes == null) || (attributes.Length <= 0)) 
                    attributeRegistry.Add(type, null); 
                else 
                { 
                    attribute = (ConstraintAttribute)attributes[0]; 
                    attributeRegistry.Add(type, attribute); 
                    usageRegistry.Add(type, 0); // 同时补充该类型的使用情况注册信息 
                } 
            } 
            if (attribute == null) 
                return null; 
            else 
                return attribute.Capacity; 
        } 
    } 
}
```

### 对方案的测试
C#

```C#
using Microsoft.VisualStudio.TestTools.UnitTesting; 
using VisionLogic.Training.DependencyInjection.Scenario.Attributer; 
namespace VisionLogic.Training.DependencyInjection.Scenario.UnitTest.Attributer 
{ 
    [TestClass()] 
    public class AssemblerTest 
    { 
        public abstract class ObjectWithGuidBase : IObjectWithGuid 
        { 
            protected string guid; 
            public virtual string Guid 
            { 
                get { return guid; } 
                set { guid = value; } 
            } 
        } 

        [Constraint(2)] // 通过属性注入限制 
        public class ObjectWithGuidImplA : ObjectWithGuidBase { } 
        [Constraint(0)] // 通过属性注入限制 
        public class ObjectWithGuidImplB : ObjectWithGuidBase { } 
        [Constraint(-5)] // 通过属性注入限制 
        public class ObjectWithGuidImplC : ObjectWithGuidBase { } 
        public class ObjectWithGuidImplD : ObjectWithGuidBase { } 

        [TestMethod] 
        public void Test() 
        { 
            Assembler assembler = new Assembler(); 
            for (int i = 0; i < 2; i++) 
            Assert.IsNotNull(assembler.Create<ObjectWithGuidImplA>()); 
            Assert.IsNull(assembler.Create<ObjectWithGuidImplA>()); // 最多两个 
            for (int i = 0; i < 100; i++) 
            Assert.IsNotNull(assembler.Create<ObjectWithGuidImplB>()); // 不限制 
            for (int i = 0; i < 100; i++) 
            Assert.IsNotNull(assembler.Create<ObjectWithGuidImplC>()); // 不限制 
            for (int i = 0; i < 100; i++) 
            Assert.IsNotNull(assembler.Create<ObjectWithGuidImplD>()); // 不限制 
        } 
    } 
}
```
