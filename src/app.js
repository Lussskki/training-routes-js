import express from 'express'
import firstRoute from './routes/first-route.js'
import secondRoute from './routes/second-route.js'
const app = express()

//middleware
app.use(express.json())
//route
app.use('/first', firstRoute)
app.use('/second', secondRoute)

app.listen(3000,()=>{
    console.log('Connected')
})
