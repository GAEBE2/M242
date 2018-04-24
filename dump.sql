
DROP DATABASE IF EXISTS modul242;
CREATE DATABASE modul242;
USE modul242;

CREATE TABLE measurement_temperature (
  MeasurementID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Temperature int NOT NULL,
  Time DATETIME NOT NULL
);

CREATE TABLE measurement_volume (
  MeasurementID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Volume int NOT NULL,
  Time DATETIME NOT NULL
);
