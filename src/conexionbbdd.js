import mysql from 'mysql';

export var conexionbbdd = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'machotes123',
  database: 'practica2iw',
});

/*export var conexionbbdd = mysql.createConnection({
  host: 'sql206.infinityfree.com',
  user: 'if0_38100605',
  password: 'U9aY1SbQqN',
  database: 'if0_38100605_iw_p2'});
*/