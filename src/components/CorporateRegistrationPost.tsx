import React, { useState } from 'react';
import { 
  ArrowLeft, Landmark, Layers, PenTool, Stamp, Calculator, Scale, FileText, 
  Languages, Lightbulb, FileSignature, Star, StarHalf, Zap, Award, Building, 
  Pen, FolderOpen, CheckCircle, MessageCircle, Phone, CalendarPlus, ListChecks, 
  Receipt, Store, Briefcase, AlertTriangle, Facebook, Twitter, Linkedin, Share2
} from 'lucide-react';

export default function CorporateRegistrationPost({ onBack }: { onBack: () => void }) {
  const [lang, setLang] = useState<'en' | 'bn'>('bn');

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = "Comprehensive Guide to Corporate Registration in Bangladesh";

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  const tocItems = lang === 'en' ? [
    { id: 'intro', label: 'Introduction & Overview' },
    { id: 'types', label: 'Types of Corporate Entities' },
    { id: 'name', label: 'Name Clearance (NC)' },
    { id: 'stamp', label: 'Authorized Capital & Stamp Duties' },
    { id: 'fees', label: 'RJSC Registration Fees' },
    { id: 'advisory', label: 'Professional Advisory Services' },
    { id: 'tax', label: 'Taxation, VAT, and Compliance' },
  ] : [
    { id: 'intro', label: 'ভূমিকা এবং ওভারভিউ' },
    { id: 'types', label: 'কর্পোরেট সত্তার ধরন' },
    { id: 'name', label: 'নাম ছাড়পত্র (Name Clearance)' },
    { id: 'stamp', label: 'অনুমোদিত মূলধন ও স্ট্যাম্প ডিউটি' },
    { id: 'fees', label: 'RJSC নিবন্ধন ফি' },
    { id: 'advisory', label: 'পেশাদার আইনি সেবা' },
    { id: 'tax', label: 'ট্যাক্সেশন, ভ্যাট এবং কমপ্লায়েন্স' },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-legal-navy hover:text-legal-gold font-medium mb-6 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Home
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Blog Main Content */}
        <main className="lg:w-[70%] bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200">
          
          {/* Language Switcher */}
          <div className="flex flex-wrap items-center gap-4 mb-8 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <span className="font-semibold text-legal-navy flex items-center gap-2 flex-grow">
              <Languages size={18} /> Select Language / ভাষা নির্বাচন করুন:
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => setLang('en')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${lang === 'en' ? 'bg-legal-navy text-white' : 'bg-white text-legal-navy border border-legal-navy hover:bg-blue-50'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang('bn')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${lang === 'bn' ? 'bg-legal-navy text-white' : 'bg-white text-legal-navy border border-legal-navy hover:bg-blue-50'}`}
              >
                বাংলা
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 prose-p:leading-[1.8] prose-p:mb-8 prose-li:leading-[1.8] prose-li:mb-4">
            {lang === 'bn' ? (
              // BENGALI CONTENT
              <div className="space-y-8">
                <h1 id="intro" className="text-2xl md:text-4xl font-display font-bold text-legal-navy mb-8 leading-tight scroll-mt-24">
                  <Landmark className="inline-block mr-2 text-legal-gold" size={28} />
                  বাংলাদেশে কর্পোরেট নিবন্ধন, আর্থিক পরিপালন এবং নিয়ন্ত্রক কাঠামোর বিস্তৃত গাইড
                </h1>
                
                <p><strong>বিবর্তিত কর্পোরেট নিয়ন্ত্রক পরিবেশের ভূমিকা</strong><br/>
                বাংলাদেশের সামষ্টিক অর্থনীতির গতিপথ, যা আনুমানিক ৬.৪% টেকসই জিডিপি প্রবৃদ্ধি এবং ১৮.৫ কোটিরও বেশি ব্যক্তির বিশাল দেশীয় ভোক্তা বাজার দ্বারা চিহ্নিত, দেশটিকে দেশীয় উদ্যোক্তা এবং সরাসরি বিদেশি বিনিয়োগ (FDI) উভয়ের জন্য একটি অত্যন্ত আকর্ষণীয় কেন্দ্রে পরিণত করেছে। এই দ্রুত অর্থনৈতিক সম্প্রসারণ এবং আনুষ্ঠানিকীকরণের একেবারে কেন্দ্রবিন্দুতে রয়েছে যৌথমূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC)। বাংলাদেশের ভৌগোলিক সীমানার মধ্যে পরিচালিত সকল কর্পোরেট সত্তা, অংশীদারি ফার্ম এবং অলাভজনক সোসাইটির গঠন, আইনি রক্ষণাবেক্ষণ এবং চূড়ান্ত বিলোপ সাধনের তদারকি করার জন্য RJSC একমাত্র সংবিধিবদ্ধ কর্তৃপক্ষ হিসেবে কাজ করে।</p>
                
                <p>RJSC ফ্রেমওয়ার্ক নেভিগেট করার জন্য সংবিধিবদ্ধ প্রয়োজনীয়তা, ফি কাঠামো এবং নিবন্ধন-পরবর্তী কঠোর পরিপালনের বাধ্যবাধকতা সম্পর্কে গভীর ও বিস্তৃত ধারণা প্রয়োজন। নিয়ন্ত্রক পরিবেশটি মূলত তিনটি ভিত্তিগত আইন দ্বারা পরিচালিত হয়: কোম্পানি আইন ১৯৯৪, সোসাইটি নিবন্ধন আইন ১৮৬০ এবং অংশীদারি আইন ১৯৩২। সাম্প্রতিক বছরগুলোতে, বাংলাদেশ সরকার এক ব্যক্তি কোম্পানি (OPC) এবং আয়কর আইন ২০২৩ প্রবর্তনের মাধ্যমে ডিজিটাল অর্থনীতি ও কর্পোরেট স্বচ্ছতা বৃদ্ধির জন্য ব্যাপক আইনি আধুনিকীকরণ করেছে।</p>

                <h2 id="types" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <Layers className="text-legal-gold" size={28} /> কর্পোরেট সত্তার ধরন এবং কৌশলগত নির্বাচন
                </h2>
                <p>RJSC-এর সাথে পদ্ধতিগত কাজ শুরু করার আগে, উদ্যোক্তাদের অবশ্যই তাদের উদ্যোগের আইনি কাঠামো সম্পর্কে একটি মৌলিক সিদ্ধান্ত নিতে হবে। সত্তার ধরন নির্বাচন দীর্ঘমেয়াদী করের দায় এবং অভ্যন্তরীণ পরিচালনার কাঠামো নির্ধারণ করে।</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>প্রাইভেট লিমিটেড কোম্পানি:</strong> বাংলাদেশে বাণিজ্যিক উদ্যোগের প্রধান মাধ্যম। এটি শেয়ারহোল্ডারদের জন্য সীমিত দায়ের আইনি সুরক্ষা প্রদান করে। কোম্পানি আইন ১৯৯৪ অনুযায়ী, ন্যূনতম ২ জন পরিচালক ও শেয়ারহোল্ডার প্রয়োজন এবং সর্বোচ্চ সীমা ৫০ জন।</li>
                  <li><strong>পাবলিক লিমিটেড কোম্পানি (PLC):</strong> বড় পরিসরে মূলধন সংগ্রহের জন্য ডিজাইন করা হয়েছে। শেয়ার বাজারে তালিকাভুক্ত হতে ইচ্ছুক বিশাল এন্টারপ্রাইজগুলোর জন্য এই কাঠামো বাধ্যতামূলক। এর আর্থিক প্রকাশনার প্রয়োজনীয়তা এবং নিয়ন্ত্রক যাচাই-বাছাই অনেক বেশি।</li>
                  <li><strong>এক ব্যক্তি কোম্পানি (OPC):</strong> ২০২০ সালের সংশোধনীর মাধ্যমে প্রবর্তিত এই কাঠামো একক মালিকদের সীমিত দায়ের সুবিধা দেয়। একটি OPC-এর ন্যূনতম পরিশোধিত মূলধন (Paid-up Capital) ২৫ লক্ষ টাকা এবং সর্বোচ্চ ৫ কোটি টাকা হতে হবে। বার্ষিক টার্নওভার ১ কোটি থেকে ৫০ কোটি টাকার মধ্যে থাকতে হবে। এই সীমা অতিক্রম করলে এটিকে সাধারণ প্রাইভেট বা পাবলিক কোম্পানিতে রূপান্তর করতে হবে।</li>
                  <li><strong>বিদেশি কোম্পানি (Foreign Companies):</strong> বহুজাতিক কোম্পানিগুলো শাখা (Branch) বা লিয়াজোঁ অফিস স্থাপনের মাধ্যমে বাজারে প্রবেশ করে। এগুলোর জন্য BIDA-এর অনুমোদন এবং ক্রস-বর্ডার ব্যাংকিং অ্যাকাউন্ট প্রয়োজন হয়।</li>
                  <li><strong>সোসাইটি এবং ট্রেড অর্গানাইজেশন:</strong> অলাভজনক সংস্থা ও দাতব্য প্রতিষ্ঠানগুলো ১৮৬০ সালের আইনের অধীনে নিবন্ধিত হয়। এগুলোর ফি কাঠামো শেয়ার মূলধনের ওপর নয়, বরং সদস্য সংখ্যার ওপর ভিত্তি করে নির্ধারিত হয়।</li>
                  <li><strong>অংশীদারি ফার্ম:</strong> ১৯৩২ সালের আইনের অধীনে পরিচালিত এই ফার্মগুলোর কোনো পৃথক আইনি সত্তা নেই, যার ফলে অংশীদারদের ব্যক্তিগত দায় অসীম থাকে। সরকার এদের নিবন্ধনের জন্য কোনো ফি আরোপ করে না (সম্পূর্ণ বিনামূল্যে নিবন্ধন)।</li>
                </ul>

                <h2 id="name" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <PenTool className="text-legal-gold" size={28} /> কর্পোরেট পরিচয়ের সূচনা: নাম ছাড়পত্র (Name Clearance)
                </h2>
                <p>বাংলাদেশে কর্পোরেট গঠনের একেবারে প্রথম ধাপ হলো একটি বৈধ নাম ছাড়পত্র (NC) সার্টিফিকেট সংগ্রহ করা। বিদেশি কোম্পানি এবং অংশীদারি ফার্ম ব্যতীত সকল প্রস্তাবিত আইনি সত্তাকে অবশ্যই তাদের মূল দলিলগুলো তৈরি করার আগে এই সংবিধিবদ্ধ অনুমোদন নিতে হবে। RJSC তাদের ডিজিটাল ডেটাবেস ব্যবহার করে নিশ্চিত করে যে প্রস্তাবিত নামটি বিদ্যমান কোনো কোম্পানির সাথে মিলে না যায়।</p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 text-legal-navy">
                        <th className="p-3 border border-gray-200 font-semibold">সেবার ক্যাটাগরি</th>
                        <th className="p-3 border border-gray-200 font-semibold">সরকারি ফি (টাকা)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200">নাম ছাড়পত্র (NC) আবেদন</td>
                        <td className="p-3 border border-gray-200">৫০০.০০</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3 border border-gray-200">সময়সীমা বৃদ্ধির আবেদন (প্রতিবার)</td>
                        <td className="p-3 border border-gray-200">২০০.০০</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>সাধারণ কর্পোরেট সত্তাগুলোর জন্য (প্রাইভেট, পাবলিক, এবং OPC), এই ছাড়পত্রটি ইস্যুর তারিখ থেকে ঠিক <strong>৩০ দিন</strong> পর্যন্ত কার্যকর থাকে। তবে প্রয়োজনীয় ফি প্রদান করে এই মেয়াদ সর্বোচ্চ ৯০ দিন পর্যন্ত বাড়ানো যায়।</p>

                <h2 id="stamp" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <Stamp className="text-legal-gold" size={28} /> অনুমোদিত মূলধনের অর্থনীতি এবং প্রগতিশীল স্ট্যাম্প ডিউটি
                </h2>
                <p>পরবর্তী ধাপে মেমোরেন্ডাম অফ অ্যাসোসিয়েশন (MoA) এবং আর্টিকেলস অফ অ্যাসোসিয়েশন (AoA) প্রস্তুত করতে হয়। MoA কোম্পানির বাহ্যিক সীমানা এবং মূল বাণিজ্যিক উদ্দেশ্য নির্ধারণ করে, আর AoA অভ্যন্তরীণ পরিচালনার নিয়মাবলি নির্ধারণ করে।</p>
                <p>RJSC নিবন্ধন প্রক্রিয়ার সামগ্রিক আর্থিক কাঠামো কোম্পানির ঘোষিত <strong>"অনুমোদিত শেয়ার মূলধন" (Authorized Capital)</strong> এর ওপর ভিত্তি করে নির্ধারিত হয়। অনুমোদিত মূলধন হলো সেই সর্বোচ্চ শেয়ারের মূল্য যা কোম্পানি তার জীবদ্দশায় ইস্যু করতে পারে, যা পরিশোধিত মূলধনের (Paid-up Capital) চেয়ে ভিন্ন।</p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 text-legal-navy">
                        <th className="p-3 border border-gray-200 font-semibold">সংবিধিবদ্ধ দলিলের ধরন</th>
                        <th className="p-3 border border-gray-200 font-semibold">ঘোষিত অনুমোদিত মূলধনের স্তর</th>
                        <th className="p-3 border border-gray-200 font-semibold">প্রয়োজনীয় স্ট্যাম্প ডিউটি (টাকা)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200">মেমোরেন্ডাম অফ অ্যাসোসিয়েশন (MoA)</td>
                        <td className="p-3 border border-gray-200">সর্বজনীন (সব মূলধন স্তরের জন্য প্রযোজ্য)</td>
                        <td className="p-3 border border-gray-200">১,০০০.০০</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3 border border-gray-200">আর্টিকেলস অফ অ্যাসোসিয়েশন (AoA)</td>
                        <td className="p-3 border border-gray-200">অনুমোদিত মূলধন ১০,০০,০০০ টাকা পর্যন্ত</td>
                        <td className="p-3 border border-gray-200">২,০০০.০০</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200">আর্টিকেলস অফ অ্যাসোসিয়েশন (AoA)</td>
                        <td className="p-3 border border-gray-200">১০ লক্ষ টাকার বেশি থেকে ৩ কোটি টাকা পর্যন্ত</td>
                        <td className="p-3 border border-gray-200">৪,০০০.০০</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3 border border-gray-200">আর্টিকেলস অফ অ্যাসোসিয়েশন (AoA)</td>
                        <td className="p-3 border border-gray-200">৩ কোটি টাকার বেশি হলে</td>
                        <td className="p-3 border border-gray-200">১০,০০০.০০</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 id="fees" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <Calculator className="text-legal-gold" size={28} /> RJSC নিবন্ধন ফির বিস্তারিত বিভাজন (প্রাইভেট কোম্পানি)
                </h2>
                <p>প্রাইভেট লিমিটেড কোম্পানির নিবন্ধনের মোট খরচ দুটি ভাগে বিভক্ত: একটি ফিক্সড ডকুমেন্ট ফাইলিং ফি এবং একটি পরিবর্তনশীল অনুমোদিত মূলধন ফি। প্রাইভেট কোম্পানির জন্য ৬টি প্রধান দলিল (Form I, VI, IX, X, XII, এবং MoA/AoA) জমা দিতে হয়, যার প্রতিটির জন্য ২০০ টাকা করে মোট <strong>১,২০০ টাকা</strong> ফাইলিং ফি ধার্য করা হয়।</p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 text-legal-navy">
                        <th className="p-3 border border-gray-200 font-semibold">মূলধন মূল্যায়নের সীমা</th>
                        <th className="p-3 border border-gray-200 font-semibold">প্রগতিশীল ফি মূল্যায়ন হার</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200">প্রথম ১০,০০,০০০ (১০ লক্ষ) টাকা</td>
                        <td className="p-3 border border-gray-200">০.০০ টাকা (সম্পূর্ণ মওকুফ)</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3 border border-gray-200">১০ লক্ষ টাকার পর থেকে ৫০ লক্ষ টাকা পর্যন্ত (প্রতি ১ লক্ষ টাকার জন্য)</td>
                        <td className="p-3 border border-gray-200">৮০.০০ টাকা</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200">৫০ লক্ষ টাকার বেশি হলে (প্রতি ১ লক্ষ টাকার জন্য)</td>
                        <td className="p-3 border border-gray-200">১৩০.০০ টাকা</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-legal-navy p-5 rounded-r-lg my-8">
                  <strong className="text-legal-navy text-lg flex items-center gap-2 mb-2">
                    <Lightbulb className="text-legal-gold" size={20} /> ভ্যালু অ্যাডেড ট্যাক্স (VAT) সতর্কতা
                  </strong>
                  <p className="m-0 text-gray-700">প্রাথমিক খরচ বিশ্লেষণে প্রায়শই যে বিষয়টি বাদ পড়ে তা হলো ভ্যালু অ্যাডেড ট্যাক্স (VAT) প্রয়োগ। বাংলাদেশ সরকারের নিয়ম অনুযায়ী, প্রায় সমস্ত RJSC সরকারি ফি, বেস রেজিস্ট্রেশন ফি এবং সার্টিফাইড কপি ইস্যুর ওপর <strong>১৫% স্ট্যান্ডার্ড ভ্যাট</strong> সরাসরি যুক্ত করা হয়। সুতরাং, যেকোনো সঠিক আর্থিক মডেলিংয়ে প্রাথমিক RJSC গণনার সাথে এই ১৫% ভ্যাট যোগ করতে হবে।</p>
                </div>

                <h2 id="advisory" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <Scale className="text-legal-gold" size={28} /> পেশাদার আইনি সেবার ভূমিকা এবং খরচ
                </h2>
                <p>উপরে উল্লেখিত ফিগুলো কেবল সরকারি ফি। তবে ত্রুটিহীন MoA/AoA ড্রাফটিং, শেয়ারহোল্ডারদের চুক্তি এবং আইনি জটিলতা এড়াতে প্রফেশনাল কর্পোরেট আইনজীবী বা চার্টার্ড অ্যাকাউন্ট্যান্টদের সেবা গ্রহণ অপরিহার্য। দেশীয় ল ফার্মগুলো সাধারণত প্রাইভেট কোম্পানির প্রাথমিক গঠনের জন্য ১০,০০০ থেকে ৩০,০০০ টাকা ফি নিয়ে থাকে। তবে ট্রেড লাইসেন্স, ভ্যাট নিবন্ধন এবং ব্যাংকিং সেটআপসহ পূর্ণাঙ্গ টার্নকি (Turnkey) সলিউশনের জন্য এই ফি ৫০,০০০ থেকে ১,০০,০০০ টাকা (৫০০-১০০০ ইউএসডি) পর্যন্ত হতে পারে। বিদেশি বিনিয়োগের (FDI) ক্ষেত্রে BIDA এবং বাংলাদেশ ব্যাংকের জটিলতার কারণে এই ফি বহুগুণ বৃদ্ধি পায়।</p>

                <h2 id="tax" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <FileText className="text-legal-gold" size={28} /> সামষ্টিক রাজস্ব দৃশ্যপট: আয়কর আইন ২০২৩ এবং মাসিক ফাইলিং
                </h2>
                <p>কোম্পানি নিবন্ধন কেবল একটি শুরু। আধুনিক বাংলাদেশে কর্পোরেট সংস্থাগুলোকে আয়কর আইন ২০২৩ এবং NBR-এর নিয়মাবলি কঠোরভাবে মেনে চলতে হয়।</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>কর্পোরেট করের হার:</strong> একটি সাধারণ অতালিকাভুক্ত প্রাইভেট কোম্পানির করের হার ২৭.৫%। তবে শেয়ার বাজারে তালিকাভুক্ত কোম্পানি এবং OPC-গুলো ২০% থেকে ২২.৫% এর মধ্যে হ্রাসকৃত করের সুবিধা ভোগ করে।</li>
                  <li><strong>ন্যূনতম কর (Minimum Tax):</strong> লাভ-ক্ষতি যাই হোক না কেন, কোম্পানিগুলোকে তাদের মোট প্রাপ্তির (Gross Receipts) ওপর ভিত্তি করে ন্যূনতম কর দিতে হয়।</li>
                  <li><strong>পর্যায়ক্রমিক রিটার্ন:</strong> সমস্ত ভ্যাট-নিবন্ধিত প্রতিষ্ঠানকে পরবর্তী মাসের ১৫ তারিখের মধ্যে মূসক ৯.১ (Mushak 9.1) জমা দিতে হয়। এছাড়া, কর্মীদের বেতন এবং ভাড়ার ওপর উৎস কর (TDS/P-Tax) কেটে এনবিআর-এ জমা দেওয়া বাধ্যতামূলক।</li>
                </ul>

                <p className="mt-6">উপসংহারে, বাংলাদেশে কোম্পানি গঠনের আর্কিটেকচার একটি অত্যন্ত সুপরিকল্পিত এবং কঠোর আইনি বাস্তুতন্ত্র। দেশীয় এবং বিদেশি উদ্যোক্তাদের সফল হতে হলে RJSC ম্যান্ডেট, ১৫% ভ্যাট, পেশাদার ফি এবং NBR-এর কর নীতি সম্পর্কে একটি সামগ্রিক ধারণা থাকা অপরিহার্য। এই জটিল কাঠামো বুঝতে পারলে তারা শাস্তিমূলক আইনি দায় এড়িয়ে বাংলাদেশের দ্রুত প্রসারিত অর্থনীতির পুরো সুবিধা নিতে পারবেন।</p>
              </div>
            ) : (
              // ENGLISH CONTENT
              <div className="space-y-8">
                <h1 id="intro" className="text-2xl md:text-4xl font-display font-bold text-legal-navy mb-8 leading-tight scroll-mt-24">
                  <Landmark className="inline-block mr-2 text-legal-gold" size={28} />
                  Comprehensive Guide to Corporate Registration, Fiscal Compliance, and the Regulatory Landscape in Bangladesh
                </h1>
                
                <p><strong>Introduction to the Evolving Corporate Regulatory Environment</strong><br/>
                The macroeconomic trajectory of Bangladesh, characterized by a sustained estimated gross domestic product (GDP) growth rate of 6.4% and a burgeoning domestic consumer market exceeding 185 million individuals, has fundamentally repositioned the jurisdiction as a highly attractive nexus for both indigenous entrepreneurship and foreign direct investment (FDI). At the epicenter of this rapid economic expansion lies the Registrar of Joint Stock Companies and Firms (RJSC). The RJSC serves as the sole statutory authority mandated by the state to oversee the formation, legal maintenance, and dissolution of all corporate entities, partnership firms, and non-profit societies operating within Bangladesh.</p>
                
                <p>Navigating the RJSC framework is a complex undertaking that requires a granular understanding of statutory requirements, dynamically scaling fee structures, and rigorous post-incorporation compliance obligations. The regulatory environment is governed primarily by three foundational pieces of legislation: the Companies Act of 1994, the Societies Registration Act of 1860, and the Partnership Act of 1932. Recent statutory modernizations, including amendments for One Person Companies (OPCs) and the Income Tax Act 2023, reflect a highly calculated governmental initiative to digitize the economy and enhance corporate transparency.</p>

                <h2 id="types" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <Layers className="text-legal-gold" size={28} /> Taxonomy and Strategic Selection of Corporate Entities
                </h2>
                <p>Before an enterprise can engage with the fiscal mechanics of the RJSC, the promoters must make a foundational decision regarding the legal architecture of their venture. This dictates authorized capital, registration fees, and long-term tax liabilities.</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Private Limited Companies:</strong> The predominant vehicle for commercial enterprise in Bangladesh, offering the protective veil of limited liability. Requires a minimum of two shareholders and two directors, bound by a maximum cap of fifty shareholders.</li>
                  <li><strong>Public Limited Companies:</strong> Designed for large-scale capital mobilization. Requires exponentially heightened regulatory scrutiny and financial disclosure. It is the mandatory choice for massive enterprises seeking eventual listing on the Dhaka or Chittagong Stock Exchange.</li>
                  <li><strong>One Person Companies (OPC):</strong> Targeted directly at successful sole proprietors. An OPC requires a minimum paid-up capital of BDT 2,500,000 and is restricted by a maximum ceiling of BDT 50,000,000. It must demonstrate a minimum annual turnover of BDT 10,000,000.</li>
                  <li><strong>Foreign Companies:</strong> Multinational corporations penetrate the market through branch or liaison/representative offices. These require RJSC clearance followed by rigorous approval from the Bangladesh Investment Development Authority (BIDA).</li>
                  <li><strong>Societies and Trade Organizations:</strong> Non-profits, trusts, and industry associations are regulated under different statutes. Their fees are often decoupled from share capital, scaling instead based on their membership base.</li>
                  <li><strong>Partnership Firms:</strong> Partners are jointly and severally liable for all firm debts. To encourage the formalization of these micro-commercial collaborations, the state deregulates their entry costs, resulting in a completely free registration process at the RJSC.</li>
                </ul>

                <h2 id="name" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <PenTool className="text-legal-gold" size={28} /> The Genesis of Corporate Identity: Name Clearance (NC)
                </h2>
                <p>The absolute genesis of corporate formation is the procurement of a valid Name Clearance (NC) certificate. With the exception of Foreign Companies and Partnership Firms, all proposed legal entities must secure this statutory approval prior to drafting their foundational incorporation documents. The RJSC employs a centralized digital database to prevent corporate identity theft and brand confusion.</p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 text-legal-navy">
                        <th className="p-3 border border-gray-200 font-semibold">Service Category</th>
                        <th className="p-3 border border-gray-200 font-semibold">Official Government Fee (BDT)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200">Name Clearance (NC) Application</td>
                        <td className="p-3 border border-gray-200">500.00</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3 border border-gray-200">Time Extension Application (Per instance)</td>
                        <td className="p-3 border border-gray-200">200.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>For standard corporate entities (Private, Public, and OPCs), the clearance remains valid for a strictly enforced period of <strong>30 days</strong> from the date of issue. This can be extended up to a maximum of 90 days via specific extension applications.</p>

                <h2 id="stamp" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <Stamp className="text-legal-gold" size={28} /> The Economics of Authorized Capital and Progressive Stamp Duties
                </h2>
                <p>Following Name Clearance, the next phase requires the precise drafting of the Memorandum of Association (MoA) and Articles of Association (AoA). The overarching fiscal architecture of the RJSC registration process is heavily weighted against the entity's declared <strong>"Authorized Share Capital."</strong></p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 text-legal-navy">
                        <th className="p-3 border border-gray-200 font-semibold">Statutory Document Type</th>
                        <th className="p-3 border border-gray-200 font-semibold">Declared Authorized Capital Tier</th>
                        <th className="p-3 border border-gray-200 font-semibold">Required Stamp Duty Fee (BDT)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200">Memorandum of Association (MoA)</td>
                        <td className="p-3 border border-gray-200">Universal Base Rate (Applies to all Tiers)</td>
                        <td className="p-3 border border-gray-200">1,000.00</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3 border border-gray-200">Articles of Association (AoA)</td>
                        <td className="p-3 border border-gray-200">Authorized Capital up to BDT 10,00,000</td>
                        <td className="p-3 border border-gray-200">2,000.00</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200">Articles of Association (AoA)</td>
                        <td className="p-3 border border-gray-200">Authorized Capital &gt; BDT 10,00,000 up to 30,000,000</td>
                        <td className="p-3 border border-gray-200">4,000.00</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3 border border-gray-200">Articles of Association (AoA)</td>
                        <td className="p-3 border border-gray-200">Authorized Capital &gt; BDT 30,000,000</td>
                        <td className="p-3 border border-gray-200">10,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 id="fees" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <Calculator className="text-legal-gold" size={28} /> Exhaustive Breakdown of RJSC Registration Fees
                </h2>
                <p>The total registration cost for a standard Private Limited Company is bifurcated into a fixed document filing fee and a variable authorized capital fee. A Private Company must file six core foundational documents during incorporation, calculated uniformly at BDT 200.00 per document (Total: <strong>BDT 1,200.00</strong>).</p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 text-legal-navy">
                        <th className="p-3 border border-gray-200 font-semibold">Capital Assessment Tranche</th>
                        <th className="p-3 border border-gray-200 font-semibold">Marginal Fee Assessment Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200">First BDT 10,00,000</td>
                        <td className="p-3 border border-gray-200">BDT 0.00 (Fully Exempt)</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3 border border-gray-200">For every BDT 1,00,000 after the first 10,00,000 up to 50,00,000</td>
                        <td className="p-3 border border-gray-200">BDT 80.00</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200">For every BDT 1,00,000 exceeding 50,00,000</td>
                        <td className="p-3 border border-gray-200">BDT 130.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-legal-navy p-5 rounded-r-lg my-8">
                  <strong className="text-legal-navy text-lg flex items-center gap-2 mb-2">
                    <Lightbulb className="text-legal-gold" size={20} /> Value Added Tax (VAT) Dynamics
                  </strong>
                  <p className="m-0 text-gray-700">A critical factor that is universally omitted in amateur preliminary cost analyses is the ruthless application of Value Added Tax (VAT). Bangladesh standardized VAT at a <strong>15% rate</strong> across a massive spectrum of goods and services. Crucially, this 15% VAT is universally appended directly to almost all RJSC government fees (base registration fees, document filing, certified copy issuances). Any accurate financial modeling must unilaterally increase raw RJSC estimates by this 15% margin.</p>
                </div>

                <h2 id="advisory" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <Scale className="text-legal-gold" size={28} /> The Role and Cost of Professional Advisory Services
                </h2>
                <p>A highly critical distinction must be drawn between the raw statutory RJSC government fees and the true professional capital required. Domestic law firms and established CA practices typically assess professional service fees ranging between BDT 10,000 and BDT 30,000 simply for basic Private Limited Company formations. For full turnkey solutions (including Trade License, VAT registration, and banking setups), total professional expenditure escalates to BDT 50,000 – BDT 1,00,000. Foreign Direct Investment (FDI) facilitation costs are exponentially higher due to multi-jurisdictional compliance and BIDA approvals.</p>

                <h2 id="tax" className="text-2xl md:text-3xl font-display font-bold text-legal-navy mt-12 mb-6 border-b border-gray-200 pb-3 flex items-center gap-3 scroll-mt-24">
                  <FileText className="text-legal-gold" size={28} /> The Macro-Fiscal Landscape: Taxation, VAT, and Compliance
                </h2>
                <p>Incorporation is merely the threshold. The modernized Income Tax Act 2023 represents a seismic shift in how corporate entities are financially assessed.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Corporate Tax:</strong> A standard non-publicly traded Private Limited Company faces a baseline corporate tax rate of 27.5%. Publicly traded companies and OPCs enjoy a reduced tax burden between 20% and 22.5%.</li>
                  <li><strong>Minimum Tax:</strong> The Act introduced an inescapable Minimum Tax Regime levied directly on gross corporate receipts, ignoring profitability.</li>
                  <li><strong>Periodic Filings:</strong> VAT-registered entities must submit Mushak 9.1 returns by the 15th of the following month. Corporations must also deduct income tax at source (TDS) from salaries and commercial rent, depositing funds strictly on a monthly basis.</li>
                </ul>

                <p className="mt-6">In conclusion, the fundamental architecture of corporate registration in Bangladesh represents a highly calculated ecosystem of scalable fees and unrelenting post-incorporation compliance demands. By deeply understanding this holistic, interconnected web of RJSC mandates, NBR tax policies, and digital payment infrastructure, domestic entrepreneurs and foreign direct investors can confidently navigate the jurisdiction and capitalize on the historic economic expansion of the Bangladeshi market.</p>
              </div>
            )}

            {/* Disclaimer */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-10 rounded-r-lg text-amber-900 text-sm">
              <AlertTriangle className="inline-block mr-2 mb-1" size={16} />
              <strong>Disclaimer:</strong> This research report is intended for general informational purposes. It does not constitute formal legal, financial, or professional tax advice. While every effort has been made to ensure accuracy, corporate laws and RJSC fees are subject to frequent amendments. Always consult with certified corporate lawyers or professionals for individualized assessment and statutory filing procedures.
            </div>

            {/* Social Share */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-legal-navy mb-4 flex items-center gap-2">
                <Share2 size={20} className="text-legal-gold" />
                Share this article
              </h3>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] text-white hover:bg-[#1877F2]/90 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-[30%] flex flex-col gap-6 relative">
          
          {/* Table of Contents */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:sticky lg:top-24 lg:z-10">
            <h3 className="text-lg font-bold text-legal-navy mb-4 flex items-center gap-2">
              <ListChecks size={20} className="text-legal-gold" />
              {lang === 'en' ? 'Table of Contents' : 'সূচিপত্র'}
            </h3>
            <ul className="space-y-3">
              {tocItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gray-600 hover:text-legal-gold transition-colors block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Service Summary */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-legal-navy">
            <div className="flex gap-3 items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-legal-navy">
                <FileSignature size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-legal-navy m-0">Corporate Setup</h3>
                <div className="text-sm text-gray-500 mt-1">RJSC & NBR Compliance</div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 my-3">
              {[...Array(4)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400" size={14} />)}
              <StarHalf className="fill-yellow-400 text-yellow-400" size={14} />
              <span className="text-gray-500 text-sm ml-2">4.9 Rating</span>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-blue-50 text-legal-navy px-3 py-1.5 rounded-lg font-semibold text-sm mt-2">
              <Zap size={14} /> Turnkey Legal Solutions
            </div>
            
            <h4 className="text-base text-legal-navy font-bold mt-5 mb-3 flex items-center gap-2">
              <Award size={16} /> Service Scope
            </h4>
            
            <ul className="space-y-3">
              <li className="flex gap-3 items-start text-sm text-gray-700">
                <span className="w-8 h-8 rounded-md bg-blue-50 text-legal-navy flex items-center justify-center shrink-0"><Building size={16} /></span>
                <div className="mt-1.5 font-semibold">Company Registration (Pvt/OPC)</div>
              </li>
              <li className="flex gap-3 items-start text-sm text-gray-700">
                <span className="w-8 h-8 rounded-md bg-blue-50 text-legal-navy flex items-center justify-center shrink-0"><Pen size={16} /></span>
                <div className="mt-1.5 font-semibold">MoA & AoA Expert Drafting</div>
              </li>
              <li className="flex gap-3 items-start text-sm text-gray-700">
                <span className="w-8 h-8 rounded-md bg-blue-50 text-legal-navy flex items-center justify-center shrink-0"><FolderOpen size={16} /></span>
                <div className="mt-1.5 font-semibold">RJSC Returns & Winding Up</div>
              </li>
            </ul>
            
            <div className="bg-blue-50 p-3 rounded-lg text-legal-navy text-sm mt-4">
              <strong>✔ Trusted by 1000+ Founders</strong><br/>
              Ensuring 100% Legal & Regulatory Compliance
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <a href="https://elawyersbd.com/contact-us/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-legal-navy text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-legal-navy/90 transition-colors">
                <CheckCircle size={16} /> Consult Us
              </a>
              <a href="https://wa.me/8801313583838" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#20b858] transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </section>

          {/* Contact Box */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-legal-navy">
            <div className="flex gap-3 items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-legal-navy">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-legal-navy m-0">Contact E-Lawyers</h3>
                <div className="text-sm text-gray-500 mt-1">Legal & Business Consultancy</div>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Corporate Office:</strong><br/>G-5, BTI Centara Grand, 144/1 Green Road, Panthapath, Dhaka-1205</p>
              <p><strong>Phone Numbers:</strong><br/>📞 +88 01721-742017<br/>📞 +88 01616-428429<br/>📞 +88 01313-583838</p>
              <p><strong>Email:</strong><br/><a href="mailto:info@elawyersbd.com" className="text-legal-navy font-medium hover:underline">info@elawyersbd.com</a></p>
              <p><strong>Website:</strong><br/><a href="https://elawyersbd.com" className="text-legal-navy font-medium hover:underline" target="_blank" rel="noopener noreferrer">elawyersbd.com</a></p>
            </div>
            
            <a href="https://academy.elawyersbd.com/meetingtag/" target="_blank" rel="noopener noreferrer" className="mt-5 w-full flex items-center justify-center gap-2 bg-legal-navy text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-legal-navy/90 transition-colors">
              <CalendarPlus size={16} /> Book Consultation
            </a>
          </section>

          {/* Related Services */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-legal-navy">
            <div className="flex gap-3 items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-legal-navy">
                <ListChecks size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-legal-navy m-0">Related Services</h3>
                <div className="text-sm text-gray-500 mt-1">From elawyersbd.com</div>
              </div>
            </div>
            
            <ul className="space-y-3">
              <li className="flex gap-3 items-center text-sm text-gray-700">
                <span className="w-8 h-8 rounded-md bg-blue-50 text-legal-navy flex items-center justify-center shrink-0"><Building size={16} /></span>
                <div className="font-medium">Foreign Company / FDI Setup</div>
              </li>
              <li className="flex gap-3 items-center text-sm text-gray-700">
                <span className="w-8 h-8 rounded-md bg-blue-50 text-legal-navy flex items-center justify-center shrink-0"><FileText size={16} /></span>
                <div className="font-medium">Corporate Tax Return Filing</div>
              </li>
              <li className="flex gap-3 items-center text-sm text-gray-700">
                <span className="w-8 h-8 rounded-md bg-blue-50 text-legal-navy flex items-center justify-center shrink-0"><Receipt size={16} /></span>
                <div className="font-medium">VAT Registration & Monthly Returns</div>
              </li>
              <li className="flex gap-3 items-center text-sm text-gray-700">
                <span className="w-8 h-8 rounded-md bg-blue-50 text-legal-navy flex items-center justify-center shrink-0"><Store size={16} /></span>
                <div className="font-medium">Trade License & IRC/ERC Processing</div>
              </li>
            </ul>
            
            <a href="https://elawyersbd.com/our-all-sevices/" target="_blank" rel="noopener noreferrer" className="mt-5 w-full flex items-center justify-center gap-2 bg-legal-navy text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-legal-navy/90 transition-colors">
              <Briefcase size={16} /> View All Services
            </a>
          </section>

        </aside>
      </div>
    </div>
  );
}
