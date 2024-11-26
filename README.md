# Mini Pokedex App

A simple Pokémon app that allows users to search for Pokémon, view their details, stats, and evolutions. Built with React Native, Expo, and React Navigations.

## Features

- Search Pokémon: Enter the name of a Pokémon to find it quickly. The search uses Fuse to help kids spell.
- View Pokémon Details: See stats like HP, attack, and defense, as well as evolution details.
- See a random Pokémon in the Random tab.

## Tools/Dependencies

- Expo: A platform to streamline React Native development with simplified setup and tools.
- React navigation: Handles app navigation.
- React Query: Manages and caches API data.
- Styled Components: Enables CSS-in-JS styling for React Native components.
- Fuse.js: For fuzzy search functionality in Pokémon search.
- React testing library: For testing React Native components.

## Setup Instructions

1. Clone the Repository

```
git clone https://github.com/skontan/mini-pokedex.git
cd mini-pokedex
```

2. Install dependencies

```
npm install
```

3. Run app

```
npm start
```

4. Use Expo go

- Using the Expo go app or a simulator on your computer you can test the app. This is mainly tested on IOS 😅

## Running Tests

There is only one big integration test, which can be run with:

```
npm test
```
