import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faLightbulb,
    faQuestion,
    faKeyboard,
    faMoon,
    faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { useState } from 'react';
import AccountItems from '../../../AccountItems';
import Menu from '../../../Popper/Menu';
import Button from '../../../Button';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [resultSearch, setResultSearch] = useState([]);
    const menu = [
        {
            title: 'Trung tâm Nhà sáng tạo LIVE',
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            children: {
                title: 'Ngôn ngữ',
                icon: <FontAwesomeIcon icon={faAngleLeft} />,
                data: [
                    {
                        code: 'en',
                        title: 'Tiếng việt',
                    },
                    {
                        code: 'vi',
                        title: 'Việt Nam',
                    },
                ],
            },
        },
        {
            title: 'Tiếng việt',
            icon: <FontAwesomeIcon icon={faAppStoreIos} />,
        },
        {
            title: 'Phản hồi và trợ giúp',
            icon: <FontAwesomeIcon icon={faQuestion} />,
        },
        {
            title: 'Phím tắt trên bàn phím',
            icon: <FontAwesomeIcon icon={faKeyboard} />,
        },
        {
            title: 'Chế độ tối',
            icon: <FontAwesomeIcon icon={faMoon} />,
        },
    ];

    return (
        <header className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    placement="bottom"
                    offset={[0, 20]}
                    interactive={true}
                    visible={resultSearch}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <p className={cx('title-popper')}>Account</p>
                                <AccountItems></AccountItems>
                            </PopperWrapper>
                        </div>
                    )}
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

                    <Menu menu={menu}>
                        <div>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
