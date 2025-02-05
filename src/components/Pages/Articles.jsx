import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const Articles = () => {
  const articles = [
    // ... your existing articles array
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold font-montserrat mb-8">
          Articles & Insights
        </h1>
        <div className="grid gap-8">
          {articles.map((article, index) => (
            <Link 
              to={article.link} 
              key={index}
              className="p-6 bg-white dark:bg-zinc-800/50 rounded-2xl 
                       border border-zinc-200 dark:border-zinc-700
                       hover:border-cyan-500 dark:hover:border-red-500 
                       transition-all duration-300"
            >
              <div className="space-y-4">
                <p className="text-sm text-zinc-500">{article.date}</p>
                <h2 className="text-xl font-bold font-montserrat">
                  {article.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {article.content}
                </p>
                <div className="flex items-center gap-2 text-cyan-500 dark:text-red-500">
                  <span>Read article</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles; 