async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mock-request/setupMSW");
  return worker.start();
}

import('./bootstrap').then(
    ({ mount }) => {
      const localRoot = document.getElementById('appCompanyLogin-mfe');

      enableMocking().then(() => {
        mount({
          mountPoint: localRoot!,
          routingStrategy: 'browser',
        });
      });
    }
  );
  
  export {};