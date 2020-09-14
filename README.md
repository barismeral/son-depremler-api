# TC AFAD Son Depremler API
## T.C. Afet ve Acil Durum Yönetimi Başkanlığı Deprem Dairesi Başkanlığı güncel Covid-19 verileri

###### Proje Çalışan hali heroku da tutulmaktadır.




#### GET isteği
    https://son-depremler.herokuapp.com/sondepremler

## Örnek Kullanımlar


## JavaScript
```javascript

    var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://son-depremler.herokuapp.com/sondepremler",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

```
## JavaScript AJAX
```javascript

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {

    console.log(this.responseText);
  }
});

xhr.open("GET", "https://son-depremler.herokuapp.com/sondepremler");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);

```


## node.js REQUEST
```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'https://son-depremler.herokuapp.com/sondepremler',
  headers: 
   { 
     'cache-control': 'no-cache'
   } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```

## PHP HTTPRequest
```php

<?php

$request = new HttpRequest();
$request->setUrl('https://son-depremler.herokuapp.com/sondepremler');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'cache-control' => 'no-cache'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}

```

## PHP CURL
```php

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://son-depremler.herokuapp.com/sondepremler",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: ed8a59f5-46d2-8926-983a-94e9cb85c5af"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

```
## Python 3
```python

import http.client

conn = http.client.HTTPSConnection("son-depremler.herokuapp.com")

headers = {
    'cache-control': "no-cache",
    'postman-token': "552dc67c-9a36-95bd-1a35-b73212f005a0"
    }

conn.request("GET", "/sondepremler", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

```


Örnek Çıktı:

