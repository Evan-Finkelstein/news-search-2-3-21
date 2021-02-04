import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

export default class ArticleList extends Component {



    render() {
        const { articles } = this.props;
        const articleElements = articles.map(article => (
            <li key={article.title} style={{ margin: '50px' }}>
                < ArticleItem {...article} />
            </li>
        ));


        return (
            <ul >
                {articleElements}
            </ul>
        );
    }
}


// const ArticleList = ({ articles }) => (
//     <>
//         { articles.map(article => (
//             <li key={article.title} style={{ margin: '50px' }}>
//                 < ArticleItem {...article} />
//             </li>
//         ))};
//     </>

// );
// ColorControls.propTypes = {

//     onSearch: PropTypes.func.isRequired,
//     searchState: PropTypes.func.isRequired,

// };
// export default ArticleList;