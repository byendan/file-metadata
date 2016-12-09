var express = require('express')
var app = express()
var multer  = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var type = upload.single('temp')

app.get('/',function(req,res){
      res.sendFile(__dirname + "/views/index.html");
});

app.post('/api/get-byte-size', function(req, res) {
    type(req,res,function(err) {
        if(err) throw err 
        var return_size = {
            "size": req.file.size
        }
        res.send(return_size);
    });
})

app.listen((process.env.PORT || 8080), function () {
  console.log('Server is up and running!')
})