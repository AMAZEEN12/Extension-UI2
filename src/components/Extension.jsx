import React, { useState } from "react";
import initialData from "../data.js";
import Card from "./Card";

function Extension({ filter }) {
  // Clone data into state so you can update it
  const [cards, setCards] = useState(
    initialData.map((item) => ({
      ...item,
      isActive: item.isActive, // or default to false
    }))
  );

  // Function to toggle individual card's active state
  const toggleCard = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isActive: !card.isActive } : card
      )
    );
  };

  // Apply filtering
  const filteredCards = cards.filter((card) => {
    if (filter === "active") return card.isActive;
    if (filter === "inactive") return !card.isActive;
    return true;
  });

  return (
    <div className="card-container">
      {filteredCards.map((card) => (
        <Card
          key={card.id}
          logo={card.logo}
          name={card.name}
          description={card.description}
          isActive={card.isActive}
          onToggle={() => toggleCard(card.id)}
        />
      ))}
    </div>
  );
}

export default Extension;
