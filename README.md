# Megalabs Mobile App

A cross-platform mobile application built with Ionic Framework, Vue.js, and Capacitor.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

### Optional
- [Ionic CLI](https://ionicframework.com/docs/cli)


## Installation

1. Clone the repository:

```bash
git clone 
```

2. Navigate to the project directory:

```bash
cd megalabs
npm install
```

## Development

### Running the Web Version

To start the development server:

#### With npm

```bash
npm run dev
```

#### With ionic

```bash
ionic serve
```

### Running the Mobile Version

To run the mobile version, you need to have the necessary development environments set up for iOS and Android.

#### iOS

#### With npm

```bash
npm run build
npx cap sync
npx cap open ios
```

#### With ionic

```bash
ionic build
npx cap sync
npx cap open ios
```

#### Android

#### With npm

```bash
npm run build
npx cap sync
npx cap open android
```

#### With ionic

```bash
ionic build
npx cap sync
npx cap open android
```


