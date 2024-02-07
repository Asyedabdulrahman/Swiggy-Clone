import { createContext } from "react";

const userContext = createContext({
  loggedinuser: "Default user",
});
export default userContext;
