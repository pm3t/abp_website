import http.server
import socketserver
import json
import os
from datetime import datetime

PORT = 8085
LEADS_FILE = 'assets/leads.json'

if not os.path.exists('assets'):
    os.makedirs('assets')

if not os.path.exists(LEADS_FILE):
    with open(LEADS_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f)

class ABPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/submit':
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length)
                submission = json.loads(post_data.decode('utf-8'))
                
                # Add precise timestamp if not present
                submission['timestamp'] = datetime.now().strftime('%d-%m-%Y %H:%M:%S WIB')
                submission['id'] = 'LEAD-' + datetime.now().strftime('%Y%m%d%H%M%S')
                submission['target_email'] = 'anugerahbaktiprima@gmail.com'
                
                # Append to assets/leads.json
                leads = []
                if os.path.exists(LEADS_FILE):
                    try:
                        with open(LEADS_FILE, 'r', encoding='utf-8') as f:
                            leads = json.load(f)
                    except Exception:
                        leads = []
                
                leads.insert(0, submission)
                
                with open(LEADS_FILE, 'w', encoding='utf-8') as f:
                    json.dump(leads, f, indent=2, ensure_ascii=False)
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                
                response = {
                    'status': 'success',
                    'message': 'Lead berhasil dicatat dengan timestamp!',
                    'lead': submission,
                    'total_leads': len(leads)
                }
                self.wfile.write(json.dumps(response, ensure_ascii=False).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    def do_GET(self):
        if self.path == '/api/leads':
            self.send_response(200)
            self.send_header('Content-type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            if os.path.exists(LEADS_FILE):
                with open(LEADS_FILE, 'r', encoding='utf-8') as f:
                    self.wfile.write(f.read().encode('utf-8'))
            else:
                self.wfile.write(b'[]')
        else:
            super().do_GET()

print(f"✅ Server ABP & Lead Logger aktif di http://localhost:{PORT}")
with socketserver.TCPServer(("", PORT), ABPRequestHandler) as httpd:
    httpd.serve_forever()
