import { grey, orange } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    viewCard:{
        height: '350px',
        boxShadow: '0px 0px 3px 0px grey',
        borderRadius: '5px',
        marginBottom: '20px',
        padding: '2px',
        display:'flex',
    },
    paperinViewCard:{
        margin: '5px',
        boxShadow:'0px 0px 5px 0px',
        height: '88%',
        minWidth: '7%',
        backgroundColor:orange[300],
        color:orange[300],
        padding: '15px'
    },
    childPaper:{
        height: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    },
    boxData:{
        width:'100%',
        padding:'20px',
        maxWidth:'75.5vw'
    },
    cardTopStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardTopIcon:{
        width: '250px',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    dayCardDetails:{
        display: 'flex',
        flexDirection:'row',
        minWidth:'100vw',
        height:'234px',
    },
    cardBox: {
        width: '300px',
    },
    cardBoxButton:{
        "&:hover, &:focus":{
            background: grey[300],
          }
    },
    cardTitle:{
        display: 'flex',
        alignItems:'center'
    },
    menudiv:{
        display:'flex',
        alignItems:'center'
    }
})
