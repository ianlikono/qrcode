let express = require('express'),
app = express(),
QRCode = require('qrcode');
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.listen(app.get('port'),()=>
{
    console.log('Application is Running');
});
app.get('/espresso/drivethruui/qrcode/:content',async(req,res)=>
{
    let qrString = "";
    if (req.params.content)
        qrString = `REP0200${req.params.content}`
    res.setHeader('Content-Type', 'image/png');
    await QRCode.toFileStream(res, qrString, { version: 3 });
});