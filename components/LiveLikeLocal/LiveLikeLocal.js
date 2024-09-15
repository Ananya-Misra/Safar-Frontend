import { Text, Title, TextInput, Button, createStyles, Container, Grid, Col } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';

import { liveLikeLocalImage } from '@/assets/jpgs';
import axiosInstance from '@/lib/axios/axiosInstance';
import SuggestionCard from './SuggestionCard';
import { SUGGESTION_CATEGORY } from '@/constants/constants';

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    body: {
        maxWidth: 480,
        margin: 0,
        marginRight: theme.spacing.xl
    },
    title: {
        fontSize: theme.fontSizes.xl * 1.5,
        fontWeight: 700,
        marginBottom: theme.spacing.sm,
    },
    controls: {
        display: 'flex',
        marginTop: theme.spacing.md,
    },
    inputWrapper: {
        flex: 1,
    },
    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    control: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    image: {
        maxWidth: '40%',
        height: 'auto',
    },
}));

const LiveLikeLocal = () => {
    const [loading, setLoading] = useState(false);
    const [destination, setDestination] = useState('');
    const [liveLikeLocalData, setLiveLikeLocalData] = useState(null);
    const { classes } = useStyles();

    const handleLiveLikeLocal = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.post('/places/live-like-local', { location: destination });
            setLiveLikeLocalData(response?.data);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const categories = SUGGESTION_CATEGORY.map((category) => (
        {
            title: category?.title,
            key: category?.key,
            listItems: liveLikeLocalData?.[category?.key] || []
        }
    ))

    return (
        <>
            <Container className={classes.wrapper}>
                <Container className={classes.body}>
                    <Title className={classes.title}>Live Like Local</Title>
                    <Text fw={500} fz="lg" mb={5}>
                        Discover Like a Local!
                    </Text>
                    <Text fz="sm" c="dimmed">
                        Explore authentic experiences and local favorites that make the city special.
                    </Text>

                    <div className={classes.controls}>
                        <TextInput
                            placeholder="Enter your destination"
                            value={destination}
                            onChange={(e) => setDestination(e.currentTarget.value)}
                            classNames={{ input: classes.input, root: classes.inputWrapper }}
                        />
                        <Button className={classes.control} loading={loading} onClick={handleLiveLikeLocal}>
                            Go
                        </Button>
                    </div>
                </Container>
                <Image src={liveLikeLocalImage} className={classes.image} />
            </Container>

            {liveLikeLocalData && <Grid mt="xl">
                    {categories.map((category) => (
                        <Col span={12} sm={6} md={4} key={category.key}>
                            <SuggestionCard
                                title={category.title}
                                description={`Discover ${category.title.toLowerCase()}`}
                                listItems={category.listItems}
                            />
                        </Col>
                    ))}
            </Grid>}
        </>
    );
};

export default LiveLikeLocal;
