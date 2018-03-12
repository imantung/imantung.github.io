---
layout: post
title: "6 Things that make Go actually simpler than Java"
description: "commentary between Go and Java"
date: 2017-02-17 11:24:38 +0700
tags: ["java", "golang","singleton", "package", "gofmt"]
comments: true
---


1. Always make private struct (if it have some method) 
2. Utilize anonymous struct 
3. Use init function to make Singleton Pattern
4. Use single character as variable name only in receiver argument
5. Use name when return multiple argument 
6. Use runtime.Caller to make DRY test
7. Only write public function in file with same name with package


### 1. Always make private struct (if it have some method)

### 2. Utilize anonymous struct 

### 3. Use init function to make Singleton Pattern

As comparison, below is typical java code of singleton class. 
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

### 4. Use single character as variable name only in receiver argument



### 5. Use name when return multiple argument
### 6. Use runtime.Caller to make DRY test
### 7. Only write public function in file with same name with package
