import React from "react";
const PrintObject = ({ content }) => {
  const formattedContent = JSON.stringify(content, null, 2);
  return React.createElement("pre", null, formattedContent);
};
export default PrintObject;
