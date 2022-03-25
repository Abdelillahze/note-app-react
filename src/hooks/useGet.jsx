import { useEffect, useState } from "react";

const useGet = () => {
  const [data, setData] = useState(null);
  const [isData, setIsData] = useState(true);
  const [local, setLocal] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  useEffect(() => {
    if (local.length !== 0) {
      setData(local);
      setIsData(false);
    }
  }, [local]);

  return [data, isData];
};

export default useGet;
