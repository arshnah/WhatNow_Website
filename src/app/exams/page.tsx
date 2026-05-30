"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { SEARCH_INDEX } from "@/data/searchIndex";

interface ExamItem {
  id: string;
  title: string;
  category: "Design" | "Law" | "Defense" | "Maritime" | "Engineering" | "Medical";
  subtitle: string;
  description: string;
  seats: string;
  applicants: string;
  date: string;
  status: "ready" | "coming-soon";
  href?: string;
  colleges: string;
  colorClass: {
    badge: string;
    text: string;
    border: string;
    glow: string;
    iconBg: string;
  };
}

const EXAMS_DATA = {
  en: [
    {
      id: "uceed",
      title: "UCEED",
      category: "Design" as const,
      subtitle: "IIT Design Entrance",
      description: "The gateway to Bachelor of Design (B.Des) programs at IIT Bombay, IIT Delhi, IIT Guwahati, IIT Hyderabad, and other top IITs.",
      seats: "245 Seats",
      applicants: "~15,000",
      date: "January 18, 2026",
      status: "ready" as const,
      href: "/exams/uceed",
      colleges: "7 Participating IITs",
      colorClass: {
        badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
        text: "text-indigo-600",
        border: "hover:border-indigo-300",
        glow: "group-hover:shadow-indigo-500/5",
        iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100/50"
      }
    },
    {
      id: "nid",
      title: "NID DAT",
      category: "Design" as const,
      subtitle: "Design Aptitude Test",
      description: "National Institute of Design's entrance exam for premium B.Des and M.Des programs at Ahmedabad, Bengaluru, Kurukshetra, and other campuses.",
      seats: "420 Seats",
      applicants: "~15,000",
      date: "December (Stage 1)",
      status: "coming-soon" as const,
      colleges: "7 NID Campuses",
      colorClass: {
        badge: "bg-pink-50 text-pink-600 border-pink-100",
        text: "text-pink-600",
        border: "hover:border-pink-300",
        glow: "group-hover:shadow-pink-500/5",
        iconBg: "bg-pink-50 text-pink-600 border-pink-100/50"
      }
    },
    {
      id: "nift",
      title: "NIFT Entrance",
      category: "Design" as const,
      subtitle: "Fashion & Technology",
      description: "Access B.Des, B.FTech, and Masters programs across 18 National Institute of Fashion Technology campuses in India.",
      seats: "~5,200 Seats",
      applicants: "~30,000",
      date: "February 2026",
      status: "ready" as const,
      href: "/exams/nift",
      colleges: "18 Campuses nationwide",
      colorClass: {
        badge: "bg-purple-50 text-purple-600 border-purple-100",
        text: "text-purple-600",
        border: "hover:border-purple-300",
        glow: "group-hover:shadow-purple-500/5",
        iconBg: "bg-purple-50 text-purple-600 border-purple-100/50"
      }
    },
    {
      id: "clat",
      title: "CLAT",
      category: "Law" as const,
      subtitle: "Common Law Admission Test",
      description: "Entrance for five-year integrated law degrees (BA LLB, BBA LLB) at 24 premium National Law Universities (NLUs) in India.",
      seats: "~3,200 Seats",
      applicants: "~70,000",
      date: "December 2025",
      status: "ready" as const,
      href: "/exams/clat",
      colleges: "24 participating NLUs",
      colorClass: {
        badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
        text: "text-emerald-600",
        border: "hover:border-emerald-300",
        glow: "group-hover:shadow-emerald-500/5",
        iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100/50"
      }
    },
    {
      id: "nda",
      title: "NDA Exam",
      category: "Defense" as const,
      subtitle: "National Defence Academy",
      description: "UPSC exam for officer-cadet training leading to commissions in the Indian Army, Navy, and Air Force after Class 12.",
      seats: "~400 Seats",
      applicants: "~6,00,000",
      date: "April & September",
      status: "coming-soon" as const,
      colleges: "Khadakwasla, Pune",
      colorClass: {
        badge: "bg-sky-50 text-sky-600 border-sky-100",
        text: "text-sky-600",
        border: "hover:border-sky-300",
        glow: "group-hover:shadow-sky-500/5",
        iconBg: "bg-sky-50 text-sky-600 border-sky-100/50"
      }
    },
    {
      id: "imucet",
      title: "IMU CET",
      category: "Maritime" as const,
      subtitle: "Merchant Navy Entrance",
      description: "Indian Maritime University Common Entrance Test for Nautical Science, Marine Engineering, and merchant navy cadet programs.",
      seats: "~3,000 Seats",
      applicants: "~25,000",
      date: "June 2026",
      status: "ready" as const,
      href: "/exams/imu-cet",
      colleges: "IMU & Affiliated Academies",
      colorClass: {
        badge: "bg-orange-50 text-orange-600 border-orange-100",
        text: "text-orange-600",
        border: "hover:border-orange-300",
        glow: "group-hover:shadow-orange-500/5",
        iconBg: "bg-orange-50 text-orange-600 border-orange-100/50"
      }
    },
    {
      id: "jee",
      title: "JEE Main & Advanced",
      category: "Engineering" as const,
      subtitle: "Engineering Entrance",
      description: "The gateway to IITs, NITs, IIITs, and other premier engineering institutes in India.",
      seats: "~57,000 Seats (IIT/NIT/IIIT)",
      applicants: "~12,00,000",
      date: "Jan & April / May",
      status: "coming-soon" as const,
      colleges: "IITs, NITs, IIITs & GFTIs",
      colorClass: {
        badge: "bg-blue-50 text-blue-600 border-blue-100",
        text: "text-blue-600",
        border: "hover:border-blue-300",
        glow: "group-hover:shadow-blue-500/5",
        iconBg: "bg-blue-50 text-blue-600 border-blue-100/50"
      }
    },
    {
      id: "neet",
      title: "NEET UG",
      category: "Medical" as const,
      subtitle: "Medical Entrance",
      description: "Single entrance test for MBBS, BDS, AYUSH, and other medical courses in all medical colleges across India.",
      seats: "~1,09,000 MBBS Seats",
      applicants: "~24,00,000",
      date: "May 2026",
      status: "coming-soon" as const,
      colleges: "AIIMS, JIPMER, Govt & Private Medical Colleges",
      colorClass: {
        badge: "bg-rose-50 text-rose-600 border-rose-100",
        text: "text-rose-600",
        border: "hover:border-rose-300",
        glow: "group-hover:shadow-rose-500/5",
        iconBg: "bg-rose-50 text-rose-600 border-rose-100/50"
      }
    }
  ],
  hi: [
    {
      id: "uceed",
      title: "UCEED",
      category: "Design" as const,
      subtitle: "IIT डिज़ाइन प्रवेश परीक्षा",
      description: "IIT बॉम्बे, IIT दिल्ली, IIT गुवाहाटी, IIT हैदराबाद और अन्य शीर्ष IIT में बैचलर ऑफ डिज़ाइन (B.Des) कार्यक्रमों का प्रवेश द्वार।",
      seats: "245 सीटें",
      applicants: "~15,000",
      date: "18 जनवरी, 2026",
      status: "ready" as const,
      href: "/exams/uceed",
      colleges: "7 भाग लेने वाले IIT",
      colorClass: {
        badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
        text: "text-indigo-600",
        border: "hover:border-indigo-300",
        glow: "group-hover:shadow-indigo-500/5",
        iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100/50"
      }
    },
    {
      id: "nid",
      title: "NID DAT",
      category: "Design" as const,
      subtitle: "डिज़ाइन एप्टीट्यूड टेस्ट",
      description: "अहमदाबाद, बेंगलुरु, कुरुक्षेत्र और अन्य परिसरों में प्रीमियम B.Des और M.Des कार्यक्रमों के लिए राष्ट्रीय डिज़ाइन संस्थान की प्रवेश परीक्षा।",
      seats: "420 सीटें",
      applicants: "~15,000",
      date: "दिसंबर (चरण 1)",
      status: "coming-soon" as const,
      colleges: "7 NID परिसर",
      colorClass: {
        badge: "bg-pink-50 text-pink-600 border-pink-100",
        text: "text-pink-600",
        border: "hover:border-pink-300",
        glow: "group-hover:shadow-pink-500/5",
        iconBg: "bg-pink-50 text-pink-600 border-pink-100/50"
      }
    },
    {
      id: "nift",
      title: "NIFT Entrance",
      category: "Design" as const,
      subtitle: "फैशन और प्रौद्योगिकी",
      description: "भारत में 18 राष्ट्रीय फैशन प्रौद्योगिकी संस्थान परिसरों में B.Des, B.FTech और मास्टर्स कार्यक्रमों तक पहुँच प्राप्त करें।",
      seats: "~5,200 सीटें",
      applicants: "~30,000",
      date: "फरवरी 2026",
      status: "ready" as const,
      href: "/exams/nift",
      colleges: "18 परिसर देश भर में",
      colorClass: {
        badge: "bg-purple-50 text-purple-600 border-purple-100",
        text: "text-purple-600",
        border: "hover:border-purple-300",
        glow: "group-hover:shadow-purple-500/5",
        iconBg: "bg-purple-50 text-purple-600 border-purple-100/50"
      }
    },
    {
      id: "clat",
      title: "CLAT",
      category: "Law" as const,
      subtitle: "कॉमन लॉ एडमिशन टेस्ट",
      description: "भारत में 24 प्रीमियम नेशनल लॉ यूनिवर्सिटीज (NLU) में पांच वर्षीय एकीकृत कानून डिग्री (BA LLB, BBA LLB) के लिए प्रवेश।",
      seats: "~3,200 सीटें",
      applicants: "~70,000",
      date: "दिसंबर 2025",
      status: "ready" as const,
      href: "/exams/clat",
      colleges: "24 भाग लेने वाले NLU",
      colorClass: {
        badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
        text: "text-emerald-600",
        border: "hover:border-emerald-300",
        glow: "group-hover:shadow-emerald-500/5",
        iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100/50"
      }
    },
    {
      id: "nda",
      title: "NDA Exam",
      category: "Defense" as const,
      subtitle: "राष्ट्रीय रक्षा अकादमी",
      description: "कक्षा 12 के बाद भारतीय थल सेना, नौसेना और वायु सेना में कमीशन के लिए अधिकारी-कैडेट प्रशिक्षण के लिए यूपीएससी परीक्षा।",
      seats: "~400 सीटें",
      applicants: "~6,00,000",
      date: "अप्रैल और सितंबर",
      status: "coming-soon" as const,
      colleges: "खड़कवासला, पुणे",
      colorClass: {
        badge: "bg-sky-50 text-sky-600 border-sky-100",
        text: "text-sky-600",
        border: "hover:border-sky-300",
        glow: "group-hover:shadow-sky-500/5",
        iconBg: "bg-sky-50 text-sky-600 border-sky-100/50"
      }
    },
    {
      id: "imucet",
      title: "IMU CET",
      category: "Maritime" as const,
      subtitle: "मर्चेंट नेवी प्रवेश परीक्षा",
      description: "नॉटिकल साइंस, मरीन इंजीनियरिंग और मर्चेंट नेवी कैडेट कार्यक्रमों के लिए भारतीय समुद्री विश्वविद्यालय सामान्य प्रवेश परीक्षा।",
      seats: "~3,000 सीटें",
      applicants: "~25,000",
      date: "जून 2026",
      status: "ready" as const,
      href: "/exams/imu-cet",
      colleges: "IMU और संबद्ध अकादमियां",
      colorClass: {
        badge: "bg-orange-50 text-orange-600 border-orange-100",
        text: "text-orange-600",
        border: "hover:border-orange-300",
        glow: "group-hover:shadow-orange-500/5",
        iconBg: "bg-orange-50 text-orange-600 border-orange-100/50"
      }
    },
    {
      id: "jee",
      title: "JEE Main & Advanced",
      category: "Engineering" as const,
      subtitle: "इंजीनियरिंग प्रवेश परीक्षा",
      description: "भारत में IIT, NIT, IIIT और अन्य प्रमुख इंजीनियरिंग संस्थानों का प्रवेश द्वार।",
      seats: "~57,000 सीटें (IIT/NIT/IIIT)",
      applicants: "~12,00,000",
      date: "जनवरी और अप्रैल / मई",
      status: "coming-soon" as const,
      colleges: "IITs, NITs, IIITs और GFTIs",
      colorClass: {
        badge: "bg-blue-50 text-blue-600 border-blue-100",
        text: "text-blue-600",
        border: "hover:border-blue-300",
        glow: "group-hover:shadow-blue-500/5",
        iconBg: "bg-blue-50 text-blue-600 border-blue-100/50"
      }
    },
    {
      id: "neet",
      title: "NEET UG",
      category: "Medical" as const,
      subtitle: "मेडिकल प्रवेश परीक्षा",
      description: "भारत भर के सभी मेडिकल कॉलेजों में MBBS, BDS, AYUSH और अन्य मेडिकल पाठ्यक्रमों के लिए एकल प्रवेश परीक्षा।",
      seats: "~1,09,000 MBBS सीटें",
      applicants: "~24,00,000",
      date: "मई 2026",
      status: "coming-soon" as const,
      colleges: "AIIMS, JIPMER, सरकारी और निजी मेडिकल कॉलेज",
      colorClass: {
        badge: "bg-rose-50 text-rose-600 border-rose-100",
        text: "text-rose-600",
        border: "hover:border-rose-300",
        glow: "group-hover:shadow-rose-500/5",
        iconBg: "bg-rose-50 text-rose-600 border-rose-100/50"
      }
    }
  ]
};

