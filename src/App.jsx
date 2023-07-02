import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [synth, setSynth] = useState(null);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    setSynth(window.speechSynthesis);
    setUtterance(new SpeechSynthesisUtterance(text));
  }, [text]);

  const handleStartSpeak = () => {
    if (synth && utterance) {
      utterance.rate = 0.6;
      synth.speak(utterance);
    }
  };

  const handleStopSpeak = () => {
    if (synth) {
      synth.cancel();
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl p-3">
        Text to Voice
      </h1>
      <textarea
        value={text}
        id="myTextarea"
        onChange={(e) => setText(e.target.value)}
        placeholder="Write some thing"
        className="bg-slate-900 p-2 mb-6 outline-none text-white rounded"
      />
      <div className="btns flex justify-between">
        <button
          onClick={handleStartSpeak}
          className="w-28 bg-green-700 rounded text-lg text-white p-1"
        >
          <i className="fa-solid fa-circle-play"></i> Listen
        </button>
        <button
          onClick={handleStopSpeak}
          className="w-28 bg-blue-700 rounded text-lg text-white p-1"
        >
          <i class="fa-solid fa-pause"></i> Stop
        </button>
      </div>
    </section>
  );
}

export default App;
