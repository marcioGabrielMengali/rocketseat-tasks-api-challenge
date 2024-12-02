import fs from "node:fs/promises";

export class Repository {
  #path = new URL("../db/db.json", import.meta.url);
  #database = {};

  constructor() {
    fs.readFile(this.#path, "utf-8")
      .then((data) => (this.#database = JSON.parse(data)))
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(this.#path, JSON.stringify(this.#database));
  }

  select(table) {
    const data = this.#database[table] ?? [];
    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }
    this.#persist();
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      console.log(this.#database[table][rowIndex]);
      const { id, created_at, completed_at } = this.#database[table][rowIndex];
      const updatedData = {
        id,
        ...data,
        created_at,
        completed_at,
      };
      this.#database[table][rowIndex] = updatedData;
      this.#persist();
      return true;
    }
    return false;
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
      return true;
    } else {
      return false;
    }
  }
}
