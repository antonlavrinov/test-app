import styled from 'styled-components'
import {useRef, useCallback} from 'react';
import Spinner from './Spinner';



const LoadMoreButton = styled.button`
    position: relative;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    background: var(--pale-blue);
    font-size: 20px;
    color: var(--white);
    padding: 15px 35px;
    min-width: 200px;
    border-radius: 10px;
    margin: 30px auto;
    :hover {
        cursor: pointer;
    }
`


const LoadMore = ({fetchMoreLoading, fetchMoreGames}) => {
    
    const observer = useRef()

    const loadMoreElementRef = useCallback((node) => {
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchMoreGames()
            }
        })
        if (node) {
            observer.current.observe(node)
        }
    })
    
    return (
        <>
            {fetchMoreLoading ? (
                <LoadMoreButton aria-label="Load more">
                    <Spinner/>
                </LoadMoreButton>
            ) : (
                <LoadMoreButton aria-label="Load more" ref={loadMoreElementRef}>Load more</LoadMoreButton>
            )}

        </>
    )
}

export default LoadMore
