---
home: home
heroImage: /8.pic.jpg
heroText: null
tagline:  灵感源于lodash,二次创作的泛用性函数库
actionText: 文档 →
actionLink: /array/
features:
- title: 多环境通用
  details: 使用 rollup 打包多端通用的ES,CommandJs,Umd模块。
- title: Typescript编写
  details: 完全采用Typescript进行编写,拥有友好的类型提示和函数注释
- title: 泛用性
  details: 对lodash函数结合国人工作习惯,场景,对函数进行优化封装,提升易用性
# footer: Sroxck的个人博客
--- 

### 安装

``` bash
yarn add sims-tools # 或者：npm install sims-tools
```

### 全局引入
``` ts
import tools from 'sims-tools'

// 使用
tools.isEmpty(null)
```

### 单独引入
``` ts
import { isEmpty } from 'sims-tools'

// 使用
isEmpty(null)
```

### 按需引入
``` ts
import { isEmpty } from 'sims-tools/isEmpty'

// 使用
isEmpty(null)
```
