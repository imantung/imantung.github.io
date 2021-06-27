---
layout: gist
title: Java
category: Programmings
---

# Java


List of currently running java process
```bash
jps -l
```

Check heap of java process
```bash
jmap -heap PID
```

## Installation

Change java version
```bash
# List Java versions installed
/usr/libexec/java_home -V

export JAVA_HOME=$(/usr/libexec/java_home -v 11) # Java 11
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8) # Java 1.8
export JAVA_HOME=$(/usr/libexec/java_home -v 1.7) # Java 1.7
export JAVA_HOME=$(/usr/libexec/java_home -v 1.6) # Java 1.6
```

```bash
cd ~/Downloads
curl -v -j -k -L -H "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u112-b15/jre-8u112-macosx-x64.dmg > jre-8u112-macosx-x64.dmg
hdiutil attach jre-8u112-macosx-x64.dmg
sudo installer -pkg /Volumes/Java\ 8\ Update\ 112/Java\ 8\ Update\ 112.app/Contents/Resources/JavaAppletPlugin.pkg -target /
diskutil umount /Volumes/Java\ 8\ Update\ 112
rm jre-8u112-macosx-x64.dmg
```

Install java (Ubuntu)
```
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
sudo aptitude -y install oracle-java8-installer
```

## JVM Tuning

Ref:
- [JVM Options](https://www.oracle.com/technetwork/articles/java/vmoptions-jsp-140102.html)
- [JVM Enhancements](https://docs.oracle.com/javase/7/docs/technotes/guides/vm/performance-enhancements-7.html)
- <https://www.baeldung.com/jvm-parameters>

Note on non standard option
- Use `java -X` to display non standard option
- option begin with `-X` are non-standard (not guaranteed to be supported on all VM implementations), and are subject to change without notice
- option specified with `-XX `are not stable and are subject to change without notice

## Double Curly Brace

Use in test only since the practice can lead memory leak ([src](https://blog.jooq.org/2014/12/08/dont-be-clever-the-double-curly-braces-anti-pattern/))

{% raw %}
```java
Map map = new HashMap(){{
    put("firstName", "John");
    put("lastName", "Smith");
    put("organizations", new HashMap(){{
        put("0", new HashMap(){{
            put("id", "1234");
        }});
        put("abc", new HashMap(){{
            put("id", "5678");
        }});
    }});
}};

List<Integer> list = new ArrayList<Integer>() {{
   add(1);
   add(2);
}};
```
{% endraw %}