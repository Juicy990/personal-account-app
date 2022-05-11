import { UserInterface } from "./UserInterface";

export interface UserItemProps {
  user: UserInterface;
  remove: (user: UserInterface) => void;
  update: (user: UserInterface) => void;
}
