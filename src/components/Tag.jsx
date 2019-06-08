import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';

const TagItem = styled('div')(({ selected }) => ({
  padding: 16,
  border: '1px solid lightgray',
  background: selected ? 'lightgray' : null,
  display: 'inline-block',
}));

const removeLinkStyle = css({
  textDecoration: 'none',
  '&:hover, active': {
    backgroundImage: 'none',
    textShadow: 'none',
  },
});

const Tag = ({ children, url, selected }) => (
  <Link to={url} className={removeLinkStyle}>
    <TagItem selected={selected}>
      {children}
    </TagItem>
  </Link>
);


export default Tag;
