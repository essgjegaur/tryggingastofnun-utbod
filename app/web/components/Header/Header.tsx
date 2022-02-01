import React, {useContext} from 'react'
import {Box, Hidden, Stack, Button, Text, ModalBase, Link} from '@island.is/ui'

import {AuthContext} from '../../services'

import {Avatar} from '../Avatar'
import {Content} from '../Content'
import {Logo} from '../Logo'
import {Navigation} from '../Navigation'

import * as styles from './Header.treat'
import {users} from '../../users'

function Header(): JSX.Element | null {
  const context = useContext(AuthContext)
  const user = users.find(user => user.gsm === context.token)

  return (
    <Box height="full">
      <Content>
        <Box
          as="header"
          paddingY={4}
          display="flex"
          alignItems="center"
          justifyContent="spaceBetween"
          background="white"
        >
          <Link href="/">
            <Logo width={160} />
          </Link>
          {user && (
            <ModalBase
              baseId="user-modal"
              hideOnClickOutside
              hideOnEsc
              tabIndex={0}
              removeOnClose
              disclosure={
                <Button variant="utility" icon="chevronDown">
                  <Hidden above="xs">
                    <Avatar username={user?.name} resize={true} />
                  </Hidden>

                  <Hidden below="sm">{user?.name}</Hidden>
                </Button>
              }
            >
              {({closeModal}: any) => (
                <Box onClick={closeModal}>
                  <Box
                    display="flex"
                    className={styles.modal}
                    justifyContent="flexEnd"
                    paddingX={[4, 6, 8]}
                    marginTop={5}
                  >
                    <Box
                      background="white"
                      onClick={e => {
                        e.stopPropagation()
                      }}
                      padding={4}
                      borderRadius="large"
                    >
                      <Stack space={4}>
                        <Box display="flex" alignItems="center">
                          <Avatar username={user?.name} />

                          <Box marginRight={4}>
                            <Text variant="h4" as="h4">
                              {user?.name}
                            </Text>
                          </Box>
                        </Box>

                        <Hidden above="md">
                          <Navigation onNavigate={closeModal} />
                        </Hidden>

                        <Box>
                          <Button
                            onClick={() => {
                              console.log(context)
                              context.logout()
                            }}
                            fluid
                            icon="logOut"
                            iconType="outline"
                          >
                            Útskrá
                          </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              )}
            </ModalBase>
          )}
        </Box>
      </Content>
    </Box>
  )
}

export default Header
