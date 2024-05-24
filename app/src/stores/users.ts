import { atom } from "nanostores";
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}
export type PropsUser = User;
export const $IsProducer = atom(false);
export const $IsLogged = atom(false);
export const $User = atom<PropsUser>({
  id: 0,
  name: "Artist's name",
  email: "artist_mail@gmail.com",
  username: "User's name",
});
