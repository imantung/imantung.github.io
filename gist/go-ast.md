---
layout: gist
title: Go (AST)
---

# Go (AST)

ref:
- <https://stackoverflow.com/questions/47088551/get-all-info-about-a-package-via-importer-and-reflect>

Print the ast
```go
ast.Print(fset, v)
```

Inspect
```go
func inspect(n ast.Node) {
	ast.Inspect(n, func(n ast.Node) bool {
		var s string
		switch x := n.(type) {
		case *ast.BasicLit:
			s = x.Value
		case *ast.Ident:
			s = x.Name
		}
		if s != "" {
			fmt.Printf("%s:\t%s\n", fset.Position(n.Pos()), s)
		}
		return true
	})
}
```

To String
```go
func toString(v interface{}) string {
	var buf bytes.Buffer
	err := printer.Fprint(&buf, fset, v)
	if err != nil {
		log.Fatal(err)
	}
	return buf.String()
}

```

