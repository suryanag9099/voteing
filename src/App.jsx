
import React, { useState } from "react";

export default function App() {
  const [votes, SetVotes] = useState({ apple: 0, banana: 0, cherry: 0 });

  const handleVote = (fruit) => {
    SetVotes((PrevVotes) => ({
      ...PrevVotes,
      [fruit]: PrevVotes[fruit] + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Fruit!</h1>
      <div className="fruits-container">
        <div className="fruit-card">
          <img
            src="https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg"
            alt="Apple"
          />
          <h3>Apple</h3>
          <button onClick={() => handleVote("apple")}>Vote</button>
          <p>Votes: {votes.apple}</p>
        </div>

        <div className="fruit-card">
          <img
            src="https://media.istockphoto.com/id/804495812/vector/yellow-not-peeled-banana.jpg?s=612x612&w=0&k=20&c=cv7wUTj9DF_au1biwWb27c09G_a-9F2KpRhgP_sth80="
            alt="Banana"
          />
          <h3>Banana</h3>
          <button onClick={() => handleVote("banana")}>Vote</button>
          <p>Votes: {votes.banana}</p>
        </div>
        <div className="fruit-card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Cherry"
          />
          <h3>Cherry</h3>
          <button onClick={() => handleVote("cherry")}>Vote</button>
          <p>Votes: {votes.cherry}</p>
        </div>
      </div>
    </div>
  );
}
