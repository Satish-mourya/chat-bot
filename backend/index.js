import express from "express";
import cors from "cors"
import "dotenv/config"
import { GoogleGenAI } from "@google/genai";

const app=express();
app.use(cors());
app.use(express.json());


const ai = new GoogleGenAI({ api_key: process.env.GEMINI_API_KEY });
app.post("/generate",async (req,res)=>{
    try{
        const {prompt} =req.body;
        const response=await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
          res.json({ result: response.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong!" });
  }

    
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));