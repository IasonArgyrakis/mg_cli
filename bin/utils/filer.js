const dree = require('dree');

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
/**
 * 
 * @param {object} obj - of the dree childer array
 * 
 *  
 */
function recurisive_dis(obj,callback) {
  //if directory keep digiing
  console.log("got path "+obj.path)

  if (obj.type === "directory") {
    //console.log("entering path "+obj.name)
   
   if(obj.children !== undefined){
    let children = obj.children;
    for (let i = 0; i < children.length; i++) {
      
      recurisive_dis(children[i])
    }
  }else{
    //console.log("ded end")
  }
}else{
console.log("im a file ")
  }
  
}
function recurisive_files(obj,callback) {
  //if directory keep digiing
  if (obj.type === "directory") {
    let children = obj.children;
    for (let i = 0; i < children.length; i++) {

      recurisive_files(children[i])
    }
  }
  else{obj.relativePath}
}
/**
 * 
 * @param {string} RelativePath 
 */
function createFileFromRelativePath(RelativePath) {
  //Spit what by '/' what are folders and what are files
  // the last element is the file  
  RelativePath_Arr = RelativePath.split("/");
  //Define the path to berelative from where the function was called
  let newDirPath = './'
  //itterate throught the input 
  for (let i = 0; i < RelativePath_Arr.length; i++) {
    //if it is a folder 
    if (i !== RelativePath_Arr.length - 1) {
      newDirPath += RelativePath_Arr[i] + "/"
     
      fs.mkdir(path.join(process.env.PWD,newDirPath),{ recursive: true }, (err) => {
        if (err && err.errno==-17) {
          return console.error("Skiped Folder Exists..."+newDirPath);
        }
        console.log('mkdir "' +newDirPath+'"' );
      });
    } else {
      // @todo Make file

    }


  }
}

exports.getfolderDirectories=utils_ls;

exports.recurisive_dis=recurisive_dis;

exports.recurisive_files=recurisive_files;

exports.createFileFromRelativePath=createFileFromRelativePath;

