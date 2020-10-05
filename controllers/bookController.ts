import type { Context } from "https://deno.land/x/abc@v1.0.3/context.ts";
import type { Book } from "../models/bookModel.ts";

let book : Book[] = [
    {
        id: 1,
        title: 'teste1',
        description: 'testando',
        author: 'Eu',
        pages: 100
    },
    {
        id: 2,
        title: 'teste2',
        description: 'testando',
        author: 'Eu',
        pages: 100
    },
    {
        id: 3,
        title: 'teste3',
        description: 'testando',
        author: 'Eu',
        pages: 100
    },
]

export const get_all_books = async ( ctx : Context ) => await ctx.json( book, 200 );

export const get_book = async ( ctx : Context ) => {
    let { id } = ctx.params;
    let b = await book.find( i => i.id.toString() === id );
    if ( b ) return ctx.json( b );
    return ctx.json({
        error: 'not found'
    }, 404);
};

export const create_book = async ( ctx : Context ) => {
    let { title, author, description, pages } = await ctx.body();
    let id = book.reduce( ( c, i ) => c += i.id, 1 );
    book.push({
        id: id,
        title: title,
        description: description,
        pages: pages,
        author: author
    })
};

export const delete_book = async ( ctx : Context ) => {
    const { id } = ctx.params; 
    let b = await book.find( i => i.id.toString() === id );
    if ( !b ) return ctx.json({
        error: 'not found'
    }, 404);
    book = await book.filter( i => i.id.toString() !== id );
    return ctx.json({
        success: true
    }, 200 );
};