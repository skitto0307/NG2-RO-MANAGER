/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'app': 'app',
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { main: 'bundles/Rx.umd.min.js', defaultExtension: 'js' },

  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'router',
    'forms',
    'platform-browser',
    'platform-browser-dynamic'
  ];

  // Add package entries for angular packages
  ngPackageNames.forEach(function (pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.min.js', defaultExtension: 'js' };
  });

  
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);

})(this);