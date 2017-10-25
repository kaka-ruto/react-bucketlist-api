# React-bucketlist-api
A front-end built using React JS to consume this [flask-bucketlist-api](https://github.com/borenho/flask-bucketlist-api)

## Requirements

For development, you will only need Node.js installed.

### Node

[Node](http://nodejs.org/) is really easy to install & now includes [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v6.9.5 (at the time of this doc)

    $ npm --version
    5.3.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install the Project

    $ git clone https://github.com/borenho/react-bucketlist-api.git
    $ cd react-bucketlist-api
    $ npm install  (Installs all the dependencies required to run the project)

### Configure app

Curently, my Heroku version of the Python [api](https://github.com/borenho/flask-bucketlist-api)  is not working (am working on it then update the urls that send requests to the api to query heroku instead of the local setup)
But for now, install the api locally and run it

## Start & watch
On the `react-bucketlist-api` directory,run

    $ npm start (or yarn start)
