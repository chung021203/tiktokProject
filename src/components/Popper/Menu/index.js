import MenuItem from './MenuItem';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, menu }) {
    const [value, setValue] = useState([{ data: menu }]);
    const currentValue = value[value.length - 1];
    console.log(currentValue.title);
    console.log(value);

    const handleMenu = () => {
        return currentValue.data.map((item, index) => {
            console.log(value);
            const handleMenu = (e) => {
                const isParent = !!item.children; // chuyen sang boolean
                if (isParent) {
                    setValue((prev) => [...prev, item.children]);
                }
            };
            return (
                <>
                    <MenuItem key={index} onClick={handleMenu} item={item} />
                </>
            );
        });
    };
    const handleBack = (e) => {
        setValue((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            delay={[0, 3000]} // xử lí thời gian popper hide trong một khoảng thời gian nhất định
            onHide={() => setValue([{ data: menu }])} // xử lí sự kiện khi popper ẩn đi thì thực hiện reset lại menu
            placement="bottom"
            offset={[-100, 10]} // chỉnh khoảng cách chiều ngang, chiều dọc so với element được wrapper bởi Tippy
            interactive={true} // cho phép người dùng tuong tác vào popper
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {value.length > 1 && (
                            <Header onBack={handleBack} icon={currentValue.icon} title={currentValue.title}></Header>
                        )}
                        {handleMenu()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
