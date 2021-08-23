//获取应用实例
const app = getApp()
import {
  getProfessionList,
  getGroupInfo
} from "../../api/home";
Page({
  data: {
    tabs: [],
    professionList: [],
    activeTab: 0,
    banner: [],
    traitData: [{
        name: "公司注册",
        url: "http://121.40.112.169:55505/file/image/static/202108/ef2ec8a7-7dd9-42ec-b06c-f3f4c181f16b.png"
      }, {
        name: "工商代办",
        url: "http://121.40.112.169:55505/file/image/static/202108/3704cdd0-83b2-4be9-8c31-3b1fb8f3950a.png"
      },
      {
        name: "公司注销",
        url: "http://121.40.112.169:55505/file/image/static/202108/08c4da5f-7fab-434b-93e6-27fa52a67a8b.png"
      },
      {
        name: "记账报税",
        url: "http://121.40.112.169:55505/file/image/static/202108/fd6df59c-c6bd-4c63-8c21-9b6f8a5062db.png"
      }, {
        name: "财税代理",
        url: "http://121.40.112.169:55505/file/image/static/202108/1450b10f-ef1a-45ce-b798-99556cd35870.png"
      }, {
        name: "验资审计",
        url: "http://121.40.112.169:55505/file/image/static/202108/fd6df59c-c6bd-4c63-8c21-9b6f8a5062db.png"
      }, {
        name: "食药医疗",
        url: "http://121.40.112.169:55505/file/image/static/202108/58a84dc0-1d6f-4365-a2b9-2df27e70caad.png"
      }, {
        name: "交通贸易",
        url: "http://121.40.112.169:55505/file/image/static/202108/ef2ec8a7-7dd9-42ec-b06c-f3f4c181f16b.png"
      }, {
        name: "增值电信",
        url: "http://121.40.112.169:55505/file/image/static/202108/7a505b08-b4e6-44f1-b41e-ba4b7807cb1c.png"
      }, {
        name: "人力劳务",
        url: "http://121.40.112.169:55505/file/image/static/202108/7a505b08-b4e6-44f1-b41e-ba4b7807cb1c.png"
      }, {
        name: "文化娱乐",
        url: "http://121.40.112.169:55505/file/image/static/202108/01acbeda-6bf0-45a3-9141-84d393e1fd67.png"
      }, {
        name: "网站建设",
        url: "http://121.40.112.169:55505/file/image/static/202108/08c4da5f-7fab-434b-93e6-27fa52a67a8b.png"
      }, {
        name: "技术服务",
        url: "http://121.40.112.169:55505/file/image/static/202108/0da198bb-960f-4715-80db-2121ba08bdc9.png"
      }, {
        name: "微信开发",
        url: "http://121.40.112.169:55505/file/image/static/202108/08c4da5f-7fab-434b-93e6-27fa52a67a8b.png"
      }, {
        name: "专利",
        url: "http://121.40.112.169:55505/file/image/static/202108/8f283a52-4cff-4360-b845-6c740c4aa9b1.png"
      }, {
        name: "更多",
        url: "http://121.40.112.169:55505/file/image/static/202108/eb70ea93-a952-4c1b-b515-21c53eed4b2e.png"
      }
    ],
    brand: [{
        id: '1',
        desc: '和正成立于2019年，是一家以企业财税服务、顾问咨询为重点，集财税、商标、专利、网络、传媒为一体的现代化企业',
        image_url: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/18/192020051807060482645.png'
      },
      {
        id: '2',
        desc: '一年来已经成功服务多家企业，年服务次数超100次，且每季客户数据呈逐季递增，成为湖南最具潜质的新兴企业服务公司之一',
        image_url: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/18/192020051807573668590.png'
      },
      {
        id: '3',
        desc: '和正企业服务从创立之初至今，团队迅速发展，目前已有五大事业部，已有共计人数100+的专业服务团队。',
        image_url: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/18/202020051808030758290.png'
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
    const tabs = [{
        title: '公司注册',
        tabContent: [{
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312061734288.gif',
            title: '内资公司注册',
            desc: '专业领域，一站服务'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312102341319.gif',
            title: '个体户注册',
            desc: '轻松注册，灵活经营'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312071176539.gif',
            title: '前海公司注册',
            desc: '抢占先机，开发市场'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312073672931.gif',
            title: '香港公司注册',
            desc: '拓展海外市场'
          }
        ]
      },
      {
        title: '财税服务',
        tabContent: [{
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312140819845.gif',
            title: '代理记账',
            desc: '全程服务，可视化代理'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312143237122.gif',
            title: '一般纳税人',
            desc: '开具税票，减少风险'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312151525500.gif',
            title: '专项审计',
            desc: '提供资料，免费开户'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/21/232020052111034436854.gif',
            title: '进出口业务',
            desc: '放眼世界，触摸世界'
          }
        ]
      },
      {
        title: '工商服务',
        tabContent: [{
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312081432008.gif',
            title: '公司注销',
            desc: '全程代办，省时省力'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312085682062.gif',
            title: '股权变更',
            desc: '提供资料，全程代办'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312094953332.gif',
            title: '地址变更',
            desc: '3-5天完成变更'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312111226641.gif',
            title: '经营范围变更',
            desc: '扩大经营，开拓业务'
          }
        ]
      },
      {
        title: 'IT/软件',
        tabContent: [{
          img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312061734288.gif',
          title: '网站建设',
          desc: '专业领域，一站服务'
        }, ]
      },
      {
        title: '知识产权',
        tabContent: [{
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312120122520.gif',
            title: '专利申请',
            desc: '独占市场，技术保护'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312124693978.gif',
            title: '商标设计',
            desc: '标志设计，提升形象'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312132419974.gif',
            title: '商标注册',
            desc: '建立品牌，抢点市场'
          },
          {
            img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312134136613.gif',
            title: '商标延展',
            desc: '延续品牌，加强形象'
          }
        ]
      }
    ]
    let professionList, bannerInfo
    getProfessionList().then(res => {
      console.log(res)
      professionList = res.data
      this.setData({
        professionList
      })
    })
    getGroupInfo({
      groupName: "websiteSettings"
    }).then(res => {
      console.log(res)
      bannerInfo = JSON.parse(res.data[2].keyValue)
      this.setData({
        banner: bannerInfo
      })
    })
    this.setData({
      tabs
    })
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
  openConfirm: function () {
    wx.navigateTo({
      url: '../submitInfo/index',
    })
  },
})