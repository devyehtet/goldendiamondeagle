"""Download original images using their recorded URLs; never invent larger sizes."""
import concurrent.futures,json,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[1]
def download(item):
 url,local=item;target=root/'public'/local.lstrip('/');target.parent.mkdir(parents=True,exist_ok=True)
 if target.exists() and target.stat().st_size:return {'path':local,'success':True,'cached':True}
 result=subprocess.run(['curl','-fLsS','--max-time','60','--retry','2',url,'-o',str(target)],capture_output=True)
 return {'path':local,'success':result.returncode==0,'cached':False}
assets=json.loads((root/'content/asset-sources.json').read_text())
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(download,assets.items()))
(root/'content/download-report.json').write_text(json.dumps(results,indent=2))
failed=[r['path'] for r in results if not r['success']]
print(f'{len(results)-len(failed)}/{len(results)} assets available. Failed: {failed}')
if failed:raise SystemExit(1)
