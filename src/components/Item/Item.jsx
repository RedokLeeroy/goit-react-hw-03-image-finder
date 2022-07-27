import PropTypes from "prop-types"
export const Item = ({small, handlerModal, large}) => {
    return <li class="gallery-item">
  <img src={small} alt="pictur" onClick={()=> handlerModal(large)}/>
</li>
}

Item.propTypes = {
    small: PropTypes.string.isRequired,
    handlerModal: PropTypes.func,
    large: PropTypes.string.isRequired
}