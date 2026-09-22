# স্বাস্থ্য অর্থনীতি মেট্রিক্স

স্বাস্থ্য অর্থনীতির গণিত, উদাহরণ ও যুক্তির একটি বিস্তৃত পরিচিতি, যা বিশ্বজুড়ে জাতীয় স্বাস্থ্যসেবা সংস্থাগুলির জন্য সফটওয়্যার তৈরি করা সফটওয়্যার প্রকৌশলীদের জন্য লেখা হয়েছে। প্রতিটি ফাইল একটি মেট্রিক বা ধারণা নিয়ে আলোচনা করে: সংজ্ঞা, কেন এটি গুরুত্বপূর্ণ, গণিত, একটি সমাধানকৃত উদাহরণ, সফটওয়্যার প্রকৌশলের সাথে সংযোগ, সাধারণ ভুল, এবং তথ্যসূত্র।

এখানে নতুন? শুরু করুন [সুযোগ ব্যয়](locales/en-gb-oxendict/topics/opportunity-cost/), [মান-সমন্বিত জীবনবর্ষ](locales/en-gb-oxendict/topics/quality-adjusted-life-year/), এবং [বিলম্বের ব্যয়](locales/en-gb-oxendict/topics/cost-of-delay/) দিয়ে — এই তিনটি ধারণার উপরই বাকি সবকিছু নির্ভর করে।

## অর্থনৈতিক যুক্তির ভিত্তি

