// import React from 'react';
// import {
//   Container,
//   Box,
//   Grid,
//   GridItem,
//   Input,
//   Select,
//   InputGroup,
//   InputLeftAddon,
//   Text,
//   Flex,
//   Button,
//   useColorModeValue,
//   ScaleFade,
//   AspectRatio,
// } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import './ProjectsComponent.css';

// const MotionBox = motion(Box);

// const ProjectsComponent = ({
//   searchInput,
//   value,
//   sectionName,
//   handleChange,
//   handleSelectChange,
//   filteredProjects,
//   detailsModalShowHandler,
//   profileData,
// }) => {
//   console.log('Projects.js: profileData', profileData);

//   const bgColor = useColorModeValue('white', 'gray.800');
//   const color = useColorModeValue('gray.800', 'white');

//   return (
//     <Box
//       as="section"
//       pt={{ base: '3rem', md: '5rem' }}
//       pb={{ base: '2rem', md: '3rem' }}
//       bg={bgColor}
//       color={color}
//     >
//       <Container maxW="container.lg">
//         <ScaleFade initialScale={0.9} in={true}>
//           <Text
//             fontSize={{ base: '3xl', md: '4xl' }}
//             fontWeight="bold"
//             textAlign="center"
//             mb="5"
//           >
//             {sectionName}
//           </Text>
//           <InputGroup mb="5">
//             <InputLeftAddon>Filter by:</InputLeftAddon>
//             <Select onChange={handleSelectChange} value={value}>
//               <option value="All">All</option>
//               <option value="name">Name</option>
//               <option value="popularity">Popularity</option>
//               <option value="recent">Recent</option>
//               <option value="size">Size</option>
//             </Select>
//             <Input
//               type="search"
//               onChange={handleChange}
//               placeholder="Search"
//               aria-label="Search"
//               aria-describedby="basic-addon1"
//               value={searchInput}
//             />
//           </InputGroup>
//           <Grid
//             templateColumns={{
//               base: 'repeat(auto-fit, minmax(200px, 1fr))',
//               md: 'repeat(auto-fit, minmax(240px, 1fr))',
//             }}
//             gap={6}
//           >
//             {filteredProjects.length > 0 &&
//               filteredProjects.map((project, index) => (
//                 <GridItem
//                   key={index}
//                   style={{ minHeight: '200px', maxHeight: '400px' }}
//                 >
//                   <MotionBox
//                     bg={bgColor}
//                     boxShadow="lg"
//                     rounded="lg"
//                     overflow="hidden"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <AspectRatio ratio={16 / 9} overflow="hidden">
//                       <iframe
//                         title="project_website"
//                         id="scaled-frame"
//                         src={project.url}
//                         alt="project_website"
//                         allowFullScreen
//                       />
//                     </AspectRatio>
//                     <Box p="6">
//                       <Text fontWeight="bold" fontSize="xl" mb="2">
//                         {project.title}
//                       </Text>
//                       <Text
//                         fontSize="md"
//                         color="gray.500"
//                         mb="4"
//                         style={{
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                           display: '-webkit-box',
//                           WebkitLineClamp: 3,
//                           WebkitBoxOrient: 'vertical',
//                         }}
//                       >
//                         {project.description}
//                       </Text>
//                       <Flex justify="space-between">
//                         <Text fontWeight="bold">{project.startDate}</Text>
//                         <Button
//                           onClick={() => detailsModalShowHandler(project)}
//                           colorScheme="teal"
//                           variant="outline"
//                           _hover={{ bg: 'teal.600', color: 'white' }}
//                         >
//                           Details
//                         </Button>
//                       </Flex>
//                     </Box>
//                   </MotionBox>
//                 </GridItem>
//               ))}
//           </Grid>
//         </ScaleFade>
//       </Container>
//     </Box>
//   );
// };

// export default ProjectsComponent;
