import React from 'react';
import { css } from 'react-emotion';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link, graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';

const sidebarWrapper = css`
  width: 350px;
  height: 100vh;
  border-right: 1px solid #e2e2e2;
  float: left;
  @media (max-width: 991px) {
    display: none;
  }
`;

const postItemsList = css`
  padding: 32px 16px;
`;

const postItem = css`
  padding: 8px 16px;
`;

class Sidebar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.scrollbar = null;
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleScroll() {
  //   const distanceToTop = this.scrollbar.getValues().scrollTop;
  //   if (distanceToTop === 0 && this.state.bioPin) {
  //     this.setState({
  //       bioPin: false,
  //     });
  //   } else if (distanceToTop > 0 && !this.state.bioPin) {
  //     this.setState({
  //       bioPin: true,
  //     });
  //   }
  // }

  // handleClick() {
  //   this.setState(state => ({
  //     bioPin: !state.bioPin,
  //   }));
  // }

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
            <aside className={sidebarWrapper}>
              <Scrollbars
                autoHide
                // ref={(el) => {
                //   this.scrollbar = el;
                // }}
              >
                <div className={postItemsList}>
                  {
                    posts.map(({ node }) => {
                      const title = get(node, 'frontmatter.title') || node.fields.slug;
                      return (
                        <div className={postItem} key={node.fields.slug}>
                          <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                            {
                              title
                            }
                          </Link>
                        </div>
                      );
                    })
                  }
                </div>
              </Scrollbars>
            </aside>
          );
        }}
      />
    );
  }
}

export default Sidebar;
