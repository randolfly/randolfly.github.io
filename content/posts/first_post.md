---
title: Chap1 基础集合论
date: 2022-08-01T21:43:31+08:00
aliases: 
tags: [公理系统, logic, set-theory]
date created: July 28th 2022, 6:51:48 pm
date modified: August 1st 2022, 8:41:32 pm
---

## 基本逻辑

### Proposition

```ad-definition
title: proposition
A proposition p is a variable that can take the values true (T) or false (F), and no others.
```
[^1]

一个 proposition 如果一直是 true 被称为 *tautology*，反之被称为 *contradiction*

在一些 proposition 基础上，可以通过不同的 *logical operator* 来构造新的 proposition。有 4 种 unary operator，将其真值表列在下面：

| p   | $\lnot p$ | id(p) | $\top{p}$ | $\bot{p}$ |
| --- | --------- | ----- | --------- | --------- |
| F   | T         | F     | T         | F         |
| T   | F         | T     | T         | F          |

考虑 2 元的运算符 (binary operator )，基本的有 3 种：

| p   | q   | $p\land q$ | $p \lor q$ | $p \veebar q$ |
| --- | --- | ---------- | ---------- | ------------- |
| F   | F   | F          | F          | F             |
| F   | T   | F          | T          | T             |
| T   | F   | F          | T          | T             |
| T   | T   | T          | T          | F             |

除了上面的 3 个 binary operator (*and or exclusive*)，还有 2 个常用的运算符：

| p   | q   | $p \Rightarrow q$ | $p \Leftrightarrow q$ |
| --- | --- | ----------------- | --------------------- |
| F   | F   | ==T==               | T                     |
| F   | T   | T               | F                     |
| T   | F   | F                 | F                     |
| T   | T   | T                 | T                      |

注意到上面的 $\Rightarrow$ 在前提条件为 False 的情况下会直接得出 True 的结论，这也就是俗语”Ex falso quod libet”

```ad-theorem
p, q are propositions, then:
$\left( p\Rightarrow q \right) \Leftrightarrow \left( \left( \lnot q \right) \Rightarrow \left( \lnot p \right) \right)$
```
^1-1-proposition-false

Hint: 使用真值表可以显然地证明

### Predicate Logic

```ad-definition
A predicate logic is (informally) a proposition-valued function of some variable or variables. In particular, a predicate of two variables is called a *relation*
```

Note that just like propositional logic, it’s not the task of predicate logic to examine how predicates are built from the variables on which they depend.

As with propositions, we can construct new predicates from given ones by using the operators define in the previous section. For example, we might have:
$$Q\left( x,y,z \right) :\Leftrightarrow P\left( x \right) \land R\left( y,z \right) $$

Actually, we can write propositions from predicates, like:
$$\forall x:\quad P\left( x \right) $$
is a proposition , which we read as “for all x, P of x(is true)”.

By define the $\forall$ operator, we can the define $\exists$ operator as :
$$\exists x:P\left( x \right) :\Leftrightarrow \lnot \left( \forall x:\lnot P\left( x \right) \right) $$

```ad-corollary
Let $P(x)$ be a predicate. Then:
$$\forall x:P\left( x \right) \Leftrightarrow \lnot \left( \exists x: \lnot P\left( x \right) \right) $$
```

