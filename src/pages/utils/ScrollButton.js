import { Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const ScrollButton = ({ to, smooth, duration, children, ...restProps }) => {
  return (
    <ScrollLink to={to} smooth={smooth} duration={duration}>
      <Button {...restProps}>{children}</Button>
    </ScrollLink>
  );
};

export default ScrollButton;
