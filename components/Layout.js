import Container from "react-bootstrap/Container";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <AppNavbar />
      <Container>
        {props.children}
        <AppFooter />
      </Container>
    </>
  );
}

export default Layout;
