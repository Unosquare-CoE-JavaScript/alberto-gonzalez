// pages/api/data.js
// route => /api/data

// export default (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ message: "hello" }));
// };

// pages/api/data
import nc from "next-connect";
//import cors from "cors";

const handler = nc()
  .get((req, res) => {
    res.send("Hello world");
  })
  .post((req, res) => {
    res.json({ hello: "world" });
  })
  .put(async (req, res) => {
    res.end("hello");
  });

export default handler;
