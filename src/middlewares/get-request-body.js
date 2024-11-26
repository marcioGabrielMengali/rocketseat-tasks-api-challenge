export const getRequestBody = async (req, res) => {
  const { method } = req;
  if (method === "POST" || method === "PUT" || method === "PATCH") {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    if (buffers.length > 0) {
      try {
        req.body = JSON.parse(Buffer.concat(buffers).toString());
      } catch (error) {
        req.body = null;
      }
    }
  }
};
