export const getTaksks = (req, res) => {
    return res.writeHead(200).end('getTasks')
}

export const createTask = (req, res) => {
    console.log({body: req.body});
    return res.writeHead(201).end('createTasks')
}