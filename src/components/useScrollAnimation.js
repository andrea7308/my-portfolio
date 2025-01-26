import { useEffect } from 'react';

const useScrollAnimation = (selector = '.fade-in') => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [selector]);
};

export default useScrollAnimation;
