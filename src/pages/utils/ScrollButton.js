import { Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const ScrollButton = (props) => {
  return (
    <ScrollLink to={props.to} smooth={props.smooth} duration={props.duration}>
      <Button {...props}>{props.children}</Button>
    </ScrollLink>
  );
};

export default ScrollButton;
