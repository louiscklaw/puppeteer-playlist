const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const example_png = PNG.sync.read(fs.readFileSync('example.png'));
const facebook_png = PNG.sync.read(fs.readFileSync('facebook.png'));

const {width, height} = example_png;

const diff = new PNG({width, height});
const test_same_png = new PNG({width, height});

const threshold_v = .001;

pixelmatch(example_png.data, facebook_png.data, diff.data, width, height, {threshold: threshold_v});
pixelmatch(example_png.data, example_png.data, test_same_png.data, width, height, {threshold: threshold_v})

console.log(diff.data);
console.log(test_same_png.data)

fs.writeFileSync('difference.png', PNG.sync.write(diff));
fs.writeFileSync('same.png', PNG.sync.write(test_same_png))