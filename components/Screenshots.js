import React from 'react'
import Slider from './Slider'
import styled from 'styled-components'
import {useState} from 'react'


const ScreenshotsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const Screenshot = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: calc(4 / 3 * 50%);
    opacity: 0.7;
    border-radius: 10px;
    :hover {
        cursor: pointer;
        opacity: 1;
    }
    ${props => props.imageUrl && `
        background-image: url(${props.imageUrl});
        background-size: cover;
        background-position: center;
    `} 
`


const Screenshots = ({screenshots}) => {

    const [fullScreenMode, setFullScreenMode] = useState(false)
    const [currentScreenshot, setCurrentScreenshot] = useState(0)


    const triggerFullScreen = (id) => {
        setFullScreenMode(true)
        setCurrentScreenshot(id)
    }

    const closeFullScreen = () => {
        setFullScreenMode(false)
        setCurrentScreenshot(0)
    }

    return (
        <>
            <ScreenshotsWrapper>
                {screenshots.map((screenshot, idx) => {
                    return (
                        <Screenshot imageUrl={screenshot.image} onClick={() => triggerFullScreen(idx)} key={screenshot.id}></Screenshot>
                    )
                })}
            </ScreenshotsWrapper>
            {fullScreenMode && (
                <Slider closeFullScreen={closeFullScreen} currentScreenshot={currentScreenshot} screenshots={screenshots}/>
            )}

        </>
    )
}

export default Screenshots
