## Trends

This won't work without the mysql database setup in the background, but it uses the keywords found on IMDB to visualize trends in movie themes over time.

Django makes a call to the database, and then passes it to d3, which makes a bar chart. This is done dynamically for each keyword as a front-end user visits url.com/trends/KEYWORD.