const http=require('http')

// create server Object
http.createServer((req,res)=>{
    res.write('Hello World')
    res.end()
})
.listen(5000,()=>console.log('Server Running...'))