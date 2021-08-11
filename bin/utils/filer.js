const dree = require('dree');

/**
 * 
 * @param {string} path of a folder
 * 
 * @returns [] an array of the 1st childer
 */
const utils_ls = (path) => {
  let contents
  dree.scanAsync().then(function (tree) {

    contents = tree.children;



  });
  return contents
}
/**
 * 
 * @param {object} obj - of the dree childer array
 * 
 *  
 */
function recurisive_dis(obj,callback) {
  //if directory keep digiing
  if (obj.type === "directory") {
    let children = obj.children;
    for (let i = 0; i < children.length; i++) {

      rrecurisive_dis(children[i])
    }
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
      fs
    }


  }
}

exports.utils_ls=utils_ls;

exports.recurisive_dis=recurisive_dis;

exports.recurisive_files=recurisive_files;

exports.createFileFromRelativePath=createFileFromRelativePath;

