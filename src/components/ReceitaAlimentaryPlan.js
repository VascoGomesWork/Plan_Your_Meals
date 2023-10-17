var ReceitaAlimentaryPlan = (function () {

    var receitaArrayObject = []

    function setReceitaArray (receitaArray){
        receitaArrayObject = receitaArray
    }

    var getReceitaArray = function (){
        return receitaArrayObject
    }

    return {
        getReceitaArrayObject: getReceitaArray,
        setReceitaArray: setReceitaArray
    }
})()

export default ReceitaAlimentaryPlan