//ajax请求函数模块

import axios from 'axios'

export default function ajax(url, data={}, type='GET') {

  //resolve和reject都是函数类型
  return new Promise(function (resolve, reject){
    //执行异步ajax请求
    let promise
    if(type === 'GET'){
      //准备url参数数据
      let dataStr
      Object.key(data).forEach(key => {
        dataStr += key + '=' +data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    }else{
      promise = axios.post(url, data)
    }

    promise.then(function (response){
      //成功了调用resolve
      resolve(response.data)
    }).catch(function (error){
      //失败了调用reject
      reject(error)
    })

  })
}
