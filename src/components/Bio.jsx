import React from 'react';
import styled, { css } from 'react-emotion';
import { Spring, Trail, animated } from 'react-spring';
import 'typeface-montserrat/index.css';
import 'typeface-merriweather/index.css';
import profilePic from '../assets/avatar2.jpg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import soIcon from '../assets/icons/stackoverflow.svg';

const BioContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-bottom: 1px solid #e2e2e2;
  margin: 0 24px 16px 24px;
  position: relative;
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
  background: -moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
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

const SocialMedias = styled('div')`
  position: relative;
  width: 100px;
`;

const SocialItem = styled('img')`
  margin: 0;
`;

class Bio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.items = [
      {
        key: 'github',
        icon: githubIcon,
        url: 'https://github.com/kossel',
      },
      {
        key: 'so',
        icon: soIcon,
        url: 'https://stackoverflow.com/users/247869/yichaoz',
      },
      {
        key: 'linkedin',
        icon: linkedinIcon,
        url: 'https://www.linkedin.com/in/yichao-z-94214230/',
      },
    ];
  }


  render() {
    const { shouldPin } = this.props;
    return (
      <BioContainer>
        <Spring
          to={{
            width: shouldPin ? '64px' : '100px',
            height: shouldPin ? '64px' : '100px',
            transform: shouldPin ? 'translate(-120px, 24px)' : 'translate(0px, 0px)',
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
        <Spring
          to={{
            fontSize: shouldPin ? '18px' : '16px',
            transform: shouldPin ? 'translateY(-48px)' : 'translateY(0px)',
          }}
        >
          {
            styles => (
              <ProfileName style={styles}>
                <strong>Yichaoz</strong>
              </ProfileName>
            )
          }
        </Spring>
        <SocialMedias>
          <Trail
            native
            to={{
              y: shouldPin ? -48 : -24,
              opacity: shouldPin ? 1 : 0,
            }}
            keys={this.items.map(i => i.key)}
          >
            {
              this.items.map((item, i) => ({ y, opacity }) => (
                <animated.span
                  style={{
                    opacity,
                    position: 'absolute',
                    transform: y.interpolate(val => `translateY(${val}px)`),
                    left: `${i * 32}px`,
                  }}
                >
                  <SocialItem src={item.icon} width="24" height="24" alt={item.key} />
                </animated.span>
              ))
            }
          </Trail>
        </SocialMedias>
      </BioContainer>
    );
  }
}

export default Bio;
