# git常用操作

## 分支HEAD切换

```
git branch -f master HEAD~3
```

**此切换不同与checkout,会将master分支的引用(HEAD文件)更新**

## 查看HEAD的指向

```
git symbolic-ref HEAD
```

## git reset 和 git revert

reset回退没有历史信息
revert回退有历史信息

## git rebase

将目标分支作为父节点并合并当前分支, 最终达到当前分支合并目标分支的提交.

与目标分支相同的提交跳过, 针对当前分支与目标分支不同的代码进行合并.

```
git rebase -i
```

交互式的界面,有助于对代码历史进行修剪优化

- pick 或 p：保留该提交，使用原来的消息。
- reword 或 r：保留该提交，但允许你编辑提交消息。
- edit 或 e：保留该提交，但允许你修改提交内容。
- squash 或 s：将该提交与前一个提交合并。
- fixup 或 f：将该提交与前一个提交合并，并丢弃当前提交的消息。
- drop 或 d：丢弃该提交。

## git cherry-pick

用于和合并项目中指定的历史提交

## git pull 和 git pull --rebase

当本地有新提交时 
git pull 会将本地历史合并到本地远程分支, 合并过程保留
git pull --rebase 会重写本地合并历史, 使其保持线性历史.

## 将本地指定分支推送至远程分支

```
git push origin <source>:<destination>
```

## 将远程分支更新到指定的本地分支

```
git fetch origin <destination>:<source>
```

## 删除远程分支

```
git push origin  <空>:<远程分支>
```

## 本地新建分支

```
git fetch origin <空>:<新建分支>
```

## git pull origin <远程分支>:<本地分支>

等同于
git fetch origin <远程分支>:<本地分支>
git merge <本地分支>

注意:
git merge 合并的是HEAD指向的分支