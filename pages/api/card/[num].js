// /api/card/[num] 
// returns the JSON representation of card with that number

import getCards from "../../../data/cards";

export default (req, res) => {
  const {
    query: { num },
  } = req

  const cards = getCards();
  let card;
  try {
    card = cards[num];
  } catch {
    throw { status: 404 };
  }

  res.end(${JSON.stringify(card)})
}