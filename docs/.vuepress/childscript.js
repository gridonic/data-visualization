var fs = require('fs');

module.exports = function(path) {
    var files = fs.readdirSync(`./docs/${path}`);
    var list = [];
    for (var i in files) {
        var filename = files[i].split('.').slice(0, -1).join('.');
        if (filename.toLowerCase() !=="readme") list.push([`${path}/${filename}`, filename]);
    }
    console.log(list);
    return list;
}
