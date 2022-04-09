
import mongoose from 'mongoose';
import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';


export function middleware( req: NextRequest, event: NextFetchEvent) {

    const id = req.page.params?.id || '';

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

    if ( !checkMongoIDRegExp.test( id )){
        // return res.status(400).json({ message: 'El id no es valido '})
        return new Response( JSON.stringify({ message: 'El id no es valido' }), {
            status: 400,
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    // if ( !mongoose.isValidObjectId( id )){
    //     // return res.status(400).json({ message: 'El id no es valido '})
    //     return new Response( JSON.stringify({ message: 'El id no es valido' }), {
    //         status: 400,
    //         headers: {
    //             'Content-Type':'application/json'
    //         }
    //     })
    // }

    return NextResponse.next()
}