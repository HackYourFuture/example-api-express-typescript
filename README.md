# Example API for HackYourFuture Angular class

To start the app, first `cd` to the folder where this readme is located. Then:
```
npm install -g gulp
npm install
gulp
node dist/server.js
```

This should result in something like:

```
Users API listening on port 3000
```

*!KEEP THIS TAB OPEN! it will wait for your requests* 

In your browser, go to [http://localhost:3000](http://localhost:3000)

This should show a friendly message :). 

Other methods, like POST and PATCH and DELETE can only be made from either [Postman](https://www.getpostman.com) or from your Angular application.


## Possible requests and example response
Response body:
### GET `/` -
Response - 200 - Body:
```{"message": "Users API up and running!"}```

### GET `/v1/users`
Response - 200 - Body:
```
[
  {
    "firstName": "Piet",
    "lastName": "Friet",
    "age": 72,
    "email": "pietfriet@gmail.com",
    "profilePictureUrl": "http://retailparkroermond.com/nl/horeca/piet-friet/afbeeldingen/piet-friet-l.png",
    "_id": "8m0nGYgSttzCNG0t"
  }
]
```

### POST `/v1/users` 
Request body:
```
{
  "firstName": "Piet",
  "lastName": "Friet",
  "age": 72,
  "email": "pietfriet@gmail.com",
  "profilePictureUrl": "http://retailparkroermond.com/nl/horeca/piet-friet/afbeeldingen/piet-friet-l.png"
}
```

Response body:
```
{
  "firstName": "Piet",
  "lastName": "Friet",
  "age": 72,
  "email": "pietfriet@gmail.com",
  "profilePictureUrl": "http://retailparkroermond.com/nl/horeca/piet-friet/afbeeldingen/piet-friet-l.png",
  "_id": "B1w2s30z2L3n0Jrj"
}
```

### PATCH `/v1/users/B1w2s30z2L3n0Jrj` 
Request body:
```
{
  "firstName": "NewFirstName"
}
```

Response (if user exists in database) - 204 - Body:
```
(empty)
```

Response (if user does not exist in database) - 404 - Body:
```
{"Reason": "That user does not exist"
```

### DELETE `/v1/users/B1w2s30z2L3n0Jrj` 
Request body:
```
{
  "firstName": "NewFirstName"
}
```

Response (if user exists in database) - 204 - Body:
```
(empty)
```

Response (if user does not exist in database) - 404 - Body:
```
{"Reason": "That user does not exist"
```