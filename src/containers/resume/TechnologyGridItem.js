import { useContext } from 'react';
import { AspectRatio, Flex, GridItem, Icon, Tooltip } from '@chakra-ui/react';
import { ProfileContext } from '../../context/ProfileContext';
import { useResumeContext } from '../../context/ResumeContext';

const TechnologyGridItem = ({ technology }) => {
  const { allIcons } = useResumeContext();
  const { technologyMappingData } = useContext(ProfileContext);

  const [newTechnologyMappingData] = technologyMappingData;
  const techData = newTechnologyMappingData[technology];

  if (techData) {
    return (
      <Tooltip label={technology.description} placement="top" hasArrow>
        <GridItem as={AspectRatio} ratio={1} className="tech-icons2">
          <Flex justifyContent="center" alignItems="center">
            <Icon
              as={allIcons[techData.icon]}
              boxSize={12}
              color="black"
              aria-label={technology}
            />
          </Flex>
        </GridItem>
      </Tooltip>
    );
  } else {
    return null;
  }
};

export default TechnologyGridItem;
