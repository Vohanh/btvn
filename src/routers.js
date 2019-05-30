import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/home/home'
import ProductsPage from './pages/products/Products'
import FarmsPage from './pages/farms/Farms'
import NewsPage from './pages/news/News';
import ContactPage from './pages/contact/Contact';

const MainRouter =()=> (
    <main>
        <Switch>
            <Route exact path ='/' component={HomePage}></Route>
            <Route path ='/products' component={ProductsPage}></Route>
            <Route path ='/farms' component={FarmsPage}></Route>
            <Route path ='/news' component={NewsPage}></Route>
            <Route path ='/contact' component={ContactPage}></Route>
        </Switch>
    </main>
)
export default MainRouter