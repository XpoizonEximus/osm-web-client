import React, { useEffect } from "react";

function InConstructionPage() {
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
      În construcție
    </h1>
  );
}

export default InConstructionPage;
