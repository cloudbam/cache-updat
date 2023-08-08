# 前言

看完上一篇《关于PNPM》的文章，我们了解到 PNPM 拥有速度快、节省磁盘空间的特性，并且有效解决了幻影依赖和依赖分身的问题。
接下来我们来使用 PNPM 另一个特性(workspace monorepo)来搭建我们的 monorepo 项目。

# pnpm 初始化环境

一、初始化项目：

```shell
# 安装pnpm
npm install -g pnpm
# 创建根项目
mkdir adi-pnpm-monorepo && cd adi-pnpm-monorepo
mkdir packages
# 初始化package.json
npm init -y
```

二、建立 workspace
在根目录创建 `pnpm-workspace.yaml：
```yaml
packages:
  # all packages in subdirs of packages/ and components/
  - 'packages/**'
```
此时目录结构如下：

```shell
├── package.json
├── packages
└── pnpm-workspace.yaml
```

三、初始化子项目

```shell
cd packages
# core
mkdir core && cd core
npm init -y
mkdir src && cd src && echo '' > index.ts
cd ../../
# vitePlugin
mkdir vitePlugin && cd vitePlugin
npm init -y
mkdir src && cd src && echo '' > index.ts
cd ../../
```

此时目录结构如下：

```shell
├── package.json
├── packages
│   ├── core
│   │   ├── package.json
│   │   └── src
│   │       └── index.ts
│   └── vitePlugin
│       ├── package.json
│       └── src
│           └── index.ts
└── pnpm-workspace.yaml
```

分别在 `core/src/index.ts`、`vitePlugin/src/index.ts`写入测试代码:

```typescript
// core
export const add = (a: number, b: number) => a + b;
// vitePlugin
import { add } from "core";
console.log(`add(1,2) = ${add(1, 2)}`);
```

添加 `typescript` 到项目中:

```shell
pnpm add typescript -wD
pnpm exec tsc --init
# 改个名
mv tsconfig.json tsconfig.base.json
code tsconfig.json
```

新建写入 > tsconfig.json:
```json
// tsconfig.json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

分别为子项目创建 `tsconfig.json`:
```json
// /packages/core/tsconfig.json and /packages/vitePlugin/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

分别修改子项目的 `package.json`:

```json
// /packages/core/package.json and /packages/vitePlugin/package.json
{
  ...,
  "main": "./dist/index.mjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "require": "./dist/index.cjs",
      "import": "./dist/index.mjs",
      "types": "./dist/index.d.ts"
    }
  },
  ...
}
```

把 core 作为依赖添加到 vitePlugin 的开发依赖中:

```shell
pnpm add core --filter vitePlugin --workspace -D
```

此时打开 `/packages/vitePlugin/src/index.ts` ts 会提示找不到模块 `core`，我们通过添加 `paths`，告诉 ts 怎么解析我们的 `require/import`

```json
// /packages/vitePlugin/package.json
{
  ...,
  "compilerOptions": {
    ...,
    "paths": {
      ...,
      "core": [
        "../core/src/index.ts"
      ]
    }
  }
}

```


接下来我们用 [`unbuild`](https://github.com/unjs/unbuild) 来打包我们的项目

```shell
pnpm add unbuild -wD
```

创建 `build.config.ts` 到 `packages/*` 下

```typescript
// /packages/core/build.config.ts
// /packages/vitePlugin/build.config.ts
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
```

添加打包指令到 `packages/*` 下

```json
// /packages/core/package.json
// /packages/vitePlugin/package.json
{
  ...,
  "scripts": {
    "build": "unbuild",
    ...
  },
  ...
}

```

修改根目录的`package.json`

```json
// /package.json
{
  ...,
  "scripts": {
    "build": "pnpm --filter \"./packages\" -r build",
    ...
  },
  ...
}

```

让我们打包看看效果吧

```shell
pnpm build

node ./packages/vitePlugin/dist/index.mjs
node ./packages/vitePlugin/dist/index.cjs
# output
# ADI-LOG => add(1,2) = 3
# ADI-LOG => add(1,2) = 3
```

[Github](https://github.com/13168335674/adi-pnpm-monorepo)

# 其他

随着 vue / vite 等越来越多的开源项目迁移到了 PNPM 进行管理，相信社区会越来越活跃，并带来更多简单、高效、安全的工具流实践。