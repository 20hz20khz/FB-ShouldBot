//
// This is main file containing code implementing the Express server and functionality for the Express echo bot.
//
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
var messengerButton = "<html><head><title>ShouldBot</title></head><body><table style='border:none;'><tr><td><img src=https://cdn.glitch.com/6478ad64-7b8e-489a-bb85-5786e2b63fd4%2FV7vzUW5r_400x400.jpg?1498972786235</td><td><h1>ShouldBot is a Facebook Messenger Bot</h1><p>When a user asks ShouldBot a 'this or that' question, it splits the text and randomly replies with either 'this' or 'that'</p><p><ul><li>Should I change my profile pic? Or keep it?</li><li>Should I dye my hair purple and blue or should I dye it green and red?</li><li>Just saw a mouse in my apartment. Should I name it Becky, Steve or Scamper????</li></ul></p><p>Send a 'this or that' question to ShouldBot: <a href='http://m.me/shouldbot'>m.me/shouldbot</a></p></td></tr></table><br/><p>-=-=-=-=-=-=-=-=-=-=-=-=-=- </p><br/><p>This is a bot based on Messenger Platform QuickStart. For more details, see their <a href=\"https://developers.facebook.com/docs/messenger-platform/guides/quick-start\">docs</a>.<p style=\"font-size:50% !important;\"><h5>Privacy Policy</h5>How We Collect and Use Information We collect the following types of information about you: Information you provide us directly: We may also retain any messages you send through the Service, and may collect information you provide in User Content you post to the Service. We use this information to operate, maintain, and provide to you the features and functionality of the Service. Your username and if you choose to disclose it, your real name, will NOT be published publicly. Information we may receive from third parties: We may receive information about you from third parties. For example, if you access our websites or Service through a third-party connection or log-in, for example, through Facebook Connect, by 'following,' 'liking,' adding the ShouldBot application, linking your account to the ShouldBot Service, etc., that third party may pass certain information about your use of its service to ShouldBot. This information could include, but is NOT limited to, the user ID associated with your account (for example, your Facebook UID), an access token necessary to access that service, any information that you have permitted the third party to share with us, and any information you have made public in connection with that service. If you allow us access to your friends list, your friends’ user IDs, and your connection to those friends, may be used and stored to make your experience more social, and to allow you to invite your friends to use our Service as well as provide you with updates if and when your friends join ShouldBot. You should always review, and if necessary, adjust your privacy settings on third-party websites and services before linking or connecting them to the ShouldBot Service. You may also unlink your third party account from the Service by adjusting your settings on the third party service. Inviting a friend to use ShouldBot: ShouldBot may, in its sole discretion, develop a feature that allows you to invite third parties to the Service. If you choose to use our invitation service to invite a third party to the Service through our 'Invite friends' feature, you may directly choose a friend to invite through your mobile device’s native contact list – but we do NOT require that you import your contacts list to the Service, and we do NOT retain the information contained in your contacts list. You understand that by inviting a friend to ShouldBot through the 'Invite friends' feature, you are directly sending a text or email from your personal accounts and that we are NOT storing your contact list. In addition, you understand and agree that normal carrier charges apply to communications sent from you phone. Since this invitation is coming directly from your email or phone, we do NOT have access to or control this communication. Finding your friends on the Service: ShouldBot does NOT have a 'Find friends' feature. Analytics information: We may directly collect analytics data, or use third-party analytics tools and services, to help us measure traffic and usage trends for the Service. These tools collect information sent by your browser or mobile device, including the pages you visit and other information that assists us in improving the Service. We collect and use this analytics information in aggregate form such that it cannot reasonably be manipulated to identify any particular individual user. Cookies information: ShouldBot does NOT create tracking cookies. Log file information: Log file information is NOT stored. Clear gifs/web beacons information: Clear gifs (also known as web beacons) which are used to anonymously track the online usage patterns of user are NOT used. Device identifiers: When you access the Service by or through a mobile device (including but NOT limited to smart-phones or tablets), we may access, but do NOT collect, monitor and/or remotely store one or more 'device identifiers,' such as a universally unique identifier ('UUID'). Device identifiers are small data files or similar data structures stored on or associated with your mobile device, which uniquely identify your mobile device. Location data: When you access the Service by or through a mobile device, we may access, but do NOT collect, monitor and/or remotely store 'location data,' which may include GPS coordinates (e.g. latitude and/or longitude) or similar information regarding the location of your mobile device. Commercial and marketing communications: We do NOT use the information we collect or receive, such as your email address, to communicate directly with you. Use of certain service type information we collect about you: We do NOT use cookies, log file, device identifiers, location data and clear gifs. Sharing of Your Information We will NOT rent or sell your information into third parties outside ShouldBot. Who can see your email address: If you enter an email address in a message, ShouldBot can access it but will NOT store it or sell it. What happens in the event of a change of control: We may buy or sell/divest/transfer the company (including any shares in the company), or any combination of its products, services, assets and/or businesses. Your information such as customer names and email addresses, User Content and other user information related to the Service may be among the items sold or otherwise transferred in these types of transactions. We may also sell, assign or otherwise transfer such information in the course of corporate divestitures, mergers, acquisitions, bankruptcies, dissolutions, reorganizations, liquidations, similar transactions or proceedings involving all or a portion of the company. Instances where we are required to share your information: ShouldBot will disclose your information where required to do so by law or subpoena or if we reasonably believe that such action is necessary to (a) comply with the law and the reasonable requests of law enforcement; (b) to enforce our Terms of Use or to protect the security, quality or integrity of our Service; and/or (c) to exercise or protect the rights, property, or personal safety of ShouldBot, our Users, or others. Sharing certain service type information we collect about you: We will NOT share service type information, including information obtained through tools such as cookies, log files, device identifiers, location data and clear gifs. Ads on ShouldBot: We do NOT post ads. The ShouldBot Privacy Policy does NOT apply to, and we cannot control the activities of third-parties. Please consult the respective privacy policies of such third parties or contact such third parties for more information. Compromise of information: In the event that any information under our control is compromised as a result of a breach of security, ShouldBot will take reasonable steps to investigate the situation and where appropriate, notify those individuals whose information may have been compromised and take other steps, in accordance with any applicable laws and regulations. Your Choices about Your Information: You control your account information and settings. Children’s Privacy ShouldBot does NOT knowingly collect or solicit any information from anyone under the age of 13 or knowingly allow such persons to register as Users. The Service and its content are NOT directed at children under the age of 13. In the event that we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. Links to Other Websites and Services We are NOT responsible for the practices employed by websites or services linked to or from the Service, including the information or content contained therein. Please remember that when you use a link to go from the Service to another website, our Privacy Policy does NOT apply to third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link or advertisement on our website, are subject to that third party’s own rules and policies. In addition, you agree that we are NOT responsible and we do NOT control over any third-parties that you authorize to access your User Content. If you are using a third-party website or service (like Facebook, Google groups, or an IRC chatroom) and you allow such a third-party access to your User Content you do so at your own risk. This Privacy Policy does NOT apply to information we collect by other means (including offline) or from other sources other than through the Service.</p><script src=\"https://button.glitch.me/button.js\" data-style=\"glitch\"></script><div class=\"glitchButton\" style=\"position:fixed;top:20px;right:20px;\"></div></body></html>";