const CATEGORIES_TRANSLATIONS = {
  en: {
    "All": "All",
    "Design": "Design",
    "Law": "Law",
    "Defense": "Defense",
    "Maritime": "Maritime",
    "Engineering": "Engineering",
    "Medical": "Medical"
  },
  hi: {
    "All": "सभी",
    "Design": "डिज़ाइन",
    "Law": "कानून",
    "Defense": "रक्षा",
    "Maritime": "मर्चेंट नेवी",
    "Engineering": "इंजीनियरिंग",
    "Medical": "मेडिकल"
  }
};

const localTranslations = {
  en: {
    home: "Home",
    exams: "Exams",
    heroHeadline: "Entrance Exams.",
    heroHeadlineSub: "Honest, un-sponsored roadmaps.",
    heroDesc: "We cover careers and exams others ignore or hype up. What the exam really tests, whether you should actually write it, and how to prepare without spending lakhs on coaching.",
    searchPlaceholder: "Search all exam resources...",
    guideReady: "Guide Ready",
    comingSoon: "Coming Soon",
    colleges: "Colleges",
    seats: "Seats",
    applicants: "Aspirants",
    date: "Date",
    viewGuide: "View Full Guide",
    inDev: "Guide in development",
    operateTitle: "How we operate",
    operateHeadline: "Honest analysis for critical choices",
    op1Title: "Is it right for you?",
    op1Desc: "We lead with suitability, not prep shortcuts. We list the day-to-day realities and exit options so you can choose based on fit, not prestige.",
    op2Title: "No sponsor bias",
    op2Desc: "We receive zero funding or referral fees from coaching centres or private colleges. Our evaluations are completely independent and data-backed.",
    op3Title: "Actionable roadmaps",
    op3Desc: "We curate free resources, past exam sheets, and self-study blueprints from seniors who succeeded without expensive paid coaching classes.",
    requestBadge: "Request Guides",
    requestHeadline: "Can't find your exam?",
    requestDesc: "Tell us what exam guide you need. We compile roadmap requests and prioritize writing guides for exams that students request the most.",
    reqSuccessTitle: "Request Submitted!",
    reqSuccessDesc: "Thank you. We have recorded your request and will notify you when the guide goes live.",
    reqAnotherBtn: "Submit another request",
    examNameLabel: "Exam Name",
    categoryLabel: "Category",
    emailLabel: "Your Email",
    submitBtn: "Send Request",
    submittingBtn: "Submitting Request...",
    errorNoExam: "Please enter the exam name.",
    errorNoEmail: "Please enter a valid email address."
  },
  hi: {
    home: "होम",
    exams: "परीक्षाएं",
    heroHeadline: "प्रवेश परीक्षाएँ।",
    heroHeadlineSub: "ईमानदार, विज्ञापन-मुक्त रोडमैप।",
    heroDesc: "हम उन करियर और परीक्षाओं को कवर करते हैं जिन्हें अन्य अनदेखा करते हैं या बढ़ा-चढ़ाकर बताते हैं। परीक्षा वास्तव में क्या परीक्षण करती है, क्या आपको वास्तव में इसे लिखना चाहिए, और कोचिंग पर लाखों खर्च किए बिना तैयारी कैसे करें।",
    searchPlaceholder: "सभी परीक्षा संसाधनों को खोजें...",
    guideReady: "गाइड तैयार है",
    comingSoon: "जल्द आ रहा है",
    colleges: "कॉलेज",
    seats: "सीटें",
    applicants: "उम्मीदवार",
    date: "तारीख",
    viewGuide: "पूरी गाइड देखें",
    inDev: "गाइड विकास में है",
    operateTitle: "हम कैसे काम करते हैं",
    operateHeadline: "महत्वपूर्ण विकल्पों के लिए ईमानदार विश्लेषण",
    op1Title: "क्या यह आपके लिए सही है?",
    op1Desc: "हम उपयुक्तता के साथ नेतृत्व करते हैं, तैयारी के शॉर्टकट के साथ नहीं। हम दैनिक वास्तविकताओं और बाहर निकलने के विकल्पों को सूचीबद्ध करते हैं ताकि आप उपयुक्तता के आधार पर चुन सकें, प्रतिष्ठा के आधार पर नहीं।",
    op2Title: "कोई प्रायोजक पक्षपात नहीं",
    op2Desc: "हमें कोचिंग सेंटरों या निजी कॉलेजों से शून्य फंडिंग या रेफरल शुल्क मिलता है। हमारे मूल्यांकन पूरी तरह से स्वतंत्र और डेटा-समर्थित हैं।",
    op3Title: "व्यावहारिक रोडमैप",
    op3Desc: "हम उन वरिष्ठों से मुफ्त संसाधन, पिछले परीक्षा पत्र और स्व-अध्ययन ब्लूप्रिंट तैयार करते हैं जिन्होंने महंगी कोचिंग कक्षाओं के बिना सफलता प्राप्त की।",
    requestBadge: "अनुरोध गाइड",
    requestHeadline: "अपनी परीक्षा नहीं मिल रही है?",
    requestDesc: "हमें बताएं कि आपको किस परीक्षा गाइड की आवश्यकता है। हम अनुरोधों को संकलित करते हैं और उन परीक्षाओं के लिए गाइड लिखने को प्राथमिकता देते हैं जिनके लिए छात्र सबसे अधिक अनुरोध करते हैं।",
    reqSuccessTitle: "अनुरोध सबमिट किया गया!",
    reqSuccessDesc: "धन्यवाद। हमने आपका अनुरोध रिकॉर्ड कर लिया है और गाइड लाइव होने पर आपको सूचित करेंगे।",
    reqAnotherBtn: "दूसरा अनुरोध सबमिट करें",
    examNameLabel: "परीक्षा का नाम",
    categoryLabel: "श्रेणी",
    emailLabel: "आपका ईमेल",
    submitBtn: "अनुरोध भेजें",
    submittingBtn: "अनुरोध सबमिट किया जा रहा है...",
    errorNoExam: "कृपया परीक्षा का नाम दर्ज करें।",
    errorNoEmail: "कृपया एक मान्य ईमेल पता दर्ज करें।"
  }
};

