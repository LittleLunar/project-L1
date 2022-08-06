import bcrypt from 'bcrypt';

const hashPassword = async (password: string): Promise<string> => {
  const saltRound = 10
  const hashedPass = await bcrypt.hash(password, saltRound);
  return hashedPass;
}

const comparePassword = async (pass: string, hashed: string): Promise<boolean> => {
  
  const hashedCheckPass = await hashPassword(pass)

  if (hashedCheckPass !== hashed)
    return false;
  
  return true;
}

export { hashPassword, comparePassword }