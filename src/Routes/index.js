import Home from '../pages/Home';
import Following from '../pages/Following';
// public Router, hiện thị trang khi không cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
