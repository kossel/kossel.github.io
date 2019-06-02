import React from 'react';
import styled from 'react-emotion';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link, graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';

const SidebarWrapper = styled('aside')`
  width: 350px;
  height: 100vh;
  border-right: 1px solid #e2e2e2;
  float: left;
  @media (max-width: 991px) {
    display: none;
  }
`;

const PostItemsList = styled('div')`
  padding: 32px 16px;
`;

const PostItem = styled('div')`
  padding: 8px 16px;
`;

class Sidebar extends React.Component {  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "DD MMMM, YYYY")
                    title
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          const posts = get(data, 'allMarkdownRemark.edges');
          if (!posts) return <div>loading...</div>;
          return (
            <SidebarWrapper>
              <Scrollbars
                autoHide
              >
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
              </Scrollbars>
            </SidebarWrapper>
          );
        }}
      />
    );
  }
}

export default Sidebar;
