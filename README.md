# API Server for FakeJSON

## Description

I was working on a project that required a lot of fake data. <br>
I needed a quick way to create a bunch of objects with the same structure _but_ with different data. <br>

This is a simple [Node.js/Express.js] API server that returns fake JSON / objects, useful when testing out an app.

The data is randomized via the _awesome_ [Faker.js](https://fakerjs.dev) JavaScript library.

In order to customize the key/value pairs to your needs, reference the [Faker.js API](https://fakerjs.dev/api).

## Installation

1. Clone this repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the server
4. Open your browser and go to `http://localhost:3000` + the path you want to use

## Usage

### One Object

`http://localhost:3000/api/accounts`

### Multiple Objects

`http://localhost:3000/api/accounts/5`
