import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../global-styles'

const HeaderSection = styled.header`

`

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
        <HeaderSection>
            <Container>
                <HeaderWrapper>
                    <HeaderLogoWrapper href="/">
                        <HeaderLogo>
                            Test App
                        </HeaderLogo> 
                    </HeaderLogoWrapper>
                </HeaderWrapper>
            </Container>
        </HeaderSection>
    )
}

export default Header
