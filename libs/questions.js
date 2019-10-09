// 自定义交互式命令行的问题及简单的校验
function generateQuestions() {
    return [
        {
            name: 'project_name',
            type: 'input',
            message: '请输入项目名称(默认 test)：'
        },
        {
            name: 'appid',
            type: 'input',
            message: '请输入小程序 Appid(默认 wx68dd72653ed17ad7)：'
        },
        {
            name: 'sdkversion',
            type: 'input',
            message: '请输入小程序SDK版本(默认 2.8.3)：'
        },
        {
            name: 'version',
            type: 'input',
            message: '请输入版本号(默认 1.0.0)：'
        },
        {
            name: 'desc',
            type: 'input',
            message: '请输入描述信息(默认 default)：'
        },
        {
            name: 'entry',
            type: 'input',
            message: '请输入入口文件名(默认 index.js)：'
        },
        {
            name: 'author',
            type: 'input',
            message: '请输入作者名(默认 陈哲是个好孩子)：'
        },
        {
            name: 'license',
            type: 'input',
            message: '请输入license(默认 MIT)：'
        }
    ];
}

module.exports = generateQuestions;