import { createTask, getTaksks } from "./handlers.js";

const URL = "/tasks";

export const routes = [
  {
    url: URL,
    method: "GET",
    handler: getTaksks,
  },
  {
    url: URL,
    method: "POST",
    handler: createTask,
  },
];
