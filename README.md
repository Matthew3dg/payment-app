# payment-app

(iPhone 15 - iOS 17.2 Simulator screenshots)
<img width="1179" height="2556" alt="simulator_screenshot_B8405F86-4286-42A7-9530-27B00058CAD8" src="https://github.com/user-attachments/assets/6fecb52a-dcdf-429f-a5bc-946cfd36095a" />
<img width="1179" height="2556" alt="simulator_screenshot_31E9D8FF-9AC3-4253-9DE0-116E4B148BB7" src="https://github.com/user-attachments/assets/5632d839-e97c-4f95-8f51-ceea1d06ea0c" />

A mini app built with Expo + React Native (Expo Router) featuring Home / Payments / History / Analytics / Chats tabs and a separate Notifications screen. Uses SVG icons, a custom `metro` config, path aliases, and TypeScript.

## Tech Stack

- Expo 54, Expo Router 6
- React 19, React Native 0.81
- React Navigation Bottom Tabs
- TypeScript (strict)
- react-native-svg + react-native-svg-transformer (import SVG as components)
- Safe Area Context, Expo StatusBar, Expo Image

## Requirements

- Node.js LTS
- Yarn or npm
- Xcode (for iOS) / Android Studio (for Android)

## Installation & Run

```bash
# install dependencies
yarn
# or
npm install

# start dev server
yarn start
# quick start for specific platform
yarn ios-dev     # opens iOS simulator
yarn android-dev # opens Android emulator
yarn web         # web version
```

Alternatively:

```bash
yarn ios      # run native iOS project
yarn android  # run native Android project
```

## Scripts

Available in `payment-app/package.json`:

- `start` — starts Metro and Expo DevTools
- `ios-dev` / `android-dev` / `web` — quick dev targets per platform
- `ios` / `android` — native run via `expo run:*`
- `prebuild` — generates native iOS/Android projects
- `lint` — linting via `eslint-config-expo`

## Routing

Powered by `expo-router` with a root stack and tabs:

- Root stack: `app/_layout.tsx` — header hidden, initial route `app/(tabs)`, plus `app/notifications/index.tsx`.
- Tabs: `app/(tabs)/_layout.tsx` — tabs: `index` (Home), `payments`, `history`, `analytics`, `chats` with custom SVG icons via `IconWrap`.
- Home screen: `app/(tabs)/index.tsx` re-exports `src/pages/home`.
- Notifications screen: `app/notifications/index.tsx`.

Typed routes are enabled (`experiments.typedRoutes: true`).

## Path Aliases

`tsconfig.json` defines an alias:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Import example: `import IconWrap from "@/src/shared/ui/IconWrap"`.

## SVG as React Components

`react-native-svg-transformer` is enabled and `metro.config.js` is updated:

```js
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],
};
```

This allows:

```tsx
import Mastercard from "@/assets/icons/Mastercard.svg";
<Mastercard width={26} height={16} />;
```

Also, `src/types/svg.d.ts` declares types for importing `.svg` in TypeScript.

## UI & Screens

- `Home` (`src/pages/home`): header with avatar and QR, categories, cards with backgrounds (`assets/images/Card-bg-1.png`, `Card-bg-2.png`), expenses block, and transaction lists (`Section`).
- `Notifications` (`src/pages/notifications`): filter tabs (Today/This week/Archive, etc.), notification lists (`Section`).
- Shared components: `src/shared/ui/IconWrap` (active tab icon wrapper).

Color scheme: dark background, accent `#FE5900`/`#FF6A00`.

## App Config

`app.json` (Expo):

- `scheme: "paymentapp"`
- iOS: `bundleIdentifier: com.anonymous.payment-app`
- Android: edge-to-edge, adaptiveIcon
- Web: static output, `favicon`
- Plugins: `expo-router`, `expo-splash-screen`

## Build

Before native builds, run prebuild if you need to customize native code:

```bash
yarn prebuild
```

Build and run:

```bash
yarn ios
# or
yarn android
```

## Linting

```bash
yarn lint
```

## License

MIT
