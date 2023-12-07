CREATE DATABASE [IF NOT EXISTS] encounters_db;

USE encounters_db;

CREATE TABLE encounters_table (
    TableID int,
    EncounterTheme varchar(255),
    D20 int,
    Encounter varchar(255),
    Difficulty varchar(255)
);