import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"#f0f2fa"} color={"black"} mt={"50px"}>
      <Container as={Stack} maxW={"6xl"} py={10} pt="100px">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader><b>The Product</b></ListHeader>
            <Link href={"#"}>For individuals</Link>
            <Link href={"#"}>For Professionals</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Terms</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader><b>The Company</b></ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Crono Blog</Link>
            <Link href={"#"}>jobs</Link>
            <Link href={"#"}>Support</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader><b>Partners & Affiliates</b></ListHeader>
            <Link href={"#"}>Affiliate Program</Link>
            <Link href={"#"}>Media Kit</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader><b>Also On</b></ListHeader>
            <Image
              m={"auto"}
              mt="20px"
              w="150px"
              src="https://cdn1.cronometer.com/webflow/android-icon.svg"
            ></Image>
            <Image
              m={"auto"}
              mt="20px"
              w="150px"
              src="https://cdn1.cronometer.com/webflow/ios-icon.svg"
            ></Image>
          </Stack>
        </SimpleGrid>
      </Container>
      <hr style={{ width: "70%", margin: "auto" }} />
      <Box
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text><b>© 2023 Daily Vitalls. All rights reserved</b></Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
