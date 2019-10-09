#!/usr/bin/env node

// 交互式命令行
const inquirer = require('inquirer');
// 交互问题
const questions = require('../libs/questions');
// 下载模版代码
const downCode = require('../libs/downcode');


/**************************************** main */
inquirer
    .prompt(questions()).then(answers => {
        // answers 用户输入对象
        let { project_name, version, desc, entry, author, license, appid, sdkversion } = answers;
        if (project_name.length === 0) {
            project_name = 'test';
        }
        if (version.length === 0) {
            version = '1.0.0';
        }
        if (desc.length === 0) {
            desc = 'default';
        }
        if (entry.length === 0) {
            entry = 'index.js';
        }
        if (author.length === 0) {
            author = '陈哲是个好孩子';
        }
        if (license.length === 0) {
            license = 'MIT';
        }
        if (appid.length === 0) {
            appid = 'wx68dd72653ed17ad7-1';
        }
        if (sdkversion.length === 0) {
            sdkversion = '2.8.3';
        }
        downCode({ project_name, version, desc, entry, author, license, appid, sdkversion });
    });