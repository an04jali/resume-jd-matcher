const generatePrompt = (resumeText, jobDescription) => {
    return `
You are an expert ATS Resume Analyzer.

Analyze the following resume against the given job description.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return ONLY valid JSON in this format:

{
  "matchScore": 85,
  "missingKeywords": [
    "Docker",
    "AWS"
  ],
  "suggestions": [
    "Add Docker experience.",
    "Mention AWS deployment projects.",
    "Highlight backend API development."
  ]
}

Do not return markdown.
Do not explain anything.
Return only JSON.
`;
};

module.exports = generatePrompt;