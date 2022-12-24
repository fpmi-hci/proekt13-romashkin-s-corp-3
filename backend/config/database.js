import mysql from "mysql2";
import os from "os"

// create the connection to database

const db = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_rd_root",
    password: "TKVZ3eaGw%8hr$Q",
    database: "freedb_kebab-db"
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;