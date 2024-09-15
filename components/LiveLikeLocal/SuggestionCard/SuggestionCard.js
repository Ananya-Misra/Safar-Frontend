import { createStyles, Card, Group, Switch, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    },

    item: {
        '& + &': {
        paddingTop: theme.spacing.sm,
        marginTop: theme.spacing.sm,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
        },
    },

    switch: {
        '& *': {
        cursor: 'pointer',
        },
    },

    title: {
        lineHeight: 1,
    },
}));

const data = [
    { title: 'Messages', description: 'Direct messages you have received from other users' },
    { title: 'Review requests', description: 'Code review requests from your team members' },
    { title: 'Comments', description: 'Daily digest with comments on your posts' },
    {
        title: 'Recommendations',
        description: 'Digest with best community posts from previous week',
    },
];

const SuggestionCard = ({ title, description, listItems }) => {
    const { classes } = useStyles();

    const items = listItems?.map((item) => (
        <Group justify="space-between" className={classes.item} wrap="nowrap" gap="xl" key={item.title}>
            <div>
                <Text>{item.title}</Text>
                <Text size="xs" color="dimmed">
                    {item.description}
                </Text>
            </div>
        </Group>
    ));

    return (
        <Card withBorder radius="md" p="xl" className={classes.card}>
            <Text size="lg" className={classes.title} fw={500}>
                {title}
            </Text>
            <Text size="xs" color="dimmed" mt={3} mb="xl">
                {description}
            </Text>
            {items}
        </Card>
    );
}

export default SuggestionCard;
