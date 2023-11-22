import('./bootstrap').then(
    ({ mount }) => {
      const localRoot = document.getElementById('personal_dashboard'); 
  
      mount({
        mountPoint: localRoot!,
        routingStrategy: 'browser',
      });
    }
  );
  
export {};
