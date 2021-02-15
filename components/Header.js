import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../global-styles'



const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
`

const HeaderLogoWrapper = styled(props => <Link {...props}></Link>)`

`

const HeaderLogo = styled.div`
    font-size: 35px;
    font-weight: 700;

    :hover {
        cursor: pointer;
    }
`


const Header = () => {
    return (
        <Container>
            <HeaderWrapper>
                <HeaderLogoWrapper href="/">
                    <HeaderLogo role="button" tabIndex="0">
                        Test App
                    </HeaderLogo> 
                </HeaderLogoWrapper>
            </HeaderWrapper>
        </Container>
    )
}

export default Header
