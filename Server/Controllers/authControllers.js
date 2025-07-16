import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {

  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing!" });
  }

  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = generateToken(newuser._id);
    res.status(201).json({ user: newuser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "user not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });
    const token = generateToken(user._id);
    res.json({ user, token });
    return res.status(200).json({
      status: true,
      token
  });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

