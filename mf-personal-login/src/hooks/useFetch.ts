import {useEffect, useState} from 'react';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};
const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T>();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string|null>();

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, {...DEFAULT_OPTIONS, ...options});

        if(!response.ok) throw new Error(response.statusText);

        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Could not fetch Data`);
        setIsPending(false);
      }

    };
    fetchData();

  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
