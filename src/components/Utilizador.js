var Utilizador = (function () {

    var username = ""
    var email = ""
    var password = ""
    var spoonacularPassword = ""
    var hash = ""
    var utilizadorArrayObject = []

    function setUtilizadorData (username1, email1, password1, spoonacularPassword1, hash1){
        //Put Data in Array
        username = username1
        email = email1
        password = password1
        spoonacularPassword = spoonacularPassword1
        hash = hash1
    }

    var getUtilizadorUsername = function (){
        return username
    }

    var getUtilizadorEmail = function (){
        return email
    }

    var getUtilizadorPassword = function (){
        return password
    }

    var getUtilizadorSpoonacularPassword = function (){
        return spoonacularPassword
    }

    var getUtilizadorHash = function (){
        return hash
    }

    return {
        setUtilizadorData: setUtilizadorData,
        getUtilizadorUsername: getUtilizadorUsername,
        getUtilizadorEmail : getUtilizadorEmail,
        getUtilizadorPassword : getUtilizadorPassword,
        getUtilizadorSpoonacularPassword: getUtilizadorSpoonacularPassword,
        getUtilizadorHash : getUtilizadorHash
    }
})()

export default Utilizador