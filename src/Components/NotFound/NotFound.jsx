import React from 'react'
import styles from "./NotFound.module.css";
import error from "../../assets/404.png"

export default function NotFound() {
  return (
    <>
      <div className='position-fixed top-0 bottom-0 end-0 start-0  d-flex flex-column justify-content-center align-items-center'>
<img className='w-50 ' src={error} alt="error 404 page not found" />
      </div>
    </>
  );
}
