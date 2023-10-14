import { Card, HStack, Text, VStack, Wrap } from "@chakra-ui/react";
import CustomIconButton from "./customIconButton";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai/index.js";
import { Entry } from "~/data/entries";
import FormatDate from "~/utils/formatDate";
import { DarkPinkFlex } from "./basicContainers";
import TagBadge from "./tagBadge";
import { radius } from "~/styles/customTheme";

type EntryCardProps = {
  entry: Entry; // Using the 'Entry' type you defined
};

export function EntryCard({ entry }: EntryCardProps) {
  return (
    <Card w="380px" rounded="lg" color="gray.100">
      <DarkPinkFlex
        w="100%"
        h="100%"
        p={3}
        justify="space-between"
        align="flex-start"
        direction="column"
        rounded="lg"
      >
        <VStack w="100%">
          <VStack w="100%" align="flex-start" spacing={0}>
            <HStack w="100%" justify="space-between">
              <Text color="gray.300">{FormatDate(entry.id)}</Text>
              <HStack>
                <CustomIconButton
                  aria-label="Edit entry"
                  icon={<AiOutlineEdit />}
                  h="30px"
                  w="30px"
                  size="23px"
                  //   onClick={() => handleEdit(entry.id)}
                />
                <CustomIconButton
                  aria-label="Delete entry"
                  icon={<AiOutlineDelete />}
                  h="30px"
                  w="30px"
                  size="23px"
                  //   onClick={() => handleDelete(entry.id)}
                />
              </HStack>
            </HStack>
            <Text color="teal.200" fontSize="lg" fontWeight="bold">
              {entry.title}
            </Text>
          </VStack>
          <VStack w="100%" spacing={4}>
            <Text noOfLines={2} lineHeight="1.3rem">
              {entry.entry}
            </Text>
            <Wrap justify="flex-start" w="100%">
              {entry.tags &&
                entry.tags.length > 0 &&
                entry.tags.map((tag) => (
                  <TagBadge
                    key={tag}
                    fontSize="sm"
                    lineHeight="1.4rem"
                    rounded={radius}
                  >
                    {tag}
                  </TagBadge>
                ))}
            </Wrap>
          </VStack>
        </VStack>
      </DarkPinkFlex>
    </Card>
  );
}
