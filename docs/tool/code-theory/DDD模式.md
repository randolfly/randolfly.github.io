---
date: 2022-06-06
tag:
  - DDD
  - code
  - theory
  - Domain-Driven
category:
  - tool
  - code theory
---

# DDD模式

# DDD 设计 (领域驱动设计)


## 序言

领域驱动设计是一种解决业务复杂性的设计思想，不是一种标准规则的解决方法。

领域驱动设计是一种解决业务复杂性的设计思想，不是一种标准规则的解决方法。在本文中的实战示例可能会与常见的 DDD 规则方法不太一样，是简单、入门级别，新手可以快速实践版的 DDD。如果不熟悉 DDD 设计思想可看下 [基础思想篇](https://www.atatech.org/articles/160557)

领域建模设计阶段常见的方法有 [四色建模法](https://www.infoq.cn/article/xh-four-color-modeling/?spm=ata.13261165.0.0.5edb6195K0yRDx)、EventSourcing 等 推荐一篇博文 [正确理解领域建模](https://www.atatech.org/articles/76738?spm=ata.13269325.0.0.406949faL3AdF8)，本文 DDD 的设计方法是为了新手可以实战落地，又能表达出 DDD 思想的简单易懂设计方法（非新手阶段建议了解下四色建模、EventSoucing 等领域建模思想）

### 理解业务
----

领域驱动设计是对业务模型在系统设计中的一种表现形式，在进行 DDD 实战前一定要熟悉业务，不熟悉业务无法把业务模型翻译成域模型。理解业务 - 站在业务方和产品角度，梳理系统业务的所有细节，明白每一个业务细节点。

下面举一个简单交易系统 DDD(交易系统太宽广，本文示例是仅包含创建订单这一个阶段的行为，不包含订单状态变更、订单管理这些操作) 落地示例，在电商或外卖行业交易系统创建订单都会有收货人、下单人、商品、订单金额等业务属性和创建订单行为。

[81b0a4dd43819df5808937f7346b33af](.//)

### 业务抽象
----

在梳理业务过程中会把业务每一个具体的点都给罗列出来，是一盘零碎的业务点。通过对业务的理解进行抽象，把相关性的业务点进行分组聚合。业务抽象过程中涉及 **边界划分** 问题，比如收货人和下单人信息是一起抽象成用户信息，还是分别抽象成用户信息和地址信息？在订单业务中，一个用户可以下多笔订单，该用户下的所有订单都是同一个用户信息，但用户的每笔订单的收货信息可以不同（可以给自己买东西、给亲朋好友买东西），在订单业务中用户信息和地址信息是需要抽象成两个独立的业务模块。

[b4183eb20f90c3b0319725312586cf13](.//)

### 模型翻译
----

在经过业务抽象之后，整体业务模型已经清晰明了，在域模型设计上，只需要把业务模型经过简单翻译映射成域模型即可。

[5b1b57721af64a86d52baabaa078015c](.//)

### 子域划分
----

业务模型翻译成域模型后，当一个域模型比较复杂的时候需要把一个域模型进行子域划分

搭建项目结构
------

DDD 项目与传统三层项目结构比较类似，DDD 中 API 包是接口定义负责对外打包给外部（SOA 和 Http）调用使用，Service 包是 API 包接口的实现，不做具体业务逻辑处理，只做数据的转换，把 Domain 层的域模型转换成对外使用的字段。Domain 层是所有的具体业务逻辑处理层。

[b3807f07bcf70475e68ae10b65c52c0a](.//)

传统三层架构                                                        原生领域驱动架构

### 模块和包

一个简单的 DDD 项目会包含 API、Service、Domain 三个模块

  [7782f2622afe71951e8f3417b478b0a0](.//)

在 Domain 模块中，一个基本的域模型会包含 Entity、Value Object、Service、Factory、Repository 这几个包（[Entity、Service 含义](https://www.atatech.org/articles/160557)）。metadata 包是域模型元数据包，metadata 包下的接口是一个 DDD 设计的标识，这个包通常会抽象成一个独立的模块供其他项目依赖使用。

### 域模型搭建

  订单域中肯定会有地址、用户、店铺、订单商品等信息，统一直接在订单 Model 中肯定会很臃肿并且不利于维护，应把订单域拆分成一个个子域。在拆分成子域选模型（Entity、ValueObject、Service）的时候会存在模棱两可的情况，这个订单地址信息子域应该是 Entity、还 ValueObject，如果不太确定就以最简单化原则，Entity 复杂度大于 ValueObject，订单地址域就可以以 ValueObject 模型存在。

[5be0c1f0c2064751a5e881ea1eec4659](.//)

#### Metadata 包类

```java
/**
 * 域模型工厂
 * @param <T>
 */
public interface DomainFactory<T> {

}

/**
 * 实体
 * @param <T>
 */
public interface Entity<T> extends Serializable {

    default boolean sameIdentityAs(T other) {
        return true;
    }
}

/**
 * 持久化
 * @param <T>
 */
public interface Repository<T> {
}

/**
 *服务
 * @param <T>
 */
public interface Service<T> {

}

/**
 * 值对象
 * @param <T>
 */
public interface ValueObject<T> extends Serializable {

    default boolean sameValueAs(T other) {
        return true;
    }
}
```

#### Entity 包类

```java
/**
 * 订单实体
 */
@Data
public class OrderE implements Entity<OrderE> {


    /**
     * 用户信息
     */
    private OrderUserV orderUserV = new OrderUserV();

    /**
     * 购物车信息
     */
    private OrderCartV orderCartV = new OrderCartV();

    /**
     * 地址相关信息
     */
    private OrderAddressV orderAddressV = new OrderAddressV();


    /**
     * 店铺相关操作
     */
    private OrderShopV orderShopV = new OrderShopV();

    /**
     * 订单基础信息
     */
    private OrderBasicInfoV orderBasicInfoV = new OrderBasicInfoV();

    /**
     * 订单金额
     */
    private OrderMoneyV orderMoneyV = new OrderMoneyV();

    /**
     * 持久化操作
     */
    private OrderR orderR;


    /**
     * 创建订单
     *
     * @return
     */
    public OrderE createOrder(OrderE orderE) throws Exception {
        return orderR.createOrder(orderE);
    }

    /**
     * 从主库查询
     *
     * @param orderE
     * @return
     * @throws Exception
     */
    public OrderE queryOrderFromDBMater(OrderE orderE) throws Exception {
        return orderR.queryOrderFromDBMaster(orderE);
    }


    /**
     * 从Eos等三方查询
     *
     * @param orderNumber
     * @return
     * @throws Exception
     */
    public void queryOrderFromEos(String orderNumber) throws Exception {
        orderR.queryOrderFromEos(orderNumber);
    }

    /**
     * 订单有效
     *
     * @param orderNumber
     * @throws Exception
     */
    public void enableOrder(String orderNumber) throws Exception {
        orderR.enableOrder(orderNumber);
    }

}
```

#### Repository 包类

```java
/**
 * 订单数据源 操作层 所有的与外部的交互都走这一层
 */
public interface OrderR extends Repository<OrderR> {

    /**
     * 创建订单
     * @param orderE
     * @return
     * @throws Exception
     */
    OrderE createOrder(OrderE orderE) throws Exception;


    /**
     * 从DB主库查询信息
     * @param orderE
     * @return
     * @throws Exception
     */
    OrderE queryOrderFromDBMaster(OrderE orderE) throws Exception;

    /**
     * 从EOS查询订单详情
     * @param orderNumber
     * @return
     * @throws Exception
     */
    void queryOrderFromEos(String orderNumber) throws Exception;

    /**
     * 开启订单
     * @param orderNumber
     * @throws Exception
     */
    void enableOrder(String orderNumber) throws Exception;
}

@Service
public class OrderRImpl implements OrderR {


    private static final Log LOG = LogFactory.getLog(OrderRImpl.class);


    @Override
    public OrderE createOrder(OrderE orderE) throws Exception {

        return null;
    }

    @Override
    public OrderE queryOrderFromDBMaster(OrderE orderE) throws Exception {

        return null;
    }

    @Override
    public void queryOrderFromEos(String orderNumber) throws Exception {

    }

    @Override
    public void enableOrder(String orderNumber) throws Exception {

    }
}
```

#### value_object 包类

```java
/**
 * 订单地址值对象
 */
@Data
public class OrderAddressV implements ValueObject<OrderAddressV> {

    /**
     * 地址ID
     */
    private String addressId;

    /**
     * 订单地址
     */
    private String address;

    /**
     * 收货人
     */
    private String name;

    /**
     * 收货人手机号
     */
    private String phone;

    /**
     * 经度
     */
    private BigDecimal longitude;

    /**
     * 纬度
     */
    private BigDecimal latitude;

    /**
     * 地址类型
     */
    private Integer addressType;

    /**
     * 三方地址Id
     */
    private String thirdAddressId;


    /**
     * longitude、latitude转HashString
     *
     * @param longitude
     * @param latitude
     * @return
     */
    public String getGeoHash(BigDecimal longitude, BigDecimal latitude, int length) {

        String geoHash = GeoHash.encodeHash(latitude.doubleValue(), longitude.doubleValue(), length);

        return geoHash;
    }

    /**
     * longitude、latitude转HashString 默认12位
     * @param longitude
     * @param latitude
     * @return
     */
    public String getGeoHash(BigDecimal longitude, BigDecimal latitude) {
        return getGeoHash(longitude, latitude, 12);
    }

    /**
     * geoHash 转经纬度
     *
     * @param geoHash
     * @return
     */
    public BigDecimal[] getLatLog(String geoHash) {
        LatLong latLong = GeoHash.decodeHash(geoHash);

        BigDecimal[] bigDecimals = new BigDecimal[2];
        bigDecimals[0] = BigDecimal.valueOf(latLong.getLat());
        bigDecimals[1] = BigDecimal.valueOf(latLong.getLon());

        return bigDecimals;
    }

}

@Data
public class OrderBasicInfoV implements ValueObject<OrderBasicInfoV> {


    /**
     * 订单Id
     */
    private String orderId;

    /**
     * 订单创建时间
     */
    private LocalDateTime createAt;

    /**
     * 订单状态
     */
    private Integer orderStatus;
}

@Data
public class OrderCartV implements ValueObject<OrderCartV> {


    /**
     * 购物车Id
     */
    private String  cartId;

    /**
     * 购物车创建时间
     */
    private LocalDateTime createTime;


    /**
     * 购物车总价
     */
    private BigDecimal total;

    /**
     * 购物车原价
     */
    private BigDecimal originalTotal;

    /**
     * 最低多少元起送
     */
    private BigDecimal minDeliverAmount;

    /**
     * 配送费
     */
    private BigDecimal deliveryFee;


    /**
     * 商品总数量
     */
    private Integer totalQuantity;

    /**
     * 商品List
     */
    private List<Object> groups;

    /**
     * 优惠信息信息
     */
    private List<Object> extraList;


}

@Data
public class OrderMoneyV implements ValueObject<OrderMoneyV> {

    /**
     * 订单原价originPrice
     */
    private BigDecimal originalPrice = BigDecimal.ZERO;

    /**
     * 订单现价  price
     */
    private BigDecimal price = BigDecimal.ZERO;

}


@Data
public class OrderShopV implements ValueObject<OrderShopV> {

    /**
     * 店铺Id
     */
    private Long shopId;

    /**
     * 店铺名称
     */
    private String shopName;
}

/**
 * 订单用户值对象
 */
@Data
public class OrderUserV implements ValueObject<OrderUserV> {

    /**
     * 用户Id
     */
    private Long userId;


    /**
     * 用户姓名
     */
    private String userName;

    /**
     * 用户手机号
     */
    private String phone;

}
```

### API 和 Service 层搭建

```java
/**
 * 示例demo 只是为了示范DDD如何落地，写的简单，可能不太符合集团代码规范
 *
 *
 */
public interface OrderService {

    /**
     * 创建订单
     * @param createOrderDto
     */
    OrderDto createOrder(CreateOrderDto createOrderDto);

    /**
     * 从主库查询
     *
     * @param orderNumber
     * @return
     * @throws Exception
     */
     OrderDto queryOrderFromDBMater(String orderNumber);
}


@Data
public class CreateOrderDto {

    /**
     * 订单地址
     */
    private String address;

    /**
     * 收货人
     */
    private String name;

    /**
     * 收货人手机号
     */
    private String phone;

    /**
     * 经度
     */
    private BigDecimal longitude;

    /**
     * 纬度
     */
    private BigDecimal latitude;

    /**
     * 用户Id
     */
    private String userId;

    /**
     * 购物车Id
     */
    private String cartId;

    /**
     * 店铺Id
     */
    private Long shopId;
}

@Data
public class OrderDto {

    /**
     * 订单地址
     */
    private String address;

    /**
     * 收货人
     */
    private String name;

    /**
     * 收货人手机号
     */
    private String phone;

    /**
     * 经度
     */
    private BigDecimal longitude;

    /**
     * 纬度
     */
    private BigDecimal latitude;

    /**
     * 用户Id
     */
    private Long userId;

    /**
     * 购物车Id
     */
    private String cartId;

    /**
     * 店铺Id
     */
    private String shopId;

    /**
     * 订单Id
     */
    private String orderId;

    /**
     * 订单价格
     */
    private BigDecimal orderPrice;
}

package me.ele.eo.enterprise.service;

import me.ele.eo.enterprise.order.entity.OrderE;
import me.ele.eo.enterprise.order.factory.OrderFactory;
import me.ele.eo.enterprise.order.value_object.OrderAddressV;
import me.ele.eo.enterprise.order.value_object.OrderShopV;
import me.ele.eo.enterpriser.CreateOrderDto;
import me.ele.eo.enterpriser.OrderDto;
import me.ele.eo.enterpriser.api.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderFactory orderFactory;

    @Override
    public OrderDto createOrder(CreateOrderDto createOrderDto) {

        OrderE orderE = orderFactory.createOrderE();
        buildOrderE(createOrderDto, orderE);
        try {
            orderE.createOrder(orderE);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return convertToResponse(orderE);
    }

    @Override
    public OrderDto queryOrderFromDBMater(String orderNumber) {

        OrderE orderE = orderFactory.createOrderE();
        orderE.getOrderBasicInfoV().setOrderId(orderNumber);
        try {
            orderE.queryOrderFromDBMater(orderE);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return convertToResponse(orderE);
    }

    private void buildOrderE(CreateOrderDto createOrderDto, OrderE orderE) {


        OrderAddressV orderAddressV = orderE.getOrderAddressV();

        orderAddressV.setAddress(createOrderDto.getAddress());
        orderAddressV.setLatitude(createOrderDto.getLatitude());
        orderAddressV.setLongitude(createOrderDto.getLongitude());
        orderAddressV.setName(createOrderDto.getName());
        orderAddressV.setPhone(createOrderDto.getPhone());
        orderE.setOrderAddressV(orderAddressV);

        OrderShopV orderShopV = orderE.getOrderShopV();
        orderShopV.setShopId(createOrderDto.getShopId());

        //TODO 转换其他属性值 (这里不列举了)

    }

    private OrderDto convertToResponse(OrderE orderE) {

        OrderDto responseDto = new OrderDto();
        responseDto.setUserId(orderE.getOrderUserV().getUserId());
        responseDto.setName(orderE.getOrderAddressV().getName());
        //TODO 转换其他属性值 (这里不列举了)

        return responseDto;

    }
}
```

### 一些释义

#### Model 生命周期管理方式

域模型中 Model 在系统环境中的生命周期管理有两种方式，一种是使用容器管理生命周期在 Spring 中 Model 类上打 @Service、@Component 等注解 ; 另一种是通过手动管理生命周期可以与普通 DTO、POJO 一样通过 new 对象 的形式使用（本文中就是与普通的 DTO 一样通过 new 对象形式使用的），我比较推荐 new 对象的形式使用。

new 对象形式的 Model 如何动态注入 Repository 数据源 (是一个接口)，数据源操作负责实现这个接口，与数据源交互（DB、HTTP......）。如何在一个普通 new 对象中注入 Spring 容器管理的对象？通过控制反转在使用时再值设置进去，通过 Factory 实现控制反转，这点是避免通过容器托管 Model 的关键所在。@辉子 [盒马领域驱动设计实践](https://www.atatech.org/articles/91909?spm=ata.13269325.0.0.7faf49fal1sHtF) 这篇博文详细的阐述了领域模型下的依赖注入。

#### 其他

## 参考

- [领域驱动设计(DDD)-简单落地-阿里云开发者社区](https://developer.aliyun.com/article/743471)
