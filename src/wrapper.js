import criticalStyles from '!raw!../critical.css'

export default function ({ html }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Zach Green</title>
  <script>
    (function() {
      if ((window.location.host === 'localhost:8080' && -1 !== window.location.search.indexOf('renderCritical')) || window.location.host !== 'localhost:8080') {
        var style = document.createElement('style')
        style.innerHTML = '${criticalStyles}'
        document.getElementsByTagName('head')[0].appendChild(style)
      }
    }())
  </script>
  <noscript>
    <style>${criticalStyles}</style>
  </noscript>
</head>
<body>
  <div id="app">${html}</div>
  <script>
    (function() {
      var script = document.createElement('script');
      script.src = document.baseURI.indexOf('localhost:8080') !== -1
        ? 'http://localhost:8080/app.bundle.js'
        : '/app.bundle.js';
      document.body.appendChild(script);
    }())
  </script>
</body>
</html>
`
}
