const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message:'Oder were fetcched'
    });

});

router.post('/',(req,res,next)=>{
    const order ={
        productId: req.body.productId,//sản phẩm
        quantity:req.body.quantity//số lượng
    };
    res.status(201).json({
        message:'Oder was created',
        order: order
    });
});

router.get('/:oderId',(req, res,next)=>{
    res.status(200).json({
        message:'Oder details',
        orderId: req.params.oderId
    });
});
router.delete('/:OderId',(req,res, next) =>{
    res.status(200).json({
        message:'Oder deleted',
        orderId: req.params.oderId
    });
});



module.exports = router;