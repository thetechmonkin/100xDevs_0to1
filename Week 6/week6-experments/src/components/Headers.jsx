import React from "react";

const Headers = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Headers;

// export default React.memo(Headers)

// Memo avoids unnecessary re renders

// Keys in react --> Keys are significant in React because they aid in determining whether items 
// in a list have been changed, updated, or removed.
// This process helps React to optimize the rendering by recycling existing DOM elements.
