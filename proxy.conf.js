const proxy = [
  {
    context: '/api',
    target: 'http://backend:3000',
    "changeOrigin" : true,
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
