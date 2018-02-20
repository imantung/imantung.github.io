---
layout: post
title: "6 Things that make Go actually simpler than Java"
description: "commentary between Go and Java"
date: 2017-02-17 11:24:38 +0700
tags: ["java", "golang","singleton", "package", "gofmt"]
comments: true
---


> Go attempts to reduce the amount of typing in both senses of the word. Throughout its design, we have tried to reduce clutter and complexity. ~https://golang.org/doc/faq#principles



### 1. Init Function: Package is a new singleton pattern 
```java
public class Singleton{
  
  private int someField;
  
  // non-public constructor
  private Singleton{
    someField = 999;
  }
  
  public void someMethod(){
      someField ++;
  }
  
  // Bill Pugh's Singleton Holder
  private static class SingletonHolder{
    public static Singleton INSTANCE = new Singleton();
  }
  
  public static Singleton getInstance(){
    return SingletonHolder.INSTANCE;
  }
}
```
```java
public class Main{
  public static void main(String[] args){
    Singleton.getInstance.someMethod();
  }
}
```

One of critics of Singleton is violation to Single Responsible Principle (SRP). As you see at example above, the class not only responsible with it's original purpose but also responsible to instance initiation. 

In Golang, we doesn't need write anything to get singleton since `package` itself is pretty much feel like a Singleton. You can declare variable on package level and methods to handle it. It also have `init()` as singleton's constructor. 


```go
package singleton

var someField int

func init()  {
  someField = 999
}

func SomeMethod()  {
  someField ++
}
```
```go
import singleton

func main()  {
  singleton.SomeMethod()
}
```

However we should be thinking thrice if you need such as singleton because [it may sign of bad design](https://blogs.msdn.microsoft.com/scottdensmore/2004/05/25/why-singletons-are-evil/).

### 2. Gofmt: Clean code is a language standard

Have you ever get merge conflict because of white space? You probably never see that on Go because of this gofmt. Gofmt is a tool that formats Go source code to pretty code and it's include in go installation. This is brilliant idea because usually formatter goes to IDE or editor with small format differences each other. 

### 3. Godoc: One documentation for both inside and outside of code

Every comment before declaration of package, type and function is generatable to documentation with godoc. Godoc is similar with javadoc, just without annotation. 

### 4. Struct Tag: Field tagging never been this easy

Java Annotation indeed great trick to add some metadata to code. Go have similar feature also available 




### 5. Composition: Multiple inheritance without inheritance
### 6. Interface: Interfacing without implement is better.
