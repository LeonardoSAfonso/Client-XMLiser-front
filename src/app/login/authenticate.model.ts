export interface Authenticate {
  id: number;
  name: string;
  email: string;
  password: string;
  first_access: boolean;
  email_checked: boolean;
  forgotten_token?: any;
  access_level: number;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}