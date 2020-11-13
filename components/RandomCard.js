
import getCards from "../data/cards";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";


function RandomCard(props) {

    const cards = getCards();

    const rand = Math.floor( (Math.random() * (cards.length)));
    const card = cards[rand];

    return (
        <>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                            What would you do if:
                    </Card.Header>
                        <Card.Body style={{fontSize: 24}}>
                            {card.prompt}
                        </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
Show Suggested Response
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
    <Card.Body>{card.sample_answer}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Body style={{fontSize: 10}}>
                        Card: {card.number} Round: {card.round}
                    </Card.Body>
                </Card>
            </Accordion>
        </>
    );
}

export default RandomCard;
