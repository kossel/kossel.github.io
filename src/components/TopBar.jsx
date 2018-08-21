import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import soIcon from '../assets/icons/stackoverflow.svg';

const wrapper = css`
  width: 100%;
  position: relative;
  background-color: #fff;
  opacity: 0.9;
  z-index: 1;
`;

const NavItems = styled('div')`
  margin: 0 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
`;

const SocialItem = styled('a')`
  margin: 0px 12px;
  width: 24px;
  height: 24px;
  display: inline-block;
  opacity: 0.6;
  &:hover, active {
    background-image: none;
    text-shadow: none;
  }
`;

const SocialIcon = styled('img')`
  margin-bottom: 0;
`;

const SocialMedias = styled('div')`
  position: relative;
  display: inline-block;
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
          <SocialMedias>
            <SocialItem href="https://www.linkedin.com/in/yichao-z-94214230/" target="_BLANK">
              <SocialIcon src={linkedinIcon} />
            </SocialItem>
            <SocialItem href="https://stackoverflow.com/users/247869/yichaoz" target="_BLANK">
              <SocialIcon src={soIcon} />
            </SocialItem>
            <SocialItem href="https://github.com/kossel" target="_BLANK">
              <SocialIcon src={githubIcon} fill="#e2e2e2" />
            </SocialItem>
          </SocialMedias>
        </NavItems>
      </div>
    );
  }
}

export default TopBar;
