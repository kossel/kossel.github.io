import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';

const wrapper = css`
  width: calc(100vw - 350px - 32px);
  position: fixed;
  background-color: #fff;
  opacity: 0.9;
  z-index: 1;
`;

const NavItems = styled('div')`
  margin-left: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e2e2e2;
`;

class TopBar extends React.Component {
  render() {
    return (
      <div className={wrapper}>
        <NavItems>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to="/"
          >
            Growing with the web
          </Link>
        </NavItems>
      </div>
    );
  }
}

export default TopBar;
