import image from '../../assets/Background.png'
export const getImageUrl = (path:string) => {
  return new URL(`../../assets/${path}`, import.meta.url).href;
};
