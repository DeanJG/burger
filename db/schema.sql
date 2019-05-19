CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name NOT NULL VARCHAR(40),
  devoured NOT NULL BOOLEAN
);