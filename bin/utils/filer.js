
const dree = require('dree');
const fs = require('fs');
const path = require('path')

/**
 * 
 * @param {*} path of a folder
 * 
 * @returns {} an array of the 1st childer ./path [ dir1 , dir2] 
 */
const utils_ls = (path) => {


  let tree = dree.scan(path);
  //console.log(tree);
  return tree.children;

}
var arry = []
function makeArray(path) {
  arry.push(path)
}
/**
 * 
 * @param {object} obj - of the dree childer array
 * 
 *  
 */

function recurisive_dis(obj, callback) {
  //if directory keep digiing

  //console.log("called ")
  if (obj.type === "directory") {


    if (obj.children !== undefined) {
      let children = obj.children;
      for (let i = 0; i < children.length; i++) {

        recurisive_dis(children[i])
      }
    }
    else {
      //console.log("ded end")
    }
  }
  else {
    //console.log("file for path " + obj.path);
    makeArray(obj.relativePath)

  }


}

/**
 * 
 * @param {string} RelativePath 
 * @param {string} cmd_location location of the script 
 */
function createFileFromRelativePath(RelativePath,cmd_location) {
  //Spit what by '/' what are folders and what are files
  // the last element is the file  
  RelativePath_Arr = RelativePath.split("/");
  //console.log("...")
  console.log(RelativePath_Arr)

  let newDirPath = './'
  //itterate throught the input 
  for (let i = 0; i < RelativePath_Arr.length; i++) {
   //console.log(RelativePath_Arr[i]);
    //if it is a folder 
    if (i < RelativePath_Arr.length-1) {
      
      newDirPath += RelativePath_Arr[i] + "/"
      //console.log('mkdir : "' + newDirPath + '"');

      fs.mkdir(path.join(process.env.PWD, newDirPath), { recursive: true }, (err) => {
        if (err && err.errno == -17) {
          return console.error("Skiped Folder Exists..." + newDirPath);
        }
        
      });
    }else{
      newDirPath += RelativePath_Arr[i]
      console.log('Saved file under:')
      console.log(newDirPath)
      let TempalteLocation = newDirPath.substring(1, newDirPath.length);
      let tempalteFileContent = fs.readFileSync(path.resolve(cmd_location+"/Templates/Plugin/MG_CLI/plug-in-name/"+TempalteLocation)).toString('utf8')
      fs.writeFileSync(newDirPath, tempalteFileContent, function (err) {
        if (err) throw err;
        console.log('Done');
      });
    }
    
  }
}

exports.getfolderDirectories = utils_ls;

exports.recurisive_dis = recurisive_dis;


exports.createFileFromRelativePath = createFileFromRelativePath;

exports.getTempalateFileList = arry

