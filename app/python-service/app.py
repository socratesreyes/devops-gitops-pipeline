import os
import threading
import time
from flask import Flask, jsonify

app = Flask(__name__)
WEB_PORT = int(os.getenv('WEB_PORT', 5000))
WORKER_PORT = int(os.getenv('WORKER_PORT', 5001))

def background_worker():
    print(f"Worker thread started on virtual port {WORKER_PORT}")
    while True:
        time.sleep(5)
        print(f"Worker heartbeat process running on port {WORKER_PORT}")

@app.route('/')
def home():
    return jsonify(status="running", web_port=WEB_PORT, worker_port=WORKER_PORT)

if __name__ == '__main__':
    thread = threading.Thread(target=background_worker, daemon=True)
    thread.start()
    print(f"Flask web server starting on port {WEB_PORT}")
    app.run(host='0.0.0.0', port=WEB_PORT)
