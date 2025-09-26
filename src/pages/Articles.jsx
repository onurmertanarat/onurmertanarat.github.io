import React from 'react';
import { articlesData } from '../data/articlesData';
import ArticleCard from '../components/ArticleCard';

const Articles = () => {
    return (
        <section id="articles">
            <h1 className="articles-title">My Articles</h1>
            <div className="articles-grid">
                {articlesData.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                ))}
            </div>
        </section>
    );
};

export default Articles;