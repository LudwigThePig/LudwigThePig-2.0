DROP DATABASE ltp IF EXISTS;
CREATE DATABASE ltp;

DROP TABLE projects IF EXISTS;
CREATE TABLE projects(
  id SERIAL NOT NULL,
  name VARCHAR NOT NULL,
  description VARCHAR,
  url VARCHAR NOT NULL,
  image_url VARCHAR,
  created DATE NOT NULL,
  updated DATE,
  cat_id SMALLINT REFERENCES categories_projects(id),
  PRIMARY KEY (id)
);

DROP TABLE categories IF EXISTS;
CREATE TABLE categories(
  id SERIAL NOT NULL,
  name VARCHAR NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE categories_projects IF EXISTS;
CREATE TABLE categories_projects(
  id SERIAL NOT NULL,
  proj_id SMALLINT NOT NULL REFERENCES projects(id),
  cat_id SMALLINT NOT NULL REFERENCES categories(id),
  PRIMARY KEY (id)
);