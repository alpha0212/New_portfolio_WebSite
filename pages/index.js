import NextLink from 'next/link';
import { Container, Box, Heading, useColorModeValue, Link, Button } from "@chakra-ui/react";
import Image from 'next/image';
import Jun from '../images/jun.png';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Page = () => {
    return (
        <Container>
            <Box borderWidth={2} borderStyle="solid" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a front-end developer!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" >
                        Park Jun Hee
                    </Heading>
                    <p>Designer / Developer / planning</p>
                </Box>
            </Box>
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" width={200} height={200} display="inline-block" borderRadius="full" src={Jun} alt="Profile Image" />
            </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>Front junior Developer 
                <NextLink href="/works/inkdrop"><Link> works</Link></NextLink>.
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My portfolio
                    </Button>
                </NextLink>
            </Box>
        </Section>
        </Container>
    );
}

export default Page;