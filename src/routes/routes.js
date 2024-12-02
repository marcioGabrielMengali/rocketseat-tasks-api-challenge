import { buildPathParameters } from "../utils/path-parameters.js";
import { createTask, getTaksks, updateTask } from "./handlers.js";

const URL = "/tasks";

export const routes = [
  {
    url: buildPathParameters(URL),
    method: "GET",
    handler: getTaksks,
  },
  {
    url: buildPathParameters(URL),
    method: "POST",
    handler: createTask,
  },
  {
    url: buildPathParameters(`${URL}/:id`),
    method: "PUT",
    handler: updateTask,
  }
];
