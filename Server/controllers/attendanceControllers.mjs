import Attendance from '../models/attendanceModel.mjs';

const markAttendance = async (req, res) => {
    const { Id, course, status } = req.body;
    if (!Id || !course || !status) {
        return res.status(400).json({ message: "Id, course, and status are required" });
    }

    try {
        let attendance = await Attendance.findOne({ Id, course, date: new Date().toISOString().split('T')[0] });
        if (attendance) {
            attendance.status = status;
            await attendance.save();
            return res.status(200).json({ message: "Attendance updated successfully", attendance });
        }
        const newAttendance = new Attendance({ Id, course, status });
        await newAttendance.save();
        res.status(201).json({ message: "Attendance marked successfully", attendance: newAttendance });
    } catch (error) {
        console.error("Error marking attendance:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export { markAttendance };