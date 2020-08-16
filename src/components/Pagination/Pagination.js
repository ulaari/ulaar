import React from 'react'
import { Link } from 'gatsby'

import './Pagination.scss'

class Pagination extends React.Component {
  render () {
    const { currentPage, numPages, path } = this.props
    let ellipsed = false
    let shouldEllipse = false
    const paginatedViews = []

    Array.from({ length: numPages }).forEach((_, i) => {
      const pageNumber = i+1
      const right = numPages - pageNumber
      let showNumber = pageNumber <= 3 || right === 0
      showNumber = showNumber || (pageNumber > currentPage - 2 && pageNumber < currentPage + 2)

      if(showNumber) {
        ellipsed = false
        shouldEllipse = false
        paginatedViews.push(
        <li key={`pagination-number${pageNumber}`} className={pageNumber === currentPage ? 'selected': null}>
          <Link to={`${path}${pageNumber === 1 ? '' : `page/` + pageNumber}`}>
            {i + 1}
          </Link>
        </li>)
      } else {
        shouldEllipse = !ellipsed
        ellipsed = true

        if(shouldEllipse) {
          paginatedViews.push(
          <li key={`pagination-number${pageNumber}`} className="disabled">
            <span aria-hidden="true">&hellip;</span>
          </li>
          )
        }
      }
    })

    return (
      <ul className="pagination-container">
        <li>Pages</li>
        {paginatedViews}
      </ul>
    )
  }
}

export default Pagination
