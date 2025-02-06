import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomModal from '../Modal/Modal';
import ScheduleSelect from '../ScheduleSelect/ScheduleSelect';
import Course from '../../pages/Course/Course';

export default function CourseCard({ course }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card sx={{ width: 345, mx: 'auto', cursor: 'pointer' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={course?.image}
                title={course?.title}
            />
            <CardContent>
                <Typography className='flex justify-between items-end pb-2'>
                    <Typography variant="h5" component="div">
                        {course?.title}
                    </Typography>
                    <Typography className='text-sm'>
                        {course?.duration}
                    </Typography>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {course.description.short}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    fullWidth
                    size="small"
                    variant='outlined'
                    onClick={handleOpen}
                    sx={{
                        textTransform: 'capitalize',
                        mx: 'auto'
                    }}
                >Details</Button>
                <CustomModal
                    open={open}
                    handleClose={handleClose}
                >
                    <Course course={course} handleClose={handleClose}/>
                </CustomModal>
            </CardActions>
        </Card>
    );
}
