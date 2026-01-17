import React, { useState } from "react";

import Avatar from "./components/Avatar";
import ChatBox from "./components/ChatBox";
import MoodHistory from "./components/MoodHistory";

import { Container, Typography } from "@mui/material";

export default function App() {

  const [mood, setMood] = useState("neutral");

  return (
    <Container>

      <Typography variant="h4" align="center" style={{ marginTop: 20 }}>
        🌸 Evi – AI Empathy Companion
      </Typography>

      <Avatar mood={mood} />

      <ChatBox onMoodChange={setMood} />

      <MoodHistory />

    </Container>
  );
}
