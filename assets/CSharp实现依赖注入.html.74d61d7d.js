import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.898cbe5e.js";const l={},r=s(`<h1 id="csharp\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#csharp\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a> CSharp\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165</h1><h1 id="csharp-\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#csharp-\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a> CSharp \u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165</h1><h2 id="\u95EE\u9898\u7684\u63D0\u51FA" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u7684\u63D0\u51FA" aria-hidden="true">#</a> \u95EE\u9898\u7684\u63D0\u51FA</h2><p>\u5F00\u53D1\u4E2D\uFF0C\u5C24\u5176\u662F\u5927\u578B\u9879\u76EE\u7684\u5F00\u53D1\u4E2D\uFF0C\u4E3A\u4E86\u964D\u4F4E\u6A21\u5757\u95F4\u3001\u7C7B\u95F4\u7684\u8026\u5408\u5173\u7CFB\uFF0C\u6BD4\u8F83\u63D0\u5021\u57FA\u4E8E\u63A5\u53E3\u5F00\u53D1\uFF0C\u4F46\u5728\u5B9E\u73B0\u4E2D\u4E5F\u5FC5\u987B\u9762\u4E34\u6700\u7EC8\u662F \u201C\u8C01\u201D \u63D0\u4F9B\u5B9E\u4F53\u7C7B\u7684\u95EE\u9898\u3002Martin Fowler \u5728\u300AInversion of Control Containers and the Dependency Injection pattern\u300B\u4E2D\u4E5F\u63D0\u5230\u4E86\u6807\u51C6\u7684\u4E09\u79CD\u5B9E\u73B0\u65B9\u5F0F\u2014\u2014Constructor Injection\u3001Setter Injection \u548C Interface Injection\uFF0C\u5F88\u5168\u9762\u7684\u9610\u91CA\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u5BF9\u4E8E C# \u800C\u8A00\uFF0C\u7531\u4E8E\u8BED\u6CD5\u5143\u7D20\u4E0A\u672C\u8EAB\u8981\u6BD4 Java \u4E30\u5BCC\uFF0C\u5982\u4F55\u5B9E\u65BD\u6CE8\u5165\u8FD8\u6709\u4E9B\u6280\u5DE7\u548C\u7279\u8272\u4E4B\u5904\u3002\u8FD9\u65B9\u9762\u5FAE\u8F6F\u7684 ObjectBuilder \u662F\u4E2A\u4E0D\u9519\u7684\u6559\u79D1\u4E66\uFF0C\u5BF9\u4E09\u79CD\u6807\u51C6\u65B9\u5F0F\u7684\u5B9E\u73B0\u4E5F\u90FD\u5F88\u5230\u4F4D\uFF0C\u4F46\u5C31\u662F\u6709\u4E9B\u5E9E\u5927\u4E86\u3002</p><p>\u672C\u6587\u4E2D\uFF0C\u7B14\u8005\u501F\u9274 Martin Fowler \u7684\u64B0\u6587\uFF0C\u4E5F\u901A\u8FC7\u4E00\u4E9B\u7CBE\u7B80\u7684\u4EE3\u7801\u7247\u65AD\u5411\u8BFB\u8005\u4ECB\u7ECD C# \u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165\u7684\u57FA\u672C\u6280\u5DE7\u3002</p><p>\u6211\u6709\u4E2A\u4E60\u60EF\uFF0C\u6BCF\u5929\u665A\u4E0A\u8981\u770B\u5929\u6C14\u9884\u62A5\uFF0C\u5C31\u4EE5\u8FD9\u4E2A\u5F00\u59CB\u597D\u4E86\uFF0C\u5148\u5B9A\u4E49\u5F85\u6CE8\u5165\u5BF9\u8C61\u7684\u62BD\u8C61\u884C\u4E3A\u63CF\u8FF0\uFF0C\u7136\u540E\u589E\u52A0\u4E00\u4E2A\u5047\u7684\u5B9E\u4F53\u7C7B\uFF0C\u76F8\u5173\u4EE3\u7801\u548C\u5355\u5143\u6D4B\u8BD5\u5982\u4E0B\uFF1A</p><p>C#</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using System; 
namespace VisionLogic.Training.DependencyInjection.Scenario 
{ 
    /// &lt;summary&gt; 
    /// \u62BD\u8C61\u6CE8\u5165\u5BF9\u8C61\u63A5\u53E3 
    /// &lt;/summary&gt; 
    public interface IWeatherReader 
    { 
        string Current { get; } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C#</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using System; 
namespace VisionLogic.Training.DependencyInjection.Scenario.Raw 
{ 
    /// &lt;summary&gt; 
    /// \u4F2A\u9020\u7684\u4E00\u4E2A\u5B9E\u73B0\u7C7B 
    /// &lt;/summary&gt; 
    class FakeWeatherReader : IWeatherReader 
    { 
        public string Current { get { return string.Empty; } } 
    } 

