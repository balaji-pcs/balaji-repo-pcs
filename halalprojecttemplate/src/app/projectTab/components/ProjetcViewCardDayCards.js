import { Avatar, Box, Button, Card, Divider, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../themes/styles/ProjectViewCardsStyles'
import { deepOrange, green, grey } from '@mui/material/colors'
import { CallAssgineeIcon, CopyAssgineeIcon, TaskIcon } from '../themes/icons/AppMUIicons'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ProjetcViewCardDayCards({item}) {
    const {cardBox,cardBoxButton,cardTitle,menudiv} = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className={cardBox}>
        <Card sx={{height: '25px', marginBottom: '5px',marginRight:'30px',backgroundColor:grey[300],textAlign:'center' }}>
          <Typography variant='caption' align='center' color='disabled'>{item.date}</Typography>
        </Card>
        <Divider/>
        <Card variant="outlined" sx={{height: 'fit-content',marginRight:'30px',padding:'8px' }}>
          <div className={cardTitle}><TaskIcon sx={{padding: '0px 5px'}}/><Typography variant='button' >{item.task}</Typography></div>
          <Typography>{item.time}</Typography> 
          <Button
          startIcon={<Avatar sx={{ width: 24, height: 24, bgcolor: green[500] }}/>}
          size='small'
          sx={{color:grey[900]}}
          className={cardBoxButton}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>{item.assignee}</Button> 
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <Typography variant='caption' sx={{marginLeft:'10px'}}>CURRENT ASSIGNEE</Typography>
          <MenuItem onClick={handleClose} >
            <Avatar sx={{ marginRight:'10px', bgcolor: green[500] }}/>
            <Typography>{item.assignee}</Typography>
            <Avatar sx={{color:grey[900],bgcolor:grey[200],width:'45px',margin:'0px 5px 0px 20px '}} variant="rounded"><CallAssgineeIcon /></Avatar>
            <Avatar sx={{color:grey[900],bgcolor:grey[200],width:'45px',margin:'0px 5px '}} variant="rounded"><CopyAssgineeIcon /></Avatar>
            <Button sx={{color:grey[900]}} variant="text" size='small'>remove</Button>
          </MenuItem>
        <Divider/>
        <Typography variant='caption' sx={{marginLeft:'10px'}}>ASSIGN MORE WORKERS</Typography>
        {item.otherAssignees?.map( ( name, index ) => <MenuItem onClick={handleClose}sx={{display:'flex',justifyContent:'space-between'}}>
          <div className={menudiv}><Avatar sx={{marginRight:'10px', bgcolor: deepOrange[500] }}/>{name}</div>
          <Button align='end' variant="text" size='small'>Assign</Button>
          </MenuItem>)}
      </Menu> 
          <Typography>{'NOTES(2)'}</Typography>       
        </Card>
    </Box>
   
  )
}
