export const getImageUrl = (path: string): string => {
    if (import.meta.env.DEV) {
        return path;
    } else {
        return import.meta.env.BASE_URL + path;
    }
};
