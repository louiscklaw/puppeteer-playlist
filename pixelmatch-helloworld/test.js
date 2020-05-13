const fs = require( 'fs' );
const PNG = require( 'pngjs' ).PNG;
const pixelmatch = require( 'pixelmatch' );

const example_png = PNG.sync.read( fs.readFileSync( 'example.png' ) );
const facebook_png = PNG.sync.read( fs.readFileSync( 'facebook.png' ) );

const {
  width,
  height
} = example_png;

const diff = new PNG( {
  width,
  height
} );
const test_same_png = new PNG( {
  width,
  height
} );

const threshold_v = .001;

pixelmatch( example_png.data, facebook_png.data, diff.data, width, height, {
  threshold: threshold_v
} );
pixelmatch( example_png.data, example_png.data, test_same_png.data, width, height, {
  threshold: threshold_v
} )

// console.log(diff.data)
// console.log(diff.data[0]);
// console.log(diff.data[1]);
// console.log(diff.data[2]);
// console.log(diff.data[3]);
// console.log(test_same_png.data)

fs.writeFileSync( 'difference.png', PNG.sync.write( diff ) );
fs.writeFileSync( 'same.png', PNG.sync.write( test_same_png ) )

if ( findColorInPng( diff.data ) ) {
  console.log( 'different png' )
} else {
  console.log( 'same png' )
}

if ( findColorInPng( test_same_png.data ) ) {
  console.log( 'different png' )
} else {
  console.log( 'same png' )
}

function getRGBArray( in_png_buffer ) {
  var output = [];
  var j = -1;
  for ( i = 0; i < in_png_buffer.length; i = i + 4 ) {
    output[ j ] = [ in_png_buffer[ i ], in_png_buffer[ i + 1 ], in_png_buffer[ i + 2 ], in_png_buffer[ i + 3 ] ]
    j = j + 1;
  }
  return output;
}

function checkIfColorExist( test_color1, test_color_2 ) {
  return JSON.stringify( test_color1 ) == JSON.stringify( test_color_2 );
}

function checkIfColorExistInPic( in_RGB_array_1, in_highlight_color ) {
  return in_RGB_array_1.filter(
    ( x ) => {
      return checkIfColorExist( x, in_highlight_color )
    }
  );
}

function findColorInPng( in_png_buffer ) {
  var highlight_color = [ 255, 0, 0, 255 ];
  var RGB_array = getRGBArray( in_png_buffer );
  return checkIfColorExistInPic( RGB_array, highlight_color ).length > 0;
}
