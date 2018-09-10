#### Hands-on Design Patterns with React Native

This is a public repository provided to a book readers and potential book readers. Here you can access full examples that are mentioned in a book but could not fit entirely. Each example is standalone and you need to install dependencies (`yarn install --pure-lockfile`) and then run expo within that example directory (`yarn start`).

#### Author note

Frameworks and libraries come and go. Design patterns usually stay for longer. In this book we do a mix of learning React Native and design patterns relevant to this ecosystem.
I'm really happy I can share my experience and patterns that I have learnt. Hopefully you will use this knowledge to build well thought and easy to maintain codebases.
Good luck with this endeavours!

Mateusz Grzesiukiewicz

#### Setup ####

1. Install nvm
https://github.com/creationix/nvm#install-script

2. Install Node.js using nvm

```bash

nvm install 8.11.4

```

3. Install watchman
https://facebook.github.io/watchman/docs/install.html

4. Install the create-react-native-app CLI

```bash

$ npm install -g create-react-native-app

```

#### Run projects ####

- Open terminal

- Go to the example folder and install dependencies. Example folders are located in src directory. You need to change directory to the specific Example directory.
For instance:

```bash

$ cd ./src/Chapter_1_React_component_patterns/Example_1_Hello_World
$ yarn install --pure-lockfile

```

` --pure-lockfile` is used to ensure all dependencies are installed based on the `yarn.lock` file I checked-in. You may omit it to install latest dependencies but those may include breaking changes and the build may fail.

- Change Node.js version to the expected one.

```bash

nvm use

```

- Run on iOS (If have a MacBook)

1. Install XCode

2. Run on terminal

```bash

$ yarn run ios

```

- Run on Android

1. Install Java JDK

2. Install Android Studio and config Android Studio AVD emulator

3. Open emulator

4. Run on terminal

```bash

$ yarn run android

```

- Run on a real phone

1. Install Expo

[Installation guide](https://docs.expo.io/versions/latest/introduction/installation)

You will need Expo XDE for your desktop. Also install respective iOS or Android application from the above link.

2. Open Expo XDE

Choose `Open existing project...` and navigate to example directory.

The build will run and feedback will be displayed on the console.

When the build finishes send yourself a link to the app. I prefer to use share button at the top and send myself link in an email that I open on the device.
