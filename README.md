# Star Wars Explorer

## Info

This web client uses React Hooks to create a view for browsing of Star Wars film data. The project is using a free and publicly available API service called [SWAPI](https://swapi.dev/).

![star-wars-explorer](https://user-images.githubusercontent.com/1487469/182269771-87c55abb-182d-4883-9557-d6a729cc398a.gif)

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


## Architecture & Techincal Choices

### Separation of concerns
The software structure follows a separation of concerns principle. The `/containers/` load the data via API requests, while the `/components/` are used to pass that data down with props. This can make the components a lot more reusable as they are not bound to handle only one type of data.

### Reducing the amount of requests
The pagination uses the pagination system that the API comes with to avoid additional request to the endpoint. Instead of loading all the entries and paginating them, the client only loads what is available in the `?page=${currentPage}` endpoint of each page.

### Error handling
If the API endpoint is faulty React Router will automatically send you to an error page that gives some feedback to the user. Also when a user enters an invalid URL it sends you to the same error page.

### Using React Hooks
I used React Hooks for this project because it is well-suited to this lightweight API client.

### Performance
I used `useCallback` to memoize functions and `useMemo` to memoize values.

## If I had more time I would:
- Add more details to the entity page
- Make React Router structure more reusable. Render the `<Router/>` components from an `[array]`
- Add a unit test suite with Jest 
- Add more component stories in Storybooks

## How to use the website

1. Select one on of the categories
2. The entities for each category will be listed in a table
3. Use the "Read More" button to read more about each entity in a separate page

## Disclaimer

This is for tech demo purposes and this project is not affiliated with Star Wars or Disney in any way.

