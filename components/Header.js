import Link from 'next/link'
import styled from 'styled-components'
import { Container } from '../global-styles'



const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
`


const HeaderLogo = styled.a`
    display: block;
    font-size: 35px;
    font-weight: 700;
    :hover {
        cursor: pointer;
        font-size: 35px;
        font-weight: 700;
    }
`


const Header = () => {
    return (
        <Container>
            <HeaderWrapper>
                <Link href="/" passHref>
                    <HeaderLogo role="button" tabIndex="0">
                        Test App
                    </HeaderLogo> 
                </Link>
            </HeaderWrapper>
        </Container>
    )
}

export default Header
