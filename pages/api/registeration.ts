import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const filePath = path.join(process.cwd(), 'users.json');
const rawData = fs.readFileSync(filePath);
const usersData = JSON.parse(rawData.toString());

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { username, password } = req.body;
  
    // Check if the username is already taken
    const userExists = usersData.users.some((u: any) => u.username === username);
    if (userExists) {
      return res.status(400).json({ message: 'Username already taken' });
    }
  
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
  
    // Create the new user object
    const newUser = {
      id: Date.now(),
      username,
      password: hashedPassword,
    };
  
    // Add the new user to the users array in the JSON file
    usersData.users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(usersData));
  
    return res.status(200).json({ message: 'User registered successfully' });
  };
  