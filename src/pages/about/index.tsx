import React, { PropsWithChildren } from 'react'
import style from './styles.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

const Tag: React.FC<PropsWithChildren> = props => {
  return (
    <span className="inline-block rounded border bg-amber-500/10 text-amber-900 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-500 px-2 py-1 text-xs leading-none">
      {props.children}
    </span>
  )
}
const Index: NextPageWithCustomProps = () => {
  return (
    <div className={classNames('prose-container py-12', style.about)}>
      <h2>🎨 关于本站</h2>
      <p>Hello world</p>

      <h2>📜 本站历史</h2>
      <ul>
        <li>2022 - 至今，使用 Next.js 从零开发，部署在 Vercel</li>
        <li>2018 - 2022，初版使用 Hexo 搭建，部署在海外服务器</li>
      </ul>

      <h2>👶🏻 关于我</h2>
      <p>一个前端开发工程师（2017年 - 至今），目前从事于 toB 直播行业，我的技能 👇🏻</p>
      <div className="flex items-start flex-wrap gap-2">
        <Tag>React</Tag>
        <Tag>Vue2</Tag>
        <Tag>Angular2+</Tag>
        <Tag>TypeScript</Tag>
        <Tag>NodeJS</Tag>
        <Tag>Canvas</Tag>
        <Tag>WebRTC</Tag>
        <Tag>RxJS</Tag>
        <Tag>NestJS</Tag>
        <Tag>Next.js</Tag>
        <Tag>UmiJS</Tag>
        ...
      </div>

      <h2>📮 找到我</h2>
      <ul>
        <li>Email - <Link href="mailto:362896731@qq.com">362896731@qq.com</Link></li>
        <li>Github - <Link href="https://github.com/imzxj">https://github.com/imzxj</Link></li>
      </ul>

      <h2>🧭 参考</h2>
      本站灵感与部分代码参考或直接来自以下网站
      <ul>
        <li><Link href="https://www.joshwcomeau.com">https://www.joshwcomeau.com</Link></li>
        <li><Link href="https://leerob.io">https://leerob.io</Link></li>
        <li><Link href="https://blog.maximeheckel.com">https://blog.maximeheckel.com</Link></li>
        <li><Link href="https://vuepress.vuejs.org">https://vuepress.vuejs.org</Link></li>
        <li><Link href="https://vitepress.dev">https://vitepress.dev</Link></li>
        <li><Link href="https://react-spring.dev">https://react-spring.dev</Link></li>
        <li><Link href="https://github.com/iissnan/hexo-theme-next">https://github.com/iissnan/hexo-theme-next</Link></li>
        <li><Link href="https://github.com/sanjinhub/hexo-theme-geek">https://github.com/sanjinhub/hexo-theme-geek</Link></li>
        <li><Link href="https://github.com/nanxiaobei/hugo-paper">https://github.com/nanxiaobei/hugo-paper</Link></li>
      </ul>
    </div>
  )
}

export default Index
