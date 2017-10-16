/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'dist/app',

      // angular bundles
      '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.min.js',
      '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',


      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',


      // other libraries
      'primeng': 'node_modules/primeng',
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      // Bootstrap Modal
      'ng2-bootstrap-modal': 'npm:ng2-bootstrap-modal',

      // add ng2-daterangepicker bundles
      'ng2-daterangepicker': 'npm:ng2-daterangepicker',
      'jquery': 'npm:jquery/dist/jquery.js',
      'moment': 'npm:moment',
      'bootstrap-daterangepicker': 'npm:bootstrap-daterangepicker/daterangepicker.js'

      // Date Range Picker
      // 'ng2-daterangepicker': 'npm:ng2-daterangepicker',
      // 'jquery': 'npm:jquery/dist/jquery.js',
      // 'moment': 'npm:moment',
      // 'bootstrap-daterangepicker': 'npm:bootstrap-daterangepicker/daterangepicker.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: "dist/main.js",
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        main: 'Rx.js',
        defaultExtension: 'js'
      },
      'ng2-bootstrap-modal': {
        main: 'index',
        defaultExtension: 'js'
      },
      // ng2-daterangepicker packages 
      // moment: {
      //   main: 'moment',
      //   defaultExtension: 'js'
      // },
      // 'ng2-daterangepicker': {
      //   defaultExtension: 'js'
      // },

      // ng2-daterangepicker packages
      moment: {
        main: 'moment',
        defaultExtension: 'js'
      },
      'ng2-daterangepicker': {
        main: 'index',
        defaultExtension: 'js'
      },
      primeng: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
