import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Yudlee',
    email: 'duyle392002@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Test',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
