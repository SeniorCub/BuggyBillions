import express from "express"
const app = express()


// app.get("/", (req, res) => {
//      res.send('Welcome to my home page')
// })
// app.get("/about", (req, res) => {
//      res.send('Welcome to my about page')
// })
// app.get("/contact", (req, res) => {
//      res.send('Welcome to my contact page')
// })


// app.get("/", (req, res)=>{
//      res.sendFile(path.join(process.cwd(), "CryptoSite", "index.html"))
// })
// app.get("/style.css", (req, res) => {
//      res.sendFile(path.join(process.cwd(), "CryptoSite", "style.css"))
// })


app.use("/", express.static(path.join(process.cwd(), "/CryptoSite")))



const port = 5050
app.listen(port, ()=>{
     console.log(`Server running on http://localhost:${port}`);
})