import React from 'react';

const ArticleCard = ({ article }) => {
    return (
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-card-link">
            <div className="article-card">
                <div className="article-image-container">
                    <img src={article.image} alt={article.title} className="article-image" />
                </div>
                <div className="article-info">
                    <div className="article-tags">
                        {article.tags.map(tag => <span key={tag} className="tag-badge">{tag}</span>)}
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-summary">{article.summary}</p>
                </div>
            </div>
        </a>
    );
};

export default ArticleCard;