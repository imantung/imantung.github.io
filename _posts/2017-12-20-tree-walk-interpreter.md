---
layout: post
title: "Tree Walk Interpreter"
date: 2017-12-20 16:19:28 +0700
tags: ["interpreter"]
comments: true
---

> “If you don’t know how compilers work, then you don’t know how computers work. If you’re not 100% sure whether you know how compilers work, then you don’t know how they work.” — Steve Yegge

Like a fews week ago I did research about interpreter for some [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) project. However things happened, and I got crashed away from the project.

<img src="/assets/tree-walk-interpreter.jpg" alt="interpreter" style="width: 100%; max-width: 400px;"/>

This approach called [Tree-Walking Interpreter](https://en.wikipedia.org/wiki/Interpreter_&#40;computing&#41;#Abstract_syntax_tree_interpreters), which is the simplest way to make interpreter
1. **Free text** or **grammar**: literally what you type
2. **Lexer** or [**lexical analysis**](https://en.wikipedia.org/wiki/Lexical_analysis): text to tokens
3. **Tokens** or [**Lexemes**](https://en.wikipedia.org/wiki/Lexeme): chunks of your syntaxs
4. [**Parser**](https://en.wikipedia.org/wiki/Parsing): tokens to syntax tree
5. **Syntax Tree** or [**Abstract Syntax Tree**](https://en.wikipedia.org/wiki/Abstract_syntax_tree) or AST: model represented operator with its [precedence](https://en.wikipedia.org/wiki/Order_of_operations) level and [associativity](https://en.wikipedia.org/wiki/Operator_associativity)
6. **Evaluator**: running through AST and execute the operation.

For whom looking for more resources to start learn on this subject, I recommend to read [Ruslan Blog](https://ruslanspivak.com/lsbasi-part1/) and [Writing An Interpreter In Go](https://interpreterbook.com/)
