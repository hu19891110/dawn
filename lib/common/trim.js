/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 * @author Houfeng <admin@xhou.net>
 */

module.exports = function (str, char) {
  if (!str) return str;
  while (str[0] === char) {
    str = str.substr(1);
  }
  while (str[str.length - 1] === char) {
    str = str.substr(0, str.length - 1);
  }
  return str;
};