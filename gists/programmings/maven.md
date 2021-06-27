---
layout: gist
title: Maven
category: Programmings
---

# Maven


[Test Coverage](https://stackoverflow.com/questions/36199422/how-to-make-maven-unit-test-code-coverage-work):
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
