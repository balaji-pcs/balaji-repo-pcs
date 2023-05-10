import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from '../styles/AppLeftSideBarStyles';


export default function DashBoardButton({items}) {
  const  { listStylesForButtons }  = useStyles()

  return (<List>
    {items?.map((item, index) => (
      <ListItem key={item.lable} disablePadding>
        <ListItemButton className={listStylesForButtons} component={RouterLink} to={`/${item.lable.toLowerCase().split(' ').join('_')}`}>
          <ListItemIcon sx={{minWidth: '30px'}}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.lable} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>)
}
