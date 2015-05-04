var typescript = Npm.require('typescript');

Plugin.registerSourceHandler('ts', function(compileStep) {
  var output = typescript.transpile(compileStep.read().toString('utf8'), { module : typescript.ModuleKind.AMD });

  compileStep.addAsset({
    path : compileStep.inputPath.replace('.ts', '.js'),
    data : output
  });
});