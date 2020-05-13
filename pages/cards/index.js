import Layout from "../../components/Layout";
import Head from "next/head";
import BootstrapTable from "react-bootstrap-table-next";

import getCards from "../../data/cards"

export const getServerSideProps = async ({ req, res }) => {
  const ssr = { props: {} };
  ssr.props.initialData = (await getCards());
  return ssr;
};

function getColumns() {
  return [
    {
      dataField: "number",
      text: "number",
      sort: true,
    },
    {
      dataField: "round",
      text: "round",
      sort: true,
    },
    {
      dataField: "prompt",
      text: "prompt",
      sort: false,
    },
    {
      dataField: "sample_answer",
      text: "sample answer",
      sort: false,
    },
  ];
}

function Cards(props) {
  const { initialData } = props;
  return (
    <Layout>
      <Head>
        <title>Cards Index</title>
      </Head>
      <h1>Cards Index</h1>
      <BootstrapTable keyField="number" data={initialData} columns={getColumns()} />
      <style jsx global>{`
        .table {
          overflow: auto;
          display: block;
          table-layout: auto;
        }
      `}</style>
    </Layout>
  );
}

export default Cards;
