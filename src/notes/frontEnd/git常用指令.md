---
title: git常用指令
pageInfo: false
date: 2024-01-20
category:
  - 前端
tag:
  - git
---

## git clone

```bash
git clone url  克隆远程版本库
```

## git checkout -b dev

```bash
git checkout -b dev   创建开发分支dev，并切换到该分支下
```

## git add

```bash
git add .	添加当前目录的所有文件到暂存区
git add [dir]	添加指定目录到暂存区，包括子目录
git add [file1]	添加指定文件到暂存区
```

## git commit

```bash
git commit -m [message] 提交暂存区到仓库区,message为说明信息
git commit [file1] -m [message] 提交暂存区的指定文件到本地仓库
git commit --amend -m [message] 使用一次新的commit，替代上一次提交
```

## git status

```bash
git status  查看当前工作区暂存区变动
git status -s  查看当前工作区暂存区变动，概要信息
git status  --show-stash 查询工作区中是否有stash（暂存的文件）
```

## git log

```bash
git log  查看提交历史
git log --oneline 以精简模式显示查看提交历史
git log -p <file> 查看指定文件的提交历史
git blame <file> 一列表方式查看指定文件的提交历史
```

## git diff

```bash
git diff 显示暂存区和工作区的差异
git diff filepath   filepath路径文件中，工作区与暂存区的比较差异
git diff HEAD filepath 工作区与HEAD ( 当前工作分支)的比较差异
git diff branchName filepath 当前分支的文件与branchName分支的文件的比较差异
git diff commitId filepath 与某一次提交的比较差异
```

## git pull/git fetch

```bash
git pull  拉取远程仓库所有分支更新并合并到本地分支。
git pull origin master 将远程master分支合并到当前本地master分支
git pull origin master:master 将远程master分支合并到当前本地master分支，冒号后面表示本地分支

git fetch --all  拉取所有远端的最新代码
git fetch origin master 拉取远程最新master分支代码
```

## git push

```bash
git push origin master 将本地分支的更新全部推送到远程仓库master分支。
git push origin -d <branchname>   删除远程branchname分支
git push --tags 推送所有标签
```

## git stash

```bash
git stash  把当前的工作隐藏起来 等以后恢复现场后继续工作
git stash list 显示保存的工作进度列表
git stash pop stash@{num} 恢复工作进度到工作区
git stash show 显示做了哪些改动
git stash drop stash@{num} 删除一条保存的工作进度
git stash clear 删除所有缓存的stash。
```

## git reset

```bash
git reset HEAD --file 回退暂存区里的某个文件，回退到当前版本工作区状态
git reset –-soft 目标版本号 可以把版本库上的提交回退到暂存区，修改记录保留
git reset –-mixed 目标版本号 可以把版本库上的提交回退到工作区，修改记录保留
git reset –-hard  可以把版本库上的提交彻底回退，修改的记录全部revert。
```
