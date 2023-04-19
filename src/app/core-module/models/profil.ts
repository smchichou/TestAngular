import {User} from "./user";

export interface Profil extends User {
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string | null;
  hireable?: boolean | null;
  bio?: string | null;
  twitter_username?: string | null;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: Date;
  updated_at?: Date;
}
