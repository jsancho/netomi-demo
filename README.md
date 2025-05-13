# Netomi AI Chat Demo

This project has been created with Expo

`npx create-expo-app@latest --template blank-typescript netomiDemo`

## Native support

Generated the platform-dependent folders to add native dependencies with

`npx expo prebuild`

## SDKs configuration

Added expo-build-properties to configured sdk versions

`npx expo install expo-build-properties`
SDK settings configured in `app.json`

## Netomi installation

Added the Netomi dependency

```
yarn add @netomi.com/netomi-chat-react-native
cd ios && pod install
```

Added the following permissions to `Info.plist`

```
<key>NSCameraUsageDescription</key>
<string> Your message for camera usage</string>
<key> NSMicrophoneUsageDescription</key>
<string> Your message for microphone usage</string>
<false/>
```

## Run

`npx expo run:android`

`npx expo run:ios`

## Add Netomi Bot Reference

Open `App.tsx` and replace the `NETOMI_BOT_REF_ID` constant with the `AI Agent` value from the Netomi Agentic Studio Dashboard

## Build for Production

`npx expo run:android --variant release`

`npx expo run:ios --variant release`
