//reading
// const decode = new TextDecoder( 'utf-8' );
// const data = await Deno.readFile( 'readme.txt' );
// console.log( decode.decode( data ) );
const data = await Deno.readTextFile( 'readme.txt' )
console.log( data );

//writing
// const encoder = new TextEncoder();
// const text = encoder.encode( 'amooo deno' );
// await Deno.writeFile( './readme.txt', text );
await Deno.writeTextFile( 'readme.txt', 'amoo deno' );

//renaming
await Deno.rename( './readme.txt', 'deleteme.txt' );

//deleting
await Deno.remove( './deleteme.txt' );

