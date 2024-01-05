import {useEffect, useState} from 'react';

export type TDevice = 'mobile' | 'tablet' | 'desktop';
const useDevice = () => {
  const [device, setDevice] = useState<TDevice>('mobile');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 767) {
        setDevice('mobile');
      } else if (screenWidth <= 1023) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return device;
};

export default useDevice;
