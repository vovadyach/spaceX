import { useEffect, useState } from 'react';

export const usePreLoader = () => {
  const [isPreLoading, setIsPreloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 1800);
  }, []);

  return [isPreLoading];
};
