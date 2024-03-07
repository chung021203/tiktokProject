import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Button({ children, to, href }) {
    let Comp = 'button';
    const props = {};
    if (href) {
        Comp = 'a';
        props.href = href;
    } else if (to) {
        Comp = Link;
        props.to = to;
    }
    const classes = cx('wrapper');
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
