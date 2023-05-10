import { Badge, Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../themes/styles/ProjectViewCardsStyles'
import { CLipBoardIcon, CameraIcon, DUEIcon, EditIcon, MoreIcon, OpenFullIcon, ThreeDotsIcon } from '../themes/icons/AppMUIicons'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProjetcViewCardDayCards from './ProjetcViewCardDayCards'
import MoreInfoTab from './MoreInfoTab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{overflowY:'scroll'}}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const paperBGcolor = ['#fbbead','#b3d4ff','#c0b6f3']

export default function ProjectViewCards({
    taskName,
    completeBy,
    due,
    general,
    moreInfo,
    projectFinancials,
    index
}) {
    const {viewCard,paperinViewCard,childPaper,boxData,cardTopStyle,dayCardDetails,cardTopIcon} = useStyles()
    const [value, setValue] = React.useState(0);
    

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (<Box className={viewCard}>
    <Paper className={paperinViewCard} sx={{backgroundColor: paperBGcolor[index]}}>
        <Paper className={childPaper} sx={{color:(index%2===0)&&'red',margin:'0px 0px 40% 0px',fontWeight:'bold',display:'flex',flexDirection:'column'}}>
          <DUEIcon/>
          <Typography>{due.split(' ')[0]}{' '}due</Typography>
          </Paper>
        <Typography variant='caption' sx={{fontWeight:'bold'}}>{due.split(' ')[0]}/30</Typography><br/>
        <Typography variant='caption'>Completed Task</Typography>
        <Divider/>
        <Typography variant='caption' sx={{fontWeight:'bold'}}>Complete By</Typography><br/>
        <Typography variant='caption'>{completeBy}</Typography>
    </Paper>
    
    
    <Box className={boxData}>
        <div className={cardTopStyle}>
        <Typography variant='h6'>{taskName}</Typography>
        <div className={cardTopIcon}>
            <CameraIcon size='medium'/>
            <CLipBoardIcon size='medium'/>
            <EditIcon size='medium'/>
            <Badge color="info" variant='outlined' badgeContent={4}>
            <ThreeDotsIcon size='medium'/>
            </Badge>
            <MoreIcon size='medium'/>
            <OpenFullIcon size='medium'/>
        </div>
        </div>
        <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{maxWidth:'77vw'}}>
          <Tab label="GENERAL" {...a11yProps(0)} />
          <Tab label="MORE INFO" {...a11yProps(1)} />
          <Tab label="PROJECT FINANCIALS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} sx={{ minWidth: 'min-content' }}>
        <div className={dayCardDetails}>
          <h6>Today</h6>
          <Divider orientation="vertical" variant="middle" sx={{margin:'10px 20px',borderColor:'blue',height:'80%'}}/>
        {general?.map((item,index)=>{
            return <ProjetcViewCardDayCards item={item}/>
        })}</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MoreInfoTab moreInfo={moreInfo}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      PROJECT FINANCIALS
      </TabPanel>
    </Box>
  </Box>)
}
