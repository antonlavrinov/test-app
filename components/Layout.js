import Head from 'next/head'
import styled from 'styled-components'
import Header from './Header'
import { Container, GlobalStyle } from '../global-styles'



const MainWrapper = styled.main`
    display: flex;
    justify-content: space-between;
`


const Layout = ({children, title = "Test app"}) => {


    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="this is my test project"/>
                <meta charSet="utf-8" />
            </Head>
            <GlobalStyle/>
            <Header/>
            <MainWrapper>
                <Container>
                    {children}
                </Container>
            </MainWrapper>
        </>
    )
}

export default Layout