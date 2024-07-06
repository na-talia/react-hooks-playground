import React, { useState } from "react";

const AgreeDisagree = () => {
  const [reactions, setReactions] = useState({ likes: 0, dislikes: 0 });

  const agree = () => {
    setReactions((prev) => ({ ...prev, likes: prev.likes + 1 }));
  };
  const disagree = () => {
    setReactions((prev) => ({ ...prev, dislikes: prev.dislikes + 1 }));
  };
  const clearAll = () => {
    setReactions({ likes: 0, dislikes: 0 });
  };

  return (
    <div className="mt-10">
      <div>
        <span>Likes: {reactions.likes}</span>{" "}
        <button className="text-green-500" onClick={agree}>
          Agree
        </button>
      </div>{" "}
      <div>
        <span>Dislikes: {reactions.dislikes}</span>{" "}
        <button className="text-red-500" onClick={disagree}>
          Disagree
        </button>
      </div>
      <button onClick={clearAll}>Clear</button>
    </div>
  );
};

export default AgreeDisagree;
