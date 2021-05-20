const express = require("express") // <-- requires express package
let app = express()
let port = require('./config.json') // <-- lets make config.json!

app.use(express.static(__dirname + "/app"))

app.listen(port)
