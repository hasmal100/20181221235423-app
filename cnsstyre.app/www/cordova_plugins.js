cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "monaca-plugin-monaca-core.monaca",
    "file": "plugins/monaca-plugin-monaca-core/www/monaca.js",
    "pluginId": "monaca-plugin-monaca-core"
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-splashscreen": "5.0.1",
  "cordova-custom-config": "5.0.2",
  "monaca-plugin-monaca-core": "3.2.1"
};
// BOTTOM OF METADATA
});