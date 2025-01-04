import { User } from '../types';
import bcrypt from 'bcryptjs';

// In a real app, this would be in a secure database
let users: Array<User & { password: string }> = [];

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const createUser = async (userData: {
  email: string;
  password: string;
  role: 'CREATOR' | 'INVESTOR';
  name?: string;
}): Promise<User | null> => {
  const existingUser = users.find(u => u.email === userData.email);
  if (existingUser) {
    return null;
  }

  const hashedPassword = await hashPassword(userData.password);
  const newUser: User & { password: string } = {
    id: crypto.randomUUID(),
    email: userData.email,
    password: hashedPassword,
    role: userData.role,
    address: `0x${crypto.randomUUID().replace(/-/g, '')}`,
    balance: 0,
  };

  users.push(newUser);
  
  // Return user without password
  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

export const authenticateUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  const user = users.find(u => u.email === email);
  if (!user) {
    return null;
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return null;
  }

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};