import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../themes/styles/ProjectTabstyles'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { GanttViewIcon, MonthViewIcon, TimeLineViewIcon } from '../themes/icons/AppMUIicons';
import ProjectTimeLineViewTab from '../containers/ProjectTimeLineViewTab';
import ProjectMonthViewTab from '../containers/ProjectMonthViewTab';
import ProjectGanttTab from '../containers/ProjectGanttTab';

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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
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
  

export default function ProjectTab() {
    const {projectTabStyles,projectHeaderStyles,tabsStyles,tab,chip,scrollStyle} = useStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box className={projectTabStyles}>
        <Box className={projectHeaderStyles}>
            <Typography variant='h5'>Projects</Typography>
        </Box>
        <Box className={tabsStyles}>
            <Chip label="BETA" size="small" className={chip} color='warning'/>
        <Tabs className={tab}  indicatorColor='secondary' textColor='secondary' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<TimeLineViewIcon />} iconPosition="start" label="Timeline view" {...a11yProps(0)} />
          <Tab icon={<MonthViewIcon />} iconPosition="start" label="Month View" {...a11yProps(1)} />
          <Tab icon={<GanttViewIcon />} iconPosition="start" label="Gantt view" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div className={scrollStyle}>
      <TabPanel value={value} index={0}>
        <ProjectTimeLineViewTab/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectMonthViewTab/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProjectGanttTab/>
      </TabPanel>
      </div>
    </Box>
  )
}
