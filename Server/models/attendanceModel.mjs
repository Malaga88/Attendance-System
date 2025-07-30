import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    Id: {
        type: String,
        required: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: ['present', 'absent', 'late'],
        default: 'present'
    },
    Date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;  