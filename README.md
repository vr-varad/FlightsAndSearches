# Welcome to Flights Service
## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh
downloaded project.
- Create a `env` file in the root directory and add the following environment
variable.
    -`PORT=3000`
- Inside the 'src/config- folder create a new file 'config.json- and then add
the following piece of json
```
{
  "development": {
    "username": "<Your_DB_login_name>",
    "password": <Your_DB_password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above, go to the src folder from
your terminat and execute 'npx sequelize db:create`.
and then exexute 
`npx sequelize db:migrate`

## DB design

- Airplane Table
- Flight Table
- City
- Airport Table

- A flight belong to an airplane but an airplane can belong to many flights.
- A city has many airports but an airport belong to one city.
- A airport can have many flight but a flight belong to on airport.

## Tables

### City Table -> id , name, createdAt, updatedAt
### Airport Table -> id, name, address, city_id, createdAt, updatedAt
    RelationShips -> City has many airports and airport belong tp a city.