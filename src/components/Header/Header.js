import React from 'react'
import { Link, navigate } from 'gatsby'
import './Header.scss'
import Container from '../Container'
import SearchIcon from '../../assets/icons/search.svg'
import CloseIcon from '../../assets/icons/close.svg'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.searchBoxRef = React.createRef();
    this.state = {
      searchOpen: false,
      searchTerm: '',
      navOpen: false 
    }
  }

  openSearch = event => {
    this.setState({
      searchOpen: true
    }, () => {
      this.searchBoxRef.current.focus()
    })
  }

  closeSearch = event => {
    this.setState({
      searchOpen: false,
      searchTerm: ''
    })
  }

  handleSearchInput = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    navigate(`/search?q=${this.state.searchTerm}`)
  }

  openNav = event => {
    this.setState({
      navOpen: true
    })
  }

  closeNav = event => {
    this.setState({
      navOpen: false
    })
  }

  render () {
    return (
      <header className={`site-header shadowed ${this.state.searchOpen ? 'search-open': ''}`}>
        <Container>
          <button className={`menu ${this.state.navOpen ? 'open': ''}`} onClick={this.openNav}>
            <div className="line-wrap">
              <div className="line top"></div>
              <div className="line center"></div>
              <div className="line bottom"></div>
            </div>
          </button>

          <div className="site-branding">
            <Link to={'/'} className="site-title">
              {this.props.siteMeta.name}
            </Link>
          </div>

          <div className="mobile-search">
              <button type="button" className="search-opener" onClick={this.openSearch}>
                <SearchIcon />
              </button>      
              <button type="button" className="search-close" onClick={this.closeSearch}>
                <CloseIcon />
              </button>      
          </div>

          <div className="header-search">
            <form onSubmit={this.handleSubmit} id="cse-search-box-form-id">
              <div className={`search-form-container ${this.state.searchTerm ? 'has-input': null}`}>
                <input type="text" 
                       className="search-box" 
                       ref={this.searchBoxRef} 
                       id="cse-search-input-box-id" 
                       autoComplete="off" 
                       placeholder="Search TechSangam"
                       value={this.state.searchTerm} 
                       onChange={this.handleSearchInput} />
                <button type="button" className="search-submit">
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>

          <nav className="site-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/about/">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/cooperatives">Cooperatives</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/poverty-econ">Poverty Econ</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/rural">Rural</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/ugly-indian">Ugly Indian</Link>
              </li>
            </ul>
          </nav>

          <nav className={`navigation-drawer ${this.state.navOpen ? 'open opened': ''}`} id="nav-drawer">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/about/">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/cooperatives">Cooperatives</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/poverty-econ">Poverty Econ</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/rural">Rural</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/ugly-indian">Ugly Indian</Link>
              </li>
            </ul>
          </nav>

          <div className={`nav-shadow ${this.state.navOpen ? 'open': ''}`} onClick={this.closeNav}></div>
        </Container>
      </header>
    )
  }
}

export default Header
