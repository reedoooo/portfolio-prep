{
  /* Additional skills for the skills for the potential resume/skills/profile section */
}

{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={BiLogoPostgresql} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={SiExpress} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={BiLogoVuejs} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={SiJest} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={SiSocketdotio} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={RiGatsbyLine} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={SiMysql} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={BsFiletypeSass} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={BsFillBootstrapFill} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={DiJqueryLogo} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={TbBrandThreejs} boxSize={8} />
            </Flex>
          </GridItem> */
}
{
  /* <GridItem as={AspectRatio} ratio={1} className="tech-icons">
            <Flex justifyContent="center" alignItems="center">
              <Icon as={SiChakraui} boxSize={8} />
            </Flex>
          </GridItem> */
}

import { Grid, GridItem } from '@chakra-ui/react';
import AboutMe from './AboutMe';
import TechSkills from './TechSkills';

function Techstack() {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={4}
      className="techstack-grid"
    >
      <AboutMe />
      <TechSkills />
      <GridItem></GridItem>
    </Grid>
  );
}

export default Techstack;
