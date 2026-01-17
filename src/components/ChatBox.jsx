import React, { useState } from "react";
import { detectMood, getResponse, suggestActivity } from "../utils/moodEngine";

import { TextField, Button, Paper } from "@mui/material";

export default function ChatBox({ onMoodChange }) {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Evi 🌸. How are you feeling today?" }
  ]);

  const sendMessage = () => {

    const mood = detectMood(input);

    onMoodChange(mood);

    const reply = getResponse(mood);
    const suggestion = suggestActivity(mood);

    setMessages([
      ...messages,
      { from: "user", text: input },
      { from: "bot", text: reply },
      { from: "bot", text: suggestion }
    ]);

    saveMood(mood);

    setInput("");
  };

  const saveMood = (mood) => {

    let history = JSON.parse(localStorage.getItem("moodHistory")) || [];

    history.push({
      mood: mood,
      time: new Date().toLocaleString()
    });

    localStorage.setItem("moodHistory", JSON.stringify(history));
  };

  return (
    <Paper style={{ padding: 20, marginTop: 20 }}>

      <div style={{ height: 200, overflowY: "auto" }}>

        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.from === "user" ? "You" : "Evi"}:</b> {msg.text}
          </p>
        ))}

      </div>

      <TextField
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Share your feelings..."
      />

      <Button
        variant="contained"
        onClick={sendMessage}
        style={{ marginTop: 10 }}
      >
        Send
      </Button>

    </Paper>
  );
}
