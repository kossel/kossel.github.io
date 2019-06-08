import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';

const wrapper = css`
  width: 100%;
  background-color: #fff;
  opacity: 0.9;
  z-index: 1;
`;

const NavItems = styled('div')`
  margin: 0 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 991px) {
    padding: 8px;
  }
`;

const SocialItem = styled('a')`
  width: 24px;
  height: 24px;
  color: black;
  display: inline-block;
  opacity: 0.6;
  &:hover, active {
    background-image: none;
    text-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  width: 24px;
  height: 24px;
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  &:hover, active {
    background-image: none;
    text-shadow: none;
  }
`;

const SocialIcon = styled('svg')`
  margin-bottom: 0;
`;

const SocialMedias = styled('div')`
  position: relative;
  display: flex;
  width: 120px;
  justify-content: space-between;
`;

const HomeIcon = styled('svg')`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  
`;

const MenuItem = styled(Link)({
  boxShadow: 'none',
  textDecoration: 'none',
  color: 'inherit',
  margin: '0 8px',
});

class TopBar extends React.Component {
  render() {
    return (
      <div className={wrapper}>
        <NavItems>
          <MenuItem
            to="/"
          >
            <HomeIcon className="icon" aria-hidden="true">
              <use xlinkHref="#icon-home" />
            </HomeIcon>
            <span style={{ verticalAlign: 'top' }}>Home</span>
          </MenuItem>
          <SocialMedias>
            <StyledLink to="/me">
              <SocialIcon className="icon" aria-hidden="true">
                <use xlinkHref="#icon-me" />
              </SocialIcon>
            </StyledLink>
            <SocialItem href="https://stackoverflow.com/users/247869/yichaoz" target="_BLANK">
              <SocialIcon className="icon" aria-hidden="true">
                <use xlinkHref="#icon-github" />
              </SocialIcon>
            </SocialItem>
            <SocialItem href="https://github.com/kossel" target="_BLANK">
              <SocialIcon className="icon" aria-hidden="true">
                <use xlinkHref="#icon-stack-overflow" />
              </SocialIcon>
            </SocialItem>
          </SocialMedias>
        </NavItems>
      </div>
    );
  }
}

export default TopBar;
