import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Message } from "semantic-ui-react";
import { searchRequest, updateSearchParams } from "../../redux/actions";

const SearchCriteria = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [cityError, setCityError] = useState(false);
  const [formError, setFormError] = useState(false);

  const validateForm = useCallback(async () => {
    if (city === "") {
      setCityError("Please enter city");
    } else {
      try {
        await dispatch(searchRequest(city, country));
        dispatch(updateSearchParams(city, country));
        clearForm();
      } catch (e) {
        console.log(e);
        setFormError(true);
      }
    }
  }, [city, country, dispatch]);

  const clearForm = () => {
    setCity("");
    setCityError(false);
    setCountry("");
  };

  useEffect(() => {
    setCityError(false);
    setFormError(false);
  }, [city, country]);

  return (
    <div>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            onChange={(e) => setCity(e.target.value)}
            label="City"
            placeholder="City..."
            error={cityError}
            value={city}
          />
          <Form.Input
            onChange={(e) => setCountry(e.target.value)}
            label="Country"
            placeholder="Country..."
            value={country}
          />
        </Form.Group>

        <Form.Group inline>
          <Form.Button onClick={validateForm} primary>
            Search
          </Form.Button>
          <Form.Button onClick={clearForm}>Reset</Form.Button>
        </Form.Group>
      </Form>

      {formError && (
        <Message negative>
          <p>No Record Found</p>
        </Message>
      )}
    </div>
  );
};

export default SearchCriteria;
