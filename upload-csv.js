import fs from "node:fs";
import { parse } from "csv-parse";

(async () => {
  const url = "http://localhost:3333/tasks";
  const dataPath = new URL("./data/tasks.csv", import.meta.url);
  const parser = fs.createReadStream(dataPath).pipe(parse({ from_line: 2 }));

  for await (const record of parser) {
    const body = {
      title: record[0],
      description: record[1],
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log({ status: response.status, text: response.statusText });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();
