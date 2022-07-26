export const Item = ({small, handlerModal, large}) => {
    return <li class="gallery-item">
  <img src={small} alt="pictur" onClick={()=> handlerModal(large)}/>
</li>
}