import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const RightArrowIcon = () => {
  return (
    <Svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="25" cy="25" r="25" fill="#EDEDED" />
      <Path
        d="M16.5 24.5C15.9477 24.5 15.5 24.9477 15.5 25.5C15.5 26.0523 15.9477 26.5 16.5 26.5V24.5ZM34.2071 26.2071C34.5976 25.8166 34.5976 25.1834 34.2071 24.7929L27.8431 18.4289C27.4526 18.0384 26.8195 18.0384 26.4289 18.4289C26.0384 18.8195 26.0384 19.4526 26.4289 19.8431L32.0858 25.5L26.4289 31.1569C26.0384 31.5474 26.0384 32.1805 26.4289 32.5711C26.8195 32.9616 27.4526 32.9616 27.8431 32.5711L34.2071 26.2071ZM16.5 26.5H33.5V24.5H16.5V26.5Z"
        fill="#393C41"
      />
    </Svg>
  );
};

export default RightArrowIcon;
