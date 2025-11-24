import { createFileRoute } from '@tanstack/react-router'
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react'
import { Layout } from '../components/layout/Layout'

export const Route = createFileRoute('/details/$id')({
  component: DetailPage,
})

function DetailPage() {
  const { id } = Route.useParams()

  return (
    <Layout>
      <Box p={8}>
        <VStack gap={6} align="start">
          <Heading size="2xl">Drama Details</Heading>
          <Text fontSize="lg" color="gray.500">
            ID: {id}
          </Text>
          <Box 
            p={6} 
            borderWidth="1px" 
            borderRadius="lg" 
            width="100%" 
            bg="bg.subtle"
          >
            <Text fontSize="xl">
              Details for drama {id} coming soon...
            </Text>
          </Box>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </VStack>
      </Box>
    </Layout>
  )
}
