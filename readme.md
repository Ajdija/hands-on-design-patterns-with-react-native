#### Hands-on Design Patterns with React Native

This is a public repository provided to a book readers and potential book readers. Here you can access full examples that are mentioned in a book but could not fit entirely. Each example is standalone and you need to install dependencies (`yarn install --pure-lockfile`) and then run expo within that example directory (`yarn start`).

#### Author note

Frameworks and libraries come and go. Design patterns usually stay for longer. In this book we do a mix of learning React Native and design patterns relevant to this ecosystem.
I'm really happy I can share my experience and patterns that I have learnt. Hopefully you will use this knowledge to build well thought and easy to maintain codebases.
Good luck with this endeavours!

Mateusz Grzesiukiewicz

#### Setup ####
1. Install Git https://git-scm.com/downloads
2. Install Node.js 8.X.
On Linux or Mac you should use nvm.
L/M, 1.1) Install nvm https://github.com/creationix/nvm#install-script
L/M, 1.2) Install Node.js using nvm $ nvm install 8.11.4

On Windows install Node.js with executable file.
W, 1.1) Install Node.js 8.X https://nodejs.org/en/download/
Install Git https://git-scm.com/downloads
Install watchman https://facebook.github.io/watchman/docs/install.html
Install the create-react-native-app CLI
$ npm install -g create-react-native-app

3. Install yarn https://yarnpkg.com/lang/en/docs/install/﻿

4. Install watchman
https://facebook.github.io/watchman/docs/install.html

5. Install the create-react-native-app CLI

```bash

$ npm install -g create-react-native-app

```

#### Run projects ####

1. Open terminal

2. Download code files from GitHub repository.
GitHub repository link: https://github.com/Ajdija/hands-on-design-patterns-with-react-native
Example terminal command downloading the code:
```bash
$ git clone git@github.com:Ajdija/hands-on-design-patterns-with-react-native.git
```

3. Go to the example folder and install dependencies. Example folders are located in src directory within downloaded code files directory. You need to change directory to the specific Example directory. For instance:
```bash
$ cd ./src/Chapter_1_React_component_patterns/Example_1_Hello_World
$ yarn install --pure-lockfile
```
--pure-lockfile is used to ensure all dependencies are installed based on the yarn.lock file I checked-in. You may omit it to install latest dependencies but those may include breaking changes and the build may fail.

4. **Linux and Mac** users should change the Node.js version to the expected one using the below command.
```bash
$ nvm use
```

**Further steps depend on the hardware you have and the emulator you want to use.**
- [Run on iOS (If you have a MacBook)](https://github.com/Ajdija/hands-on-design-patterns-with-react-native#run-on-ios)
- [Run on Android](https://github.com/Ajdija/hands-on-design-patterns-with-react-native#run-on-android)
- [Run on a real phone](https://github.com/Ajdija/hands-on-design-patterns-with-react-native#run-on-a-real-phone)

##### Run on iOS

1. Install XCode

2. If running Examples from chapter 6, 7, 8, 9, 10, 11 then you need to run the below command in terminal to bring up a local server.
If you skipped the setup process above then remember to navigate to the respective example directory first.
```bash

$ yarn run server

```

3. Run on terminal

```bash

$ yarn run ios

```

If running Examples from chapter 10 or chapter 11 then you may also use storybook version.
```bash

$ yarn run ios:storybook

```

##### Run on Android

1. Install Java JDK

2. Install Android Studio and config Android Studio AVD emulator


3. If running Examples from chapter 6, 7, 8, 9, 10, 11 then you need to run the below command in terminal to bring up a local server.
If you skipped the setup process above then remember to navigate to the respective example directory first.
```bash

$ yarn run server

```

4. Open emulator

5. Run on terminal

```bash

$ yarn run android

```

If running Examples from chapter 10 or chapter 11 then you may also use storybook version.
```bash

$ yarn run android:storybook

```

##### Run on a real phone

1. Install Expo

[Installation guide](https://docs.expo.io/versions/latest/introduction/installation)

You will need Expo XDE for your desktop. Also install respective iOS or Android application from the above link.

2. Open Expo XDE

Choose `Open existing project...` and navigate to example directory.

The build will run and feedback will be displayed on the console.

When the build finishes send yourself a link to the app. I prefer to use share button at the top and send myself link in an email that I open on the device.
