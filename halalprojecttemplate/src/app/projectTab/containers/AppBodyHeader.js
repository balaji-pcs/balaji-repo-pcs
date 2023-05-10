import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../styles/AppBodyHeaderStyles'
import {  BackwardIcon, ForwardIcon, PlayIcon, PlusIcon } from '../themes/icons/AppMUIicons'

export default function AppBodyHeader() {
    const {appheaderStyles,divStyles} = useStyles()
  return (
    <Box className={appheaderStyles}>
        <div className={divStyles}>
        <BackwardIcon size={'small'}/>
        <ForwardIcon size={'small'}/>
        <Typography>Projects</Typography>
        </div>
        <div className={divStyles}>
        <Typography sx={{display: 'flex'}}><PlayIcon size={'small'}/>TUTORIAL VIDEO</Typography>
        <Button variant='contained' size='small'><PlusIcon size='small'/> ADD</Button>
        </div>
    </Box>
  )
}
