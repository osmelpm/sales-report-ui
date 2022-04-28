import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          const err = {
            status: res.status,
            statusText: res.statusText || "Error del servidor",
          };
          throw err;
        }
        const data = await res.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, error, loading };
};
