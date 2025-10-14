# The React Native & Expo App Template

This is the most modern and always up-to-date React Native & Expo app template. It comes with sensible defaults, a great developer experience and is optimized for performance. You can read more about the DevX setup in this [frontend tooling article](https://cpojer.net/posts/fastest-frontend-tooling-in-2022). Check out the corresponding [web app template](https://github.com/nkzw-tech/vite-ts-react-tailwind-template).

<img src="https://github.com/user-attachments/assets/91a4b790-fde8-46f9-8052-1f678b319fbf" width="49%" />
<img src="https://github.com/user-attachments/assets/e93b1a95-cd44-4df8-9b6d-8ae797810375" width="49%" />

## Technologies

You have to make a lot of decisions and install tons of packages every time you create a new React Native app. This template offers an opinionated starting point and includes the best options for various categories. Instead of spending hours on research and piecing together a setup that works, you can just copy this template and start right away. When you copy this template, you get full control to add or remove any third-party package to customize your app.

- Expo 54 & React Native 0.81 with the New Architecture.
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Nativewind](https://www.nativewind.dev/) & [Tailwind CSS](https://tailwindcss.com/)
- [fbtee](https://github.com/nkzw-tech/fbtee) for i18n.
- [TypeScript](https://www.typescriptlang.org)
- [React Compiler](https://react.dev/learn/react-compiler)
- [`@gorhom/bottom-sheet`](https://github.com/gorhom/react-native-bottom-sheet), [Legend List](https://github.com/LegendApp/legend-list), [`react-native-svg`](https://github.com/software-mansion/react-native-svg) (+ `react-native-svg-transformer`).
- [pnpm](https://pnpm.io/)
- **ESM:** _It's 2025._ This template comes with `"type": "module"`.
- _(Optional)_ [Relay](https://relay.dev/) for data fetching -> check out the [`with-relay` branch](https://github.com/nkzw-tech/expo-app-template/tree/with-relay).

Check out the [`nkzw-tech/server-template`](https://github.com/nkzw-tech/server-template) for a GraphQL based server with Pothos and Prisma, or the [`nkzw-tech/web-app-template`](https://github.com/nkzw-tech/web-app-template) for building web apps.

## Getting Started

Start here: [Create a new app using this template](https://github.com/new?template_name=expo-app-template&template_owner=nkzw-tech).

After you created your repo, you can freely modify anything in this template.

### Prerequisites

You'll need Node.js 24, pnpm 10+ and Cocoapods.

```bash

brew install node pnpm cocoapods
```

For building and running apps locally, follow the [Expo setup guides](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated).

### Installing Dependencies

Run:

```bash
pnpm install && pnpm dev:setup
```

### Running the iOS App in a simulator

```bash
pnpm prebuild
pnpm ios
```

If you already have the app installed on your simulator, you can skip the above steps and simply run `pnpm dev` to start the development server.

## Contributing

Feel free to open issues, initiate discussions and send PRs to improve the template.
