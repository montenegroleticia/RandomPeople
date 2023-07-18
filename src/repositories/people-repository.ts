import connection from "@/database";
import * as protocols from "@/protocols";

export async function count() {
  const result = await connection.query<protocols.Count>(`SELECT COUNT(*) FROM people`);

  return result.rows[0].count;
}

export async function findPersonById(id: number) {
  const result = await connection.query<protocols.Person>(
    `SELECT * FROM people WHERE id=$1`,
    [id]
  );

  return result.rows[0];
}
