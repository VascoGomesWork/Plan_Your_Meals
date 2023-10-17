var IngredicentAlimentaryPlan = (function () {

    var ingredienteArrayObject = []

    function setIngredientArray (ingredientsArray){
        ingredienteArrayObject = ingredientsArray
    }

    var getIngredientArray = function (){
        return ingredienteArrayObject
    }

    return {
        getIngredienteArrayObject: getIngredientArray,
        setIngredientArray: setIngredientArray
    }
})()

export default IngredicentAlimentaryPlan