import React, {useState} from 'react'
import {Box, Text, Input, Stack, InputFileUpload, UploadFile} from '@island.is/ui'
import {Controller} from 'react-hook-form'

function Form7({control, updateUser}: any): JSX.Element {
  const [files, setFiles] = useState<UploadFile[]>([])
  const onChange = (newFiles: File[]) => {
    setFiles(newFiles)
    updateUser({fileName: newFiles[0].name})
  }
  return (
    <>
      <Text variant="h2">Fylgiskjöl</Text>
      <Box paddingTop={5}>
        <Box marginBottom={3}>
          <Text variant="h5">
            Skjöl eða umboð sem þarf að skila til Tryggingastofnunar til að afgreiðsla á umsókn
            geti hafist:
          </Text>
        </Box>
        <Box marginBottom={3}>
          <Stack space={3}>
            <Text>Staðfesting frá Lífeyrissjóði</Text>
            <Text>
              Staðfesting á rétti/réttleysi hja lífeyrissjóðum (þarf ekki ef lífeyrisjóðsgreiðslur
              eru hafnar eða gert ráð fyrir þeim í tekjuáætlun). Einnig önnur fylgiskjöl sem þú
              villt láta fylgja umsókninni.
            </Text>
          </Stack>
        </Box>
        <Box padding={[2, 2, 3]}>
          <InputFileUpload
            fileList={files}
            header="Dragðu skjöl hingað til að hlaða þeim upp"
            description="Tekið er við skjölum með endingu: .pdf, .docx"
            buttonLabel="Velja skjöl til að hlaða upp"
            onChange={onChange}
            onRemove={() => {}}
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
