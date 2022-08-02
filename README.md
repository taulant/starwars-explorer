# Star Wars Explorer

## Info

This web client uses React Hooks to create a view for browsing of Star Wars film data. The project is using a free and publicly available API service called [SWAPI](https://swapi.dev/).

![star-wars-explorer](https://user-images.githubusercontent.com/1487469/182269771-87c55abb-182d-4883-9557-d6a729cc398a.gif)

How to use the website

1. Select one on of the categories
2. The entities for each category will be listed in a table
3. Use the "Read More" button to read more about each entity in a separate page

## Disclaimer

This is for tech demo purposes and this project is not affiliated with Star Wars or Disney in any way.

## Before you run this project

It is recommended to use yarn for installing and running this project. To check if you have yarn installed run the following command in your terminal app.

```
$ yarn --version
```

If you don't have yarn installed run the following command to install it globally.

```
$ npm install --global yarn
```

For more info about yarn look at [yarn's official installation documentation](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

## How to run the project

First you need to `cd` into the the project folder and run the `yarn install` command to install the packages and dependencies.

```
$ yarn install
```

If `yarn install` command ran correctly then you will be ready to run the project with the command below.

```
$ yarn start
```

If all went correctly `yarn start` will run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running Storybook

Storybook facilitates the indexing and testing the states of components.
While inside the project root folder, run storybook with the command below.

```
$ yarn storybook
```
