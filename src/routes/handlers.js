import { bodyValidation } from "../utils/body-validation.js";

export const getTaksks = (req, res) => {
  return res.writeHead(200).end("getTasks");
};

export const createTask = (req, res) => {
  const { body } = req;
  const validation = bodyValidation(body);
  if (validation) {
    console.log({ body });
    return res.writeHead(201).end("createTasks");
  } else {
    return res.writeHead(400).end("Bad Request");
  }
};
