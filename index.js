const core = require('@actions/core');
const github = require('@actions/github');

try {
  fs = require('fs');
  const toUse = Math.floor(Math.random() * (116 - 0 + 1)) + 0;

  console.log(`Random number is: ${toUse}`);

  fs.unlink('src/gay.jpg', (err) => {
  if (err) {
    console.error('No original image:', err);
  }
});

  fs.copyFile('src/assets/img/'+toUse+'.jpg', 'src/gay.jpg', (err) => {
    if (err) {
      console.log("Couldn't update image:", err);
    }
  });

} catch (error) {
  core.setFailed(error.message);
}
