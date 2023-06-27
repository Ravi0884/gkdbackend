const express=require('express')
const router=express.Router()
const ProductRoutes = require('./ProductRoutes')
const AdminRoutes = require('./AdminRotes')
const UserRoutes = require('./UserRoutes')
const PaymentRoutes = require('./PaymentRoutes')
const OrderRoutes = require('./OrderRoutes')
router.get('/',(req, res) =>{
    res.send("Welcome to stack clone")
});

router.use('/api',ProductRoutes);
router.use('/admin',AdminRoutes);
router.use('/user',UserRoutes);
router.use('/payment',PaymentRoutes);
router.use('/order',OrderRoutes);

module.exports = router;