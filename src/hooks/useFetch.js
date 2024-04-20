import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    setData(null);
    if (url.length > 0) {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setPending(false);
        });
    }
  }, [url]);

  return { data, error, pending };
};
export default useFetch;
