import Mock from 'mockjs'

Mock.mock(/\/api\/getNewsList/, {
  'newsList|5': [{
    url: 'https://www.baidu.com',
    'title': '@ctitle(5, 20)'
  }]
})

Mock.mock(/\/api\/getOrderId/,{
  status: '@boolean',
  'orderId|7': /[a-zA-Z0-9]/,
})

Mock.mock(/\/api\/getSlides/, [{
    src: require('../src/assets/slideShow/pic1.jpg'),
    title: 'xxx1',
    href: 'detail/count'
  },
  {
    src: require('../src/assets/slideShow/pic2.jpg'),
    title: 'xxx2',
    href: 'detail/forecast'
  },
  {
    src: require('../src/assets/slideShow/pic3.jpg'),
    title: 'xxx3',
    href: 'detail/analysis'
  },
  {
    src: require('../src/assets/slideShow/pic4.jpg'),
    title: 'xxx4',
    href: 'detail/publish'
  }
])

Mock.mock(/\/api\/getPrice/, {
  'number|1-100': 100
})

Mock.mock(/\/api\/createOrder/, 'number|1-100')

Mock.mock(/\/api\/getInOrderList/, {
  products: [
    {
      label: '数据统计',
      Id: 0
    },
    {
      label: '数据预测',
      Id: 1
    },
    {
      label: '流量分析',
      Id: 2
    },
    {
      label: '广告发布',
      Id: 3
    }
  ],
  tableHeads: [
    {
      label: '订单号',
      key: 'orderId'
    },
    {
      label: '购买产品',
      key: 'product'
    },
    {
      label: '版本类型',
      key: 'version'
    },
    {
      label: '有效时间',
      key: 'period'
    },
    {
      label: '购买日期',
      key: 'date'
    },
    {
      label: '数量',
      key: 'buyNum'
    },
    {
      label: '总价',
      key: 'amount'
    }
  ],
  list: [
    {
      orderId: "ddj123",
      product: "数据统计",
      version: "高级版",
      period: "1年",
      buyNum: 2,
      date: "2016-10-10",
      amount: "500元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    },
    {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
    },
    {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
    }
  ]
})

Mock.mock(/\/api\/getBoardList/, [{
    title: '开放产品',
    description: '开放产品是一款开放产品',
    id: 'car',
    toKey: 'analysis',
    saleout: false
  },
  {
    title: '品牌营销',
    description: '品牌营销帮助你的产品更好地找到定位',
    id: 'earth',
    toKey: 'count',
    saleout: false
  },
  {
    title: '使命必达',
    description: '使命必达快速迭代永远保持最前端的速度',
    id: 'loud',
    toKey: 'forecast',
    saleout: true
  },
  {
    title: '勇攀高峰',
    description: '帮你勇闯高峰，到达事业的顶峰',
    id: 'hill',
    toKey: 'publish',
    saleout: false
  }
])

Mock.mock(/\/api\/getProductList/, {
  products: {
    title: '产品展示',
    list: [{
        name: '列表展示',
        url: '/detail/list',
        hot: '@boolean',
        Id: 1
      },
      {
        name: '图形展示',
        url: '/detail/image',
        hot: '@boolean',
        Id: 2
      },
      {
        name: '效果展示',
        url: '/detail/effort',
        hot: '@boolean',
        Id: 3 
      },
      {
        name: '反正就是展示',
        url: '/detail/display',
        hot: '@boolean',
        Id: 4 
      }
    ]
  },
  app: {
    title: '手机应用类',
    last: true,
    list: [{
        name: '@ctitle(4)',
        url: '/detail/list',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '/detail/image',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '/detail/effort',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '/detail/display'
      }
    ]
  }
})

Mock.mock(/\/api\/getTableData/, {
  "total": 25,
  "list|25": [{
    "orderId": "@id",
    "product": "@ctitle(4)",
    "version": "@ctitle(3)",
    "period": "@integer(1,5)年",
    "buyNum": "@integer(1,8)",
    "date": "@date()",
    "amount": "@integer(100, 500)元"
  }]
})

Mock.mock(/\/api\/getInCount/, {
  buyTypes: [{
      label: "红色版",
      price: 500
    },
    {
      label: "绿色版",
      price: 500
    },
    {
      label: "紫色版",
      price: 500
    }
  ],
  districts: [{
      label: "北京",
      value: 2
    },
    {
      label: "上海",
      value: 2
    },
    {
      label: "广州",
      value: 2
    },
    {
      label: "天津",
      value: 1
    },
    {
      label: "武汉",
      value: 1
    },
    {
      label: "重庆",
      value: 1
    },
    {
      label: "其他",
      value: 1
    }
  ]
})

Mock.mock(/\/api\/getInAnalysis/, {
  versionList: [{
      label: '客户版',
      plusPrice: 0
    },
    {
      label: '代理商版',
      plusPrice: 100
    },
    {
      label: '专家版',
      plusPrice: 300
    }
  ],
  periodList: [{
      label: '半年',
      value: 0.5
    },
    {
      label: '一年',
      value: 1
    },
    {
      label: '三年',
      value: 3
    }
  ],
  buyTypes: [{
      label: '入门',
      price: 500
    },
    {
      label: '中级',
      price: 700
    },
    {
      label: '高级',
      price: 900
    }
  ]
})

Mock.mock(/\/api\/getInPublish/, {
  tradeList: [{
      label: "出版业",
      value: 1
    },
    {
      label: "媒体",
      value: 2
    },
    {
      label: "金融",
      value: 3
    },
    {
      label: "互联网",
      value: 2
    },
    {
      label: "游戏",
      value: 1
    }
  ],
  versionList: [{
      label: "初级版",
      price: 200
    },
    {
      label: "中级版",
      price: 400
    },
    {
      label: "高级版",
      price: 600
    },
    {
      label: "专家版",
      price: 800
    }
  ]
})

Mock.mock(/\/api\/getInForecast/, {
  versionList: [{
      label: "纸质报告",
      price: 110
    },
    {
      label: "pdf",
      price: 100
    },
    {
      label: "页面报告",
      price: 100
    },
    {
      label: "邮件",
      price: 100
    }
  ]
})

Mock.mock(/\/api\/getBankList/, [{
    id: 201,
    label: '招商银行',
    name: 'zhaoshang'
  },
  {
    id: 301,
    label: '中国建设银行',
    name: 'jianshe'
  },
  {
    id: 601,
    label: '浦发银行',
    name: 'pufa'
  },
  {
    id: 1101,
    label: '交通银行',
    name: 'jiaotong'
  },
  {
    id: 101,
    label: '中国工商银行',
    name: 'gongshang'
  },
  {
    id: 401,
    label: '中国农业银行',
    name: 'nongye'
  },
  {
    id: 1201,
    label: '中国银行',
    name: 'zhongguo'
  },
  {
    id: 501,
    label: '中信银行',
    name: 'zhongxin'
  }
])

Mock.mock(/\/api\/getLineChartList/, [
  {
    name: "一月",
    'value|30-75': 75
  },
  {
    name: "二月",
    'value|30-75': 75
  },
  {
    name: "三月",
    'value|30-75': 75
  },
  {
    name: "四月",
    'value|30-75': 75
  },
  {
    name: "五月",
    'value|30-75': 75
  },
  {
    name: "六月",
    'value|30-75': 75
  },
  {
    name: "七月",
    'value|30-75': 75
  },
  {
    name: "八月",
    'value|30-75': 75
  },
  {
    name: "九月",
    'value|30-75': 75
  },
  {
    name: "十月",
    'value|30-75': 75
  },
  {
    name: "十一月",
    'value|30-75': 75
  },
  {
    name: "十二月",
    'value|30-75': 75
  }
])

Mock.mock(/\/api\/getPieChartList/, [
  {
    name: "数据统计",
    'value|10-75': 75
  },
  {
    name: "数据预测",
    'value|10-75': 75
  },
  {
    name: "流量分析",
    'value|10-75': 75
  },
  {
    name: "广告发布",
    'value|10-75': 75
  },
  {
    name: "其他服务",
    'value|10-75': 75
  }
])
