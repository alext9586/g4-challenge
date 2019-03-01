# Install Packages
Run the following command in the root folder:

`npm install`

# Create Databases

In MySql:
`create database g4_challenge;`

In BASH (to create the tables):
`knex migrate:latest`

# Run application
Server and client should be run in separate instances of terminal. Run following commands in root folder.

## Start server
`npm run server`

## Start client
`npm run client`

Open browser to `localhost:3000`