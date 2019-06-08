import React from 'react';
import kebabCase from 'lodash/kebabCase';
import Tag from './Tag';

const TagBar = ({ allTags, selectedTag }) => {
  const allTag = (
    <Tag
      key="all-tags"
      url="/"
      selected={!selectedTag}
    >
      All
    </Tag>
  );
  const allTagsItems = allTags.map(tag => (
    <Tag
      key={kebabCase(tag)}
      url={`/tags/${kebabCase(tag)}`}
      selected={selectedTag && selectedTag.indexOf(tag) >= 0}
    >
      {tag}
    </Tag>
  ));

  return [allTag, ...allTagsItems];
};

export default TagBar;
