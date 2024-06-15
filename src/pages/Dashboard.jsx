import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Dashboard = () => {
  return (
    <Container centerContent maxW="container.lg" py={8}>
      <Navigation />
      <VStack spacing={8} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Dashboard
        </Text>
        <Text fontSize="xl">Welcome to the Dashboard!</Text>
      </VStack>
    </Container>
  );
};

export default Dashboard;
