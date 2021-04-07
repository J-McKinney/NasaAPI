import React, { Component } from "react";
import styles from "./Index.module.css";
import axios from "axios";
require("dotenv").config();

class Index extends Component {
  state = {
    nasaInfo: [],
  };

  componentDidMount() {
    const nasaAPI =
      "https://api.nasa.gov/planetary/apod?api_key=" +
      process.env.REACT_APP_APIKey;
    axios
      .get(nasaAPI)
      .then((res) => {
        console.log(res);
        return axios.get(nasaAPI);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <header className={styles.header}></header>
        </div>
      </>
    );
  }
}

export default Index;
