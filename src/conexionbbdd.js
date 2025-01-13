import mysql from 'mysql';

export var conexionbbdd = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'machotes123',
  database: 'practica2iw',
});
