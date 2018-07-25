// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  List,
  ListItem,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";
import prismElm from "prismjs/components/prism-elm";

// Require CSS
require("normalize.css");

const images = {
  TEA: require("../assets/TEA.png"),
  stlelm: require("../assets/stl-elm.jpg"),
  jsLogo: require("../assets/js.png"),
  elmLogo: require("../assets/elm.svg"),
  compilerError1: require("../assets/compiler-error1.png"),
  compilerError2: require("../assets/compiler-error2.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#5A6378", //gray
    tertiary: "#60B5CC", // blue
    quarternary: "#7FD13B", // green
    quinary: "#F0AD00", // yellow
    black: "#000"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["fade"]} bgColor="primary">
          <Layout style={{ alignItems: "center" }}>
            <Image src={images.jsLogo} style="width: 250px" />
            <Image src={images.elmLogo} style="width: 250px" />
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why We ❤️ Elm
          </Heading>
          <Heading textColor="tertiary" size={3}>
            An Intro to Elm
          </Heading>
          <Text margin="2em 0 1em 0" textColor="secondary">
            Abadi Kurniawan (slack: @abadi199)<br />
            Chris Marfia (slack: @cmarfia)<br />
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">
            What is Elm?
          </Heading>
          <List textColor="primary">
            <ListItem>Functional Language</ListItem>
            <ListItem>Compiled to JavaScript</ListItem>
            <ListItem>Building realiable web applications</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <CodePane
            lang="elm"
            source={require("raw-loader!../assets/Simple.example")}
            style="font-size: 20px;margin-top: -140px;"
            overflow="overflow"
          />
          <a href="https://ellie-app.com/S885VkPNsQa1" target="_blank">
            https://ellie-app.com/S885VkPNsQa1
          </a>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">
            No Runtime Exception
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="tertiary">
            No Null Reference
          </Heading>
          <BlockQuote bgColor="secondary" style={{ padding: "2em" }}>
            <Quote textSize={40}>
              I call it my billion-dollar mistake. It was the invention of the
              null reference in 1965.
            </Quote>
            <Cite textColor="quarternary">
              Tony Hoare -- Designer of ALGOL W
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">
            Union Types
          </Heading>
          <CodePane
            lang="elm"
            source={require("raw-loader!../assets/UnionTypes.example")}
            margin="20px auto"
            style="font-size: 30px;"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Maybe
          </Heading>
          <CodePane
            lang="elm"
            source={require("raw-loader!../assets/Maybe.example")}
            margin="20px auto"
            style="font-size: 26px;"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Result
          </Heading>
          <CodePane
            lang="elm"
            source={require("raw-loader!../assets/Result.example")}
            margin="20px auto"
            style="font-size: 26px;"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            The Elm Architecture
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <CodePane
            lang="elm"
            source={require("raw-loader!../assets/TEA.example")}
            style="font-size: 16px;margin-top: -120px;"
            overflow="overflow"
          />
          <a href="https://ellie-app.com/RrrWkGVrS6a1" target="_blank">
            https://ellie-app.com/RrrWkGVrS6a1
          </a>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.TEA} />
          <Text style={{ fontSize: "16px", textAlign: "right" }}>
            Credit: https://twitter.com/01k
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Refactor without Fear
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="0 0 .25em 0" size={1} textColor="tertiary">
            Helpful Compiler
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Image src={images.compilerError1} width="85%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Image src={images.compilerError2} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Focus on Simplicity
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Elm Format
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Enforced Semantic Versioning
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Friendly Community
          </Heading>
          <Heading margin="1em 0 0 0" size={6} textColor="primary">
            http://elmlang.herokuapp.com
          </Heading>
          <Heading size={6} textColor="primary">
            https://discourse.elm-lang.org
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Interested in Learning Elm?
          </Heading>
          <Heading margin="1em 0 0 0" size={6} textColor="tertiary">
            <Image src={images.stlelm} style="width: 200px" />
            https://meetup.com/STLElm
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
