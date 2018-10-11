function makePromise() {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            resolve( 'hello' );
        }, 2000);
    });
}
makePromise()
    .then(( data ) => {
        console.log( 'GOT DATA', data );
        throw data + ' MOREEEEE';
    } )
    .then( ( data2 ) => {
        console.log( 'GOT DATA2', data2 );
    } )
    .catch( ( err ) => {
        return 'GOT ERROR' + err;
    } )
    .then( ( data3 ) => {
        console.log( 'THIRD', data3 );
    } );
