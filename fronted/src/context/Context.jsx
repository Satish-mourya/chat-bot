import { useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async () => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      setPrevPrompts(prev => [...prev, input]);

      const response = await fetch("https://chat-bot-backend-cfrj.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.result);

      setResultData(data.result);
      setInput("");
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    input, setInput,
    recentPrompt, setRecentPrompt,
    prevPrompts, setPrevPrompts,
    showResult, setShowResult,
    loading, setLoading,
    resultData, setResultData,
    onSent
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};
