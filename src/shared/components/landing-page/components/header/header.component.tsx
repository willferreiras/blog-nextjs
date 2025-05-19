import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HeaderRootContainer,
  LeftContainer,
  RightContainer,
  SocialIcons,
  SocialRow,
} from "./header.style";
import { GitHub, Instagram, LinkedIn, ArrowBack } from "@mui/icons-material";
import { Typography, IconButton, Stack } from "@mui/material";
import { colors } from "@/shared/utils/theme/colors";

const Header: React.FC = () => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("Blog Challenge");

  useEffect(() => {
    const titleTag = document.querySelector("head title");
    if (
      titleTag?.textContent &&
      !["Blog Challenge", "Blog - Home"].includes(titleTag.textContent)
    ) {
      setPageTitle(titleTag.textContent);
    } else {
      setPageTitle("Blog Challenge");
    }
  }, [router.asPath]);

  const isHome = router.pathname === "/";

  return (
    <HeaderRootContainer>
      <LeftContainer>
        <Stack direction="row" alignItems="center" spacing={1}>
          {!isHome && (
            <Link href="/" passHref legacyBehavior>
              <IconButton
                component="a"
                size="small"
                sx={{ color: colors.white }}
                aria-label="Voltar para home"
              >
                <ArrowBack />
              </IconButton>
            </Link>
          )}
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: colors.white,
              fontSize: {
                xs: "1rem",
                sm: "2rem",
              },
            }}
          >
            {pageTitle}
          </Typography>
        </Stack>
      </LeftContainer>
      <RightContainer>
        <SocialRow>
          <SocialIcons>
            <a
              href="https://github.com/willferreiras"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/willferreiras93/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="http://instagram.com/willferreiras"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </SocialIcons>
        </SocialRow>
      </RightContainer>
    </HeaderRootContainer>
  );
};

export default Header;
