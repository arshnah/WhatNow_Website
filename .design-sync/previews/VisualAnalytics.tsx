import { VisualAnalytics, LanguageProvider } from "whatnow-web";

// Exam analytics: applicants-vs-seats trend line + a seat funnel.
const examData = {
  trends: [
    { year: 2021, applicants: 58000, seats: 1100 },
    { year: 2022, applicants: 64000, seats: 1180 },
    { year: 2023, applicants: 71000, seats: 1240 },
    { year: 2024, applicants: 79000, seats: 1300 },
    { year: 2025, applicants: 86000, seats: 1360 },
  ],
  seatFunnel: { applicants: 86000, seats: 1360 },
};

// Career analytics: annual openings trend + salary arc by experience level.
const careerData = {
  jobs: [
    { year: 2021, openings: 4200 },
    { year: 2022, openings: 5100 },
    { year: 2023, openings: 6400 },
    { year: 2024, openings: 7800 },
    { year: 2025, openings: 9300 },
  ],
  salaries: [
    { level: "Entry", levelHi: "प्रवेश", amount: "₹6–9 LPA", numericAmount: 7.5 },
    { level: "Mid", levelHi: "मध्य", amount: "₹14–22 LPA", numericAmount: 18 },
    { level: "Senior", levelHi: "वरिष्ठ", amount: "₹30–45 LPA", numericAmount: 37 },
    { level: "Lead", levelHi: "लीड", amount: "₹55–80 LPA", numericAmount: 67 },
  ],
};

export const ExamTrends = () => (
  <LanguageProvider>
    <VisualAnalytics type="exam" data={examData} colorTheme="indigo" />
  </LanguageProvider>
);

export const CareerSalary = () => (
  <LanguageProvider>
    <VisualAnalytics type="career" data={careerData} colorTheme="teal" />
  </LanguageProvider>
);
