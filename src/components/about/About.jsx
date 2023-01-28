import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://images.pexels.com/photos/12623750/pexels-photo-12623750.jpeg?auto=compress&cs=tinysrgb&w=400);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Text variant="h5">
          I'm a Software Developer based in India. I've built websites
          <br />
          If you are interested, you can view some of my favorite projects here
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/thakurankit6767"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
