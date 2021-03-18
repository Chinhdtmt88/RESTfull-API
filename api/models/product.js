const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {type: String, required:true},//taoj object xác thực dúng kiểu dữ liệu
    price: {type: Number, required: true}
});

module.exports= mongoose.model('Product', productSchema)