import React, { Component } from "react";
import styles from "./Index.module.css";
import axios from "axios";
require("dotenv").config();

class Index extends Component {
  state = {
    nasaInfo: "",
  };

  componentDidMount() {
    const nasaAPI =
      "https://api.nasa.gov/planetary/apod?api_key=" +
      process.env.REACT_APP_APIKey;
    axios
      .get(nasaAPI)
      .then((res) => {
        this.setState({ nasaInfo: res.data.hdurl });
        console.log(res.data.hdurl);
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
          <header className={styles.header}>
          <p>Nasa API Picture Of The Day</p>
            <img
              className={styles.nasaImg}
              title="NASA Pic Of The Day"
              alt="NASA Pic Of The Day"
              src={this.state.nasaInfo}
            />
          </header>
        </div>
      </>
    );
  }
}

export default Index;