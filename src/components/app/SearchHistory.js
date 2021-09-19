import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Divider,
  Header,
  Table,
  TableRow,
  Icon,
  Button,
} from "semantic-ui-react";
import {
  searchRequest,
  deleteHistoryByIndex,
  updateSearchParams,
} from "../../redux/actions";
import { getSearchHistory } from "../../redux/selectors";

const SearchHistory = () => {
  const dispatch = useDispatch();

  const historyRecords = useSelector(getSearchHistory);

  const searchAgain = async (city, country) => {
    try {
      await dispatch(searchRequest(city, country));
      dispatch(updateSearchParams(city, country));
    } catch (e) {
      console.log(e);
    }
  };

  const remove = async (i) => {
    await dispatch(deleteHistoryByIndex(i));
  };

  return (
    <Container>
      <Header as="h2">Search History</Header>
      <Divider />
      {historyRecords.length === 0 ? (
        <Container textAlign="center">No records</Container>
      ) : (
        <Table>
          <Table.Body>
            {historyRecords.map((record, i) => {
              return (
                <TableRow key={i}>
                  <Table.Cell>
                    {record.city}, {record.country}
                  </Table.Cell>
                  <Table.Cell textAlign="right">{record.time}</Table.Cell>
                  <Table.Cell textAlign="right">
                    <Button
                      icon
                      onClick={() => searchAgain(record.city, record.country)}
                    >
                      <Icon name="search" />
                    </Button>
                    <Button icon onClick={() => remove(i)}>
                      <Icon name="close" />
                    </Button>
                  </Table.Cell>
                </TableRow>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </Container>
  );
};

export default SearchHistory;
