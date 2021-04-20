import Layout from "../components/layout";
import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 150px;
  color: var(--pale-text);
`;

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <ErrorMessage>404</ErrorMessage>
    </Layout>
  );
};

export default NotFoundPage;
