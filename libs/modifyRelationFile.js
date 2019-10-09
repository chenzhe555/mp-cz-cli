const fs = require('fs');
const path = require('path');
const exit = require('exit');

/**
 * 修改文件内容
 * @param {string} filePath 文件地址
 * @param {string} params 修改内容
 */
function modifyFile(filePath, params) {
    // 读取文件
    let data = fs.readFileSync(filePath);
    // 二进制转换为字符串
    let obj = data.toString();
    // 转JSON对象
    obj = JSON.parse(obj);
    obj = Object.assign({}, obj, params);
    // 写入文件
    fs.writeFileSync(filePath,JSON.stringify(obj, 'null', '\t'));

    // fs.readFileSync(filePath, function(err, data){
    //     if (err) {
    //         console.log(path + '文件读取失败!');
    //         exit(0);
    //     }

    //     // 二进制转换为字符串
    //     let obj = data.toString();
    //     // 转JSON对象
    //     obj = JSON.parse(obj);
    //     obj = Object.assign({}, obj, params);
    //     // 写入文件
    //     fs.writeFileSync(filePath,JSON.stringify(obj, 'null', '\t'),function(error){
    //         if (error){
    //             console.log(path + '文件写入失败!');
    //             exit(0);
    //         }
    //     });
    // });
}

/**
 * 修改JSON文件
 * @param {*} params
 */
function modifyRelationFile(params) {
    const { project_name, version, desc, entry, author, license, appid, sdkversion } = params;

    const basePath = process.cwd();

    // package.json
    const packageJSONPath = path.join(basePath, project_name + '/package.json');
    modifyFile(packageJSONPath, {
        name: project_name,
        version,
        description: desc,
        main: entry,
        author,
        license
    });

    // project.config.json
    const projectConfigJSONPath = path.join(basePath, project_name + '/project.config.json');
    modifyFile(projectConfigJSONPath, {
        projectname: project_name,
        appid,
        libVersion: sdkversion
    });
}

module.exports = modifyRelationFile;