import { Container, createStyles, Button, Text, Box, Paper } from '@mantine/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useSelector } from 'react-redux';
import TimelineItem from './TimelineItem';

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
    travelInfoContainer: {
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        paddingBottom: theme.spacing.lg
    },
    imageContainer: {
        position: 'relative',
        width: '50%',
        borderRadius: '8px',
        overflow: 'hidden'
    },
    title: {
        fontSize: theme.fontSizes.xl * 2,
        fontWeight: 700,
        marginBottom: '0.5rem'
    },
    infoContainer: {
        display: 'flex'
    },
    infoLable: {
        fontSize: theme.fontSizes.xl,
        marginRight: '0.5rem'
    },
    info: {
        fontSize: theme.fontSizes.xl,
        fontWeight: 600,
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
        marginTop: '0.75rem'
    }
}));

const TravelPlanResult = () => {
    const { classes } = useStyles();
    const travelPlan = useSelector((state) => state.travelPlan.travelPlan);
    const travelInfo = useSelector((state) => state.travelPlan.travelInfo);

    return (
        <Container fluid className={classes.heroContainer}>
            <Paper withBorder className={classes.travelInfoContainer}>
                <Text className={classes.title}>Here's your custom travel plan</Text>

                <Box className={classes.infoContainer}>
                    <Text className={classes.infoLable}>From: </Text>
                    <Text className={classes.info}>{travelInfo?.from || '-'}</Text>
                </Box>
                <Box className={classes.infoContainer}>
                    <Text className={classes.infoLable}>Destination: </Text>
                    <Text className={classes.info}>{travelInfo?.destination|| '-'}</Text>
                </Box>
                <Box className={classes.infoContainer}>
                    <Text className={classes.infoLable}>Duration: </Text>
                    <Text className={classes.info}>{travelInfo?.duration || '-'}</Text>
                </Box>
                <Box className={classes.infoContainer}>
                    <Text className={classes.infoLable}>Budget: </Text>
                    <Text className={classes.info}>{travelInfo?.budget || '-'}</Text>
                </Box>

                <Button size="md" className={classes.exploreButton} onClick={() => router.push('/travel-plan')}>Re-Plan</Button>
            </Paper>
            <VerticalTimeline lineColor='#808080'>
                {travelPlan?.map((planItem) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2196f3', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
                        date={`Day ${planItem?.day_number}`}
                        iconStyle={{ background: '#2196f3', color: '#fff' }}
                        position="alternate"
                    >
                        <TimelineItem plan={planItem} />
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Container>
    );
};

export default TravelPlanResult;
