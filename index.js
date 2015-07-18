#!/usr/bin/env node
var spawn = require('child_process').spawn,
    mfp,
    dowloadUrl = "http://public.dhe.ibm.com/ibmdl/export/pub/software/products/en/MobileFirstPlatform/mobilefirst_cli_installer_7.0.0.zip",
    downloadMessage = "Download mfp CLI from: " + dowloadUrl,
    helpMessage = "mfp cli installed, use: `mfp help` for more information",
    winMessage = "mfp detection not supported on windows, use `mfp -v` to get version or download latest mfp"
    isWin = /^win/.test(process.platform);
if(isWin === false){
  mfp  = spawn('which',['mfp'],{stdio:['ignore', 'ignore', 'ignore']});
  mfp.on('exit', function(code) {
      if(code !== 0){
        console.log(downloadMessage);
      } else {
        spawn('mfp',['-v'],{stdio:['ignore', process.stdout, 'ignore']});
        console.log(helpMessage);
      }
  });
} else {
  console.log(winMessage);
  console.log(downloadMessage);
}
