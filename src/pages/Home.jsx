import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Shop from "../pages/Shop";
import Newsletter from '../components/Newsletter'
import FeaturedProduct from '../components/FeaturedProduct'
import Footer from '../components/Footer'
import SimpleSlider from '../components/FeaturedProduct'
import { motion } from 'framer-motion'




const Home = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Shop />
            <Newsletter />
            {/* <FeaturedProduct/> */}
            <SimpleSlider />
            <Footer />

        </motion.div>
    )
}

export default Home
