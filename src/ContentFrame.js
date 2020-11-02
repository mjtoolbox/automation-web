import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Root, Header, Nav, Content, Footer, presets } from 'mui-layout';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';

import NavHeaderEx from './components/NavHeaderEx';
import HeaderEx from './components/HeaderEx';
import FooterEx from './components/FooterEx';
import LeftItem from './components/LeftItems';

import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Log from './Log';

import './styles.css';

function ContentFrame() {
  const [preset, setPreset] = useState('createStandardLayout');
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: false,
  });

  return (
    <MuiThemeProvider theme={createMuiTheme()}>
      <Root
        config={presets[preset]({ headerPosition: 'relative' })}
        style={{ minHeight: '100vh' }}
      >
        <CssBaseline />
        <Header
          renderMenuIcon={(opened) =>
            opened ? <Icon>chevron_left</Icon> : <Icon>menu_rounded</Icon>
          }
        >
          {({ screen, collapsed }) =>
            data.header && <HeaderEx screen={screen} collapsed={collapsed} />
          }
        </Header>
        <Nav
          renderIcon={(collapsed) =>
            collapsed ? <Icon>chevron_right</Icon> : <Icon>chevron_left</Icon>
          }
          header={({ collapsed }) =>
            data.nav && <NavHeaderEx collapsed={collapsed} />
          }
        >
          {/* {data.nav && <NavContentEx parentCallBack={callback} />} */}
          {data.nav && <LeftItem />}
        </Nav>
        <Content>
          {/* {RenderContent(index)} */}
          <div className='mt-3 mb-3 ml-2 mr-2'>
            {/* Nagivation */}
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/oss' component={Dashboard} />
            <Route exact path='/oss/dashboard' component={Dashboard} />
            <Route exact path='/oss/transactions' component={Transactions} />
            <Route exact path='/oss/mongodblog' component={Log} />
          </div>
        </Content>
        <Footer>{data.footer && <FooterEx />}</Footer>
      </Root>
    </MuiThemeProvider>
  );
}

export default ContentFrame;
