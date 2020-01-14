import React from 'react';
import kebabCase from 'lodash/kebabCase';
import styled from 'react-emotion';
import Tag from './Tag';

const Contaienr = styled('div')({
  padding: '16px 8px',
});

const TagBar = ({ allTags = [], selectedTag }) => {
  const allTag = (
    <Tag key="all-tags" url="/" selected={!selectedTag}>
      All
    </Tag>
  );
  const allTagsItems = allTags.map(tag => (
    <Tag
      key={kebabCase(tag)}
      url={`/tags/${kebabCase(tag)}`}
      selected={selectedTag && selectedTag.indexOf(tag) >= 0}
      tag={tag}
    >
      {tag}
    </Tag>
  ));

  return <Contaienr>{[allTag, ...allTagsItems]}</Contaienr>;
};

export default TagBar;
