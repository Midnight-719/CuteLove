// src/routes/index.tsx
import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  Box,
  Button,
  Card,
  Image,
  Text,
  VStack,
  Grid,
  Dialog,
  Center,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { toaster } from "../components/ui/toaster";
import { Layout } from "../components/layout/Layout";

function useThailandCoupleList() {
  return useMemo(
    () => [
      "LingOrm (Ling & Orm)",
      "FreenBecky (Freen & Becky)",
      "Lena × Miu",
      "Mable × Pangjie",
      "Kao × Jane",
      "MilkLove (Milk × Love)",
      "Namtan × Film",
      "Emi × Bonnie (Emibonnie)",
      "GinJ (Ginny × Jayna)",
      "Fay × May (FayMay)",
    ],
    []
  );
}

import { initialShows, type TvDramas } from "../data/shows";



const GlShows = ({ title, description, price, imagePath, id }: TvDramas) => {
  return (
    <Link to="/details/$id" params={{ id }} style={{ textDecoration: 'none' }}>
      <Card.Root
        width="100%"
        overflow="hidden"
        cursor="pointer"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-5px)',
          shadow: 'xl',
          borderColor: 'purple.500'
        }}
      >
        <Image
          src={imagePath}
          alt={title}
          aspectRatio={2 / 3}
          width="100%"
          height="auto"
          objectFit="cover"
        />
        <Card.Body gap="2">
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
            ${price}
          </Text>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="purple">Like it</Button>
          <Button variant="ghost">Add to cart</Button>
        </Card.Footer>
      </Card.Root>
    </Link>
  );
};

export const Route = createFileRoute("/")({
  component: ThailandCouple,
});

function ThailandCouple() {
  const [dramas, setDramas] = useState<TvDramas[]>(() => {
    const saved = localStorage.getItem("glShows");
    if (saved) {
      return JSON.parse(saved);
    }
    return initialShows;
  });
  // TODO： what's function of useEffect?
  useEffect(() => {
    localStorage.setItem("glShows", JSON.stringify(dramas));
  }, [dramas]);

  const handleAddDrama = (newDrama: TvDramas) => {
    setDramas([...dramas, newDrama]);
    toaster.create({
      title: "Success",
      description: "New drama added successfully",
      type: "success",
    });
  };

  return (
    <Layout>
      <Box p={4}>
        <Grid
          templateColumns={{
            base: "repeat(auto-fill, minmax(260px, 1fr))",
            md: "repeat(auto-fill, minmax(280px, 1fr))",
            lg: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
          gap={6}
          width="100%"
        >
          {dramas.map((show, index) => (
            <GlShows key={index} {...show} />
          ))}
          <AddTvDramaCard onAdd={handleAddDrama} />
        </Grid>
      </Box>
    </Layout>
  );
}

interface AddTvDramaCardProps {
  onAdd: (drama: TvDramas) => void;
}

function AddTvDramaCard({ onAdd }: AddTvDramaCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imagePath, setImagePath] = useState("");

  const handleSubmit = () => {
    if (!title || !price) {
      toaster.create({
        title: "Error",
        description: "Title and Price are required",
        type: "error",
      });
      return;
    }

    onAdd({
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      price: Number(price),
      imagePath: imagePath || "https://placehold.co/260x160", // Default placeholder
    });

    // Reset form and close dialog
    setTitle("");
    setDescription("");
    setPrice("");
    setImagePath("");
    setIsOpen(false);
  };

  return (
    <>
      <Card.Root
        width="100%"
        height="100%"
        minH="400px"
        overflow="hidden"
        borderRadius="lg"
        borderStyle="dashed"
        borderWidth="2px"
        borderColor="gray.300"
        cursor="pointer"
        onClick={() => setIsOpen(true)}
        _hover={{ borderColor: "purple.500", bg: "gray.50" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center flexDirection="column" gap={4} color="gray.400">
          <FaPlus size={80} />
          <Text fontWeight="medium">Add New Drama</Text>
        </Center>
      </Card.Root>

      <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Add New Drama</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Stack gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1}>
                    Title
                  </Text>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1}>
                    Description
                  </Text>
                  <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1}>
                    Price
                  </Text>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price"
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={1}>
                    Image URL
                  </Text>
                  <Input
                    value={imagePath}
                    onChange={(e) => setImagePath(e.target.value)}
                    placeholder="Enter image URL"
                  />
                </Box>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={handleSubmit} colorPalette="purple">
                Save
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
}
