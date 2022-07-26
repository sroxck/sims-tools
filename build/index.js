const fs = require('fs')
const path = require('path')

var filePath = path.resolve("package");
//调用文件遍历方法
fileDisplay(filePath);
//文件遍历方法
function fileDisplay(filePath) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    const component = [];
    //遍历读取到的文件列表
    files.forEach(function (filename) {
      if (filename === "index.ts") {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.log("获取文件状态失败");
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              fs.readFile(filedir, "utf8", function (err, files) {
                let result = "";
                component.forEach((item) => {
                  result += `export {default as ${item}} from './${item}' \n`;
                  fs.stat(path.resolve(`test/${item}.spec.ts`),function(err, stat) {
                    if(stat === undefined){
                      const jest = `import { ${item} } from "../package/index";\ntest('${item}',()=>{\n \n})`
                      fs.writeFile(path.resolve(`test/${item}.spec.ts`), jest, "utf8", function (err) {
                        if (err) return console.log(err);
                      });
                    }
                  })

                  fs.stat(path.resolve(`docs/docs/${item}.md`),function(err, stat) {
                    if(stat === undefined){
                      const jest = "# " +item + "\n\n### 参数 \n\n1. \n\n2. \n\n3. \n\n### 返回值 \n\n``` ts \n\n``` \n\n### 类型 \n\n``` ts \n\n``` \n\n### 示例 \n\n``` ts\n\n``` \n\n"
                      fs.writeFile(path.resolve(`docs/docs/${item}.md`), jest, "utf8", function (err) {
                        if (err) return console.log(err);
                      });
                    }
                  })
                  
                });
                fs.writeFile(filedir, result, "utf8", function (err) {
                  if (err) return console.log(err);
                });
              });

            }
            if (isDir) {
              fileDisplay(filedir); //递归
            }
          }
        });
      } else {
        if (filename !== "vite-env.d.ts") {
          component.push(filename.split(".")[0]);
        }
      }
    });
  });
}
