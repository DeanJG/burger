const express = require("express")
const exphbs = require("express-handlebars")
const { join } = require(`path`)
const app = express()

// middle-wear delcaration for serving up public folder contents and reading through application.
app.use(express.static(join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// sets up and starts handlebars view engine
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: `.hbs` }))
app.set("view engine", ".hbs")

// opens server port
app.listen(3000, () => {
  console.log("listening...")
})