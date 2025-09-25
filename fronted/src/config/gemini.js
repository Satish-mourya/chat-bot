import { GoogleGenAI } from '@google/genai';
 

const ai = new GoogleGenAI({api_key: import.meta.env.API_KEY}); // Assumes GEMINI_API_KEY is set

const run=async (prompts)=>{
    const response=await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:prompts
    })

    console.log(response.text);
    return response.text;
    
}


export default run;