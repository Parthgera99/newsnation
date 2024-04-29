import React, { Component } from 'react';
import './News.css';
import NewsItem from './NewsItem';
import Navbar from './Navbar'

export default class News extends Component {

  static defaultProps = {
    category : "general"
  }

  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      text : ""
    };
  }

  handleOnChange =(event)=>{
    this.setText(event.target.value)
  }

  async search (event){
    event.preventDefault();
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${this.state.text}&apiKey=ab9325faa01a4df9b9d53770b71ac647`);
      const data = await response.json();
      this.setState({ articles: data.articles, loading:false });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }


  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(`http://localhost:3000/bitcoin-news?q=${this.state.query}`);
  //     const data = await response.json();
  //     this.setState({ news: data.articles });
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //   }
  // };




  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ab9325faa01a4df9b9d53770b71ac647`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }


  async componentDidUpdate(prevProps) {
    if (this.props.category!==prevProps.category){
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ab9325faa01a4df9b9d53770b71ac647`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, loading: false });
      } catch (error) {
        console.log(error);
        this.setState({ loading: false });
      }
    }

    if(this.props.text!==prevProps.text){
      try {
        let url = `https://newsapi.org/v2/everything?q=${this.props.text}&apiKey=ab9325faa01a4df9b9d53770b71ac647`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, loading: false });
      } catch (error) {
        console.log(error);
        this.setState({ loading: false });
      }
    }
    

  }

  
  render() {
    const { articles, loading , text} = this.state;
    

    return (
      <>
      <Navbar search={this.search} text = {this.text} handleOnChange={this.handleOnChange}/>
        <div className="main">
          <ul className="cards">
            {loading ? (
              <p>Loading for {text}...</p>
            ) : (
              Array.isArray(articles) && articles.length > 0 ? (
                articles.map((element, index) => {
                  if (element.urlToImage === null) {
                    return null;
                  } else {
                    return (
                      <NewsItem
                        key={element.url} // Assigning unique key
                        title={element.title.slice(0, 85) + '...'}
                        desc={element.description ? element.description.slice(0, 130) + '...' : "no description 🩴"}
                        imageToUrl={element.urlToImage}
                        url={element.url}
                      />
                    );
                  }
                })
              ) : (
                <p>No articles to display</p>
              )
            )}
          </ul>
        </div>
      </>
    );
  }
}
