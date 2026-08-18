// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "星の彼岸サークル",
		imgurl: "https://society.gimovo.com/favicon.ico",
		desc: "星の彼岸サークルをご紹介いたします。当サークルは略称で『星彼社』（せいひしゃ）と申します。",
		siteurl: "https://society.gimovo.com/",
		tags: ["サークル", "オフラインイベント", "ACGN"],
	},
	{
		id: 2,
		title: "星網（シンワン）",
		imgurl: "https://gimovo.com/favicon.ico",
		desc: "GIMOVO STUDIOにより制作され、管理されている大規模な総合掲示板です。",
		siteurl: "https://gimovo.com/",
		tags: [
			"フォーラム",
			"音楽ディスカッション",
			"ゲームディスカッション",
			"アートディスカッション",
		],
	},
	{
		id: 3,
		title: "大上海萌え",
		imgurl: "https://dshcacg.roka.ink/favicon/favicon.ico",
		desc: "鄭州大上海城オタク交流グループの公式サイト。鄭州エリアの二次元情報に特化した実用ツール。",
		siteurl: "https://dshcacg.roka.ink/",
		tags: ["ACGN", "オフラインイベント"],
	},
	{
		id: 4,
		title: "ビリ軽小説",
		imgurl: "https://www.linovelib.com/favicon.ico",
		desc: "シンプルなインターフェースと充実した作品ラインナップを備えたライトノベル文庫読書サイト。",
		siteurl: "https://www.linovelib.com/",
		tags: ["軽小説", "文庫"],
	},
	{
		id: 5,
		title: "ユキダイアリー",
		imgurl: "https://www.mysqil.com/favicon.ico",
		desc: "ラノベのリソース整理をメインにしたリソース系フォーラム。",
		siteurl: "https://www.mysqil.com/",
		tags: ["軽小説", "文庫"],
	},
	{
		id: 6,
		title: "NNNullptr南",
		imgurl: "https://www.xnmoe.com/assets/images/pfp.png",
		desc: "数学生によるレトロなコラージュスタイルのウェブサイト。",
		siteurl: "https://xnmoe.com",
		tags: ["ブログ", "ウェブサイトかいはつ"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
