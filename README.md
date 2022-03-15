## Employee Nodejs

## Available end-points

### GET /employee

Gets all the available employee (2 sample employee).

### GET /employee/:id

Obtains an employee given its id.

### POST /employee

Creates an employee.

**Headers**

Content-Type : application/json

**Request body (raw)**

```
    {
        "id": "3",
        "name": "Lav Sharma",
        "role": "Associate Software Engineer",
        "age": "22",
        "gender": "Male"
    }
```

### PUT /employee/:id

Updates an existing employee. 

**Headers**

Content-Type : application/json

**Request body (raw)**

```
    {
        "id": "1",
        "name": "Mahesh Joshi",
        "role": "Software Engineer",
        "age": "23",
        "gender": "Male"
    }
```

### DELETE /employee/:id

Removes an employee given its id.



