import React from 'react';
import clsx from 'clsx';
import styles from './home.scss';

const cx = clsx.bind(styles);

export default function Home() {
  return (
    <div className="wrapper-home">
      <h1 className="">Đây là trang home</h1>

      <button className={cx('btn')}>Chào em</button>

      <button className={cx('active')}>Chào em</button>
    </div>
  );
}
