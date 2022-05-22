import { Box, Button, Grid, Typography } from "@mui/material";

export default function HomePage() {

    return (
        <>
            <Grid container spacing={3} justifyContent="center" alignItems="center" direction="column">
                <Grid item>
                    <Typography variant='h3'>
                        WELCOME TO RE-STORE
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant='h4'>
                        Your one stop shop for all your winter sporting needs!
                    </Typography>
                </Grid>

                <Grid item> 
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <img src="/images/hero3.jpg" alt="hero" style={{display: 'block', width: '90%'}} />
                    </Box>
                </Grid>

                <Grid item>
                    <Button size="large" variant="contained" href="catalog">
                        View Catalog
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}