DROP DATABASE IF EXISTS burgersDB;

CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);