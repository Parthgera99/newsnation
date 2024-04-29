import React, { Component } from 'react'
import './NewsItem.css'


export default class NewsItem extends Component {
  render() {

      
   
    
    return (
      <>
        {/* <div id="container" className="container animate grow delay-1">
          <img className="imagehd" alt='image23'  src={this.props.imageToUrl} />

          <h2 className="heading">{this.props.title}</h2>

          <p className="text">
            {this.props.desc}
          </p>
          <button className="moreButton" >
              Read More
          </button>
      </div> */}

    
          <li className="cards_item">
        <div className="card">
          <div className="card_image"><img alt='image23'  style={{height : '206px' , width:'366.21px'}}  src={this.props.imageToUrl} /></div>
          <div className='card_content'>
            <h2 className="card_title">{this.props.title}</h2>
            <p className="card_text">
              {this.props.desc}
            </p>
            <a href={this.props.url} className="btn1 card_btn" >
                Read More
                
            </a>
          </div>
      </div>
        </li>


      
      {/* <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div> */}
    
      </>
    )
  }
}
