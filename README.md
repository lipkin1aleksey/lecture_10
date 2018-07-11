# Calculator v.1.2

This is a simple calculator application based on iOS calc-app.

## About sctructure

There is are several design patterns used, such as:
```
1) Decorator: code\src\js\helpers\helpers.js line 43... decorates the function, removes spaces, converts to a number
```
```
2) Facade: code\src\app.js line 11-12. Simply call Calculator.init() to start working with calculator
```
```
3) Singleton: code\src\js\calc\menu.js
```


## Warning

Please don't merge gh-pages brunch with any other, it was created only for demonstration.

## Changelog

v1.2 Major changes in file structure, now you can simple init any numbers of calculators by new Calculator.init()  
v1.1 Add scientific type, display history and minor fixes in design.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to install:

```
npm
```
```
node.js
```
For run application in docker container - install docker from official [website](https://www.docker.com/)

### Installing

Clone Repository

```
git clone git@github.com:lipkin1aleksey/lecture_10.git
```
Go to project folder
```
cd code
```
Install dependencies
```
npm install
```
Start webpack dev server
```
npm run start
```
For start project in docker, in root directory run:
```
docker-compose build --no-cache
```
```
docker-compose up -d
```
## Built With

* [Webpack](https://webpack.js.org/)
* [SCSS](https://sass-lang.com/)
* [JavaScript]
* [Docker](https://www.docker.com/)
## Authors

* **Aleksey Lipkin** - *Initial work*