    /// &lt;summary&gt; 
    /// \u5BA2\u6237\u7A0B\u5E8F 
    /// &lt;/summary&gt; 
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
                    case &quot;s&quot;: return &quot;sunny&quot;; 
                    case &quot;r&quot;: return &quot;rainy&quot;; 
                    case &quot;c&quot;: return &quot;cloudy&quot;; 
                    default: 
                    return &quot;unknown&quot;; 
                } 
            } 
        } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Unit Test</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using Microsoft.VisualStudio.TestTools.UnitTesting; 
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
            Assert.AreEqual&lt;string&gt;(&quot;unknown&quot;, client.Weather); 
        } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u95EE\u9898\u5C31\u51FA\u73B0\u4E86\uFF0C\u867D\u7136\u7F8E\u597D\u7684\u613F\u671B\u662F Client \u4EC5\u4EC5\u4F9D\u8D56\u62BD\u8C61\u7684 IWeatherReader\uFF0C\u4F46\u4E4B\u524D\u603B\u8981\u548C\u4E00\u4E2A\u5B9E\u4F53\u7C7B \u201C\u8F67\u201D \u4E00\u9053\uFF0C\u90A3\u4E48\u5B9E\u9645\u7684\u6548\u679C\u5C31\u662F\u5B9E\u4F53\u7C7B\u4F5C\u4E86\u4FEE\u6539\u3001\u91CD\u65B0\u7F16\u8BD1\u4E86\uFF0CClient \u4E5F\u8981\u5904\u7406\uFF0C\u6CA1\u6709\u771F\u6B63\u8FBE\u5230\u9694\u79BB\u7684\u76EE\u7684\u3002\u4F9D\u8D56\u6CE8\u5165\u901A\u8FC7\u5F15\u5165\u7B2C\u4E09\u65B9\u8D23\u4EFB\u8005\u7684\u65B9\u6CD5\uFF0C\u76F8\u5BF9\u597D\u7684\u68B3\u7406\u4E86\u8FD9\u4E2A\u5173\u7CFB\uFF0C\u8FD9\u4F4D\u91CD\u8981\u7684\u89D2\u8272\u5C31\u662F\u4E00\u4E2A Assembler \u7C7B\uFF0C\u4ED6\u548C\u5B9E\u4F53\u7C7B\u578B\u6253\u4EA4\u9053\uFF0C\u5BF9 Client \u800C\u8A00\u4ED6\u603B\u662F\u53EF\u4EE5\u6839\u636E\u7EA6\u5B9A\uFF0C\u52A0\u5DE5\u51FA\u9700\u8981\u7684 IWeatherReader\u3002</p><h2 id="\u8FDB\u4E00\u6B65\u7684\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u4E00\u6B65\u7684\u5206\u6790" aria-hidden="true">#</a> \u8FDB\u4E00\u6B65\u7684\u5206\u6790</h2><p>\u770B\u4E0A\u53BB\uFF0CClient \u88AB\u89E3\u653E\u4E86\uFF0C\u4F46\u53C8\u5957\u4F4F\u4E86 Assembler\uFF0C\u4E3A\u4E86\u5C3D\u91CF\u8BA9\u4ED6\u4E0E\u5B9E\u4F53\u7C7B\u95F4\u677E\u6563\u4E9B\u9700\u8981\u505A\u4EC0\u4E48\u5462\uFF1F</p><p>\u9996\u5148\u8981\u5B8C\u6210\u81EA\u5DF1\u7684\u804C\u8D23\uFF1A\u53EF\u4EE5\u627E\u5230\u5408\u9002\u7684\u5B9E\u73B0\u7C7B\u5B9E\u4F8B\uFF0C\u4E0D\u7BA1\u662F\u91CD\u65B0\u6784\u9020\u4E00\u4E2A\u8FD8\u662F\u627E\u4E2A\u73B0\u6210\u7684\u3002 \u65E2\u8981\u6839\u636E\u9700\u8981\u52A0\u5DE5\u63A5\u53E3 IWeatherReader\uFF0C\u53C8\u8981\u8BA9\u81EA\u5DF1\u5C3D\u91CF\u4E0D\u4E0E\u5927\u91CF\u7684\u5B9E\u4F53\u7C7B\u7EA0\u7F20\u5728\u4E00\u8D77\uFF0C\u6700\u597D\u7684\u529E\u6CD5\u5C31\u662F\u4ECE. Net Framework \u4E2D\u518D\u627E\u5230\u4E00\u4E2A \u201C\u7B2C\u4E09\u65B9\u201D\uFF0C\u8FD9\u91CC\u9009\u4E2D\u4E86 System.Activator\u3002 \u8FD8\u6709\u5C31\u662F\u5F53\u5BA2\u6237\u7A0B\u5E8F\u8C03\u7528 Assembler \u7684\u65F6\u5019\uFF0C\u5B83\u9700\u8981\u77E5\u9053\u9700\u8981\u901A\u8FC7\u54EA\u4E2A\u5B9E\u73B0\u7C7B\u7684\u5B9E\u4F8B\u8FD4\u56DE\uFF0C\u8BE5\u9879\u5DE5\u4F5C\u4E00\u65B9\u9762\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A\u5B57\u5178\u5B8C\u6210\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u89E3\u51B3\uFF0C\u4E24\u8005\u5E94\u7528\u90FD\u5F88\u666E\u904D\uFF0C\u600E\u4E48\u9009\u62E9\u5462\u2014\u2014\u62BD\u8C61\uFF0C\u63D0\u53D6\u4E00\u4E2A\u63A5\u53E3\uFF0C\u7136\u540E\u90FD\u5B9E\u73B0\u3002 \u7531\u4E8E\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u4F9D\u8D56\u6CE8\u5165\u7684\u5B9E\u73B0\uFF0C\u4E3A\u4E86\u7B80\u5355\u8D77\u89C1\uFF0C\u91C7\u7528\u4E00\u4E2A\u4F2A\u9020\u7684\u5185\u5B58\u5B57\u5178\u65B9\u5F0F\uFF0C\u800C\u975E\u57FA\u4E8E System.Configuration \u7684\u914D\u7F6E\u7CFB\u7EDF\u5B9E\u73B0\u4E00\u4E2A Assembler \u7684\u534F\u540C\u7C7B\u3002</p><p>C# \u65B0\u589E\u4E00\u4E2A\u7528\u4E8E\u7BA1\u7406\u62BD\u8C61\u7C7B\u578B\u2014\u2014\u5B9E\u4F53\u7C7B\u578B\u6620\u5C04\u5173\u7CFB\u7684\u7C7B\u578B ITypeMap</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using System; 
