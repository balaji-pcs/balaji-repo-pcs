import { grey } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    boxStyles: {
        minWidth: '10vw',
        backgroundColor: grey[100],
        borderRight: `1px solid ${grey[300]}`,
        padding: '30px 10px 10px 10px',
        overflowY: 'scroll'
    },
    listStylesForButtons: {
        borderRadius:'10px',
        padding: '8px 8px !important',
        "&:hover, &:focus":{
            background: grey[300],
          }
    }
})
