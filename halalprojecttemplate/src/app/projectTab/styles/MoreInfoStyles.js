import {  lightGreen } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    div1:{
        margin: '15px 0px',
    },
    div1Box: {
        padding:'10px',
         border: `2px dashed ${lightGreen[800]}`,
         borderRadius: '5px',
        color:lightGreen[800],
        display:'flex',
        alignItems:'center',
        gap:'10px',
    },
    div2:{
        margin: '15px 0px',
        display:'flex',
        gap:'30px'
    },
    div2Box: {
        display:'flex',
        alignItems:'center',
        gap:'10px',
    },
    div3: {
        margin: '15px 0px',
        display:'flex',
        alignItems:'center',
        gap:'10px'
    },
    div4:{
        margin: '15px 0px',
        display:'flex',
        gap:'50px'
    },
    div4box:{},
    div4boxdiv1:{},
    div4boxdiv2:{
        display:'flex',
        alignItems:'center',
        gap:'10px'
    },


})
