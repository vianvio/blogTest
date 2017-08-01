// Get file basename, borrowed from `browserify`
const splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
function splitPath (filename) {
  return splitPathRe.exec(filename).slice(1)
}
function basename(path, ext) {
  var f = splitPath(path)[2]
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length)
  }
  return f
}

export default function cdnurl(path, pathMap) {
  const fileName = basename(path)
  pathMap = pathMap || window.CDN_URL
  return (pathMap && pathMap[fileName]) ? pathMap[fileName] : path
}
