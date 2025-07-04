import express from 'express'
import indexRoutes from './routes/index.routes.js' 
import employeesRoutes from './routes/employees.routes.js'

const app=express()

app.use(indexRoutes)
app.use(express.json())
app.use('/api',employeesRoutes)
app.use((req,res,next)=>{
    res.status(404).json({message:'endpoint not found'})
})

export default app