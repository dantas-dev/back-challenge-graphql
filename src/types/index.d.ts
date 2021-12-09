export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export type Project = {
  id: number;
  userId: number;
  name: string;
  price: number;
  createdAt: string;
}

export type OrderBy = {
  field: string;
  direction: string;
}
