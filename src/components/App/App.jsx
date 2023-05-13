import { Component } from "react";
import { apiService } from "../../services/apiService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrap } from './App.styled';
import { Serchbar } from '../Searchbar/Searchbar';
import { Modal } from "../Modal/Modal";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";





export class App extends Component {

  state = {
    searchQuery: '',
    images: [],
    page: 1,
    totalImages: 0,
    error: null,
    loading: false,
    showModal: false,
    showImage: false,
  }

  async componentDidUpdate(prevProps, prevState) {
    
    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      this.setState({ loading: true });

      try {
        const data = await apiService(this.state.searchQuery, this.state.page);
        this.setState({ totalImages: data.totalHits });
        if (data.totalHits === 0) {
          this.setState({ images: [] });
          toast.info(`Sorry, there are no images with ${this.state.searchQuery}. Please try again.`);
          return;
        }
        this.setState({ images: [...this.state.images, ...data.hits] });
      } catch (error) {
        this.setState({ error });
        toast.error('Sorry, an error occurred. Please try again');
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  
  handleSearchbarSubmit = searchQuery => {
    /* if (searchQuery !== this.state.searchQuery) {
      this.setState({ searchQuery, page: 1, images: []})
    } else {
      toast.info(`We already found images with ${searchQuery}.`);
    } */

    searchQuery !== this.state.searchQuery 
    ? this.setState({ searchQuery, page: 1, images: []})
    : toast.info(`Wealready found images with ${searchQuery}`)
  } 

 /*  handleLoadMore = () => {
    this.setState(state => {
      return {
        page: state.page + 1, 
      }
    })
  } */
  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }))
  }

  toggleModal = e => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

    if (this.state.showModal === false) {
      this.setState({showImage: e.target})
    }
  }

  render() {
    const { images, showModal, showImage, totalImages, loading, error} = this.state;
    
    return (
      <Wrap>
        <Serchbar onSubmit={this.handleSearchbarSubmit}></Serchbar>
        { images && <ImageGallery images={images}  onClick={this.toggleModal}/> }
       
        {showModal && showImage && (<Modal  onClose={this.toggleModal}
            src={showImage.dataset.source}
            alt={showImage.alt}/>)}
        
        {totalImages > images.length && images && !loading && !error && (<Button handleLoadMore={this.handleLoadMore} />)}
        
        {loading && <Loader />}
        <ToastContainer autoClose={2500}/>
      </Wrap>
    );
  }
 
};
