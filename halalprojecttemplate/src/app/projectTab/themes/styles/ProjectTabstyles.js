import { grey } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    projectTabStyles: {
    },
    projectHeaderStyles: {
        padding: '0px 20px',
        height: '40px',
    },
    tabsStyles: {
        paddingLeft:'20px',
        paddingBottom:'10px',
        borderBottom: `1px solid ${grey[300]}`,
    },
    tab: {
        height: '60px'
    },
    chip: {
        position: 'absolute',
        right:'60%',
    },
    scrollStyle:{
    }
})
