import React, { DragEvent, FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui';

import { dateFunctions } from '../../utils';

interface Props {
    entry: Entry;
}

export const EntryCard:FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext(UIContext)
    const router = useRouter();

    const onDragStart = ( e: DragEvent ) => {
        e.dataTransfer.setData('text', entry._id)
        // todo: modificar el estado, para indicar que estoy haciendo drag
        startDragging()
    }

    const onDragEnd = () => {
        endDragging()
    }

    const onClick = () => {
        router.push(`/entries/${ entry._id }`)
    }

    return (
        <Card
            sx={{ marginBottom: 1 }}
            //  eventos de Drag
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
            onClick={ onClick }
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
                </CardContent>

                <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight: 2 }}>
                    <Typography variant='body2'>{ dateFunctions.getFormatDistanceToNow(entry.createdAt) }</Typography>
                </CardActions>
            </CardActionArea>

        </Card>
    )
}
