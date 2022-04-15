import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConection = {
    isConneced: 0
}

export const connect =async () => {
    
    if ( mongoConection.isConneced ) {
        console.log('Ya estabamos conectados');
        return;
    }

    if ( mongoose.connections.length > 0 ) {
        mongoConection.isConneced = mongoose.connections[0].readyState;

        if ( mongoConection.isConneced === 1) {
            console.log('Usando conexion anterior')
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConection.isConneced = 1;
    console.log('Conectado a MongoDB:', process.env.MONGO_URL);
}

export const disconnect =async () => {

    if ( process.env.NODE_ENV === 'development' ) return;
    if ( mongoConection.isConneced === 0 ) return;

    await mongoose.disconnect();
    mongoConection.isConneced = 0;
    console.log('Desconectado de MongoDB');
}