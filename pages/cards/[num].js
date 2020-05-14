import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import ShowCard from "../../components/ShowCard";

import Head from "next/head";
import { getIndexedCards } from "../../data/cards";

export const getServerSideProps = async ({ req, res }) => {
  const ssr = { props: {} };
  ssr.props.indexedCards = await getIndexedCards();
  return ssr;
};

function Cards(props) {
  const { indexedCards } = props;
  const router = useRouter();
  const { num } = router.query;
  const card = indexedCards[num];

  return (
    <Layout>
      <Head>
        <title>Display Card</title>
      </Head>
      <ShowCard card={card}></ShowCard>
    </Layout>
  );
}

export default Cards;
