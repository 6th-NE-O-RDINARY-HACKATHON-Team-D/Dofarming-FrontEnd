import {TouchableOpacity, Image} from 'react-native';

import LeftArrowIcon from '../../assets/vectors/LeftArrowIcon';
import RightArrowIcon from '../../assets/vectors/RightArrowIcon';
const Button = ({direction}: {direction: string}) => {
  return (
    <TouchableOpacity>
      {direction === 'left' ? <LeftArrowIcon /> : <RightArrowIcon />}
    </TouchableOpacity>
  );
};

export default Button;
