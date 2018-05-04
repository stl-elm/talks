// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Link,
  Slide,
  Text,
  Image,
  Layout,
  Fit,
  Fill
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why We ❤️ Elm
          </Heading>
          <Heading textColor="tertiary" size={3}> 
            An Intro to Elm
          </Heading>
          <Text margin="2em 0 1em 0">
          Abadi Kurniawan - Slack: @abadi199<br/>
          Chris Marfia - Slack: @cmarfia
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">The Elm Architecture</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">No Null</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Union Types</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Maybe</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Result</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">RemoteData</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">No Runtime Exception</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Refactor without Fear</Heading>
          <Heading size={4}>Demo</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="0 0 .25em 0" size={1} textColor="secondary">Helpful Compiler</Heading>
          <Link href="http://elm-lang.org/blog/compilers-as-assistants">http://elm-lang.org/blog/compilers-as-assistants</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Focus on Simplicity</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Battery Included</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Elm Format</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Enforced Semantic Versioning</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Friendly Community</Heading>
        </Slide>
     </Deck>
    );
  }
}
