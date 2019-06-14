const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "pages/index/index",
            "iconPath": "icon/home.png",
            "selectedIconPath": "icon/home_select.png",
            "text": "首页"
          },
          {
            "pagePath": "pages/question/index",
            "iconPath": "icon/question.png",
            "selectedIconPath": "icon/question_select.png",
            "text": "题库"
          },
          {
            "pagePath": "pages/center/index",
            "iconPath": "icon/like_red.png",
            "isSpecial": true
          },
          {
            "pagePath": "pages/msg/index",
            "iconPath": "icon/msg.png",
            "selectedIconPath": "icon/msg_select.png",
            "text": "消息"
          },
          {
            "pagePath": "pages/my/index",
            "iconPath": "icon/my.png",
            "selectedIconPath": "icon/my_select.png",
            "text": "我的"
          },
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})