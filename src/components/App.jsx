import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function createEmoji(emojiN) {
  return (
    <Entry
      key={emojiN.id}
      symbol={emojiN.emoji}
      name={emojiN.name}
      meaning={emojiN.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
