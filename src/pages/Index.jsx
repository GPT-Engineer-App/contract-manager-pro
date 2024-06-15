import React from "react";
import { Container, VStack, Text, Button, HStack, Box, Input, FormControl, FormLabel, Select, IconButton, useToast } from "@chakra-ui/react";
import { FaFileAlt, FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleCreateDocument = () => {
    toast({
      title: "Document created.",
      description: "Your document has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleCreateOrder = () => {
    toast({
      title: "Order created.",
      description: "Your order has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleCreatePayment = () => {
    toast({
      title: "Payment recorded.",
      description: "Your payment has been recorded successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.lg" py={8}>
      <VStack spacing={8} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Contract Management System
        </Text>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Document Management
          </Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleCreateDocument}>
              Create Document
            </Button>
            <Button leftIcon={<FaEdit />} colorScheme="blue">
              Edit Document
            </Button>
            <Button leftIcon={<FaTrash />} colorScheme="red">
              Delete Document
            </Button>
          </HStack>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Order Management
          </Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleCreateOrder}>
              Create Order
            </Button>
            <Button leftIcon={<FaEdit />} colorScheme="blue">
              Edit Order
            </Button>
            <Button leftIcon={<FaTrash />} colorScheme="red">
              Delete Order
            </Button>
          </HStack>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Payment Management
          </Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleCreatePayment}>
              Record Payment
            </Button>
            <Button leftIcon={<FaEdit />} colorScheme="blue">
              Edit Payment
            </Button>
            <Button leftIcon={<FaTrash />} colorScheme="red">
              Delete Payment
            </Button>
          </HStack>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            File Management
          </Text>
          <FormControl>
            <FormLabel>Upload File</FormLabel>
            <Input type="file" />
          </FormControl>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            User Management
          </Text>
          <FormControl>
            <FormLabel>User Role</FormLabel>
            <Select placeholder="Select role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Select>
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
