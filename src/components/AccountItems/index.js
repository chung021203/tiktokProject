import styles from './AccountItems.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b7eee9f5b73d85f608a70d16b3873ec9~c5_100x100.jpeg?lk3s=30310797&x-expires=1709823600&x-signature=bO20RV9vKB4I%2FCmVZ2WffUHQxEg%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Dao Le Phuong Thoa
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                </h4>
                <p className={cx('userName')}>Nguyen van a</p>
            </div>
        </div>
    );
}

export default AccountItems;
