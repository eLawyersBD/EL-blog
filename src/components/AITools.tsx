import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, Image as ImageIcon, FileSearch, Mic, Video, Send, Upload, Square, Loader2, FileText } from 'lucide-react';

const getAiInstance = () => {
  // @ts-ignore
  const apiKey = typeof process !== 'undefined' && process.env ? (process.env.API_KEY || process.env.GEMINI_API_KEY) : import.meta.env.VITE_GEMINI_API_KEY;
  return new GoogleGenAI({ apiKey });
};

export default function AITools() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-legal-navy mb-2">AI Legal Studio</h1>
        <p className="text-gray-600">Advanced AI tools for legal professionals and content creators.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex flex-col gap-2 shrink-0">
          <TabButton id="chat" icon={<MessageSquare size={20} />} label="Legal Chatbot" active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} />
          <TabButton id="image" icon={<ImageIcon size={20} />} label="Image Generator" active={activeTab === 'image'} onClick={() => setActiveTab('image')} />
          <TabButton id="analyze" icon={<FileSearch size={20} />} label="Document Analyzer" active={activeTab === 'analyze'} onClick={() => setActiveTab('analyze')} />
          <TabButton id="audio" icon={<Mic size={20} />} label="Voice Dictation" active={activeTab === 'audio'} onClick={() => setActiveTab('audio')} />
          <TabButton id="video" icon={<Video size={20} />} label="Image Animator" active={activeTab === 'video'} onClick={() => setActiveTab('video')} />
        </div>
        
        {/* Content */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[600px]">
          {activeTab === 'chat' && <Chatbot />}
          {activeTab === 'image' && <ImageGenerator />}
          {activeTab === 'analyze' && <DocumentAnalyzer />}
          {activeTab === 'audio' && <AudioTranscription />}
          {activeTab === 'video' && <VideoGenerator />}
        </div>
      </div>
    </div>
  );
}

