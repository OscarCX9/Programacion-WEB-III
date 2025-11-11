/*import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mibasededatos',
  port: 3306,
  connectionLimit: 5
});*/

import mysql from 'mysql2/promise';
export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mibasededatos',
  port: 3306,
  connectionLimit: 5
});

