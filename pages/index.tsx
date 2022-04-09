import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from '../components/layout';
import { EntryList, NewEntry } from '../components/ui';

const HomePage: NextPage = () => {
    return (
        <Layout title='Home - OpenJira'>
            <Grid container spacing={ 2 }>
                <Grid item xs= { 12 } sm={ 4 }>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Open" />

                        <CardContent>
                            {/* Agregar nueva task */}
                            {/* listado de las task */}
                            <NewEntry />
                            <EntryList status='open' />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs= { 12 } sm={ 4 }>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Doing" />

                        <CardContent>
                            {/* Agregar nueva task */}
                            {/* listado de las task */}
                            <EntryList status='doing' />
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs= { 12 } sm={ 4 }>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Closed" />
                        
                        <CardContent>
                            {/* Agregar nueva task */}
                            {/* listado de las task */}
                            <EntryList status='closed' />
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </Layout>
    )
}

export default HomePage