import React, { useState, useEffect } from 'react'
import classNames from "classnames/bind"
import styles from "./SelectMode.module.scss"
import { IOKey } from '../../utils/IOKey'

const cx = classNames.bind(styles)

const SelectMode = () => {

  const Key = IOKey.split("").reverse().join("");

  useEffect(() => {
    const autoButton = document.getElementById('auto');
    const semiButton = document.getElementById('semi');

    autoButton.addEventListener('click', () => {

      localStorage.setItem("mode", "auto");
      localStorage.setItem("time", 1);
      const max = 50;
      const min = 20; 

      fetch('https://io.adafruit.com/api/v2/ltduc147/feeds/auto/data', {
            method: "POST",
            headers: {
                "X-AIO-Key": Key,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "value": `${min}:${max}`}),
        }).then(response => response.json())
        .catch(error => console.error('Error fetching data from Adafruit IO:', error));
      
        window.location.href = '/Dashboard';
    });

    semiButton.addEventListener('click', () => {
      localStorage.setItem("mode", "semi");
      
      window.location.href = '/SetTime';
    });
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("label")}>Select irrigation mode</div>
      <div id="auto" className={cx("block-select")}>Auto</div>
      <br />
      <div id="semi" className={cx("block-select")}>Semi-auto</div>
    </div>
  )
}

export default SelectMode