```json
    [{"time":"14.09.2020 22:37:04","enlem":"37.3010","boylam":"26.8156","derinlik":"14.76","tip":"ML","buyukluk":"2.7","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Ege Denizi, 33.86 km. Didim (Aydin)"},{"time":"14.09.2020 21:14:48","enlem":"38.0331","boylam":"37.9086","derinlik":"7.02","tip":"ML","buyukluk":"2.3","ulke":"Türkiye","il":"Malatya","ilce":"Dogansehir","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 20:44:52","enlem":"37.9703","boylam":"37.9478","derinlik":"7.01","tip":"ML","buyukluk":"1.8","ulke":"Türkiye","il":"Malatya","ilce":"Dogansehir","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 17:37:33","enlem":"38.7593","boylam":"31.6070","derinlik":"7.01","tip":"ML","buyukluk":"2.0","ulke":"Türkiye","il":"Konya","ilce":"Yunak","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 17:36:41","enlem":"37.8078","boylam":"29.1240","derinlik":"7.00","tip":"ML","buyukluk":"1.7","ulke":"Türkiye","il":"Denizli","ilce":"Pamukkale","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 16:32:00","enlem":"39.0138","boylam":"27.8461","derinlik":"7.00","tip":"ML","buyukluk":"1.5","ulke":"Türkiye","il":"Manisa","ilce":"Akhisar","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 15:23:09","enlem":"39.5160","boylam":"45.5005","derinlik":"6.65","tip":"ML","buyukluk":"2.3","ulke":"Ermenistan","il":"Vayots Dzor","ilce":"-","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 14:08:21","enlem":"36.9886","boylam":"28.7926","derinlik":"7.03","tip":"ML","buyukluk":"1.9","ulke":"Türkiye","il":"Mugla","ilce":"Köycegiz","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 13:49:40","enlem":"39.1396","boylam":"29.0340","derinlik":"7.00","tip":"ML","buyukluk":"1.3","ulke":"Türkiye","il":"Kütahya","ilce":"Simav","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 13:35:24","enlem":"38.3575","boylam":"38.6078","derinlik":"7.00","tip":"ML","buyukluk":"1.1","ulke":"Türkiye","il":"Malatya","ilce":"Battalgazi","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 13:12:42","enlem":"39.6278","boylam":"38.2220","derinlik":"6.93","tip":"ML","buyukluk":"1.6","ulke":"Türkiye","il":"Sivas","ilce":"Divrigi","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 12:47:37","enlem":"37.8043","boylam":"29.6453","derinlik":"6.97","tip":"ML","buyukluk":"1.3","ulke":"Türkiye","il":"Denizli","ilce":"Çardak","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 12:21:27","enlem":"36.8905","boylam":"31.4815","derinlik":"7.06","tip":"ML","buyukluk":"1.4","ulke":"Türkiye","il":"Antalya","ilce":"Manavgat","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 12:17:05","enlem":"38.3210","boylam":"38.0698","derinlik":"6.97","tip":"ML","buyukluk":"1.4","ulke":"Türkiye","il":"Malatya","ilce":"Akçadag","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 12:15:44","enlem":"38.9193","boylam":"23.9266","derinlik":"6.40","tip":"Mw","buyukluk":"3.9","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Ege Denizi, 21.12 km.Magnesia (Yunanistan), 200.66 km. Gökçeada (Çanakkale)"},{"time":"14.09.2020 12:14:18","enlem":"37.1783","boylam":"26.3870","derinlik":"6.21","tip":"ML","buyukluk":"2.4","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Ege Denizi, 73.07 km. Bodrum (Mugla)"},{"time":"14.09.2020 12:13:39","enlem":"40.8070","boylam":"41.4478","derinlik":"7.00","tip":"ML","buyukluk":"1.0","ulke":"Türkiye","il":"Artvin","ilce":"Yusufeli","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 12:08:16","enlem":"41.2390","boylam":"41.5596","derinlik":"7.00","tip":"ML","buyukluk":"1.0","ulke":"Türkiye","il":"Artvin","ilce":"Murgul","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 11:48:10","enlem":"37.6000","boylam":"29.1976","derinlik":"11.17","tip":"ML","buyukluk":"1.4","ulke":"Türkiye","il":"Denizli","ilce":"Tavas","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 11:10:56","enlem":"39.9186","boylam":"28.8081","derinlik":"6.91","tip":"ML","buyukluk":"1.6","ulke":"Türkiye","il":"Bursa","ilce":"Orhaneli","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 10:48:01","enlem":"40.3265","boylam":"27.3845","derinlik":"7.00","tip":"ML","buyukluk":"1.1","ulke":"Türkiye","il":"Çanakkale","ilce":"Biga","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 09:02:17","enlem":"40.1610","boylam":"33.9526","derinlik":"7.00","tip":"ML","buyukluk":"1.3","ulke":"Türkiye","il":"Kirikkale","ilce":"Delice","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 08:50:42","enlem":"36.9923","boylam":"28.5111","derinlik":"7.01","tip":"ML","buyukluk":"1.4","ulke":"Türkiye","il":"Mugla","ilce":"Ula","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 08:40:23","enlem":"39.2431","boylam":"27.2521","derinlik":"7.01","tip":"ML","buyukluk":"1.7","ulke":"Türkiye","il":"Izmir","ilce":"Bergama","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 08:33:34","enlem":"36.9130","boylam":"27.5216","derinlik":"7.00","tip":"ML","buyukluk":"1.2","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Ege Denizi, 6.03 km. Bodrum (Mugla)"},{"time":"14.09.2020 08:29:33","enlem":"36.9196","boylam":"27.5293","derinlik":"7.00","tip":"ML","buyukluk":"1.2","ulke":"Türkiye","il":"-","ilce":"-","mahalle":"-","bilgi":"Gokova Korfezi, 5.92 km. Bodrum (Mugla)"},{"time":"14.09.2020 08:20:39","enlem":"39.3893","boylam":"40.7598","derinlik":"7.03","tip":"ML","buyukluk":"2.0","ulke":"Türkiye","il":"Bingöl","ilce":"Karliova","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 08:04:54","enlem":"38.5961","boylam":"41.8700","derinlik":"7.00","tip":"ML","buyukluk":"1.1","ulke":"Türkiye","il":"Mus","ilce":"Hasköy","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 07:58:37","enlem":"38.7305","boylam":"41.9733","derinlik":"13.22","tip":"ML","buyukluk":"2.4","ulke":"Türkiye","il":"Mus","ilce":"Korkut","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 07:54:50","enlem":"35.7693","boylam":"26.2530","derinlik":"29.21","tip":"ML","buyukluk":"2.0","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Ege Denizi, 50.46 km.Lasithi (Yunanistan), 142.41 km. Datça (Mugla)"},{"time":"14.09.2020 07:28:13","enlem":"34.9230","boylam":"25.7728","derinlik":"7.94","tip":"ML","buyukluk":"2.5","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Akdeniz, 8.50 km.Lasithi (Yunanistan), 242.63 km. Datça (Mugla)"},{"time":"14.09.2020 07:17:00","enlem":"38.4676","boylam":"43.9850","derinlik":"12.22","tip":"ML","buyukluk":"2.2","ulke":"Türkiye","il":"Van","ilce":"Gürpinar","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 07:01:13","enlem":"40.1900","boylam":"33.3693","derinlik":"7.00","tip":"ML","buyukluk":"1.2","ulke":"Türkiye","il":"Ankara","ilce":"Kalecik","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 07:00:47","enlem":"35.7908","boylam":"29.2326","derinlik":"7.13","tip":"ML","buyukluk":"2.0","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Akdeniz, 46.07 km. Kas (Antalya)"},{"time":"14.09.2020 05:59:11","enlem":"38.6855","boylam":"38.1051","derinlik":"7.01","tip":"ML","buyukluk":"1.9","ulke":"Türkiye","il":"Malatya","ilce":"Hekimhan","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 05:49:41","enlem":"38.2168","boylam":"38.6198","derinlik":"7.00","tip":"ML","buyukluk":"1.0","ulke":"Türkiye","il":"Malatya","ilce":"Pütürge","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 05:46:31","enlem":"39.4325","boylam":"33.1008","derinlik":"7.28","tip":"ML","buyukluk":"1.2","ulke":"Türkiye","il":"Ankara","ilce":"Bala","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 05:32:00","enlem":"37.5310","boylam":"35.9478","derinlik":"7.09","tip":"ML","buyukluk":"1.9","ulke":"Türkiye","il":"Adana","ilce":"Kozan","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 04:54:30","enlem":"38.9256","boylam":"43.5198","derinlik":"14.95","tip":"ML","buyukluk":"1.4","ulke":"Türkiye","il":"Van","ilce":"Tusba","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 04:53:07","enlem":"34.9416","boylam":"25.8543","derinlik":"6.41","tip":"ML","buyukluk":"2.6","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Akdeniz, 7.36 km.Lasithi (Yunanistan), 236.64 km. Datça (Mugla)"},{"time":"14.09.2020 04:46:07","enlem":"38.5165","boylam":"31.3871","derinlik":"8.05","tip":"ML","buyukluk":"1.2","ulke":"Türkiye","il":"Konya","ilce":"Aksehir","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 04:43:17","enlem":"40.8516","boylam":"36.0315","derinlik":"7.00","tip":"ML","buyukluk":"1.5","ulke":"Türkiye","il":"Samsun","ilce":"Ladik","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 04:24:02","enlem":"39.0776","boylam":"27.5190","derinlik":"7.01","tip":"ML","buyukluk":"1.6","ulke":"Türkiye","il":"Manisa","ilce":"Soma","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 03:53:05","enlem":"36.8025","boylam":"26.6965","derinlik":"12.23","tip":"ML","buyukluk":"2.0","ulke":"-","il":"-","ilce":"-","mahalle":"-","bilgi":"Ege Denizi, 48.62 km. Bodrum (Mugla)"},{"time":"14.09.2020 03:31:09","enlem":"38.1808","boylam":"38.6376","derinlik":"7.01","tip":"ML","buyukluk":"1.6","ulke":"Türkiye","il":"Malatya","ilce":"Pütürge","mahalle":"-","bilgi":"-"},{"time":"14.09.2020 03:06:48","enlem":"38.9270","boylam":"43.5261","derinlik":"14.30","tip":"ML","buyukluk":"3.2","ulke":"Türkiye","il":"Van","ilce":"Tusba","mahalle":"-","bilgi":"-"}]
```