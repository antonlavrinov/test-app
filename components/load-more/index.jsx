import { useRef, useCallback } from "react";
import Spinner from "../Spinner";
import * as SC from "./LoadMore";

// type LoadMoreProps = {
//   fetchMoreLoading: any;
//   fetchMoreGames: any;
// };

const LoadMore = ({ fetchMoreLoading, fetchMoreGames }) => {
  const observer = useRef();

  const loadMoreElementRef = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreGames();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [observer]
  );

  return (
    <>
      {fetchMoreLoading ? (
        <SC.Button aria-label="Load more">
          <Spinner />
        </SC.Button>
      ) : (
        <SC.Button aria-label="Load more" ref={loadMoreElementRef}>
          Load more
        </SC.Button>
      )}
    </>
  );
};

export default LoadMore;
