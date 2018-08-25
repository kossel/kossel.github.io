import React from 'react';
import styled from 'react-emotion';

const FooterWrap = styled('div')`
  width: 100%;
  text-align: center;
  padding: 16px 0;
`;

class TopBar extends React.Component {
  render() {
    return (
      <FooterWrap>
        <small>&copy;Yichao 2018.</small>
      </FooterWrap>
    );
  }
}

export default TopBar;
