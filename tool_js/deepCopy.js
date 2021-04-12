  // 测试数据
  let obj = {
    name: 'ziv',
    type: {
      age: 24,
      address: '陕西',
      obj: {
          name: 'spring',
          arr: []
      }
    },
    arr: [4,5,6],
    authority: {},
    emptyArr: []
  }

  //深拷贝
  function deepCopy(itemObj) {
    //是否存在
    if(!itemObj) {
        console.error('itemObj is not defined')
        return
    }
    //定义变量
    let deepObj = {};

    //是否为空
    if(Object.keys(itemObj).length <= 0) return deepObj

    //遍历对象
    for(let key in itemObj) {
      // 判断是否是对象
      if(typeof itemObj[key] === 'object') {
          if(Array.isArray(itemObj[key])) {
            deepObj[key] = [...itemObj[key]]
          } else {
            deepObj[key] = deepCopy(itemObj[key])
          }
      } else {
        deepObj[key] = itemObj[key]
      }
    }

    return deepObj
  }

  let obj2 = deepCopy(obj)
  obj2.name = 'ziv2'
  obj2.type.address = '陕西2'
  obj2.type.obj.name = 'spring2'
  obj2.type.obj.arr[0] = 'arr2'
  obj2.arr[2] = 100
  obj2.authority.user = 'admin'
  obj2.emptyArr[1] = 'emptyArr2'

  console.log(obj)
  console.log(obj2)