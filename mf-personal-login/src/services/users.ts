type TypeUserSData = {
  userId: number,
  email: string,
  password: string,
  accountType: string,
  userName: string,
}
export const USERS_DATA: TypeUserSData[] = [
  {
    userId: 1,
    email: 'test1@gmail.com',
    password: '123456',
    accountType: 'PERSONAL',
    userName: 'Juanito',
  },
  {
    userId: 2,
    email: 'test2@gmail.com',
    password: '123456',
    accountType: 'ENTERPRISE',
    userName: 'Pablito',
  },
  {
    userId: 3,
    email: 'test3@gmail.com',
    password: '123456',
    accountType: 'PERSONAL',
    userName: 'Pedrito',
  },
  {
    userId: 4,
    email: 'test4@gmail.com',
    password: '123456',
    accountType: 'ENTERPRISE',
    userName: 'Jaimito',
  }
];