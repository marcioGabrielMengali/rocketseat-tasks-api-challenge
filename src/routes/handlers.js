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
  const { body } = req;
  const validation = bodyValidation(body);
  if (validation) {
    const data = {
      id: crypto.randomUUID(),
      ...body,
      completed_at: null,
      updated_at: null,
      created_at: getCurrentDate(),
    };

    repository.insert(TABLE_NAME, data);
    return res.writeHead(201).end();
  } else {
    return res.writeHead(400).end("Bad Request");
  }
};

export const updateTask = (req, res) => {
  const { body } = req;
  const validation = bodyValidation(body);
  if (validation) {
    const { id } = req.params;
    const data = {
      ...req.body,
      updated_at: getCurrentDate(),
    };
    const updated = repository.update(TABLE_NAME, id, data);
    if (!updated) {
      res.writeHead(400).end("Id not found");
    } else {
      res.writeHead(204).end();
    }
  } else {
    return res.writeHead(400).end("Bad Request");
  }
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  const deleted = repository.delete(TABLE_NAME, id);
  if (!deleted) {
    res.writeHead(400).end("Id not found");
  } else {
    res.writeHead(204).end();
  }
};


export const completeTask = (req, res) => {
  const { id } = req.params
  const completed = repository.updateCompletedAt(TABLE_NAME, id);
  if (!completed) {
    res.writeHead(400).end("Id not found");
  } else {
    res.writeHead(204).end();
  }
}
