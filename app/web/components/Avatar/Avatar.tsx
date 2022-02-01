import React from 'react'
import cn from 'classnames'
import {Box} from '@island.is/ui'

import * as styles from './Avatar.treat'

interface PropTypes {
  username?: string
  resize?: boolean
}

const getInitials = (username?: string) => {
  if (!username) {
    return ''
  }

  const names = username.split(' ')
  let initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }

  return initials
}

function Avatar({username, resize = false}: PropTypes): JSX.Element {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="blue100"
      borderRadius="circle"
      marginRight={resize ? 0 : 2}
      className={cn(styles.avatar, {
        [styles.avatarResize]: resize,
      })}
    >
      <p
        className={cn(styles.initials, {
          [styles.initialsResize]: resize,
        })}
        color="blue400"
      >
        {getInitials(username)}
      </p>
    </Box>
  )
}

export default Avatar
