import CompletedEdit from './complete'
import { Container, Grid } from '@material-ui/core'
export default function Main() {


    return (
        <Container>
            <Grid container spacing={4} >
                <CompletedEdit />
            </Grid>
        </Container>
    )
}