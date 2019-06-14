import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import 'prismjs/themes/prism-solarizedlight.css';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

const MainContainer = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled('div')`
  padding: 0 16px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  flex: 1;
`;

const ScrollArea = styled('div')`
  overflow: auto;
`;

class Template extends React.Component {
  componentDidMount() {
    import '../utils/usesvg';
  }

  render() {
    const { children, location, posts, selectedTag } = this.props;
    return (
      <div>
        <Sidebar location={location} posts={posts} selectedTag={selectedTag} />
        <MainContainer>
          <TopBar />
          <ScrollArea>
            <ContentContainer>{children}</ContentContainer>
          </ScrollArea>
        </MainContainer>
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
