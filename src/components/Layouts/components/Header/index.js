import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { useState } from 'react';
import AccountItems from '../../../AccountItems';
import Button from '../../../Button';

const cx = classNames.bind(styles);

function Header() {
    const [resultSearch, setResultSearch] = useState([]);
    return (
        <header className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <p className={cx('title-popper')}>Account</p>
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                    placement="bottom"
                    offset={[0, 20]}
                    interactive={true}
                    visible={resultSearch}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Tìm kiếm" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('border-color')}>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                    <Button
                        rounded
                        disable
                        onClick={() => {
                            alert('đ');
                        }}
                    >
                        Tải ứng dụng
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
