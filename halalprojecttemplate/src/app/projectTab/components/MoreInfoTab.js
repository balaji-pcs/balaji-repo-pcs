import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../styles/MoreInfoStyles'
import { ApprovedIcon, CallAssgineeIcon, ClientIcon, DoorNumberIcon, MailIcon, MapIcon, TaskFileIcon } from '../themes/icons/AppMUIicons'
import { green, purple } from '@mui/material/colors'

export default function MoreInfoTab({moreInfo}) {
    const {div1,div1Box,div2,div2Box,div3,div4,div4box,div4boxdiv1,div4boxdiv2} = useStyles()
  return (<>
    <div className={div1}>
    <Box component="span" className={div1Box}>
        <ApprovedIcon size='small'/><b>Estimate Approved on {moreInfo.estimatedtime}</b>
    </Box>
    </div>
    <div className={div2}>
        <Typography className={div2Box}><ClientIcon/><b>{moreInfo.client}</b></Typography>
        <Typography className={div2Box}><TaskFileIcon/><b>{moreInfo.task}</b></Typography>
        <Typography className={div2Box}><DoorNumberIcon/><b>{moreInfo.address}</b></Typography>
    </div>
    <div className={div3}>
        <CallAssgineeIcon/>
        <MailIcon/>
        <MapIcon/>
    </div>
    <div className={div4}>
        {EmployeeCard('SALES REP.','Faruk Ahmad')}
        {EmployeeCard('PROJECT MAN.','Faruk Ahmad')}
        {EmployeeCard('WORKERS','Faruk Ahmad')}
        {EmployeeCard('WORKERS','Faruk Ahmad')}
    </div>
  </>)
}

const EmployeeCard = (role,employeeName ) => {
    const {div4box,div4boxdiv1,div4boxdiv2} = useStyles()
    return <Box className={div4box}>
    <div className={div4boxdiv1}><Typography variant='caption'>{role}</Typography></div>
    <div className={div4boxdiv2}>
        <Avatar sx={{bgcolor: purple[500]}}/>{employeeName}<CallAssgineeIcon/>
    </div>
    </Box>
}
