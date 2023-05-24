const getAllProducts = async(req, res) => {
    res.status(200).json({msg: "testing"})
}


const getAllProductsStatic = async(req, res) => {
    res.status(200).json({msg: "testing"})
}


module.exports = {
    getAllProducts,
    getAllProductsStatic
}