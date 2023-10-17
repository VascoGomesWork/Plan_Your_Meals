var ProductAlimentaryPlan = (function () {

    var ProductArrayObject = []

    function setProductArray (ingredientsArray){
        ProductArrayObject = ingredientsArray
    }

    var getProductArray = function (){
        return ProductArrayObject
    }

    return {
        getProductArrayObject: getProductArray,
        setProductArrayObject: setProductArray
    }
})()

export default ProductAlimentaryPlan