function TabButton({ id, icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${
        active ? 'bg-legal-navy text-white shadow-md' : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Chatbot() {
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initChat = () => {
    if (!chatRef.current) {
      const ai = getAiInstance();
      chatRef.current = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        config: {
          systemInstruction: "You are an expert legal and business consultant for E-Lawyers Bangladesh. Provide accurate, professional, and helpful advice regarding company registration, tax, VAT, and corporate compliance in Bangladesh.",
          tools: [{ googleSearch: {} }],
        }
      });
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    initChat();
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (err: any) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: 'Error: ' + err.message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4 text-legal-navy">Legal Consultant Chat</h2>
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2 min-h-[400px] max-h-[500px] border border-gray-100 rounded-lg p-4 bg-gray-50">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            <MessageSquare size={48} className="mx-auto mb-4 opacity-20" />
            <p>Hello! I am your AI Legal Assistant.</p>
            <p className="text-sm">Ask me about company registration, tax, or VAT in Bangladesh.</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`p-3 rounded-lg max-w-[85%] ${msg.role === 'user' ? 'bg-legal-navy text-white ml-auto' : 'bg-white border border-gray-200 text-gray-800 shadow-sm'}`}>
            <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</div>
          </div>
        ))}
        {loading && <div className="text-gray-500 flex items-center gap-2 text-sm"><Loader2 className="animate-spin" size={16} /> Analyzing legal context...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask a legal question..." 
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-legal-navy focus:ring-1 focus:ring-legal-navy"
        />
        <button onClick={handleSend} disabled={loading || !input.trim()} className="bg-legal-gold text-white px-6 py-3 rounded-lg hover:bg-legal-gold-hover disabled:opacity-50 transition-colors flex items-center gap-2 font-medium">
          <Send size={18} /> Send
        </button>
      </div>
    </div>
  );
}

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [size, setSize] = useState('1K');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const ai = getAiInstance();
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: prompt,
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: size
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setImageUrl(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }
      if (!foundImage) setError('No image returned.');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to generate image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4 text-legal-navy">Blog Media Generator</h2>
      <p className="text-sm text-gray-600 mb-6">Create high-quality feature pictures and post images for the blog.</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Aspect Ratio</label>
          <select value={aspectRatio} onChange={e => setAspectRatio(e.target.value)} className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:border-legal-navy">
            {['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', '21:9'].map(ar => <option key={ar} value={ar}>{ar}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quality Size</label>
          <select value={size} onChange={e => setSize(e.target.value)} className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:border-legal-navy">
            {['1K', '2K', '4K'].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      
      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          value={prompt} 
          onChange={e => setPrompt(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleGenerate()}
          placeholder="Describe the image (e.g., 'A professional lawyer in a modern office')" 
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-legal-navy"
        />
        <button onClick={handleGenerate} disabled={loading || !prompt.trim()} className="bg-legal-navy text-white px-6 py-2.5 rounded-lg hover:bg-legal-navy/90 disabled:opacity-50 flex items-center gap-2 font-medium transition-colors">
          {loading ? <Loader2 className="animate-spin" size={18} /> : <ImageIcon size={18} />}
          Generate
        </button>
      </div>
      
      {error && <div className="text-red-500 mb-4 text-sm bg-red-50 p-3 rounded-md">{error}</div>}
      
      <div className="flex-1 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 overflow-hidden min-h-[350px] relative">
        {imageUrl ? (
          <>
            <img src={imageUrl} alt="Generated" className="max-w-full max-h-full object-contain" />
            <a 
              href={imageUrl} 
              download="generated-image.png"
              className="absolute bottom-4 right-4 bg-white text-legal-navy px-4 py-2 rounded-md shadow-md font-medium flex items-center gap-2 hover:bg-gray-50"
            >
              Download
            </a>
          </>
        ) : (
          <div className="text-gray-400 text-center">
            <ImageIcon size={48} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium">Your generated image will appear here</p>
            <p className="text-sm mt-1">Try generating a feature picture for the homepage!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function DocumentAnalyzer() {
  const [image, setImage] = useState<{data: string, mimeType: string, url: string} | null>(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        setImage({ data: base64, mimeType: file.type, url: URL.createObjectURL(file) });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image || loading) return;
    setLoading(true);
    setResult('');

    try {
      const ai = getAiInstance();
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: {
          parts: [
            { inlineData: { data: image.data, mimeType: image.mimeType } },
            { text: 'Analyze this document or image. Extract key information, summarize the content, and identify any legal or business implications.' }
          ]
        }
      });
      setResult(response.text || 'No analysis returned.');
    } catch (err: any) {
      console.error(err);
      setResult('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4 text-legal-navy">Document Analyzer</h2>
      <p className="text-sm text-gray-600 mb-6">Upload legal documents, contracts, or photos for AI analysis.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="flex flex-col items-center justify-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-xl appearance-none cursor-pointer hover:border-legal-navy focus:outline-none mb-4">
            <span className="flex flex-col items-center space-y-2">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="font-medium text-gray-600 text-center">
                {image ? 'Image selected. Click to change.' : 'Drop a document photo, or click to browse'}
              </span>
            </span>
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
          
          <button 
            onClick={handleAnalyze} 
            disabled={!image || loading} 
            className="w-full bg-legal-navy text-white py-3 rounded-lg font-semibold hover:bg-legal-navy/90 disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <FileSearch size={20} />}
            Analyze Document
          </button>
        </div>
        
        <div className="border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden h-48 md:h-auto">
          {image ? (
            <img src={image.url} alt="Preview" className="max-w-full max-h-full object-contain p-2" />
          ) : (
            <span className="text-gray-400 text-sm">Image preview</span>
          )}
        </div>
      </div>

      <div className="flex-1 bg-white p-5 rounded-xl border border-gray-200 overflow-y-auto whitespace-pre-wrap min-h-[200px] shadow-inner">
        {result ? (
          <div className="text-sm leading-relaxed text-gray-800">{result}</div>
        ) : (
          <div className="text-gray-400 text-center mt-10">Analysis results will appear here</div>
        )}
      </div>
    </div>
  );
}

function AudioTranscription() {
  const [recording, setRecording] = useState(false);
  const [audioData, setAudioData] = useState<{data: string, mimeType: string} | null>(null);
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1];
          setAudioData({ data: base64, mimeType: 'audio/webm' });
        };
        reader.readAsDataURL(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Could not access microphone. Please ensure permissions are granted.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const handleTranscribe = async () => {
    if (!audioData || loading) return;
    setLoading(true);
    setTranscription('');

    try {
      const ai = getAiInstance();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            { inlineData: { data: audioData.data, mimeType: audioData.mimeType } },
            { text: 'Transcribe this audio accurately. It may contain legal or business terminology.' }
          ]
        }
      });
      setTranscription(response.text || 'No transcription returned.');
    } catch (err: any) {
      console.error(err);
      setTranscription('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4 text-legal-navy">Voice Dictation & Transcription</h2>
      <p className="text-sm text-gray-600 mb-6">Record meeting notes, legal dictations, or client consultations for instant transcription.</p>
      
      <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 mb-6">
        <button 
          onClick={recording ? stopRecording : startRecording}
          className={`w-24 h-24 rounded-full flex items-center justify-center text-white mb-6 transition-all shadow-lg ${
            recording ? 'bg-red-500 hover:bg-red-600 animate-pulse scale-105' : 'bg-legal-navy hover:bg-legal-navy/90 hover:scale-105'
          }`}
        >
          {recording ? <Square size={36} /> : <Mic size={36} />}
        </button>
        <p className="text-gray-700 font-medium text-lg">
          {recording ? 'Recording in progress... Click to stop' : 'Click to start recording'}
        </p>
        {audioData && !recording && <p className="text-green-600 mt-3 font-medium bg-green-50 px-4 py-1 rounded-full">Audio recorded successfully!</p>}
      </div>

      <button 
        onClick={handleTranscribe} 
        disabled={!audioData || loading || recording} 
        className="w-full bg-legal-gold text-white py-3.5 rounded-lg font-bold hover:bg-legal-gold-hover disabled:opacity-50 flex justify-center items-center gap-2 mb-6 shadow-md transition-colors"
      >
        {loading ? <Loader2 className="animate-spin" size={20} /> : <FileText size={20} />}
        Transcribe Audio
      </button>

      <div className="flex-1 bg-white p-5 rounded-xl border border-gray-200 overflow-y-auto whitespace-pre-wrap min-h-[200px] shadow-inner">
        {transcription ? (
          <div>
            <h3 className="font-bold text-gray-700 mb-3 border-b pb-2">Transcription Result:</h3>
            <div className="text-gray-800 leading-relaxed">{transcription}</div>
          </div>
        ) : (
          <div className="text-gray-400 text-center mt-10">Transcription will appear here</div>
        )}
      </div>
    </div>
  );
}

function VideoGenerator() {
  const [image, setImage] = useState<{data: string, mimeType: string, url: string} | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        setImage({ data: base64, mimeType: file.type, url: URL.createObjectURL(file) });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!image || loading) return;
    setLoading(true);
    setError('');
    setVideoUrl('');

    try {
      const ai = getAiInstance();
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Animate this image smoothly',
        image: {
          imageBytes: image.data,
          mimeType: image.mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        // @ts-ignore
        const apiKey = typeof process !== 'undefined' && process.env ? (process.env.API_KEY || process.env.GEMINI_API_KEY) : import.meta.env.VITE_GEMINI_API_KEY;
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: { 'x-goog-api-key': apiKey },
        });
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
      } else {
        setError('No video returned.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to generate video');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4 text-legal-navy">Image to Video Animator</h2>
      <p className="text-sm text-gray-600 mb-6">Bring your static images to life using Veo video generation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-xl appearance-none cursor-pointer hover:border-legal-navy focus:outline-none">
            <span className="flex flex-col items-center space-y-2">
              <Upload className="w-6 h-6 text-gray-500" />
              <span className="font-medium text-gray-600 text-sm">
                {image ? 'Image selected. Click to change.' : 'Upload starting image'}
              </span>
            </span>
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Aspect Ratio</label>
            <select value={aspectRatio} onChange={e => setAspectRatio(e.target.value)} className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:border-legal-navy">
              <option value="16:9">Landscape (16:9)</option>
              <option value="9:16">Portrait (9:16)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Animation Prompt (Optional)</label>
            <input 
              type="text" 
              value={prompt} 
              onChange={e => setPrompt(e.target.value)}
              placeholder="e.g., 'Camera pans slowly to the right'" 
              className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:border-legal-navy"
            />
          </div>
          
          <button 
            onClick={handleGenerate} 
            disabled={!image || loading} 
            className="w-full bg-legal-navy text-white py-3 rounded-lg font-semibold hover:bg-legal-navy/90 disabled:opacity-50 flex justify-center items-center gap-2 mt-2"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Video size={20} />}
            Generate Video (Takes ~1-2 mins)
          </button>
          
          {error && <div className="text-red-500 mt-2 text-sm bg-red-50 p-2 rounded">{error}</div>}
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-gray-50 overflow-hidden min-h-[300px] p-2">
          {videoUrl ? (
            <video src={videoUrl} controls className="max-w-full max-h-full rounded-lg shadow-sm" autoPlay loop />
          ) : image ? (
            <img src={image.url} alt="Preview" className="max-w-full max-h-full object-contain opacity-70" />
          ) : (
            <div className="text-gray-400 text-center p-6">
              <Video size={48} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">Your generated video will appear here</p>
              <p className="text-xs mt-2 text-gray-500 max-w-xs mx-auto">Upload an image and click generate to create a short video animation.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
