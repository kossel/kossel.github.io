import React from 'react';
import styled, { css, cx } from 'react-emotion';
import 'typeface-montserrat/index.css';
import 'typeface-merriweather/index.css';
import profilePic from '../assets/avatar2.jpg';

const BioContainer = styled('div')`
  display: flex;
  height: 120px;
  margin-top: 24px;
  margin-bottom: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  transition: all 0.3s;
  background-color: white;
`;

const avatarStyle = css`
  margin-bottom: 0;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  z-index: 1;
  position: absolute;
`;

const avatarWrapperStyle = css`
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 100%;
  background: rgb(255,255,255); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`;


const placeholderStyle = css`
  padding-top: 24px;
  height: 120px;
  width: inherit;
`;

class Bio extends React.PureComponent {
  render() {
    const { shouldPin } = this.props;
    return (
      <div className={css`width: inherit; position: relative;`}>
        <BioContainer
          className={cx({
            // [shouldPinContainer]: shouldPin,
          })}
        >
          <img
            className={avatarStyle}
            src={profilePic}
            alt="Yichao"
          />
          <div className={avatarWrapperStyle} />
          <p>
            <strong>Yichao</strong>
          </p>
        </BioContainer>
        {
          shouldPin && <div className={placeholderStyle} />
        }
      </div>
    );
  }
}

export default Bio;
