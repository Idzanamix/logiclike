import React from "react";
import * as styles from './error.scss';

interface IError {
  massage: string,
  notError?: boolean
}

export function Error({ massage, notError }: IError) {
  return (
    <div role="alert" className={styles.error}>
      <div className={styles.container}>
        {!notError && <span className={styles.descr}>
          Что-то пошло не так...
        </span>}
        <span className={styles.message}>
          {massage}
        </span>
      </div>
    </div>
  )
}
