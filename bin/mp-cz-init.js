#!/usr/bin/env node

// 交互式命令行
const inquirer = require('inquirer');
// 加载插件
const ora = require('ora');
const spinner = ora('正在拉取代码...');
// Git代码下载器
const download = require('download-git-repo');
// 控制台输出内容样式
const chalk = require('chalk');
const exit = require('exit');

// 自定义交互式命令行的问题及简单的校验
let question = [
    {
        name: 'project_name',
        type: 'input',
        message: '请输入项目名称(默认test)：'
    }
];

inquirer
    .prompt(question).then(answers => {
        // answers 用户输入对象
        let { project_name } = answers;
        if (project_name.length === 0) {
            project_name = 'test';
        }
        spinner.start();

        download(
            'chenzhe555/wit',
            project_name,
            err => {
                if (err) {
                    // 下载失败
                    spinner.fail();
                    console.log(chalk.red(`项目生成失败: ${err}`));
                    exit(0);
                }
                // 下载成功
                spinner.succeed();
                console.log(chalk.green('项目生成成功!'));
                console.log(`请执行命令: 1.cd ${project_name} && npm install \n`);
                console.log(chalk.green('后续加入项目&小程序配置的修改，前期先自己复制吧~'));
                exit(0);
            }
        );
    });