import { Component } from 'react';
import { mapper } from './utils/mapper';
import { GalleryList } from './GalleryList.jsx/GalleryList';
import { SearchBar } from './SearchBar/SearchBar';
import { Service } from './serviceApi/serviceApi';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';


export class App extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    query: '',
    largeIMG: ""
  };
 
componentDidUpdate( _ ,prevState) {
  if (prevState.query !== this.state.query) {

    this.searchImg()
  }
}

  searchImg = () => {
    this.setState({loading: true})
        Service(this.state.page, this.state.query).then(({data}) => {if(data.hits.length === 0){return toast.error("no match found")}this.setState({images : mapper(data) })})
    .finally(() => this.setState({loading: false}))
  }

  handlerSubmit = (queue) => {
    this.setState({query: queue})
  }

    fetchLoadImg = () => {
    this.setState({loading: true})
    Service(this.state.page + 1, this.state.query).then(({data}) => {this.setState((ps) =>({page: ps.page + 1,images : [...(ps.images), ...mapper(data)]}))})
    .finally(() => this.setState({loading: false}))
  }

  handlerModal = (largeIMG) => {
    this.setState({largeIMG: largeIMG})
  }

  modalWindowClose = () => {
    this.setState({
      largeIMG: '',
    });

  };

 render() {
  return <>
  <SearchBar onSubmit ={this.handlerSubmit}  />
   <GalleryList images={this.state.images} handlerModal={this.handlerModal}/>
   {this.state.loading && (<Loader/>)}
   {this.state.images.length >= 12 * this.state.page && <button onClick={this.fetchLoadImg}>Load More</button>}
   {this.state.largeIMG && <Modal largeimg={this.state.largeIMG} onClose={this.modalWindowClose}/>}
   <ToastContainer autoClose={3000} />
  </>
 }
};