import React, { useEffect } from "react";

function NotFound404Page() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <h1
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      404 Not found
    </h1>
  );
}

export default NotFound404Page;