This can be seen from [[Chap1 基础集合论#^1-1-proposition-false]]

```ad-example
Let P(x,y) be a predicate. Then, for fixed y, P(x,y) is a predicate of one variable and we define:
$$Q\left( y \right) :\Leftrightarrow \forall x:P\left( x,y \right) $$

Hence we have the following:
$$\exists y:\forall x:P\left( x,y \right) :\Leftrightarrow \exists y:Q\left( y \right) $$
```

```ad-remark
**the order of quantification matters**
$$\exists y:\forall x:P\left( x,y \right) \qquad \forall x:\exists y:P\left( x,y \right) $$
are not necessarily equivalent
```

## 集合论公理

### The $\in$ -relation
we give 9 axioms and above them define $\in$ and sets

![[Pasted image 20220801200135.png]]

using the $\in$ -relation we can define the following relation:
- $x\notin y:\Leftrightarrow \lnot \left( x\in y \right)$
- $x\subseteq y:\Leftrightarrow \forall a:\left( a\in x\Rightarrow a\in y \right)$
- $x=y\Leftrightarrow \left( x\subseteq y \right) \land \left( y\subseteq x \right)$
- $x\subset y:\Leftrightarrow \left( x\subseteq y \right) \land \lnot \left( x=y \right)$

```ad-remark
A comment about the notation. Since $\in$ is a relation(predicate), for consistency of notation we need to write as $\in(x,y)$. However, we define:
$$x\in y :\Leftrightarrow \in(x,y)$$
```

### Zermelo-Fraenkel Axioms of Set Theory

```ad-definition
title: Axiom on the $\in$ -relation 

The expression $x\in y$ is a **proposition** if and only if **both x and y are sets**, in symbols:

$$\forall x:\forall y:\left( x\in y \right) \veebar \lnot \left( x\in y \right) $$
```

*We remarked, previously, that it is not the task of predicate logic to inquire about the nature of the variables on which predicates depend*

this axiom seems trival, but it tells us when something is not a set:

```ad-example
title: Russell's paradox
Suppose that there is some u which has the following property:

$$\forall x:\left( x\notin x\Leftrightarrow x\in u \right) $$

ie. *u contains all the sets that are not elements of themselves, and no others.*  We wich to determine whethere u is a set or not. In order to do so, consider the expression $u\in u$. If u is a set then, by the first axiom , $u\in u$ is a proposition.

However, we will show that it is not the case.

1. Suppose first that $u\in u$ is true. Then $\lnot \left( u\notin u \right)$ is true and thus $u$ does not satisfy the condition for being an element of u, and hence is not an element of u. Thus:

$$u\in u\Rightarrow \lnot \left( u\in u \right) $$

and this is a contradiction. Therefore, $u\in u$ cannot be ture. 

2. Then, if it is a proposition, it must be false. However, if $u\notin u$, then u satisfy the condition for being a member of u and thus:

$$u\notin u\Rightarrow \lnot \left( u\notin u \right) $$

which is, again, a contradiction. Therefore, $u \in u$ does not have the property of being either true or false and hence it is not a proposition. Thus, **our first axiom implies taht u is not set**, for if it were, then $u\in u$ would be a proposition.
```

```ad-definition
title: axiom on the existence of an empty Set

There exists a set that contains no elements. In symbols: 
$$\exists y:\forall x:x\notin y$$
```

Notice that the use of **an** above. we have all the tools to prove that there is only one empty set, and hence we do not this to be an axiom.

```ad-definition
title: axiom on pair sets

Let x and y be sets. Then there exists a set that contains as its elements precisely x and y. In symbols:

$$\forall x:\forall y:\exists m:\forall u:\left( u\in m\Leftrightarrow \left( u=x\lor u=y \right) \right) $$
```

The set m is called the pair of set x and y and it is denoted by $\{x,y\}$.

Note that in our definition, the choose order doesn’t effect the result, i. e, if we swap x and y to obtain $\{y,x\}$, the pair set remains unchanged.

Indeed, by definition, we have:

$$\left( a\in \left\{ x,y \right\} \Rightarrow a\in \left\{ y,x \right\} \right) \land \left( a\in \left\{ y,x \right\} \Rightarrow a\in \left\{ x,y \right\} \right) $$
independently of a, hence

$$\left( \left\{ x,y \right\} \subseteq \left\{ y,x \right\} \right) \land \left( \left\{ y,x \right\} \subseteq \left\{ x,y \right\} \right) \Rightarrow \left\{ x,y \right\} =\left\{ y,x \right\} $$

This means **the pair set $\{x,y\}$ is unordered pair.**

However, using the axiom on pair sets, it is also possible to define an *ordered pair* $(x,y)$ such that $(x,y)\neq (y,x)$. The definition is the following:

$$\left( x,y \right) =\left( a,b \right) \Leftrightarrow x=a\land y=b$$

One candidate which satisfies this property is $(x,y) := \{x,\{x,y\}\}$, which is a set by axiom of pair sets.

```ad-remark
The pair set axiom also gurantees the existence of one-element sets, called *singletons*.
```



## 集合分类


## 参考

[^1]: By this we mean a formal expression, with no extra structure assumed.
