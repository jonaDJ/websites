import React from "react";
import { Flex, Box, Divider } from "@chakra-ui/react";
import Card from "./Card";
import linkedin from "../img/linkedin.jpg";
import git from "../img/git.jpg";
import wordpress from "../img/wordpress-589121_640.jpg";
import me from "../img/my_avatar.PNG";

const LandingPage = () => {
  const handleCardClick = (url) => {
    window.location.href = url; // Navigate to the URL
  };
  const cards = [
    {
      id: "01_card",
      name: "Portfolio",
      image: me,
      url: "https://ecom-pteh.onrender.com/",
    },
    {
      id: "02_card",
      name: "Git Repo",
      image: git,
      url: "https://github.com/jonaDJ",
    },
    {
      id: "03_card",
      name: "LinkedIn",
      image: linkedin,
      url: "https://www.linkedin.com/in/jonathd/",
    },
    {
      id: "04_card",
      name: "WordPress",
      image: wordpress,
      url: "https://balancedbiteprep.com/",
    },
  ];

  return (
    <Box maxW="1400px" mx="auto">
      <Flex justify="center" align="center" direction="row" wrap="wrap">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            image={card.image}
            onClick={() => handleCardClick(card.url)}
          />
        ))}
      </Flex>
      <Divider padding="1" />
    </Box>
  );
};

export default LandingPage;
