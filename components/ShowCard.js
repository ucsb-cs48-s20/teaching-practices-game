import Container from "react-bootstrap/Container";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";
import Head from "next/head";

function ShowCard(props) {
  const { card } = props;

  return (
    <>
      <div>
        <p>Here's card {card.number}:</p>
        <pre>{JSON.stringify(card, null, "\t")}</pre>
      </div>
    </>
  );
}

export default ShowCard;
