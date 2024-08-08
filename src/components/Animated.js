import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DetailDialog from "./DetailDialog";
import './Animated.css';

const cards = [
    { id: 1, title: 'Card 1', content: 'This is the content of card 1.' },
    { id: 2, title: 'Card 2', content: 'This is the content of card 2.' },
    { id: 3, title: 'Card 3', content: 'This is the content of card 3.' },
];

export default function Animated (){
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="list">
          {cards.map((card) => (
            <motion.div
              className="card"
              key={card.id}
              layoutId={`card-${card.id}`}
              onClick={() => setSelectedCard(card)}
            >
              <h3>{card.title}</h3>
            </motion.div>
          ))}
              
          <AnimatePresence>
            {selectedCard && (
              <DetailDialog
                card={selectedCard}
                onClose={() => setSelectedCard(null)}
              />
            )}
          </AnimatePresence>
        </div>
    );
};