import mysql from "mysql2";
import os from "os"

// create the connection to database

const db = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_rd_root",
    password: "KNQ5@mM?JGpemw&",
    database: "freedb_db_restaurant"
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;