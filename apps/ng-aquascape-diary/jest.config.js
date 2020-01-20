module.exports = {
  name: 'ng-aquascape-diary',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-aquascape-diary',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
