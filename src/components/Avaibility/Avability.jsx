import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ScheduleSelectMember = ({ selected, setSelected }) => {
    const staticTimeSlots = [
        { 1: "10AM to 11AM" },
        { 2: "11AM to 12PM" },
        { 3: "12PM to 1PM" },
        { 4: "1PM to 2PM" },
        { 5: "2PM to 3PM" },
        { 6: "3PM to 4PM" },
        { 7: "4PM to 5PM" },
        { 8: "5PM to 6PM" },
        { 9: "6PM to 7PM" },
        { 10: "7PM to 8PM" },
        { 11: "8PM to 9PM" },
        { 12: "9PM to 10PM" },
    ];

    const handleCheckboxChange = (index) => {
        // If the index is selected, remove it; if not, add it
        setSelected(prevSelected => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter(item => item !== index); // Remove
            } else {
                return [...prevSelected, index]; // Add
            }
        });
    };

    return (
        <div>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                Select when you're able to join Session:
            </Typography>
            <Box id="transition-modal-description" sx={{ mt: 1 }} className="grid gap-2 grid-cols-4">
                {
                    staticTimeSlots.map((slot, i) => {
                        const index = Object.keys(slot)[0]; // Get the index (hour key)

                        return (
                            <div key={i} className="flex gap-1">
                                <input
                                    type="checkbox"
                                    id={`hour-${index}`} // Using the index for the id and name
                                    name={`hour-${index}`}
                                    checked={selected.includes(index)} // Check if the index is selected
                                    onChange={() => handleCheckboxChange(index)} // Handle on change
                                />
                                <label htmlFor={`hour-${index}`} className="text-sm">
                                    {Object.values(slot)[0]} {/* Display the time slot */}
                                </label>
                            </div>
                        );
                    })
                }
            </Box>
        </div>
    );
}

export default ScheduleSelectMember;
