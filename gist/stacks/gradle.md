---
layout: gist
title: Gradle
category: Tech Stack & Tool
---

#    Gradle

`groupId`: unique identification across all projects.
eg. org.apache.maven, org.apache.commons

`artifactId`: name of the jar without version.
eg. maven, commons-math

`version`: project version

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

