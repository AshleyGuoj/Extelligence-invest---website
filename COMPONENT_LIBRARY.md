# 🧩 Extelligence Invest 组件库

## 📋 组件库概览

这是一个基于 Next.js 15 + TypeScript + Tailwind CSS 的组件库，专为投资公司网站设计。

## 🎯 核心组件

### 布局组件
- **Header.tsx** - 导航栏组件
- **Footer.tsx** - 页脚组件
- **HeroSection.tsx** - 英雄区域组件

### 页面组件
- **AboutHero.tsx** - 关于页面英雄区域
- **PortfolioPreview.tsx** - 投资组合预览
- **DetailedPartners.tsx** - 合作伙伴详情
- **GPIntroduction.tsx** - GP介绍

### 内容组件
- **MissionStatement.tsx** - 使命声明
- **ValuePropositions.tsx** - 价值主张
- **WhyPartner.tsx** - 为什么合作
- **EthosSection.tsx** - 企业理念
- **RegulatorySection.tsx** - 监管信息

## 🎨 设计规范

### 颜色方案
- 主色调：`blue-600` (#2563eb)
- 辅助色：`blue-700` (#1d4ed8)
- 背景色：`white` (#ffffff), `gray-900` (#111827)
- 文字色：`gray-900` (#111827), `gray-600` (#4b5563)

### 字体系统
- 品牌字体：`Pacifico` - 用于logo和品牌标题
- 正文字体：系统默认字体

### 响应式断点
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## 🚀 使用指南

### 创建新页面
```typescript
// app/new-page/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewPageHero from '@/components/NewPageHero';

export default function NewPage() {
  return (
    <>
      <Header />
      <NewPageHero />
      <Footer />
    </>
  );
}
```

### 组合现有组件
```typescript
// 使用现有组件创建新页面
import HeroSection from '@/components/HeroSection';
import ValuePropositions from '@/components/ValuePropositions';
import WhyPartner from '@/components/WhyPartner';
```

## 📝 组件开发规范

### 文件命名
- 组件文件：`PascalCase.tsx`
- 页面文件：`page.tsx`
- 样式文件：`globals.css`

### 代码规范
- 使用 TypeScript 严格模式
- 采用 Tailwind CSS 进行样式设计
- 确保响应式设计
- 添加适当的可访问性支持

### 组件结构
```typescript
'use client'; // 如需要交互

import Link from 'next/link';

export default function ComponentName() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 组件内容 */}
      </div>
    </section>
  );
}
```

## 🔧 技术栈
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v3.4+
- React 19 