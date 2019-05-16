---
layout: gist
title: Ruby Regex
---

[Rubular - Online parser](http://rubular.com/)

### String operation

1. Use String#match:
```rb
' '.match /\s{1,}/    # => #<MatchData:0x118ca58>
'f'.match /\s{1,}/    # => nil
```
2. Use Regex#match:
```rb
/\s{1,}/.match ' '    # => <MatchData:0x11857e4>
/\s{1,}/.match 'f'    # => nil
```
3. Use String#=~:
```rb
' ' =~ /\s{1,}/       # => 0
'f' =~ /\s{1,}/       # => nil
```
4. Use Regex#=~:
```rb
/\s{1,}/ =~ ' '       # => 0
/\s{1,}/ =~ 'f'       # => nil
```
5. Use Regex#=== (this is what is used in case statements):
```rb
/\s{1,}/ === ' '      # => true
/\s{1,}/ === 'f'      # => false
```
  Note: `String#===` doesn't do what you want:
```rb
' ' === /\s{1,}/      # => false
'f' === /\s{1,}/      # => false
```
