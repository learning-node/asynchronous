console.log('start');

try {
    throw new Error('HAHAHA');
}
catch( err ) {
    console.log( 'ERROR', err );
}


console.log('end');