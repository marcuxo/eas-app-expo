## Expo update EAS
[tutorial based on this video](https://www.youtube.com/watch?v=2ICOVstF6rU&t=14s)

### install eas/cli global 
```cmd
  npm install --global eas-cli
```

### login with eas
```cmd
  eas login
```

### intall expo-updates
```cmd
  expo install expo-updates
```

### create config file in proyect
```cmd
  eas update:configure
```
#### see in the files eas.json

### config build
```cmd
  eas build:configure
```

### update proyect an dependencies to app in expo web and app in client
```cmd
  eas update --branch preview --message "update the APP"
```

## eas usin Pull Request
### create config file in proyect
create file to push PR in server EXPO
.github/workflows/update.yml 
#### see in the files

## create expo token
go to [https://expo.dev/accounts/mantencion/settings/access-tokens](https://expo.dev/accounts/mantencion/settings/access-tokens)
`create token and copy`

# create repo on git and create Pull Request
* `create repo an push changes but quit to this commit .github/workflows/update.yml`\
* `create a new branch and add commit feat: updates`\
* `now in you repo settings ⚙ go to secrets=>actions and push btn new repository secret`\
* `and input name EXPO_TOKEN and token the tpken to expo`\
* `puch changes to this branch add file .github/workflows/update.yml bvefore omited and ejecuting Pull Request`\
* `this actios produce a error, to solucionte this error execute`\
```cmd
yarn
  // this action create a new file yarn.lock
```

`now puch a new commit and the error are reapir`\
`if PR no have errors, the app is update`\





### crear y alojar app en servidores de expo
```
expo build:android --release-channel preview
```
### subir cambios automaticamente a aplciacion instalada en usuario
```
expo publish --release-channel preview   
```