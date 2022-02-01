import React, {useState} from 'react'
import {
  Box,
  Text,
  Input,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
  DatePicker,
  InputFileUpload,
  UploadFile,
  ContentBlock,
} from '@island.is/ui'
import {Controller, Control} from 'react-hook-form'

interface PropTypes {
  control: Control<any>
}

function Form7({control}: PropTypes): JSX.Element {
  const [error, setError] = useState<string | undefined>(undefined)

  const onChange = (newFiles: File[]) => {}

  const remove = (fileToRemove: UploadFile) => {}
  return (
    <>
      <Text variant="h2">Fylgiskjöl</Text>
      <Box paddingTop={5}>
        <Box marginBottom={3}>
          <Text variant="h5">
            Skjöl sem þarf að skila til Tryggingastofnunar eða umboða til að afgreiðsla á umsókn
            geti hafist:
          </Text>
        </Box>
        <Box marginBottom={3}>
          <Stack space={3}>
            <Text>Staðfesting frá Lífeyrissjóði</Text>
            <Text>
              Staðfesting á rétti/réttleysi hja lífeyrissjóðum (þarf ekki ef lífeyrisjóðsgreiðslur
              eru hafnar eða gert fráð fyrir þeim í tekjuáætlun). Einnig önnur fylgiskjöl sem þú
              villt láta fylgja umsókninni.
            </Text>
          </Stack>
        </Box>
        <Box padding={[2, 2, 3]}>
          <InputFileUpload
            fileList={[]}
            header="Dragðu skjöl hingað til að hlaða upp"
            description="Tekið er við skjölum með endingu: .pdf, .docx"
            buttonLabel="Velja skjöl til að hlaða upp"
            onChange={onChange}
            onRemove={remove}
          />
        </Box>
      </Box>

      <Box paddingTop={5}>
        <Stack space={3}>
          <Text variant="h5">Athugasemdir</Text>
          <Controller
            control={control}
            name="comments"
            render={({field: {onChange, value, name}}) => (
              <Input
                onChange={onChange}
                value={value}
                name={name}
                backgroundColor="blue"
                textarea
              />
            )}
          />
        </Stack>
      </Box>
    </>
  )
}

export default Form7
