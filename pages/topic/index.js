Page({
  data: {
    navList: [{
        id: 1,
        title: '公司注册',
        front_name: "公司注册",
        wap_banner_url: 'http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png',
        subCategoryList: [{
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
        id: 2,
        title: '财税服务',
        front_name: "财税服务",
        wap_banner_url: 'http://yanxuan.nosdn.127.net/547853361d29a37282f377b9a755dd37.png',
        subCategoryList: [{
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
        id: 3,
        title: '工商服务',
        front_name: "工商服务",
        wap_banner_url: 'http://yanxuan.nosdn.127.net/fb670ff3511182833e5b035275e4ac09.png',
        subCategoryList: [{
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
        id: 4,
        title: 'IT/软件',
        front_name: "IT/软件",
        wap_banner_url: 'http://yanxuan.nosdn.127.net/1706e24a5e605870ba3b37ff5f49aa18.png',
        subCategoryList: [{
          img: 'http://www.hzqy168.cn/uploadFiles/uploadImgs/2020/05/13/002020051312061734288.gif',
          title: '网站建设',
          desc: '专业领域，一站服务'
        }, ]
      },
      {
        id: 5,
        title: '知识产权',
        front_name: "知识产权",
        wap_banner_url: 'http://yanxuan.nosdn.127.net/3708dbcb35ad5abf9e001500f73db615.png',
        subCategoryList: [{
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

      },
    ],
    categoryList: [],
    currentCategory: {},
  },
  onLoad: function (options) {
    this.setData({
      currentCategory: this.data.navList[0]
    });
  },
  switchCate: function (event) {
    var currentTarget = event.currentTarget;
    if (this.data.currentCategory.id == currentTarget.dataset.id) {
      return false;
    }

    let findItem = this.data.navList.find(item => {
      return item.id === currentTarget.dataset.id
    })
    this.setData({
      currentCategory: findItem
    })
  }
})