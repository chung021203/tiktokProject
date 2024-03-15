import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import Button from '../../../Button';

const cx = classNames.bind(styles);
function MenuItem({ item, onClick }) {
    return (
        <div onClick={onClick} className={cx('wrapper')}>
            <Button text leftIcon={item.icon}>
                {item.title}
            </Button>
        </div>
    );
}

export default MenuItem;
