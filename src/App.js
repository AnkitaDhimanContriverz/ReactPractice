import React, { useEffect, useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const [value, setValue] = useState({
    name: "Ankita",
    age: 23,
    post: "React Developer",
  });

  const update = () => {
    setValue((prev) => {
      return { ...prev, age: 24 };
    });
  };

  useEffect(() => {
    console.log("UseEffect in action");
  }, []);
  return (
    <div>
      <h1>Select value-</h1>
      <button onClick={() => setVal(1)}>value 1</button>
      <button onClick={() => setVal(2)}>value 2</button>
      <button onClick={() => setVal(3)}>value 3</button>
      <button onClick={() => setVal(4)}> value 4</button>
      <p>selected value - {val}</p>

      <h1>My {value.name}</h1>
      <p>
        I am {value.name} and age is {value.age} post is {value.post}.
      </p>
      <button type="button" onClick={update}>
        update age
      </button>
    </div>
  );
}

export default App;
