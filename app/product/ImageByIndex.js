import image1 from "./../products/productsImage/Obliqua/pl.avif";
import image2 from "./../products/productsImage/Obliqua/pl2.avif";
import image3 from "./../products/productsImage/Obliqua/pl3.avif";
import image4 from "./../products/productsImage/Obliqua/pl4.avif";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
