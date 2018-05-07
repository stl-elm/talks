// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
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
import preloader from 'spectacle/lib/utils/preloader';
import prismElm from 'prismjs/components/prism-elm';

// Require CSS
require("normalize.css");

const images = {
  TEA: require('../assets/TEA.png'),
  stlelm: require('../assets/stl-elm.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#5A6378", //gray
  tertiary: "#60B5CC", // blue
  quarternary: "#7FD13B", // green
  quinary: "#F0AD00" // yellow
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout style={{alignItems: "center"}}>
          <Image src={images.stlelm}/>
          <Heading size={1} textColor="secondary">STL Elm Meetup</Heading>
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
          Abadi Kurniawan (slack: @abadi199)<br/>
          Chris Marfia (slack: @cmarfia)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">No Runtime Exception</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="tertiary">No Null Reference</Heading>
          <BlockQuote bgColor="secondary" style={{padding:"2em"}}>
            <Quote textSize={40}>I call it my billion-dollar mistake. It was the invention of the null reference in 1965.</Quote>
            <Cite textColor="quarternary">Tony Hoare</Cite>
          </BlockQuote>
        </Slide>
       <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">Union Types</Heading>
          <CodePane
            lang="elm"
            source={require('raw-loader!../assets/UnionTypes.example')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">Maybe</Heading>
          <CodePane
            lang="elm"
            source={require('raw-loader!../assets/Maybe.example')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">Result</Heading>
          <CodePane
            lang="elm"
            source={require('raw-loader!../assets/Result.example')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="tertiary">RemoteData</Heading>
          <CodePane
            lang="elm"
            source={require('raw-loader!../assets/RemoteData.example')}
            margin="20px auto"
            style={{fontSize: "9px"}}
            overflow="overflow"
          />
        </Slide>
         <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="tertiary">The Elm Architecture</Heading>
          <Image src={images.TEA}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">Refactor without Fear</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="0 0 .25em 0" size={1} textColor="tertiary">Helpful Compiler</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">Focus on Simplicity</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">Elm Format</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">Enforced Semantic Versioning</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">Friendly Community</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="tertiary">What Do You Think?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Code Night</Heading>
          <Heading margin="1em 0 0 0" size={6} textColor="tertiary">https://elmbridge.github.io/curriculum/</Heading>
        </Slide>
     </Deck>
    );
  }
}
