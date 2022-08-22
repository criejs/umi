const wrap = (data:any) => {
  return {
    code: 200,
    data: data,
    message: 'success',
  }
}
export default {
 
    // 返回值可以是数组形式
    'GET /api/users': wrap([
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' }
    ]),
   
    // 返回值也可以是对象形式
    'GET /api/users/1': { id: 1, name: 'foo' },

    'POST /api/users/create': (req, res) => {
        // 添加跨域请求头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
    }
   
  }