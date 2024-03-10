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
                src="https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/oofyECT1AEijAIuvLFQfudFgINHqkDfGCDHCDQ?x-expires=1710057600&x-signature=rh%2B3%2Fo0rfxyg9DSsRx4MkT2oCVA%3D"
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
