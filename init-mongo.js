db.createUser(
  {
      user: "mongo",
      pwd: "mongo",
      roles: [
          {
              role: "readWrite",
              db: "tracker"
          }
      ]
  }
);
db.createCollection("tracker");