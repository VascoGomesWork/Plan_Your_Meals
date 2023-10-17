var APIKeys = (function () {

    var apiKeys = []

    //TODO - Make a simple search to check if key is workign and returns it

    var getAPIKey = function (){
        return apiKeys[0]
    }

    return {
        getAPIKey: getAPIKey
    }
})()

export default APIKeys