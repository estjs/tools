/**
 * TODO:
 * @param params
 * @returns
 */
function validateParams(params) {
  const { __notDbcToCdb__, __noTrim__, ...p } = params;
  const str = JSON.stringify(p);
  let res: any = {};
  res = JSON.parse(str, (key, val) => {
    if (val !== undefined && key.indexOf("_") !== 0) {
      /*  检测是否含有全角，并转化为半角 最后调用trim方法去前后空格 */
      if (typeof val === "string") {
        return __noTrim__ ? val : val.trim();
      }
      return val;
    }
  });
  return filterSecLevel(res);
}

function filterSecLevel(p) {
  const re = JSON.stringify(p, (key, val) => {
    const type = Object.prototype.toString.call(val);
    if (key && (type === "[object Object]" || type === "[object Array]")) {
      return filterNull(val);
    }
    return val;
  });
  return JSON.parse(re);
}



function filterNull(p) {
  const str = JSON.stringify(p);
  return JSON.parse(str, (key, val) => {
    if (val !== null) {
      return val;
    }
  });
}
