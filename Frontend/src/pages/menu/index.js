import React from 'react';
import clsx from 'clsx';

import styles from './menu.scss';

const cx = clsx.bind(styles);

export default function MenuPage() {
  return <div className={cx('wrapper-menu-page')}>Đây là trang menu</div>;
}
