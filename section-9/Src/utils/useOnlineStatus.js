import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlinestatus, setonlinestatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setonlinestatus(true);
    });
    window.addEventListener("offline", () => {
      setonlinestatus(false);
    });
  });
  return onlinestatus;
};

export default useOnlineStatus;
