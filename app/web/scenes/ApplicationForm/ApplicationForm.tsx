import React, {useState, useRef, useContext, useEffect, useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {
  Box,
  SkeletonLoader,
  Button,
  FormStepper,
  GridColumn,
  GridContainer,
  GridRow,
} from '@island.is/ui'

import {Form1, Form2, Form3, Form4, Form5, Form6, Form7, Form8, Summary} from './components'
import {AuthContext} from '../../services'

import * as styles from './ApplicationForm.treat'
import {useRouter} from 'next/dist/client/router'

function ApplicationForm(): JSX.Element {
  const context = useContext(AuthContext)
  const router = useRouter()
  // const navigate = useNavigate()
  // const {data, loading} = useQuery<Query>(UserQuery, {
  //   variables: {mobileNumber: context.token},
  // })
  // const {user} = data || {}
  const user = {
    step: 1,
    subStep: 0,
    applicationStatus: 'progress',
  }
  const userRef = useRef(user)
  // const [updateApplication] = useMutation<Mutation>(UpdateApplicationMutation)
  const [activeSubSectionIndex, setActiveSubSectionIndex] = useState(0)
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const {handleSubmit, control, reset} = useForm<any>({
    defaultValues: useMemo(() => user, [user]),
  })

  const removeKey = (obj, key) =>
    obj !== Object(obj)
      ? obj
      : Array.isArray(obj)
      ? obj.map(item => removeKey(item, key))
      : Object.keys(obj)
          .filter(k => k !== key)
          .reduce((acc, x) => Object.assign(acc, {[x]: removeKey(obj[x], key)}), {})

  useEffect(() => {
    if (!userRef.current && user) {
      setActiveSectionIndex(user.step)
      setActiveSubSectionIndex(user.subStep)
      reset(removeKey(user, '__typename'), {
        keepValues: false,
      })
    }
  }, [user, userRef, reset])

  const formName = 'Ellilífeyrir'
  const getNextIndexes = () => {
    const currentSection = forms[activeSectionIndex].section
    const subSections = currentSection.children
    if (subSections?.length && activeSubSectionIndex < subSections.length - 1) {
      return [activeSectionIndex, activeSubSectionIndex + 1]
    }

    if (activeSectionIndex < forms.length - 1) {
      return [activeSectionIndex + 1, 0]
    }
    return [activeSectionIndex, activeSubSectionIndex]
  }

  const goNext = () => {
    const [index, subIndex] = getNextIndexes()
    setActiveSectionIndex(index)
    setActiveSubSectionIndex(subIndex)
  }

  const goPrevious = () => {
    const currentSection = forms[activeSectionIndex].section
    console.log(currentSection)

    if (!currentSection.name) {
      router.push('/')
    }

    const subSections = currentSection.children
    if (subSections?.length && activeSubSectionIndex > 0) {
      setActiveSubSectionIndex(index => Math.max(index - 1, 0))
      return
    }

    if (activeSectionIndex > 0) {
      setActiveSectionIndex(index => Math.max(index - 1, 0))
      // set subsection to last element
      const prevSection = forms[activeSectionIndex - 1].section
      const prevSubSections = prevSection.children
      setActiveSubSectionIndex(Math.max((prevSubSections?.length ?? 0) - 1, 0))
    }
  }

  const forms = [
    {component: <Form1 control={control} />, section: {name: undefined}},
    {component: <Form2 control={control} />, section: {name: 'Persónuupplýsingar'}},
    {
      section: {
        name: 'Almennar upplýsingar',
        children: [
          {
            type: 'SUB_SECTION',
            name: 'Búa/Starfa erlendis',
            component: <Form3 control={control} />,
          },
          {
            type: 'SUB_SECTION',
            name: 'Annað',
            component: <Form4 control={control} />,
          },
          {
            type: 'SUB_SECTION',
            name: 'Uppbót',
            component: <Form5 control={control} />,
          },
        ],
      },
    },
    {component: <Form6 control={control} />, section: {name: 'Tekjur'}},
    {component: <Form7 control={control} />, section: {name: 'Fylgiskjöl'}},
    {component: <Form8 control={control} />, section: {name: 'Yfirferð'}},
    {component: <Form8 control={control} />, section: {name: 'Senda'}},
  ]

  const handleOnSubmit = handleSubmit(async input => {
    const [index, subIndex] = getNextIndexes()
    const isSubmitting = index === activeSectionIndex && index === forms.length - 1
    // const {data} = await updateApplication({
    //   variables: {
    //     input: {
    //       ...input,
    //       applicationStatus: isSubmitting ? 'done' : null,
    //       step: index,
    //       subStep: subIndex,
    //       mobileNumber: user.mobileNumber,
    //     },
    //   },
    // })
    // if (data?.updateApplication) {
    if (isSubmitting) {
      console.log('eee')
      // navigate('/')
    } else {
      goNext()
    }
    // }
  })

  const getSections = () =>
    forms.reduce((acc, {section}) => {
      if (!section.name) {
        return acc
      }
      return [...acc, section]
    }, [])

  const getCurrentForm = () => {
    if (activeSubSectionIndex >= 0) {
      if (activeSectionIndex >= forms.length) {
        return forms[forms.length - 1]
      }
      const currentSection = forms[activeSectionIndex].section
      const subSections = currentSection.children

      if (!subSections) {
        return forms[activeSectionIndex].component
      }
      return subSections[activeSubSectionIndex]?.component
    }
  }

  // const getSubSectionsLength = () => forms[activeSectionIndex].section?.children?.length || 0

  return (
    <div className={styles.root}>
      <Box paddingTop={[0, 4]} paddingBottom={[0, 5]} marginBottom={4} width="full" height="full">
        <GridContainer className={styles.gridContainer}>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '8/12', '9/12']} className={styles.shellContainer}>
              <Box height="full">
                {false ? (
                  <SkeletonLoader height={200} />
                ) : (
                  <form onSubmit={handleOnSubmit} className={styles.form}>
                    <Box
                      paddingTop={[2, 2, 2, 4, 10]}
                      height="full"
                      borderRadius="large"
                      background="white"
                      display="flex"
                      flexDirection="column"
                      justifyContent="spaceBetween"
                    >
                      <Box
                        as="section"
                        paddingX={[2, 4, 4, 4, 12]}
                        paddingTop={2}
                        paddingBottom={[4, 6]}
                      >
                        {getCurrentForm()}
                      </Box>
                      <Box
                        as="footer"
                        borderTopWidth="standard"
                        borderColor="purple100"
                        paddingX={[2, 4, 4, 4, 12]}
                        paddingY={[2, 2, 4]}
                        display="flex"
                        justifyContent="spaceBetween"
                        width="full"
                      >
                        {user.applicationStatus !== 'done' && (
                          <>
                            <Box>
                              <Button
                                variant="ghost"
                                onClick={goPrevious}
                                disabled={activeSectionIndex === 0 && activeSubSectionIndex === -1}
                              >
                                Til baka
                              </Button>
                            </Box>
                            <Box>
                              <Button icon="arrowForward" type="submit">
                                {activeSectionIndex === forms.length - 1
                                  ? 'Senda inn umsókn'
                                  : 'Halda áfram'}
                              </Button>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
                  </form>
                )}
              </Box>
            </GridColumn>
            <GridColumn
              span={['12/12', '12/12', '4/12', '3/12']}
              className={styles.sidebarContainer}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="spaceBetween"
                height="full"
                paddingTop={[0, 0, 8]}
                paddingLeft={[0, 0, 0, 4]}
              >
                <FormStepper
                  formName={formName}
                  sections={getSections()}
                  activeSection={activeSectionIndex - (user?.applicationStatus === 'done' ? 0 : 1)}
                  activeSubSection={activeSubSectionIndex}
                />
              </Box>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </div>
  )
}

export default ApplicationForm
