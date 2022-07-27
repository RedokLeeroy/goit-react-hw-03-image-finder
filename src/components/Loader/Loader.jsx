import React, { Component } from 'react';
import styles from '../Loader/Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

export class LoaderSpinner extends Component {
  state = {};
  render() {
    return (
      <div className={styles.loader}>
        <BallTriangle
          type="BallTriangle"
          color="#2e2f32"
          height={200}
          width={200}
        />
      </div>
    );
  }
}