import React from 'react'
import Link from 'gatsby-link'

import me from '../images/me.jpg'
import me2 from '../images/me2.jpeg'
import pic03 from '../images/pic03.jpg'
import destinator from '../images/destinator.png'
import drinkerator from '../images/drinkerator.png'
import leafy from '../images/leafy.png'
import scraper from '../images/scraper.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={me} alt="" /></span>
          <p>I have gained experience and proficiency using technologies including, but not limited to: HTML, CSS, Javascript, jQuery, Restful API, MySQL, MongoDB, Mongoose, GitHub, Heroku, MLab, AJAX, Axios, Node.js, Materialize, Animate, SASS, React and Bootstrap.</p>
          <p>With a unique combination of skills and experience, I will be able to provide rich, meaningful and efficient interactions with clients, coordinate the efforts of a team, and deliver a product that is explicitly suited to meet the needs of the user and an organization.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>


          <span className="image main"><img src={leafy} alt="" />
          <a href="https://salty-chamber-31378.herokuapp.com/">Leafy</a>
          <p>React App utilizing image recognition, user authentication and MongoDB</p>
          </span>

          <span className="image main"><img src={drinkerator} alt="" />
          <a href="https://marcpsalazar.github.io/Drinkerator/">Drinkerator</a>
          <p>HTML App With jQuery and Bootstrap</p>
          </span>

          <span className="image main"><img src={destinator} alt="" />
          <a href="https://agile-scrubland-45156.herokuapp.com/">Destinator</a>
          <p>Node and Express App utilizing Materialize, Leaflet and three API sources.</p>

          </span>
          <span className="image main"><img src={scraper} alt="" />
          <a href="https://agile-scrubland-45156.herokuapp.com/">Washington Post Scraper</a>
          <p>Mongoose, Handlebars, MVC app</p>
          </span>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={me2} alt="" /></span>
          <p>Born in Oklahoma City, I moved to Seattle, WA in 1999 and lived there for 16 years. I relocated to Washington DC in 2015 and have been enjoying the completely unique experience that is The District.</p>
          <p>As a hospitality professional with more than twelve years of experience from roles in front office, guest services and food & beverage management, I bring a record of success in building service-oriented teams through targeted hiring and training.</p>

          <p>I have managed labor contract negotiations, planned and executed public and private events, tailored POS and property-management systems to suit business needs, staffed, supplied, permitted and opened a boutique property, run organization-wide training classes and streamlined operations through Six Sigma methodology.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>marcpsalazar@gmail.com</p>
          <ul className="icons">
            <li><a href="https://www.instagram.com/mpatricksalazar/?hl=en" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/marcpsalazar" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/mpatricksalazar/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
