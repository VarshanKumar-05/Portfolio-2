import { useState, useEffect } from 'react';

interface PerformanceMode {
  isLowEnd: boolean;
  isMobile: boolean;
  shouldRenderSpline: boolean;
}

export function usePerformanceMode(): PerformanceMode {
  const [config, setConfig] = useState<PerformanceMode>({
    isLowEnd: false,
    isMobile: false,
    shouldRenderSpline: true,
  });

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;
      
      // Check for low-end hardware clues
      // navigator.deviceMemory is in GB. If < 4GB, it's likely a low-end device.
      // navigator.hardwareConcurrency is CPU cores. If < 4, it's likely low-end.
      const deviceMemory = (navigator as any).deviceMemory || 8;
      const cpuCores = navigator.hardwareConcurrency || 4;
      
      const isLowEnd = isMobile || deviceMemory < 4 || cpuCores < 4;
      
      // Only render heavy Spline on desktops with decent specs
      const shouldRenderSpline = !isMobile && !isLowEnd;

      setConfig({
        isLowEnd,
        isMobile,
        shouldRenderSpline,
      });
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return config;
}
