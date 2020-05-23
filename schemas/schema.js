import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// BUILDING BLOCKS
import localeString from "./building-blocks/locale-string";
import localePortableText from "./building-blocks/locale-portable-text";
import picture from "./building-blocks/picture";
import link from "./building-blocks/local-link";

// PAGES
import HomePage from "./home-page";
import IntroHomePage from "./home-page/introduction";
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
    HomePage,
    IntroHomePage,
  ]),
});
