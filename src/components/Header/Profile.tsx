import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Matheus Bachiste</Text>
                <Text
                    color="gray.300"
                    fontSize="small"

                >
                    matheusblopes10@gmail.com
                </Text>
            </Box>
            )}

            <Avatar size="md" name="Matheus Bachiste" src="https://github.com/MatheusBLopes.png" />
        </Flex>
    )
}