let server = require('./routes.js')
let port = process.env.PORT || 3000

server.listen(port, (err) => {
	if (err) throw err
	console.log(`server is running on port: ${port}`)
})