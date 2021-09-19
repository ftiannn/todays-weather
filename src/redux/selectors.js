import moment from "moment";

export const getWeatherDetails = (store) => {
  if (
    !store ||
    (store &&
      store.search &&
      store.search.result &&
      Object.keys(store.search.result).length === 0)
  )
    return [];

  let { result } = store.search;

  return [
    {
      country: result.sys.country,
      city: result.name,
      weather: result.weather[0].main,
      description: result.weather[0].description,
      temp: result.main.temp_min + " ~ " + result.main.temp_max,
      humidity: result.main.humidity + "%",
      dateTime: moment(new Date(result.dt * 1000 + result.timezone)).format(
        "YYYY-MM-DD h:mm:ss A"
      ),
    },
  ];
};

export const getSearchParam = (store) => {
  return store.search.params;
};

export const getSearchHistory = (store) => {
  return store.search.history.map((res) => {
    return {
      city: res.name,
      country: res.sys.country,
      time: moment(new Date(res.dt * 1000 + res.timezone)).format("h:mm:ss A"),
    };
  });
};
