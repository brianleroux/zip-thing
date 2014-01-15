cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.chromium.zip/zip.js",
        "id": "org.chromium.zip.Zip",
        "clobbers": [
            "zip"
        ]
    }
]
});