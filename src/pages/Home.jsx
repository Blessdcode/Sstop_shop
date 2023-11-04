import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Product from '../components/Product'
import Newsletter from '../components/Newsletter'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Product />
            <Newsletter />

        </div>
    )
}

export default Home
