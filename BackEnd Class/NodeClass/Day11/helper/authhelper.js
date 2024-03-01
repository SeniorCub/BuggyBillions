import bcrypt from 'bcrypt'

export const  passwordHash = async (password) => {
     try {
          const salt = 10;
          const hash =  await bcrypt.hash(password, salt);
          return hash
     } catch (error) {
          console.log(error)
     }
}