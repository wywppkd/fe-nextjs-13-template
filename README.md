- next.js文档: https://nextjs.org/
- 在 next.js 中使用 antd: https://ant.design/docs/react/use-with-next-cn

## 本地启动

当前项目要求 node >= 16.20.0, 推荐使用 nvm 切换 node 版本

```bash
# 项目环境要求 node >= 16.20.0
nvm use # 切换node版本( 会根据 .nvmrc 配置的版本号进行切换 )
```

```bash
yarn # 安装依赖
yarn dev # 本地启动(开发环境)
yarn dev:test # 本地启动(测试环境)
```

## 开发、测试、生产部署命令

```bash
# 开发
yarn # 安装依赖
yarn build:dev # 构建
yarn start # 启动

# 测试
yarn
yarn build:test
yarn start

# 生产
yarn
yarn build:prod
yarn start
```

## 代码规范!!!

安装 vscode 插件 `ESLint` 和 `Prettier - Code formatter`~~~ 保存代码时项目会自动格式化代码, 并且进行 lint 检查

- ESLint 默认会检测 `pages/, app/, components/, lib/, src/` 目录下的文件
- 注: 代码提交前会自动进行 lint 检查, 如果不符合规范, 无法提交代码

## 如何修改后端接口地址?

```bash
.env.dev # 开发环境后端接口地址
.env.test # 测试环境后端接口地址
.env.prod # 生产环境后端接口地址
```

---

## 创建页面文件对应页面路径

- `src/app/page.tsx`: /
- `src/app/about/page.tsx`: /about
- `src/app/about/detail/page.tsx`: /about/detail
- `src/app/(about)/detail/page.tsx`: /detail, 小括号包裹的目录会被忽略
- `app/blog/[id]/page.tsx`: /blog/:id

## 页面跳转

优先使用 `<Link>` 组件, 其次是 useRouter(), useRouter 仅支持客户端组件
