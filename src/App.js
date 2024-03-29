import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useFetcher } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';

function App() {
    return (
        <Router>
            <div className="App"></div>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
