import {style} from 'treat'
import {theme} from '../../theme'

const headerHeight = 112

export const root = style({
  minHeight: `calc(100vh - ${headerHeight}px)`,
  display: 'flex',
  background: theme.color.purple100,
  flexDirection: 'column',
})

export const shellContainer = style({
  order: 2,
  '@media': {
    [`screen and (min-width: ${theme.breakpoints.md}px)`]: {
      order: 1,
      minHeight: '800px',
    },
  },
})

export const gridContainer = style({
  padding: '0 1rem',

  '@media': {
    [`screen and (min-width: ${theme.breakpoints.sm}px)`]: {
      padding: '0 2rem',
    },
    [`screen and (min-width: ${theme.breakpoints.md}px)`]: {
      padding: '0 3rem',
    },
  },
})

export const sidebarContainer = style({
  order: 1,
  position: 'sticky',
  top: 0,

  '@media': {
    [`screen and (min-width: ${theme.breakpoints.md}px)`]: {
      order: 2,
      position: 'relative',
    },
  },
})

export const form = style({
  height: '100%',
})
