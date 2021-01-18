Front-end of HTN2021 Project: DasAMood
backend: https://github.com/boonboonsiri/htn21backend

Discord is a social media website that has become increasingly popular over the years, with over 100 million users as of 2020. Through daily conversations on social media, we were curious about how we conversed frequently. Did we mostly speak with a positive sentiment? A negative sentiment?

Dasamood is a discord bot that analyzes and tracks your sentiments (your positivity and negativity), over time through your messages. Tracking our mood can be very helpful for self-improvement but is also very tedious. Since much of our communication is online, especially now, tracking the messages we send is a good way to gauge out mood.

The front end is built in React.js and graphs with Chart.js. The backend api is a Django Rest Framework that uses the vadersentiment library to compute the sentiment scores. The discord bot uses Discord.py to periodically send user messages to the backend.
