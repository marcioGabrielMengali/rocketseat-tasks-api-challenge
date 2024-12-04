import { buildPathParameters } from "../utils/path-parameters.js";
import { completeTask, createTask, deleteTask, getTaksks, updateTask } from "./handlers.js";

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
  },
  {
    url: buildPathParameters(`${URL}/:id`),
    method: "DELETE",
    handler: deleteTask,
  },
  {
    url: buildPathParameters(`${URL}/:id/complete`),
    method: "PATCH",
    handler: completeTask,
  }
];
