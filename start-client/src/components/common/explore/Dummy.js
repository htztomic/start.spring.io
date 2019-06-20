const TREE = [
  {
    type: 'file',
    filename: '.gitignore',
    path: '/.gitignore',
    content: `HELP.md
target/
!.mvn/wrapper/maven-wrapper.jar
!**/src/main/**
!**/src/test/**

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### NetBeans ###
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/

### VS Code ###
.vscode/`,
  },
  {
    type: 'folder',
    filename: '.mvn',
    path: '/.mvn/',
    hidden: true,
    children: [
      {
        type: 'folder',
        filename: 'wrapper',
        path: '/.mvn/wapper/',
        children: [
          {
            type: 'file',
            filename: 'maven-wrapper.jar',
            path: '/.mvn/wapper/maven-wrapper.jar',
          },

          {
            type: 'file',
            filename: 'maven-wrapper.properties',
            path: '/.mvn/wapper/maven-wrapper.properties',
            content: `distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.6.0/apache-maven-3.6.0-bin.zip`,
          },

          {
            type: 'file',
            filename: 'MavenWrapperDownloader.java',
            path: '/.mvn/wapper/MavenWrapperDownloader.java',
            content: `/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.util.Properties;

public class MavenWrapperDownloader {

    /**
     * Default URL to download the maven-wrapper.jar from, if no 'downloadUrl' is provided.
     */
    private static final String DEFAULT_DOWNLOAD_URL =
            "https://repo.maven.apache.org/maven2/io/takari/maven-wrapper/0.4.2/maven-wrapper-0.4.2.jar";

    /**
     * Path to the maven-wrapper.properties file, which might contain a downloadUrl property to
     * use instead of the default one.
     */
    private static final String MAVEN_WRAPPER_PROPERTIES_PATH =
            ".mvn/wrapper/maven-wrapper.properties";

    /**
     * Path where the maven-wrapper.jar will be saved to.
     */
    private static final String MAVEN_WRAPPER_JAR_PATH =
            ".mvn/wrapper/maven-wrapper.jar";

    /**
     * Name of the property which should be used to override the default download url for the wrapper.
     */
    private static final String PROPERTY_NAME_WRAPPER_URL = "wrapperUrl";

    public static void main(String args[]) {
        System.out.println("- Downloader started");
        File baseDirectory = new File(args[0]);
        System.out.println("- Using base directory: " + baseDirectory.getAbsolutePath());

        // If the maven-wrapper.properties exists, read it and check if it contains a custom
        // wrapperUrl parameter.
        File mavenWrapperPropertyFile = new File(baseDirectory, MAVEN_WRAPPER_PROPERTIES_PATH);
        String url = DEFAULT_DOWNLOAD_URL;
        if(mavenWrapperPropertyFile.exists()) {
            FileInputStream mavenWrapperPropertyFileInputStream = null;
            try {
                mavenWrapperPropertyFileInputStream = new FileInputStream(mavenWrapperPropertyFile);
                Properties mavenWrapperProperties = new Properties();
                mavenWrapperProperties.load(mavenWrapperPropertyFileInputStream);
                url = mavenWrapperProperties.getProperty(PROPERTY_NAME_WRAPPER_URL, url);
            } catch (IOException e) {
                System.out.println("- ERROR loading '" + MAVEN_WRAPPER_PROPERTIES_PATH + "'");
            } finally {
                try {
                    if(mavenWrapperPropertyFileInputStream != null) {
                        mavenWrapperPropertyFileInputStream.close();
                    }
                } catch (IOException e) {
                    // Ignore ...
                }
            }
        }
        System.out.println("- Downloading from: : " + url);

        File outputFile = new File(baseDirectory.getAbsolutePath(), MAVEN_WRAPPER_JAR_PATH);
        if(!outputFile.getParentFile().exists()) {
            if(!outputFile.getParentFile().mkdirs()) {
                System.out.println(
                        "- ERROR creating output direcrory '" + outputFile.getParentFile().getAbsolutePath() + "'");
            }
        }
        System.out.println("- Downloading to: " + outputFile.getAbsolutePath());
        try {
            downloadFileFromURL(url, outputFile);
            System.out.println("Done");
            System.exit(0);
        } catch (Throwable e) {
            System.out.println("- Error downloading");
            e.printStackTrace();
            System.exit(1);
        }
    }

    private static void downloadFileFromURL(String urlString, File destination) throws Exception {
        URL website = new URL(urlString);
        ReadableByteChannel rbc;
        rbc = Channels.newChannel(website.openStream());
        FileOutputStream fos = new FileOutputStream(destination);
        fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
        fos.close();
        rbc.close();
    }

}
`,
          },
        ],
      },
    ],
  },
  {
    type: 'file',
    filename: 'HELP.md',
    path: '/HELP.md',
    content: `# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)

### Guides
The following guides illustrate how to use some features concretely:

* [Creating CRUD UI with Vaadin](https://spring.io/guides/gs/crud-with-vaadin/)`,
  },
  {
    type: 'file',
    filename: 'mvnw',
    path: '/mvnw',
  },
  {
    type: 'file',
    filename: 'mvnw.cmd',
    path: '/mvnw.cmd',
  },
  {
    type: 'file',
    filename: 'pom.xml',
    path: '/pom.xml',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.5.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.example</groupId>
	<artifactId>demo</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>demo</name>
	<description>Demo project for Spring Boot</description>
	<properties>
		<java.version>1.8</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>
	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>`,
  },
  {
    type: 'folder',
    filename: 'src',
    path: '/src/',
    hidden: true,
    children: [
      {
        type: 'folder',
        filename: 'main',
        path: '/src/main/',
        children: [
          {
            type: 'folder',
            filename: 'java',
            path: '/src/main/java/',
            children: [
              {
                type: 'folder',
                filename: 'com',
                path: '/src/main/java/com/',
                children: [
                  {
                    type: 'folder',
                    filename: 'example',
                    path: '/src/main/java/com/example/',
                    children: [
                      {
                        type: 'folder',
                        filename: 'demo',
                        path: '/src/main/java/com/example/demo/',
                        children: [
                          {
                            type: 'file',
                            filename: 'DemoApplication.java',
                            path:
                              '/src/main/java/com/example/demo/DemoApplication.java',
                            content: `package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}`,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'folder',
            filename: 'resources',
            path: '/src/main/resources/',
            children: [
              {
                type: 'file',
                filename: 'application.properties',
                path: '/src/main/resources/application.properties',
                content: `
                  `,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'folder',
    filename: 'test',
    path: '/test/',
    hidden: true,
    children: [
      {
        type: 'folder',
        filename: 'main',
        path: '/test/main/',
        children: [
          {
            type: 'folder',
            filename: 'java',
            path: '/test/main/java/',
            children: [
              {
                type: 'folder',
                filename: 'com',
                path: '/test/main/java/com/',
                children: [
                  {
                    type: 'folder',
                    filename: 'example',
                    path: '/test/main/java/com/example/',
                    children: [
                      {
                        type: 'folder',
                        filename: 'demo',
                        path: '/test/main/java/com/example/demo/',
                        children: [
                          {
                            type: 'file',
                            filename: 'DemoApplication.java',
                            path:
                              '/test/main/java/com/example/demo/DemoApplicationTests.java',
                          },
                        ],
                      },
                      {
                        type: 'folder',
                        filename: 'static',
                        path: '/test/main/java/com/example/static/',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export default TREE
