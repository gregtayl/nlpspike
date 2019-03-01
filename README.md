# NLP Spike

This is a spike application to test integration with LexNLP; an open source Legal-based Natural Language Processing (NLP) Python library developed by LexPredict. LexNLP is distributed under AGPL v3.0, though commerical licenses can also be purchased.

LexNLP:
- https://contraxsuite.com/lexnlp/
- https://github.com/LexPredict/lexpredict-lexnlp

ContraxSuite:
- https://contraxsuite.com/

To run locally, execute the following commands from the root project directory:
- docker-compose up --build

OR

- docker build -t nlpspike .
- docker run -p "8080:5000" nlpspike

For client development, the package.json file has been update to proxy all requests to localhost:8080, so you can use the webpack development server by running the following command from the ./client directory:
- yarn start
