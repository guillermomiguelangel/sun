import { useMedia } from 'react-use';

export const useMediaSun = () => {
    const isDesktop = useMedia('(min-width: 1024px)');
    return { isDesktop }
}
