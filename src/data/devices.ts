// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Phones: [
		{
			name: "iPhone 12",
			image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111876_sp830-iphone12-ios14-2x.png",
			specs: "4GB+128GB",
			description:
				"iPhone 12は、アップルが2020年10月14日に発表した5G対応スマートフォンで、A14 Bionicチップを搭載しています。",
			link: "https://support.apple.com/zh-cn/111876",
		},
		{
			name: "HUAWEI Mate 20 Pro(UD)",
			image: "https://r.huaweistatic.com/s/price_mgr/lst/image/M2T1A641N976805001387794609.png",
			specs: "8GB+256GB (LYA-AL10)",
			description:
				"HUAWEI Mate 20 Pro (UD) は、ファーウェイが2018年に発表したフラッグシップスマートフォンで、標準モデルのMate 20 Proに画面内指紋認証を搭載したアップグレードモデルです。",
			link: "https://consumer.huawei.com/cn/support/phones/mate20-pro/",
		},
		{
			name: "HUAWEI Mate 9",
			image: "https://r.huaweistatic.com/s/price_mgr/lst/image/M2T1A641N976780659724009766.png",
			specs: "6GB+128GB (MHA-AL00)",
			description:
				"HUAWEI Mate 9は、ファーウェイが2016年11月に発表したフラッグシップスマートフォンであり、卓越した性能とライカとの共同設計によるカメラシステムで知られています。",
			link: "https://consumer.huawei.com/cn/support/phones/mate9/",
		},
	],
	Pads: [
		{
			name: "iPad 5",
			image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111960_ipad_5th_generation.png",
			specs: "A1822 A9 32GB",
			description:
				"iPad 5 A1822は、アップルが2017年3月に発表した第5世代iPadのWi-Fiモデルです。",
			link: "https://support.apple.com/zh-cn/111960",
		},
	],
	Computers: [
		{
			name: "HP Pav Gaming Laptop 16-a0085TX (2F9F8PA)",
			image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07633136.png",
			specs: "i7-10750H NVIDIA®GTX1650Ti 16GB+512GB",
			description:
				"これはHPのミドルレンジゲーミングノートパソコンで、ゲーム性能と日常使用のバランスを重視したモデルです。",
			link: "https://support.hp.com/cn-zh/product/details/hp-pavilion-gaming-16-a0000-laptop-pc-series/model/38352797?sku=2F9F8PA",
		},
	],
	Camera: [
		{
			name: "Nikon 1 J1",
			image: "https://downloadcenter.nikonimglib.com/image/view/5465861f-49dc-4669-94cd-5d8f0a804e06.jpg",
			specs: "1NIKKON10-30 1NIKKOR30-110 HB-N103",
			description:
				"ニコン1 J1は、ニコンが2011年に発売した初のレンズ交換式ミラーレス一眼デジタルカメラであり、ニコン1シリーズのミラーレス製品ラインに属します。",
			link: "https://downloadcenter.nikonimglib.com/zh-cn/products/121/Nikon_1_J1.html",
		},
	],
	Printer: [
		{
			name: "HP DeskJet Ink Advantage Ultra 4925",
			image: "https://hp.widen.net/content/mffxj8y2xg/jpeg/mffxj8y2xg.jpg?w=170&h=190&dpi=72",
			specs: "HP PCL 3 GUI",
			description:
				"HP DeskJet Ink Advantage Ultra 4925は、家庭ユーザー向けのA4カラーインクジェット多機能プリンターです。",
			link: "https://support.hp.com/cn-zh/product/details/hp-deskjet-ink-advantage-ultra-4900-series/model/2101376974",
		},
	],
};
