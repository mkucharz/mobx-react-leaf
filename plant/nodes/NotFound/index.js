import React from 'react';
import { Link } from 'leafs';
import styles from './styles.scss';

const cn = require('classnames/bind').bind(styles);

export default () => (
  <div className={cn('NotFound')}>
    <div>
      <h1 className={cn('NotFound__title')}>Page was not found.</h1>
      <Link className={cn('NotFound__back')} to="/">Back to home</Link>
    </div>
  </div>
);
