import { useState, useEffect, useRef, } from 'react';

function useIntersectionObserver({ threshold }) {
    const [isIntersecting, setIsIntersecting] = useState(null);
    const target = useRef(null);

    const handleIntersect = ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        const newChild = document.createElement('div');
        target.current.insertAdjacentElement('beforebegin', newChild);
        observer.observe(newChild);
    }, []);

    return {
		isIntersecting,
		target,
	};
}

export default useIntersectionObserver;