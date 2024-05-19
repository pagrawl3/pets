import React from "react";

export const UserContext = React.createContext(null);

export default function useUserContext(): { uid: string } | null {
  return React.useContext(UserContext);
}
