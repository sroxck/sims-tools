import { resolve, join } from "path";
import { readdir, stat, readFile, writeFile } from "fs";
var filePath = resolve("package");
//调用文件遍历方法
fileDisplay(filePath);
//文件遍历方法
function fileDisplay(filePath) {
  //根据文件路径读取文件，返回文件列表
  readdir(filePath, function (err, files) {
    const component = [];
    //遍历读取到的文件列表
    files.forEach(function (filename) {
      if (filename === "index.ts") {
        //获取当前文件的绝对路径
        var filedir = join(filePath, filename);
        //根据文件路径获取文件信息
        stat(filedir, function (eror, stats) {
          if (eror) {
            console.log("获取文件状态失败");
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              readFile(filedir, "utf8", function (err, files) {
                let result = "";
                component.forEach((item) => {
                  result += `export {default as ${item}} from './${item}' \n`;
                  stat(resolve(`test/${item}.spec.ts`),function(err, stat) {
                    if(stat === undefined){
                      const jest = `import { ${item} } from "../package/index";\ntest('${item}',()=>{\n \n})`
                      writeFile(resolve(`test/${item}.spec.ts`), jest, "utf8", function (err) {
                        if (err) return console.log(err);
                      });
                    }
                  })
                });
                writeFile(filedir, result, "utf8", function (err) {
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
