
// export default noProxy ? {} : delay(proxy, 1000);
export default {
  '/api/*': 'http://localhost:8001',
  '/sms/*': 'http://10.10.232.242:9000'
};
