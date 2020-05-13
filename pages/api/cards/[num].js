// /api/cards/[num] 
// returns the JSON representation of card with that number

import {getCards, getIndexedCards} from "../../../data/cards";

export default (req, res) => {
  const {
    query: { num },
  } = req

  const indexedCards = getIndexedCards();
  let card;
  try {
    card = indexedCards[num];
  } catch {
    throw { status: 404 };
  }

  res.end(JSON.stringify(card));
}