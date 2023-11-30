import { motion } from 'framer-motion'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const navigate = useNavigate()
    return (
        <motion.div className='checkout-page'
        
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
        >
            <FaCheckCircle size={200} className='icon' />
            <h3>Checkout Successful</h3>
            <p> Checkout section coming soon!!! before then enjoy your shopping.</p>
            <button onClick={() => navigate('/')} className='continue'>Continue Shopping</button>

        </motion.div>
    )
}

export default Checkout
