import {useState, useEffect} from "react"
import Layout from "../components/layout";
import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 150px;
  color: var(--pale-text);
`;

const NotFoundPage = () => {

  const [loc, setLocation] = useState("")

  useEffect(() => {
    setLocation(window.location)
    console.log("location", window.location)
  }, [])
  return (
    <Layout>
      <ErrorMessage>404 
        {/* {JSON.stringify(loc)} */}
        {decodeURIComponent("https%3A%2F%2Fyoutu.be%2FIkpZggx4yNI")}
        </ErrorMessage>
    </Layout>
  );
};

export default NotFoundPage;
