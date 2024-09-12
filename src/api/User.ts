import mysql, { RowDataPacket } from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

interface employees extends RowDataPacket {
  id: number;
  name: string;
  position: string;
  salary: number;
}

export const getUsers = async () => {
  try {
    const [rows] = await pool.query<employees[]>('SELECT * FROM employees');
    return rows;
  } catch (error) {
    console.error('Error executing query', error);
    return [];
  }
}