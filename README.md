# WorkoutTracker
Easy track your workout progressions

### Pre-requisites
- Android SDK Platform 28 (platforms;android-28)
- Sources for Android 28 (sources;android-28)
- Ruby v2.5.1
- Install [direnv](https://github.com/direnv/direnv) (see below)

```sh
$ brew update
$ brew install direnv
```
- Follow the instructions to add `direnv` to your path, on bash add `eval "$(direnv hook bash)"` to your `.bashrc`
- Allow the .envrc

```sh
$ direnv allow
```

### Running apps
```sh
$ brew cask install react-native-debugger
$ npm install -g grunt-cli
$ grunt server
```

- Install android emulator and start app
```
$ sh scripts/emulator_manager.sh
$ grunt android
```

- Install XCode via the Mac AppStore and start app
```
$ grunt ios
```

### Todo
- [x] Add Grunt Task Runner
- [ ] Add Redux
- [ ] Add Linting
- [ ] Add Icons
- [ ] Create Debug / Dev / Live envs
- [ ] Add React Native Debugger
