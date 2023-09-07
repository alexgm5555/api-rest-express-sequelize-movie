import bycrypt from 'bcrypt';

export const initialData: any = {
  users: [
    {
      email: 'test1@alex.co',
      password: bycrypt.hashSync('Abc123',10)
    },
    {
      email: 'test2@alex.co',
      password: bycrypt.hashSync('Abc123',10),
    }
  ],
  characters: [
    {
      image: '1740250-00-A_0_2000.jpg',
      name: 'test0',
      age: '29',
      widh: '29',
      history: '29',
    },
    {
      image: '1740250-00-A_0_2001.jpg',
      name: 'test1',
      age: '29',
      widh: '29',
      history: '29',
    },
    {
      image: '1740250-00-A_0_2002.jpg',
      name: 'test2',
      age: '29',
      widh: '29',
      history: '29',
    },
    {
      image: '1740250-00-A_0_2003.jpg',
      name: 'test3',
      age: '29',
      widh: '29',
      history: '29',
    },
  ],
  movies: [
    {
      image: '1740250-00-A_0_2003.jpg',
      title: 'El Carro',
      dateToCreated: '10/10/23',
      starts: 5
    },
    {
      image: '1740250-00-A_0_2003.jpg',
      title: 'Cars',
      dateToCreated: '10/10/23',
      starts: 5
    },
    {
      image: '1740250-00-A_0_2003.jpg',
      title: 'Car 2',
      dateToCreated: '10/10/23',
      starts: 5
    }
  ]
}
