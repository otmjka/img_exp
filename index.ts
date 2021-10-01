import svg2img from 'svg2img'
// @ts-ignore
import express from 'express'
const app = express()
const port = 3000

// @ts-ignore
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})