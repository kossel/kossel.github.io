import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link, graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';
import Bio from './Bio';

const wrapper = css`
  width: 350px;
  height: 100vh;
  border-right: 1px solid #e2e2e2;
  top: 0;
  left: 0;
  bottom: 0;
`;

const PostItemsList = styled('div')`
  padding: 0 16px;
`;

const PostItem = styled('div')`
  padding: 8px 16px;
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.postListRef = null;
    this.state = {
      bioPin: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const rect = this.postListRef.getBoundingClientRect();
    console.log(rect.y);
    if (rect.y >= 120 && this.state.bioPin) {
      this.setState({
        bioPin: false,
      });
    } else if (rect.y <= 160 && !this.state.bioPin) {
      this.setState({
        bioPin: true,
      });
    }
  }

  render() {
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
            <aside className={wrapper}>
              <Scrollbars autoHide onScroll={this.handleScroll}>
                <Bio
                  shouldPin={this.state.bioPin}
                />
                <PostItemsList innerRef={(postListRef) => { this.postListRef = postListRef; }}>
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
            </aside>
          );
        }}
      />
    );
  }
}

export default Sidebar;
