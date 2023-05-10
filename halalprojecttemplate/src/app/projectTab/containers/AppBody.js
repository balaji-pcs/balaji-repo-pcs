import React from 'react'
import AppBodyHeader from './AppBodyHeader'
import AppBodyTabs from './AppBodyTabs'
import { Box } from '@mui/material'

export default function AppBody() {
  return (<Box>
    <AppBodyHeader/>
    <AppBodyTabs/>
    </Box>)
}
