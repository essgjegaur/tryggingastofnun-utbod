import Head from 'next/head'

import {Box, Text, LinkContext, Link} from '@island.is/ui'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LinkContext.Provider
          value={{
            linkRenderer: (href, children) => (
              <Link href={href} color="blue400" underline="normal" underlineVisibility="always">
                {children}
              </Link>
            ),
          }}
        >
          <Text variant="h1">
            Using <a href="https://ui.devland.is/">Ísland UI</a>.
          </Text>
        </LinkContext.Provider>

        <Box display="flex" flexDirection="column" marginTop={5}>
          <Text variant="h2" color="dark400">
            Welcome to TR boilerplate
          </Text>
        </Box>
      </main>
    </div>
  )
}
