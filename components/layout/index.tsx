import Head from "next/head";
import Header from "../header";
import { Container, GlobalStyle } from "../../global-styles";
import * as SC from "./Layout";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = "Test app" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="this is my test project" />
        <meta charSet="utf-8" />
      </Head>
      <GlobalStyle />
      <Header />
      <SC.MainWrapper>
        <Container>{children}</Container>
      </SC.MainWrapper>
    </>
  );
};

export default Layout;
