DROP DATABASE IF EXISTS ltp;
CREATE DATABASE ltp;

\c ltp;

DROP TABLE IF EXISTS projects;
CREATE TABLE projects(
  id SERIAL NOT NULL,
  name VARCHAR NOT NULL,
  description VARCHAR,
  url VARCHAR NOT NULL,
  image_url VARCHAR,
  created DATE NOT NULL,
  updated DATE,
  cat_id SMALLINT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (cat_id) REFERENCES cat_proj (id)
);

DROP TABLE IF EXISTS categories;
CREATE TABLE categories(
  id SERIAL NOT NULL,
  name VARCHAR NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS cat_proj;
CREATE TABLE cat_proj(
  id SERIAL NOT NULL,
  proj_id SMALLINT NOT NULL,
  cat_id SMALLINT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (proj_id) REFERENCES projects(id),
  -- FOREIGN KEY (cat_id) REFERENCES categories(id)
);