# AdoptMeNow App Server

AdoptMeNow is an app that allows people to adopt rescued animals from Adopt Me Now shelter. This app has:

- REST endpoint for todo's CRUD operation
- JSON formatted response

&nbsp;

# REST endpoints

- `GET /`
- `POST /register`
- `POST /login`
- `GET /pet/find/:filter`
- `POST /pet/register`
- `PATCH /pet/updatePetStatus/:id`
- `GET /pet/pending`
- `GET /pet/updatePet/:id`
- `PUT /pet//updatePet/:id`
- `DELETE /pet/delete/:id`

## POST /

_Request Header_

```
{
  "access_token": "access_token"
}
```

_Request Body_

```
not needed
```

_Success Response_

```
code: 200

content:
[
  {
    "id": 1
    "name": "Bob",
    "description": "Healthy",
    "status": "available",
    "type": "cat"
    "imageUrl": "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    "sex": "male"
    "age": 3
  }
]
```

## POST /register

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "admin@mail.com",
  "password": "123456",
  "name": "admin",
  "role": "admin"
}
```

_Success Response_

```
code: 201

content:

{
  "id": 1,
  "password": "$2a$10$9idBz7xT1tDoUWVQsCm50uSZAKJsuR4V4zK9HSKA.EP5ETh3riFoS",
  "name": "admin",
  "role": "admin"
}

```

&nbsp;

## POST /login

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "admin@mail.com",
  "password": "123456",
}
```

_Success Response_

```
code: 200

content:

{
  "id": 1,
  "name": "admin",
  "role": "role",
  "access_token": "access_token"
}

```

&nbsp;

## GET /pet/register

_Request Header_

```
{
  "name": "Bob",
  "description": "Healthy",
  "status": "available",
  "type": "cat"
  "imageUrl": "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "sex": "male"
  "age": 3,
  "userId": 1
}
```

_Request Body_

```
not needed
```

_Success Response_

```
code: 201

content:

{
  "id": 1,
  "name": "Bob",
  "description": "Healthy",
  "status": "available",
  "type": "cat"
  "imageUrl": "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "sex": "male"
  "age": 3,
  "userId": 1
}

```

&nbsp;

## PATCH /pet/updatePetStatus/:id

_Request Header_

```
{
  "status": "avalaible"
}
```

_Request Params_

```
{
  "id": 1
}
```

_Success Response_

```
code: 200

content:
{
  "id": 1,
  "name": "Bob",
  "description": "Healthy",
  "status": "available",
  "type": "cat"
  "imageUrl": "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "sex": "male"
  "age": 3,
  "userId": 1
}
```

&nbsp;

## GET /pet/pending

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Request Params_

```
not needed
```

_Success Response_

```
code: 200

content:
{
  "id": 1,
  "name": "Bob",
  "description": "Healthy",
  "status": "available",
  "type": "cat"
  "imageUrl": "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "sex": "male"
  "age": 3,
  "userId": 1
}

```

&nbsp;

## PATCH /pet/updatePet/:id

_Request Header_

```
{
  "Content-Type": "application/json"
}
```

_Request Body_

```
{
  "status": true
}
```

_Request Params_

```
{
  "id": 1
}
```

_Success Response_

```
{
  "id": 1,
  "name": "Bob",
  "description": "Healthy",
  "status": "available",
  "type": "cat"
  "imageUrl": "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "sex": "male"
  "age": 3,
  "userId": 1
}
```

&nbsp;

## PUT /pet/updatePet/:id

_Request Header_

```
{
  "id": 1,
  "name": "Bob",
  "description": "Healthy",
  "status": "available",
  "type": "cat"
  "imageUrl": "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "sex": "male"
  "age": 3,
  "userId": 1
}
```

_Request Body_

```
not needed
```

_Request Params_

```
{
  "id": 1
}
```

_Success Response_

```
{
  "id": 1,
  "name": "Bob",
  "description": "Healthy",
  "status": "available",
  "type": "cat"
  "imageUrl": "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "sex": "male"
  "age": 3,
  "userId": 1
}
```

&nbsp;

## DELETE /pets/delete/:id

_Request Header_

```
{
  "Content-Type": "application/json"
}
```

_Request Params_

```
{
  "id": 1
}
```

_Success Response_

```
{
  message: 'Pet success to delete'
}

```