using System.Collections.Generic; 
namespace VisionLogic.Training.DependencyInjection.Scenario 
{ 
    /// &lt;summary&gt; 
    /// \u8003\u8651\u5230\u67D0\u4E9B\u7C7B\u578B\u6CA1\u6709\u65E0\u53C2\u7684\u6784\u9020\u51FD\u6570\uFF0C\u589E\u52A0\u4E86\u63CF\u8FF0\u6784\u9020\u4FE1\u606F\u7684\u4E13\u95E8\u7ED3\u6784 
    /// &lt;/summary&gt; 
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

    /// &lt;summary&gt; 
    /// \u7BA1\u7406\u62BD\u8C61\u7C7B\u578B\u4E0E\u5B9E\u4F53\u7C7B\u578B\u7684\u5B57\u5178\u7C7B\u578B 
    /// &lt;/summary&gt; 
    public interface ITypeMap 
    { 
        TypeConstructor this[Type target]{get;} 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C# \u5B9E\u73B0\u4E00\u4E2A Assembler \u7C7B\u578B\uFF0C\u4E3A\u4E86\u793A\u4F8B\u65B9\u4FBF\uFF0C\u540C\u65F6\u5B9E\u73B0\u4E86\u4E00\u4E2A ITypeMap \u548C IWeatherReader</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using System; 
using System.Collections.Generic; 
namespace VisionLogic.Training.DependencyInjection.Scenario 
{ 
    /// &lt;summary&gt; 
    /// \u6D4B\u8BD5\u7528\u7684\u5B9E\u4F53\u7C7B 
    /// &lt;/summary&gt; 
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

