"use client";

import { Code2 } from 'lucide-react';
import Image from 'next/image';
import {
    SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiSvelte, SiTailwindcss,
    SiTypescript, SiJavascript, SiGo, SiRust, SiPhp,
    SiNodedotjs, SiExpress, SiNestjs, SiFastapi, SiDjango, SiFlask, SiSpring,
    SiGraphql, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiElasticsearch,
    SiFirebase, SiDocker, SiKubernetes, SiGooglecloud,
    SiGithubactions, SiTerraform, SiGit,
    SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiOpenai,
    SiGoogleanalytics, SiGrafana, SiKibana, SiPrometheus,
    SiAuth0, SiJsonwebtokens, SiAdobeacrobatreader, SiRos,
} from 'react-icons/si';

import { FaServer, FaJava, FaGoogle } from 'react-icons/fa';
import { TbApi, TbLock, TbFileText, TbBrain, TbBrandCSharp } from 'react-icons/tb';

type TechIconProps = {
    tech: string;
    className?: string;
};

// ブランドカラーの定義
const brandColors = {
    react: "#61DAFB",
    vue: "#4FC08D",
    angular: "#DD0031",
    nextjs: "#000000",
    svelte: "#FF3E00",
    tailwind: "#06B6D4",
    mui: "#007FFF",
    typescript: "#3178C6",
    javascript: "#F7DF1E",
    python: "#3776AB",
    go: "#00ADD8",
    rust: "#000000",
    java: "#007396",
    csharp: "#239120",
    php: "#777BB4",
    linux: "#FCC624",
    ros: "#22314E",
    node: "#339933",
    express: "#000000",
    nest: "#E0234E",
    fastapi: "#009688",
    django: "#092E20",
    flask: "#000000",
    spring: "#6DB33F",
    graphql: "#E10098",
    postgres: "#336791",
    mysql: "#4479A1",
    sqlite: "#003B57",
    mongodb: "#47A248",
    redis: "#DC382D",
    elasticsearch: "#005571",
    firebase: "#FFCA28",
    docker: "#2496ED",
    kubernetes: "#326CE5",
    azure: "#0078D4",
    microsoft: "#00A4EF",
    aws: "#FF9900",
    googlecloud: "#4285F4",
    google: "#4285F4",
    supabase: "#3ECF8E",
    vercel: "#000000",
    render: "#46E3B7",
    githubactions: "#2088FF",
    terraform: "#7B42BC",
    git: "#F05032",
    pytorch: "#EE4C2C",
    tensorflow: "#FF6F00",
    keras: "#D00000",
    scikit: "#F7931E",
    openai: "#412991",
    langchain: "#65C29A",
    ai: "#00A0D6",
    analytics: "#E37400",
    grafana: "#F46800",
    kibana: "#005571",
    prometheus: "#E6522C",
    api: "#00A0D6",
    auth0: "#EB5424",
    jwt: "#000000",
    auth: "#0066CC",
    pdf: "#EC1C24",
    document: "#4285F4"
};

// カスタムアイコン用のコンポーネント
const CustomIconImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    return (
        <div className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'contain' }}
            />
        </div>
    );
};

