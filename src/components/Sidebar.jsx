import React from 'react';
import styled, { css } from 'react-emotion';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link, graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';
import Bio from './Bio';

const SidebarWrapper = styled('aside')`
  width: 350px;
  height: 100vh;
  border-right: 1px solid #e2e2e2;
  top: 0;
  left: 0;
  bottom: 0;
  @media (max-width: 991px) {
    display: none;
  }
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
    this.state = {
      bioPin: false,
    };
    this.scrollbar = null;

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleScroll() {
    const distanceToTop = this.scrollbar.getValues().scrollTop;
    if (distanceToTop === 0 && this.state.bioPin) {
      this.setState({
        bioPin: false,
      });
    } else if (distanceToTop > 0 && !this.state.bioPin) {
      this.setState({
        bioPin: true,
      });
    }
  }

  handleClick() {
    this.setState(state => ({
      bioPin: !state.bioPin,
    }));
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
            <SidebarWrapper>
              <Bio
                shouldPin={this.state.bioPin}
              />
              <Scrollbars
                autoHide
                onScroll={this.handleScroll}
                ref={(el) => {
                  this.scrollbar = el;
                }}
              >
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
            </SidebarWrapper>
          );
        }}
      />
    );
  }
}

export default Sidebar;
