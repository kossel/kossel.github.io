import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';
import { rhythm } from '../utils/typography';

const TagItem = styled('div')(({ selected }) => ({
  padding: '0px 12px',
  margin: '2px 2px',
  border: '1px solid #1ca086',
  borderRadius: '4px',
  background: selected ? '#1ca086' : null,
  color: selected ? '#fff' : 'inherit',
  display: 'inline-block',
}));

const removeLinkStyle = css({
  textDecoration: 'none',
  fontSize: rhythm(0.5),
  '&:hover, active': {
    backgroundImage: 'none',
    textShadow: 'none',
  },
});

const Tag = ({ children, url, selected, tag }) => (
  <Link to={url} className={removeLinkStyle} state={{ selectedTag: tag }}>
    <TagItem selected={selected}>{children}</TagItem>
  </Link>
);

export default Tag;
