import React, { useEffect, useState } from "react";
import "./ticket.css";
import logo from "../assets/Logo.png";
import { useSearchParams } from "react-router-dom";
import backendURL from "../network";
export const Ticket = () => {
  const [data, setdata] = useState({});
  let date = new Date();
  let day = date.getDate();
  const [params, setparams] = useSearchParams();
  let month = date.getMonth() + 1;

  let year = date.getFullYear();
  const id = params.get("id");
  const ticket = params.get("ticket");
  let prc = params.get("prc");
  const name = params.get("name");
  const getdata = async () => {
    let resp = await fetch(`${backendURL}/flights/${id}`);
    let rdata = await resp.json();
    setdata(rdata);
  };
  useEffect(() => {
    getdata();
  });

  return (
    <>
      <div className="container">
        <div className="header"></div>
        <div className="brand">
          <div className="brand__logo">
            <img src={logo} alt="TitanCapital Logo" />
          </div>
          <div className="brand__heading">INVOICE</div>
        </div>
        <div className="details">
          <div className="details__column">
            <div className="details__column-grid">
              <div className="details__column-item bold">Mode of payment</div>
              <div className="details__column-item bold">:</div>
              <div className="details__column-item">Online</div>
            </div>
            <div className="details__column-grid">
              <div className="details__column-item bold">Payment Status</div>
              <div className="details__column-item bold">:</div>
              <div className="details__column-item">Completed</div>
            </div>
            <div className="details__column-grid">
              <div className="details__column-item bold">Date of Booking</div>
              <div className="details__column-item bold">:</div>
              <div className="details__column-item">{`${day}/${month}/${year}`}</div>
            </div>
          </div>
          <div className="details__gap"></div>
          <div className="details__column">
            <div className="details__column-grid">
              <div className="details__column-item bold">Transaction ID</div>
              <div className="details__column-item">:</div>
              <div className="details__column-item">{"TR" + id}</div>
            </div>
            <div className="details__column-grid">
              <div className="details__column-item bold">Booking id</div>
              <div className="details__column-item">:</div>
              <div className="details__column-item">
                {data ? data._id : "loading"}
              </div>
            </div>
            <div className="details__column-grid">
              <div className="details__column-item bold">Airline</div>
              <div className="details__column-item">:</div>
              <div className="details__column-item">
                {data ? data.airline : "loading"}
              </div>
            </div>
          </div>
        </div>
        <div className="breakdown">
          <div className="breakdown__item">
            <div className="breakdown__item-label">Name of Passenger</div>
            <div className="breakdown__item-value">{name}</div>
          </div>
          <div className="breakdown__item">
            <div className="breakdown__item-label">Number of Ticket</div>
            <div className="breakdown__item-value">{ticket}</div>
          </div>

          <div className="breakdown__item">
            <div className="breakdown__item-label">Taxes and Fee</div>
            <div className="breakdown__item-value">1499</div>
          </div>

          <div className="breakdown__item total">
            <div className="breakdown__item-label">Total Amount</div>
            <div className="breakdown__item-value">
              {"₹ " + (prc * ticket + 1499)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
