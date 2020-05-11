// /api/cards
// returns all the cards as a JSON array

import getCards from "../../../data/cards";

export default (req, res) => {
  const {
    query: { num },
  } = req

  const cards = getCards();
  
  res.end(JSON.stringify(cards))
}