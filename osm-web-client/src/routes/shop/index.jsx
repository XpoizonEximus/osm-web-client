import React, {useEffect} from "react";

function ShopPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <h1
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      În construcție
    </h1>
  );
}

export default ShopPage;
