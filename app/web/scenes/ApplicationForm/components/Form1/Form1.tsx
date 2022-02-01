import React from 'react'
import {Controller, Control} from 'react-hook-form'
import {Box, Checkbox, Icon, Text, Stack, Link} from '@island.is/ui'

import * as styles from './Form1.treat'

interface PropTypes {
  control: Control<any>
}

function Form1({control}: PropTypes): JSX.Element {
  return (
    <>
      <Text variant="h2">Gögn sótt frá öðrum aðilum</Text>
      <Box paddingTop={4}>
        <Stack space={3}>
          <Box>
            <Text variant="h5" color="blue400">
              Tryggingastofnun ríkisins
            </Text>
            <Text>Upplýsingar um örorkumat (stöðu)</Text>
            <Text>Upplýsingar um greiðslur vegna örorku (stöðu)</Text>
          </Box>

          <Box>
            <Text>Nánari upplýsingar um vinnslu persónuupplýsinga hjá Vinnumálastofnun</Text>
            <Link href="">
              <span className={styles.link}>Persónuverndarsíða Vinnumálastofu</span>
            </Link>
          </Box>

          <Box paddingY={1}>
            <Controller
              control={control}
              name="approveDataFetching"
              render={({field: {onChange, value, name}}) => (
                <Checkbox
                  large
                  label="Ég skil að ofangreindra gagna verður aflað"
                  name={name}
                  value={value ? 'approveDataFetching' : ''}
                  checked={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Form1
