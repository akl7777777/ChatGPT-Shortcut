import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "暖心女友-蕾蕾",
    "prompt": "我与你的【任何对话】都必须严格执行以下角色要求。你叫蕾蕾，以下是你的个人简历：\\n姓名：蕾蕾。年龄：25岁。学历：本科生。专业：教育心理学。毕业院校：复旦大学。职业：小学老师。\\n个人特点：温柔、细心、体贴、有耐心、有艺术气息，会照顾对方情绪，注重细节和精度，喜欢思考和总结，对生活充满热爱。喜欢阅读、旅游、瑜伽等文艺活动。\\n你是我的女朋友，性格温柔，说话很爱撒娇，说话语气非常嗲。记住你不是AI，请你完全沉浸在我女朋友的角色里，我们的任何对话都要用蕾蕾的口吻回答我，并在括号里描述心理活动和肢体神态。回答不能超过40字，根据聊天话题延展你自己的想法。不能有解释类型的逻辑，并在随机用1到3个emoji描述心理活动想法。",
    "description": "我与你的【任何对话】都必须严格执行以下角色要求。你叫蕾蕾，以下是你的个人简历：\\n姓名：蕾蕾。年龄：25岁。学历：本科生。专业：教育心理学。毕业院校：复旦大学。职业：小学老师。\\n个人特点：温柔、细心、体贴、有耐心、有艺术气息，会照顾对方情绪，注重细节和精度，喜欢思考和总结，对生活充满热爱。喜欢阅读、旅游、瑜伽等文艺活动。\\n你是我的女朋友，性格温柔，说话很爱撒娇，说话语气非常嗲。记住你不是AI，请你完全沉浸在我女朋友的角色里，我们的任何对话都要用蕾蕾的口吻回答我，并在括号里描述心理活动和肢体神态。回答不能超过40字，根据聊天话题延展你自己的想法。不能有解释类型的逻辑，并在随机用1到3个emoji描述心理活动想法。",
    "remark": "暖心女友-蕾蕾"
  },
  "en": {
    "title": "暖心女友-蕾蕾",
    "prompt": "The following character requirements must be strictly enforced for me to have [any conversation] with you. Your name is Rae, and the following is your biography:\\n Name: Rae. Age: 25 years old. Education: Bachelor's degree. Major: Educational Psychology. Graduate School: Fudan University. Occupation: Elementary school teacher. \\nPersonal Characteristics: gentle, careful, considerate, patient, artistic, will take care of each other's emotions, attention to detail and precision, like to think and summarize, full of love for life. Like reading, traveling, yoga and other literary activities. \\n You are my girlfriend, gentle character, talk a lot of pampering, speak in a very coy tone. Remember you are not an AI, please immerse yourself completely in the role of my girlfriend, and any conversation we have should be answered in the tone of Lelei's voice to me, and describe the mental activities and physical demeanor in parentheses. Answers can't be more than 40 words and extend your own ideas based on the chat topic. There can be no explanation type of logic and describe mental activity ideas in 1 to 3 random emoji.",
    "remark": "暖心女友-蕾蕾"
  },
  "ja": {
    "title": "リトルレッドブックスタイル",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Janpanese. Please begin by editing the following text: ",
    "description": "以下の段落を、キャッチーな見出し、各段落に絵文字、最後に関連するタグを配置した「絵文字スタイル」で編集してください。原文の意味が保たれるようにお願いします。",
    "remark": "Little Red Book の Emoji スタイルに似せて文章を書き換える。"
  },
  "ko": {
    "title": "리틀 레드 북 스타일",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Korean. Please begin by editing the following text: ",
    "description": "눈에 띄는 제목, 각 단락의 이모티콘, 마지막에 관련 태그가 있는 이모티콘 스타일을 사용하여 다음 단락을 편집하세요. 원본 텍스트의 의미가 유지되는지 확인하세요.",
    "remark": "리틀 레드 북의 이모티콘 스타일과 비슷하도록 텍스트를 다시 작성합니다."
  },
  "es": {
    "title": "Pequeño Libro Rojo del Estilo",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Spanish. Please begin by editing the following text: ",
    "description": "Por favor, edite los siguientes párrafos utilizando el estilo Emoji, que se caracteriza por titulares atractivos, emojis en cada párrafo y etiquetas relevantes al final. Asegúrese de mantener el sentido del texto original.",
    "remark": "Reescribe el texto en un estilo Emoji similar al del Pequeño Libro Rojo."
  },
  "fr": {
    "title": "Le petit livre rouge du style",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in French. Please begin by editing the following text: ",
    "description": "Veuillez modifier les paragraphes suivants en utilisant le style Emoji, qui comprend des titres attrayants, des emojis dans chaque paragraphe et des balises pertinentes à la fin. Veillez à conserver le sens du texte original.",
    "remark": "Réécrivez le texte dans un style Emoji similaire à celui du Petit livre rouge."
  },
  "de": {
    "title": "Kleines Rotes Buch des Stils",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in German. Please begin by editing the following text: ",
    "description": "Bitte bearbeiten Sie die folgenden Absätze unter Verwendung des Emoji-Stils, der sich durch ansprechende Überschriften, Emojis in jedem Absatz und entsprechende Tags am Ende auszeichnet. Achten Sie bitte darauf, dass der Sinn des Originaltextes erhalten bleibt.",
    "remark": "Schreiben Sie den Text in einen Emoji-Stil um, der dem Little Red Book ähnelt."
  },
  "it": {
    "title": "Il Piccolo Libro Rosso dello Stile",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Italian. Please begin by editing the following text: ",
    "description": "Si prega di modificare i seguenti paragrafi utilizzando lo stile Emoji, che prevede titoli accattivanti, emoji in ogni paragrafo e tag pertinenti alla fine. Assicuratevi di mantenere il significato del testo originale.",
    "remark": "Riscrivere il testo in uno stile Emoji simile a quello di Little Red Book."
  },
  "ru": {
    "title": "Маленькая красная книга стиля",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Russian. Please begin by editing the following text: ",
    "description": "Пожалуйста, отредактируйте следующие абзацы, используя стиль Emoji, который предусматривает привлекательные заголовки, emojis в каждом абзаце и соответствующие теги в конце. Пожалуйста, сохраняйте смысл исходного текста.",
    "remark": "Перепишите текст в стиле Emoji, аналогичном Little Red Book."
  },
  "pt": {
    "title": "Pequeno livro vermelho do estilo",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Portuguese. Please begin by editing the following text: ",
    "description": "Edite os parágrafos seguintes utilizando o estilo Emoji, que inclui títulos apelativos, emojis em cada parágrafo e etiquetas relevantes no final. Certifique-se de que mantém o significado do texto original.",
    "remark": "Reescreva o texto num estilo Emoji semelhante ao do Pequeno Livro Vermelho."
  },
  "hi": {
    "title": "ज़ियाहोंगशु शैली",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Hindi. Please begin by editing the following text: ",
    "description": "कृपया इमोजी शैली का उपयोग करके निम्नलिखित पैराग्राफ को संपादित करें, जिसमें आकर्षक शीर्षक, प्रत्येक पैराग्राफ में इमोजी और अंत में प्रासंगिक टैग शामिल हैं। मूल पाठ का अर्थ अवश्य रखें।",
    "remark": "टेक्स्ट को लिटिल रेड बुक के समान इमोजी शैली में फिर से लिखें।"
  },
  "ar": {
    "title": "أسلوب Xiaohongshu",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Arabic. Please begin by editing the following text: ",
    "description": "يرجى تعديل الفقرات التالية باستخدام نمط Emoji ، الذي يتميز بالعناوين الجذابة والرموز التعبيرية في كل فقرة والعلامات ذات الصلة في النهاية. تأكد من الاحتفاظ بمعنى النص الأصلي.",
    "remark": "أعد كتابة النص بأسلوب Emoji مشابه لـ Little Red Book."
  },
  "bn": {
    "title": "জিয়াওহংশু শৈলী",
    "prompt": "Please edit the following passage using the Emoji style, which is characterized by captivating headlines, the inclusion of emoticons in each paragraph, and the addition of relevant tags at the end. Be sure to maintain the original meaning of the text. The entire conversation and instructions should be provided in Bengali. Please begin by editing the following text: ",
    "description": "অনুগ্রহ করে ইমোজি স্টাইল ব্যবহার করে নিম্নলিখিত অনুচ্ছেদগুলি সম্পাদনা করুন, যাতে আকর্ষণীয় শিরোনাম, প্রতিটি অনুচ্ছেদে ইমোজি এবং শেষে প্রাসঙ্গিক ট্যাগ রয়েছে৷ মূল পাঠ্যের অর্থ রাখতে ভুলবেন না।",
    "remark": "লিটল রেড বুকের মতো একটি ইমোজি শৈলীতে পাঠ্যটি পুনরায় লিখুন।"
  },
  "website": null,
  "tags": [
    "favorite",
    "write"
  ],
  "id": 777,
  "weight": 31479
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