export default function ExamsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Design" | "Law" | "Defense" | "Maritime" | "Engineering" | "Medical">("All");

  const t = localTranslations[language];
  const EXAMS = EXAMS_DATA[language] as ExamItem[];
  const categoriesTranslations = CATEGORIES_TRANSLATIONS[language] as Record<string, string>;

  // Form State
  const [reqExam, setReqExam] = useState("");
  const [reqCategory, setReqCategory] = useState("Design");
  const [reqEmail, setReqEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Custom Dropdown State
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const filteredExams = EXAMS.filter(
    (exam) => selectedCategory === "All" || exam.category === selectedCategory
  );

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqExam.trim()) {
      setErrorMessage(t.errorNoExam);
      setFormStatus("error");
      return;
    }
    if (!reqEmail.trim() || !/\S+@\S+\.\S+/.test(reqEmail)) {
      setErrorMessage(t.errorNoEmail);
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    setErrorMessage("");

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus("success");
      setReqExam("");
      setReqEmail("");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
      setFormStatus("error");
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchSelectedIndex, setSearchSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ctrl+K to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsSearchFocused(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter SEARCH_INDEX
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return SEARCH_INDEX.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchKw = item.keywords.some(kw => kw.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchKw;
    }).slice(0, 5); // limit to 5 results for clean dropdown height
  }, [searchQuery]);

  // Handle keyboard navigation inside search dropdown
  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (searchResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSearchSelectedIndex((prev) => (prev + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSearchSelectedIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const activeItem = searchResults[searchSelectedIndex];
      if (activeItem && activeItem.status !== "coming-soon") {
        router.push(activeItem.href);
        setIsSearchFocused(false);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsSearchFocused(false);
      searchInputRef.current?.blur();
    }
  };

  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      {/* ─── HERO / HEADER ─── */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/60 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          {/* Layered glowing blobs */}
          <div className="absolute -top-[10%] -right-[5%] w-[450px] h-[450px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[350px] h-[350px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

          {/* Smooth vector paths */}
          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5563ED" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#5563ED" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Wave 1 */}
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#wave-grad-1)" />
            {/* Wave 2 */}
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#wave-grad-2)" />
            {/* Wave stroke lines */}
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#5563ED" strokeWidth="1.5" strokeOpacity="0.12" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.06" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-400 mb-8">
                <Link href="/" className="hover:text-primary transition-colors">{t.home}</Link>
                <span>›</span>
                <span className="text-primary">{t.exams}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
                {t.heroHeadline}<br />
                <span className="text-primary">{t.heroHeadlineSub}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                {t.heroDesc}
              </p>
            </div>

            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Glassmorphic dashboard stats & search block */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-[2.5rem] p-8 shadow-xl shadow-slate-100/50"
              >
                {/* Subtle top primary highlight bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary" />

                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <Icon icon="solar:document-text-bold-duotone" className="w-4 h-4 text-primary" />
                  <span>{language === 'hi' ? 'परीक्षा निर्देशिका' : 'Exams Directory'}</span>
                </h3>

                {/* Inline Search Bar with Dropdown */}
                <div ref={searchContainerRef} className="relative mb-6">
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/60 rounded-2xl px-5 py-4 w-full text-slate-500 text-sm font-medium transition-all shadow-xs focus-within:border-primary focus-within:bg-white">
                    <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-slate-400 shrink-0" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder={language === 'hi' ? 'खोजें (जैसे: uceed, clat)...' : 'Search (e.g. uceed, clat)...'}
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSearchSelectedIndex(0);
                      }}
                      onFocus={() => setIsSearchFocused(true)}
                      onKeyDown={handleSearchKeyDown}
                      className="w-full text-neutral-dark placeholder-slate-400 bg-transparent focus:outline-none font-semibold text-sm"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSearchSelectedIndex(0);
                        }}
                        className="p-1 rounded-full text-slate-400 hover:text-neutral-dark hover:bg-slate-200/50 transition-colors cursor-pointer shrink-0"
                      >
                        <Icon icon="solar:close-circle-bold" className="w-4 h-4" />
                      </button>
                    )}
                    <kbd className="hidden sm:inline-block border border-slate-250 bg-white rounded-md px-1.5 py-0.5 text-[10px] font-bold text-slate-400 shrink-0">
                      Ctrl+K
                    </kbd>
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isSearchFocused && searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 right-0 top-full mt-2 z-50 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-2xl shadow-slate-900/10 max-h-[300px] overflow-y-auto p-2 space-y-1"
                      >
                        {searchResults.map((item, idx) => {
                          const isSelected = idx === searchSelectedIndex;
                          const isComingSoon = item.status === 'coming-soon';
                          return (
                            <div
                              key={item.href}
                              onClick={() => {
                                if (!isComingSoon) {
                                  router.push(item.href);
                                  setIsSearchFocused(false);
                                }
                              }}
                              onMouseEnter={() => setSearchSelectedIndex(idx)}
                              className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer select-none transition-all ${
                                isSelected 
                                  ? "bg-slate-50 border border-slate-100" 
                                  : "bg-transparent border border-transparent"
                              } ${isComingSoon ? "opacity-60 cursor-not-allowed" : ""}`}
                            >
                              <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border ${
                                item.category === 'Careers' 
                                  ? 'text-secondary bg-secondary/5 border-secondary/10' 
                                  : item.category === 'Exams' 
                                  ? 'text-primary bg-primary/5 border-primary/10' 
                                  : 'text-accent bg-accent/5 border-accent/10'
                              }`}>
                                <Icon 
                                  icon={
                                    item.category === 'Careers' 
                                      ? "solar:compass-bold-duotone" 
                                      : item.category === 'Exams' 
                                      ? "solar:document-text-bold-duotone" 
                                      : "solar:book-bookmark-bold-duotone"
                                  } 
                                  className="w-4 h-4" 
                                />
                              </div>
                              <div className="flex-1 min-w-0 pr-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-xs font-black text-neutral-dark truncate">{item.title}</span>
                                  {isComingSoon && (
                                    <span className="text-[8px] font-black uppercase bg-orange-50 text-orange-500 border border-orange-100 px-1 py-0.2 rounded-sm tracking-wider">
                                      Soon
                                    </span>
                                  )}
                                </div>
                                <span className="text-[10px] text-slate-450 line-clamp-1 leading-tight">{item.description}</span>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Empty state dropdown if query doesn't match */}
                  <AnimatePresence>
                    {isSearchFocused && searchQuery.trim() && searchResults.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 4 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-0 right-0 top-full mt-2 z-50 bg-white border border-slate-200/80 rounded-2xl shadow-xl p-6 text-center"
                      >
                        <span className="text-xs font-bold text-slate-400 block mb-1">
                          {language === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No results found'}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          {language === 'hi' ? 'सक्रिय करियर या परीक्षाओं की खोज करें।' : 'Try searching for active guides.'}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50/60 rounded-2xl p-4 border border-slate-100/80 flex flex-col justify-center">
                    <span className="text-3xl font-black text-neutral-dark block mb-0.5 leading-none">4</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 leading-none">{language === 'hi' ? 'सक्रिय परीक्षाएं' : 'Active Exams'}</span>
                  </div>
                  
                  <div className="bg-slate-50/60 rounded-2xl p-4 border border-slate-100/80 flex flex-col justify-center">
                    <span className="text-3xl font-black text-primary block mb-0.5 leading-none">6+</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 leading-none">{language === 'hi' ? 'जल्द आ रहे हैं' : 'Upcoming Exams'}</span>
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100/50 rounded-2xl p-4 col-span-2 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-100/60 flex items-center justify-center text-emerald-600 shrink-0">
                      <Icon icon="solar:shield-check-bold" className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-emerald-800 block mb-0.5 leading-tight">{language === 'hi' ? '100% निष्पक्ष और विज्ञापन-मुक्त' : '100% Unbiased & Ad-Free'}</span>
                      <span className="text-[9px] font-bold text-emerald-600/90 uppercase tracking-wide leading-none">{language === 'hi' ? 'कोई कोचिंग संबद्धता नहीं' : 'No coaching sponsors or agenda'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CATALOG DIRECTORY ─── */}
      <section className="py-16 md:py-24 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Category Filters */}
        <div className="flex items-center gap-8 overflow-x-auto pb-0 mb-12 scrollbar-none border-b border-slate-200/50">
          {(["All", "Design", "Law", "Defense", "Maritime", "Engineering", "Medical"] as const).map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative pb-4 text-xs md:text-sm font-extrabold uppercase tracking-widest transition-colors duration-300 cursor-pointer whitespace-nowrap select-none focus:outline-none ${isActive
                    ? "text-neutral-dark font-black"
                    : "text-slate-400 hover:text-neutral-dark"
                  }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span className="relative z-10">{categoriesTranslations[category]}</span>

                {/* Underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeExamCategoryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full z-20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Exams Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredExams.map((exam) => {
              const isReady = exam.status === "ready";
              const CardWrapper = isReady ? Link : "div";
              const getGlowBg = (cat: string) => {
                switch (cat.toLowerCase()) {
                  case "design":
                    return "bg-indigo-500/5 group-hover:bg-indigo-500/10";
                  case "law":
                    return "bg-emerald-500/5 group-hover:bg-emerald-500/10";
                  case "defense":
                  case "defence":
                    return "bg-sky-500/5 group-hover:bg-sky-500/10";
                  case "maritime":
                    return "bg-orange-500/5 group-hover:bg-orange-500/10";
                  case "engineering":
                    return "bg-blue-500/5 group-hover:bg-blue-500/10";
                  case "medical":
                    return "bg-rose-500/5 group-hover:bg-rose-500/10";
                  default:
                    return "bg-slate-500/5 group-hover:bg-slate-500/10";
                }
              };

              const displayCategory = categoriesTranslations[exam.category] || exam.category;

              return (
                <motion.div
                  key={exam.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group flex"
                >
                  <CardWrapper
                    href={exam.href || "#"}
                    className={`relative overflow-hidden bg-white/80 backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between w-full shadow-sm group transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1.5 ${exam.colorClass.border} ${exam.colorClass.glow}`}
                  >
                    {/* Ambient glow blob */}
                    <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${getGlowBg(exam.category)}`} />

                    <div className="relative z-10">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-8 gap-3">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border shadow-sm ${exam.colorClass.badge}`}>
                          {displayCategory}
                        </span>

                        {isReady ? (
                          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            {t.guideReady}
                          </span>
                        ) : (
                          <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 bg-orange-50/50 border border-orange-100 px-3.5 py-1.5 rounded-full shadow-sm">
                            {t.comingSoon}
                          </span>
                        )}
                      </div>

                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-black text-neutral-dark mb-1 group-hover:text-primary transition-colors duration-300">
                          {exam.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                          {exam.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                        {exam.description}
                      </p>
                    </div>

                    {/* Stats & Footer */}
                    <div className="relative z-10 border-t border-slate-100 pt-6 mt-auto">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-semibold text-slate-500 mb-6 bg-slate-50/50 border border-slate-100/50 rounded-2xl p-4">
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.colleges}</span>
                          <span className="font-bold text-neutral-dark truncate block">{exam.colleges}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.seats}</span>
                          <span className="font-bold text-neutral-dark truncate block">{exam.seats}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.applicants}</span>
                          <span className="font-bold text-neutral-dark truncate block">{exam.applicants}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.date}</span>
                          <span className="font-bold text-neutral-dark truncate block">{exam.date}</span>
                        </div>
                      </div>

                      {isReady ? (
                        <div className="flex items-center gap-1.5 justify-end text-xs font-black uppercase tracking-wider text-neutral-dark group-hover:text-primary transition-colors duration-300">
                          <span>{t.viewGuide}</span>
                          <Icon icon="ph:arrow-right" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      ) : (
                        <div className="text-right text-xs font-bold text-slate-400 italic">
                          {t.inDev}
                        </div>
                      )}
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ─── WHY OUR GUIDES ARE DIFFERENT ─── */}
      <section className="bg-white border-y border-slate-200/60 py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">{t.operateTitle}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-neutral-dark tracking-tight leading-tight">
              {t.operateHeadline}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8 lg:p-10">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 shadow-inner">
                <Icon icon="solar:question-square-bold-duotone" className="w-66 h-6" />
              </div>
              <h4 className="text-xl font-black text-neutral-dark mb-3">{t.op1Title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.op1Desc}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8 lg:p-10">
              <div className="h-12 w-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-6 shadow-inner">
                <Icon icon="solar:close-circle-bold-duotone" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-neutral-dark mb-3">{t.op2Title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.op2Desc}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8 lg:p-10">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-inner">
                <Icon icon="solar:book-linear" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-neutral-dark mb-3">{t.op3Title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.op3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REQUEST A GUIDE (SUPABASE READY) ─── */}
      <section className="py-20 md:py-28 container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        <div className="bg-gradient-to-br from-[#0D1B3D] to-[#16295A] text-white rounded-[2.5rem] p-8 md:p-16 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex-1 z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-6 inline-block">
              {t.requestBadge}
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">
              {t.requestHeadline}
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
              {t.requestDesc}
            </p>
          </div>

          <div className="flex-1 w-full z-10">
            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]"
                >
                  <div className="h-16 w-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                    <Icon icon="solar:check-read-bold" className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t.reqSuccessTitle}</h4>
                  <p className="text-sm text-slate-300 mb-6 max-w-xs mx-auto leading-relaxed">
                    {t.reqSuccessDesc}
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="text-xs font-bold uppercase tracking-wider text-indigo-300 hover:text-white transition-colors cursor-pointer border border-white/10 hover:border-white/30 rounded-xl px-4 py-2 bg-white/5"
                  >
                    {t.reqAnotherBtn}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleRequestSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                      {t.examNameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. NIFT, SAT, IMU CET"
                      value={reqExam}
                      onChange={(e) => setReqExam(e.target.value)}
                      disabled={formStatus === "submitting"}
                      className="w-full bg-white/5 border border-white/15 focus:border-indigo-400 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative" ref={dropdownRef}>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                        {t.categoryLabel}
                      </label>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        disabled={formStatus === "submitting"}
                        className="w-full bg-white/5 border border-white/15 focus:border-indigo-400 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all flex items-center justify-between cursor-pointer select-none disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        <span className="font-semibold">{categoriesTranslations[reqCategory] || reqCategory}</span>
                        <Icon
                          icon="solar:alt-arrow-down-linear"
                          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-white" : ""
                            }`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.96 }}
                            animate={{ opacity: 1, y: 4, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute z-50 left-0 right-0 bg-[#122046] border border-white/10 rounded-2xl shadow-xl py-2 overflow-hidden"
                          >
                            {["Design", "Law", "Defense", "Maritime"].map((category) => {
                              const isSelected = reqCategory === category;
                              return (
                                <button
                                  key={category}
                                  type="button"
                                  onClick={() => {
                                    setReqCategory(category);
                                    setDropdownOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-3 text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${isSelected
                                      ? "bg-indigo-500/20 text-white font-bold"
                                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                  <span>{categoriesTranslations[category] || category}</span>
                                  {isSelected && (
                                    <Icon
                                      icon="solar:check-read-bold"
                                      className="w-4 h-4 text-indigo-400 shrink-0"
                                    />
                                  )}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={reqEmail}
                        onChange={(e) => setReqEmail(e.target.value)}
                        disabled={formStatus === "submitting"}
                        className="w-full bg-white/5 border border-white/15 focus:border-indigo-400 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {formStatus === "error" && (
                    <div className="text-xs font-bold text-red-400 flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3.5">
                      <Icon icon="solar:shield-warning-bold" className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-primary hover:bg-primary-hover text-white text-sm font-black uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Icon icon="line-md:loading-twotone-loop" className="w-5 h-5 animate-spin" />
                        <span>{t.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <Icon icon="solar:document-add-linear" className="w-5 h-5" />
                        <span>{t.submitBtn}</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
