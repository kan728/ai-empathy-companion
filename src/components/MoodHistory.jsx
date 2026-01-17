import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function MoodHistory() {

  let history = JSON.parse(localStorage.getItem("moodHistory")) || [];

  let moodCount = { happy: 0, sad: 0, angry: 0, neutral: 0 };

  history.forEach(h => moodCount[h.mood]++);

  const data = {
    labels: ["Happy", "Sad", "Angry", "Neutral"],
    datasets: [
      {
        label: "Mood Frequency",
        data: [
          moodCount.happy,
          moodCount.sad,
          moodCount.angry,
          moodCount.neutral
        ],
        backgroundColor: ["green", "blue", "red", "gray"]
      }
    ]
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Your Mood Trends</h3>
      <Bar data={data} />
    </div>
  );
}
