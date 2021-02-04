import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from '../articles/ArticleList';
import ArticleItem from '../articles/ArticleItem';
import Search from '../articles/Search';
describe('App component', () => {
  afterEach(() => cleanup());

  it('renders articles', () => {
    const articles = [{
      title: '',
      author: '',
      urlToImage: '',
      description: ''
    }];
    const { asFragment } = render(<ArticleList articles={articles} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders article', () => {
    const { asFragment } = render(<ArticleItem />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders search', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

});
