import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// BUILDING BLOCKS
import localeString from "./building-blocks/locale-string";
import localePortableText from "./building-blocks/locale-portable-text";
import picture from "./building-blocks/picture";
import link from "./building-blocks/local-link";

// HOME PAGE
import HomePage from "./home-page";
import IntroHomePage from "./home-page/introduction";
import Typist from "./home-page/typist";
import ProjectSection from "./home-page/projects-section";
import AboutPage from "./about-page";

// DOCS
import Skills from "./building-blocks/skills";
import Project from "./building-blocks/project";
import Experience from "./building-blocks/experience";

// BLOG
import MainImage from "./building-blocks/main-image";
import ExcerptPortableText from "./building-blocks/excerpt-portable-text";
import PortableText from "./building-blocks/portable-text";
import Post from "./building-blocks/post";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    localeString,
    localePortableText,
    picture,
    link,
    ProjectSection,
    HomePage,
    IntroHomePage,
    Typist,
    Skills,
    Project,
    Experience,
    AboutPage,
    MainImage,
    ExcerptPortableText,
    PortableText,
    Post,
  ]),
});
