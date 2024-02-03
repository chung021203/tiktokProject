import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import { HeaderOnly } from '../components/Layouts';

import Search from '../pages/Search';
// public Router, hiện thị trang khi không cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
