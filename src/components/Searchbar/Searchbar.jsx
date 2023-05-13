import { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

import { Searchbar, SearchForm, SearchFormButton,ButtonLabel, SearchFormInput } from './Searchbar.styled';

export class Serchbar extends Component {
  state = {
    searchQuery: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const { searchQuery } = this.state
    

    //!!!!!!! 
    if (searchQuery.trim() === '') {
      toast.info('Please enter your search query.');
      return;
    }
    this.props.onSubmit(searchQuery);
  }

  handleSearchQuery = e => {
    this.setState({
      searchQuery: e.currentTarget.value.toLowerCase()
    })
  }
  render() {
    const { searchQuery } = this.state;
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" >
            <ButtonLabel/> 
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleSearchQuery}
          />
        </SearchForm>
      </Searchbar>
    );
  }
  
}

Serchbar.propTypes = {
  onSubmit: PropTypes.func,
}