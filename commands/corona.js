var axios = require("axios").default;
module.exports = {
    name: "corona",
    description: "Opens the atm panel",
    execute(message, args, cmd, client, Discord, profiledata, commonjson){

        var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country/code',
        params: {code: 'qa'},
        headers: {
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            'x-rapidapi-key': 'NOT-AUTHORIZED'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            message.channel.send(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
}