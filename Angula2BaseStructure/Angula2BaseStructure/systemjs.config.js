(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'Scripts/build', // 'dist',
        'rxjs': 'Scripts/build/libs/rxjs',
        'angular2-in-memory-web-api': 'Scripts/build/libs/angular2-in-memory-web-api',
        '@angular': 'Scripts/build/libs/@angular',
		'ag-grid': 'Scripts/build/libs/ag-grid',
		'ag-grid-ng2': 'Scripts/build/libs/ag-grid-ng2',
		'symbol-observable': 'Scripts/build/libs/symbol-observable/index.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'bootstrapper.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' }
    };

    var packageNames = [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/router-deprecated',
      '@angular/testing'
      //'@angular/upgrade',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);