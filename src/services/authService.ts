import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import * as authRepository from "../repositories/authRepository.js";
import { UserData } from "../repositories/authRepository.js";

dotenv.config();

async function logupUser(name:string, email: string, password: string ) {
  const emails = await authRepository.findUserByEmail(email);

  if (emails.length > 0) {
    console.log(emails);
    throw { type: "conflict", message: "email already in use" };
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  const userdata: UserData = {
    name: name,
    email: email,
    password: encryptedPassword,
  };

  await authRepository.insertUser(userdata);
}

async function loginUser(email: string, password: string) {
  const secretkey = process.env.JWT_SECRET;
  const user = await authRepository.findUserByEmail(email);
  if (!email || !password) {
    throw { type: "unprocessable_entity", message: "invalid information" };
  }
  if (user.length === 0) {
    throw { type: "not_found", message: "user not found" };
  }
  if (!(await bcrypt.compare(password, user[0].password))) {
    throw { type: "unauthorized", message: "invalid password" };
  }

  const token = jwt.sign(String(user[0].id), String(secretkey));
  const userLoged = { token, email };
  return userLoged;
}

export { loginUser, logupUser };