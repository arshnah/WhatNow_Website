"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

interface ArticleContent {
  title: string;
  tag: string;
  readTime: string;
  author: string;
  date: string;
  introduction: string;
  sections: {
    title: string;
    content: string;
    quote?: string;
    bullets?: string[];
  }[];
}

const articlesContentData: Record<string, Record<"en" | "hi", ArticleContent>> = {
  "iit-drop-year": {
    en: {
      title: "Is an IIT brand name worth a drop year?",
      tag: "Decision Sandbox",
      readTime: "7 min read",
      author: "WhatNow Editorial",
      date: "May 2026",
      introduction: "Every year, over 1.5 million candidates sit for JEE Main. Only a fraction make it to the IITs. For the rest, the choice is stark: settle for a tier-2 or tier-3 college, or take a gap year (drop) to try again. But does the IIT tag justify this massive investment of time and energy?",
      sections: [
        {
          title: "1. The Math of ROI: Gap Year Cost vs. Lifetime Gain",
          content: "Let's look at the financial return on investment. If you transition from a local college with a starting salary of ₹4L/yr to an IIT with a starting package of ₹16L/yr, the gap year pays for itself in the first year of employment. However, if you already have a seat at a top-tier NIT, IIIT, or BITS, the opportunity cost is one year of lost income and career progression. A drop year also carries a heavy risk of rank dilution due to the unpredictable nature of JEE Advanced.",
          quote: "A gap year is not just 'one year of study'—it is the loss of your first year of senior-level salary at the end of your career."
        },
        {
          title: "2. The Silent Mental Toll",
          content: "No coaching institute warns you about the isolation of a drop year. While your classmates post photos of college fests and new friendships, you will be studying the same syllabus in a high-pressure environment. This pressure peak can lead to exam anxiety, self-doubt, and burnout.",
          bullets: [
            "Isolation from peers who have moved on to colleges.",
            "Extreme performance anxiety because you have 'everything to lose'.",
            "The risk of scoring lower than the previous year due to exam-day stress."
          ]
        },
        {
          title: "3. The 2026 Reality: Skills Over College Tags",
          content: "In the modern tech ecosystem, open-source contributions, high-quality GitHub portfolios, and specialized skills (like AI development or system architecture) matter more than a degree certificate. Companies like Google, Zoho, and countless startups hire based on technical assessments rather than campus reputation. If you choose a non-IIT path, you can use the year to build practical projects, learn modern frameworks, and still secure a high-paying corporate role."
        }
      ]
    },
    hi: {
      title: "क्या IIT ब्रांड नेम के लिए एक साल ड्रॉप करना सही है?",
      tag: "निर्णय सैंडबॉक्स",
      readTime: "7 मिनट पाठ",
      author: "व्हाटनाव संपादकीय",
      date: "मई 2026",
      introduction: "हर साल 15 लाख से अधिक छात्र JEE परीक्षा में बैठते हैं। इनमें से केवल एक छोटा सा हिस्सा ही IIT तक पहुँच पाता है। बाकी छात्रों के लिए विकल्प कठिन होते हैं: किसी सामान्य कॉलेज में दाखिला लें या दोबारा प्रयास करने के लिए एक वर्ष का ड्रॉप लें। क्या वास्तव में IIT का टैग इस बड़े समय और ऊर्जा के निवेश के लायक है?",
      sections: [
        {
          title: "1. रिटर्न ऑन इन्वेस्टमेंट (ROI) का गणित",
          content: "यदि आप किसी स्थानीय कॉलेज से शुरुआत करते हैं जहाँ औसत वेतन ₹4 लाख/वर्ष है, और ड्रॉप लेकर IIT में प्रवेश पाते हैं जहाँ औसत वेतन ₹16 लाख/वर्ष है, तो आपका गैप ईयर करियर के पहले ही साल में अपनी लागत वसूल कर लेता है। लेकिन, यदि आपके पास पहले से ही किसी शीर्ष NIT, IIIT या BITS में सीट है, तो ड्रॉप करने का मतलब है अपने करियर के एक वर्ष के वेतन का नुकसान। इसके अलावा, JEE Advanced की अनिश्चितता के कारण रैंक बिगड़ने का भी खतरा रहता है।",
          quote: "एक गैप ईयर केवल 'एक साल की पढ़ाई' नहीं है—यह आपके करियर के अंत में मिलने वाले वरिष्ठ स्तर के एक साल के वेतन का नुकसान है।"
        },
        {
          title: "2. मानसिक स्वास्थ्य पर असर",
          content: "कोई भी कोचिंग संस्थान आपको ड्रॉप ईयर के अकेलेपन के बारे में नहीं बताता। जब आपके सहपाठी कॉलेज के उत्सवों और नए दोस्तों की तस्वीरें साझा कर रहे होंगे, तब आप एक उच्च-तनाव वाले वातावरण में उसी पाठ्यक्रम को दोबारा पढ़ रहे होंगे। यह दबाव परीक्षा की घबराहट, आत्म-संदेह और मानसिक थकान का कारण बन सकता है।",
          bullets: [
            "कॉलेज जा चुके दोस्तों से अलग हो जाने का अकेलापन।",
            "अत्यधिक प्रदर्शन का दबाव क्योंकि अब आपके पास खोने के लिए एक साल का समय भी है।",
            "तनाव के कारण परीक्षा के दिन पिछले वर्ष से भी कम अंक आने का जोखिम।"
          ]
        },
        {
          title: "3. साल 2026 की वास्तविकता: डिग्री से अधिक कौशल (Skills) का महत्व",
          content: "आज के तकनीकी परिदृश्य में, ओपन-सोर्स योगदान, आपके गिटहब (GitHub) पोर्टफोलियो और विशिष्ट कौशल (जैसे AI डेवलपमेंट या सिस्टम डिजाइन) का महत्व कॉलेज के टैग से कहीं अधिक है। गूगल, ज़ोहो और कई बड़े स्टार्टअप्स अब डिग्री के बजाय सीधे तकनीकी मूल्यांकन के आधार पर भर्ती करते हैं। यदि आप गैर-IIT रास्ता चुनते हैं, तो आप इस वर्ष का उपयोग व्यावहारिक प्रोजेक्ट बनाने और नए कौशल सीखने में कर सकते हैं।"
        }
      ]
    }
  },
  "talk-creative-fields": {
    en: {
      title: "How to talk creative fields with engineering parents?",
      tag: "Family Conversations",
      readTime: "9 min read",
      author: "WhatNow Editorial",
      date: "May 2026",
      introduction: "Telling parents who have spent their lives in traditional sectors that you want to study Design, Fashion, or Planning can feel like a recipe for conflict. They aren't trying to stifle your talent—they are simply afraid of financial instability. Here is a communication guide to bridge the gap.",
      sections: [
        {
          title: "1. Lead with Empathy, Not Anger",
          content: "Recognize that your parents grew up in an economy of scarcity. For their generation, securing a stable government job, engineering degree, or medical seat was the only path to escape financial vulnerability. When you say 'I want to express myself in design,' they hear 'I will be unemployed.' Acknowledge their concern first to create a safe space for dialogue.",
          quote: "Never start with 'You don't understand my passion.' Start with 'I know you want me to be financially secure, and that is why I have researched this field.'"
        },
        {
          title: "2. Translate Passion into Business Metrics",
          content: "Parents respond to corporate structure, market size, and ROI. Do not frame your interest around artistic expression. Frame it around industry demand, brand ecosystems, and institutional placements.",
          bullets: [
            "Instead of 'I like styling clothes,' say 'I want to study Retail Operations, Merchandising and Logistics at NIFT to manage apparel sourcing.'",
            "Instead of 'I like sketching,' say 'I want to study UI/UX design, which is a core software engineering vertical that determines product usability for tech companies.'",
            "Instead of 'I want to change cities,' say 'I want to study Urban Planning at SPA to work in policy advisory and transit infrastructure consultancies.'"
          ]
        },
        {
          title: "3. Leverage the Institutional Shield",
          content: "Show them that the institutions you are targeting are not private, uncredited centers. NIFT was established by an Act of Parliament under the Ministry of Textiles. NID is an Institute of National Importance under the Ministry of Commerce and Industry. SPA Delhi is funded directly by the Ministry of Education. Having the government stamp of approval immediately eases parental anxiety."
        }
      ]
    },
    hi: {
      title: "इंजीनियरिंग माता-पिता से रचनात्मक क्षेत्रों के बारे में कैसे बात करें?",
      tag: "पारिवारिक संवाद",
      readTime: "9 मिनट पाठ",
      author: "व्हाटनाव संपादकीय",
      date: "मई 2026",
      introduction: "पारंपरिक क्षेत्रों में जीवन बिताने वाले माता-पिता को यह बताना कि आप डिज़ाइन, फ़ैशन या प्लानिंग पढ़ना चाहते हैं, घर में तनाव का कारण बन सकता है। वे आपकी प्रतिभा को दबाना नहीं चाहते—वे बस आपकी वित्तीय सुरक्षा को लेकर डरे हुए हैं। यहाँ इस अंतर को पाटने के लिए एक संचार रणनीति दी गई है।",
      sections: [
        {
          title: "1. गुस्से के बजाय सहानुभूति से शुरुआत करें",
          content: "समझें कि आपके माता-पिता का पालन-पोषण एक अभावग्रस्त अर्थव्यवस्था में हुआ था। उनकी पीढ़ी के लिए, एक स्थिर सरकारी नौकरी, इंजीनियरिंग डिग्री या मेडिकल सीट ही सुरक्षित भविष्य का एकमात्र जरिया थी। जब आप कहते हैं 'मैं डिजाइन में अपना भविष्य बनाना चाहता हूँ,' तो वे इसे वित्तीय असुरक्षा के रूप में देखते हैं। सबसे पहले उनकी चिंता को स्वीकार करें ताकि वे आपकी बात सुनने के लिए तैयार हो सकें।",
          quote: "कभी भी 'आप मेरे जुनून को नहीं समझते' से शुरुआत न करें। इसके बजाय कहें 'मुझे पता है कि आप मुझे आर्थिक रूप से सुरक्षित देखना चाहते हैं, और इसीलिए मैंने इस क्षेत्र पर रिसर्च की है।'"
        },
        {
          title: "2. जुनून को बिजनेस और मार्केट के आंकड़ों में बदलें",
          content: "माता-पिता बाजार की मांग, प्लेसमेंट आंकड़ों और कॉर्पोरेट विकास को समझते हैं। अपने करियर विकल्प को एक कलात्मक रुचि के रूप में पेश करने के बजाय, इसे कॉर्पोरेट और उद्योग की आवश्यकता के रूप में पेश करें।",
          bullets: [
            "यह कहने के बजाय कि 'मुझे कपड़े डिजाइन करना पसंद है,' कहें 'मैं NIFT से रिटेल ऑपरेशंस और मर्चेंडाइजिंग की पढ़ाई करना चाहता हूँ ताकि बड़ी गारमेंट ब्रांड्स की सप्लाई चेन का प्रबंधन कर सकूँ।'",
            "यह कहने के बजाय कि 'मुझे स्केचिंग पसंद है,' कहें 'मैं UI/UX डिजाइन का अध्ययन करना चाहता हूँ, जो सॉफ्टवेयर और ऐप डेवलपमेंट की मुख्य जरूरत है।'",
            "यह कहने के बजाय कि 'मुझे शहरों का नक्शा देखना पसंद है,' कहें 'मैं SPA से अर्बन प्लानिंग करके मेट्रो रेल प्रोजेक्ट्स और स्मार्ट सिटी डेवलपमेंट के लिए कंसल्टिंग फर्म्स में काम करना चाहता हूँ।'"
          ]
        },
        {
          title: "3. प्रतिष्ठित संस्थानों की साख का उपयोग करें",
          content: "अपने माता-पिता को दिखाएं कि जिन संस्थानों को आप लक्षित कर रहे हैं वे कोई निजी कोचिंग या सामान्य कॉलेज नहीं हैं। NIFT कपड़ा मंत्रालय के तहत संसद के एक अधिनियम द्वारा स्थापित किया गया था। NID वाणिज्य और उद्योग मंत्रालय के तहत राष्ट्रीय महत्व का संस्थान है। SPA दिल्ली सीधे शिक्षा मंत्रालय द्वारा वित्त पोषित है। सरकारी मुहर और साख को देखकर माता-पिता का डर काफी हद तक दूर हो जाता है।"
        }
      ]
    }
  },
  "transitioning-cities": {
    en: {
      title: "Transitioning cities for work: Guide for juniors",
      tag: "City Survival",
      readTime: "6 min read",
      author: "WhatNow Editorial",
      date: "May 2026",
      introduction: "Moving from a quiet home or college campus to a bustling metro like Bengaluru, Mumbai, or Gurgaon is a major transition. Beyond the excitement of your first job, you will face the immediate challenges of rent deposits, PG listings, and commuting logistics.",
      sections: [
        {
          title: "1. Finding Accommodation: PG vs. Flatmates",
          content: "For your first 3 months, choose a managed PG (Paying Guest) hostel. PGs simplify your entry by covering food, high-speed WiFi, cleaning, and laundry under a single monthly bill. This saves you from buying appliances and managing multiple utility bills while settling into a new job. Once you stabilize, look for shared flat opportunities via verified student housing communities.",
          quote: "Do not pay heavy rental deposits for flats before completing your probation period. Keep your initial living arrangements flexible."
        },
        {
          title: "2. The Cost of Living Math",
          content: "Metros have high upfront costs. In Mumbai, rent deposits can range from 3 to 6 months of rent. In Bengaluru, expect 4-5 months' deposit. Ensure you have a reserve fund of at least ₹40,000 to cover deposits, brokerage, and initial transit before your first salary is credited.",
          bullets: [
            "Expect basic PG rent to range from ₹8,000 to ₹14,000/month depending on occupancy.",
            "Account for local transit costs (auto-rickshaws, metro fares, or bus passes).",
            "Budget for hidden costs: PG security deposit, cook charges, and utility splits."
          ]
        },
        {
          title: "3. Commute Management: The Energy Tax",
          content: "In cities like Bengaluru or Mumbai, distance is measured in time, not kilometers. Living 15 km away from office to save ₹3,000 on rent is a bad trade-off if it costs you 3 hours of daily travel time. This travel exhaustion directly degrades your workplace performance. Live near a metro station or within a 4-5 km radius of your workspace to preserve your mental peace."
        }
      ]
    },
    hi: {
      title: "काम के लिए शहरों को बदलना: जूनियर्स के लिए गाइड",
      tag: "शहर उत्तरजीविता",
      readTime: "6 मिनट पाठ",
      author: "व्हाटनाव संपादकीय",
      date: "मई 2026",
      introduction: "अपने घर या कॉलेज कैंपस से बेंगलुरु, मुंबई या गुरुग्राम जैसे बड़े महानगरों में जाना एक बड़ा बदलाव है। अपनी पहली नौकरी के उत्साह के अलावा, आपको तुरंत किराए के डिपॉजिट, पीजी (PG) खोजने और दैनिक आवागमन की चुनौतियों का सामना करना पड़ेगा।",
      sections: [
        {
          title: "1. रहने की जगह: पीजी (PG) बनाम फ्लैट",
          content: "शुरुआती 3 महीनों के लिए किसी अच्छे पीजी का चुनाव करें। पीजी में रहने से आपका काम आसान हो जाता है क्योंकि वहाँ खाना, वाई-फाई, साफ-सफाई और कपड़े धोने की सुविधा एक ही मासिक बिल में मिल जाती है। इससे आप शुरुआती दिनों में घरेलू उपकरण खरीदने और बिजली-पानी के बिल भरने के झंझट से बच जाते हैं। जब आप शहर और ऑफिस के माहौल में ढल जाएं, तब फ्लैट साझा करने के विकल्पों पर विचार करें।",
          quote: "अपनी नौकरी के शुरुआती प्रोबेशन पीरियड से पहले फ्लैट के लिए भारी डिपॉजिट न दें। शुरुआत में रहने की व्यवस्था को लचीला रखें।"
        },
        {
          title: "2. खर्चों का गणित",
          content: "महानगरों में शुरुआती खर्चे बहुत अधिक होते हैं। मुंबई और बेंगलुरु में मकान मालिक 3 से 6 महीने का किराया एडवांस डिपॉजिट के रूप में मांगते हैं। अपनी पहली सैलरी मिलने से पहले सिक्योरिटी डिपॉजिट, ब्रोकरेज और दैनिक किराए के लिए कम से कम ₹40,000 का बैकअप फंड तैयार रखें।",
          bullets: [
            "सामान्य पीजी का किराया कमरे में रहने वाले लोगों की संख्या के आधार पर ₹8,000 से ₹14,000 प्रति माह हो सकता है।",
            "स्थानीय आवागमन के खर्चों (ऑटो, मेट्रो या बस किराया) को अपने बजट में शामिल करें।",
            "छिपे हुए खर्चे जैसे पीजी डिपॉजिट, कुक चार्ज और वाई-फाई का खर्च भी जोड़कर चलें।"
          ]
        },
        {
          title: "3. आवागमन (Commuting) का प्रबंधन: ऊर्जा की बचत",
          content: "बेंगलुरु या मुंबई जैसे शहरों में दूरी किलोमीटर में नहीं, बल्कि मिनटों और घंटों में मापी जाती है। किराया बचाने के लिए ऑफिस से 15 किलोमीटर दूर रहना समझदारी नहीं है, क्योंकि इसमें रोजाना 3 घंटे का समय और ऊर्जा बर्बाद होगी। यह थकान सीधे तौर पर आपके काम के प्रदर्शन को प्रभावित करेगी। हमेशा मेट्रो स्टेशन के पास या ऑफिस से 4-5 किलोमीटर के दायरे में रहने का प्रयास करें।"
        }
      ]
    }
  }
};

