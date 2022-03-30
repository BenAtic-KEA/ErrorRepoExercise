## Project meant for a class-demo/exercise related to REST Error Handling.
This repository includes two separate projects:

1. A very simple Java-based backend server WITHOUT a database. It uses a simple static map as "database".
2. A matching, pure JavaScript Frontend

Most of the error handling on the backend is Ready, implemented using the ResponseStatusException. So the main focus for the class demo and exercise is on the client.


## Tasks on the Client

- Change all fetch code to use the async-await structure
- Add Error handling that report errors using the detailed descriptions from the server and the [suggested utility function](https://docs.google.com/document/d/1keZvtIhEb7qFpa4LblPJLKETy1CskAf5GP4XczqaN-0/edit#bookmark=id.1lp15ss9i7xw) to do this
- Remove ALL alerts from the code

