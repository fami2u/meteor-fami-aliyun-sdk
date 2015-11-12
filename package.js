Package.describe({
  name: 'fami:aliyun-sdk',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'aliyun-sdk nodejs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fami2u/meteor-fami-aliyun-sdk',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "aliyun-sdk": "1.6.2"
});

Package.on_use(function(api){
  api.add_files("aliyun-sdk.js", "server");
  api.export('ALY', 'server');
});