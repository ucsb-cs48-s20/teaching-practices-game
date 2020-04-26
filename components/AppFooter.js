import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function AppFooter() {
  return (
    <footer className="footer">
      <Card style={{ maxWidth: "60rem" }}>
        <Card.Body>
          <Card.Text>
            <p>
              This is a sample{" "}
              <Link href="https://nextjs.org">
                <a>Next.js</a>
              </Link>{" "}
              app written as a demo for{" "}
              <Link href="http://ucsb-cs48.github.io">
                <a>CMPSC 48</a>
              </Link>{" "}
              at{" "}
              <Link href="https://www.ucsb.edu">
                <a>UC&nbsp;Santa&nbsp;Barbara</a>
              </Link>
              {"."} It is based on{" "}
              <Link href="https://nextjs.org/learn/basics/create-nextjs-app/setup">
                <a>this tutorial</a>
              </Link>
              . Check out the source code on{" "}
              <Link href="https://github.com/pconrad/nextjs-tutorial">
                <a>GitHub</a>
              </Link>
              {"."}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </footer>
  );
}

export default AppFooter;
