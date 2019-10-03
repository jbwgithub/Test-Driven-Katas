const wrap = (line, maxLine) => {
  let newStr = '';
  let startIdx = 0;
  for (let i = startIdx; i < line.length; i++) {
    let spaceIdx = line.slice(startIdx, maxLine).lastIndexOf(' ');
    newStr += line.slice(startIdx, spaceIdx) + '\n';
    startIdx = spaceIdx + 1;
  }
  return newStr;
}

module.exports = wrap;
