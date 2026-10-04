import PropType from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useSpring, animated } from '@react-spring/web';
import 'typeface-montserrat/index.css';
import 'typeface-merriweather/index.css';
import profilePic from '../../content/assets/avatar.jpg';

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
  background: rgb(255, 255, 255); /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(229, 229, 229, 1) 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(229, 229, 229, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(229, 229, 229, 1) 100%
  );
`;

const ProfilePicture = styled(animated.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const ProfileName = styled(animated.div)`
  padding: 8px 0;
`;

function Bio({ shouldPin }) {
  const pictureStyle = useSpring({
    width: shouldPin ? '64px' : '100px',
    height: shouldPin ? '64px' : '100px',
    transform: shouldPin ? 'translate(-120px, 24px)' : 'translate(0px, 0px)',
  });
  const nameStyle = useSpring({
    fontSize: shouldPin ? '16px' : '24px',
    transform: shouldPin ? 'translate(-36px, -36px)' : 'translate(0px, 0px)',
  });
  const subtitleStyle = useSpring({
    y: shouldPin ? 20 : 64,
    opacity: shouldPin ? 1 : 0,
  });

  return (
    <BioContainer>
      <ProfilePicture style={pictureStyle}>
        <img className={avatarStyle} src={profilePic} alt="Yichao" />
        <AvatarCircle />
      </ProfilePicture>
      <ProfileName style={nameStyle}>
        <strong>Yichaoz</strong>
      </ProfileName>
      <animated.span
        style={{
          opacity: subtitleStyle.opacity,
          position: 'absolute',
          transform: subtitleStyle.y.to(val => `translateY(${val}px)`),
        }}
      >
        <small>Software Engineer</small>
      </animated.span>
    </BioContainer>
  );
}

Bio.defaultProps = {
  shouldPin: false,
};

Bio.propTypes = {
  shouldPin: PropType.bool,
};

export default Bio;
