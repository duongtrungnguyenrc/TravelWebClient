import { Container, Grid, Link, Stack, TextField, Typography } from "@mui/material"

const PersonalInfoPage = () => {
  return (
    <Container sx={{display: "flex", height: "100%", padding: "100px 0"}}>
        <Stack direction="column" gap={5} sx={{width: "100%", padding: "20px 0"}}>
            <Stack direction="column">
                <Typography variant="h4" component="h1">
                    Account
                </Typography>
                <Typography variant="body1" component="p">
                    Peter griffin, hello@designdrops.io · <Link href="" className="text-underline text-bold">Go to profile</Link>
                </Typography>
            </Stack>
            <Grid container>
                <Grid item xs={7}>
                    <Stack direction="column" spacing={3}>
                        
                    </Stack>
                </Grid>
                <Grid item xs={5}>

                </Grid>
            </Grid>
        </Stack>
    </Container> 
  );
};
export default PersonalInfoPage;