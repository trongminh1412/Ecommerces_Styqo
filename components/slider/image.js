import media1 from "public/slide/slide1.jpg";
import media2 from "public/slide/slide2.jpg";
import media3 from "public/slide/slide1.jpg";
import media4 from "public/slide/slide2.jpg";
import media5 from "public/slide/slide1.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = (index) => media[index % media.length];
