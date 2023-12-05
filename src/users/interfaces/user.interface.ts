interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  rules: string[];
}

export default User;
