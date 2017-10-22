export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ngc-float-button.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.floatbutton',
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/BehaviorSubject' : 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  }