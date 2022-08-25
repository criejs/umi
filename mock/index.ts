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
      { id: 1, name: 'foo', gender: 0},
      { id: 2, name: 'bar2', gender: 0},
      { id: 3, name: 'bar3', gender: 1},
    ]),
  
    'POST /api/users/create': wrap('ok'),
     
    // 返回值也可以是对象形式
    'GET /api/users/select': wrap({ id: 1, name: 'foo', gender: 1 }),

    'POST /api/users/del': wrap('ok'),
    
    'POST /api/users/update': wrap('ok'),
  }