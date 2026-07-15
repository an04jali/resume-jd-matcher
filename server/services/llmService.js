const groq = require("../config/groq");
const generatePrompt = require("../utils/prompt");

const analyzeResume = async (resumeText, jobDescription) => {
    try {

        const prompt = generatePrompt(resumeText, jobDescription);

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.3,
        });

        return completion.choices[0].message.content;

    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    analyzeResume,
};