    /// &lt;summary&gt; 
    /// \u7BA1\u7406\u62BD\u8C61\u7C7B\u578B\u4E0E\u5B9E\u9645\u5B9E\u4F53\u7C7B\u578B\u6620\u5C04\u5173\u7CFB\uFF0C\u5B9E\u9645\u5DE5\u7A0B\u4E2D\u5E94\u8BE5\u4ECE\u914D\u7F6E\u7CFB\u7EDF\u3001\u53C2\u6570\u7CFB\u7EDF\u83B7\u5F97\u3002 
    /// \u8FD9\u91CC\u4E3A\u4E86\u793A\u4F8B\u65B9\u4FBF\uFF0C\u91C7\u7528\u4E86\u4E00\u4E2A\u7EAF\u5185\u5B58\u5B57\u5178\u7684\u65B9\u5F0F\u3002 
    /// &lt;/summary&gt; 
    public class MemoryTypeMap : ITypeMap 
    { 
        private Dictionary&lt;Type, TypeConstructor&gt; dictionary = new Dictionary&lt;Type, TypeConstructor&gt;(); 
        public static readonly ITypeMap Instance; 

        /// &lt;summary&gt; 
        /// Singleton 
        /// &lt;/summary&gt; 
        private MemoryTypeMap(){} 
        static MemoryTypeMap() 
        { 
            MemoryTypeMap singleton = new MemoryTypeMap(); 
            // \u6CE8\u518C\u62BD\u8C61\u7C7B\u578B\u9700\u8981\u4F7F\u7528\u7684\u5B9E\u4F53\u7C7B\u578B 
            // \u8BE5\u7C7B\u578B\u5B9E\u4F53\u5177\u6709\u6784\u9020\u53C2\u6570\uFF0C\u5B9E\u9645\u7684\u914D\u7F6E\u4FE1\u606F\u53EF\u4EE5\u4ECE\u5916\u5C42\u673A\u5236\u83B7\u5F97\u3002 
            singleton.dictionary.Add(typeof(IWeatherReader), new TypeConstructor( 
            typeof(WeatherReaderImpl), &quot;s&quot;)); 
            Instance = singleton; 
        }

        /// &lt;summary&gt; 
        /// \u6839\u636E\u6CE8\u518C\u7684\u76EE\u6807\u62BD\u8C61\u7C7B\u578B\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u4F53\u7C7B\u578B\u53CA\u5176\u6784\u9020\u53C2\u6570\u6570\u7EC4 
        /// &lt;/summary&gt; 
        /// &lt;param &gt;&lt;/param&gt; 
        /// &lt;returns&gt;&lt;/returns&gt; 
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

