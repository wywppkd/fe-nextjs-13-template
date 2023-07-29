import 'normalize.css';
import './globals.scss';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Script from 'next/script';

// 这是当前页的 meta 标签配置
export const metadata: Metadata = {
  title: 'Hello',
  description: 'Hello Next.js',
  keywords: 'Hello Next.js',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh-CN">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Script strategy="lazyOnload" src="/zhichi.js" />
      </body>
    </html>
  );
}
