import bycrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';

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
      id: uuid(),
      image: '1740250-00-A_0_2000.jpg',
      name: 'test0',
      age: '29',
      widh: '29',
      history: '29',
    },
    {
      id: uuid(),
      image: '1740250-00-A_0_2001.jpg',
      name: 'test1',
      age: '29',
      widh: '29',
      history: '29',
    },
    {
      id: uuid(),
      image: '1740250-00-A_0_2002.jpg',
      name: 'test2',
      age: '29',
      widh: '29',
      history: '29',
    },
    {
      id: uuid(),
      image: '1740250-00-A_0_2003.jpg',
      name: 'test3',
      age: '29',
      widh: '29',
      history: '29',
    },
  ],
  movies: [
    {
      id: uuid(),
      image: '1740250-00-A_0_2003.jpg',
      title: 'El Carro',
      dateToCreated: '10/10/23',
      starts: 5
    },
    {
      id: uuid(),
      image: '1740250-00-A_0_2003.jpg',
      title: 'Cars',
      dateToCreated: '10/10/23',
      starts: 5
    },
    {
      id: uuid(),
      image: '1740250-00-A_0_2003.jpg',
      title: 'Car 2',
      dateToCreated: '10/10/23',
      starts: 5
    }
  ],
  genres: [
    {
      id: uuid(),
      name: 'comedia',
    },
    {
      id: uuid(),
      name: 'drama',
    },
    {
      id: uuid(),
      name: 'terror',
    }
  ]
}
