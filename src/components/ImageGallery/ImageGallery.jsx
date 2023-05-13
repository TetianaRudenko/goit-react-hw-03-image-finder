import PropTypes from "prop-types";
import { Gallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images, onClick}) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL} largeImageURL={image.largeImageURL} tags={image.tags}
          onClick={onClick}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, 
  })),
  onClick: PropTypes.func.isRequired,
}