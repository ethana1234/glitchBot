var CONSUMER_KEY = 'Dt6AFWtQHc9BaCgrEQDTe5YwN',
    CONSUMER_SECRET = 'NTvkWVOf8kZlf6RR3VMSPsomaoQYybbgIAWg8kh5XDFuMMPppx',
    ACCESS_TOKEN = '1052252249093623808-f82Ee9WYzC8SFOeGfdFMmUEY2qwvHK',
    ACCESS_TOKEN_SECRET = 'ZaSF4J0NnesGjLjZxuD915YRg2MChW2SiImumujwlHKmj',
    Twit = require('twit'),
    config = {
    /* Be sure to update the .env file with your API keys. See how to get them: https://botwiki.org/tutorials/how-to-create-a-twitter-app */
      twitter: {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
        access_token: ACCESS_TOKEN,
        access_token_secret: ACCESS_TOKEN_SECRET
      }
    },
    T = new Twit(config.twitter);

//-------------------------------------------------------------------------------------------------------------//
// Send Direct Message
  T.post("direct_messages/events/new", {event: {type: "message_create", message_create: {target: {recipient_id: "1089441422"}, message_data: {text: "Hello Ethan!"}}}}, function(err, data, response) {
    if (err){
      console.error('error!', err);
    }
    else{
      console.log('success');
    }
  });
