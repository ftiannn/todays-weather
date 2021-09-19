import { useSelector } from "react-redux";
import { Segment, Header } from "semantic-ui-react";
import { getSearchHistory, getWeatherDetails } from "../../redux/selectors";

const SearchResult = () => {
  const result = useSelector( getWeatherDetails );
  const historyRecords = useSelector( getSearchHistory );

  return ( result.length !== 0 && historyRecords.length !== 0  && (
    <Segment style={{ marginTop: '3em' }} >
      <Header as='h2'>{result[ 0 ].weather}</Header>
        <Header as='h4' color='grey'>{result[0].city}, {result[0].country}</Header>
        <p> Description: {result[0].description} </p>
        <p> Temperature: {result[0].temp} <span>&#8451;</span></p>
        <p> Humidity: {result[0].humidity} </p>
        <p> Time: {result[0].dateTime} </p>
    </Segment>
  ))
};

export default SearchResult;
