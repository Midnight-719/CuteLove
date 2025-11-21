// src/routes/index.tsx
import { useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Dialog, Button, Portal, CloseButton, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { toaster } from "../components/ui/toaster";

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

import { Flex, Box } from "@chakra-ui/react";

const Demo = () => {
  return (
    <Flex gap="4" align="center">
      <Box height="10" order={3} bg="red.500" width="10">
      </Box>
      <Box height="10" order={2} bg="blue.500" width="10">
      </Box>
      <Box height="10" order={1} bg="green.500" width="10">
      </Box>
    </Flex>
  );
};

export const Route = createFileRoute("/")({
  component: ThailandCouple,
});

function ThailandCouple() {
  const couples = useThailandCoupleList();
  const handleAddMore = () => {
    toaster.create({
      title: "save success",
      description: "Please feel free to add more Thai GL CPS",
      type: "info",
    });
  };
  return (
    <>
      <Demo />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="outline" size="sm">
            <FaPlus fontSize="16px" />
            Add Thailand Couple
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <p>
                  we got :{" "}
                  {couples.map((item: string, index: number) => (
                    <div key={index}>
                      <p>
                        {index + 1}. {item}
                      </p>
                    </div>
                  ))}
                </p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                {/* should be a dialog to add more gl cps  */}
                <Button onClick={handleAddMore}>Add more</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
