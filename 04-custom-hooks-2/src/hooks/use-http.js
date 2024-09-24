import { useCallback, useState } from 'react';

export const useHttp = async () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        body: JSON.stringify(requestConfig.body)
          ? JSON.stringify(requestConfig.body)
          : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);
  console.log('type of sendrequest', typeof sendRequest);
  return { isLoading, error, sendRequest: sendRequest };
};
