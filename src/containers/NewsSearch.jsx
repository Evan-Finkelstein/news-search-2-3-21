import React, { Component } from 'react';
import { getArticles, searchArticle } from '../fetches/articleFetches.js';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/articles/Search';

export default class NewsSearch extends Component {
    state = {
        loading: false,
        articles: [],
        search: ''

    }

    componentDidMount = async () => {
        this.setState({ loading: true });
        const articles = await getArticles();
        await this.setState({ articles: articles.articles })
        this.setState({ loading: false });
    };
    handleStateChange = (e) => {
        this.setState({ search: e.target.value });
        console.log(this.state.search);
    }
    handleSearchState = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const articles = await searchArticle(this.state.search);
        await this.setState({ articles: articles.articles });
        this.setState({ loading: false });


    }


    render() {

        const { articles } = this.state;

        return (
            <div data-testid="display" >
                <Search onSearch={this.handleSearchState}
                    searchState={this.handleStateChange}
                />
                {
                    this.state.loading
                        ? <img src={'../../public/loading-spinner.gif'} className='loading-spinner' alt={''} />
                        :
                        <ArticleList articles={articles} />
                }
            </div >
        );
    }
}




