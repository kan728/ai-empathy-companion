export function detectMood(text) {

    text = text.toLowerCase();
  
    if (text.includes("sad") || text.includes("depressed") || text.includes("bad"))
      return "sad";
  
    if (text.includes("happy") || text.includes("great") || text.includes("good"))
      return "happy";
  
    if (text.includes("angry") || text.includes("frustrated"))
      return "angry";
  
    return "neutral";
  }
  
  export function getResponse(mood) {
  
    const responses = {
      happy: "I'm so happy you're feeling good today! 😊",
      sad: "I'm here for you. Want to share more? 💙",
      angry: "Take a deep breath. This moment will pass 🌿",
      neutral: "I'm listening. Tell me more 🤗"
    };
  
    return responses[mood];
  }
  
  export function suggestActivity(mood) {
  
    const suggestions = {
      happy: "Maybe do something creative today!",
      sad: "Try going for a short walk or listening to music.",
      angry: "Some deep breathing might help you relax.",
      neutral: "How about planning something nice for today?"
    };
  
    return suggestions[mood];
  }
  