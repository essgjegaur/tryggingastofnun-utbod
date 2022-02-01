import React from 'react'

import {Icon, Box, Stack, Text, Link} from '@island.is/ui'
import {useRouter} from 'next/dist/client/router'

type IconProps = React.ComponentProps<typeof Icon>

interface NavigationItem {
  header?: string
  icon: IconProps['icon']
  name: string
  href: string
}

const navigationItems: [NavigationItem[], NavigationItem[]] = [
  [
    {
      header: 'Þjónusta',
      icon: 'person',
      name: 'Mín gögn',
      href: '/1',
    },
    {
      icon: 'reader',
      name: 'Umsóknir',
      href: '/',
    },
    {
      icon: 'fileTrayFull',
      name: 'Rafræn skjöl',
      href: '/3',
    },
    {
      icon: 'reader',
      name: 'Greiðsluáætlun',
      href: '/4',
    },
    {
      icon: 'cellular',
      name: 'Tekjuáætlun',
      href: '/5',
    },
    {
      icon: 'receipt',
      name: 'Skuldir og samingar',
      href: '/6',
    },
  ],
  [
    {
      icon: 'heart',
      name: 'Aðstoð',
      href: '/fasteignir',
    },
    {
      icon: 'school',
      name: 'Þú hjá TR',
      href: '/fjarmal',
    },
    {
      icon: 'home',
      name: 'Hafa Samband',
      href: '/stillingar',
    },
  ],
]

interface NavItemProps {
  item: NavigationItem
  baseColor: 'blue' | 'blueberry'
  onNavigate?: () => void
}

function NavItem({item, baseColor, onNavigate}: NavItemProps) {
  const router = useRouter()
  const isSelected = router.pathname.startsWith(item.href)
  const dark = `${baseColor}600` as any

  return (
    <>
      {item.header ? (
        <Text marginBottom={2} color={dark} variant="eyebrow" fontWeight="semiBold">
          {item.header}
        </Text>
      ) : null}
      <Link href={item.href} onClick={onNavigate}>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" marginRight={2}>
            <Icon
              type="outline"
              icon={item.icon}
              size="medium"
              color={isSelected ? dark : (`${baseColor}300` as any)}
            />
          </Box>
          <Text fontWeight={isSelected ? 'semiBold' : 'regular'} color={dark}>
            {item.name}
          </Text>
        </Box>
      </Link>
    </>
  )
}

interface PropTypes {
  onNavigate?: () => void
}

function Navigation({onNavigate}: PropTypes): JSX.Element {
  return (
    <Box as="aside">
      <Stack space={3}>
        <Box background="blue100" borderRadius="large" padding={4}>
          <Stack space={3}>
            {navigationItems[0].map(item => (
              <NavItem onNavigate={onNavigate} key={item.href} item={item} baseColor="blue" />
            ))}
          </Stack>
        </Box>
        <Box background="blueberry100" borderRadius="large" padding={4}>
          <Stack space={3}>
            {navigationItems[1].map(item => (
              <NavItem onNavigate={onNavigate} key={item.href} item={item} baseColor="blueberry" />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Navigation
