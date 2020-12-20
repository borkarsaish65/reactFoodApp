import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [emoji, setEmoji] = useState({
    name: "",
    meaning: "Food Name will Appear here.."
  });

  const emojiDictionary = {
    "🥪": "Sandwich",
    "🍔": "Burger",
    "🍕": "Pizza",
    "🍿": "Popcorn",
    "🌮": "Taco"
  };

  function findMeaning(e) {
    var value = e.target.value;

    var output = emojiDictionary[value];

    var error = "⚠️";
    if (output === undefined) {
      setEmoji({ name: error, meaning: "Sorry! Not Present in the Menu!" });
    } else setEmoji({ name: value, meaning: output });
  }

  function showCLickedItem(item) {
    setEmoji({ name: "", meaning: emojiDictionary[item] });
  }

  return (
    <div className="App">
      <h1 style={{ color: "white", backgroundColor: "black" }}>
        Know your Food App
      </h1>
      <input
        style={{ width: "20rem" }}
        placeholder="Enter Food Emoji to know the food name."
        onChange={findMeaning}
      />

      <h2>{emoji.name}</h2>
      <h2>{emoji.meaning}</h2>

      <div>
        {Object.keys(emojiDictionary).map((item) => {
          return (
            <h2
              onClick={() => showCLickedItem(item)}
              style={{ display: "inline", margin: "30px", cursor: " pointer" }}
            >
              {item}
            </h2>
          );
        })}
      </div>
    </div>
  );
}
