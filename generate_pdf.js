const fs = require('fs');
const cp = require('child_process');

try {
  // Install marked locally quickly
  console.log('Installing marked...');
  cp.execSync('npm install marked', { stdio: 'ignore' });
  
  const marked = require('marked');
  
  const mdContent = fs.readFileSync('FitTrack_AI_Project_Report.md', 'utf8');
  const bareHtml = marked.parse(mdContent);
  
  const fullHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>FitTrack AI - Project Report</title>
    <style>
      body {
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 40px;
        max-width: 800px;
        margin: 0 auto;
      }
      h1, h2, h3 { color: #111; }
      h1 { text-align: center; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 30px; }
      h2 { margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
      code { font-family: Consolas, monospace; background: #f4f4f4; padding: 2px 5px; border-radius: 4px; font-size: 0.9em; }
      pre { background: #f4f4f4; padding: 15px; border-radius: 6px; overflow-x: auto; }
      pre code { background: none; padding: 0; }
      .center { text-align: center; }
      hr { border: none; border-top: 1px solid #ccc; margin: 30px 0; }
      @media print {
        body { padding: 0; max-width: none; }
        h1, h2 { page-break-after: avoid; }
        pre, blockquote { page-break-inside: avoid; }
      }
    </style>
  </head>
  <body>
    ${bareHtml}
  </body>
  </html>
  `;
  
  fs.writeFileSync('report_temp.html', fullHtml);
  console.log('HTML created. Converting to PDF with Edge...');

  // Use Edge headless
  const edgePaths = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  
  let edgePath = edgePaths.find(fs.existsSync);
  if (!edgePath) {
    throw new Error('Microsoft Edge not found.');
  }

  const pdfPath = __dirname + '\\FitTrack_AI_Project_Report.pdf';
  const htmlPath = 'file:///' + __dirname.replace(/\\/g, '/') + '/report_temp.html';
  
  const cmd = `"${edgePath}" --headless --disable-gpu --print-to-pdf="${pdfPath}" "${htmlPath}"`;
  cp.execSync(cmd, { stdio: 'inherit' });
  
  console.log('PDF Generation Complete: ' + pdfPath);
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
