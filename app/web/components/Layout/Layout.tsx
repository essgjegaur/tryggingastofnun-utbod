import React from 'react'
import {Box, Stack, Columns, Column, Hidden, Text} from '@island.is/ui'

import {Content} from '../Content'
import Navigation from '../Navigation/Navigation'

interface PropTypes {
  children: React.ReactNode
}

function Layout({children}: PropTypes): JSX.Element {
  return (
    <Content>
      <Box paddingY={6}>
        <Columns space={[0, 0, 0, 'containerGutter']} collapseBelow="lg">
          <Column width="4/12">
            <Hidden below="lg">
              <Navigation />
            </Hidden>
          </Column>
          <Column>
            <Box as="main">
              <Stack space={4}>
                <Text variant="eyebrow" color="purple400">
                  Yfirlit
                </Text>
                {children}
              </Stack>
            </Box>
          </Column>
        </Columns>
      </Box>
    </Content>
  )
}

export default Layout
