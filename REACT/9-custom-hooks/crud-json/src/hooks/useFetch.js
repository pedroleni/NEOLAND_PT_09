import { useState, useEffect, useCallback } from 'react';

const useFetch = () => {
  const [url, setUrl] = useState('');
  const [options, setOptions] = useState({});
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (e) {
      setError(e.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  // Effecto para llamar a `callApi` automáticamente cuando cambien `url` u `options`
  useEffect(() => {
    callApi();
  }, [callApi]);

  return { data, error, loading, setUrl, setOptions };
};

export default useFetch;
