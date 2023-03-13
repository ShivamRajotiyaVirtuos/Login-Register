// pages/api/login.js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
// const users = require("../../data/users.json");

const KEY = "dytfyughjjhgy";
export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }
  const { email, password } = req.body;
  // const user = users.users.find((u: { email: any }) => u.email === email);

  res.json({
    token: jwt.sign(
      { email, user: email === "abc@gmail.com" && password === "1234" },
      KEY
    ),
  });
}
//   req: { body: { email: any; password: any } },
//   res: {
//     status: (arg0: number) => {
//       (): any;
//       new (): any;
//       json: { (arg0: { message?: string; token?: string }): void; new (): any };
//     };
//   }
// ) {
//   const { email, password } = req.body;
//   // console.log(users);
//   // find user by email
//   const user = users.users.find((u: { email: any }) => u.email === email);
//   console.log(email);
//   if (!user) {
//     return res.status(401).json({ message: "Invalid email or password" });
//   }

//   const match = await bcrypt.compare(password, user.password);
//   console.log("user", password);
//   if (!match) {
//     console.log("Password dont match ");
//     return res.status(401).json({ message: "Invalid email or password" });
//   } else {
//     console.log("Password match");
//     return res.status(200).json({ message: "Invalid email or password" });

//   }

//   // create JWT token
//   const token = jwt.sign({ email }, KEY);
//   console.log(token);

//   res.status(200).json({ token });

// }