- [সুযোগ খরচ](locales/en-gb-oxendict/topics/opportunity-cost/) — ত্যাগ করা সেরা বিকল্পের মূল্য; কেন নির্দিষ্ট বাজেট প্রতিটি পছন্দকে স্থানচ্যুতিতে পরিণত করে
- [ছাড়করণ ও সময় পছন্দ](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — বর্তমান মূল্য, 3.5% Green Book/NICE হার
- [বিশ্লেষণ দৃষ্টিকোণ](locales/en-gb-oxendict/topics/analysis-perspective/) — পরিশোধকারী বনাম প্রদানকারী বনাম সমাজ: কার ব্যয় গণনা করা হয়
- [সময় দিগন্ত](locales/en-gb-oxendict/topics/time-horizon/) — কত সময় ধরে ব্যয় ও প্রভাব গণনা করতে হবে, এবং সময়সীমা নিয়ে কারসাজি
- [প্রান্তিক বনাম গড় খরচ](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — কেন একটি শয্যা খালি করলে তার গড় ব্যয় সাশ্রয় হয় না
- [নগদ-মুক্তকারী বনাম নগদ-অ-মুক্তকারী সঞ্চয়](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — প্রতিটি "সময় বাঁচানো" দাবির সততা পরীক্ষা
- [সংবেদনশীলতা বিশ্লেষণ](locales/en-gb-oxendict/topics/sensitivity-analysis/) — টর্নেডো চিত্র; কোন অনুমান আপনার যুক্তিকে টিকিয়ে রাখে
- [সম্ভাব্যতা সংবেদনশীলতা বিশ্লেষণ (PSA)](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — মন্টে কার্লো, CEAC, সঠিক হওয়ার সম্ভাবনা
- [নিখুঁত তথ্যের প্রত্যাশিত মূল্য (ওসিপিআই)](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — পাইলট চালানোর আগে তার মূল্য নির্ধারণ
- [প্রাধান্য ও দক্ষতা সীমান্ত](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — যে বিকল্পগুলো কারো বেছে নেওয়া উচিত নয় তা বাদ দেওয়া

## ফলাফল পরিমাপ

- [মান-সামঞ্জস্যপূর্ণ জীবন বছর (QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — স্বাস্থ্য মূল্যের সাধারণ মুদ্রা
- [অক্ষমতা-সামঞ্জস্যপূর্ণ জীবন বছর (DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — বোঝার দিক থেকে প্রতিচ্ছবি; বৈশ্বিক স্বাস্থ্যের মেট্রিক
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — অধিকাংশ QALY উপযোগিতা ওজনের পেছনের যন্ত্র
- [ইনক্রিমেন্টাল খরচ-কার্যকারিতা অনুপাত (ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — স্বাস্থ্যের প্রতিটি অতিরিক্ত এককের জন্য অতিরিক্ত ব্যয়
- [পরিশোধ করার ইচ্ছার প্রান্তসীমা](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — NICE-এর £20–30 হাজার/QALY এবং বিশ্বের অন্যান্য সীমারেখা
- [নিট আর্থিক সুবিধা (NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — মূল্য বিয়োগ ব্যয়, সঠিকভাবে করা
- [অর্জিত জীবন-বছর (এলওয়াইজি)](locales/en-gb-oxendict/topics/life-years-gained/) — বেঁচে থাকার গণিত, এবং সমতা-সংক্রান্ত evLYG ধরন
- [স্বাস্থ্য-সামঞ্জস্যপূর্ণ আয়ু (ওপিজে)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — জনসংখ্যা-স্তরে স্বাস্থ্যকর বছরের হিসাব
- [QALY ঘাটতি ও তীব্রতা মডিফায়ার](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — কেন অসুস্থতর জনগোষ্ঠীর QALY বেশি গণনা করা হয়

## অর্থনৈতিক বিশ্লেষণের ধরন

- [খরচ-কার্যকারিতা বিশ্লেষণ (CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — ফলাফলের প্রতিটি স্বাভাবিক এককের ব্যয়
- [খরচ-উপযোগিতা বিশ্লেষণ (CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — প্রতি QALY ব্যয়; ভিন্ন ধরনের হস্তক্ষেপের তুলনা
- [খরচ-সুবিধা বিশ্লেষণ (CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — সবকিছু টাকায়; Green Book NPV
- [খরচ-হ্রাসকরণ বিশ্লেষণ (CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — সমতা প্রমাণের পর সবচেয়ে সস্তা বিকল্প
- [খরচ-পরিণতি বিশ্লেষণ (CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — বিভক্ত সারণি; ডিজিটাল স্বাস্থ্যের জন্য NICE-এর পছন্দ
- [বাজেট প্রভাব বিশ্লেষণ (BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — সামর্থ্য, মূল্য থেকে ভিন্ন
- [বিনিয়োগের প্রতিদান (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — ঘোষিত প্যারামিটারসহ ভাগ করা মেট্রিক
- [সামাজিক বিনিয়োগের প্রতিদান (SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — বাজার যা মূল্য দেয় না তার আর্থিকীকরণ

## স্বাস্থ্য ব্যবস্থার পরিচালন অর্থনীতি

- [সঞ্চিত বেড দিন](locales/en-gb-oxendict/topics/bed-days-saved/) — প্রধান সুবিধা, এবং এর মূল্যায়নের ফাঁদ
- [থাকার দৈর্ঘ্য (LOS)](locales/en-gb-oxendict/topics/length-of-stay/) — হাসপাতালের চক্র সময়
- [পুনঃভর্তি হার](locales/en-gb-oxendict/topics/readmission-rate/) — স্বাস্থ্য ব্যবস্থার পরিবর্তন ব্যর্থতার হার
- [অনুপস্থিতি (DNA) হার](locales/en-gb-oxendict/topics/did-not-attend-rate/) — মিস করা অ্যাপয়েন্টমেন্ট; সবচেয়ে বিশুদ্ধ অপচয় মেট্রিক
- [জরুরি উপস্থিতি এড়ানো](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — প্রাথমিক-পর্যায় হস্তক্ষেপের অর্থনীতি
- [জাতীয় তারিখ ও ইউনিট খরচ](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — NHS-এর মূল্য তালিকা ও ব্যয় নিরূপণ অবকাঠামো
- [চিকিৎসায় রেফারেল (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — অপেক্ষার সময়ের মেট্রিক হিসেবে ১৮ সপ্তাহের মান
- [অপেক্ষা তালিকা প্রভাব](locales/en-gb-oxendict/topics/waiting-list-impact/) — বাঁচানো ঘণ্টাকে দেখা রোগীতে রূপান্তর
- [অনুশীলনকারীর সময়](locales/en-gb-oxendict/topics/practitioner-time/) — বেতন নয়, বরং প্রতিবন্ধকতার ক্ষমতার মূল্যায়ন
- [কর্মশক্তি ধারণ](locales/en-gb-oxendict/topics/workforce-retention/) — কর্মী পরিবর্তনের ব্যয় ও বার্নআউট অর্থনীতি
- [এড়ানো যায় এমন আউটসোর্সিং খরচ](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — প্রিমিয়াম-হারের কাজ ফিরিয়ে আনা
- [নিম্নমুখী সম্পদ অপ্টিমাইজেশন](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — যে ভূমিকার জন্য সবাই অপেক্ষা করে তা মুক্ত করা
- [আরও আগে হস্তক্ষেপ](locales/en-gb-oxendict/topics/earlier-intervention/) — অবনতির আগে চিকিৎসার অর্থনীতি
- [মূল্য-উৎপাদনকারী ক্ষমতা (অপারেশনাল টার্নঅ্যারাউন্ড)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — নিয়োগ ছাড়াই ক্ষমতা তৈরি করা
- [জঠিন নগদ-মুক্তকারী সঞ্চয় (ঘাটতি প্রতিরক্ষা)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — বাজেট লাইন মুছে ফেলা; CFO-র মেট্রিক

## HTA কাঠামো ও প্রতিরোধ অর্থনীতি

- [স্বাস্থ্য প্রযুক্তি মূল্যায়ন (HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (মার্কিন যুক্তরাষ্ট্র), CADTH: কে ঠিক করে কী কেনার যোগ্য
- [NICE প্রমাণ মান কাঠামো (ESF)](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — ডিজিটাল স্বাস্থ্যের জন্য ঝুঁকি-স্তরভিত্তিক প্রমাণের প্রয়োজনীয়তা
- [জার্মানির DiGA দ্রুত-পথ](locales/en-gb-oxendict/topics/diga-fast-track/) — প্রেসক্রিপশনে অ্যাপ; প্রমাণের সময়সীমাসহ অস্থায়ী তালিকাভুক্তি
- [চিকিৎসার জন্য প্রয়োজনীয় সংখ্যা (NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — প্রচেষ্টা-প্রতি-সুবিধার একক যা দাবিগুলোকে সৎ রাখে
- [প্রতিরোধ অর্থনীতি](locales/en-gb-oxendict/topics/prevention-economics/) — কেন প্রতিরোধ ব্যয়-কার্যকর কিন্তু খুব কমই ব্যয়-সাশ্রয়ী
- [স্ক্রিনিং অর্থনীতি](locales/en-gb-oxendict/topics/screening-economics/) — উইলসন–জাংনার, কম প্রাদুর্ভাবে PPV-র পতন, সতর্কতা ক্লান্তি
- [এড়ানো নিম্নমুখী খরচ](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — ব্যয় সমন্বয় এবং সেগুলোকে বিশ্বাসযোগ্য করার নিয়ম

## সফটওয়্যার প্রকৌশল ও ডিজিটাল ডেলিভারি

- [বিলম্বের খরচ (CoD)](locales/en-gb-oxendict/topics/cost-of-delay/) — অ-সরবরাহের £/সপ্তাহ বা QALY/সপ্তাহ; মূল সেতু মেট্রিক
- [DORA মেট্রিক](locales/en-gb-oxendict/topics/dora-metrics/) — সরবরাহ কর্মক্ষমতা, স্বাস্থ্য-অর্থনীতির ভাষায় অনূদিত
- [প্রবাহ মেট্রিক](locales/en-gb-oxendict/topics/flow-metrics/) — লিটল-এর সূত্র, WIP, প্রবাহ দক্ষতা; হাসপাতাল ও পাইপলাইনের ভাগ করা সারিবদ্ধতার গণিত
- [WSJF ও CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — মূল্য-ঘনত্ব অনুযায়ী অগ্রাধিকার; ব্যাকলগকে QALY লিগ টেবিল হিসেবে
- [SPACE ও DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — বহুমাত্রিক উৎপাদনশীলতা; প্রকৌশল মেট্রিক্সের জন্য EQ-5D-র শিক্ষা
- [প্রযুক্তিগত ঋণ](locales/en-gb-oxendict/topics/technical-debt/) — মূলধন, সুদ, এবং কোডবেসের জন্য দীর্ঘস্থায়ী রোগের অর্থনীতি
- [মালিকানার সম্পূর্ণ খরচ (TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — রক্ষণাবেক্ষণ ৫০–৮০%; সফটওয়্যারে সরল ওষুধ-মূল্যের ভুল
- [ক্লাউড ইউনিট অর্থনীতি (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — প্রতি এককে উৎপাদন ব্যয়; ডিজিটাল সেবার রেফারেন্স ব্যয়
- [নির্মাণ বনাম ক্রয়](locales/en-gb-oxendict/topics/build-vs-buy/) — বিলম্বের মূল্যসহ ঝুঁকি-সামঞ্জস্যপূর্ণ তুলনা
- [সুবিধা বাস্তবায়ন](locales/en-gb-oxendict/topics/benefits-realization/) — পূর্বাভাসিত সুবিধা প্রকৃতপক্ষে ঘটেছে কিনা তা নিরীক্ষা করা
- [GDS পরিষেবা মেট্রিক](locales/en-gb-oxendict/topics/gds-service-metrics/) — প্রতি লেনদেনের ব্যয়, সন্তুষ্টি, সম্পূর্ণতা, গ্রহণযোগ্যতা

## AI ত্বরণ

- [ডেভেলপার উৎপাদনশীলতায় AI](locales/en-gb-oxendict/topics/ai-developer-productivity/) — Copilot RCT বনাম METR RCT; কার্যকারিতা বনাম বাস্তব প্রভাব
- [AI-তে বিনিয়োগের প্রতিদান](locales/en-gb-oxendict/topics/ai-return-on-investment/) — ৯৫%-কোনো-রিটার্ন-নেই এই ফলাফল এবং সেই ৫% কী আলাদা করেছিল
- [ইনফারেন্স ইউনিট অর্থনীতি](locales/en-gb-oxendict/topics/inference-unit-economics/) — প্রতি টোকেনের ব্যয়, এবং মূল্যের অবিরাম পতনের মডেলিং
- [AI মান মেট্রিক](locales/en-gb-oxendict/topics/ai-quality-metrics/) — মূল্যসহ ক্ষতির হার হিসেবে হ্যালুসিনেশনের হার
- [ক্লিনিক্যাল AI মূল্যায়ন](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — সংবেদনশীলতা, নির্দিষ্টতা, AUROC, এবং কেন প্রাদুর্ভাব অর্থনীতি নিয়ন্ত্রণ করে
- [AI নিয়ন্ত্রক মূল্যায়ন](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDA-র SaMD, PCCP, এবং মডেল আপডেটের অর্থনীতি

## ভোক্তা স্বাস্থ্য অ্যাপ ও ডিভাইস

- [সম্পৃক্ততা মেট্রিক](locales/en-gb-oxendict/topics/engagement-metrics/) — ক্লিনিকাল ডোজ হিসেবে সম্পৃক্ততা
- [ধারণ ও ত্যাগ](locales/en-gb-oxendict/topics/retention-and-churn/) — ক্ষয়ের নিয়ম; চিকিৎসার জানালা হিসেবে ধরে রাখার বক্ররেখা
- [সক্রিয়করণ ও গ্রহণ](locales/en-gb-oxendict/topics/activation-and-uptake/) — মূল্য ফানেলের সামনের দরজা
- [সম্মতি ও অধ্যবসায়](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, কার্যকর সম্পৃক্ততা, ন্যূনতম কার্যকর ডোজ
- [রোগী-প্রতিবেদিত ফলাফল (PROM, PREM, MCID)](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM, PREM, এবং MCID-র সততার মান
- [ডিজিটাল শেষবিন্দু ও বায়োমার্কার](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — সেন্সর টেলিমেট্রি থেকে নিয়ন্ত্রক-স্তরের প্রমাণ পর্যন্ত
- [ওয়্যারেবল যাচাইকরণ](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, সামঞ্জস্য পরিসংখ্যান, পরিধানের সময়, সম্পূর্ণতা
- [দূরবর্তী রোগী পর্যবেক্ষণ অর্থনীতি](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — CPT কোড স্ট্যাক এবং বাড়িতে-হাসপাতাল বিকল্প
- [স্বাস্থ্য অ্যাপ ইউনিট অর্থনীতি](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM, এবং ROI বনাম VOI
- [পরিধি ও ন্যায্যতা](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; জনসংখ্যাগত প্রভাব = নাগাল × কার্যকারিতা

## বেঞ্চমার্কের সাম্প্রতিকতা

উদ্ধৃত অনেক পরিসংখ্যান বার্ষিকভাবে হালনাগাদ হয় (NHS ইউনিট ব্যয়, পেমেন্ট স্কিমের মূল্য, DORA ক্লাস্টার, DiGA সংখ্যা, LLM মূল্য)। প্রতিটি নথি তার বেঞ্চমার্কের তারিখ সরাসরি লেখার মধ্যেই উল্লেখ করে; একটি বাস্তব ব্যবসায়িক ক্ষেত্রে ব্যবহারের আগে পুনরায় যাচাই করুন।

## Claude দক্ষতা

এই রিপোজিটরিতে দুটি [Claude দক্ষতা](https://code.claude.com/docs/en/skills) রয়েছে — একটি প্রকল্পের `.claude/skills/`-এ যেকোনো একটি রাখুন (অথবা Claude-কে এই রিপোজিটরির `skills/`-এর দিকে নির্দেশ করুন) যাতে এই বইটি সরাসরি একটি এজেন্টিক কোডিং সেশনের মধ্যে কাজে লাগানো যায়:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — সাধারণ ব্যবহারের জন্য: একটি ধারণা ব্যাখ্যা করা, নিজের সংখ্যা থেকে একটি মেট্রিক গণনা করা, অথবা এই বইয়ের সূত্র, সমাধানকৃত উদাহরণ, ও সাধারণ ভুলের ভিত্তিতে—সাধারণ স্মৃতির পরিবর্তে—একটি বহু-মেট্রিক ব্যবসায়িক ক্ষেত্র তৈরি করা।
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — এই রিপোজিটরির রক্ষণাবেক্ষণকারীদের জন্য: প্রতি-বিষয় টেমপ্লেট, README সূচীকরণ নিয়মাবলী, এবং বিষয় যোগ বা সম্পাদনার জন্য একটি লিঙ্ক/সিঙ্ক যাচাইকরণ চেকলিস্ট।
