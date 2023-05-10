import React from 'react'
import { Box, Typography } from '@mui/material'
import { useStyles } from '../themes/styles/ProjectTabstyles'

export default function ProjectTabHeader() {
  const {projectHeaderStyles} = useStyles()
  return (<Box className={projectHeaderStyles}>
      <Typography variant='h5'>Projects</Typography>
  </Box>)
}
