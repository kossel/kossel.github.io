import React from 'react';
import styled from 'react-emotion';
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

class Sidebar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // const uri = props.location.pathname;
  //   // const matched = uri.match(/(?<=tags\/).*/g);
  //   // this.state = {
  //   //   currentTag: matched ? matched[0] : matched,
  //   // };
  // }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  frontmatter {
                    tags
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          const postsTags = get(data, 'allMarkdownRemark.edges');
          let tags = [];
          postsTags.forEach((edge) => {
            if (get(edge, 'node.frontmatter.tags')) {
              tags = tags.concat(edge.node.frontmatter.tags);
            }
          });
          tags = uniq(tags);

          const { posts } = this.props;
          if (!posts || !postsTags) return <div>loading...</div>;
          return (
            <SidebarWrapper>
              <PostItemsList>
                {
                  posts.map(({ node }) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug;
                    return (
                      <PostItem key={node.fields.slug}>
                        <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                          {
                            title
                          }
                        </Link>
                      </PostItem>
                    );
                  })
                }
              </PostItemsList>
              <TagBar allTags={tags} />
            </SidebarWrapper>
          );
        }}
      />
    );
  }
}

export default Sidebar;
