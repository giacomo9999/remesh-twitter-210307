This is an app that allows the user to query the the Twitter API and view the results in a browser window.

Here is how you install and run it:  

1. Navigate to the directory in which you wish to install the app. Type  
git clone https://github.com/giacomo9999/remesh-twitter-210307.git  
This will install the main project files--but NOT the NPM dependencies or the environmental variables necessary to run the app.

2. Navigate into the newly created remesh-twitter-210307 directory and type  
npm i  
to install the npm dependencies *for the Node Express server*.

3. While still in the remesh-twitter-210307 directory, type  
touch .env  
to create a file to hold the environmental variables. If you haven't already, go to the Developer section of Twitter.com, set up an account, and obtain an API Key, an API Secret Key, an Access Token, and an Access Token Secret. The .env file should look like the example below. (PORT is the port number the server will listen for requests on. If you change it for some reason, the variable userUrl in rt-client/src/App.js will also need to be changed to match it.)

PORT=8082  
API_KEY=Your API Key  
API_SECRET_KEY=Your API Secret Key  
ACCESS_TOKEN=Your Access Token  
ACCESS_TOKEN_SECRET=Your Access Token Secret  

4. Navigate into the rt-client directory and type   
npm i    
(again) to install the npm dependencies *for the React client*.  

5. While still in the rt-client directory, type  
npm run dev  
This will run the "dev" script, which launches the server and then the client. Because they are both running from the same command line, when you get done using the app you will need to type CTRL-C *twice* to kill *both* processes.

6. Using the app should be intuitive.  You enter a Twitter username and a number of tweets (N) in the input form and click on Submit. The browser should display a line graph of the data for the last N tweets of that user (displayed in reverse chronological order, with the newest ones on the left.) A good username to start with is the MIT Tech Review (techreview) with 20 or 30 tweets...Twitter users with large followings (e.g., katyperry) tend to be favorited and retweeted in HUGE numbers, which makes the "tweet length" line virtually flat.

--

Notes to the reviewer:    
1. To the best of my knowledge, I fulfilled 100% of the application and technical requirements--if I didn't, it's because I misunderstood something.      
2. The term "audience engagement" is of course open to interpretation. In the end I just decided to include two lines for "number of times favorited" and "number of times retweeted," which seemed a reasonable metric for measuring engagement.
3. The brief mentioned "number of hashtags," and I included a line for that statistic--even though it's almost always zero. I'm actually wondering if I misunderstood the question.  
4. The wildly variable popularity of people on Twitter, combined with the dynamic nature of the app, made it *really* hard to scale the graph correctly. I experimented with displaying the data logarithmically, so that Twitterers with followers in the millions could be analyzed visually easy easily as those with followers in the dozens--but it just didn't produce a result that seemed descriptive.  As I write this, it occurs to me that I could possibly display the number of retweets *divided by a user's total number of followers* which would probably produce a result that is more comprehensible visually.

Development notes:  

The business logic of the app was very easy to come up with. Most of the time spent on this was on three areas:  
1. I actually didn't realize at the start that Twitter's API, for whatever reason, doesn't support CORS--which (as far as I can tell) means it can't be queried directly from the client...it took me longer than I'd care to admit that I'd have to set up a back end to handle the API requests.  
2. I'd actually never used Recharts before (in fact, I'd never even heard of it), and it took a little time to get used to it.  I have to say it was *really* easy to figure out...quite a pleasant surprise.  
3. My answer to the question "is there any kind of correlation between tweet length and audience engagement" is "there doesn't seem to be." I spent quite a bit of time poking around in the response JSON trying to find properties that would show anything cool, and I can't say I really found anything.
4. The InputPanel component is using old-style state rather than the useState hook because it's salvaged from an early personal project. I realize that all the cool kids are using useState these days, but it seemed more important to focus my limited time on numbers 1-3 above.  

Thanks so much for giving me the opportunity to do this!  


