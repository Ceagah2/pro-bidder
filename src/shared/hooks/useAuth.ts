import { useEffect, useState } from "react";
import { GetItem } from "../storage";

export const useAuth = () => {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const userToken = await GetItem("userToken");
      setAuthenticated(!!userToken);
      setLoading(false);
    };

    checkAuth();
  }, []);

  return { isLoading, isAuthenticated };
};
