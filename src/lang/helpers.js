export const parsLangArray = (langData) => {
    var tempArr = Object.keys(langData);
    var newData = {};
    tempArr.map(key => {
      var key2 = key.replace(/\./g, '{point}');
  
      newData[key2] = langData[key];
    });
  
    return newData;
  }
  
  export const parsPath = (path) => {
    var search = ['.'];
    var flag = search.filter(item => path.indexOf(item) != -1);
  
    if (flag.length > 0)
      path = path.replace(/\./g, '{point}');
  
  
    return path;
  }
  
  export const replacePath = (path) => {
    let result = path.match(/\{(.*?)\}/g);
    if (result)
      for (var item of result) {
        let regex = new RegExp(`{${item[1]}`, 'g');
        path = path.replace(regex, item[1]);
      }
  
    return path;
  }