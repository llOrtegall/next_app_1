import { sql } from '@vercel/postgres';

export async function createUser(name: string, email: string) {
  await sql`INSERT INTO users (name, email) VALUES (${name}, ${email})`;
}

export async function allUsers() {
  try {
    const users = await sql`SELECT * FROM users`;
    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
}