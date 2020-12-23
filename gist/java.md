---
layout: gist
title: Java
---

# Java

- [JVM Options](https://www.oracle.com/technetwork/articles/java/vmoptions-jsp-140102.html)
- [JVM Enhancements](https://docs.oracle.com/javase/7/docs/technotes/guides/vm/performance-enhancements-7.html)
- <https://www.baeldung.com/jvm-parameters>

Non standard option
- Use `java -X` to display non standard option
- option begin with `-X` are non-standard (not guaranteed to be supported on all VM implementations), and are subject to change without notice
- option specified with `-XX `are not stable and are subject to change without notice

List of currently running java process
```bash
jps -l
```

Check heap of java process
```bash
jmap -heap PID
```


### Installation

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

### Gradle

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


### Test Coveratge using Java Maven

<https://stackoverflow.com/questions/36199422/how-to-make-maven-unit-test-code-coverage-work>

```xml
<project>
...

    <dependencies>
        ...
    </dependencies>

    <build>
        <plugins>
            ...
            <!-- Code Coverage report generation -->
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.7.9</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>generate-code-coverage-report</id>
                        <phase>test</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

```bash
mvn test
```
