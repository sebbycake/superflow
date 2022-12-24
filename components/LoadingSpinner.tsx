import { useState } from "react"
import styles from "./LoadingSpinner.module.css"

function LoadingSpinner() {
	return (
		<div className={styles.lds_roller_container}>
      <div className={styles.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
	)
}

export default LoadingSpinner
