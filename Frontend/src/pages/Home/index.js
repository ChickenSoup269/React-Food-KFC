import React from 'react';
import clsx from 'clsx';
import styles from './home.scss';

import CarouselDefault from '~/components/Carousel';

const cx = clsx.bind(styles);

export default function Home() {
  return (
    <div className="wrapper-home">
      <h1>Đây là trang home</h1>
      <h1>Đây là trang home</h1>
      <h1>Đây là trang home</h1>
      <CarouselDefault />
    </div>
  );
}
