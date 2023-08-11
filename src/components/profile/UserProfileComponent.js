// import React from 'react';
// import {
//   Box,
//   Grid,
//   GridItem,
//   Heading,
//   Text,
//   VStack,
//   UnorderedList,
//   ListItem,
//   Avatar,
//   HStack,
//   Button,
//   // Circle,
// } from '@chakra-ui/react';
// import BasicInfoForm from './BasicInfoForm';
// import SocialForm from './SocialForm';
// import AddProjectForm from './AddProjectForm';
// import ExperienceForm from './ExperienceForm';
// import ProfilePhotoForm from './ProfilePhotoForm';

// const UserProfileComponent = ({
//   dataToDisplay,
//   editMode,
//   setEditMode,
//   onSubmit,
//   handleEditChange,
// }) => {
//   return (
//     <Box
//       h="100vh"
//       w="100vw"
//       p={6}
//       display="flex"
//       flexDirection="      column"
//       overflow="scroll"
//       justifyContent="center"
//       alignItems="center"
//       bg="whiteAlpha.200"
//     >
//       <Grid
//         templateRows="repeat(2, 1fr)"
//         templateColumns="repeat(6, 1fr)"
//         gap={4}
//         h="100%"
//         w="100%"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <GridItem rowSpan={2} colSpan={2}>
//           <VStack spacing={4}>
//             <Avatar size="2xl" src={dataToDisplay.profilePhotoUrl} />
//             <HStack spacing={4}>
//               <Button onClick={() => setEditMode(!editMode)}>
//                 {editMode ? 'Cancel' : 'Edit Profile'}
//               </Button>
//               {editMode && (
//                 <Button onClick={onSubmit} colorScheme="teal">
//                   Save
//                 </Button>
//               )}
//             </HStack>
//           </VStack>
//         </GridItem>
//         <GridItem colSpan={4}>
//           <Box p={4}>
//             <Heading mb={4}>{dataToDisplay.name}</Heading>
//             <Text mb={4}>{dataToDisplay.bio}</Text>
//             <UnorderedList mb={4}>
//               {dataToDisplay.socialLinks &&
//                 dataToDisplay.socialLinks.map((link, idx) => (
//                   <ListItem key={idx}>{link}</ListItem>
//                 ))}
//             </UnorderedList>
//             {editMode && (
//               <VStack spacing={4}>
//                 <ProfilePhotoForm handleEditChange={handleEditChange} />
//                 <BasicInfoForm handleEditChange={handleEditChange} />
//                 <SocialForm handleEditChange={handleEditChange} />
//                 <ExperienceForm handleEditChange={handleEditChange} />
//                 <AddProjectForm handleEditChange={handleEditChange} />
//               </VStack>
//             )}
//           </Box>
//         </GridItem>
//       </Grid>
//     </Box>
//   );
// };

// export default UserProfileComponent;
