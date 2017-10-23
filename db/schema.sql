CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int not null auto_increment,
burger_name varchar(250) not null,
devoured boolean,
date timestamp,
primary key (id)
)

select * from burgers;

