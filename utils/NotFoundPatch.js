const fs = require("fs")

const src = "./build/index.html"
const dest = "./build/404.html"

fs.copyFile(
    src, dest, 
    (error) => {
        if (error) {
            console.error(error)
            return
        }
    }
)