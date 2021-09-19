import axios from "axios";
import { allCountries } from "../constants/countries";
import toPascalCase from "../utilities/stringHelper";
import {
  UPDATE_SEARCH_PARAMS,
  UPDATE_SEARCH_RESULTS,
  UPDATE_SEARCH_HISTORY,
  DELETE_HISTORY_BY_INDEX,
} from "./actionTypes";

export const searchRequest = (city, country) => async (dispatch) => {
  const countryCode = allCountries[toPascalCase(country)];

  const criteria = countryCode ? `${city},${countryCode}` : `${city}`;

  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${criteria}&appid=c3a8951e9f10f320d81023e11e361418&units=metric`
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(updateSearchResult(data));
      dispatch(updateSearchHistory(data));
      console.log("end");
    });
};

export const updateSearchResult = (results) => ({
  type: UPDATE_SEARCH_RESULTS,
  results: results,
});

export const updateSearchParams = (city, country) => ({
  type: UPDATE_SEARCH_PARAMS,
  city: city,
  country: allCountries[toPascalCase(country)],
});

export const updateSearchHistory = (results) => ({
  type: UPDATE_SEARCH_HISTORY,
  results: results,
});

export const deleteHistoryByIndex = (index) => ({
  type: DELETE_HISTORY_BY_INDEX,
  index: index,
});
