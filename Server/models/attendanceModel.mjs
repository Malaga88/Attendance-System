import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    Id: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
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
    }
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;  