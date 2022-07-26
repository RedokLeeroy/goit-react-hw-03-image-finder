import { Item } from "components/Item/Item"
export const GalleryList = ({images, handlerModal}) => {
    return <ul className="gallery">
        {images.map(image => <Item key={image.id} small={image.webformatURL} large={image.largeImageURL} handlerModal={handlerModal}></Item>)}
</ul>

}