export default function ArticleReader({ slug }: { slug: string }) {
  const { language } = useLanguage();
  
  const article = articlesContentData[slug]?.[language];

  if (!article) {
    return (
      <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen items-center justify-center py-20">
        <div className="text-center bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-10 max-w-md shadow-sm">
          <Icon icon="solar:document-text-bold-duotone" className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-black text-slate-700 dark:text-slate-300 mb-2">Article not found</h3>
          <p className="text-slate-400 dark:text-slate-400 text-sm font-medium mb-6">The requested article could not be loaded.</p>
          <Link href="/reads" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-sm">
            <Icon icon="solar:arrow-left-bold" className="w-4 h-4" />
            Back to Reads
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      {/* ─── ARTICLE HEADER ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.1] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="article-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#article-grid)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-400 mb-8">
            <Link href="/reads" className="hover:text-indigo-600 transition-colors">Reads</Link>
            <span>›</span>
            <span className="text-indigo-600">{article.tag}</span>
          </div>

          <span className="inline-block px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-black uppercase tracking-widest rounded-full mb-6 shadow-sm">
            {article.tag}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight mb-8 text-neutral-dark">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-400 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-6">
            <div className="flex items-center gap-2">
              <Icon icon="solar:user-bold" className="w-4 h-4 text-slate-400" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:calendar-bold" className="w-4 h-4 text-slate-400" />
              <span>Published {article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:clock-circle-bold" className="w-4 h-4 text-slate-400" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARTICLE CONTENT ─── */}
      <section className="max-w-4xl mx-auto w-full px-6 py-12 md:py-16">
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-8 md:p-12 shadow-sm relative">

          {/* Introduction */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
            {article.introduction}
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {article.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-black text-neutral-dark tracking-tight">
                  {section.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                  {section.content}
                </p>

                {section.quote && (
                  <blockquote className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-r-xl p-6 my-6 italic text-slate-700 dark:text-slate-300 font-bold">
                    &ldquo;{section.quote}&rdquo;
                  </blockquote>
                )}

                {section.bullets && (
                  <ul className="space-y-3 pl-5 list-disc my-6">
                    {section.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-semibold">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Back to reads link */}
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <Link href="/reads" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-black text-xs uppercase tracking-wider transition-colors">
              <Icon icon="solar:arrow-left-bold" className="w-4 h-4" />
              Back to all reads
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
