import React from "react";

export default function Avatar({ mood }) {

  const images = {
    happy: "https://i.imgur.com/4M34hi2.png",
    sad: "https://i.imgur.com/VgXz7F2.png",
    angry: "https://i.imgur.com/1Qf3z7R.png",
    neutral: "https://i.imgur.com/8Km9tLL.png"
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img src={images[mood]} width="160" />
    </div>
  );
}

