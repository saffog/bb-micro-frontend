import('./bootstrap').then(
    ({ mount }) => {
      const localRoot = document.getElementById('appCompanyLogin-mfe'); 
  
      mount({
        mountPoint: localRoot!,
        routingStrategy: 'browser',
      });
    }
  );
  
  export {};