import { Container, Divider, Header, Segment } from 'semantic-ui-react';

import SearchCriteria from '../components/app/SearchCriteria';
import SearchResult from '../components/app/SearchResult';
import SearchHistory from '../components/app/SearchHistory';

const Weather = () => {
  return (
    <Container style={{ marginTop: '3em'}} >
      <Header as='h1'>Today's Weather</Header>
      <Divider />
      <SearchCriteria />
      
      <SearchResult />
      
    <Segment vertical style={{ marginTop: '7em' }}>
        <SearchHistory />
      </Segment>
    </ Container>
  );
}

export default Weather;
