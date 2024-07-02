import React, { useState } from "react";

const AgreeDisagree = () => {
  const [reactions, setReactions] = useState({ likes: 0, dislikes: 0 });

  const agree = () => {
    setReactions((prev) => ({ ...prev, likes: prev.likes + 1 }));
  };
  const disagree = () => {
    setReactions((prev) => ({ ...prev, dislikes: prev.dislikes + 1 }));
  };
  return (
    <div>
      <h2>Likes: {reactions.likes}</h2>
      <button onClick={agree}>Agree</button>
      <h2>Dislikes: {reactions.dislikes}</h2>
      <button onClick={disagree}>Disagree</button>
    </div>
  );
};

export default AgreeDisagree;