    public class Assembler&lt;T&gt; where T : class 
    { 
        /// &lt;summary&gt; 
        /// \u5176\u5B9ETypeMap\u5DE5\u7A0B\u4E0A\u672C\u8EAB\u5C31\u662F\u4E2A\u9700\u8981\u6CE8\u5165\u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE\u914D\u7F6E\u7CFB\u7EDF\u83B7\u5F97\uFF0C 
        /// \u8FD9\u91CC\u4E3A\u4E86\u793A\u4F8B\u7684\u65B9\u4FBF\uFF0C\u624B\u5DE5\u914D\u7F6E\u4E86\u4E00\u4E9B\u7C7B\u578B\u6620\u5C04\u4FE1\u606F\u3002 
        /// &lt;/summary&gt; 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Unit Test</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using Microsoft.VisualStudio.TestTools.UnitTesting; 
using VisionLogic.Training.DependencyInjection.Scenario; 
namespace VisionLogic.Training.DependencyInjection.Scenario.UnitTest 
{ 
    [TestClass()] 
    public class AssemblerTest 
    { 
        [TestMethod] 
        public void Test() 
        { 
            IWeatherReader reader = new Assembler&lt;IWeatherReader&gt;().Create(); 
            Assert.IsNotNull(reader); 
            Assert.AreEqual&lt;System.Type&gt;(typeof(WeatherReaderImpl), reader.GetType()); 
        } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ECF\u5178\u65B9\u5F0F\u4E0B\u7684\u6CE8\u5165\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7ECF\u5178\u65B9\u5F0F\u4E0B\u7684\u6CE8\u5165\u5B9E\u73B0" aria-hidden="true">#</a> \u7ECF\u5178\u65B9\u5F0F\u4E0B\u7684\u6CE8\u5165\u5B9E\u73B0</h2><p>\u5728\u5B8C\u6210\u4E86 Assembler \u8FD9\u4E2A\u57FA\u7840\u73AF\u5883\u540E\uFF0C\u5C31\u662F\u600E\u4E48\u6CE8\u5165\u7684\u95EE\u9898\u4E86\uFF0C\u4E0B\u9762\u662F\u5BF9\u4E09\u79CD\u65B9\u5F0F\u7684\u7ECF\u5178\u65B9\u6CD5\u5B9E\u73B0\uFF1A</p><h3 id="constructor-injection-\u65B9\u5F0F-\u6784\u9020\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#constructor-injection-\u65B9\u5F0F-\u6784\u9020\u6CE8\u5165" aria-hidden="true">#</a> Constructor Injection \u65B9\u5F0F \uFF08\u6784\u9020\u6CE8\u5165\uFF09</h3><p>Unit Test - Constructor</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using Microsoft.VisualStudio.TestTools.UnitTesting; 
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
            IWeatherReader reader = new Assembler&lt;IWeatherReader&gt;().Create(); 
            Client client = new Client(reader); 
            Assert.IsNotNull(client); 
        } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setter-injection-\u65B9\u5F0F-setter-\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#setter-injection-\u65B9\u5F0F-setter-\u6CE8\u5165" aria-hidden="true">#</a> Setter Injection \u65B9\u5F0F \uFF08Setter \u6CE8\u5165\uFF09</h3><p>Unit Test - Setter</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using Microsoft.VisualStudio.TestTools.UnitTesting; 
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
            IWeatherReader reader = new Assembler&lt;IWeatherReader&gt;().Create(); 
            Client client = new Client(); 
            client.Reader = reader; 
            Assert.IsNotNull(client.Reader); 
        } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface-injection-\u65B9\u5F0F-\u63A5\u53E3\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#interface-injection-\u65B9\u5F0F-\u63A5\u53E3\u6CE8\u5165" aria-hidden="true">#</a> Interface Injection \u65B9\u5F0F \uFF08\u63A5\u53E3\u6CE8\u5165\uFF09</h3><p>Unit Test - Interface</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using Microsoft.VisualStudio.TestTools.UnitTesting; 
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
            IWeatherReader reader = new Assembler&lt;IWeatherReader&gt;().Create(); 
            Client client = new Client(); 
            IClientWithWeatherReader clientWithReader = client; 
            clientWithReader.Reader = reader; 
            Assert.IsNotNull(clientWithReader.Reader); 
        } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="attribute-injection-\u65B9\u5F0F-\u7528\u5C5E\u6027\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#attribute-injection-\u65B9\u5F0F-\u7528\u5C5E\u6027\u6CE8\u5165" aria-hidden="true">#</a> Attribute Injection \u65B9\u5F0F\uFF08\u7528\u5C5E\u6027\u6CE8\u5165\uFF09</h3><p>C# \u8FD8\u53EF\u4EE5\u901A\u8FC7 Attribute \u6CE8\u5165\uFF0CEnterprise Library \u4E2D\u5927\u91CF\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u5C06\u5404\u79CD\u7B2C\u4E09\u65B9\u673A\u5236\u52A0\u5165\u5230\u7C7B\u7CFB\u7EDF\u4E2D\u3002\u4F8B\u5982\uFF1A</p><ul><li>\u8FD0\u884C\u76D1\u63A7\u9700\u8981\u7684 Performance Counter\u3002</li><li>\u7528\u4E8E\u6784\u9020\u8FC7\u7A0B\u7684\u6307\u6807\u4FE1\u606F\u3002</li><li>\u7528\u4E8E\u65E5\u5FD7\u3001\u5BC6\u7801\u5904\u7406\u3002</li><li>\u7B49\u7B49\u3002</li></ul><p>\u6CE8\uFF1AJava \u8BED\u8A00\u867D\u7136\u53D1\u5C55\u6BD4\u8F83\u6162\uFF0C\u4F46\u5728 Java 5 \u79CD\u4E5F\u63D0\u4F9B\u4E86\u7C7B\u4F3C\u7684 Annotation \u7684\u673A\u5236\uFF0C\u6362\u4E86\u4E2A\u540D\u5B57\u7701\u53BB\u88AB\u8BC4\u4F30\u4E3A \u201C\u6284\u88AD\u201D \u7684\u5ACC\u7591\u3002\uFF09 \u4E3A\u4E86\u6F14\u793A\u65B9\u4FBF\uFF0C\u4E0B\u9762\u8BBE\u8BA1\u4E00\u4E2A\u5E94\u7528\u60C5\u666F\uFF1A</p><h2 id="\u5E94\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E94\u7528\u5B9E\u4F8B</h2><h3 id="scenario" tabindex="-1"><a class="header-anchor" href="#scenario" aria-hidden="true">#</a> Scenario</h3><p>1\u3001 \u5E94\u7528\u9700\u8981\u4E00\u4E2A\u96C6\u4E2D\u7684\u673A\u5236\u4E86\u89E3\u7CFB\u7EDF\u4E2D\u5B9E\u9645\u521B\u5EFA\u8FC7\u591A\u5C11\u4E2A\u7279\u5B9A\u7C7B\u578B\u5BF9\u8C61\u7684\u5B9E\u4F8B\uFF0C\u7528\u4E8E\u8BC4\u4F30\u7CFB\u7EDF\u7684 Capacity \u8981\u6C42\u3002 2\u3001 \u4E3A\u4E86\u9632\u6B62\u7CFB\u7EDF\u8D44\u6E90\u88AB\u7528\u5C3D\uFF0C\u9700\u8981\u63A7\u5236\u6BCF\u7C7B\u5BF9\u8C61\u5B9E\u4F8B\u6570\u91CF\u3002</p><p>\u600E\u4E48\u5B9E\u73B0\u5462\uFF1F\u5982\u4E0B\uFF1A 1\u3001\u589E\u52A0\u4E00\u4E2A\u5185\u5B58\u7684\u6CE8\u518C\u5668\uFF0C\u767B\u8BB0\u6BCF\u4E2A\u7C7B\u5DF2\u7ECF\u521B\u5EFA\u8FC7\u7684\u5B9E\u4F8B\u5B9E\u4F8B\u6570\u91CF\u3002 2\u3001\u7136\u540E\u7ED9\u6BCF\u4E2A\u7C7B\u8D34\u4E2A\u6807\u7B7E\u2014\u2014Attribute\uFF0C\u8BA9 Assembler \u5728\u751F\u6210\u7684\u5BF9\u8C61\u7684\u65F6\u5019\u6839\u636E\u6807\u7B7E\u7684\u5185\u5BB9\u628A\u5BF9\u8C61\u767B\u8BB0\u5230\u6CE8\u518C\u5668\u3002</p><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><p>\u5B9A\u4E49\u62BD\u8C61\u4E1A\u52A1\u5B9E\u4F53</p><p>C#</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using System; 
namespace VisionLogic.Training.DependencyInjection.Scenario.Attributer 
{ 
    /// &lt;summary&gt; 
    /// \u62BD\u8C61\u7684\u5904\u7406\u5BF9\u8C61 
    /// &lt;/summary&gt; 
    public interface IObjectWithGuid 
    { 
        string Guid { get; set;} 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4E49\u9700\u8981\u6CE8\u5165\u7684\u9650\u5236\u63A5\u53E3\uFF0C\u5E76\u7528\u4E00\u4E2A Attribute \u7BA1\u7406\u5B83 C#</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using System; 
namespace VisionLogic.Training.DependencyInjection.Scenario.Attributer 
{ 
    /// &lt;summary&gt; 
    /// \u9700\u8981\u6CE8\u5165\u7684\u7528\u4EE5\u9650\u5236\u6700\u5927\u6570\u91CF\u7684\u63A5\u53E3 
    /// &lt;/summary&gt; 
    public interface ICapacityConstraint 
    { 
        int Max { get;} 
    } 

