import { useEffect, useState } from "react";
import { menuurl } from "../utils/utilities";
import { menurulcontinue } from "../utils/utilities";

const useRestaurantmenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);

  useEffect(() => {
    return fetchData();
  }, []);

  const fetchData = async () => {
    const dataapi = await fetch(menuurl + resId + menurulcontinue);
    const jsondataapi = await dataapi.json();
    setresinfo(jsondataapi.data);
  };
  return resinfo;
};

export default useRestaurantmenu;
