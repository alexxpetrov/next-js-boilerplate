type IComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type IUser = {
  id: string;
  name: string;
  email: string;
};

export const authApi = {
  getUser: async (id: string) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const result: IUser | null = await data.json();

    return result;
  },
  getUsers: async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const result: IUser[] | null = await data.json();

    return result;
  },
  getComments: async (id: string) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const result: IComment = await data.json();

    return result;
  },
};
