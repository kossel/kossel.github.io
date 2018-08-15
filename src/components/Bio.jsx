import React from 'react';
import styled, { css } from 'react-emotion';
import { Spring, interpolate, animated } from 'react-spring';
import 'typeface-montserrat/index.css';
import 'typeface-merriweather/index.css';
import profilePic from '../assets/avatar2.jpg';

const BioContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-right: 1px solid #e2e2e2;
`;

const avatarStyle = css`
  margin-bottom: 0;
  border-radius: 100%;
  width: 80%;
  height: 80%;
  z-index: 1;
`;

const AvatarCircle = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 100%;
  background: rgb(255,255,255); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`;

const ProfilePicture = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const ProfileName = styled('div')`
  padding: 8px 0;
`;

class Bio extends React.PureComponent {
  render() {
    const { shouldPin } = this.props;
    return (
      <div className={css`width: inherit; position: relative;`}>
        <BioContainer>
          <Spring
            to={{
              width: shouldPin ? '64px' : '100px',
              height: shouldPin ? '64px' : '100px',
            }}
          >
            {
              styles => (
                <ProfilePicture style={styles}>
                  <img
                    className={avatarStyle}
                    src={profilePic}
                    alt="Yichao"
                  />
                  <AvatarCircle />
                </ProfilePicture>
              )
            }
          </Spring>
          <ProfileName>
            <strong>Yichao</strong>
          </ProfileName>
        </BioContainer>
      </div>
    );
  }
}

export default Bio;