    public class CapacityConstraint : ICapacityConstraint 
    { 
        private int max; 
        public CapacityConstraint(){this.max = 0;} // \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u9650\u5236 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Assembler \u4E0A\u589E\u52A0\u901A\u8FC7 Attribute \u6CE8\u5165\u9650\u5236\u7684\u54CD\u5E94\u3002</p><div class="custom-container note"><p class="custom-container-title">note</p><p>\u8FD9\u91CC\u548C\u4E0A\u4E00\u4E2A\u6BD4\u5C11\u4E86\u4E00\u4E2ATMap\uFF0C\u4E5F\u5C31\u662F\u865A\u62DF-\u5B9E\u73B0\u7684\u6620\u5C04\u3002 \u6839\u636E\u6211\u4E2A\u4EBA\u7406\u89E3\uFF0C\u4E0A\u9762\u670D\u52A1\u662F\u8C03\u7528\u865A\u62DF\u63A5\u53E3\uFF0C\u56E0\u6B64\u9700\u8981\u8FD9\u4E2A\u6620\u5C04\u6765\u5B8C\u6210\u540E\u9762Assembler\u7684\u5B9E\u4F53\u7C7B\u521B\u5EFA\u3002\u4F46\u662F\u5BF9\u4E8E\u5C5E\u6027\uFF0C\u7528\u6237\u4F7F\u7528\u7684\u65F6\u5019\u76F4\u63A5\u8C03\u7528\u5C5E\u6027\uFF0C\u5C31\u4E0D\u9700\u8981\u8FD9\u4E2A\u6620\u5C04\u4E86</p></div><p>C#</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using System; 
using System.Collections.Generic; 
namespace VisionLogic.Training.DependencyInjection.Scenario.Attributer 
{ 
    public class Assembler 
    { 
        /// &lt;summary&gt; 
        /// \u767B\u8BB0\u76F8\u5173\u7C7B\u578B\u5BF9\u201C\u6700\u5927\u5BB9\u91CF\u201D\u5C5E\u6027\u7684\u4F7F\u7528\u60C5\u51B5 
        /// &lt;/summary&gt; 
        private IDictionary&lt;Type, ConstraintAttribute&gt; attributeRegistry = new Dictionary&lt;Type, ConstraintAttribute&gt;(); 

