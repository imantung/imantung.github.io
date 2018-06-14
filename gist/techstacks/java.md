---
layout: gist
title: Java
---

### Installation 

```sh
cd ~/Downloads
curl -v -j -k -L -H "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u112-b15/jre-8u112-macosx-x64.dmg > jre-8u112-macosx-x64.dmg
hdiutil attach jre-8u112-macosx-x64.dmg
sudo installer -pkg /Volumes/Java\ 8\ Update\ 112/Java\ 8\ Update\ 112.app/Contents/Resources/JavaAppletPlugin.pkg -target /
diskutil umount /Volumes/Java\ 8\ Update\ 112 
rm jre-8u112-macosx-x64.dmg
```


### Gradle

Fat Jar
```
task fatJar(type: Jar) {
    group 'build'
    description 'crate  a single Jar with all dependecies'
    manifest {
        attributes 'Implementation-Title': 'Gradle Jar File Example',
                'Implementation-Version': version,
                'Main-Class': 'com.mkyong.DateUtils'
    }
    baseName = project.name + '-all'
    from { configurations.compile.collect { it.isDirectory() ? it : zipTree(it) } }
    with jar
}
```

Set environment variable
```
test {
    environment "SOURCE_SERVERS", "servers"
    environment "SOURCE_TOPICS", "topic1,topic2,topic3"
    environment "SOURCE_GROUP", "group"
    environment "SOURCE_POLL_TIMEOUT", "1"
    environment "DESTINATION_SERVERS", "servers"
    environment "DESTINATION_TOPICS", "topic1,topic2"
  
    testLogging {
        events "passed", "skipped", "failed", "standardOut", "standardError"
    }
}
```
