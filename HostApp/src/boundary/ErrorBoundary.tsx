import React, { useState } from "react";

const MyErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, errorInfo) => {
    console.error("Error caught by error boundary:", error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div>
        El contenido no está disponible en este momento. Por favor, inténtalo más tarde.
      </div>
    );
  }

  return <>{children}</>;
};

export default MyErrorBoundary;
