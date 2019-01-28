import os
import sys
import lexnlp.extract.en.citations
from flask import Flask, jsonify, request, send_from_directory
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = os.environ.get('DB')
mongo = PyMongo(app)


ROOT_PATH = os.path.dirname(os.path.realpath(__file__))
os.environ.update({'ROOT_PATH': ROOT_PATH})
sys.path.append(os.path.join(ROOT_PATH, 'client'))
PUBLIC_PATH = os.path.join(ROOT_PATH, 'client/public')


@app.route('/')
def index():
    return send_from_directory(PUBLIC_PATH, 'index.html')


@app.route('/api/citations')
def api_citations():
    text = request.values.get('text')
    return jsonify(list(lexnlp.extract.en.citations.get_citations(text, as_dict=True)))


if __name__ == '__main__':
    app.run(host="0.0.0.0")
