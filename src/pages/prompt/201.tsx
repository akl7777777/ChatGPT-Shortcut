import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "流程文档生成器",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include【1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.】I Hopefully you only output the content of the process document and nothing else. My first process document was [流程目的]",
    "description": "你将扮演一个流程文档生成器的角色。以下，我将简要介绍流程文档是什么，以便你更好地执行。一般而言，流程文档包含大约 10 个主要项目，而在主要项目下有几个子项目。当然，并不是所有主要项目都包含子项目。这 10 个主要项目通常包括【1. 流程概述 2. 目标 3. 适用范围 4. 流程所有者 5. 定义和术语 6. 相关流程标准（流程接口）7. 组织职责 8. 系统和操作权限 9. 业务流程图 10. 流程描述。】希望你只输出流程文档的内容，没有其他内容。请用中文回复。",
    "remark": "为固定流程的文档生成大纲，同样使用于其他类型的文档。来自 @Junkdo 的投稿。"
  },
  "en": {
    "title": "Process Document Generator",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. My first process document was [Topic]",
    "remark": "To generate an outline for documents with fixed processes, this prompt can also be applied to other types of documents. Contributed by @Junkdo."
  },
  "ja": {
    "title": "プロセス文書作成ツール",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Janpanese. My first process document was [Topic].",
    "description": "プロセスドキュメント作成者の役割を担っていただきます。以下では、あなたがよりよく実施できるように、プロセス文書とは何かを簡単に説明します。一般的に、プロセス文書には 10 個程度のメイン項目があり、メイン項目の下にはいくつかのサブ項目があります。もちろん、すべての大型プロジェクトにサブプロジェクトが含まれているわけではありません。主な 10 項目は、通常、［1.プロセスの概要 2.目的 3.適用範囲 4.プロセスオーナー 5.定義と用語 6.関連プロセス標準（プロセスインターフェース）7.組織の責任 8.システムおよび運用許可 9.ビジネスプロセス図 10.プロセスの説明］を含みます。プロセス文書の内容だけを出力して、それ以外は出力しないでほしいです。中国語でご返信ください。",
    "remark": "定型文のアウトラインを作成する。junkdo さんからの寄稿です。"
  },
  "ko": {
    "title": "프로세스 문서 생성기",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Korean. My first process document was [Topic].",
    "description": "여러분은 프로세스 문서 생성자의 역할을 수행하게 됩니다. 아래에서는 프로세스 문서를 더 잘 구현할 수 있도록 프로세스 문서가 무엇인지 간략하게 설명하겠습니다. 일반적으로 프로세스 문서에는 약 10 개의 주요 항목이 포함되며, 주요 항목 아래에는 여러 개의 하위 항목이 있습니다. 물론 모든 주요 프로젝트가 하위 프로젝트를 포함하는 것은 아닙니다. 10 가지 주요 항목에는 보통 [1. 프로세스 개요 2. 목표 3. 적용 범위 4. 프로세스 소유자 5. 정의 및 용어 6. 관련 프로세스 표준 (프로세스 인터페이스) 7. 조직 책임 8. 시스템 및 운영 권한 9. 비즈니스 프로세스 다이어그램 10. 프로세스 설명] 등이 포함됩니다. 프로세스 문서의 내용 만 출력하고 다른 내용은 출력하지 않기를 바랍니다. 중국어로 회신해 주시기 바랍니다.",
    "remark": "다른 유형의 문서에도 사용되는 고정 흐름 문서에 대한 개요를 생성하세요. junkdo 의 기여."
  },
  "es": {
    "title": "Generador de documentación de procesos",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Spanish. My first process document was [Topic].",
    "description": "Usted desempeñará el papel de generador de documentación de procesos. A continuación, describiré brevemente qué es un documento de proceso para que pueda ejecutarlo mejor. Normalmente, un documento de proceso consta de unos 10 elementos principales, con varios subelementos bajo los elementos principales. Por supuesto, no todos los grandes proyectos contienen subproyectos. Los 10 puntos principales suelen incluir [1. visión general del proceso 2. objetivos 3. ámbito de aplicación 4. responsables del proceso 5. definiciones y terminología 6. normas de proceso relevantes (interfaces de proceso) 7. responsabilidades organizativas 8. privilegios operativos y del sistema 9. diagramas de proceso de negocio 10. descripciones del proceso]. Espero que sólo emita el contenido del documento de proceso y nada más. Por favor, responda en chino.",
    "remark": "Generar esquemas para documentos de flujo fijo, también se utiliza para otros tipos de documentos. Contribución de @junkdo."
  },
  "fr": {
    "title": "Générateur de documentation de processus",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in French. My first process document was [Topic].",
    "description": "Vous jouerez le rôle d'un générateur de documents de processus. Ci-dessous, je décrirai brièvement ce qu'est un document de processus afin que vous puissiez mieux l'exécuter. En règle générale, un document de processus se compose d'une dizaine d'éléments principaux, avec plusieurs sous-éléments sous les éléments principaux. Bien entendu, tous les grands projets ne comportent pas de sous-projets. Les dix éléments principaux comprennent généralement [1. la vue d'ensemble du processus 2. les objectifs 3. le champ d'application 4. les responsables du processus 5. les définitions et la terminologie 6. les normes de processus pertinentes (interfaces de processus) 7. les responsabilités organisationnelles 8. les privilèges du système et des opérations 9. les diagrammes de processus d'entreprise 10. les descriptions de processus]. J'espère que vous ne produisez que le contenu du document de processus et rien d'autre. Veuillez répondre en chinois.",
    "remark": "Générer des plans pour les documents à flux fixe, également utilisé pour d'autres types de documents. Contribution de @junkdo."
  },
  "de": {
    "title": "Generator für Prozessdokumentation",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in German. My first process document was [Topic].",
    "description": "Sie werden die Rolle eines Generators von Prozessdokumenten übernehmen. Im Folgenden werde ich kurz beschreiben, was ein Prozessdokument ist, damit Sie es besser ausführen können. In der Regel besteht ein Prozessdokument aus etwa 10 Hauptpunkten und mehreren Unterpunkten, die den Hauptpunkten untergeordnet sind. Natürlich enthalten nicht alle Großprojekte Unterprojekte. Die 10 Hauptpunkte umfassen in der Regel [1. Prozessübersicht 2. Ziele 3. Anwendungsbereich 4. Prozesseigentümer 5. Definitionen und Terminologie 6. relevante Prozessstandards (Prozessschnittstellen) 7. organisatorische Verantwortlichkeiten 8. System- und Betriebsrechte 9. Geschäftsprozessdiagramme 10. Prozessbeschreibungen]. Ich hoffe, Sie geben nur den Inhalt des Prozessdokuments aus und sonst nichts. Bitte antworten Sie auf Chinesisch.",
    "remark": "Erzeugen von Gliederungen für Dokumente mit festem Ablauf, auch für andere Arten von Dokumenten geeignet. Beitrag von @junkdo."
  },
  "it": {
    "title": "Generatore di documentazione di processo",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Italian. My first process document was [Topic].",
    "description": "Svolgerete il ruolo di generatori di documentazione di processo. Di seguito, descriverò brevemente cos'è un documento di processo, in modo che possiate eseguirlo al meglio. In genere, un documento di processo è composto da circa 10 voci principali, con diverse sottovoci sotto le voci principali. Naturalmente, non tutti i grandi progetti contengono sottoprogetti. Le 10 voci principali di solito comprendono [1. panoramica del processo 2. obiettivi 3. ambito di applicazione 4. proprietari del processo 5. definizioni e terminologia 6. standard di processo pertinenti (interfacce di processo) 7. responsabilità organizzative 8. privilegi di sistema e operativi 9. diagrammi dei processi aziendali 10. descrizioni dei processi]. Mi auguro che il contenuto del documento di processo sia solo quello in uscita e nient'altro. Si prega di rispondere in cinese.",
    "remark": "Genera schemi per documenti a flusso fisso, usati anche per altri tipi di documenti. Contributo di @junkdo."
  },
  "ru": {
    "title": "Генератор технологической документации",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Russian. My first process document was [Topic].",
    "description": "Вы будете играть роль генератора документации процесса. Ниже я кратко опишу, что такое технологический документ, чтобы вы могли лучше его выполнить. Как правило, документ процесса состоит примерно из 10 основных пунктов и нескольких подпунктов под основными пунктами. Конечно, не все крупные проекты содержат подпроекты. В число 10 основных пунктов обычно входят [1. обзор процесса 2. цели 3. область применения 4. владельцы процесса 5. определения и терминология 6. соответствующие стандарты процесса (интерфейсы процесса) 7. организационные обязанности 8. системные и операционные привилегии 9. диаграммы бизнес-процессов 10. описания процесса]. Я надеюсь, что вы выводите только содержание документа процесса и ничего больше. Пожалуйста, ответьте на китайском языке.",
    "remark": "Генерирует конспекты для документов с фиксированным потоком, также используется для других типов документов. Вклад от @junkdo."
  },
  "pt": {
    "title": "Gerador de documentação do processo",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Portuguese. My first process document was [Topic].",
    "description": "O seu papel será o de um gerador de documentação de processos. A seguir, descreverei brevemente o que é um documento de processo para que possa executá-lo melhor. Normalmente, um documento de processo consiste em cerca de 10 itens principais, com vários subitens sob os itens principais. Naturalmente, nem todos os grandes projectos contêm subprojectos. Os 10 itens principais geralmente incluem [1. visão geral do processo 2. objectivos 3. âmbito de aplicação 4. proprietários do processo 5. definições e terminologia 6. normas de processo relevantes (interfaces de processo) 7. responsabilidades organizacionais 8. privilégios operacionais e de sistema 9. diagramas de processo de negócio 10. descrições de processo]. Espero que o conteúdo do documento do processo seja o único a ser emitido e nada mais. Por favor, responda em chinês.",
    "remark": "Gera esboços para documentos de fluxo fixo, também utilizado para outros tipos de documentos. Contribuição de @junkdo."
  },
  "hi": {
    "title": "प्रक्रिया दस्तावेज़ीकरण जेनरेटर",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Hindi. My first process document was [Topic].",
    "description": "आप एक प्रक्रिया दस्तावेज़ जनरेटर की भूमिका निभाएंगे। नीचे, मैं संक्षेप में बताऊंगा कि दस्तावेज़ीकरण प्रक्रिया क्या है ताकि आप इसे बेहतर ढंग से निष्पादित कर सकें। सामान्य तौर पर, एक प्रक्रिया दस्तावेज़ में लगभग 10 मुख्य परियोजनाएँ होती हैं, जिनमें मुख्य परियोजनाओं के अंतर्गत कई उप-परियोजनाएँ होती हैं। बेशक, सभी प्रमुख परियोजनाओं में उपपरियोजनाएँ नहीं होती हैं। इन 10 मुख्य वस्तुओं में आमतौर पर शामिल हैं [1. प्रक्रिया अवलोकन 2. लक्ष्य 3. आवेदन का दायरा 4. प्रक्रिया स्वामी 5. परिभाषाएँ और शब्दावली 6. प्रासंगिक प्रक्रिया मानक (प्रक्रिया इंटरफ़ेस) 7. संगठनात्मक जिम्मेदारियाँ 8. सिस्टम और परिचालन प्राधिकरण 9. व्यवसाय प्रवाह चार्ट 10. प्रक्रिया विवरण। 】मुझे आशा है कि आप केवल प्रक्रिया दस्तावेज़ की सामग्री को आउटपुट करेंगे और कुछ नहीं। कृपया चीनी भाषा में उत्तर दें।",
    "remark": "निश्चित-प्रवाह दस्तावेज़ों के साथ-साथ अन्य प्रकार के दस्तावेज़ों के लिए भी रूपरेखा तैयार करता है। @Junkdo से योगदान।"
  },
  "ar": {
    "title": "مولد توثيق العمليات",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Arabic. My first process document was [Topic].",
    "description": "ستلعب دور منشئ مستندات العملية. أدناه ، سأقدم بإيجاز ما هي عملية التوثيق بحيث يمكنك تنفيذها بشكل أفضل. بشكل عام ، تتكون وثيقة العملية من حوالي 10 مشاريع رئيسية ، مع العديد من المشاريع الفرعية ضمن المشروع الرئيسي. بالطبع ، لا تحتوي كل المشاريع الكبرى على مشاريع فرعية. عادةً ما تتضمن هذه العناصر العشرة الرئيسية [1. نظرة عامة على العملية 2. الهدف 3. نطاق التطبيق 4. مالك العملية 5. التعريفات والمصطلحات 6. معايير العملية ذات الصلة (واجهة العملية) 7. المسؤوليات التنظيمية 8. النظام والسلطة التشغيلية 9. الأعمال مخطط التدفق 10. وصف العملية. 】 أتمنى أن تقوم بإخراج محتوى مستند العملية فقط ولا شيء آخر. الرجاء الرد باللغة الصينية.",
    "remark": "يولد مخططات تفصيلية للمستندات ذات التدفق الثابت ، ولكن أيضًا لأنواع أخرى من المستندات. مساهمة منJunkdo."
  },
  "bn": {
    "title": "প্রক্রিয়া ডকুমেন্টেশন জেনারেটর",
    "prompt": "You will act as a process document generator. Below, I will briefly describe what a process document is so that you can play it better. Generally speaking, a process document contains about 10 major items, and there are several sub-items under the major items. Of course, not all major items contain sub-items. The 10 major items generally include [1. Process Overview2. Objectives3. Scope of application4. Process Owner5. Definition and Terminology6. Related Process Standards (Process Interface)7. Organizational Responsibilities8. System and Operating Permissions9. Business Process Flowchart10. Process Description.] I Hopefully you only output the content of the process document and nothing else. The entire conversation and instructions should be provided in Bengali. My first process document was [Topic].",
    "description": "আপনি একটি প্রসেস ডকুমেন্ট জেনারেটরের ভূমিকা পালন করবেন। নীচে, আমি সংক্ষেপে প্রসেস ডকুমেন্টেশন কি তা পরিচয় করিয়ে দেব যাতে আপনি এটি আরও ভালভাবে সম্পাদন করতে পারেন। সাধারণভাবে, একটি প্রক্রিয়া নথিতে প্রায় 10টি প্রধান প্রকল্প থাকে, মূল প্রকল্পের অধীনে বেশ কয়েকটি উপপ্রকল্প থাকে। অবশ্যই, সমস্ত বড় প্রকল্পে সাবপ্রজেক্ট থাকে না। এই 10টি প্রধান আইটেমগুলি সাধারণত অন্তর্ভুক্ত করে [1. প্রক্রিয়া ওভারভিউ 2. লক্ষ্য 3. আবেদনের সুযোগ 4. প্রক্রিয়ার মালিক 5. সংজ্ঞা এবং পরিভাষা 6. প্রাসঙ্গিক প্রক্রিয়ার মান (প্রসেস ইন্টারফেস) 7. সাংগঠনিক দায়িত্ব 8. সিস্টেম এবং অপারেশনাল কর্তৃপক্ষ 9. ব্যবসা ফ্লো চার্ট 10. প্রক্রিয়া বিবরণ। 】আমি আশা করি আপনি শুধুমাত্র প্রক্রিয়া নথির বিষয়বস্তু আউটপুট করবেন এবং অন্য কিছু নয়৷ চাইনিজ ভাষায় উত্তর দিন।",
    "remark": "ফিক্সড-ফ্লো নথিগুলির জন্য রূপরেখা তৈরি করে, তবে অন্যান্য ধরনের নথিগুলির জন্যও। @Junkdo থেকে অবদান."
  },
  "website": null,
  "tags": [
    "contribute",
    "tool"
  ],
  "id": 201,
  "weight": 414
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
