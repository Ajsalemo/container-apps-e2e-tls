from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return jsonify({"msg": "container-apps-e2e-tls-python"})
