import { Box, Flex, Text, VStack, Link, Image, Button, useColorModeValue, IconButton, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <VStack p={5}>
      <Flex w="full" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl" letterSpacing={"tighter"}>
          John Doe
        </Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
      </Flex>
      <Box bg={bgColor} color={color} p={5} rounded="md" shadow="md">
        <VStack spacing={4} align="stretch">
          <Box>
            <Heading as="h2" size="lg">
              About Me
            </Heading>
            <Text mt={2}>I'm a passionate software developer with a love for building scalable web applications and working with cutting-edge technologies.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Portfolio
            </Heading>
            <Text mt={2}>
              Check out my latest projects on{" "}
              <Link href="https://github.com" isExternal>
                <FaGithub /> GitHub
              </Link>
              .
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Blog
            </Heading>
            <Text mt={2}>Visit my blog to read about my coding adventures and tutorials.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Contact
            </Heading>
            <Flex mt={2} alignItems="center">
              <Link href="https://linkedin.com" isExternal mr={4}>
                <FaLinkedin />
              </Link>
              <Link href="https://twitter.com" isExternal mr={4}>
                <FaTwitter />
              </Link>
              <Link href="mailto:john.doe@example.com">
                <FaEnvelope />
              </Link>
            </Flex>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
