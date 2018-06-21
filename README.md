# Node template project

Template project to kickstart your Node development process using Express routing framework

## Getting Started

First clone the repo on your local machine using a terminal or a git client.
Run `npm install` to install all required dependencies.
Refer to [Deployment](#Deployment) section on how to deploy and run.

### `Prerequisites`

Node will run on any linux based kernel system as well as Microsoft Windows.

## Refer to this points on how to install on your OS:
* [Linux](https://nodejs.org/en/download/package-manager/)
* [Windows](https://nodejs.org/en/download/)
* [Mac](https://nodejs.org/en/download/)

### Installing

In order to start the project make sure that you have Node and npm installed.
Refer to section [Prerequisites](#Prerequisites) on how to install both.

When done run the following commands:
* `npm install`
* Create a new file in source folder (/) and name it .env
* Copy contents from .env.example into newly created file .env
* Refer to [Deployment](#Deployment) on how to run the server

In order to test the system you can use postman and create a simple get request as such:
* URL: localhost:3000/api/example :GET
* Response will be 200 OK and true boolean value

## Running the tests

Tests not yet initialized, comming soon using Mocha for both PostgreSQL and MongoDB

## Coding styles

All code is written using linter - EsLint to make sure styling is the same in all places.
Majority of the code is written using the latest ES6 sytanx such as shorthand operators,
async functions, arrow functions and so on...
As new and shorter coding syntaxes come out they will be implemented accordingly.

## Setting up on Windows
Only thing Windows users have to do is run the following command anywhere in their terminal
(not necessarily the project folder):
`npm install -g win-node-env`

Refer to [this](https://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman) post on stackoverflow for more info.

## `Deployment`

Navigate to project folder in your terminal:
* On Linux or Mac run the following command: `npm run dev`
* On Windows first refer to [Setting up on Windows] section and then run: `npm run dev`

## Authors

* **Filip Malek** - *Initial work* - [REX500](https://github.com/REX500)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration: [nephross](https://github.com/nephross)
