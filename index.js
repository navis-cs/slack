'use strict'; 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
const server = app.listen(3000, () => { console.log('Express server listening on port %d in %s mode', server.address().port,   app.settings.env);});

app.post('/', (req, res) => { 
  let text = req.body.text; 
  // implement your bot here ... 
  
  if(! /Paul/i.test(text)) {
let paul = { 
  //ephemeral vs in_channel
  //response_type: 'in_channel', // public to the channel 
  //response_type: 'ephemeral', is private message only [default] 
  text: 'If Lunch == Now AND Paul', 
  attachments:[ { 
	image_url: 'https://images.unsplash.com/photo-1513516038331-edd53912f959?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91a7d9c0b2af79e6a3d6bb3bf17e4b94&auto=format&fit=crop&w=750&q=80' 
	//image_url: 'https://as1.ftcdn.net/jpg/00/88/86/58/500_F_88865880_tq69MixGMndOQIj1F5EPfkwIxEq60Ffj.jpg'
    //image_url: 'https://http.cat/302.jpg' 
  } ]}; 
res.json(paul); 
 return; 
}


 if(! /now/i.test(text)) {
  res.send('U R NOT DOING IT PROPERLY. Goto lunch now or shut up!');   
  return; 
 
let now = { 
  //ephemeral vs in_channel
  //response_type: 'in_channel', // public to the channel 
  //response_type: 'ephemeral', is private message only [default] 
  text: 'If Lunch == Now', 
  attachments:[ { 
	//image_url: 'https://images.unsplash.com/photo-1513516038331-edd53912f959?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91a7d9c0b2af79e6a3d6bb3bf17e4b94&auto=format&fit=crop&w=750&q=80' 
	image_url: 'https://as1.ftcdn.net/jpg/00/88/86/58/500_F_88865880_tq69MixGMndOQIj1F5EPfkwIxEq60Ffj.jpg'
    //image_url: 'https://http.cat/302.jpg' 
  } ]}; 
res.json(now);
return;
}
});
