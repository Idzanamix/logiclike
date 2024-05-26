import React, { ReactNode } from 'react';
import * as styles from './content.scss';

export interface IContent {
  children?: ReactNode;
}

export function Content({ children }: IContent) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
