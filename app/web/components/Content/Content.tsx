import React from 'react'
import {Box} from '@island.is/ui'

import * as styles from './Content.treat'

interface PropTypes {
  children: React.ReactNode
}

function Content({children}: PropTypes): JSX.Element {
  return (
    <Box display="flex" justifyContent="center">
      <Box paddingX={[4, 6, 7]} className={styles.root}>
        {children}
      </Box>
    </Box>
  )
}

export default Content