        /// &lt;summary&gt; 
        /// \u767B\u8BB0\u6BCF\u4E2A\u7C7B\u578B\uFF08\u5982\u987B\u53D7\u5230\u201C\u6700\u5927\u5BB9\u91CF\u201D\u5C5E\u6027\u9650\u5236\u7684\u8BDD\uFF09\uFF0C\u5B9E\u9645\u5DF2\u7ECF\u521B\u5EFA\u7684\u5BF9\u8C61\u6570\u91CF 
        /// &lt;/summary&gt; 
        private IDictionary&lt;Type, int&gt; usageRegistry = new Dictionary&lt;Type, int&gt;(); 
        public T Create&lt;T&gt;() where T : IObjectWithGuid, new() 
        { 
            ICapacityConstraint constraint = GetAttributeDefinedMax(typeof(T)); 
            if ((constraint == null) || (constraint.Max &lt;= 0)) // max &lt;= 0 \u4EE3\u8868\u662F\u4E0D\u9700\u8981\u9650\u5236\u6570\u91CF\u7684\u3002 
                return InternalCreate&lt;T&gt;(); 
            else 
            { 
                if (usageRegistry[typeof(T)] &lt; constraint.Max) // \u68C0\u67E5\u662F\u5426\u8D85\u51FA\u5BB9\u91CF\u9650\u5236 
                { 
                    usageRegistry[typeof(T)]++; // \u66F4\u65B0\u4F7F\u7528\u60C5\u51B5\u6CE8\u518C\u4FE1\u606F 
                    return InternalCreate&lt;T&gt;(); 
                } 
                else 
                    return default(T); 
            } 
        } 

        // helper method 
        // \u76F4\u63A5\u751F\u6210\u7279\u5B9A\u5B9E\u4F8B\uFF0C\u5E76setter \u65B9\u5F0F\u6CE8\u5165\u5176guid\u3002 
        private T InternalCreate&lt;T&gt;() 
        where T : IObjectWithGuid, new() 
        { 
            T result = new T(); 
            result.Guid = Guid.NewGuid().ToString(); 
            return result; 
        } 

        /// helper method. 
        // \u83B7\u53D6\u7279\u5B9A\u7C7B\u578B\u6240\u5B9A\u4E49\u7684\u6700\u5927\u6570\u91CF, \u540C\u65F6\u89C6\u60C5\u51B5\u7EF4\u62A4attributeRegistry \u548CusageRegistry \u7684\u6CE8\u518C\u4FE1\u606F\u3002 
        private ICapacityConstraint GetAttributeDefinedMax(Type type) 
        { 
            ConstraintAttribute attribute = null; 
            if (!attributeRegistry.TryGetValue(type, out attribute)) //\u65B0\u7684\u5F85\u521B\u5EFA\u7684\u7C7B\u578B 
            { 
                // \u586B\u5145\u76F8\u5173\u7C7B\u578B\u7684\u201C\u6700\u5927\u5BB9\u91CF\u201D\u5C5E\u6027\u6CE8\u518C\u4FE1\u606F 
                object[] attributes = type.GetCustomAttributes(typeof(ConstraintAttribute), false); 
                if ((attributes == null) || (attributes.Length &lt;= 0)) 
                    attributeRegistry.Add(type, null); 
                else 
                { 
                    attribute = (ConstraintAttribute)attributes[0]; 
                    attributeRegistry.Add(type, attribute); 
                    usageRegistry.Add(type, 0); // \u540C\u65F6\u8865\u5145\u8BE5\u7C7B\u578B\u7684\u4F7F\u7528\u60C5\u51B5\u6CE8\u518C\u4FE1\u606F 
                } 
            } 
            if (attribute == null) 
                return null; 
            else 
                return attribute.Capacity; 
        } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u65B9\u6848\u7684\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u65B9\u6848\u7684\u6D4B\u8BD5" aria-hidden="true">#</a> \u5BF9\u65B9\u6848\u7684\u6D4B\u8BD5</h3><p>C#</p><div class="language-C# ext-C# line-numbers-mode"><pre class="language-C#"><code>using Microsoft.VisualStudio.TestTools.UnitTesting; 
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

        [Constraint(2)] // \u901A\u8FC7\u5C5E\u6027\u6CE8\u5165\u9650\u5236 
        public class ObjectWithGuidImplA : ObjectWithGuidBase { } 
        [Constraint(0)] // \u901A\u8FC7\u5C5E\u6027\u6CE8\u5165\u9650\u5236 
        public class ObjectWithGuidImplB : ObjectWithGuidBase { } 
        [Constraint(-5)] // \u901A\u8FC7\u5C5E\u6027\u6CE8\u5165\u9650\u5236 
        public class ObjectWithGuidImplC : ObjectWithGuidBase { } 
        public class ObjectWithGuidImplD : ObjectWithGuidBase { } 

        [TestMethod] 
        public void Test() 
        { 
            Assembler assembler = new Assembler(); 
            for (int i = 0; i &lt; 2; i++) 
            Assert.IsNotNull(assembler.Create&lt;ObjectWithGuidImplA&gt;()); 
            Assert.IsNull(assembler.Create&lt;ObjectWithGuidImplA&gt;()); // \u6700\u591A\u4E24\u4E2A 
            for (int i = 0; i &lt; 100; i++) 
            Assert.IsNotNull(assembler.Create&lt;ObjectWithGuidImplB&gt;()); // \u4E0D\u9650\u5236 
            for (int i = 0; i &lt; 100; i++) 
            Assert.IsNotNull(assembler.Create&lt;ObjectWithGuidImplC&gt;()); // \u4E0D\u9650\u5236 
            for (int i = 0; i &lt; 100; i++) 
            Assert.IsNotNull(assembler.Create&lt;ObjectWithGuidImplD&gt;()); // \u4E0D\u9650\u5236 
        } 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),d=[r];function a(t,v){return i(),n("div",null,d)}var m=e(l,[["render",a],["__file","CSharp\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165.html.vue"]]);export{m as default};
