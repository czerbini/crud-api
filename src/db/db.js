const mongoose = require('mongoose')

 /* mongoose.connect('mongodb://localhost/API', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongo connected')
}).catch(err => {
    console.log(err)
})

module.exports = mongoose  */

 mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Mongo connected')
}).catch(err => {
    console.log(err)
})

module.exports = mongoose 