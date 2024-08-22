const app = require("./app")
const config = require("./config/config")

const PORT = config.port

app.listen(PORT, () => {
    console.log(`Server running in ${config.nodeEnv} mode on http://localhost:${PORT}`)
})
