import { Repository } from "../repository/repository.js";
import { bodyValidation } from "../utils/body-validation.js";
import crypto from "node:crypto";
import { getCurrentDate } from "../utils/date.js";

const repository = new Repository();
const TABLE_NAME = "tasks";

export const getTaksks = (req, res) => {
  const data = repository.select(TABLE_NAME);
  return res.writeHead(200).end(JSON.stringify(data));
};

export const createTask = (req, res) => {
  const validation = bodyValidation(req.body);
  if (validation) {
    const { body } = req;
    const data = {
      id: crypto.randomUUID(),
      ...body,
      created_at: getCurrentDate(),
      completed_at: null,
      updated_at: null,
    };

    repository.insert(TABLE_NAME, data);
    return res.writeHead(201).end();
  } else {
    return res.writeHead(400).end("Bad Request");
  }
};
