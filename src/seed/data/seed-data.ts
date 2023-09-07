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
      image: '/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg',
      title: 'Sound of Freedom',
      dateToCreated: '10/10/23',
      starts: 5
    },
    {
      id: uuid(),
      image: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      title: 'Oppenheimer',
      dateToCreated: '10/10/23',
      starts: 5
    },
    {
      id: uuid(),
      image: '/1dviyIqBrbnigrbodIvfMQj8mJ0.jpg',
      title: 'H4Z4RD',
      dateToCreated: '10/10/23',
      starts: 5
    },
    {
      id: uuid(),
      image: '/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg',
      title: 'Elemental',
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
