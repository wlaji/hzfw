import utils from '../utils/util'
//获取首页信息
const getHomeInfo = function (data) {
    return utils.get('index/index', data)
}

const homeApi = {
    getHomeInfo
}

export default homeApi