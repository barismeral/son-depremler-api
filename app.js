var express = require('express');
var request = require("request");
var app = express();

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Content-Type', 'application/json');
    next();
});


//getrequest
app.get('/sondepremler', (req, res) => {

    var options = { method: 'POST',
      url: 'https://deprem.afad.gov.tr/latestCatalogsList',
      headers: 
       { 
         'header-to-cache': 'm_0utc_0lastDay_1',
         'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      formData: { m: '0', utc: '0', lastDay: '1', page: '0' } };
    
    request(options, function (error, response, body) {
      if (error) console.error(error)
    
      body = JSON.parse(body);

      let json = body.map(obj =>{
         return{

              "zaman":obj.time,
              "enlem":obj.lat,
              "boylam":obj.lon,
              "derinlik":obj.depth,
              "tip":obj.type,
              "buyukluk":obj.m,
              "ulke":obj.country,
              "il":obj.city,
              "ilce":obj.district,
              "mahalle":obj.town,
              "bilgi":obj.other

      }
    });

    
      res.status(200).end(JSON.stringify(json));
     
    });
    

});



//app start
app.listen(process.env.PORT || 5000,()=>console.log("server start"));


module.exports = app;
