import { Container, Divider, Header, Button, Message } from "semantic-ui-react";

const Quote = () => {
  const getRandom = () => {
    const randomObject = [
      "Logic will get you from A to B. Imagination will take you everywhere.",
      "There are 10 kinds of people. Those who know binary and those who don't.",
      "There are two ways of constructing a software deisng. One way is to make it so simple taht there are obvious no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
      "It's not that I'm so smart, it's just that I stay with problems longer.",
      "It is pitch dark. You are likely to be eaten by a grue.",
    ];

    const index = Math.floor(randomObject.length * Math.random());

    return randomObject[index];
  };

  return (
    <Container style={{ marginTop: "3em" }}>
      <Header as="h1">Quote of the day</Header>
      <img src={process.env.PUBLIC_URL + "/qotd.png"} alt="qotd" />

      <Divider />

      <Message
        style={{ marginTop: "2em" }}
        header="For you today..."
        content={getRandom()}
      />

      <Button
        style={{ marginTop: "2em" }}
        color="github square"
        icon="github square"
        onClick={() =>
          (window.location = "https://github.com/ftiannn/todays-weather")
        }
      />
    </Container>
  );
};

export default Quote;
