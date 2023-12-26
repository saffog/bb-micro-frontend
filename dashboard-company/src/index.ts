import('./bootstrap').then(
    ({ mount }) => {
      const localRoot = document.getElementById('appCompanyDashboard-mfe'); 
  
      mount({
        mountPoint: localRoot!,
        routingStrategy: 'browser',
        isStandalone: true,
      });
    }
  );

export {};