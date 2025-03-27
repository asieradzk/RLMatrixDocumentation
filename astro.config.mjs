// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RLMatrix Documentation',
			defaultLocale: 'root', // Use root as default for existing English content
			locales: {
				// English as root locale - no need to move existing content
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
				'zh-tw': {
					label: '繁體中文',
					lang: 'zh-TW',
				},
				'ja': {
					label: '日本語',
					lang: 'ja',
				},
				'ko': {
					label: '한국어',
					lang: 'ko',
				},
				'vi': {
					label: 'Tiếng Việt',
					lang: 'vi',
				},
				'pl': {
					label: 'Polski',
					lang: 'pl',
				},
				'de': {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			social: {
				github: 'https://github.com/asieradzk/RL_Matrix',
			},
			logo: {
				light: './src/assets/light-logo.png',
				dark: './src/assets/dark-logo.png',
				replacesTitle: true,
			},
			sidebar: [
				{
					label: 'Beginner\'s Handbook',
					translations: {
						'zh-CN': '新手手册',
						'zh-TW': '新手手冊',
						'ja': '初心者ハンドブック',
						'ko': '초보자 핸드북',
						'vi': 'Cẩm nang cho người mới bắt đầu',
						'pl': 'Podręcznik dla początkujących',
						'de': 'Handbuch für Anfänger',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Let\'s Get Started',
							translations: {
								'zh-CN': '让我们开始吧',
								'zh-TW': '讓我們開始吧',
								'ja': '始めましょう',
								'ko': '시작해봅시다',
								'vi': 'Hãy bắt đầu',
								'pl': 'Pierwsze kroki',
								'de': 'Lass uns anfangen',
							},
							slug: 'beginner/gettingstarted'
						},
						{
							label: 'How to use dashboard?',
							translations: {
								'zh-CN': '如何使用仪表板？',
								'zh-TW': '如何使用儀表板？',
								'ja': 'ダッシュボードの使い方',
								'ko': '대시보드 사용 방법',
								'vi': 'Cách sử dụng bảng điều khiển?',
								'pl': 'Jak korzystać z panelu kontrolnego?',
								'de': 'Wie benutzt man das Dashboard?',
							},
							slug: 'beginner/howtodashboard'
						},
						{
							label: 'Continuous Actions',
							translations: {
								'zh-CN': '连续动作',
								'zh-TW': '連續動作',
								'ja': '連続的なアクション',
								'ko': '연속적인 행동',
								'vi': 'Hành động liên tục',
								'pl': 'Akcje ciągłe',
								'de': 'Kontinuierliche Aktionen',
							},
							slug: 'beginner/continuousactions'
						},
						{
							label: 'Cart-Pole Example',
							translations: {
								'zh-CN': '倒立摆示例',
								'zh-TW': '倒立擺示例',
								'ja': 'カートポールの例',
								'ko': '카트폴 예제',
								'vi': 'Ví dụ Cartpole',
								'pl': 'Przykład Cart-Pole',
								'de': 'Cart-Pole -Beispiel',
							},
							slug: 'beginner/cartpole'
						},
						{
							label: 'Cart-Pole Without Toolkit',
							translations: {
								'zh-CN': '倒立摆 - 无工具包',
								'zh-TW': '倒立擺 - 無工具包',
								'ja': 'カートポール - ツールキットなし',
								'ko': '카트폴 - 툴킷 없음',
								'vi': 'Cartpole - Không có Toolkit',
								'pl': 'Cartpole - Bez Toolkit',
								'de': 'Cartpole - Ohne Toolkit',
							},
							slug: 'beginner/cartpolenotoolkit'
						},
					],
				},
				{
					label: 'Quickstart',
					translations: {
						'zh-CN': '快速入门',
						'zh-TW': '快速入門',
						'ja': 'クイックスタート',
						'ko': '빠른 시작',
						'vi': 'Bắt đầu nhanh',
						'pl': 'Szybki start',
						'de': 'Schnellstart',
					},
					items: [
						{
							label: 'Setup',
							translations: {
								'zh-CN': '设置',
								'zh-TW': '設置',
								'ja': 'セットアップ',
								'ko': '설정',
								'vi': 'Thiết lập',
								'pl': 'Konfiguracja',
								'de': 'Einrichtung',
							},
							slug: 'quickstart/setup'
						},
					],
				},
				{
					label: 'Reference',
					translations: {
						'zh-CN': '参考',
						'zh-TW': '參考',
						'ja': 'リファレンス',
						'ko': '참조',
						'vi': 'Tham khảo',
						'pl': 'Dokumentacja',
						'de': 'Referenz',
					},
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Other',
					translations: {
						'zh-CN': '其他',
						'zh-TW': '其他',
						'ja': 'その他',
						'ko': '기타',
						'vi': 'Khác',
						'pl': 'Inne',
						'de': 'Sonstiges',
					},
					items: [
						{
							label: 'TorchSharp in Unity',
							translations: {
								'zh-CN': 'Unity中的TorchSharp',
								'zh-TW': 'Unity中的TorchSharp',
								'ja': 'UnityでのTorchSharp',
								'ko': 'Unity에서 TorchSharp 사용하기',
								'vi': 'TorchSharp trong Unity',
								'pl': 'TorchSharp w Unity',
								'de': 'TorchSharp in Unity',
							},
							slug: 'other/torchsharpunity'
						}
					]
				}
			],
		}),
	],
	vite: {
		resolve: {
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
		},
	},
});