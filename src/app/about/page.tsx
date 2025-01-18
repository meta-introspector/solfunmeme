import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | $SOLFUNMEME ( BwUTq7fS6sfUmHDwAiCQZ3asSiPEapW5zDrsbwtapump )",
  description: "This is About Page for the SOLFUNMEME project",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="SOLFUNMEME is a viral meme-coin with a mission to provide secure sovereign cloud hosting for AI Agents, it is designed to create a GATED DAO community for builder and holders to launch projects using our self hosted, open source technology and integrate zero trust, knowledge as part of the zero ontology system (ZOS)."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
