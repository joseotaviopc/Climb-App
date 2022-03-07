# Começando

## Projeto

### Criação de um aplicativa pra organizar encontros de escalada com amigos
- Tela de splash
- Tela de login
- Autenticação/login social
- Tela inicial
  - Filtros
  - Encontros agendados
- Telas de agendamento
- Tela de detalhe do agendamento (botão de share)

## Ambiente de Desenvolvimento
- Node.js
- SDK Expo / não precisa de emulador, usa o celular
- Instalação do Expo cli
  - ```npm install expo-cli --global```
- Typescript
- Criando projeto
  - ```expo init```
- Diretório de arquivos:
  - assets: imagens de splash/icone
  - app.json: configs do aplicativo, **cor de fundo**, etc
  - App.tsx: Tela inicial da aplicação

## Para rodar o projeto
- ```expo start```
  - Abrir o expo no celular e ler o QRCode no modo Developer tools
  - Ou run in web browser

# Conceitos

## Componentes: *import { } from 'react-native'*
Componentes do RNative prontos, dependem do ```React from 'react'``` para o JSX
- Usando ```export default function App``` o ```import App from``` só enxerga a função App
- e usar ```export function App``` o ```import { App } from``` só enxerga várias funções

## Organização de Pastas do Projeto
- /src
- /src/screens
- /src/screens/SignIn
  - Tela de Sign In, *com um index.tsx e styles.ts*
- src/screens/Home
  - Página após o login
- /src/assets
  - icones/imagens internos do app
- /src/@types
  - Configurações de tipegam do ```Typescrypt```
- /src/global
- src/global/styles
  - Estilos globais, *theme.ts*
- src/components/ButtonIcon
- src/components/Background
- src/components/Profile
- src/components/Avatar

## Importante

### ```<StatusBar>```
- Configura a barra de status com o app

### ```<TouchableOpacity>```
- Define área sensível ao toque
**Trocado** por ```expo install react-native-gesture-handler```

### Iphone
```react-native-iphone-x-helper```
- calcula o espaço superior nos iphones novos

### Navegação
Core ```@react-navigation/native```

Expo ```expo install react-native-screens react-native-safe-area-context```

Estilo *Stack*
```yarn add @react-navigation/native-stack```

## Propriedades

## Estado

## Fonts
- Usando google fonts
  - ```expo install expo-font @expo-google-fonts/inter``` para fonte *Inter*, mudar /inter para outras
- ```expo install expo-app-loading``` para carregar o ```<Apploadin />``` enquanto a screen inicial carrega

## Background
- Criando gradiente com ```expo-linear-gradient```
  - aplicando no componente ```<Background>```, passando props *ReactNode* para os *childrens*

# *To-do*
## ====================
- 1:58
## ====================

``` js
<GestureHandlerRootView>
  <RectButton>
  </RectButton>
</GestureHandlerRootView>
```