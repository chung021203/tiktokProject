import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header({ icon, title, onBack }) {
    return (
        <div className={cx('wrapper')}>
            <span onClick={onBack} className={icon}>
                {icon && icon}
            </span>
            <p className={cx('title')}>{title}</p>
        </div>
    );
}

export default Header;
