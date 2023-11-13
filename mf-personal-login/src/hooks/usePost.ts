import {useCallback, useState} from 'react';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiResponse<T> {
  data: T | null;
  isPending: boolean;
  error: Error | null;
  callPost: () => void;
}

interface RequestOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: BodyInit;
}

const DEFAULT_OPTIONS = { "Content-Type": "application/json" };
const usePost = <T>(url: string, options: RequestOptions): ApiResponse<T> => {
  const [data, setData] = useState<T|null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error|null>(null);

  const callPost = useCallback(async () => {
    setIsPending(true);

    try {
      const response = await fetch(url, {
        method: options.method ?? 'POST',
        headers: options.headers ?? DEFAULT_OPTIONS,
        body: options.body,
      });

      if(!response.ok) throw new Error(response.statusText);

      const json = await response.json();
      setData(json);
    } catch (error) {
      if(error instanceof Error) setError(error);
      else throw new Error(String(error));

    } finally {
      setIsPending(false);
    }

  }, []);

  return { data, isPending, error, callPost };
};

export default usePost;
