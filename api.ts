import { Application, Context } from "https://deno.land/x/abc@v1.0.3/mod.ts";
import { create_book, delete_book, get_all_books, get_book } from "./controllers/bookController.ts";

const app = new Application();

//static files
app.static( '/', '/public' );

// routes
app.get( '/', async ( ctx: Context ) => await ctx.file( './public/index.html' ) );

app.get( '/book', get_all_books );
app.get( '/book:id', get_book );
app.post( '/book', create_book );
app.delete( '/book:id', delete_book );

//listen
app.start({
    port: 4143
});