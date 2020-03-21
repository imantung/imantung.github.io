---
layout: post
title: "GoDoc Pattern"
description: "GoDoc Pattern"
date: 2019-07-17 22:43:00 +0700
comments: false
---

Today I just write more Go code than it should be. I just working with go framework called [Typical-Go](https://typical-go.github.io/). It's only beginning although already started a few months ago. In its process, I try to make a pattern to how to write good GoDoc, however, I think GoDoc should be flexible without restriction. So I abandon the idea but still post it here so it did not become waste. 

--- 

Godoc should start with the name and following description. Here list of description example. 

## Struct

- When the struct is model, description can be start with "represent"
    ```go
    //  Book represent database entity of book
    type Book struct{
    }
    ```
- When the struct contain collection of logic, description can be start with "provide"
    ```go
    // BookService provide logic/process to book entity
    type BookService struct{
    }
    ```
- When the struct name is single noun, description can be start with "of"
    ```go
    // Context of typical application
    type Context struct{
    }
    ```
- Another alternative, description can be start with "is"
    ```go
    // BookRepo is data repository for book entity
    type BookRepo struct{
    }
    ```

## Function

- When the function is constructor, description can be start with "return new instance of"
    ```go
    // NewBook return new instance of book entity
    func NewBook() *Book{
    }
    ```
- When the function name is single verb, description can be start with the actual action
    ```go
    // Setup the infrastructure
    func Setup() error{
    }
    ```
- When the function is setter, description can be start with "to set"
    ```go
    // SetName to set name field
    func SetName(name string) {
    }
    ```
- When the function is getter, description can be start with "field"
    ```go
    // Name field
    func Name() string{
    }
    ```
- Another alternative, description can be start with "to", "for", "execute", "trigger"