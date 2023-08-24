import React from 'react';
import { Flex, useMediaQuery, useTheme } from '@chakra-ui/react';

const SectionContainer = ({ children, id }) => {
  // Accessing the theme's breakpoints
  const theme = useTheme();
  const breakpointMd = theme.breakpoints.md;

  // Using the theme's breakpoint for medium devices
  const [isLargerThanMd] = useMediaQuery(`(min-width: ${breakpointMd})`);

  const primaryBg = theme.colors.customColors.translucentQuaternary50;
  const secondaryBg = isLargerThanMd
    ? theme.colors.customColors.translucentQuaternary901
    : 'base';
  const color = isLargerThanMd ? 'white' : 'black';

  return (
    <Flex
      id={`section-container-${id}`}
      alignItems="center"
      justifyContent="center"
      minHeight="85vh"
      width="100%"
      p={4}
      flexDirection="column"
      background={primaryBg}
      color={color}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        minHeight="85vh"
        width="100%"
        p={4}
        flexDirection="column"
        background={secondaryBg}
        borderRadius="lg"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default SectionContainer;
// import React from 'react';
// import { Flex, useMediaQuery, useTheme } from '@chakra-ui/react';

// const SectionContainer = ({ children, id }) => {
//   // Accessing the theme's breakpoints
//   const theme = useTheme();
//   const breakpointMd = theme.breakpoints.md;
//   const breakpointSm = theme.breakpoints.sm;
//   const breakpointLg = theme.breakpoints.lg;
//   const breakpointXl = theme.breakpoints.xl;

//   // Using the theme's breakpoints
//   const [isLargerThanMd] = useMediaQuery(`(min-width: ${breakpointMd})`);
//   const [isLargerThanSm] = useMediaQuery(`(min-width: ${breakpointSm})`);
//   const [isLargerThanLg] = useMediaQuery(`(min-width: ${breakpointLg})`);
//   const [isLargerThanXl] = useMediaQuery(`(min-width: ${breakpointXl})`);

//   let minHeight = '60vh';
//   if (isLargerThanSm) minHeight = '65vh';
//   if (isLargerThanMd) minHeight = '70vh';
//   if (isLargerThanLg) minHeight = '75vh';
//   if (isLargerThanXl) minHeight = '80vh';

//   const primaryBg = theme.colors.customColors.translucentQuaternary50;
//   const secondaryBg = isLargerThanMd
//     ? theme.colors.customColors.translucentQuaternary901
//     : 'base';
//   const color = isLargerThanMd ? 'white' : 'black';

//   return (
//     <Flex
//       id={`section-container-${id}`}
//       alignItems="center"
//       justifyContent="center"
//       minHeight={minHeight}
//       width="100%"
//       p={4}
//       flexDirection="column"
//       background={primaryBg}
//       color={color}
//     >
//       <Flex
//         alignItems="center"
//         justifyContent="center"
//         width="100%"
//         p={4}
//         flexDirection="column"
//         background={secondaryBg}
//         borderRadius="lg"
//       >
//         {children}
//       </Flex>
//     </Flex>
//   );
// };

// export default SectionContainer;
