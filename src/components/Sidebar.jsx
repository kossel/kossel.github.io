import React from 'react';
import styled, { css } from 'react-emotion';
import { Link, graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';
import uniq from 'lodash/uniq';
import TagBar from './TagBar';

const SidebarWrapper = styled('aside')`
  width: 350px;
  height: 100vh;
  border-right: 1px solid #e2e2e2;
  float: left;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    display: none;
  }
`;

const PostItemsList = styled('div')`
  padding: 32px 16px;
  overflow: auto;
  flex: 1;
`;

const PostItem = styled('div')`
  padding: 8px 16px;
`;

const activeLink = css`
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 1px,
    #1ca086 1px,
    #1ca086 2px,
    rgba(0, 0, 0, 0) 2px
  );
  text-shadow: 0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff,
    0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff,
    -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff;
`;

class Sidebar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.getPostLink = this.getPostLink.bind(this);
  // }

  // getPostLink(node) {
  //   // console.log(this.props.location.state);
  //   // const selectedTag = get(this.props, 'location.state.selectedTag');
  //   // if (selectedTag) {
  //   //   return `/tags/${selectedTag}${node.fields.slug}`;
  //   // }
  //   return node.fields.slug;
  // }

  render() {
    const { selectedTag, posts } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const allPosts = get(data, 'allMarkdownRemark.edges');
          let tags = [];
          allPosts.forEach(edge => {
            if (get(edge, 'node.frontmatter.tags')) {
              tags = tags.concat(edge.node.frontmatter.tags);
            }
          });
          tags = uniq(tags);

          if (!allPosts || !posts) return <div>loading...</div>;
          const tagToFilter =
            selectedTag || get(this.props, 'location.state.selectedTag');
          return (
            <SidebarWrapper>
              <PostItemsList>
                {posts
                  .filter(({ node }) => {
                    const postTags = get(node, 'frontmatter.tags');
                    if (!tagToFilter) {
                      return true;
                    }
                    return postTags.indexOf(tagToFilter) >= 0;
                  })
                  .map(({ node }) => {
                    const title =
                      get(node, 'frontmatter.title') || node.fields.slug;
                    return (
                      <PostItem key={node.fields.slug}>
                        <Link
                          style={{ boxShadow: 'none' }}
                          to={node.fields.slug}
                          activeClassName={activeLink}
                          state={{
                            selectedTag: tagToFilter,
                          }}
                        >
                          {title}
                        </Link>
                      </PostItem>
                    );
                  })}
              </PostItemsList>
              <TagBar allTags={tags} selectedTag={tagToFilter} />
            </SidebarWrapper>
          );
        }}
      />
    );
  }
}

export default Sidebar;
