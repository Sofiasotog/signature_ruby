import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/styles';

import {AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core/'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4, bgcolor:"#FDFFF7" }}>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function App_bar({Front,window1, window4}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '#FDFFF7', width: '100%' }}>
      <AppBar position="static" style={{backgroundColor:"#348AA7"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label='Principal' {...a11yProps(0)}/>
          <Tab label="Crear Orden" {...a11yProps(1)}/>
          <Tab label="Coleccion Ordenes" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={'x-reverse'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        <TabPanel value={value} index={0} dir={'ltr'}>
          {Front}
        </TabPanel>
        <TabPanel value={value} index={1} dir={'ltr'}>
          {window1}
        </TabPanel>
        <TabPanel value={value} index={2} dir={'rtl'}>
        {window4}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}