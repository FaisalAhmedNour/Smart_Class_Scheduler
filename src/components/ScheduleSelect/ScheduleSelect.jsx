import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ScheduleSelect = ({ children, open, handleClose }) => {
    return (
        <div className=''>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                Select Schedule
            </Typography>
            <Box id="transition-modal-description" sx={{ mt: 1 }} className="grid gap-2 grid-cols-4">
                {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className='flex gap-1'>
                        <input type="checkbox" id={`hour-${i + 10}`} name={`hour-${i + 10}`} />
                        <label htmlFor={`hour-${i + 10}`} className='text-sm'>
                            {`${(i + 10) % 12 === 0 ? 12 : (i + 10) % 12}${i + 10 < 12 ? 'AM' : 'PM'} to ${(i + 11) % 12 === 0 ? 12 : (i + 11) % 12}${i + 11 < 12 ? 'AM' : 'PM'}`}
                        </label>
                    </div>
                ))}
            </Box>
            <div className='mt-4 text-center'>
                <Button 
                    variant='contained'
                    size='small'
                    sx={{
                        height: 25,
                        borderRadius: '2px'
                    }}
                >Submit</Button>
            </div>
        </div>
    )
}

export default ScheduleSelect;


// export default function TransitionsModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             <Button onClick={handleOpen}>Open modal</Button>

//         </div>
//     );
// }