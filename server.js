const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 4001;

app.use('/product-catalog', express.static('ui/webapp'));

app.use('/sap/opu/odata/ALK/PRD_CATALOG_SRV_CDS', createProxyMiddleware({
  target: 'http://saps4p.kryptinc.com:8001/',
  changeOrigin: true,
  pathRewrite: {
    '^/sap/opu/odata/ALK/PRD_CATALOG_SRV_CDS': '/sap/opu/odata/ALK/PRD_CATALOG_SRV_CDS',
  }
}));

app.listen(port, () => {
  console.log(`Local server running at http://localhost:${port}`)
})