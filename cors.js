module.exports = function (app){
const cors = require ('cors')
const corsOption = {
    origin: function (origin, callback)
    {
        // if our port is is in our WHITELIST, you can call it, otherwise, block it
        if (process.env.CORSE_WHITELIST.split(' ').indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("sorry, this is not allowed by CORS config"))
        }
    },
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
}
app.options("*", cors(corsOption))
app.use(cors(corsOption))
}