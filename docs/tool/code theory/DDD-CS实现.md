---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - code theory
---


# DDD-CS 实现

> 本文是实现领域驱动设计 (DDD) 的实用指南. 虽然在实现中依赖了 ABP 框架, 但是本文中的概念, 理论和设计模式同样适用于其它类型的项目, 不仅限于. Net 项目.

[](#总述) 总述
-

这是本指南的重要部分, 我们将通过示例介绍并解释一些 **明确的规则**, 在实现领域驱动设计时, 你可以遵循这些规则并将其应用于解决方案中.

### [](#领域) 领域

示例中会使用一些概念, 这些概念在 Github 中被使用, 例如, `Issue`(问题), `Repository`(仓库), `Label`(标签) 和 `User`(用户). 下图中展示了一些聚合, 聚合根, 实体, 值对象以及它们之间的关系:

[![](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-example-domain-schema.png)](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-example-domain-schema.png "domain driven design example schema")

**问题聚合** 由 `Issue` 聚合根, 及其包含的 `Comment` 和 `IssueLabel` 集合组成. 我们将重要讨论 `Issue` 聚合根:

[![](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-issue-aggregate-diagram.png)](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-issue-aggregate-diagram.png "domain-driven-design-issue-aggregate-diagram")

### [](#aggregates)Aggregates

如前所述, [聚合](https://docs.abp.io/zh-Hans/abp/latest/Entities) 是由 **聚合根** 包裹在一起的一组对象 (实体和值对象). 本节将介绍于聚合的有关原理和规则.

> 后面的文档中, 我们将使用 _实体_ 替代 _聚合根_ 或 _子集合实体_ , 除非我们明确指明使用 _聚合根_ 或 _子集合实体_ .

#### [](#聚合-聚合根-原则) 聚合 / 聚合根 原则

##### [](#业务规则) 业务规则

实体负责实现与其自身属性相关的业务规则. 同时 _ 聚合根实体 _ 还负责它们的子集合实体.

聚合应该通过领域规则和约束来保证自身的 **完整性** 和 **有效性**. 这意味着, 实体与 DTO 是不同的, 实体应该比 DTO 多了些 **实现业务逻辑的方法**. 我们应该尽可能地在实体上实现业务规则.

##### [](#独立单元) 独立单元

应该在一个独立的单元中完成 **一个聚合的获取及保存**, 包括自身属性及其子集合. 假如我们需要在 `Issue` 中添加一个新的 `Comment`, 步骤如下:

* 从数据库中获取一个 `Issue` 对象, 包括所有子集合 (`Comments` 和 `IssueLabels`).
* 使用 `Issue` 实体上的添加新 `Comment` 的方法, 例如 `Issue.AddComment(...);`.
* 在数据库的单次操作中完成整个 `Issue` 对象 (包括子集合) 的保存.

对于在关系型数据库上用过 **EF Core** 的开发人员会认为, 获取 `Issue` 的同时加载子集合没有必要并且还影响性能. 为什么不使用 SQL 语句 `Insert` 来直接插入记录呢?

这样做的原因是我们需要执行业务规则来保证数据的一致性和完整性. 假如有一个业务规则:" 用户不能对已锁定的问题进行评论 ". 那如何在不查询数据库的情况下, 获取问题是否已被锁定? 所以, 只有关联的对象都被加载了的时候, 我们才可以执行业务规则.

另外, 使用 **MongoDB** 的开发人员就认为此原则很好理解. 在 MongoDB 中, 聚合对象 (包含子集合) 会被保存到一个 `collection` 中. 因而, 无需任何其它配置, 就可以实现查询一个聚合, 同时所有子对象.

ABP 框架有助于你实现这一原则

**例子: 问题追加评论**

通过 `_issueRepository.GetAsync` 方法来获取 `Issue` 对象时, 默认就已经加载了所有子集合. 对于 MongoDB 很简单, EF Core 则需要额外配置, 一旦配置, ABP 仓储类会自动处理.`_issueRepository.GetAsync` 方法还有个可选参数 `includeDetails`, 可以传 `false`, 手动禁止加载子集合.

> 如何配置及替代方案, 请参考 [EF Core document](https://docs.abp.io/zh-Hans/abp/latest/Entity-Framework-Core) 的 _ 加载关联实体 _ 章节.

`Issue.AddComment` 接收两个参数, 分别是 `userId` 和 `text`, 再执行自己的业务规则, 最终将评论添加到 `Issue` 的评论集合中.

最后, 我们使用 `_issueRepository.UpdateAsync` 方法, 将对象保存到数据库中.

> EF Core 具有 **变更追踪** 的功能, 因此, 不需要调用 `_issueRepository.UpdateAsync` 方法. ABP 的工作单元会再方法结束时, 自动执行 `DbContext.SaveChanges()` 的. 如果使用 MongoDB 则需要显式手动调用.
>
> 因此, 当需要额外编写仓储层的实现, 应该在实体变化时始终调用 `UpdateAsync` 方法.

##### [](#事务边界) 事务边界

通常认为一个聚合就是一个事务边界. 如果用例只涉及单个聚合, 那么读取及修改就是一个操作单元. 对聚合内所有对象的修改都将作为原子操作一起保存, 无需显式创建数据库事务.

但是, 实际上, 可能需要在一个用例中更改 **多个聚合对象的实例**, 并且还要求创建事务来保证 **原子更新** 和 **数据一致性**. 因此, ABP 框架提供了为每个用例 (应用服务中的方法), 可以创建显式事务的功能. 有关更多信息, 请参见文档 [工作单元](https://docs.abp.io/zh-Hans/abp/latest/Unit-Of-Work).

##### [](#序列化) 序列化

一个聚合 (包含聚合根及子集合) 可以被序列化或反序列化. 例如, MongoDB 在保存对象到数据库时, 会将聚合序列化为 JSON 文件, 读取时再进行反序列化.

> 使用关系型数据库 + ORM 时, 这个原则不是必须的, 但是, 这是领域驱动设计的重要实践.

以下规则遵循序列化原则

#### [](#聚合-聚合根规则及最佳实践) 聚合 / 聚合根规则及最佳实践

以下规则是遵循上述原则.

##### [](#聚合间只通过id相互引用) 聚合间只通过 ID 相互引用

聚合应该只引用其它聚合的 ID, 也就是说, 不允许定义导航属性关联至其它聚合.

* 该规则遵循了可序列化原则.
* 该规则还可以避免不同聚合彼此间的相互操作以及业务逻辑的暴露.

下图中, 可以看到两个聚合根,`GitRepository` 和 `Issue` :

[![](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-reference-by-id-sample.png)](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-reference-by-id-sample.png "domain-driven-design-reference-by-id-sample")

* `GitRepository` 不应该包含 `Issue` 的集合, 因为 `Issue` 属于不同的聚合.
* `Issue` 不应该包含导航属性至 `GitRepository` . 因为 `GitRepository` 属于不同的聚合.
* `Issue` 可以有 `RepositoryId` 的引用.

因此, 若要获取 `Issue` 关联的 `GitRepository` 对象, 需要使用 `Issue` 的 `RepositoryId` 在数据库中进行一次查询.

###### [](#对于ef-core和关系型数据库) 对于 EF Core 和关系型数据库

MongoDB 中不适合使用导航属性或集合的, 原因是: 当前源聚合对象会被序列化为 JSON, 其中会保存导航目标聚合的副本.

在使用 EF Core 在关系型数据库上进行操作时, 开发者可能认为此规则没必要. 但是我们认为这是一条非常重要的规则, 有助于降 **低领域的复杂性** 减少风险. 我们强烈建议遵守此规则. 如果你确定要忽略此规则, 请参见上面的 " 关于数据库独立原理的讨论 " 章节.

##### [](#保持聚合尽量的小) 保持聚合尽量的小

保持聚合简单而小巧是一个比较好的做法. 因为聚合的读取与保存是一个整体, 当处理较大对象时会出现性能问题, 如下所示:

[![](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-aggregate-keep-small.png)](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-aggregate-keep-small.png "domain-driven-design-aggregate-keep-small")

角色聚合包含 `UserRole` 值对象集合, 方便查询该角色下有哪些用户. 注意,`UserRole` 不是聚合, 并且也遵守了 _ 聚合间只通过 ID 相互引用 _ 的规则. 但是在现实场景中, 一个角色可能被给成千上万个用户, 当从数据库中加载一个角色时, 会关联加载数千个用户对象, 这里会有 严重的性能问题.

反过来看,`User` 也可以有 `Roles` 集合, 现实中一个用户不会具有太多的角色, 因此采用 `User` 关联 `Roles` 这种方式比较合适.

当使用 **非关系型数据库时**,`User` 和 `Role` 同时都有关联子集合, 会出现另外一个问题. 相同的记录会被重复记录在不同的集合中, 并且难以保证数据一致性 (需要添加记录到 `User.Roles` 和 `Role.Users` 中)

因此, 请根据以下注意事项来确定聚合的边界:

* 同时被使用的对象.
* 查询 (读取 / 保存) 性能和内存消耗.
* 数据完整性, 有效性, 一致性.

现实情况:

* 大多数聚合根 **没有子集合**.
* 子集合的数量控制在 **100-150 个**. 如果集合数量超过 150 个, 考虑将子对象改成聚合根.

##### [](#聚合根-实体的主键) 聚合根 / 实体的主键

* 聚合根通常具有唯一的标识符 ID (主键: PK). 我们建议使用 `Guid` 作为聚合根的主键类型. (原因请参见 [Guid 生成文档](https://docs.abp.io/zh-Hans/abp/latest/Guid-Generation)).
* 聚合中的实体 (非聚合根) 可以使用联合主键.

如图所示:

[![](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-entity-primary-keys.png)](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-entity-primary-keys.png "domain-driven-design-entity-primary-keys")

* `Organization` 有一个 `Guid` 的标识符 (`Id`).
* `OrganizationUser` 是一个子集合, 使用 `OrganizationId` 和 `UserId` 作为联合主键.

并不是所有的子集合的主键都是联合主键, 有些情况下, 可以使用单独的 `Id` 作为主键.

> 联合主键实际上时关系型数据库中的概念, 因为子集合对象有与之对应的数据库表, 而表也要有主键. 但是在非关系型数据库中, 无需为子集合实体定义主键, 因为它们本身就已属于一个聚合根.

##### [](#聚合根-实体的构造函数) 聚合根 / 实体的构造函数

构造函数是实体生命周期的开始被执行. 以下是构造函数的编写建议:

* 将实体的 **必填属性** 作为构造函数参数, 这样可以创建一个 **有效 (符合规则) 的实体**. 另外, 将非必填属性作为构造函数的可选参数.
* 参数必须 **检查有效性**.
* 所有 **子集合** 对象必须被初始化.

**示例: `Issue` (聚合根) 构造函数**

* `Issue` 通过构造函数的参数, 对必填属性进行赋值, 而从创建一个有效的实体对象.
* 构造函数对参数进行 **验证** (`Check.NotNullOrWhiteSpace(...)` 必填项为空, 抛出异常).
* 初始化子集合. 在实例化 `Issue` 对象后, 访问 `Labels` , 不会出现空指针异常.
* 构造函数还将 `id` 传递给父类, 不要在构造函数内生成 `Guid`(参阅 [Guid 生成](https://docs.abp.io/zh-Hans/abp/latest/Guid-Generation)).
* 为 ORM 保留 **私有的无参构造函数**. 防止编写代码时, 意外使用了无参构造函数.

> 参见 [实体](https://docs.abp.io/zh-Hans/abp/latest/Entities) 文档, 了解更多使用 ABP 框架创建实体的信息.

##### [](#实体属性访问器和方法) 实体属性访问器和方法

上面的示例中, 我们在构造函数中对 `Title` 进行了非空检查. 但是开发人员可以再次对 `Title` 进行赋值.

如果我们使用 **公开的属性**, 则无法在实体控制数据的 **有效性** 和 **完整性**. 建议:

* 如果某个属性具有业务逻辑, 则将该属性的 **setter** 改为私有.
* 定义公开的方法来修改属性.

**示例: 提供方法修改属性**

* `RepositoryId` setter 是私有的. 创建后无法变更, 业务规则不允许将已有的问题移到其它仓库.
* `Title` setter 是私有的. 它的修改时需要加以验证.
* `Text` 和 `AssignedUserId` setter 是公开的. 因为业务规则允许它们为空或任意值. 我们认为没必要将它们改为私有的, 如果将来业务发生变化, 再将 setter 改为私有, 并提供公开的方法进行修改. 另外实体属于领域层, 不会直接暴露属性给应用层 (或其它层), 目前将其公开不是什么大问题.
* `IsClosed` 和 `IssueCloseReason` 它们是一组属性. 定义 `Close` 和 `ReOpen` 方法来同时对这两个属性进行赋值. 这样可以防止问题被无故关闭.

##### [](#业务逻辑与实体异常) 业务逻辑与实体异常

对实体进行验证, 或执行业务逻辑时, 通常需要抛出异常:

* 领域中定义的 **特定的异常**.
* 实体方法中 **抛出的异常**.

**示例**

这里有两个业务规则:

* 已锁定的问题无法重新开启.
* 无法锁定已开打的问题.

当违反业务规则时,`Issue` 会抛出 `IssueStateException` 异常:

抛出异常会引发两个问题:

1. 当异常发生时, **用户** 应该看到异常 (错误) 信息吗? 如果需要看到, 异常消息如何实现本地化? 实体中无法注入 [本地化](https://docs.abp.io/zh-Hans/abp/latest/Localization) 的 `IStringLocalizer` 接口.
2. 对于 Web 应用或 HTTP API, 应向客户端返回什么 **HTTP 状态代码**.

ABP 框架的 [异常处理](https://docs.abp.io/zh-Hans/abp/latest/Exception-Handling) 可以解决上述问题.

**示例: 使用异常编码**

* `IssueStateException` 继承至 `BusinessException` . 对于 `BusinessException` 的派生类, ABP 框架默认返回的 HTTP 状态码是 403 (默认是服务器内部错误 状态码 500)
* 将 `code` 作为 Key, 在本地化资源中查找对应的文字.

现在, 我们修改 `ReOpen` 方法:

> 使用常量而不是魔法字符串.

在本地化资源文件中添加对应的记录:

* 异常发生时, ABP 将自动使用本地化消息 (基于当前语言).
* 异常编码 (`IssueTracking:CanNotOpenLockedIssue` ) 会被发送到客户端. 同样可以以编程方式处理此异常.

> 你可以无需定义 `IssueStateException`, 直接抛出 `BusinessException` 异常. 详细信息, 参见 [异常处理文档](https://docs.abp.io/zh-Hans/abp/latest/Exception-Handling)

##### [](#实体中业务逻辑依赖外部服务时) 实体中业务逻辑依赖外部服务时

仅依赖实体本身的属性执行的业务规非常简单. 但是有时候, 复杂的业务逻辑会 **查询数据库** 或使用 [依赖注入](https://docs.abp.io/zh-Hans/abp/latest/Dependency-Injection) 中的其它服务, 这该怎么办? 注意: **实体是无法注入服务的**.

实现这种业务逻辑有两种方式:

* 将依赖的服务以 **方法的参数**, 传递到实体的业务逻辑方法中.
* 定义一个 **领域服务**.

领域服务我们后面再说. 我们先看看在实体类中如何实现:

**示例: 业务规则: 不允许将 3 个以上未解决的问题关联到一个用户**

* `AssignedUserId` 私有的属性 setter. 此属性只能通过 `AssignToAsync` 和 `CleanAssignment` 方法来修改.
* `AssignToAsync` 通过 `user.Id` 属性获取一个 `AppUser` 实体.
* `IUserIssueService` 是获取用户未解决问题的服务.
* `AssignToAsync` 当不满足业务规则时抛出异常.
* 最后, 符合规则, 就对属性 `AssignedUserId` 进行赋值.

这样就解决了将问题关联到用户时, 需要调用外部服务的问题, 但是它也存在几个问题:

* 实体 **依赖了外部服务**, 实体变得 **复杂**.
* 实体调用变的复杂. 在调用 `AssignToAsync` 方法时还需要传递 `IUserIssueService` 服务.

实现这种业务逻辑另外一种方案, 使用领域服务, 后面将详细说明.

### [](#仓储) 仓储

[仓储](https://docs.abp.io/zh-Hans/abp/latest/Repositories) 是一个类集合的接口, 它通常被领域层或应用层调用, 负责访问持久化系统 (数据库), 读取写入业务对象 (聚合).

仓储的原则:

* 在 **领域层** 中定义仓储接口, 因为仓储会被领域层或应用层调用, 在 **基础设施层中实现** (_EntityFrameworkCore_ 项目).
* 仓储中 **不要写任何业务逻辑**.
* 仓储接口不依赖 **数据库提供程序 / ORM**. 例如, 不要在仓储中返回 `DbSet` 类型, 因为 `DbSet` 是 EF Core 中的对象.
* **仅为聚合根定义仓储**, 非聚合根对象不要提供仓储, 因为子集合可以通过聚合根来进行持久化.

#### [](#仓储中不要写任何业务逻辑) 仓储中不要写任何业务逻辑

我们经常不小心把业务逻辑编写到了仓储层.

**示例: 从仓储中获取非活动的问题**

`IIssueRepository` 继承至 `IRepository<...>` 接口, 并新增一个新接口 `GetInActiveIssuesAsync`. 此仓储为聚合根 `Issue` 提供查询的实现.

(上面的属性仅为了演示此示例)

原则要求仓储不包含业务逻辑, 上面的示例 " **什么是非活动的问题?**" 这个属于业务规则吗?

(使用 EF Core 来实现. 如何使用 EF Core 实现仓储, 请参见 [EF Core 集成文档](https://docs.abp.io/zh-Hans/abp/latest/Entity-Framework-Core) )

来看一下 `GetInActiveIssuesAsync` 的实现, 可以看到定义了一个 **非活动问题的业务规则**:

* 是 _open_ 的 (非 _IsClosed_ )
* 没有关联到任何人
* 创建时间大于 30 天
* 最近 30 天没有评论

这个业务逻辑就被实现在了仓储内部, 当我们需要重用这个业务规则时就会出现问题.

例如: 我们需要再实体 `Issue` 上添加一个方法来判断是否非活动 `bool IsInActive()`, 以方便我们在 `Issue` 实例上获取.

代码如下:

我们需要拷贝代码来实现, 如果将来业务规则发送变化, 我们就必须修改这两处的代码, 这样做非常危险.

这里有一个很好的解决方案, 就是使用 _ 规约模式 _.

### [](#规约模式) 规约模式

[规约](https://docs.abp.io/zh-Hans/abp/latest/Specifications) 是一种 **强命名**, **可重用**, **可组合**, **可测试** 的实体过滤器.

ABP 框架提供了基础设施来轻松定义规约类, 你可以在代码中方便使用. 我们来将非活动问题使用规约方式实现:

基类 `Specification<T>` 通过表达式简化了创建规约的过程, 仅需要将仓储中的表达式迁移至规约中.

现在, 我们可以在 `Issue` 和 `EfCoreIssueRepository` 中重用规约 `InActiveIssueSpecification` 了.

#### [](#在实体内使用规约) 在实体内使用规约

`Specification` 类提供了一个 `IsSatisfiedBy` 方法, 在实例对象上应用规约检查, 判断是否满足规约的要求. 代码如下:

实例化一个新的规约 `InActiveIssueSpecification` 实例, 并通过 `IsSatisfiedBy` 方法进行规约检查.

#### [](#在仓储内使用规约) 在仓储内使用规约

首先, 我们先修改一下仓储接口:

先将 `GetInActiveIssuesAsync` 方法改名为 `GetIssuesAsync` , 因为我们改为使用规约方式, 现在就无需为不同的查询条件创建不同的接口方法 (例如:`GetAssignedIssues(...)`,`GetLockedIssues(...)`)

再修改下仓储实现:

由于 `ToExpression()` 方法返回一个表达式, 因此可以直接将其传递给 `Where` 方法来过滤实体.

我们可以在调用 `GetIssuesAsync` 方法时, 传递任何规约的实例.

##### [](#默认仓储使用规约) 默认仓储使用规约

实际上, 我们不必非要创建一个自定义仓储来使用规约方式, 泛型仓储 `IRepository` 同样可以使用规约, 因为 `IRepository` 已扩展了 `IQueryable` 对象, 因此可以在泛型仓储上使用, 代码如下:

`AsyncExecuter` 是 ABP 框架提供的一个异步 LINQ 扩展方法 (与 `ToListAsync` 类似), 这个方法不依赖依赖 EF Core, 请参见 [仓储文档](https://docs.abp.io/zh-Hans/abp/latest/Repositories).

#### [](#组合规约) 组合规约

规约强大的能力就是可组合. 假设我们还有一个业务规则:`Issue` 仅在里程碑中才返回 `true`:

此规约与 `InActiveIssueSpecification` 的区别, 它是有参数的. 我们可以组合两种规约来实现获取指定里程碑下的非活动问题列表

上面的示例使用了 `And` 扩展方法来组合规约. 还有更多的组合方法, 如:`Or(...)` 和 `AndNot(...)`.

> 有关 ABP 框架提供的规约更多信息, 请参见 [规约文档](https://docs.abp.io/zh-Hans/abp/latest/Specifications).

### [](#领域服务) 领域服务

领域服务主要来实现本领域的逻辑:

* 依赖 **服务和仓储**.
* 需要使用多个聚合.

领域服务和领域对象一起使用. 领域服务可以获取并返回 **实体**, **值对象** 等, 它们不返回 **DTO**.DTO 属于应用层的一部分.

**示例: 用户关联一个问题**

需要在 `Issue` 实体中实现问题的关联:

现在我们把逻辑迁移到领域服务中实现.

首先, 修改一下 `Issue` 类:

* 删除关联的相关方法.
* 修改属性 `AssignedUserId` 的 setter 为 `internal`, 以允许领域服务可以修改.

下一步是创建一个名为 `IssueManager` 的领域服务, 此领域服务的 `AssignToAsync` 方法负责将问题关联至指定的用户.

`IssueManager` 可以注入其它服务, 来查询指定用户已经关联的未解决问题数量.

> 我们建议使用 `Manager` 后缀来命名领域服务.

这种设计的唯一缺陷是可以在类 `Issue` 外部修改 `Issue.AssignedUserId` 属性. 但是它的访问级别是 `internal` 而非 `public`, 在 `IssueTracking.Domain` 项目内部才能被修改, 我们认为这样是合理的:

* 开发人员清楚领域层的开发规则, 他们会使用 `IssueManager` 来执行业务逻辑.
* 应用层开发人员只能使用 `IssueManager`, 因此他们无法直接修改实体属性.

尽管两种方式有各自的优势, 但我们更喜欢创建领域服务并注入其它服务来执行业务逻辑这种方式.

### [](#应用服务) 应用服务

应用服务是实现 **用例** 的无状态服务. 应用服务通常 **获取并返回 DTO**. 应用服务被展现层所使用, 应用服务 **调用领域对象** (实体, 仓储等) 来实现用例.

应用服务的通用原则:

* 实现特定用例的 **应用程序逻辑**, 不要在应用服务内实现核心领域的逻辑.
* 应用服务的方法 **不要返回实体**. 始终只返回 DTO.

**示例: 用户关联一个问题**

应用服务的方法通常包含三个步骤:

1. 从数据库获取用例所需的领域对象.
2. 使用领域对象 (领域服务, 实体等) 执行业务逻辑.
3. 将实体的变更持久化至数据库.

> 如果使用的是 EF Core, 第三步不是必须的, 因为 EF Core 有追踪实体变化的功能. 如果要利用此功能, 请参阅上面的 " 关于数据库独立原则的讨论 " 章节.

`IssueAssignDto` 是本示例中一个简单的 DTO 对象:

### [](#数据传输对象) 数据传输对象

[DTO](https://docs.abp.io/zh-Hans/abp/latest/Data-Transfer-Objects) 是应用层与展现层间传输数据的简单对象. 应用服务方法获取并返回 Dto.

#### [](#dto通用原则和最佳实践)DTO 通用原则和最佳实践

* DTO 应该是 **可被序列化** 的. 因为大所数情况下, DTO 是通过网络传输的, 因此它应该具有 **无参的构造函数**.
* 不应该包含任何 **业务逻辑**.
* **切勿** 继承或引用 **实体**.

**输入 DTO**(应用服务方法的参数) 与 **输出 DTO** (应用服务方法的返回对象) 具有不同的作用, 因此, 它们应该区别对待.

#### [](#输入dto-最佳实践) 输入 DTO 最佳实践

##### [](#不要在输入dto中定义不使用的属性) 不要在输入 DTO 中定义不使用的属性

**仅** 在输入 DTO 中定义用例 **所需要的属性**！否则, 会造成调用应用服务的客户端产生困惑.

这个规则好像没什么必要, 因为没人会在方法参数 (输入 DTO) 中添加无用的属性. 但是, 有时候, 特别是在重用 DTO 时, 输入 DTO 会包含无用的属性.

##### [](#不要重用输入dto) 不要重用输入 DTO

**为每个用例** (应用服务的方法) 单独定义一个 **专属的输入 DTO**. 否则, 在一些情况下, 会添加一些不被使用的属性, 这样就违反上面的规则: 不要在输入 DTO 中定义不使用的属性.

在两个用例中重用相同的 DTO 似乎很有吸引力, 因为它们的属性是一模一样的. 现阶段它们是一样的, 但是随着业务变化, 可能它们会产生差异, 届时你可能还是需要进行拆分. **和用例间的耦合相比, 代码的复制可能是更好的做法**.

重用输入 DTO 的另外一种方式是 **继承** DTO, 这同样会产生上面描述的问题.

**示例: 用户应用服务**

`UserDto` 作为 `IUserAppService` 所有方法的输入 DTO, 代码如下:

对于上面的示例:

* `Id` 属性在 _Create_ 方法中, 没有被使用, 因为 `Id` 由服务器生成.
* `Password` 属性在 _Update_ 方法中, 没有被使用. 因为有修改密码的单独方法.
* `CreationTime` 属性未被使用, 因为不允许客户端发送创建时间属性, 这个应该由服务器生成.

较好的做法应该这样:

下面是输入 DTO 的定义:

虽然编写了更多的代码, 但是这样可维护性更高.

** 例外情况:** 该规则有一些例外的情况, 例如, 你想开发两个方法, 它们共用相同的输入 DTO(通过继承或重用), 有一个报表页面有多个过滤条件, 多个应用服务使用相同的输入参数返回不同的结果 (如, 大屏展示数据, Excel 报表, csv 报表). 这种情况下, 你是需要修改一个参数, 多个应用服务都应该一起被修改.

##### [](#输入dto中验证逻辑) 输入 DTO 中验证逻辑

* 仅在 DTO 内执行 **简单验证**. 使用数据注解验证属性或通过 `IValidatableObject` 方式.
* **不要执行领域验证**. 例如, 不要在 DTO 中检查用户名是否唯一的验证.

**示例: 使用注解方式**

当输入无效时, ABP 框架会自动验证输入 DTO, 抛出 `AbpValidationException` 异常, 并向客户返回 `400` 的 HTTP 状态码.

> 一些开发人员认为最好将验证规则和 DTO 分离. 我们认为声明性 (数据注解) 方式是比较实用的, 不会引起任何设计问题. 如果你喜欢其它方式, ABP 还支持 [FluentValidation 继承](https://docs.abp.io/zh-Hans/abp/latest/FluentValidation). 有关所有验证的详细文档, 请参见 [验证文档](https://docs.abp.io/zh-Hans/abp/latest/Validation).

#### [](#输出dto最佳实践) 输出 DTO 最佳实践

* 保持 **数量较少** 的输出 DTO, 尽可能 **重用输出 DTO**(例外: 不要将输入 DTO 作为输出 DTO).
* 输出 DTO 可以包含比用例需要的属性 **更多** 的属性.
* 针对 **Create** 和 **Update** 方法, 返回实体的 DTO.

以上建议的原因是:

* 使客户端代码易于开发和扩展:
	* 客户端处理 **相似但不相同** 的 DTO 是有问题的.
	* 将来 UI 或客户端通常会使用到 DTO 上的 **其它属性**. 返回实体的所有属性, 可以在无需修改服务端代码的情况下, 只修改客户端代码.
	* 在开放 API 给 **第三方客户端** 时, 避免不同需求的返回不同的 DTO.
* 使服务器端代码易于开发和扩展:
	* 你需要 **维护** 的类的数量较少.
	* 你可以重用 Entity->DTO **对象映射** 的代码.
	* 不同的方法返回相同的类型, 可以使得在 **添加新方法** 时变的简单明了.

**示例: 不同的方法返回不同的 DTO**

> 这里我们没有使用异步方式, 是为了示例更清晰, 你实际代码中应该使用异步方式)

上面的示例代码中, 每个方法都返回了不同的 DTO 类型, 这样处理, 会导致查询数据, 映射对象都会有很多重复的代码.

应用服务 `IUserAppService` 可以简化成如下代码:

只需使用一个 DTO 对象

* 删除 `GetUserNameAndEmail` 和 `GetRoles` 方法, 因为, 返回的 DTO 中已经包含了对应的信息.
* `GetList` 方法的返回的泛型类型与 `Get` 方法的返回类型一致.
* `Create` 与 `Update` 的返回类型都是 `UserDto`.

如上所述, 使用相同的 DTO 有很多优点. 例如, 我们在 UI 上使用 **表格** 展现用户集合, 再用户数据更新后, 我们可以获取到返回对象, 并对 **表格数据源进行更新**. 因此, 我们无需再次调用 `GetList` 来获取全部数据. 这就是我们为什么建议 `Create` 与 `Update` 方法都返回相同 `UserDto` 的原因.

##### [](#讨论) 讨论

输出 DTO 的建议并不适用于所有情况. 出于 **性能** 原因, 我们可以忽略这些建议, 尤其是在返回 **大量数据**, 为 UI 定制, **并发量较高** 时.

在这些情况下, 你可以定制仅包含 **必要信息的 DTO**. 上面的建议只适用于额外多些属性并 **不会损失太多性能**, 并关注代码 **可维护** 的应用系统.

#### [](#对象映射到对象) 对象映射到对象

当两个对象具有相同或相似的属性, 自动将 [对象映射到对象](https://docs.abp.io/zh-Hans/abp/latest/Object-To-Object-Mapping) 是一种将值从一个对象复制到另外一个对象非常有用的方法.

DTO 和实体通常具有相同或相似的属性, 你经常需要从一个实体创建一个 DTO 对象. 相较于手动映射, 基于 [AutoMapper](http://automapper.org/) 的 ABP [对象映射系统](https://docs.abp.io/zh-Hans/abp/latest/Object-To-Object-Mapping), 更加方便简单.

* **仅** 在 **实体 => 输出 DTO** 的时候使用自动映射.
* 不要在 **输入 DTO=>Entity** 的时候使用自动映射.

因为以下原因, 你不应该在输入 DTO=>Entity 的时候使用自动映射:

1. 实体类通常具有一个 **构造函数**, 该构造函数带有参数, 确保创建有效的对象, 而自动对象映射通常需要一个无参构造函数.
2. 大多数实体中的属性 setter 是 **私有的**, 你只能调用实体上的方法来修改属性.
3. 另外, 需要进行对用户或客户端的 **输入参数进行验证**, 而不是盲目映射到实体属性上.

尽管其中一些问题可以额外配置映射来解决 (如, AutoMapper 允许自定义映射规则), 但这样会使业务逻辑被 **耦合到基础设施代码中**. 我们认为业务代码应该明确, 清晰且易于理解.

有关此部分的建议, 请参加下面的 " _实体创建_ " 部分

[](#用例) 用例
--

如前所述, 领域驱动设计中的 _ 业务逻辑 _ 分为两部分 (各层): 领域逻辑和应用逻辑

[![](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-domain-vs-application-logic.png)](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-domain-vs-application-logic.png "domain-driven-design-domain-vs-application-logic")

领域逻辑是系统的 _ 核心领域规则 _ 组成, 而应用逻辑则满足特定的 _ 用例 _.

虽然定义很明确, 但是实施起来却并不容易. 你可能无法确定哪些代码应该属于领域层, 哪些代码应该属于应用层, 本节会尝试解释差异.

### [](#多应用层) 多应用层

当你的系统很大时, DDD 有助于 **处理复杂问题**. 尤其是, **单个领域** 需要多个 **应用程序运行**, 那么 **领域逻辑与应用逻辑分离** 就变的非常重要.

假设你正在构建一个具有多个应用程序的系统:

* 一个 **公开的应用网站**, 使用 ASP.NET Core MVC 构建, 展示商品给来访者. 这样的网站不需要身份验证即可查看商品. 来访者只有执行了某些操作 (例如, 将商品添加到购物车) 后, 才需要登录网站.
* 一个 **后台管理系统**,UI 使用 Angular, 通过 REST API 请求数据. 内部员工使用这个系统来维护数据 (例如, 编辑商品说明).
* 一个 **移动端应用程序**, 它比公开的网站 UI 上更加简洁. 它通过 REST API 或其它技术 (例如, TCP sockets) 请求数据.

[![](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-multiple-applications.png)](https://raw.githubusercontent.com/abpframework/abp/rel-5.0/docs/zh-Hans/images/domain-driven-design-multiple-applications.png "domain-driven-design-multiple-applications")

每个应用程序都有不同的 **需求**, 不同的 **用例** (应用服务方法), 不同的 DTO, 不同的 **验证** 和 **授权** 规则等.

将所有这些逻辑都集中到一个应用层中, 会使你的服务包含太多的 `if` 条件分支及 **复杂的业务逻辑**, 从而使你的代码开发, **维护**, 测试, 引发各种问题.

如果你在一个领域中有多个应用程序

* 为每种应用程序或客户端创建独立的应用层, 并在这些单独层中执行特定于应用业务逻辑.
* 使用共享的核心领域逻辑

为了实现这样的设计, 首先我们需要区分领域逻辑和应用逻辑.

为了更清楚的实现, 你可以为不同的应用类型创建不同的项目 (`.csproj`):

* `IssueTracker.Admin.Application` 和 `IssueTracker.Admin.Application.Contracts` 为后台管理系统提供服务.
* `IssueTracker.Public.Application` 和 `IssueTracker.Public.Application.Contracts` 为公开网站提供服务.
* `IssueTracker.Mobile.Application` 和 `IssueTracker.Mobile.Application.Contracts` 为移动端应用提供服务.

### [](#示例) 示例

本节包含一些应用服务及领域服务的示例, 讨论业务逻辑应该放置在哪一层

**示例: 在领域服务中创建 `Organization`**

我们来逐个检查 `CreateAsync` 方法中的代码, 讨论是否应该在领域服务中

* **正确**: 首先检查有 **无重复的组织名称**, 并抛出异常. 这与核心领域规则有关, 因为我们绝对不允许重复的名称.
* **错误**: 领域服务不应该执行 **授权检查**, [授权](https://docs.abp.io/zh-Hans/abp/latest/Authorization) 应该在应用层处理.
* **错误**: 它记录了日志, 包括 [当前用户](https://docs.abp.io/zh-Hans/abp/latest/CurrentUser) 的 `UserName`. 领域服务不应该依赖当前用户, 即便系统中没有用户, 领域服务也应可用. 当前用户应该是与展现层或应用层有关的概念.
* **错误**: 它发送了有关新组织被创建的 [邮件](https://docs.abp.io/zh-Hans/abp/latest/Emailing), 我们认为这也是特定用例的业务逻辑, 你可能像在不同的用例中创建不同的邮件, 又或者某些情况无需发送邮件.

**示例: 应用服务中创建 `Organization`**

我们来逐个检查 `CreateAsync` 方法中的代码, 讨论是否应该在应用服务中

* **正确**: 应用服务的方法应该是一个工作单元 (事务).ABP 的 [工作单元](https://docs.abp.io/zh-Hans/abp/latest/Unit-Of-Work) 系统可以使得此工作自动进行 (甚至无需 `[UnitOfWork]` 注解).
* **正确**: [授权](https://docs.abp.io/zh-Hans/abp/latest/Authorization) 应该在应用层处理. 这里通过使用 `[Authorize]` 来完成.
* **正确**: 调用付款 (基础设施服务) 为此操作收取费用 (创建组织是我们业务中的付费服务).
* **正确**: 应用服务负责将变更的数据保存到数据库.
* **正确**: 我们可以将 [邮件](https://docs.abp.io/zh-Hans/abp/latest/Emailing) 作为通知发送给管理员.
* **错误**: 请勿从应用服务中返回实体, 应该返回 DTO.

**讨论: 为什么不将支付逻辑移到领域服务中?**

你可能想知道为什么付款逻辑代码不在 `OrganizationManager` 中. 付款是非常 **重要的事情**, 我们不能 **遗漏任何一次付款**.

它确实非常重要, 但是, 它不能放到领域服务中. 我们可能还有 **其它用例** 来创建组织但不收取任何费用. 例如:

* 管理员可以在后台管理系统创建新组织, 而无需支付任何费用.
* 后台作业系统导入, 集成, 同步组织而无需支付费用.

如你所见, **付款不是创建有效组织的必要操作**. 它是特定的应用服务逻辑.

**示例: CRUD 操作**

该应用服务本身 **不执行任何操作**, 并将所有 **操作转发给** _领域服务_. 它甚至将 DTO 传递给 `IssueManager`

* 如果没有 **任何业务逻辑**, 只有简单的 **CRUD** 操作, **请勿** 创建领域服务.
* **切勿** 将 **DTO** 传递给领域服务, 或从领域服务返回 **DTO**.

可以在应用服务中直接注入仓储, 实现查询, 创建, 更新及删除操作. 除非在这些操作过程中需要执行某些业务逻辑, 在这种情况下, 请创建领域服务.

> 不要创建 " 将来可能需要 " 这种 CRUD 领域服务方法 ([YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)), 在需要时重构它并重构现有代码. 由于应用层优雅地抽象了领域层, 因此重构过程不会影响 UI 层和其他客户端.

[](#相关书籍) 相关书籍
-

如果你对领域驱动设计和构建大型系统有兴趣, 建议将以下书籍作为参考书籍:

* "_Domain Driven Design_" by Eric Evans
* "_Implementing Domain Driven Design_" by Vaughn Vernon
* "_Clean Architecture_" by Robert C. Martin

## 参考

- [Domain Driven Design Implementation Guide | Documentation Center | ABP.IO](https://docs.abp.io/zh-Hans/abp/latest/Domain-Driven-Design-Implementation-Guide)
