import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    mulitiplier: 250,
  },

  recovered: {
    hex: "#7DD71D",
    mulitiplier: 1200,
  },

  deaths: {
    hex: "#C0C0C0",
    mulitiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => b.cases - a.cases);
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";


// DRAW circles on the map with interactive tooltop
export const showDataOnMap = (data, casesType = "cases") => {
  return data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].mulitiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            <strong>Cases: </strong>{numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            <strong>Recovered: </strong>{numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            <strong>Deaths: </strong>{numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};
