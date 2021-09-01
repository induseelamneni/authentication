const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const databasePath = path.join(__dirname, "userData.db");

const app = express();
app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      fileName: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () =>
      console.log("server running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`Db Error ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();
