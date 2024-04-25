import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ name, image, onClick }) => {
  return (
    <Box
      w={{
        base: "calc(43% - 8px)",
        md: "calc(40% - 8px)",
        lg: "calc(22% - 8px)",
      }}
      h={{
        base: "calc(25% - 8px)",
        md: "calc(50% - 8px)",
        lg: "calc(25% - 8px)",
      }}
      borderWidth="1px"
      borderRadius="lg"
      onClick={onClick}
      cursor="pointer"
      m={{ base: 1, md: 2, lg: 2 }}
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
    >
      <Image
        src={image}
        borderRadius="0.5rem 0.5rem 0 0"
        alt={name}
        title={name}
        overflow="hidden"
        objectFit="cover"
        w={{
          base: "25rem",
          md: "25rem",
          lg: "20rem",
        }}
        h={{
          base: "14rem",
          md: "18rem",
          lg: "18rem",
        }}
        align="center"
      />

      <Box p="6">
        <Text
          fontWeight="bold"
          fontSize={{
            base: "sm",
            md: "lg",
            lg: "xl",
          }}
          align="center"
          color="white"
        >
          {name}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
