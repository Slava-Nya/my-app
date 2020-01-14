import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './News.css';



function createBlock (article) {
    return(
        <div className="col-6">
            <div className="card mb-3 block" style={{maxWidth: "540px", margin: "auto"}}>
                <div className="row no-gutters card-inner-wrap">
                    <div className="col-md-4">
                    <img src={article.urlToImage} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.content}</p>
                        <p className="card-text"><small className="text-muted">{article.publishedAt}</small></p>
                        <a href={article.url} className="btn btn-success">Читать далее..</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: "33f6b312e8e04ab888711c5970fd5100",
            dataUrl: "https://newsapi.org/v2/everything?",
            subject: "bitcoin",
            from: "2019-12-12",
            sort: "publishedAt",
            error: null,
            isLoaded: false,
            articles: [],
        };
      }
    
    componentDidMount() {
        const { apiKey, dataUrl, subject, from, sort } = this.state;
      //  const query = dataUrl + "q=" + subject + "&from=" + from + "&sortBy=" + sort + "&apiKey=" + apiKey;
        fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=33f6b312e8e04ab888711c5970fd5100")
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    articles: result.articles
                });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
    const { error, isLoaded, articles } = this.state;
    console.log(articles);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="row">
                {articles.map(article => (
                createBlock(article)
            ))}
            </div>
        );
    }
    }
}

export default News