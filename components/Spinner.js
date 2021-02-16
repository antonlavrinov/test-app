import styled, { keyframes } from 'styled-components'


const spinnerAnimation = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`

const SpinnerBlock = styled.div`
    display: block;
    overflow: hidden;
    background: none;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    z-index: 0;
`

const SpinnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    
    div {
        position: absolute;
        width: 80%;
        height: 80%;
        border: 3px solid var(--pale-text);
        border-top-color: transparent;
        border-radius: 50%;
        animation: ${spinnerAnimation} 0.6s linear infinite;
        top: 50%;
        left: 50%;
        box-sizing: content-box;
    }

`



const Spinner = () => {
    
    return (
        <SpinnerBlock>
            <SpinnerWrapper>
                <div></div>
            </SpinnerWrapper>
        </SpinnerBlock>
    )
}

export default Spinner
