import mysql from "mysql2";
import os from "os"

// create the connection to database

const db = mysql.createConnection({
    host: os.hostname() || "localhost",
    user: "root",
    password: "",
    database: "db_restaurant"
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;