yarn add @mdx-js/react

查看剩余文章数目 

```bash
find . -type f \( -name "*.md" -o -name "*.mdx" \) | wc -l
```

```bash
    <a class="get_one_now_item" href="https://www.seeedstudio.com/co-create.html"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 More Information</font></span></strong>
    </a>
要修改成
    <a class="get_one_now_item" href="https://www.seeedstudio.com/co-create.html"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 More Information</font></span></strong></a>
```

需要前端协助修改 

```js
从: /src/theme/DocItem/Layout/index.tsx
到: /src/theme/DocItem/Layout/index.tsx.bak
``

正式上线需要修改

```js
docusaurus.config.js
    onBrokenLinks: 'warn',
```

基于初始主分支的版本

```md
commit e61ef94aebb530de50f4403119f78cb302b12c4e (grafted, HEAD -> docusaurus-version, origin/docusaurus-version, origin/HEAD)
Author: Meilily <111474938+meilily@users.noreply.github.com>
Date:   Wed Jun 11 16:33:55 2025 +0800

    Update XIAO-RP2350.md
    
    Updating hyperlink for the 3d rendering for XIAO RP2350 on GrabCAD
```

更新完后 对比 主分支最新版本  添加v3版本docusauras

```bash
git diff --name-status e61ef94aebb530de50f4403119f78cb302b12c4e main
```