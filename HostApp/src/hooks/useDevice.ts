import {useEffect, useState} from 'react';

export type TDevice = 'mobile' | 'tablet' | 'desktop';
const useDevice = () => {
  const [device, setDevice] = useState<TDevice>('desktop');

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevice('mobile');
      } else if (isTablet) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    handleDeviceDetection();
    window.addEventListener('resize', handleDeviceDetection);

    return () => {
      window.removeEventListener('resize', handleDeviceDetection);
    };
  }, []);

  return {
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  };
};

export default useDevice;
