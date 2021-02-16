import {useRef, useEffect, useState} from 'react'


export const useClickOutside = (handler) => {

    let domNode = useRef()

    useEffect(() => {
        const maybeHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler()
            }
        }
        document.addEventListener('mousedown', maybeHandler)
        return () => {
            document.removeEventListener('mousedown', maybeHandler)
        }
    })

    return domNode
}


export const useDebounce = (value, delay) => {

    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
  
    return debouncedValue;
  }

