#### Hands-on Design Patterns with React Native

This is a public repository provided to a book readers and potential book readers. Here you can access full examples that are mentioned in a book but could not fit entirely. Each example is standalone and you need to install dependencies (`yarn install --pure-lockfile`) and then run expo within that example directory (`yarn start`).

#### Author note

Frameworks and libraries come and go. Design patterns usually stay for longer. In this book we do a mix of learning React Native and design patterns relevant to this ecosystem.
I'm really happy I can share my experience and patterns that I have learnt. Hopefully you will use this knowledge to build well thought and easy to maintain codebases.
Good luck with this endeavours!

Mateusz Grzesiukiewicz

#### Setup ####
1. Install Git https://git-scm.com/downloads
1. Install Node.js 8.X.
   1. Linux/Mac:
      1. Install nvm https://github.com/creationix/nvm#install-script
      1. Linux/Mac Install Node.js using nvm $ nvm install 8.11.4
   1. Windows: install Node.js with executable file.
      1. Install Node.js 8.X https://nodejs.org/en/download/
1. Install Git https://git-scm.com/downloads
1. Install yarn https://yarnpkg.com/
1. Install watchman https://facebook.github.io/watchman/docs/install.html
1. Install the create-react-native-app CLI
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

If having troubles then see [Frequently asked questions section](https://github.com/Ajdija/hands-on-design-patterns-with-react-native#faq).


##### Run on Android

1. Install Java JDK, go to this page and select JDK: http://www.oracle.com/technetwork/java/javase/downloads/index.html
2. Install Android Studio and config Android Studio AVD emulator
   1. Install Android Studio https://developer.android.com/studio/
   1. You may need to "Install missing platform(s) and sync project. https://i.stack.imgur.com/nZHpF.png
   1. Install virtual device https://www.dev2qa.com/how-to-create-android-virtual-device-avd-in-android-studio/
   1. Some of you may not see options from the above guide, if so follow this fixes: https://www.google.com/url?q=https://stackoverflow.com/questions/47173708/why-avd-manager-options-are-not-showing-in-android-studio&source=gmail&ust=1537538423306000&usg=AFQjCNGPRyvtJ70n8KtPhcH4C34lJN2Fxw
   1. If your virtual device has issues starting because of "emulation requires hardaware acceleration" then follow this solution https://stackoverflow.com/questions/29136173/emulator-error-x86-emulation-currently-requires-hardware-acceleration
3. If running Examples from chapter 6, 7, 8, 9, 10, 11 then you need to run the below command in terminal to bring up a local server. If you skipped the setup process above then remember to navigate to the respective example directory first.
```bash

$ yarn run server

```
4. Open emulator
5. Run on terminal
```bash

$ yarn run android

```
6. If running Examples from chapter 10 or chapter 11 then you may also use storybook version.
```bash

$ yarn run android:storybook

```

If having troubles then see [Frequently asked questions section](https://github.com/Ajdija/hands-on-design-patterns-with-react-native#faq).

##### Run on a real phone

1. Install Expo

[Installation guide](https://docs.expo.io/versions/latest/introduction/installation)

You will need Expo XDE for your desktop. Also install respective iOS or Android application from the above link.

2. Open Expo XDE

Choose `Open existing project...` and navigate to example directory.

The build will run and feedback will be displayed on the console.

When the build finishes send yourself a link to the app. I prefer to use share button at the top and send myself link in an email that I open on the device.

3. You may need to be connected to the same WiFi on the computer and a phone. Public WiFi may not work.

4. If still experiencing problems try the steps from this link: https://facebook.github.io/react-native/docs/running-on-device

#### FAQ

##### Bootstrap note
All of the examples from this book were bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
The most recent version of Create React Native App guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

##### I see the app but it says "Network request failed"
If you are running examples from chapters 6, 7, 8, 9, 10 or 11 you should also start the server first.
```bash

$ yarn run server

```

##### Websocket connection error
Sometimes you need to close emulator and then rerun either `yarn run ios` or `yarn run android`. CTRL+R / CMD+R may give you the old app in some circumstances so closing the emulator and rerunning the command is the quickest fix.

##### Storybook not showing, instead I see a regular app.
Sometimes you need to close emulator and then run either `yarn run ios:storybook` or `yarn run android:storybook`. CTRL+R / CMD+R may give you the old app in some circumstances so closing the emulator and rerunning the command is the quickest fix.
