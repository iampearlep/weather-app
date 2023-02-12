import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiUrl, geoApiOptions } from "./api"

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
      return fetch(`${geoApiUrl}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
      .then(response => response.json())
      .then(response => ({
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }
        })
      }))
      .catch(err => console.error(err));
    }

    const handleOnChange = (searchData ) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

  return (
    <AsyncPaginate className="w-7/12 mx-auto" placeholder="Search for city" debounceTimeout={600}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
    />
  )
}

export default Search