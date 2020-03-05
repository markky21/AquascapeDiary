module.exports = {
  name: 'ng-aquascape-diary',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-aquascape-diary',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
