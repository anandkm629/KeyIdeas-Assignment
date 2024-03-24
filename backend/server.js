const express = require("express");
const fs = require("fs");
const xlsx = require("xlsx");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const filePath = "Wedding Products.xlsx";

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: "File not found" });
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading file" });
      return;
    }

    try {
      const workbook = xlsx.read(data, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = xlsx.utils.sheet_to_json(worksheet);

      res.json(jsonData);
    } catch (parseError) {
      res.status(500).json({ error: "Error parsing XLSX file" });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
