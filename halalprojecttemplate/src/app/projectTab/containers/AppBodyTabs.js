import { Box } from '@mui/material'
import React from 'react'
import { useStyles } from '../styles/AppBodyTabsstyle'
import DashBoardRoutes from '../routes/DashBoardRoutes'

export default function AppBodyTabs() {
    const { boxStyles } = useStyles()
  return (
    <Box className={boxStyles}>
        <DashBoardRoutes/>
    </Box>
  )
}