// The rest of the code implements the routes for our Express server.
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Webhook validation
app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }
});


// Display the web page
app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(messengerButton);
  res.end();
});

// Message processing
app.post('/webhook', function (req, res) {
  console.log(req.body);
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {
    
    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else if (event.postback) {
          receivedPostback(event);   
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});

// Incoming events handling
function receivedMessage(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;

  console.log("Received message for user %d and page %d at %d with message:", 
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  if (messageText) {
    // If we receive a text message, check to see if it matches a keyword
    // and send back the template example. Otherwise, just echo the text we received.
    switch (messageText) {
      case 'generic': // case for a keyword
        sendGenericMessage(senderID);
        break;
        
      case 'Hello':
      case 'Hi':
      case 'Hey':
      case 'Hello.':
      case 'Hi.':
      case 'Hey.':
      case 'Hello?':
      case 'Hi?':
      case 'Hey?':
      case 'Hello!':
      case 'Hi!':
      case 'Hey!':
      case 'Hello...':
      case 'Hi...':
      case 'Hey...':
      case 'hello':
      case 'hi':
      case 'hey':
      case 'hello.':
      case 'hi.':
      case 'hey.':
      case 'hello?':
      case 'hi?':
      case 'hey?':
      case 'hello!':
      case 'hi!':
      case 'hey!':
      case 'hello...':
      case 'hi...':
      case 'hey...':
      case 'HELLO':
      case 'HI':
      case 'HEY':
        sendHelloMessage(senderID);
        break;
        

      default:
        var lowerMessageText = messageText.toLowerCase(); // make it lowercase, because strpos() is faster than stripos()
        
        var randomReply = new Array;
        
        if( lowerMessageText.indexOf(" or ") !== -1 ){// Continue only if the user message contains "or"
          console.log("contains 'or' /n");
          
          if(( lowerMessageText.indexOf("kill") == -1 )// Continue only if the tweet does NOT contain these blacklisted words
            && (lowerMessageText.indexOf("suicide") == -1 )
	          &&( lowerMessageText.indexOf("die") == -1 )){
            console.log("not blacklisted /n");
            
            if( lowerMessageText.indexOf(", or ") !== -1 ){// Remove Oxford commas. Convert ", or " to " or "
						lowerMessageText = lowerMessageText.replace(", or "," or ");
            }
            
            if( lowerMessageText.indexOf(", ") !== -1 ){// Convert ", " to " or "
						lowerMessageText = lowerMessageText.replace(", "," or ");
            }
            
            if( lowerMessageText.indexOf("?") !== -1 ){// Convert "?" to ""
	  				lowerMessageText = lowerMessageText.replace("?","");
            }
            
            if( lowerMessageText.indexOf(".") !== -1 ){// Convert "." to ""
	    			lowerMessageText = lowerMessageText.replace(".","");
            }
            
            if( lowerMessageText.indexOf("!") !== -1 ){// Convert "!" to ""
	    			lowerMessageText = lowerMessageText.replace("!","");
            }
            
            var potentialReplyArray = lowerMessageText.split(" or ");// Convert to array, splitting at " or "
            
            
            var randomReplyOption = new Array;
            for (var i = 0, len = potentialReplyArray.length; i < len; i++) { /// loop thru each potential reply
              randomReplyOption = potentialReplyArray[i];
              
              randomReplyOption = randomReplyOption.trim();// Removes whitespace from both ends of a string
              
              if( randomReplyOption.indexOf(" my") !== -1 ){// Replace " my" with " your"
							randomReplyOption = randomReplyOption.replace(" my"," your");
						  }else if ( randomReplyOption.indexOf("your") !== -1 ){// If there is no " my", replace "your" with "my"
							randomReplyOption = randomReplyOption.replace("your","my");
              }
              
              if( randomReplyOption.indexOf(" me ") !== -1 ){// Replace " me " with " you "
							randomReplyOption = randomReplyOption.replace(" me "," you ");
						  }else if( randomReplyOption.indexOf(" you ") !== -1 ){// If there is no " me ", replace " you " with " me "
							randomReplyOption = randomReplyOption.replace(" you "," I ");
              }
              
              if( randomReplyOption.indexOf(" u ") !== -1 ){// Replace " u " with " me "
							randomReplyOption = randomReplyOption.replace(" u "," I ");
              }
              
              if( randomReplyOption.indexOf("should i ") !== -1 ){// Replace "should i " with "you should ".
	            randomReplyOption = randomReplyOption.replace("should i ","you should ");
              }
              
              if( randomReplyOption.indexOf("i should ") !== -1 ){// Replace "i should " with "you should ".
		          randomReplyOption = randomReplyOption.replace("i should ","you should ");
              }
              
              if( randomReplyOption.indexOf("should I ") !== -1 ){// Replace "should I " with "I should ".
		          randomReplyOption = randomReplyOption.replace("should I ","I should ");
              }
              
              if( randomReplyOption.indexOf("will i") !== -1 ){// Replace "will i" with "you will"
	            randomReplyOption = randomReplyOption.replace("will i","you will");
              }

						  if( randomReplyOption.indexOf(" i ") !== -1 ){// Replace " i " with " you "
							randomReplyOption = randomReplyOption.replace(" i "," you ");
              }

						  if( randomReplyOption.indexOf("is it") !== -1 ){// Replace "is it" with "it is"
							randomReplyOption = randomReplyOption.replace("is it","it is");
              }

						  if( randomReplyOption.indexOf("is that") !== -1 ){// Replace "is that" with "that is"
							randomReplyOption = randomReplyOption.replace("is that","that is");
              }

						  if( randomReplyOption.indexOf("should we ") !== -1 ){// Replace "should we " with "you should "
							randomReplyOption = randomReplyOption.replace("should we ","you should ");
              }

						  if( randomReplyOption.indexOf("would that") !== -1 ){// Replace "would that" with "that would"
							randomReplyOption = randomReplyOption.replace("would that","that would");
              }

						  if( randomReplyOption.indexOf(" here ") !== -1 ){
                randomReplyOption = randomReplyOption.replace(" here "," there ");// Replace " here " with " there "
              }
	            if( randomReplyOption.indexOf(" this ") !== -1 ){// Replace " this " with " that "
                randomReplyOption = randomReplyOption.replace(" this "," that ");

              }

              if( randomReplyOption.length > 0 ){
                randomReply.push(randomReplyOption); // add each option as a potential randomReply
                console.log("pushed randomReplyOption "+randomReply.length+" /n");
              }
              else{
                console.log("invalid reply option /n");
              }
              
    				}// Loop back to replace stuff for each randomReplyOption
              
            console.log("everyday i'm shuffling /n");
            //randomReply.sort(function(a, b){return 0.5 - Math.random()});// Shuffle the random reply
            //potentialReplyArray.sort(function(a, b){return 0.5 - Math.random()});
            
            //messageText = randomReply.length;
            //messageText = randomReply.pop();
            //messageText = potentialReplyArray.pop();
            messageText = randomReply[Math.floor( Math.random() * randomReply.length )];
            console.log("success messageText: "+messageText+" /n");
            
          }
        }
        else{ // if the user message DOES NOT contains "or"
          console.log("no OR in message /n");
          randomReply = ["Make sure you include the word 'OR' in your message",
                         "Sorry, but I didn't see the word 'OR'","Could not find the word 'OR' in your message",
                         "Send a 'this or that' question to ShouldBot",
                         "When a user asks ShouldBot a 'this or that' question, it splits the text and randomly replies with either 'this' or 'that'",
                         "Missing 'OR' in message. Try this: Should I stay or should I go?",
                         "Couldn't find 'OR' in message. Try this: Pizza or burgers",
                         "'OR' not found. Try this: Should I drink Coke or Pepsi",
                         "Missing 'OR' in text. Try this: The Beatles or The Rolling Stones",
                         "No 'OR' found. Try this: Should I change my profile pic or keep it?",
                         "Missing 'OR' in message. Try this: Friends or Seinfeld?",
                         "Couldn't find 'OR' in message. Try this: The Brady Bunch or The Partridge Family",
                         "'OR' not found. Try this: Marvel or DC",
                         "Missing 'OR' in text. Try this: Elvis or Johnny Cash",
                         "No 'OR' found. Try this: Should I drink coffee or tea?",
                         "Missing 'OR' in message. Try this: Heads or Tails",
                         "Couldn't find 'OR' in message. Try this: OSU or Michigan",
                         "'OR' not found. Try this: Ford or Chevy"
                        ];
          messageText = randomReply[Math.floor( Math.random() * randomReply.length )];
          console.log("no OR messageText: "+messageText);
        }
        
        sendTextMessage(senderID, messageText); // send response
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, "Message with attachment received");
  }
}

function receivedPostback(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfPostback = event.timestamp;

  // The 'payload' param is a developer-defined field which is set in a postback 
  // button for Structured Messages. 
  var payload = event.postback.payload;

  console.log("Received postback for user %d and page %d with payload '%s' " + 
    "at %d", senderID, recipientID, payload, timeOfPostback);

  // When a postback is called, we'll send a message back to the sender to 
  // let them know it was successful
  sendTextMessage(senderID, "Postback called");
}

//////////////////////////
// Sending helpers
//////////////////////////
function sendTextMessage(recipientId, messageText) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
}

function sendHelloMessage(recipientId){
  // Hello! ShouldBot is a Facebook Messenger Bot<p>When a user asks ShouldBot a 'this or that' question, it splits the text and randomly replies with either 'this' or 'that'</p><p><ul><li>Should I change my profile pic? Or keep it?</li><li>Should I dye my hair purple and blue or should I dye it green and red?</li><li>Just saw a mouse in my apartment. Should I name it Becky, Steve or Scamper????</li></ul></p><p>Send a 'this or that' question to ShouldBot:
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [{
            title: "ShouldBot is a Facebook Messenger Bot",
            subtitle: "Ask a 'this or that' question & it replies with either 'this' or 'that'",
            item_url: "https://shouldbot.glitch.me/",               
            image_url: "https://cdn.glitch.com/6478ad64-7b8e-489a-bb85-5786e2b63fd4%2FV7vzUW5r_400x200.jpg?1498973383205"
            
            
          }]
        }
      }
    }
  };  

  callSendAPI(messageData);
}

function sendGenericMessage(recipientId) { // If the user sends keyword "generic" then reply with this
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [{
            title: "rift",
            subtitle: "Next-generation virtual reality",
            item_url: "https://www.oculus.com/en-us/rift/",               
            image_url: "http://messengerdemo.parseapp.com/img/rift.png",
            buttons: [{
              type: "web_url",
              url: "https://www.oculus.com/en-us/rift/",
              title: "Open Web URL"
            }, {
              type: "postback",
              title: "Call Postback",
              payload: "Payload for first bubble",
            }],
          }, {
            title: "touch",
            subtitle: "Your Hands, Now in VR",
            item_url: "https://www.oculus.com/en-us/touch/",               
            image_url: "http://messengerdemo.parseapp.com/img/touch.png",
            buttons: [{
              type: "web_url",
              url: "https://www.oculus.com/en-us/touch/",
              title: "Open Web URL"
            }, {
              type: "postback",
              title: "Call Postback",
              payload: "Payload for second bubble",
            }]
          }]
        }
      }
    }
  };  

  callSendAPI(messageData);
}

function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s", 
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });  
}

// Set Express to listen out for HTTP requests
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port %s", server.address().port);
});