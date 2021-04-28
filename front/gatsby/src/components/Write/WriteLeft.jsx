import React, { memo, useState, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './writeLeft.module.scss'
import Stats from './Stats'
import _Biblio from './Biblio'
import Sommaire from './Sommaire'
import Versions from './Versions'

const Biblio = memo(_Biblio, function areEqual(prevProps, nextProps) {
  return prevProps.bib === nextProps.bib
})

function WriteLeft (props) {
  const [expanded, setExpanded] = useState(true)

  return (
    <nav className={`${expanded ? styles.expandleft : styles.retractleft}`}>
      <nav
        onClick={() => setExpanded(!expanded)}
        className={expanded ? styles.close : styles.open}
      >
        {expanded ? 'close' : 'open'}
      </nav>
      {expanded && (
        <>
          <div>
            <header>
              <h1>{props.article.title}</h1>
              <h2>by {props.article.owners.join(', ')}</h2>
            </header>
            <Versions {...props} />
            <Sommaire {...props} />
            <Biblio bibTeXEntries={bibTeXEntries} {...props} />
            <Stats md={props.md} />
          </div>
        </>
      )}
    </nav>
  )
}

export default connect(mapStateToProps)(WriteLeft)

