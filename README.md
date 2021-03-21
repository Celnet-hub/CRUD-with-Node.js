# (CRUD Operation) This is one of my tutorial classes in learning Node.js, Express and MongoDB

## Objective 
To build a simple CRUD operation. 

## bugs experienced
in **note_routes.js** line 11 error was __db.collection__ is not a function. Bug fixed by calling the MongoClient.db() method and passing the name of my database. See code **const db = database.db('notes'); //bug fixed**.