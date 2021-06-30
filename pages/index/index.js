//获取应用实例
const app = getApp()
Page({
  data: {
    tabs: [],
    activeTab: 0,
    banner: [
      {
        id:'1',
        link:'',
        image_url:'/static/images/banner1.jpg'
      },
      {
        id:'2',
        link:'',
        image_url:'/static/images/banner2.jpg'
      },
      {
        id:'3',
        link:'',
        image_url:'/static/images/banner3.jpg'
      }
    ],
    brand:[
      {
        id:'1',
        desc:'和正成立于2019年，是一家以企业财税服务、顾问咨询为重点，集财税、商标、专利、网络、传媒为一体的现代化企业',
        image_url:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/18/192020051807060482645.png'
      },
      {
        id:'2',
        desc:'一年来已经成功服务多家企业，年服务次数超100次，且每季客户数据呈逐季递增，成为湖南最具潜质的新兴企业服务公司之一',
        image_url:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/18/192020051807573668590.png'
      },
      {
        id:'3',
        desc:'和正企业服务从创立之初至今，团队迅速发展，目前已有五大事业部，已有共计人数100+的专业服务团队。',
        image_url:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/18/202020051808030758290.png'
      }
    ]
  },
  onShareAppMessage: function () {
    return {
      title: '和正企业',
      desc: '和正企业',
      path: '/pages/index/index'
    }
  },
  onLoad: function (options) {
    const tabs = [
      {
        title: '公司注册',
        tabContent:[
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312061734288.gif',
            title:'内资公司注册',
            desc:'专业领域，一站服务'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312102341319.gif',
            title:'个体户注册',
            desc:'轻松注册，灵活经营'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312071176539.gif',
            title:'前海公司注册',
            desc:'抢占先机，开发市场'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312073672931.gif',
            title:'香港公司注册',
            desc:'拓展海外市场'
          }
        ]
      },
      {
        title: '财税服务',
        tabContent:[
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312140819845.gif',
            title:'代理记账',
            desc:'全程服务，可视化代理'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312143237122.gif',
            title:'一般纳税人',
            desc:'开具税票，减少风险'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312151525500.gif',
            title:'专项审计',
            desc:'提供资料，免费开户'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/21/232020052111034436854.gif',
            title:'进出口业务',
            desc:'放眼世界，触摸世界'
          }
        ]
      },
      {
        title: '工商服务',
        tabContent:[
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312081432008.gif',
            title:'公司注销',
            desc:'全程代办，省时省力'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312085682062.gif',
            title:'股权变更',
            desc:'提供资料，全程代办'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312094953332.gif',
            title:'地址变更',
            desc:'3-5天完成变更'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312111226641.gif',
            title:'经营范围变更',
            desc:'扩大经营，开拓业务'
          }
        ]
      },
      {
        title: 'IT/软件',
        tabContent:[
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312061734288.gif',
            title:'网站建设',
            desc:'专业领域，一站服务'
          },
        ]
      },
      {
        title: '知识产权',
        tabContent:[
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312120122520.gif',
            title:'专利申请',
            desc:'独占市场，技术保护'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312124693978.gif',
            title:'商标设计',
            desc:'标志设计，提升形象'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312132419974.gif',
            title:'商标注册',
            desc:'建立品牌，抢点市场'
          },
          {
            img:'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312134136613.gif',
            title:'商标延展',
            desc:'延续品牌，加强形象'
          }
        ]
      },
    ]
    this.setData({ tabs })
  },
  onTabClick(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },
  handleClick(e) {
    wx.navigateTo({
      url: './webview',
    })
  }
})