import { defineConfig } from 'vitepress'

const guideItems = [
  { text: '00 指南使用说明', link: '/docs/00_指南使用说明' },
  { text: '01 团队治理与协作', link: '/docs/01_团队治理与协作' },
  { text: '02 会议制度与任务管理', link: '/docs/02_会议制度与任务管理' },
  { text: '03 组长工作手册', link: '/docs/03_组长工作手册' },
  { text: '04 技术研发流程', link: '/docs/04_技术研发流程' },
  { text: '05 文档与知识沉淀规范', link: '/docs/05_文档与知识沉淀规范' },
  { text: '06 比赛材料与视频拍摄', link: '/docs/06_比赛材料与视频拍摄' },
  { text: '07 采购预算与报销', link: '/docs/07_采购预算与报销' },
  { text: '08 赛前赛中赛后流程', link: '/docs/08_赛前赛中赛后流程' },
  { text: '09 招新培训与考核', link: '/docs/09_招新培训与考核' },
  { text: '10 传承与交接', link: '/docs/10_传承与交接' },
  { text: '11 事故复盘与经验库', link: '/docs/11_事故复盘与经验库' }
]

const templateItems = [
  { text: '会议纪要模板', link: '/templates/会议纪要模板' },
  { text: '设计评审模板', link: '/templates/设计评审模板' },
  { text: '组长验收模板', link: '/templates/组长验收模板' },
  { text: '联调记录模板', link: '/templates/联调记录模板' },
  { text: '视频拍摄计划模板', link: '/templates/视频拍摄计划模板' },
  { text: '赛前检查表', link: '/templates/赛前检查表' },
  { text: '复盘报告模板', link: '/templates/复盘报告模板' },
  { text: '交接文档模板', link: '/templates/交接文档模板' },
  { text: '报销材料模板', link: '/templates/报销材料模板' }
]

export default defineConfig({
  title: 'RoboMaster 工作指南',
  description: '面向 RoboMaster 队伍传承的协作指南与模板库',
  lang: 'zh-CN',
  base: '/PRIME-Work-Guide/',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/docs/00_指南使用说明' },
      { text: '模板', link: '/templates/会议纪要模板' }
    ],
    sidebar: {
      '/docs/': [
        {
          text: '工作指南',
          items: guideItems
        }
      ],
      '/templates/': [
        {
          text: '模板库',
          items: templateItems
        }
      ]
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },
    socialLinks: []
  },
  lastUpdated: true
})
