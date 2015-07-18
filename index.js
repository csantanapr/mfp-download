#!/usr/bin/env node
var spawn = require('child_process').spawn,
    mfp  = spawn('mfp',['-v'],{stdio:'inherit'});
mfp.on('exit', function(code) {
    if(code !== 0){
      console.log("Download mfp CLI from http://public.dhe.ibm.com/ibmdl/export/pub/software/products/en/MobileFirstPlatform/mobilefirst_cli_installer_7.0.0.zip");
    } else {
      console.log("mfp cli installed, use: `mfp help` for more information");
    }
});
