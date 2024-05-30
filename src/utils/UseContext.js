import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Elon Musk",
});

export default UserContext;
