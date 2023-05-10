import React from 'react'
import {Box, Typography} from '@mui/material'
import { useStyles } from '../styles/AppLeftSideBarStyles'
import { AppIcon } from '../themes/icons/AppIcon'
import { dashBoard, dashBoardMainMenu } from '../utils/dashBoardData/DashBoardData'
import DashBoardButton from '../components/DashBoardButtons'

export default function AppLeftSideBar() {
  const  { boxStyles }  = useStyles()
  return (
    <Box className={boxStyles}>
      <Typography sx={{fontWeight:'800',padding:'0px 8px'}} variant='h5'><AppIcon/> {' '}Halal</Typography>
      <DashBoardButton items={dashBoard}/>
      <Typography variant='button' sx={{fontWeight:'400',padding:'0px 8px'}}>MAIN MENU</Typography>
      <DashBoardButton items={dashBoardMainMenu}/>
    </Box>
  )
}
