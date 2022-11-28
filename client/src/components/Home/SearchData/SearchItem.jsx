// import { Box,  SkeletonText, Text, useEnvironment } from '@chakra-ui/react'
import { SkeletonText } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backendURL from "../../../network";
// import List from '../../../pages/list/List'
import "./searchItem.css";

const SearchItem = () => {
  const [data, setData] = useState([]);
  const param = useParams();
  useEffect(() => {
    fetch(`${backendURL}/stays/${param.id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);

  return (
    <>
      <SkeletonText
        noOfLines={25}
        spacing="8"
        isLoaded={data.length > 0}
        fadeDuration={500}
      />
      {data?.map((ele) => (
        <div className="searchItem" key="ele.id">
          <img src={ele.image} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{ele.hotel_name}</h1>
            <span className="siDistance">{ele.distance}</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">{ele.room_type}</span>
            <span className="siFeatures">{ele.bed}</span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{ele.review}</span>
              <button>{ele.rating}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{ele.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchItem;
