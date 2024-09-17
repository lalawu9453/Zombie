
var body = $response.body;

// We have not performed request link comparison.
var obj = JSON.parse(body);
// rewrite
// obj = JSON.parse(body);
// obj = JSON.parse($response.body);
obj.data.dev_goodsid = "com.megoogames.zombietw99";
body = JSON.stringify(obj);

$done({body});


$notification.post("Storm Sniffer","Network Debug Tool","FGR Get it!!!")

