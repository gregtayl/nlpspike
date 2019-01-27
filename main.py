import lexnlp.extract.en.citations
from flask import Flask
app = Flask(__name__)


@app.route('/')
def index():
    text = "Based on the precedent set in Doe v.  Acme, 100 F.2d 234 (1999)"
    return str(list(lexnlp.extract.en.citations.get_citations(text)))


if __name__ == '__main__':
    app.run(debug=True)
