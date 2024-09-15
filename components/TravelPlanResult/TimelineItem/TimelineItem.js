import { Container, createStyles, Text, List } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    heroContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0
    },
    subtitle: {
        marginBottom: theme.spacing.sm,
    },
    list: {
        paddingLeft: theme.spacing.md,
    },
    listItem: {
        color: theme.white
    }
}));

const TimelineItem = ({ plan }) => {
    const { classes } = useStyles();

    return (
        <Container fluid className={classes.heroContainer}>
            <Text className={classes.subtitle}>{`Transport Mode: ${plan?.mode_of_transportation}`}</Text>
            <Text className={classes.subtitle}>{`Accommodation: ${plan?.accommodation}`}</Text>
            <Text className={classes.subtitle}>{`Total Estimated Expense: ${plan?.total_estimated_expense}`}</Text>
            <Text className={classes.subtitle} fw={500}>Activities</Text>
            <List className={classes.list} spacing="sm">
                {plan?.activities?.map((activity, index) => (
                    <List.Item className={classes.listItem} key={index}>{`${activity.activity} (${activity.time})`}</List.Item>
                ))}
            </List>
        </Container>
    );
};

export default TimelineItem;
