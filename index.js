const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

app.get('/', (req, res) => res.send('<h1 style="text-align: center;">Hello, World!</h1>'))
app.listen(port, () => console.log(`api_node_basic listening on port ${port}!`))