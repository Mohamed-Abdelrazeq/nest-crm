interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  roles: string[];
}

// roles: ['admin', 'user'] or ['user']

export default User;
