import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Scrollbars } from 'react-custom-scrollbars';
import 'prismjs/themes/prism-solarizedlight.css';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

const MainContainer = styled('div')`
  flex: 1;
  width: 100%;
  height: 100vh;
`;

const ContentContainer = styled('div')`
  padding:  0 16px;
  margin: 0 auto;
  max-width: 800px;
  position: relative;
`;

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        position: 'relative',
        overflowY: 'hidden',
      }}
      >
        <Sidebar />
        <MainContainer>
          <TopBar />
          <Scrollbars autoHide>
            <ContentContainer>
              {children}
            </ContentContainer>
          </Scrollbars>
        </MainContainer>
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
