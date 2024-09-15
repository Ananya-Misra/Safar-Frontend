import { Container, Paper, Group, Title, createStyles } from '@mantine/core';
import TravelPlanForm from './TravelPlanForm';
import { travelPlanImage } from '@/assets/jpgs';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
    heroContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '75vh',
        padding: 0
    },
    formContainer: {
        width: '100%',
        display: 'flex'
    },
    leftContainer: {
        width: '50%'
    },
    imageContainer: {
        position: 'relative',
        width: '50%',
        borderRadius: '8px',
        overflow: 'hidden'
    },
    title: {
        fontSize: theme.fontSizes.xl * 3,
        fontWeight: 700,
    },
    tagline: {
        marginTop: theme.spacing.md,
        fontSize: theme.fontSizes.lg,
    },
    buttonStack: {
        display: 'flex',
        marginTop: theme.spacing.xl,
    },
    exploreButton: {
        marginRight: '0.75rem'
    }
}));

const TravelPlan = () => {
    const { classes } = useStyles();
    

    return (
        <Container fluid className={classes.heroContainer}>
            <Container className={classes.formContainer}>
                <Container className={classes.leftContainer}>
                    <Title mb={15}>
                        Let's Plan<br/> Your Travel
                    </Title>
                    <Paper radius="md" p="xl" withBorder>
                        <TravelPlanForm />
                    </Paper>
                </Container>
                <Container className={classes.imageContainer}>
                    <Image src={travelPlanImage} fill alt='travel plan form' />
                </Container>
            </Container>
        </Container>
    );
};

export default TravelPlan;
