import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, type, weight, hexColor, index }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <div className="color-info">
        <p>{weight}%</p>
        <p className="shadeOrTint">
          {index === 10 ? "Base" : index > 10 ? "Shade" : "Tint"}
        </p>
      </div>

      <p>#{hexColor}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
