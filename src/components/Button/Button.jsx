import PropTypes from "prop-types";
import { LoadMoreButton } from "./Button.styled";

export const Button = ({ handleLoadMore }) => {
  return (
    <LoadMoreButton
      type="button"
      onClick={handleLoadMore}
    >
      Load more
    </LoadMoreButton>
  );
}

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
}