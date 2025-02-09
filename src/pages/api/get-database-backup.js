import { exec } from "child_process";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const backupFileName = `backup_${Date.now()}.sql`;
    const backupDir = "/var/backups"; // ✅ Corrected directory path

    // Ensure the backup directory exists
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }

    const backupFilePath = path.join(backupDir, backupFileName);

    // ✅ Corrected MySQL dump command
    const dbHost = "localhost";
    const dbUser = "root";
    const dbPassword = "123@Kkkkkkkkkkk";
    const dbName = "digiswipe";
    const mysqldumpPath = "/usr/bin/mysqldump"; // Check correct path with `which mysqldump`

    const command = `${mysqldumpPath} -h ${dbHost} -u ${dbUser} --password=${dbPassword} ${dbName} > ${backupFilePath}`;

    exec(command, (error) => {
        if (error) {
            console.error("Backup failed:", error);
            return res.status(500).json({ message: "Backup failed", error: error.message });
        }

        res.setHeader("Content-Disposition", `attachment; filename=${backupFileName}`);
        res.setHeader("Content-Type", "application/octet-stream");

        const fileStream = fs.createReadStream(backupFilePath);
        fileStream.pipe(res);

        fileStream.on("end", () => {
            fs.unlink(backupFilePath, (unlinkErr) => {
                if (unlinkErr) console.error("Failed to delete backup file:", unlinkErr);
            });
        });
    });
}
