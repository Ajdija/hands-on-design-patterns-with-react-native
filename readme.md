#### Hands-on Design Patterns with React Native

This is a public repository provided to a book readers and potential book readers. Here you can access full examples that are mentioned in a book but could not fit entirely. Each example is standalone and you need to install dependencies (`yarn install --pure-lockfile`) and then run expo within that example directory (`yarn start`).

#### Author note

Frameworks and libraries come and go. Design patterns usually stay for longer. In this book we do a mix of learning React Native and design patterns relevant to this ecosystem.
I'm really happy I can share my experience and patterns that I have learnt. Hopefully you will use this knowledge to build well thought and easy to maintain codebases.
Good luck with this endeavours!

Mateusz Grzesiukiewicz

#### Installation step-by-step

1. Navigate to the example directory, for instance:
```
cd src/Chapter\ 1\:\ React\ component\ patterns/Example\ 1\:\ Hello\ World/
```

2. Install dependencies
```
yarn install --pure-lockfile
```
` --pure-lockfile` is used to ensure all dependencies are installed based on the `yarn.lock` file I checked-in. You may omit it to install latest dependencies but those may include breaking changes and the build may fail.

3. Install Expo

[Installation guide](https://docs.expo.io/versions/latest/introduction/installation)

You will need Expo XDE for your desktop. If you want to check apps on your real phone, then also install respective iOS or Android application from the above link.

4. Open Expo XDE

Choose `Open existing project...` and navigate to example directory.

The build will run and feedback will be displayed on the console.

When the build finishes send yourself a link to the app. I prefer to use share button at the top and send myself link in an email.
