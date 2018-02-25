import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>I'm the VERY VERY Best home component</div>
      <button onClick={() => console.log("Hi there!")}>Press me!</button>
    </div>
  );
}

export default {
  component: HomePage,
};
