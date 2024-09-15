import axiosInstance from "@/lib/axios/axiosInstance";
import { setTravelInfo, setTravelPlan } from "@/lib/store/slice/travelPlanSlice";
import {
    TextInput,
    Group,
    NumberInput,
    Button
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const TravelPlanForm = () => {
    const router = useRouter(); // Use the router for navigation
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    const form = useForm({
        initialValues: {
            from: "",
            destination: "",
            duration: "",
            budget: 0
        },
        validate: {
            from: (value) => value.trim().length === 0,
            destination: (value) => value.trim().length < 2,
            budget: (value) => (value <= 0 ? 'Budget must be greater than 0' : null),
        },
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const payload = {
                start: values?.from,
                destination: values?.destination,
                days: values?.duration,
                budget: values?.budget
            }
            const response = await axiosInstance.post('/travel-roadmap', payload);

            dispatch(setTravelPlan({ travelPlan: response?.data?.roadmap || []}));
            dispatch(setTravelInfo({ travelInfo: values || {}}));
            router.push('/travel-plan');
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>   
            <TextInput
                label="From"
                placeholder="From"
                name="from"
                mb="md"
                radius="md"
                {...form.getInputProps("from")}
            />
    
            <TextInput
                label="To"
                placeholder="Destination"
                name="destination"
                mb="md"
                radius="md"
                {...form.getInputProps("destination")}
            />
            <TextInput
                label="Duration"
                placeholder="Duration in days"
                name="duration"
                radius="md"
                {...form.getInputProps("duration")}
            />
            <NumberInput
                mt="md"
                label="Budget"
                placeholder="Enter your budget"
                name="budget"
                {...form.getInputProps('budget')}
                min={0}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                formatter={(value) => {
                    const parsedValue = parseFloat(value ?? '0');
                    return !Number.isNaN(parsedValue) ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '$ ';
                }}
            />
    
            <Group position="apart" mt="2.5rem">
                <Button type="submit" size="sm" loading={loading}>
                    Create Plan
                </Button>
            </Group>
        </form>
    );
  };
  
export default TravelPlanForm;
  