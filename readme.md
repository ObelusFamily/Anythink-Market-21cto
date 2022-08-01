# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. So first things first, we need to install Docker and docker-compose to make things easier for setup in local machine. Download from [here](https://docs.docker.com/get-docker/).

> After installing you can run ```docker -v``` and ```docker-compose -v``` to verify installation. Also you can use ```docker exec``` to run commands in the containers.

2. Run ```docker-compose up``` from the ```/``` root directory to load both Frontend and Backend.

3. Test if the backend is runnnig and connected with database by pointing your browser to [http://localhost:3000/api/ping](http://localhost:3000/api/ping).
4. Now test your frontend by going to [http://localhost:3001/register](http://localhost:3001/register). Create a new user with this.

🥳 Congratulations! You have successfully setup the app.


