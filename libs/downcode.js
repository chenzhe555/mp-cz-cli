// 加载插件
const ora = require('ora');
// 控制台输出内容样式
const chalk = require('chalk');
const exit = require('exit');
const spinner = ora('正在拉取代码...');
// Git代码下载器
const download = require('download-git-repo');
// 修改文件
const modifyRelationFile = require('./modifyRelationFile');

/**
 * 下载模版代码
 */

function downLoadGitCode(params) {
    const { project_name } = params;

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
            // 修改文件
            modifyRelationFile(params);
            // 下载成功
            spinner.succeed();
            console.log(chalk.green('项目生成成功!'));
            console.log(`请执行命令: cd ${project_name} && npm install \n`);
            console.log(chalk.green('后续加入项目&小程序配置的修改，前期先自己复制吧~'));
        }
    );
}

module.exports = downLoadGitCode;