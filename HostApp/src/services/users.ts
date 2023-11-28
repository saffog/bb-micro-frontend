type TypeUserSData = {
  userId: number,
  email: string,
  password: string,
  accountType?: string,
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

export const COMPANY_DATA: TypeUserSData[] = [
  {
    userId: 4,
    email: "juan.jose1983@gmail.com",
    password: "123456",
    userName: "juan jose",
  },
  {
    userId: 5,
    email: "company@correo.com",
    password: "456789",
    userName: "company",
  },
  {
    userId: 6,
    email: "JJEnterprise@correo.com",
    password: "987654",
    userName: "JJEnterprise",
  },
  {
    userId: 7,
    email: "baufest@baufest.com",
    password: "987654",
    userName: "baufest",
  },
];