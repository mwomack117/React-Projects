import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#25bb32").all(10));
  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#25bb32"
            value={color}
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <div className="directions">
        <h4>Get tints and shades of a CSS color</h4>
        <p>
          Input any color value (Hexadecimal #RGB, RGB/A, HLS/A, transparent, or
          a pre-defined color keyword). Click on colors to copy hex value to
          clipboard.
        </p>
      </div>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