export function TechIcon({ tech, className = "w-6 h-6" }: TechIconProps) {
    // 技術名を小文字に変換して比較する
    const techLower = tech.toLowerCase();

    // 技術に応じた色を定義
    let color = "";
    let IconComponent: React.ElementType = Code2;

    // 画像アイコンで表示する技術のリスト
    // 画像として表示する場合の分岐
    if (techLower.includes('python')) {
        return <CustomIconImage src="/icons/python-logo.png" alt="Python" className={className} />;
    } else if (techLower.includes('msal') || techLower.includes('microsoft') && !techLower.includes('azure')) {
        return <CustomIconImage src="/icons/microsoft-logo.png" alt="Microsoft" className={className} />;
    } else if (techLower.includes('azure')) {
        return <CustomIconImage src="/icons/azure-logo.png" alt="Azure" className={className} />;
    } else if (techLower.includes('azure function')) {
        return <CustomIconImage src="/icons/azure-functions-logo.png" alt="Azure Functions" className={className} />;
    } else if (techLower.includes('static web app')) {
        return <CustomIconImage src="/icons/azure-static-web-apps-logo.png" alt="Azure Static Web Apps" className={className} />;
    } else if (techLower.includes('cosmos')) {
        return <CustomIconImage src="/icons/azure-cosmosdb-logo.png" alt="Azure CosmosDB" className={className} />;
    } else if (techLower.includes('supabase')) {
        return <CustomIconImage src="/icons/supabase-logo.png" alt="Supabase" className={className} />;
    } else if (techLower.includes('langchain')) {
        return <CustomIconImage src="/icons/langchain-logo.png" alt="LangChain" className={className} />;
    } else if (techLower.includes('aws')) {
        return <CustomIconImage src="/icons/aws-logo.png" alt="AWS" className={className} />;
    } else if (techLower.includes('openai')) {
        return <CustomIconImage src="/icons/openai-logo.png" alt="OpenAI" className={className} />;
    } else if (techLower.includes('mui') || techLower.includes('material-ui')) {
        return <CustomIconImage src="/icons/mui-logo.png" alt="MUI" className={className} />;
    } else if (techLower.includes('render')) {
        return <CustomIconImage src="/icons/render-logo.png" alt="Render" className={className} />;
    } else if (techLower.includes('github')) {
        return <CustomIconImage src="/icons/github-logo.png" alt="GitHub" className={className} />;
    } else if (techLower.includes('linux')) {
        return <CustomIconImage src="/icons/linux-logo.png" alt="Linux" className={className} />;
    } else if (techLower === 'c' || techLower === 'c言語' || techLower.includes('c language') || techLower.includes('c ') || techLower.includes(' c ') || (techLower.includes('c#') && !techLower.includes('csharp'))) {
        return <CustomIconImage src="/icons/c-logo.png" alt="C" className={className} />;
    } else if (techLower.includes('vercel')) {
        return <CustomIconImage src="/icons/vercel-logo.svg" alt="Vercel" className={className} />;
    }

    // Frontend Frameworks & Libraries
    else if (techLower.includes('react')) {
        color = brandColors.react;
        IconComponent = SiReact;
    } else if (techLower.includes('vue')) {
        color = brandColors.vue;
        IconComponent = SiVuedotjs;
    } else if (techLower.includes('angular')) {
        color = brandColors.angular;
        IconComponent = SiAngular;
    } else if (techLower.includes('next.js') || techLower.includes('nextjs')) {
        color = brandColors.nextjs;
        IconComponent = SiNextdotjs;
    } else if (techLower.includes('svelte')) {
        color = brandColors.svelte;
        IconComponent = SiSvelte;
    } else if (techLower.includes('tailwind')) {
        color = brandColors.tailwind;
        IconComponent = SiTailwindcss;
    }

    // Programming Languages
    else if (techLower.includes('typescript')) {
        color = brandColors.typescript;
        IconComponent = SiTypescript;
    } else if (techLower.includes('javascript')) {
        color = brandColors.javascript;
        IconComponent = SiJavascript;
    } else if (techLower.includes('go') || techLower.includes('golang')) {
        color = brandColors.go;
        IconComponent = SiGo;
    } else if (techLower.includes('rust')) {
        color = brandColors.rust;
        IconComponent = SiRust;
    } else if (techLower.includes('java')) {
        color = brandColors.java;
        IconComponent = FaJava;
    } else if (techLower.includes('csharp')) {
        color = brandColors.csharp;
        IconComponent = TbBrandCSharp;
    } else if (techLower.includes('php')) {
        color = brandColors.php;
        IconComponent = SiPhp;
    }

    // Operating Systems & Platforms
    else if (techLower.includes('ros')) {
        color = brandColors.ros;
        IconComponent = SiRos;
    }

    // Backend Frameworks
    else if (techLower.includes('node')) {
        color = brandColors.node;
        IconComponent = SiNodedotjs;
    } else if (techLower.includes('express')) {
        color = brandColors.express;
        IconComponent = SiExpress;
    } else if (techLower.includes('nest')) {
        color = brandColors.nest;
        IconComponent = SiNestjs;
    } else if (techLower.includes('fastapi')) {
        color = brandColors.fastapi;
        IconComponent = SiFastapi;
    } else if (techLower.includes('django')) {
        color = brandColors.django;
        IconComponent = SiDjango;
    } else if (techLower.includes('flask')) {
        color = brandColors.flask;
        IconComponent = SiFlask;
    } else if (techLower.includes('spring')) {
        color = brandColors.spring;
        IconComponent = SiSpring;
    } else if (techLower.includes('graphql')) {
        color = brandColors.graphql;
        IconComponent = SiGraphql;
    }

    // Databases
    else if (techLower.includes('postgres')) {
        color = brandColors.postgres;
        IconComponent = SiPostgresql;
    } else if (techLower.includes('mysql')) {
        color = brandColors.mysql;
        IconComponent = SiMysql;
    } else if (techLower.includes('sqlite')) {
        color = brandColors.sqlite;
        IconComponent = SiPostgresql;
    } else if (techLower.includes('sql')) {
        color = brandColors.mysql;
        IconComponent = SiMysql;
    } else if (techLower.includes('mongo')) {
        color = brandColors.mongodb;
        IconComponent = SiMongodb;
    } else if (techLower.includes('redis')) {
        color = brandColors.redis;
        IconComponent = SiRedis;
    } else if (techLower.includes('elasticsearch')) {
        color = brandColors.elasticsearch;
        IconComponent = SiElasticsearch;
    } else if (techLower.includes('firestore')) {
        color = brandColors.firebase;
        IconComponent = SiFirebase;
    }

    // Cloud & Infrastructure
    else if (techLower.includes('docker')) {
        color = brandColors.docker;
        IconComponent = SiDocker;
    } else if (techLower.includes('kubernetes') || techLower.includes('k8s')) {
        color = brandColors.kubernetes;
        IconComponent = SiKubernetes;
    } else if (techLower.includes('google cloud') || techLower.includes('gcp')) {
        color = brandColors.googlecloud;
        IconComponent = SiGooglecloud;
    } else if (techLower.includes('google')) {
        color = brandColors.google;
        IconComponent = FaGoogle;
    } else if (techLower.includes('firebase')) {
        color = brandColors.firebase;
        IconComponent = SiFirebase;
    } else if (techLower.includes('function') || techLower.includes('lambda')) {
        color = brandColors.aws;
        IconComponent = FaServer;
    } else if (techLower.includes('github action')) {
        color = brandColors.githubactions;
        IconComponent = SiGithubactions;
    } else if (techLower.includes('terraform')) {
        color = brandColors.terraform;
        IconComponent = SiTerraform;
    } else if (techLower.includes('git')) {
        color = brandColors.git;
        IconComponent = SiGit;
    }

    // AI & ML
    else if (techLower.includes('pytorch')) {
        color = brandColors.pytorch;
        IconComponent = SiPytorch;
    } else if (techLower.includes('tensorflow')) {
        color = brandColors.tensorflow;
        IconComponent = SiTensorflow;
    } else if (techLower.includes('keras')) {
        color = brandColors.keras;
        IconComponent = SiKeras;
    } else if (techLower.includes('scikit') || techLower.includes('sklearn')) {
        color = brandColors.scikit;
        IconComponent = SiScikitlearn;
    } else if (techLower.includes('gpt')) {
        color = brandColors.openai;
        IconComponent = SiOpenai;
    } else if (techLower.includes('ai') || techLower.includes('intelligence') || techLower.includes('ml')) {
        color = brandColors.ai;
        IconComponent = TbBrain;
    }

    // Search & Analytics
    else if (techLower.includes('search')) {
        return <CustomIconImage src="/icons/azure-ai-search-logo.png" alt="Search" className={className} />;
    } else if (techLower.includes('google analytics')) {
        color = brandColors.google;
        IconComponent = SiGoogleanalytics;
    } else if (techLower.includes('analytics')) {
        color = brandColors.analytics;
        IconComponent = SiGoogleanalytics;
    } else if (techLower.includes('grafana')) {
        color = brandColors.grafana;
        IconComponent = SiGrafana;
    } else if (techLower.includes('kibana')) {
        color = brandColors.kibana;
        IconComponent = SiKibana;
    } else if (techLower.includes('prometheus')) {
        color = brandColors.prometheus;
        IconComponent = SiPrometheus;
    }

    // Networking & Security
    else if (techLower.includes('api')) {
        color = brandColors.api;
        IconComponent = TbApi;
    } else if (techLower.includes('auth0')) {
        color = brandColors.auth0;
        IconComponent = SiAuth0;
    } else if (techLower.includes('entra')) {
        return <CustomIconImage src="/icons/microsoft-entra-id-logo.png" alt="Microsoft Entra ID" className={className} />;
    } else if (techLower.includes('jwt')) {
        color = brandColors.jwt;
        IconComponent = SiJsonwebtokens;
    } else if (techLower.includes('auth') || techLower.includes('oauth')) {
        color = brandColors.auth;
        IconComponent = TbLock;
    }

    // Document & Content
    else if (techLower.includes('pdf')) {
        color = brandColors.pdf;
        IconComponent = SiAdobeacrobatreader;
    } else if (techLower.includes('document intelligence')) {
        return <CustomIconImage src="/icons/azure-document-intelligence-logo.png" alt="Document Intelligence" className={className} />;
    } else if (techLower.includes('document')) {
        color = brandColors.document;
        IconComponent = TbFileText;
    }

    // Azure関連の技術
    else if (techLower.includes('active directory') || techLower.includes('aad') || techLower.includes('ad')) {
        return <CustomIconImage src="/icons/microsoft-entra-id-logo.png" alt="Microsoft Entra ID" className={className} />;
    } else if (techLower.includes('ai search') || (techLower.includes('azure') && techLower.includes('search'))) {
        return <CustomIconImage src="/icons/azure-ai-search-logo.png" alt="Azure AI Search" className={className} />;
    } else if (techLower.includes('app service')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M0 1.791A.791.791 0 0 1 .791 1H17.21A.791.791 0 0 1 18 1.791V6H0V1.791zm9 11.555h8.154A.847.847 0 0 0 18 12.5V8H9v5.346zM9 16.209c0 .437.354.791.791.791h7.418a.791.791 0 0 0 .791-.791V14H9v2.209zM0.791 17H7V8H0v8.209c0 .437.354.791.791.791z" />
            </svg>
        </div>;
    } else if (techLower.includes('blob') || techLower.includes('storage')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M17.5 4.5H14V3.375C14 2.063 12.938 1 11.625 1H6.375C5.063 1 4 2.063 4 3.375V4.5H.5c-.271 0-.5.229-.5.5v11c0 .271.229.5.5.5h17c.271 0 .5-.229.5-.5V5c0-.271-.229-.5-.5-.5zM5 3.375C5 2.614 5.614 2 6.375 2h5.25C12.386 2 13 2.614 13 3.375V4.5H5V3.375zM9 12c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
            </svg>
        </div>;
    } else if (techLower.includes('azure') && (techLower.includes('ml') || techLower.includes('machine'))) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M3 3h5v5H3zm7 0h5v5h-5zm-7 7h5v5H3zm7 0h5v5h-5z" />
            </svg>
        </div>;
    } else if (techLower.includes('logic app')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M17 11.5c0 .271-.229.5-.5.5H10v3.5c0 .271-.229.5-.5.5H1.5c-.271 0-.5-.229-.5-.5v-6c0-.271.229-.5.5-.5H7V5.5c0-.271.229-.5.5-.5h9c.271 0 .5.229.5.5v6z" />
            </svg>
        </div>;
    } else if (techLower.includes('key vault') || techLower.includes('keyvault')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M15 7h-1V5c0-2.757-2.243-5-5-5S4 2.243 4 5v2H3c-.551 0-1 .449-1 1v9c0 .551.449 1 1 1h12c.551 0 1-.449 1-1V8c0-.551-.449-1-1-1zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v2H6V5zm3 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
            </svg>
        </div>;
    } else if (techLower.includes('cognitive') || techLower.includes('ai service')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M9 1C4.582 1 1 4.582 1 9s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 13c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm1-5c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1z" />
            </svg>
        </div>;
    } else if (techLower.includes('event hub') || techLower.includes('eventhub')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M16 3c0-1.103-.897-2-2-2s-2 .897-2 2c0 .643.311 1.208.784 1.576l-2.991 4.182c-.317-.176-.679-.282-1.07-.282-.444 0-.85.14-1.193.366L4.656 5.58C4.863 5.214 5 4.798 5 4.351c0-1.381-1.119-2.5-2.5-2.5S0 2.97 0 4.351s1.119 2.5 2.5 2.5c.456 0 .881-.129 1.25-.341l2.876 3.263c-.182.335-.289.714-.289 1.121 0 1.32 1.073 2.391 2.394 2.391s2.394-1.07 2.394-2.391c0-.396-.104-.766-.272-1.094l3.082-4.305c.267.124.562.196.874.196 1.159 0 2.1-.942 2.1-2.101H16z" />
            </svg>
        </div>;
    } else if (techLower.includes('aks') || (techLower.includes('azure') && techLower.includes('kubernetes'))) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill="none" stroke={color} strokeWidth="1.2">
                <path d="M9 1.5l6.788 3.75v7.5L9 16.5l-6.788-3.75v-7.5L9 1.5z" />
                <path d="M9 5.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path d="M3.75 5.25L9 9l5.25-3.75" />
                <path d="M3.75 12.75L9 9l5.25 3.75" />
            </svg>
        </div>;
    } else if (techLower.includes('service bus') || techLower.includes('servicebus')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M1 3h16v3H1zm0 4.5h16v3H1zm0 4.5h16v3H1z" />
            </svg>
        </div>;
    } else if (techLower.includes('api management') || techLower.includes('apim')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M17 4h-4V1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v3H1c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4v3c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-3h4c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM6 2h6v6H6V2zm6 14H6v-6h6v6z" />
            </svg>
        </div>;
    } else if (techLower.includes('monitor') || techLower.includes('application insights')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M17 15h-2v-4h2v4zm-4 0H9V5h4v10zm-6 0H5V9h2v6zm-4 0H1v-2h2v2zm15 1.5c0 .271-.229.5-.5.5h-16c-.271 0-.5-.229-.5-.5v-1c0-.271.229-.5.5-.5h16c.271 0 .5.229.5.5v1z" />
            </svg>
        </div>;
    } else if (techLower.includes('virtual machine') || techLower.includes('vm')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M1 2.692v12.616C1 15.694 1.307 16 1.692 16h14.615c.386 0 .693-.307.693-.692V2.692C17 2.306 16.693 2 16.308 2H1.692C1.307 2 1 2.306 1 2.692zm3 1.154c0-.254.207-.461.462-.461h9.077c.254 0 .461.207.461.461v9.307c0 .255-.207.462-.461.462H4.462A.462.462 0 0 1 4 13.153V3.846z" />
            </svg>
        </div>;
    } else if (techLower.includes('sql') || techLower.includes('azure database')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M12 3H6v12h6V3zM4 7H1V5h3v2zm0 4H1V9h3v2zm0 4H1v-2h3v2zm13-8h-3V5h3v2zm0 4h-3V9h3v2zm0 4h-3v-2h3v2z" />
            </svg>
        </div>;
    } else if (techLower.includes('web app') || techLower.includes('webapp')) {
        color = brandColors.azure;
        return <div className={className} style={{ color }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%" fill={color}>
                <path d="M17 4H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 8H2V6h14v6z" />
                <path d="M6 8h4v2H6z" />
            </svg>
        </div>;
    }

    // アイコンを返す
    return <IconComponent className={className} style={{ color }} />;
} 
