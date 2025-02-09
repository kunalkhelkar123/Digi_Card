import { exec } from "child_process";
import path from "path";
import fs from "fs";

export default function handler(req, res) {
    const backupPath = "/var/backups/test_backup.sql";

    // Check if the file exists
    if (!fs.existsSync(backupPath)) {
        return res.status(404).json({ error: "Backup file not found" });
    }

    // Send the file for download
    res.setHeader("Content-Disposition", "attachment; filename=database_backup.sql");
    res.setHeader("Content-Type", "application/sql");

    const fileStream = fs.createReadStream(backupPath);
    fileStream.pipe(res);
}
