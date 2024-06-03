import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Needed to handle __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // Use express.json() for JSON body parsing
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    const url = "https://api.getalby.com/invoices";
    const headers = {
      Authorization: `Bearer ${process.env.ALBY_CREATE_ORDER_AUTH}`,
      "Content-Type": "application/json",
    };
    const data = {
      amount: amount, // Use the amount from the request body
      description: "Service Payment",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create order"); // Handle fetch errors
    }

    const responseData = await response.json();
    return res.status(200).json({ status: "OK", ...responseData });
  } catch (error) {
    console.error("Error:", error.message); // Log errors for debugging
    return res.status(500).json({ status: "ERROR", message: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
