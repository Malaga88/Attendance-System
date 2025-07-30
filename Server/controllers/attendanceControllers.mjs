import Attendance from '../models/attendanceModel.mjs';

const markAttendance = async (req, res) => {
    const { Id, course, status } = req.body;
    if (!Id || !course || !status) {
        return res.status(400).json({ message: "Id, course, and status are required" });
    }
    
    try {
        const attendance = new Attendance({ Id, course, status });
        await attendance.save();
        res.status(201).json({ message: "Attendance marked successfully", attendance });
    } catch (error) {
        console.error("Error marking attendance:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export { markAttendance };