import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

const list = [
  {
    index: 0,
    primaryText: 'Home',
    icon: 'dashboard',
    linkUrl: '/oss/dashboard',
  },
  {
    index: 1,
    primaryText: 'Transactions',
    icon: 'account_balance',
    linkUrl: '/oss/transactions',
  },
  {
    index: 2,
    primaryText: 'MongoDB Log',
    icon: 'leaderboard',
    linkUrl: '/oss/mongodblog',
  },
];

const LeftItems = () => {
  return (
    <List>
      {list.map(({ primaryText, icon, linkUrl }, i) => (
        <ListItem key={primaryText} button component={Link} to={linkUrl}>
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      ))}
      <Divider />
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem
        button
        primary='Current month'
        key='tr'
        // selected='true'
        component={Link}
        to='/oss/mongodblog'
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='Current month' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='2020 Year End' />
      </ListItem>
    </List>
  );
};

export default LeftItems;
