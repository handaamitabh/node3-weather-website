const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a854fb08ec15685cec36acf1fdef5f60&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json : true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weatherstack api', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast