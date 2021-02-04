import React from 'react';
import PropTypes from 'prop-types';


const ArticleItem = ({ title, author, description, urlToImage }) => (
    <figure >
        <img style={{
            height: '50%',
            width: '50%',

        }} src={urlToImage} />
        <figcaption>{title}</figcaption>
        <figcaption>{author}</figcaption>
        <figcaption>{description}</figcaption>
    </figure>
);

ArticleItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
};

export default ArticleItem;
