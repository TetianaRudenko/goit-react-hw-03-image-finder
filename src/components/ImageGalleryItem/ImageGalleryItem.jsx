import PropTypes from "prop-types";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({
  webformatURL, 
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={onClick}
      />
    </GalleryItem>
  );
}


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}