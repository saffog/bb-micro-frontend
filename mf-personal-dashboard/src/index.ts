import('./bootstrap').then(
    ({ mount }) => {
      const localRoot = document.getElementById('appPersonalDashboard-mfe');
  
      mount({
        mountPoint: localRoot!,
        routingStrategy: 'browser',
      });
    }
  );
  
export {};
