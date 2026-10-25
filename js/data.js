(function () {
  "use strict";

  const IMAGERY = [
    { id: "mountain", name: "山川远阔", glyph: "山", desc: "山峦江川，开阔而有气象" },
    { id: "celestial", name: "日月星辰", glyph: "星", desc: "光明、恒久与仰望之意" },
    { id: "flora", name: "草木芳华", glyph: "木", desc: "林木花草的生机与芬芳" },
    { id: "water", name: "水泽清流", glyph: "水", desc: "清澈、流动与包容之心" },
    { id: "jade", name: "玉石光华", glyph: "玉", desc: "温润、珍重与光洁之美" },
    { id: "literary", name: "诗书文墨", glyph: "文", desc: "文思、书卷与清雅意趣" },
    { id: "virtue", name: "品德志向", glyph: "德", desc: "仁厚、诚信与担当之志" },
    { id: "warm", name: "温润明朗", glyph: "和", desc: "温暖、和善与明朗气质" },
    { id: "cool", name: "清冷疏朗", glyph: "清", desc: "清冽、沉静与疏朗之感" },
    { id: "strength", name: "坚定力量", glyph: "毅", desc: "果敢、坚韧与行动之力" },
    { id: "season", name: "四时风物", glyph: "时", desc: "节令、晨昏与流转之美" },
    { id: "bird", name: "灵禽瑞兽", glyph: "羽", desc: "飞鸟、瑞兽与高远之姿" }
  ];

  const SURNAME_ROWS = `
赵|zhao4
钱|qian2
孙|sun1
李|li3
周|zhou1
吴|wu2
郑|zheng4
王|wang2
冯|feng2
陈|chen2
褚|chu3
卫|wei4
蒋|jiang3
沈|shen3
韩|han2
杨|yang2
朱|zhu1
秦|qin2
尤|you2
许|xu3
何|he2
吕|lv3
施|shi1
张|zhang1
孔|kong3
曹|cao2
严|yan2
华|hua4
金|jin1
魏|wei4
陶|tao2
姜|jiang1
戚|qi1
谢|xie4
邹|zou1
喻|yu4
柏|bai3
水|shui3
窦|dou4
章|zhang1
云|yun2
苏|su1
潘|pan1
葛|ge3
奚|xi1
范|fan4
彭|peng2
郎|lang2
鲁|lu3
韦|wei2
昌|chang1
马|ma3
苗|miao2
凤|feng4
花|hua1
方|fang1
俞|yu2
任|ren4
袁|yuan2
柳|liu3
酆|feng1
鲍|bao4
班|ban1
史|shi3
唐|tang2
费|fei4
廉|lian2
岑|cen2
薛|xue1
雷|lei2
贺|he4
倪|ni2
汤|tang1
滕|teng2
殷|yin1
罗|luo2
毕|bi4
郝|hao3
邬|wu1
安|an1
常|chang2
乐|yue4
于|yu2
时|shi2
傅|fu4
皮|pi2
卞|bian4
齐|qi2
康|kang1
伍|wu3
余|yu2
元|yuan2
卜|bu3
顾|gu4
孟|meng4
平|ping2
黄|huang2
和|he2
穆|mu4
萧|xiao1
尹|yin3
姚|yao2
邵|shao4
湛|zhan4
汪|wang1
祁|qi2
毛|mao2
禹|yu3
狄|di2
米|mi3
贝|bei4
明|ming2
臧|zang1
计|ji4
伏|fu2
成|cheng2
戴|dai4
谈|tan2
宋|song4
茅|mao2
庞|pang2
熊|xiong2
纪|ji4
舒|shu1
屈|qu1
项|xiang4
祝|zhu4
董|dong3
梁|liang2
杜|du4
阮|ruan3
蓝|lan2
闵|min3
席|xi2
季|ji4
麻|ma2
强|qiang2
贾|jia3
路|lu4
娄|lou2
危|wei1
江|jiang1
童|tong2
颜|yan2
郭|guo1
梅|mei2
盛|sheng4
林|lin2
刁|diao1
钟|zhong1
徐|xu2
邱|qiu1
骆|luo4
高|gao1
夏|xia4
蔡|cai4
田|tian2
樊|fan2
胡|hu2
凌|ling2
霍|huo4
虞|yu2
万|wan4
支|zhi1
柯|ke1
管|guan3
卢|lu2
莫|mo4
房|fang2
裘|qiu2
缪|miao4
区|ou1
覃|qin2
朴|piao2
种|chong2
员|yun4
句|gou1
秘|bi4
繁|po2
眭|sui1
郇|huan2
折|she2
召|shao4
解|xie4
应|ying1
宗|zong1
丁|ding1
宣|xuan1
邓|deng4
郁|yu4
单|shan4
杭|hang2
洪|hong2
包|bao1
诸|zhu1
左|zuo3
石|shi2
崔|cui1
吉|ji2
龚|gong1
程|cheng2
邢|xing2
裴|pei2
陆|lu4
荣|rong2
翁|weng1
荀|xun2
羊|yang2
惠|hui4
甄|zhen1
曲|qu1
家|jia1
封|feng1
芮|rui4
储|chu3
靳|jin4
段|duan4
富|fu4
巫|wu1
乌|wu1
焦|jiao1
巴|ba1
牧|mu4
山|shan1
谷|gu3
车|che1
侯|hou2
秋|qiu1
仲|zhong4
伊|yi1
宫|gong1
宁|ning2
仇|qiu2
栾|luan2
甘|gan1
厉|li4
戎|rong2
祖|zu3
武|wu3
符|fu2
刘|liu2
景|jing3
詹|zhan1
束|shu4
龙|long2
叶|ye4
幸|xing4
司|si1
韶|shao2
黎|li2
薄|bo2
印|yin4
宿|su4
白|bai2
怀|huai2
蒲|pu2
邰|tai2
从|cong2
鄂|e4
索|suo3
咸|xian2
赖|lai4
卓|zhuo2
蔺|lin4
屠|tu2
蒙|meng2
池|chi2
乔|qiao2
阴|yin1
胥|xu1
能|nai4
苍|cang1
双|shuang1
闻|wen2
莘|shen1
党|dang3
翟|zhai2
谭|tan2
贡|gong4
劳|lao2
姬|ji1
申|shen1
扶|fu2
冉|ran3
宰|zai3
郦|li4
雍|yong1
桑|sang1
桂|gui4
牛|niu2
寿|shou4
通|tong1
边|bian1
燕|yan1
冀|ji4
浦|pu3
尚|shang4
农|nong2
温|wen1
别|bie2
庄|zhuang1
晏|yan4
柴|chai2
瞿|qu2
阎|yan2
连|lian2
茹|ru2
习|xi2
艾|ai4
鱼|yu2
容|rong2
向|xiang4
古|gu3
易|yi4
慎|shen4
戈|ge1
廖|liao4
庾|yu3
居|ju1
衡|heng2
步|bu4
都|du1
耿|geng3
满|man3
弘|hong2
匡|kuang1
国|guo2
文|wen2
寇|kou4
广|guang3
禄|lu4
阙|que1
东|dong1
欧|ou1
沃|wo4
利|li4
蔚|wei4
越|yue4
隆|long2
师|shi1
巩|gong3
聂|nie4
晁|chao2
勾|gou1
敖|ao2
融|rong2
冷|leng3
辛|xin1
简|jian3
饶|rao2
曾|zeng1
沙|sha1
鞠|ju1
须|xu1
丰|feng1
巢|chao2
关|guan1
查|zha1
后|hou4
荆|jing1
红|hong2
游|you2
竺|zhu2
权|quan2
盖|ge3
益|yi4
桓|huan2
公|gong1
`;

  const COMPOUND_SURNAME_ROWS = `
万俟|mo4 qi2
司马|si1 ma3
上官|shang4 guan1
欧阳|ou1 yang2
夏侯|xia4 hou2
诸葛|zhu1 ge3
闻人|wen2 ren2
东方|dong1 fang1
赫连|he4 lian2
皇甫|huang2 fu3
尉迟|yu4 chi2
公羊|gong1 yang2
澹台|tan2 tai2
公冶|gong1 ye3
宗政|zong1 zheng4
濮阳|pu2 yang2
淳于|chun2 yu2
单于|chan2 yu2
太叔|tai4 shu1
申屠|shen1 tu2
公孙|gong1 sun1
仲孙|zhong4 sun1
轩辕|xuan1 yuan2
令狐|ling4 hu2
钟离|zhong1 li2
宇文|yu3 wen2
长孙|zhang3 sun1
慕容|mu4 rong2
鲜于|xian1 yu2
闾丘|lv2 qiu1
司徒|si1 tu2
司空|si1 kong1
亓官|qi2 guan1
司寇|si1 kou4
子车|zi3 ju1
颛孙|zhuan1 sun1
端木|duan1 mu4
巫马|wu1 ma3
公西|gong1 xi1
漆雕|qi1 diao1
乐正|yue4 zheng4
壤驷|rang3 si4
公良|gong1 liang2
拓跋|tuo4 ba2
夹谷|jia1 gu3
宰父|zai3 fu3
谷梁|gu3 liang2
段干|duan4 gan1
百里|bai3 li3
东郭|dong1 guo1
南门|nan2 men2
呼延|hu1 yan2
羊舌|yang2 she2
微生|wei1 sheng1
梁丘|liang2 qiu1
左丘|zuo3 qiu1
东门|dong1 men2
西门|xi1 men2
南宫|nan2 gong1
第五|di4 wu3
`;

  const CHAR_ROWS = `
# 水泽与天光
清|qing1|水体澄澈明净；引申为清朗高洁。|water,cool,virtue
澄|cheng2|水清而静；明净通透。|water,cool
澈|che4|清澈见底；纯净通透。|water,cool
涵|han2|包容润泽；涵养深厚。|water,virtue
润|run4|滋润温润；惠泽万物。|water,warm
溪|xi1|山间细流；清澈灵动。|water,mountain
汐|xi1|晚潮；潮汐往复。|water,season
沁|qin4|渗入心脾；清润舒畅。|water,warm
澜|lan2|大波浪；壮阔而有变化。|water,strength
漪|yi1|细微波纹；柔美灵动。|water,cool
沅|yuan2|沅水；清澈长远。|water,mountain
湘|xiang1|湘水；清雅而有深情。|water,literary
洛|luo4|洛水；灵动美好。|water,literary
沐|mu4|沐浴润泽；如受春风之恩。|water,warm
露|lu4|晨露；清润晶莹。|water,cool,season
雨|yu3|雨水润物；恩泽与生机。|water,warm
雪|xue3|洁白雪花；纯净清雅。|water,cool,season
霜|shuang1|秋霜；清冽坚贞。|water,cool,season
泉|quan2|清泉；源远流长。|water,cool
汀|ting1|水边平地；清浅宁静。|water,cool
洲|zhou1|水中小洲；安住水泽。|water,mountain
渡|du4|渡水；跨越前行。|water,strength
舟|zhou1|小舟；自在远行。|water,strength
帆|fan1|船帆；乘风远航。|water,strength
航|hang2|航行；志在远方。|water,strength
江|jiang1|大江；开阔奔流。|water,mountain,strength
河|he2|河流；源远流长。|water,mountain
海|hai3|大海；辽阔包容。|water,mountain
湖|hu2|湖泊；静水深流。|water,mountain
泓|hong2|水深而广；清澈深邃。|water,cool
沛|pei4|水势充沛；丰盛有力。|water,strength
洋|yang2|海洋；宽广盛大。|water,mountain
湛|zhan4|深厚清澈；精湛专一。|water,cool
淼|miao3|水势浩渺；辽阔悠远。|water,mountain
潇|xiao1|水清深；洒脱清朗。|water,cool,literary
泠|ling2|水声清越；清凉悠远。|water,cool
源|yuan2|水源；根本绵长。|water,virtue
# 山岳与草木
岳|yue4|高山；崇高稳重。|mountain,strength,virtue
峰|feng1|山峰；志向高远。|mountain,strength
岚|lan2|山间雾气；清幽灵秀。|mountain,cool
岑|cen2|小而高的山；清峻独立。|mountain,cool
嵩|song1|高山；崇高开阔。|mountain,strength
峻|jun4|高峻；严正刚毅。|mountain,strength
岩|yan2|岩石；坚实不移。|mountain,strength
山|shan1|山岳；沉稳高远。|mountain,virtue
川|chuan1|山川；开阔流动。|mountain,water
谷|gu3|山谷；虚怀容纳。|mountain,virtue
陵|ling2|丘陵；绵延高起。|mountain
原|yuan2|原野；开阔本真。|mountain,warm
野|ye3|原野；自由舒展。|mountain,strength
岸|an4|水岸；边界与依托。|mountain,water
屿|yu3|小岛；独立安然。|mountain,water
桥|qiao2|桥梁；连接通达。|strength,water
林|lin2|树林；生机繁茂。|flora,mountain
森|sen1|森林；茂盛深远。|flora,mountain
木|mu4|树木；质朴生长。|flora,mountain
若|ruo4|如同；杜若香草。|flora,literary
苓|ling2|茯苓；草木灵秀。|flora
芝|zhi1|灵芝；美好珍贵。|flora,jade
芷|zhi3|白芷；清芬高洁。|flora,literary
芸|yun2|芸香；书香草木。|flora,literary
茉|mo4|茉莉；清雅芬芳。|flora,warm
兰|lan2|兰花；幽雅高洁。|flora,literary
蕙|hui4|蕙兰；芳美高洁。|flora,literary
萱|xuan1|萱草；忘忧温暖。|flora,warm
薇|wei1|蔷薇；柔美坚韧。|flora,warm
菲|fei1|花草繁茂；芬芳美好。|flora
芳|fang1|花草芳香；美好名声。|flora,warm
蕊|rui3|花蕊；精华初绽。|flora,warm
荷|he2|荷花；清雅不染。|flora,water
莲|lian2|莲花；清净高洁。|flora,water,virtue
菡|han4|荷花别称；清润秀美。|flora,water
荔|li4|荔枝；甜美丰盛。|flora,warm
柠|ning2|柠檬；清新明朗。|flora,warm
桐|tong2|梧桐；高洁吉祥。|flora,literary
楠|nan2|楠木；坚实珍贵。|flora,strength
柏|bai3|柏树；常青坚贞。|flora,strength,season
松|song1|松树；坚韧长青。|flora,strength
竹|zhu2|竹子；虚心有节。|flora,virtue
筠|yun2|竹皮；清雅坚韧。|flora,literary
筱|xiao3|小竹；清秀坚韧。|flora
榆|yu2|榆树；安稳质朴。|flora
槿|jin3|木槿；坚韧美丽。|flora,season
棠|tang2|海棠；明艳温和。|flora,warm
樱|ying1|樱花；明媚轻盈。|flora,season
梅|mei2|梅花；清贞傲雪。|flora,cool,season
桃|tao2|桃花；明媚生机。|flora,season
杏|xing4|杏花；春意温暖。|flora,season
梨|li2|梨花；洁白清雅。|flora,cool
禾|he2|禾苗；生长丰收。|flora,warm
穗|sui4|谷穗；丰盛收获。|flora,warm
苗|miao2|幼苗；生机成长。|flora,warm
苒|ran3|草木茂盛；时光流转。|flora,season
芊|qian1|草木茂盛；青春生机。|flora
茵|yin1|草茵；柔和生机。|flora,warm
荞|qiao2|荞麦；朴素坚韧。|flora
蔓|man4|藤蔓；绵延生长。|flora,strength
# 日月星辰
月|yue4|月亮；清辉柔美。|celestial,cool
星|xing1|星辰；光明希望。|celestial,strength
辰|chen2|日月星辰；时光流转。|celestial,season
曦|xi1|晨曦；初升阳光。|celestial,warm
晞|xi1|破晓；阳光初照。|celestial,warm
晨|chen2|清晨；希望开始。|celestial,season,warm
昕|xin1|黎明；光明初现。|celestial,warm
晗|han2|天将明；孕育希望。|celestial,warm
晏|yan4|天清无云；安宁明朗。|celestial,warm
昭|zhao1|明亮显著；彰明美德。|celestial,virtue
曜|yao4|日光照耀；光辉灿烂。|celestial,strength
映|ying4|映照；光影相生。|celestial,cool
晴|qing2|晴朗；开朗明净。|celestial,warm
旻|min2|秋天；天空清朗。|celestial,season
旭|xu4|初升太阳；朝气蓬勃。|celestial,warm
晖|hui1|日光；温暖光辉。|celestial,warm
阳|yang2|太阳；光明温暖。|celestial,warm,strength
明|ming2|光明；智慧清朗。|celestial,virtue
光|guang1|光；明亮希望。|celestial
景|jing3|日光；景象美好。|celestial,literary
曙|shu3|曙光；希望初现。|celestial,warm
暄|xuan1|温暖阳光；和煦。|celestial,warm
煦|xu4|温暖；和煦阳光。|celestial,warm
霞|xia2|云霞；绚烂柔美。|celestial,warm
霄|xiao1|云霄；高远天空。|celestial,mountain
宇|yu3|屋檐；广阔天地。|celestial,mountain
朗|lang3|明朗；开阔清亮。|celestial,warm
皓|hao4|洁白明亮；光明磊落。|celestial,cool,virtue
皎|jiao3|洁白明亮；清澈。|celestial,cool
# 玉石光华
瑶|yao2|美玉；光洁珍贵。|jade,warm
琳|lin2|美玉；美好珍贵。|jade,warm
瑾|jin3|美玉；比喻美德。|jade,virtue
瑜|yu2|美玉；美好优点。|jade,virtue
璇|xuan2|美玉；星辰之名。|jade,celestial
玥|yue4|神珠；珍奇美好。|jade,warm
珊|shan1|珊瑚；珍贵柔美。|jade,water
珀|po4|琥珀；温润光泽。|jade,warm
玉|yu4|美石；温润纯洁。|jade,virtue
琼|qiong2|美玉；美好琼华。|jade,warm
璧|bi4|圆玉；圆满珍贵。|jade,virtue
珺|jun4|美玉；品性高洁。|jade,virtue
瑄|xuan1|玉璧；庄重美好。|jade,virtue
瑞|rui4|祥瑞；吉庆美好。|jade,warm
璞|pu2|未琢之玉；纯真质朴。|jade,virtue
琢|zhuo2|雕琢；磨砺成就。|jade,strength
琅|lang2|美石；清朗明洁。|jade,cool,literary
珂|ke1|白玉；洁白温润。|jade,water
琛|chen1|珍宝；贵重美好。|jade
琦|qi2|美玉；不凡美好。|jade,virtue
璐|lu4|美玉；温润光彩。|jade,warm
玲|ling2|玉声；灵动清越。|jade,literary
珑|long2|玉声；明彻灵动。|jade,literary
# 品德志向
德|de2|道德；品行高尚。|virtue
仁|ren2|仁爱；宽厚善良。|virtue,warm
义|yi4|情义；正直担当。|virtue,strength
礼|li3|礼敬；谦和有度。|virtue,warm
智|zhi4|智慧；明辨洞察。|virtue,literary
信|xin4|诚信；坚定可靠。|virtue,strength
诚|cheng2|真诚；坦荡笃实。|virtue,warm
善|shan4|善良；美好仁厚。|virtue,warm
谦|qian1|谦虚；含而不露。|virtue
敬|jing4|敬重；恭谨有度。|virtue
谨|jin3|谨慎；认真笃实。|virtue
廉|lian2|清廉；方正自守。|virtue,cool
恒|heng2|恒久；坚定持守。|virtue,strength
毅|yi4|刚毅；坚韧果决。|virtue,strength
勇|yong3|勇敢；果敢担当。|virtue,strength
志|zhi4|志向；心之所向。|virtue,strength
向|xiang4|方向；心向光明。|virtue,warm
远|yuan3|远大；志向高远。|virtue,strength
达|da2|通达；豁达有成。|virtue,warm
弘|hong2|广大；弘扬美德。|virtue,strength
哲|zhe2|明智；思辨深远。|virtue,literary
睿|rui4|睿智；通达明敏。|virtue,literary
慧|hui4|智慧；灵秀明敏。|virtue,literary
敏|min3|敏捷；勤勉聪慧。|virtue,literary
思|si1|思考；文思深远。|virtue,literary
学|xue2|学习；求知进取。|virtue,literary
文|wen2|文采；温和有礼。|literary,virtue
武|wu3|勇武；刚健有力。|strength,virtue
安|an1|安宁；平安从容。|virtue,warm
宁|ning2|安宁；宁静坚定。|virtue,cool
和|he2|和谐；温和包容。|virtue,warm
泰|tai4|安泰；宽厚稳固。|virtue,mountain
平|ping2|平安；公平从容。|virtue,warm
康|kang1|安康；健朗丰足。|virtue,warm
健|jian4|健康；刚健有力。|virtue,strength
卓|zhuo2|卓越；超然出众。|virtue,strength
越|yue4|超越；进取飞越。|virtue,strength
超|chao1|超越；向上进取。|virtue,strength
逸|yi4|安闲；超逸不凡。|literary,cool
怀|huai2|胸怀；心怀美好。|virtue,warm
坦|tan3|坦荡；开阔从容。|virtue,warm
正|zheng4|正直；端正守正。|virtue
直|zhi2|正直；坦率坚定。|virtue,strength
端|duan1|端正；庄重有礼。|virtue
方|fang1|方正；有原则。|virtue
真|zhen1|真实；纯真坦率。|virtue,warm
承|cheng2|承担；承续美好。|virtue,strength
启|qi3|开启；启发引领。|virtue,warm
开|kai1|开启；开阔进取。|virtue,strength
立|li4|自立；坚定有成。|virtue,strength
成|cheng2|成就；圆满有成。|virtue,strength
济|ji4|济世；渡人成事。|virtue,water
泽|ze2|恩泽；润泽他人。|virtue,water,warm
益|yi4|益处；增益他人。|virtue,warm
修|xiu1|修养；修身精进。|virtue,literary
宽|kuan1|宽厚；包容大度。|virtue,warm
容|rong2|包容；从容宽和。|virtue,warm
恕|shu4|宽恕；体谅仁厚。|virtue,warm
勤|qin2|勤勉；踏实努力。|virtue,strength
俭|jian3|俭朴；节制自守。|virtue
良|liang2|良善；美好端正。|virtue,warm
淳|chun2|淳厚；质朴真诚。|virtue,warm
朴|pu3|质朴；本真自然。|virtue
# 诗书文墨
诗|shi1|诗歌；文思雅意。|literary
书|shu1|书籍；学识文墨。|literary
墨|mo4|墨香；文采书卷。|literary,cool
砚|yan4|砚台；文房清雅。|literary,cool
笔|bi3|笔；书写创造。|literary
章|zhang1|文章；条理华彩。|literary
简|jian3|书简；简洁雅正。|literary,virtue
籍|ji2|典籍；博学多闻。|literary
语|yu3|语言；温柔表达。|literary,warm
言|yan2|言语；真诚表达。|literary,virtue
辞|ci2|文辞；雅致表达。|literary
赋|fu4|赋文；才华情致。|literary
歌|ge1|歌唱；欢愉表达。|literary,warm
咏|yong3|吟咏；寄情言志。|literary
吟|yin2|吟诵；含蓄诗意。|literary,cool
韵|yun4|音韵；风致情韵。|literary
律|lv4|音律；规律自律。|literary,virtue
弦|xian2|琴弦；知音雅意。|literary
琴|qin2|琴；清雅知音。|literary,cool
瑟|se4|瑟；古雅和鸣。|literary
笛|di2|笛；清越悠扬。|literary
筝|zheng1|筝；雅音灵动。|literary
画|hua4|绘画；描绘美好。|literary
丹|dan1|朱红；赤诚华彩。|literary,warm
青|qing1|青色；青春清雅。|literary,season
素|su4|素雅；纯净本真。|literary,cool
雅|ya3|高雅；雅正不俗。|literary,virtue
儒|ru2|儒雅；温文博学。|literary,virtue
彦|yan4|才俊；有才学之人。|literary,virtue
俊|jun4|才俊；俊逸出众。|literary
才|cai2|才能；聪慧有才。|literary
博|bo2|博学；宽广深厚。|literary,virtue
渊|yuan1|深潭；学识深厚。|literary,water
识|shi2|见识；明辨通达。|literary,virtue
知|zhi1|知道；智慧明理。|literary,virtue
# 温润与清冷
温|wen1|温和；温暖柔善。|warm,virtue
暖|nuan3|温暖；和煦关怀。|warm
熙|xi1|光明兴盛；和乐安康。|warm,celestial
悦|yue4|喜悦；欢欣美好。|warm
欣|xin1|欣悦；生机欢喜。|warm,flora
怡|yi2|和悦；安适愉快。|warm
恬|tian2|恬静；安然淡泊。|warm,cool
乐|le4|快乐；和乐温暖。|warm
欢|huan1|欢喜；明朗轻快。|warm
喜|xi3|喜悦；吉庆美好。|warm
舒|shu1|舒展；从容自在。|warm
畅|chang4|畅达；通达舒畅。|warm,strength
朝|zhao1|早晨；朝气希望。|season,warm,celestial
融|rong2|融合；温暖和洽。|warm
慈|ci2|慈爱；仁厚温柔。|warm,virtue
爱|ai4|爱；温暖珍重。|warm
静|jing4|安静；沉静深远。|cool,virtue
默|mo4|静默；沉稳内敛。|cool
玄|xuan2|深奥；幽远玄妙。|cool,literary
幽|you1|幽静；深远雅致。|cool
邃|sui4|深邃；深远。|cool,literary
空|kong1|空灵；开阔无执。|cool,literary
白|bai2|洁白；纯净坦荡。|cool
疏|shu1|疏朗；清朗有致。|cool
淡|dan4|淡泊；宁静从容。|cool,virtue
泊|bo2|停泊；淡泊安定。|cool,water
冰|bing1|冰；清透坚贞。|cool,strength
# 力量与远志
锋|feng1|锋芒；锐意进取。|strength
剑|jian4|剑；刚毅果决。|strength
铎|duo2|大铃；警醒传声。|strength,literary
钧|jun1|钧衡；稳重有力。|strength,virtue
峥|zheng1|高峻；不凡。|strength,mountain
嵘|rong2|高峻；卓越。|strength,mountain
拓|tuo4|开拓；锐意进取。|strength
擎|qing2|擎举；担当。|strength
骁|xiao1|勇健；骁勇。|strength
骏|jun4|骏马；才俊。|strength,bird
驰|chi2|驰骋；进取。|strength,bird
腾|teng2|腾跃；上升。|strength,bird
鹏|peng2|大鹏；志远。|strength,bird
鸿|hong2|鸿雁；远大。|strength,bird
翔|xiang2|飞翔；自由高远。|strength,bird
飞|fei1|飞翔；轻盈进取。|strength,bird
决|jue2|决断；果敢。|strength
刚|gang1|刚强；坚定。|strength
强|qiang2|坚强；有力。|strength
坚|jian1|坚定；不屈。|strength
韧|ren4|坚韧；持久。|strength
肃|su4|肃穆；庄重。|cool,virtue
# 四时风物
春|chun1|春天；生机希望。|season,warm,flora
夏|xia4|夏天；明朗热烈。|season,warm
秋|qiu1|秋天；澄澈丰盈。|season,cool
冬|dong1|冬天；沉静蓄力。|season,cool
暮|mu4|黄昏；柔和收敛。|season,cool
晓|xiao3|拂晓；希望初现。|season,warm,celestial
夕|xi1|傍晚；温柔余晖。|season,warm
昼|zhou4|白昼；光明清朗。|season,celestial
夜|ye4|夜晚；安静深邃。|season,cool
初|chu1|初始；本真希望。|season,warm
元|yuan2|开始；根本元气。|season,virtue
新|xin1|新；生机希望。|season,warm
岁|sui4|年岁；时光丰盈。|season
年|nian2|年；长久丰收。|season,warm
季|ji4|季节；时序流转。|season
节|jie2|节气；操守节律。|season,virtue
令|ling4|时令；美好令名。|season,virtue
朔|shuo4|月初；新的开始。|season,cool
望|wang4|月圆；期望。|season,celestial
仲|zhong4|居中的；仲春仲秋。|season
孟|meng4|长；初春之意。|season
# 灵禽瑞兽
鹤|he4|仙鹤；高洁长寿。|bird,cool,virtue
鸾|luan2|鸾鸟；祥瑞美好。|bird,warm
凤|feng4|凤凰；祥瑞高贵。|bird,warm,strength
凰|huang2|凤凰；华美祥瑞。|bird,warm
燕|yan4|燕子；轻盈春意。|bird,season,warm
莺|ying1|黄莺；清亮春声。|bird,season,warm
鹭|lu4|白鹭；清雅独立。|bird,cool,water
鸥|ou1|海鸥；自由辽阔。|bird,water
雁|yan4|大雁；高远守信。|bird,season,virtue
鸽|ge1|鸽；和平安宁。|bird,warm
鹿|lu4|鹿；灵秀温和。|bird,flora
麒|qi2|麒麟；祥瑞才俊。|bird,warm
麟|lin2|麒麟；珍稀祥瑞。|bird,warm
龙|long2|龙；气象非凡。|bird,strength,celestial
骥|ji4|良马；才俊。|strength,bird
# 常用雅字
子|zi3|才子；尊称与美好。|literary,virtue
之|zhi1|的；文雅连接。|literary
亦|yi4|也；从容文雅。|literary
一|yi1|专一；纯粹初心。|virtue
心|xin1|心；真诚内在。|warm,virtue
念|nian4|思念；初心温存。|warm,literary
期|qi1|期待；希望。|virtue,warm
盼|pan4|盼望；明亮期待。|warm
遇|yu4|遇见；机缘美好。|warm,literary
逢|feng2|相逢；美好际遇。|warm
唯|wei2|唯一；专注独特。|virtue
惟|wei2|思惟；专注文雅。|literary
予|yu3|给予；温柔慷慨。|warm,virtue
攸|you1|长远；从容攸远。|literary
聿|yu4|笔；文采。|literary
慕|mu4|仰慕；向往美好。|literary,warm
忆|yi4|回忆；温存珍重。|warm,literary
遥|yao2|遥远；悠远开阔。|literary,strength
近|jin4|靠近；亲切笃实。|warm
临|lin2|登临；面对担当。|strength
归|gui1|归来；安定归属。|warm
来|lai2|到来；希望将至。|warm
往|wang3|前往；从容前行。|strength
复|fu4|回归；生生不息。|season
故|gu4|旧；念旧情深。|warm
旧|jiu4|旧；温故知新。|literary
然|ran2|自然；坦然自若。|virtue,warm
与|yu3|和；亲切同行。|warm
同|tong2|同心；和合。|warm,virtue
合|he2|合；和合圆满。|virtue,warm
宜|yi2|适宜；温和合宜。|warm,virtue
可|ke3|可；可亲可爱。|warm
如|ru2|如；温润如意。|warm
意|yi4|心意；意境。|literary,warm
愿|yuan4|愿望；美好期许。|warm,virtue
梦|meng4|梦；浪漫想象。|literary
寻|xun2|寻找；探索。|literary,strength
觅|mi4|寻觅；执着寻找。|literary
途|tu2|路途；人生旅程。|strength
路|lu4|道路；前行方向。|strength
行|xing2|行走；践行。|virtue,strength
征|zheng1|远行；开拓。|strength
照|zhao4|照耀；光明。|celestial,warm
见|jian4|看见；见识。|literary,virtue
观|guan1|观察；格局见识。|literary,virtue
听|ting1|聆听；敏于感知。|literary,warm
问|wen4|询问；求知。|literary,virtue
解|jie3|理解；通达。|literary
寄|ji4|寄托；情意。|literary,warm
托|tuo1|托付；信任。|virtue,warm
依|yi1|依靠；温柔亲近。|warm
伴|ban4|陪伴；温暖同行。|warm
随|sui2|随；从容自然。|warm
从|cong2|从容；跟随本心。|virtue
由|you2|自由；由来本真。|virtue
自|zi4|自；自在自主。|virtue
在|zai4|在场；踏实存在。|virtue
存|cun2|长存；心怀。|virtue
有|you3|拥有；充实。|virtue
常|chang2|恒常；长久稳定。|virtue
久|jiu3|长久；坚韧。|virtue,strength
长|chang2|长久；绵延生长。|virtue,season
永|yong3|永远；长久。|virtue,strength
延|yan2|延展；绵长。|strength
续|xu4|延续；承续。|strength
继|ji4|继承；接续。|strength,virtue
绍|shao4|继承；绍续美好。|virtue
传|chuan2|传承；延续。|strength,literary
家|jia1|家；温暖归属。|warm,virtue
国|guo2|国家；担当格局。|virtue,strength
民|min2|民众；仁厚。|virtue
众|zhong4|众人；和合。|virtue,warm
群|qun2|群；出众合群。|virtue,warm
谐|xie2|和谐；和合美好。|virtue,warm
定|ding4|安定；笃定。|strength,virtue
稳|wen3|稳妥；沉着。|strength,virtue
衡|heng2|平衡；公正。|virtue
均|jun1|均衡；公平。|virtue
圆|yuan2|圆满；周全温暖。|warm,virtue
满|man3|满；丰盈圆满。|warm
全|quan2|全；周全圆满。|virtue,warm
周|zhou1|周全；周到细密。|virtue
密|mi4|细密；周密。|virtue
细|xi4|细致；温柔用心。|warm
微|wei1|细微；敏锐细腻。|warm
显|xian3|显明；光明显著。|celestial,strength
彰|zhang1|彰显；显扬美好。|virtue,literary
焕|huan4|焕发；光彩新生。|celestial,warm
灿|can4|灿烂；明亮。|warm,celestial
华|hua2|华彩；繁盛美好。|warm,literary
英|ying1|英华；才智出众。|virtue,flora
秀|xiu4|秀美；清雅出众。|flora,literary
丽|li4|美丽；明丽美好。|warm
佳|jia1|佳；美好。|warm,virtue
嘉|jia1|嘉美；赞许美好。|warm,virtue
美|mei3|美；美好愉悦。|warm,virtue
妙|miao4|美妙；灵巧。|literary
奇|qi2|奇特；不凡。|strength
鲜|xian1|新鲜；明亮生机。|warm,flora
灵|ling2|灵动；聪慧有灵。|literary,warm
活|huo2|活力；生机。|warm,strength
生|sheng1|生长；生命不息。|flora,strength
深|shen1|深；深厚。|cool,literary
高|gao1|高；高远。|mountain,strength
亮|liang4|明亮；清朗。|celestial,warm
辉|hui1|光辉；照耀。|celestial,warm
煌|huang2|辉煌；盛大光明。|celestial,strength
耀|yao4|耀眼；光耀。|strength,celestial
伦|lun2|人伦；条理出众。|virtue
冠|guan4|冠；出众。|strength
首|shou3|首；领先。|strength
始|shi3|开始；初心。|season,warm
大|da4|大；开阔。|strength
广|guang3|广；宽广。|virtue,warm
宏|hong2|宏大；开阔。|strength
伟|wei3|伟大；卓异。|strength
壮|zhuang4|雄壮；力量。|strength
雄|xiong2|雄健；气魄。|strength
豪|hao2|豪迈；气度。|strength,warm
杰|jie2|杰出；才俊。|virtue,strength
艺|yi4|艺术；才艺。|literary
术|shu4|术；专精。|literary
能|neng2|能力；才干。|strength,virtue
力|li4|力量；行动。|strength
量|liang4|气量；胸怀。|virtue,warm
情|qing2|情感；温厚。|warm
胸|xiong1|胸怀；气度。|virtue
襟|jin1|襟怀；开阔。|virtue
度|du4|气度；从容。|virtue
格|ge2|品格；格调。|virtue,literary
品|pin3|品格；品味。|virtue
操|cao1|操守；坚持。|virtue
守|shou3|守；坚守。|virtue,strength
# === GENERATED COMMON CHARACTERS START ===
阿|a1|阿托的简称|mountain|low
啊|a1|表示惊叹或赞颂|warm|low
呵|a1|喝道，喝令行人让路||false
啊|a2|表示惊叹或赞颂||false
呵|a2|喝道，喝令行人让路||false
啊|a3|表示惊叹或赞颂||false
呵|a3|喝道，喝令行人让路||false
啊|a4|表示惊叹或赞颂||false
呵|a4|喝道，喝令行人让路||false
哎|ai1|表示满意或赞叹|warm|low
哀|ai1|声音凄清尖锐|warm|low
唉|ai1|假借为诶。表示叹息|warm|low
埃|ai1|埃及的略称|mountain|low
挨|ai1|从后推击；打|virtue|low
挨|ai2|从后推击；打||false
癌|ai2|发生于上皮组织的恶性肿瘤|virtue|low
矮|ai3|低，不高|strength|low
蔼|ai3|树木生长繁茂|flora|low
唉|ai4|假借为诶。表示叹息||false
艾|ai4|艾草；艾蒿。|flora
隘|ai4|心胸狭窄|mountain|low
碍|ai4|遮蔽；掩盖|mountain|low
氨|an1|氮和氢的化合物nh3|season|low
庵|an1|圆顶草屋|virtue|low
鞍|an1|马鞍|strength|low
厂|an1|同庵||false
广|an1|四周无壁的大屋||false
俺|an3|∶我|virtue|low
按|an4|控制；抑止|virtue|low
案|an4|无靠背的坐具|flora|low
暗|an4|与明相对|celestial|low
黯|an4|昏暗，暗淡无光|virtue|low
肮|ang1|咽喉|celestial|low
昂|ang2|高，升高|celestial
仰|ang2|跟俯相对||false
凹|ao1|周围高，中间低|virtue|low
熬|ao1|把蔬菜等加水并放在文火上煮||false
熬|ao2|把蔬菜等加水并放在文火上煮|warm|low
嚣|ao2|害臊；害羞||false
袄|ao3|皮衣之类的御寒衣服|virtue|low
拗|ao3|固执||false
拗|ao4|固执||false
傲|ao4|急躁|virtue|low
奥|ao4|深奥；精深。|literary
懊|ao4|懊悔；悔恨。|virtue|low
澳|ao4|港湾，海边弯曲可以停船的地方|water|low
八|ba1|七加一的和|virtue|low
巴|ba1|古代传说中的一种大蛇|virtue|low
叭|ba1|将食物扒入口中|warm|low
扒|ba1|刨，挖|virtue|low
芭|ba1|古书上说的一种香草|flora|low
疤|ba1|器物上像疤的痕迹|virtue|low
捌|ba1|用手分开|virtue|low
吧|ba1|像东西爆烈或撞击的声音|warm|low
拔|ba2|盐；提拔|virtue|low
跋|ba2|扭转|virtue|low
把|ba3|把守；看守。站岗放哨|virtue|low
靶|ba3|靶子|strength|low
把|ba4|把守；看守。站岗放哨||false
坝|ba4|截河拦水的堤堰。堤坝|mountain,water|low
爸|ba4|∶父亲。常叠用|warm|low
罢|ba4|遣返，遣归|virtue|low
耙|ba4|用耙碎土平地||false
霸|ba4|假借为伯。指古代诸侯联盟的盟主|water|low
掰|bai1|用手把东西分开或折断|virtue|low
拜|bai2|拜谢。行拜礼表示感谢||false
百|bai3|十个十。一百，100|virtue|low
摆|bai3|排列；放置|virtue|low
伯|bai3|原指春秋时诸侯的首领||false
败|bai4|损害；损伤|jade|low
拜|bai4|拜谢。行拜礼表示感谢|virtue|low
扳|ban1|拉；引；拨动|virtue|low
班|ban1|分开；离群|jade|low
般|ban1|种，类|strength|low
颁|ban1|又假借为攽。颁发；分赏|literary|low
斑|ban1|行列；位次|literary|low
搬|ban1|套用，移用|virtue|low
板|ban3|同版。木板|flora|low
版|ban3|供建筑或其他使用的木板◇作板|virtue|low
办|ban4|做，干|strength|low
半|ban4|部分的，不完全的|virtue|low
扮|ban4|打扮，装扮|virtue|low
拌|ban4|搅和；调匀|virtue|low
绊|ban4|喻阴谋、圈套|literary|low
瓣|ban4|瓜果的分瓤|flora|low
邦|bang1|国家；邦交。|virtue
帮|bang1|物体两侧或周围的部分|virtue|low
梆|bang1|敲打木头的声音|flora|low
彭|bang1|古国名||false
绑|bang3|绑票|literary|low
榜|bang3|木片|flora|low
膀|bang3|臂膀。指肩和肘之间的手臂|celestial|low
榜|bang4|木片||false
蚌|bang4|美珠|bird|low
傍|bang4|依附，依靠|virtue|low
棒|bang4|击球物|flora|low
谤|bang4|诽谤|literary|low
磅|bang4|称东西的器件||false
镑|bang4|英国、埃及、爱尔兰等的本位货币|flora,jade|low
旁|bang4|别的，其他的||false
包|bao1|用纸、布等裹东西|virtue|low
苞|bao1|苞片，花未开时包着花朵的变态叶|flora|low
胞|bao1|同胞|celestial|low
褒|bao1|高大；广大|virtue|low
剥|bao1|∶去掉物的外皮或壳|strength|low
炮|bao1|焚烧，燃烧||false
雹|bao2|冰雹|water|low
薄|bao2|养蚕的工具；帘子|flora|low
宝|bao3|珍贵的东西|jade
饱|bao3|与饥相对|warm|low
保|bao3|保护；护养。|virtue
堡|bao3|指堡垒|mountain|low
报|bao4|报答，报酬|virtue|low
抱|bao4|捧着|virtue|low
豹|bao4|豹子。哺乳动物，像虎而较小，身上有很多斑点或花纹。性|virtue|low
鲍|bao4|盐腌的鱼|water|low
暴|bao4|显露；暴露|celestial|low
爆|bao4|燃着|warm|low
刨|bao4|刨子||false
瀑|bao4|急雨，暴风雨|water|low
曝|bao4|暴露||false
卑|bei1|地位低微|virtue|low
杯|bei1|也称耳杯|flora|low
悲|bei1|悲哀|virtue|low
碑|bei1|竖石|mountain|low
背|bei1|事物的后面或反面||false
北|bei3|方位名。与南相对|virtue|low
北|bei4|方位名。与南相对||false
贝|bei4|贝壳|jade
狈|bei4|传说中的一种兽|virtue|low
备|bei4|完备；齐备|virtue|low
背|bei4|事物的后面或反面|celestial|low
倍|bei4|背弃；背叛◇作背|virtue|low
悖|bei4|掩蔽|virtue|low
被|bei4|表面|virtue|low
惫|bei4|衰竭；危殆|virtue|low
辈|bei4|世；辈分|strength|low
奔|ben1|逃跑，逃亡|virtue|low
本|ben3|根本；本源。|virtue
奔|ben4|逃跑，逃亡||false
笨|ben4|竹子的内层。通称竹黄|flora|low
夯|ben4|用重物把地或其他粒状材料砸密实||false
崩|beng1|崩裂；倒塌|mountain|low
绷|beng1|缠束；包扎|literary|low
绷|beng3|缠束；包扎||false
蚌|beng4|美珠||false
绷|beng4|缠束；包扎||false
泵|beng4|音译字。吸入和排除流体的机械。能提升、输送或压缩流体|water|low
蹦|beng4|双脚并拢跳。泛指跳跃；乱动|virtue|low
逼|bi1|逼迫，即紧紧催促|virtue|low
鼻|bi2|吸兼嗅觉的器官|virtue|low
匕|bi3|匕首|virtue|low
比|bi3|连接，接近|virtue|low
彼|bi3|那，与此相对|virtue|low
鄙|bi3|采邑；小邑|mountain|low
币|bi4|车马皮帛玉器等礼物|virtue|low
必|bi4|标杆；标准|virtue|low
毕|bi4|用毕猎取|virtue|low
闭|bi4|闭合，合拢|virtue|low
庇|bi4|保护|virtue|low
毙|bi4|垮台，失败|virtue|low
痹|bi4|气郁闷|virtue|low
弊|bi4|同毙。仆；向前倒下|virtue|low
碧|bi4|青绿色；碧玉。|jade,cool
蔽|bi4|遮住，遮掩|flora|low
壁|bi4|军营；军营的围墙|mountain|low
避|bi4|离去|virtue|low
臂|bi4|胳臂|celestial|low
佛|bi4|违背||false
拂|bi4|违背；逆||false
泌|bi4|水名||false
秘|bi4|不可测知；不公开||false
辟|bi4|君主||false
边|bian1|边境|virtue|low
编|bian1|交织，编结|literary|low
蝙|bian1|蝙蝠|bird|low
鞭|bian1|鞭子|strength|low
贬|bian3|降级|jade|low
扁|bian3|∶把东西掖在腰间|virtue|low
匾|bian3|匾额|virtue|low
变|bian4|变通|virtue|low
便|bian4|便利，方便|virtue|low
遍|bian4|普遍|virtue|low
辨|bian4|口头上争论|virtue|low
辩|bian4|分别，辨别。通辨|virtue|low
辫|bian4|交织，编结。也作编|virtue|low
标|biao1|末梢；事物的枝节或表面。与本相对|flora|low
彪|biao1|虎；彪炳。|strength
表|biao3|外面|virtue|low
憋|bie1|凶恶|virtue|low
鳖|bie1|甲鱼，一种爬行动物，俗称团鱼|water|low
瘪|bie1|皱缩的，不饱满的||false
别|bie2|分离；分开；分出|strength|low
瘪|bie3|皱缩的，不饱满的|virtue|low
别|bie4|分离；分开；分出||false
宾|bin1|古州名|virtue|low
彬|bin1|文质彬彬。|literary
斌|bin1|文质兼备。|literary
滨|bin1|湖、河、海的水边陆地|water
缤|bin1|紊乱|literary|low
濒|bin1|靠近；临近|water|low
份|bin1|整体里的一部分||false
频|bin1|接近；临近||false
鬓|bin4|鬓发|virtue|low
兵|bing1|士兵的群体，即整个军队|virtue|low
并|bing1|合并||false
屏|bing1|退避；隐退||false
丙|bing3|鱼尾|virtue|low
秉|bing3|手持；秉持。|virtue
柄|bing3|权力|flora|low
饼|bing3|形状像饼的东西|warm|low
禀|bing3|赋予；给与|virtue|low
屏|bing3|退避；隐退||false
并|bing4|合并|virtue|low
病|bing4|生理上或心理上不正常的状态|virtue|low
般|bo1|种，类||false
拨|bo1|拨动东西；分开；拨开|virtue|low
波|bo1|涌流的水；流水|water
玻|bo1|玻璃|jade|low
剥|bo1|∶去掉物的外皮或壳||false
菠|bo1|菠菜|flora|low
播|bo1|散布开去，散布得开而远；传布|virtue|low
柏|bo2|柏科柏木属植物的通称||false
薄|bo2|养蚕的工具；帘子||false
伯|bo2|原指春秋时诸侯的首领|season,virtue|low
驳|bo2|驳杂；庞杂|strength|low
勃|bo2|兴起；旺盛|strength
脖|bo2|脖胦，即肚脐|celestial|low
舶|bo2|舶来品|strength|low
渤|bo2|渤海；浩渺。|water
搏|bo2|捕捉|virtue|low
膊|bo2|切成块的肉|celestial|low
簿|bo2|文书||false
佛|bo2|违背||false
跛|bo3|瘸腿的人|virtue|low
簸|bo3|摇动；颠动||false
柏|bo4|柏科柏木属植物的通称||false
薄|bo4|养蚕的工具；帘子||false
簸|bo4|摇动；颠动|flora|low
堡|bu3|指堡垒||false
卜|bu3|选择|virtue|low
补|bu3|修补；整修破旧的东西|virtue|low
哺|bu3|吃食|warm|low
捕|bu3|追寻，搜寻|virtue|low
不|bu4|两者中既非这个也非那个|virtue|low
布|bu4|棉、麻、苎、葛等织物的通称|virtue|low
步|bu4|行走；步伐。|virtue
怖|bu4|恐吓|virtue|low
部|bu4|中央行政官署|mountain|low
埠|bu4|大城市|mountain|low
簿|bu4|文书|flora,literary|low
擦|ca1|揩，拭|virtue|low
拆|ca1|∶排泄||false
猜|cai1|揣测；推测|virtue|low
材|cai2|原料、材料|flora
财|cai2|财富；财产|jade
裁|cai2|裁定；判断|virtue|low
采|cai3|采摘；采集。|flora
彩|cai3|彩色；光彩。|warm
睬|cai3|理睬，答理|virtue|low
踩|cai3|踩踏；脚底接触地面或物体|virtue|low
采|cai4|采摘；采集。||false
菜|cai4|一切菜肴|flora|low
蔡|cai4|占卜用的大龟|flora|low
参|can1|加入|virtue|low
餐|can1|吞食|virtue|low
残|can2|毁坏；破坏|virtue|low
蚕|can2|蚕事。养蚕的工作|bird|low
惭|can2|羞愧|virtue|low
惨|can3|悲痛；伤心|virtue|low
掺|can4|搓；涂抹||false
仓|cang1|储藏物资的建筑物|virtue|low
沧|cang1|沧茫；青碧。|water,cool
苍|cang1|苍翠；青碧。|flora,cool
舱|cang1|船或飞机中分隔开来载人或装东西的部分|strength|low
藏|cang2|收藏；蕴藏。|jade
糙|cao1|脱壳未舂的谷，或米舂得不白的|flora|low
曹|cao2|古代指诉讼的原告和被告。即两曹|virtue|low
槽|cao2|表面上比较大比较长的凹痕|flora|low
草|cao3|草本植物的总称|flora
册|ce4|古时称编串好的许多竹简|literary|low
侧|ce4|亦用作谦词|virtue|low
厕|ce4|假借为侧。旁边|virtue|low
测|ce4|度量；测量|water|low
策|ce4|策略；计谋。|literary
栅|ce4|营寨||false
参|cen1|加入||false
层|ceng2|构成整个事物的一个层次|virtue|low
曾|ceng2|已经|virtue|low
蹭|ceng4|因擦过某物而沾上|virtue|low
叉|cha1|刺；扎取|virtue|low
插|cha1|参与，加入|virtue|low
差|cha1|比较而出现的区别||false
喳|cha1|下级对上级的应诺声||false
叉|cha2|刺；扎取||false
查|cha2|同楂|flora|low
茬|cha2|栽培植物收割后余留的残株|flora|low
茶|cha2|茶树|flora|low
察|cha2|明察，知晓|virtue|low
叉|cha3|刺；扎取||false
叉|cha4|刺；扎取||false
岔|cha4|山脉或道路分岐的地方|mountain|low
差|cha4|比较而出现的区别|virtue|low
刹|cha4|指佛寺||false
差|chai1|比较而出现的区别||false
拆|chai1|∶排泄|virtue|low
柴|chai2|木柴，小木散材，也指作燃料的木柴|flora|low
豺|chai2|又叫豺狗|virtue|low
差|chai4|比较而出现的区别||false
掺|chan1|搓；涂抹|virtue|low
搀|chan1|混杂；搀和|virtue|low
禅|chan2|表示与佛教有关的事物|virtue|low
馋|chan2|贪图；贪羡|warm|low
缠|chan2|纠缠；搅扰|literary|low
蝉|chan2|蝉；知了。|bird
单|chan2|单纯；单一。||false
崭|chan2|∶好||false
产|chan3|出产|virtue|low
铲|chan3|铲子|jade|low
阐|chan3|开辟；开拓|virtue|low
颤|chan4|颤抖，发抖|literary|low
昌|chang1|兴旺发达，与亡相对|celestial
猖|chang1|猖狂的人|virtue|low
倡|chang1|中国古代表演歌舞杂戏的艺人||false
肠|chang2|肠子或肠子制成的食品|celestial|low
尝|chang2|尝试|virtue|low
偿|chang2|报答；酬报|virtue|low
场|chang2|祭坛旁的平地||false
裳|chang2|古人穿的遮蔽下体的衣裙|virtue|low
倘|chang2|表示假设。同黨、儻||false
厂|chang3|同庵|virtue|low
场|chang3|祭坛旁的平地|mountain|low
敞|chang3|张开，敞开|virtue|low
淌|chang3|迅速流动||false
倡|chang4|中国古代表演歌舞杂戏的艺人|virtue|low
唱|chang4|倡导；发起◇作倡|warm|low
抄|chao1|掠取，抢掠|virtue|low
钞|chao1|掠取；抢掠◇作抄|jade|low
吵|chao1|吵嘴，吵仗||false
绰|chao1|姿态柔美||false
剿|chao1|抄袭||false
巢|chao2|又泛指其他动 物的巢穴|virtue|low
朝|chao2|早晨省亲，子、媳向父母、公婆请安||false
嘲|chao2|唱，按音律发声|literary,warm|low
潮|chao2|潮汐；潮流。|water
吵|chao3|吵嘴，吵仗|warm|low
炒|chao3|一种烹调方法|warm|low
车|che1|特指战车，兵车|strength|low
扯|che3|拉，牵引|virtue|low
尺|che3|量词。长度单位||false
彻|che4|拆毁；拆下|virtue|low
撤|che4|除去|virtue|low
尘|chen2|尘土；尘世。|cool
臣|chen2|国君所统属的众民|virtue|low
忱|chen2|信任|virtue
沉|chen2|埋没|water|low
陈|chen2|古国名|mountain|low
沈|chen2|埋没||false
衬|chen4|又称衬衫|virtue|low
趁|chen4|乘便|virtue|low
称|chen4|测定重量||false
称|cheng1|测定重量|flora|low
撑|cheng1|用篙抵住河底使船行进|virtue|low
铛|cheng1|锒铛。锁系囚人的铁索|jade|low
净|cheng1|洁净；干净。||false
抢|cheng1|撞；碰；触||false
呈|cheng2|呈现；显露。|warm
城|cheng2|城池；城墙。|mountain,strength
乘|cheng2|骑乘；乘坐。|virtue
惩|cheng2|处罚|virtue|low
程|cheng2|路程；规程。|virtue
橙|cheng2|常绿乔木|flora|low
盛|cheng2|放在祭器里的谷物||false
逞|cheng3|快意，实现，使称心|virtue|low
称|cheng4|测定重量||false
秤|cheng4|用秤量物之轻重|flora|low
吃|chi1|吃东西。与喝形成对照|warm|low
痴|chi1|疯癫，癫狂|virtue|low
弛|chi2|松弛，放松|strength|low
池|chi2|水塘|water
迟|chi2|缓慢；迟延。|virtue
持|chi2|秉持；坚持。|virtue
匙|chi2|今叫调羹|virtue|low
尺|chi3|量词。长度单位|virtue|low
侈|chi3|奢侈，追求过分的享受|virtue|low
齿|chi3|排列如齿状的物品|virtue|low
耻|chi3|羞愧|virtue|low
斥|chi4|责备。又称斥詈，斥遣|strength|low
赤|chi4|赤诚；红色。|warm,virtue
翅|chi4|鱼类的鳍|bird|low
充|chong1|充实；充足。|virtue
冲|chong1|冲和；直上。|cool
涌|chong1|涌泉；涌动。||false
虫|chong2|古代泛指所有的动物|bird|low
崇|chong2|高；高大|mountain
种|chong2|幼稚||false
重|chong2|重复，重叠||false
宠|chong3|宠爱|virtue
冲|chong4|冲和；直上。||false
抽|chou1|拔出，把夹在中间的东西取出|virtue|low
仇|chou2|怨恨|virtue|low
绸|chou2|捆缚|literary|low
畴|chou2|特指种麻的田|mountain|low
愁|chou2|使受苦|virtue|low
稠|chou2|繁密|flora|low
筹|chou2|壶矢。古代投壶用的签子，形如箭筩|flora|low
酬|chou2|酬答，报答|virtue|low
丑|chou3|可恶|virtue|low
瞅|chou3|∶看；望|virtue|low
臭|chou4|气味之总名|virtue|low
出|chu1|出入的出。出去，出来，与入相对|virtue|low
除|chu2|一般建筑的台阶|mountain|low
厨|chu2|主持烹饪的人|virtue|low
锄|chu2|用锄头整理田地，除草|jade|low
雏|chu2|幼禽|bird|low
橱|chu2|橱柜；陈设。|flora|low
助|chu2|帮助；相助。||false
础|chu3|事物的基底或根基|mountain|low
储|chu3|夸大，欺诳|virtue|low
楚|chu3|落叶灌木|flora
处|chu3|居住；生活|virtue|low
处|chu4|居住；生活||false
畜|chu4|饲养|mountain|low
触|chu4|用角抵人或物|virtue|low
矗|chu4|高耸|virtue|low
揣|chuai1|藏入；塞进|virtue|low
揣|chuai3|藏入；塞进||false
揣|chuai4|藏入；塞进||false
穿|chuan1|挖掘；开凿|virtue|low
船|chuan2|空间交通工具|strength|low
喘|chuan3|轻声说话|warm|low
串|chuan4|勾结|virtue|low
疮|chuang1|痈、瘫、疽、疖等的总称|virtue|low
窗|chuang1|也作囱|virtue|low
创|chuang1|创造；开创。||false
床|chuang2|床形物|virtue|low
幢|chuang2|张挂在舟、车上的帷幔||false
闯|chuang3|闯荡；敢闯。|strength
创|chuang4|创造；开创。|strength
吹|chui1|刮风|warm|low
炊|chui1|烧火|warm|low
垂|chui2|垂范；垂柳。|virtue
捶|chui2|拳打|virtue|low
锤|chui2|槌子，俗称榔头|jade|low
椎|chui2|捶击的工具◇亦为兵器||false
椿|chun1|即香椿|flora
纯|chun2|纯真；纯洁。|virtue
唇|chun2|边缘|warm|low
醇|chun2|淳朴；质朴|virtue|low
蠢|chun3|骚动，动乱|bird|low
戳|chuo1|用指头指点|strength|low
绰|chuo4|姿态柔美||false
差|ci1|比较而出现的区别||false
刺|ci1|讽刺||false
词|ci2|诗文中的词语|literary|low
祠|ci2|供奉鬼神、祖先或先贤的庙堂|virtue|low
瓷|ci2|∶眼珠不动|virtue|low
磁|ci2|也为石名，即磁石，俗称吸铁石|mountain|low
雌|ci2|母鸟，能产卵的鸟|bird|low
兹|ci2|草席||false
此|ci3|这；这个|virtue|low
次|ci4|次序；次第。|virtue
伺|ci4|观察||false
刺|ci4|讽刺|strength|low
赐|ci4|给予；上给予下|jade
匆|cong1|急促地|virtue|low
囱|cong1|烟囱；排烟的通道。|virtue|low
葱|cong1|有圆筒状中空叶的植物之一|flora|low
聪|cong1|聪明，有才智|literary
丛|cong2|许多事物凑在一起|virtue|low
凑|cou4|聚集|cool|low
粗|cu1|粗粮|flora|low
促|cu4|小，狭窄|virtue|low
醋|cu4|酸味|virtue|low
簇|cu4|丛集；聚集|flora|low
趋|cu4|步，行走||false
趣|cu4|催促；督促||false
卒|cu4|步兵||false
窜|cuan4|奔逃|virtue|low
篡|cuan4|特指臣子夺取君位|flora|low
崔|cui1|蹉跎|mountain|low
催|cui1|叫人赶紧做某事家里来信，|virtue|low
摧|cui1|摧毁，破坏，毁坏|virtue|low
衰|cui1|古代用粗麻布制成的毛边丧服||false
脆|cui4|鲜嫩爽口的|celestial|low
悴|cui4|憔悴；枯萎|virtue|low
粹|cui4|精华|flora|low
翠|cui4|鸟名，翠鸟。又专指雌性的翠鸟|bird
村|cun1|村庄；乡村。|flora
蹲|cun2|虚坐。屈两膝如坐，臀部不着地||false
寸|cun4|∶寸口的简称|virtue|low
搓|cuo1|把东西放在手心运转|virtue|low
撮|cuo1|用三指取物；抓取|virtue|low
挫|cuo4|失败|virtue|low
措|cuo4|处理，安排|virtue|low
错|cuo4|互相磨擦|jade|low
搭|da1|披；挂；戴|virtue|low
答|da1|回话；应对||false
答|da2|回话；应对|flora|low
打|da2|攻打；进攻||false
瘩|da2|瘩背|virtue|low
打|da3|攻打；进攻|virtue|low
呆|dai1|痴；傻|warm|low
待|dai1|暂时停留||false
歹|dai3|坏。与好相对|virtue|low
逮|dai3|逮捕，抓人|virtue|low
大|dai4|年辈较长或排行第一的||false
逮|dai4|逮捕，抓人||false
代|dai4|把活计接到家里做|virtue|low
带|dai4|狭长形条状物|virtue|low
待|dai4|暂时停留|virtue|low
怠|dai4|疲倦；倦怠|virtue|low
贷|dai4|借出钱财|jade|low
袋|dai4|计量用口袋装的东西|virtue|low
戴|dai4|古国名。故址在今河南省民权县东|strength|low
毒|dai4|毒物；毒纯洁||false
单|dan1|单纯；单一。|virtue
担|dan1|扁低挂在两头的东西|virtue|low
耽|dan1|沉溺|virtue|low
担|dan3|扁低挂在两头的东西||false
胆|dan3|通称胆或苦胆|celestial|low
担|dan4|扁低挂在两头的东西||false
旦|dan4|早晨|celestial
但|dan4|表示范围，相当于只，仅|virtue|low
诞|dan4|虚妄；荒唐|literary|low
弹|dan4|形状像弹丸的东西|strength|low
蛋|dan4|禽类或龟、蛇等所产的卵|bird|low
氮|dan4|一种普通的非金属元素|season|low
石|dan4|石刻，碑碣||false
当|dang1|对等；相当于|virtue|low
铛|dang1|锒铛。锁系囚人的铁索||false
挡|dang3|遮蔽|virtue|low
党|dang3|不鲜明|virtue|low
当|dang4|对等；相当于||false
挡|dang4|遮蔽||false
荡|dang4|动；摇动；震动|flora|low
档|dang4|存放案卷用的带格子的橱|flora|low
刀|dao1|用来斩、割、切、削、砍、铡的工具|strength|low
叨|dao1|话多|warm|low
叨|dao2|话多||false
导|dao3|教导|virtue|low
岛|dao3|字省作岛|mountain|low
捣|dao3|冲击；攻打|virtue|low
祷|dao3|祈祷，祈神求福|virtue|low
蹈|dao3|顿足踏地|virtue|low
倒|dao3|上下、前后颠倒|virtue|low
到|dao4|颠倒。通倒|strength|low
倒|dao4|上下、前后颠倒||false
悼|dao4|悲痛；哀伤|virtue|low
盗|dao4|抢掠劫持|virtue|low
道|dao4|道德，道义、正义|virtue
稻|dao4|水稻|flora|low
得|de2|找到|virtue|low
得|dei3|找到||false
灯|deng1|彩灯。特指元宵节挂的彩灯|warm|low
登|deng1|登高；攀登。|strength
蹬|deng1|踩；踏|virtue|low
等|deng3|等级；辈分|flora|low
澄|deng4|清澈，透明||false
蹬|deng4|踩；踏||false
邓|deng4|古国名|mountain|low
凳|deng4|凳子|virtue|low
瞪|deng4|睁大眼睛直视|virtue|low
的|di1|用在定语后|virtue|low
低|di1|质量差|virtue|low
堤|di1|河堤；堤岸。|mountain,water
滴|di1|水点；点点下落的液体|water|low
提|di1|紧紧拿着；执持||false
的|di2|用在定语后||false
迪|di2|开导|virtue
敌|di2|抵抗；抵挡|virtue|low
涤|di2|除，清除|water
嘀|di2|小声说；私下说||false
底|di3|隐藏|virtue|low
抵|di3|抵赖，拒不承认事实|virtue|low
提|di3|紧紧拿着；执持||false
地|di4|用在状语和中心词之间|mountain|low
的|di4|用在定语后||false
弟|di4|弟弟|strength|low
帝|di4|君主，皇帝|virtue|low
递|di4|传；传送|virtue|low
第|di4|有时也用于数字前表示次序|flora|low
缔|di4|郁结|literary|low
蒂|di4|花蒂；根蒂。|flora
掂|dian1|用手托着上下颤动来估量东西的重量|virtue|low
滇|dian1|滇池|water|low
颠|dian1|物体的顶部|literary|low
巅|dian1|顶部|mountain|low
典|dian3|典籍；典范。|literary
点|dian3|点缀；点明。|warm
碘|dian3|一种非金属一价和多价元素|mountain|low
电|dian4|物理学名词|mountain,literary|low
佃|dian4|佃户；耕作。|flora
甸|dian4|古时都城的郭外称郊，郊外称甸|mountain|low
店|dian4|旅舍；客店|virtue|low
垫|dian4|用别的东西衬在下面|mountain|low
玷|dian4|过失；缺点|jade|low
惦|dian4|惦记，挂念|virtue|low
淀|dian4|蓝靛。一种蓝色染料|water|low
奠|dian4|特指初死时的备供品敬礼|virtue,season|low
殿|dian4|殿堂；高大的房屋。|literary
刁|diao1|古代行军用具|strength|low
叼|diao1|用嘴衔住|warm|low
雕|diao1|同碉。碉堡|bird|low
吊|diao4|慰问|warm|low
钓|diao4|诱取|jade|low
调|diao4|盐或提拔官吏|literary|low
掉|diao4|弄，卖弄|virtue|low
爹|die1|∶父亲|warm|low
跌|die1|失足。喻指犯过失|virtue|low
迭|die2|停止|virtue|low
谍|die2|间谍|literary|low
叠|die2|振作|virtue|low
碟|die2|瓜子|mountain|low
蝶|die2|蝴蝶。|bird
丁|ding1|丁为钉的古字|virtue|low
叮|ding1|虫类用针形口器刺人|warm|low
盯|ding1|紧跟着不放松|virtue|low
钉|ding1|钉子||false
顶|ding3|物的最上部；前部|literary
鼎|ding3|鼎盛；宝鼎。|virtue
钉|ding4|钉子|jade|low
订|ding4|改正，修正|literary|low
丢|diu1|丢失；遗失|virtue|low
东|dong1|东方；朝阳。|celestial,season
董|dong3|监督；督察|flora|low
懂|dong3|明白，了解|virtue|low
动|dong4|摇动，震动，移动。与静相对|strength|low
冻|dong4|受冻；感到寒冷|cool|low
栋|dong4|栋梁；栋宇。|strength
洞|dong4|洞天；幽深。|water
都|dou1|周时各国把国都叫国|mountain|low
兜|dou1|兜鍪，即胄，古代头盔名|virtue|low
抖|dou3|振动；甩动|virtue|low
陡|dou3|顿时；突然|mountain|low
蚪|dou3|蝌蚪；幼小生灵。|bird|low
斗|dou3|盛酒器||false
斗|dou4|盛酒器|virtue|low
豆|dou4|形似高足盘|flora|low
逗|dou4|赶，趁|virtue|low
痘|dou4|指痘苗。特指牛痘苗|virtue|low
读|dou4|籀书，抽释理解书的意义||false
都|du1|周时各国把国都叫国||false
督|du1|责备；责罚|virtue|low
毒|du2|毒物；毒纯洁|warm|low
独|du2|独特|virtue|low
读|du2|籀书，抽释理解书的意义|literary|low
顿|du2|停顿；顿悟。||false
堵|du3|古代墙壁的面积单位|mountain|low
赌|du3|比胜负；争输赢|jade|low
睹|du3|察看|virtue|low
肚|du3|人和动物的胃||false
妒|du4|忌妒别人|warm|low
杜|du4|堵塞|flora|low
肚|du4|人和动物的胃|celestial|low
镀|du4|用一层贵重金属覆盖表面|jade|low
短|duan3|寿命短促|strength|low
段|duan4|分段；截断|virtue|low
断|duan4|断开；断绝|strength|low
缎|duan4|一种质地厚密而有光泽的丝织物|literary|low
锻|duan4|锤击|jade|low
堆|dui1|土墩，沙墩或水中聚集的礁石|mountain|low
追|dui1|追求；追取||false
队|dui4|坠落|mountain|low
对|dui4|两者相对；面对|virtue|low
兑|dui4|通锐。锋利|strength|low
敦|dui4|厚道。诚朴宽厚；厚重；笃实||false
吨|dun1|质量和重量的单位|warm|low
敦|dun1|厚道。诚朴宽厚；厚重；笃实|virtue
墩|dun1|土墩；墩厚。|mountain
蹲|dun1|虚坐。屈两膝如坐，臀部不着地|virtue|low
盹|dun3|闭目小睡|virtue|low
囤|dun4|用木栅围成|virtue|low
盾|dun4|盾牌；后盾。|strength
钝|dun4|∶大于90岸小?80暗?|jade|low
顿|dun4|停顿；顿悟。|virtue
多|duo1|超过正确的或需要的数目；过多|celestial|low
咄|duo1|呵叱声|warm|low
哆|duo1|敲击声|warm|low
度|duo2|法制；法度||false
夺|duo2|强取|virtue|low
踱|duo2|慢步行走|virtue|low
朵|duo3|树木枝叶花实下垂貌|flora
垛|duo3|堆，成堆的东西|mountain|low
躲|duo3|藏身|virtue|low
垛|duo4|堆，成堆的东西||false
堕|duo4|脱落|mountain|low
舵|duo4|掌舵的人|strength|low
惰|duo4|懈怠；懒惰|virtue|low
跺|duo4|顿足，用脚猛力踏地|strength|low
隋|duo4|城墙倒塌||false
驮|duo4|挨；受||false
阿|e1|阿托的简称||false
讹|e2|差错|literary|low
俄|e2|高耸|virtue|low
娥|e2|嫦娥；娥眉。|warm
峨|e2|高大|mountain|low
鹅|e2|鸭科中一明确亚科的鸟|bird|low
蛾|e2|蛾眉的简称|bird|low
额|e2|规定的数目|literary|low
哦|e2|吟咏||false
恶|e3|通乌，疑问。哪，何，怎么路||false
扼|e4|扼守；据守|virtue|low
恶|e4|通乌，疑问。哪，何，怎么路|virtue|low
饿|e4|与饱相对|warm|low
鄂|e4|古地名|mountain
愕|e4|愕，惊也。--《广雅·释诂一》|virtue|low
遏|e4|阻止|virtue|low
噩|e4|惊愕|warm|low
鳄|e4|鳄鱼|water|low
恩|en1|恩惠；恩泽。|virtue,warm
儿|er2|儿女，父母所生的子女，第一代后裔|virtue|low
而|er2|从古沿用下来的连词|virtue|low
尔|er3|尔雅；卓尔。|literary
耳|er3|听觉，听力|virtue|low
饵|er3|钓鱼用的鱼食|warm|low
二|er4|一加一的和|virtue|low
贰|er4|二的大写|jade|low
发|fa1|出发；上路|virtue|low
乏|fa2|古代射礼唱靶者用以避箭的器具|virtue|low
伐|fa2|砍伐|virtue|low
罚|fa2|对有过失、错误的处分|virtue|low
阀|fa2|功劳|virtue|low
筏|fa2|筏子|flora|low
法|fa3|法令；规章；制度|water
发|fa4|出发；上路||false
番|fan1|更替，轮值|mountain|low
翻|fan1|翻转；翻腾|bird|low
凡|fan2|平凡；不凡。|virtue
矾|fan2|各种金属的硫酸盐|mountain|low
烦|fan2|烦躁，烦闷|warm|low
繁|fan2|繁华；繁盛。|warm
反|fan3|通翻。覆，倾倒|virtue|low
返|fan3|归还|virtue|low
犯|fan4|触犯，冒犯|virtue|low
泛|fan4|漫溢，大水漫流|water|low
饭|fan4|给人喂饭或喂牲口|warm|low
范|fan4|假借为筪。法则|flora|low
贩|fan4|古国名|jade|low
坊|fang1|街坊；牌坊。|virtue
坊|fang2|街坊；牌坊。||false
防|fang2|防范；国防。|strength
妨|fang2|阻碍|warm|low
房|fang2|古代堂中间叫正室，两旁的叫房|virtue|low
肪|fang2|脂肪|celestial|low
仿|fang3|仿效；模仿。也作彷、倣|virtue
访|fang3|访问、拜访|literary|low
纺|fang3|捆绑，悬挂；束缚|literary|low
放|fang4|舍弃；废置|virtue|low
妃|fei1|妃子；天妃。|warm
非|fei1|责怪；非难；反对|virtue|low
啡|fei1|见咖啡、吗啡|warm|low
肥|fei2|肥沃|celestial|low
菲|fei3|花草的香气很浓的--常叠用||false
匪|fei3|五色相错|virtue|low
诽|fei3|毁谤|literary|low
吠|fei4|动物鸣叫|warm|low
废|fei4|废弃；废除|virtue|low
沸|fei4|水波翻涌的样子|water|low
肺|fei4|人和高等动物的呼吸器官之一|celestial|low
费|fei4|耗损|jade|low
分|fen1|分开，分成，分出，与合相对|strength|low
吩|fen1|吩咐|warm|low
纷|fen1|旗上的飘带|literary|low
芬|fen1|芬芳。|flora
氛|fen1|雾气；云气|season|low
坟|fen2|土堆|mountain|low
焚|fen2|用火烧山林宿草|warm|low
粉|fen3|妆饰用的白色粉末，亦有染成红色者|flora|low
分|fen4|分开，分成，分出，与合相对||false
份|fen4|整体里的一部分|virtue|low
奋|fen4|奋发；奋勇。|strength
忿|fen4|用同奋。奋力|virtue|low
愤|fen4|充盈，旺盛|virtue|low
粪|fen4|施肥|flora|low
丰|feng1|丰盛；富足。|warm,strength
风|feng1|风度；风采。|literary
枫|feng1|枫树；枫叶。|flora
封|feng1|封闭；书信。|virtue
疯|feng1|瘫痪|virtue|low
蜂|feng1|特指蜜蜂|bird|low
冯|feng2|大，盛|cool|low
缝|feng2|补合|literary|low
风|feng3|风度；风采。||false
讽|feng3|婉言微辞或指责|literary|low
奉|feng4|奉献；奉行。|virtue
缝|feng4|补合||false
佛|fo2|违背|virtue|low
不|fou3|两者中既非这个也非那个||false
否|fou3|闭塞；阻隔不通|warm|low
夫|fu1|女子的正式配偶|virtue|low
肤|fu1|树木、果实的表皮|celestial|low
孵|fu1|鸟类伏在卵上|virtue|low
敷|fu1|铺展；铺开|virtue|low
夫|fu2|女子的正式配偶||false
弗|fu2|违拗；拂逆|strength|low
伏|fu2|伏藏；伏羲。|virtue
佛|fu2|违背||false
扶|fu2|扶持；护持|virtue
芙|fu2|芙蓉|flora
拂|fu2|违背；逆|virtue|low
服|fu2|服从，顺服|celestial|low
俘|fu2|俘虏|virtue|low
浮|fu2|游水推进身体|water|low
符|fu2|符信；符号。|literary
袱|fu2|妇女的包头巾|virtue|low
幅|fu2|古制一幅为二尺二寸|virtue|low
福|fu2|福气；幸福。|warm,virtue
辐|fu2|聚集如辐|strength|low
蝠|fu2|蝙蝠|bird|low
抚|fu3|用手按着|virtue|low
甫|fu3|刚刚；开始。|season
府|fu3|府邸；官府。|virtue
斧|fu3|白与黑相间的斧形图案|strength|low
俯|fu3|弯腰屈身|virtue|low
辅|fu3|辅佐；辅助。|virtue
腐|fu3|拍；击|virtue|low
父|fu3|对老年男子的尊称||false
脯|fu3|干燥脱水的瓜果||false
服|fu4|服从，顺服||false
父|fu4|对老年男子的尊称|warm|low
付|fu4|支付|virtue|low
妇|fu4|妇女，常指成年女子|warm|low
负|fu4|背负。以背驮物。引申为负担|jade|low
附|fu4|沾着，附着|mountain|low
咐|fu4|吩咐嘱托；安排|warm|low
赴|fu4|前往；去；到；至，到达|virtue|low
副|fu4|相称，符合|strength|low
傅|fu4|辅佐；师傅。|virtue
富|fu4|富足；富裕。|virtue
缚|fu4|约束；限制|literary|low
腹|fu4|中央部分|celestial|low
覆|fu4|覆盖；遮蔽|virtue|low
胳|ga1|骨头||false
夹|ga1|栽插在物体的两边||false
咖|ga1|见gā||false
轧|ga2|排挤，倾轧||false
尬|ga4|尴尬处境困难，不易处理|virtue|low
该|gai1|包容；包括|literary|low
改|gai3|改正；纠正|virtue
丐|gai4|乞求，乞讨|virtue|low
钙|gai4|一种银白色的相当柔软的碱土族二价金属元素|jade,cool|low
盖|gai4|雨伞|virtue|low
溉|gai4|洗，洗涤|water|low
概|gai4|节操，风度|flora,virtue|low
芥|gai4|小草||false
甘|gan1|甘甜；美好。|warm
杆|gan1|杆子，器物上像棍子的细长部分||false
肝|gan1|人的内心|celestial|low
柑|gan1|柑橘；果树。|flora|low
竿|gan1|竹子的主干|flora|low
尴|gan1|处境窘迫，难办这事搞得很|virtue|low
干|gan1|⒒ 。 ⒓无水份或少水份的，跟湿相对||false
乾|gan1|乾坤；乾阳。||false
杆|gan3|杆子，器物上像棍子的细长部分|flora|low
秆|gan3|禾茎|flora|low
赶|gan3|追赶，从后面追上|virtue|low
敢|gan3|有胆量做某种事情|virtue
感|gan3|思想感情受外界事物的影响而激动|virtue|low
橄|gan3|橄榄树，我国特产。常绿乔木，羽状复叶，开白花。果实长|flora|low
干|gan4|⒒ 。 ⒓无水份或少水份的，跟湿相对|virtue|low
赣|gan4|赣江；赣地。|water
冈|gang1|山脊，山岭|mountain
纲|gang1|纲领；纲纪。|literary
肛|gang1|肛管和肛门的总称|celestial|low
缸|gang1|大口而常无颈的陶器|virtue|low
钢|gang1|钢铁；坚强。|strength
岗|gang1|同岡。山脊，山岭||false
杠|gang1|抬重物的粗棍。亦指门闩||false
扛|gang1|用两手举重物||false
亢|gang1|刚强||false
岗|gang3|同岡。山脊，山岭|mountain
港|gang3|港口；港湾。|water
钢|gang4|钢铁；坚强。||false
杠|gang4|抬重物的粗棍。亦指门闩|flora|low
羔|gao1|幼小的生物|warm|low
膏|gao1|肥肉|celestial|low
糕|gao1|用米粉、面粉等为原料制成的一种食品|flora|low
搞|gao3|进行；开展|virtue|low
稿|gao3|禾秆，谷类植物的茎杆。也作穢|flora|low
镐|gao3|镐京；镐地。|jade
膏|gao4|肥肉||false
告|gao4|把话说给别人听，告诉|warm|low
戈|ge1|戈矛；刚健。|strength
疙|ge1|皮肤或肌肉上起的硬块腿上起了个|virtue|low
哥|ge1|咏，唱，奏乐|warm|low
胳|ge1|骨头|celestial|low
割|ge1|用刀截断|strength|low
搁|ge1|停顿；耽搁|virtue|low
格|ge1|格子||false
胳|ge2|骨头||false
搁|ge2|停顿；耽搁||false
阁|ge2|楼阁；亭阁。|literary
革|ge2|皮革；变革。|strength
葛|ge2|多年生草本||false
隔|ge2|间隔；距离|mountain|low
蛤|ge2|蛤蟆，青蛙和蟾蜍的统称||false
盖|ge3|雨伞||false
葛|ge3|多年生草本|flora
个|ge3|通用个体量词，表示单独的人或物||false
各|ge3|每个，各自||false
合|ge3|会聚，聚合||false
个|ge4|通用个体量词，表示单独的人或物|virtue|low
各|ge4|每个，各自|warm|low
给|gei3|使对方得到或遭受到|literary|low
根|gen1|根本；根基。|flora
跟|gen1|追随于后|virtue|low
庚|geng1|天干第七位。|celestial
耕|geng1|耕作；耕耘。|flora
羹|geng1|调和五味的汤|virtue|low
更|geng1|改，改正||false
埂|geng3|长条形的突出地面的地方|mountain|low
耿|geng3|明亮，光明|celestial
梗|geng3|刺榆的古名|flora|low
颈|geng3|脖子||false
更|geng4|改，改正|virtue|low
工|gong1|古代特指乐官或乐人|virtue|low
弓|gong1|形状或作用像弓的器具|strength|low
公|gong1|共，共同|virtue|low
功|gong1|功业；功勋。|strength
攻|gong1|指责|virtue|low
供|gong1|提供某种条件||false
宫|gong1|宫室；宫廷。|literary
恭|gong1|恭敬；谦逊。|virtue
蚣|gong1|见蜈蚣|bird|low
躬|gong1|生命|virtue|low
共|gong1|共同；一共。||false
红|gong1|后也指各种红色||false
巩|gong3|使坚固|virtue|low
汞|gong3|金属化学元素|water|low
拱|gong3|围绕，环绕|virtue|low
供|gong4|提供某种条件|virtue|low
共|gong4|共同；一共。|virtue
贡|gong4|示告；告诉|jade|low
勾|gou1|本作句。弯曲|virtue|low
沟|gou1|水道|water|low
钩|gou1|形状弯曲|jade|low
拘|gou1|束缚；限制||false
句|gou1|勾销||false
狗|gou3|古代特指未长毛的小狗崽|virtue|low
苟|gou3|随便，轻率|flora|low
勾|gou4|本作句。弯曲||false
构|gou4|构成，造成|flora|low
购|gou4|原指用重金收买，后泛指买|jade|low
垢|gou4|耻辱，因不名誉而产生的羞耻感|mountain|low
够|gou4|数量上满足；足够|celestial|low
估|gu1|商人|virtue|low
咕|gu1|刹车、低声说话等的声音|warm|low
姑|gu1|父亲的姐妹|warm|low
孤|gu1|古代王侯的自称|virtue|low
沽|gu1|天津市的别称|water|low
菇|gu1|蘑菇|flora|low
辜|gu1|灾难，祸害|virtue|low
骨|gu1|人的躯干||false
古|gu3|古雅；古道。|virtue
股|gu3|事物的分支或一部分|celestial|low
骨|gu3|人的躯干|virtue|low
鼓|gu3|钟磬被敲击之处|virtue|low
贾|gu3|坐卖。泛指卖||false
估|gu4|商人||false
固|gu4|坚固；稳固。|strength
顾|gu4|观看，瞧|literary|low
雇|gu4|出钱让人给自己做事|bird|low
瓜|gua1|属于双子叶植物瓜科|flora|low
刮|gua1|扫拂；刷抹|strength|low
括|gua1|用绳或带子结扎，捆束||false
寡|gua3|少；缺少|virtue|low
卦|gua4|预见|virtue|low
挂|gua4|悬挂；下垂|virtue|low
褂|gua4|中式的单上衣|virtue|low
乖|guai1|分离；离别|virtue|low
拐|guai3|诱骗。把妇女或儿童骗带走|virtue|low
怪|guai4|妖精，鬼物|virtue|low
关|guan1|关口；关心。|virtue
官|guan1|官府|virtue|low
冠|guan1|戴；戴帽子||false
棺|guan1|棺木；灵柩。|flora|low
馆|guan3|房舍华丽的|warm|low
管|guan3|中国古代的一种管乐器|flora|low
观|guan4|观察，审察||false
贯|guan4|贯通；贯穿。|virtue
惯|guan4|纵容；迁就|virtue|low
灌|guan4|丛生的树木|water|low
罐|guan4|煤矿装煤用的斗车|virtue|low
逛|guang4|外出散步；闲游；游览|virtue|low
龟|gui1|即金龟，亦称乌龟|bird|low
规|gui1|法度、准则|virtue|low
闺|gui1|内室|virtue|low
硅|gui1|一种四价的非金属元素|mountain|low
瑰|gui1|珍贵；珍奇|jade|low
轨|gui3|车轮的痕迹，车辙|strength|low
诡|gui3|违反，自相矛盾|literary|low
癸|gui3|古代兵器|virtue|low
鬼|gui3|万物的精怪|virtue|low
柜|gui4|小匣|flora|low
贵|gui4|高贵；富贵。|jade
桂|gui4|桂花；桂树。|flora
跪|gui4|指足|virtue|low
滚|gun3|连续不断，急速翻腾的样子|water|low
棍|gun4|能够转动，用以缠绕线、弦的旋纽|flora|low
郭|guo1|内城叫城，外城叫郭|mountain|low
锅|guo1|形状像锅的东西|jade|low
过|guo1|超出，胜过||false
涡|guo1|水流旋转形成中间低洼的地方||false
果|guo3|果实；结果。|flora
裹|guo3|携带|virtue|low
过|guo4|超出，胜过|virtue|low
哈|ha1|姓|warm|low
蛤|ha2|蛤蟆，青蛙和蟾蜍的统称|bird|low
虾|ha2|动物名||false
哈|ha3|姓||false
哈|ha4|姓||false
咳|hai1|哎呀，唉，呜呼||false
还|hai2|回头；回顾|virtue|low
孩|hai2|同咳|virtue|low
亥|hai4|地支的末一位|virtue|low
骇|hai4|惊骇；惊诧；惊动|strength|low
害|hai4|妨碍，妨害|virtue|low
酣|han1|浓盛；盛美|virtue|low
憨|han1|娇痴|virtue|low
含|han2|容纳；包含|warm
函|han2|函书；函匣。|literary
寒|han2|寒冷；清寒。|cool
韩|han2|井上的木栏|strength|low
汗|han2|出汗；使出汗||false
罕|han3|稀少；罕见。|virtue
喊|han3|大声呼叫|warm|low
汉|han4|汉水；汉族。|water
汗|han4|出汗；使出汗|water|low
旱|han4|非水田的|celestial|low
悍|han4|凶狠，蛮横|virtue|low
捍|han4|古代射者左臂所著的皮制袖套|virtue|low
焊|han4|焊接|warm|low
憾|han4|怨恨|virtue|low
撼|han4|摇动；动摇|virtue|low
翰|han4|翰墨；文采。|literary
夯|hang1|用重物把地或其他粒状材料砸密实|virtue|low
杭|hang2|杭州；航渡。|water
亢|hang2|刚强||false
吭|hang2|鸟的喉咙，泛指喉咙；咽喉||false
行|hang2|直排为行，横排为列||false
巷|hang4|矿坑里的通道||false
行|hang4|直排为行，横排为列||false
毫|hao2|毛笔的头部；毛笔|virtue|low
嚎|hao2|大声哭喊。同号|warm|low
号|hao2|扬言有||false
好|hao3|指女子貌美|warm|low
镐|hao4|镐京；镐地。||false
好|hao4|指女子貌美||false
号|hao4|扬言有|warm|low
浩|hao4|广远；盛大|water
耗|hao4|消息；音信|virtue|low
呵|he1|喝道，喝令行人让路|warm|low
喝|he1|用以表示惊讶。同嗬|warm|low
何|he1|什么||false
苛|he1|疥疮||false
盖|he2|雨伞||false
何|he2|什么|virtue|low
核|he2|原子核的简称|flora|low
盒|he2|底盖相合的盛器|virtue|low
喝|he4|用以表示惊讶。同嗬||false
何|he4|什么||false
和|he4|不分胜负||false
荷|he4|用肩扛或担；背负||false
贺|he4|庆贺；祝贺。|warm
褐|he4|指粗布或粗布衣|virtue|low
赫|he4|显著；盛大。|warm
吓|he4|用以表示不满||false
黑|hei1|昏暗无光|virtue|low
嘿|hei1|咳嗽|warm|low
痕|hen2|痕迹|virtue|low
很|hen3|争斗；争讼|virtue|low
狠|hen3|凶狠；凶残|virtue|low
恨|hen4|遗憾；后悔|virtue|low
哼|heng1|訇的俗字|warm|low
横|heng2|横向；纵横。|strength
行|heng2|直排为行，横排为列||false
横|heng4|横向；纵横。||false
轰|hong1|雷鸣、炮击、爆破等的隆隆声|strength|low
哄|hong1|呵叱||false
烘|hong1|烤干；烤热|warm|low
红|hong2|红色；喜庆。|warm
洪|hong2|洪水；洪大。|water
虹|hong2|彩虹。|celestial
哄|hong3|呵叱|warm|low
哄|hong4|呵叱||false
侯|hou2|以兽皮或画上兽形的为之||false
喉|hou2|喉头|warm|low
猴|hou2|猴子。即弥猴|virtue|low
吼|hou3|人因愤怒或情绪激动而大声呼喊|warm|low
侯|hou4|以兽皮或画上兽形的为之|virtue|low
后|hou4|帝王的妻子|warm|low
厚|hou4|厚德；仁厚。|virtue
候|hou4|观测|virtue|low
乎|hu1|呼的古字◆唤；召唤|virtue|low
呼|hu1|大声叫喊|warm|low
忽|hu1|好像|virtue|low
糊|hu1|用浆糊或用别的粘剂粘合||false
戏|hu1|将军的旌旗||false
和|hu2|不分胜负||false
核|hu2|原子核的简称||false
弧|hu2|弓|strength|low
狐|hu2|喻坏人，小人|virtue|low
胡|hu2|鸟兽颔下的垂肉或皮囊|celestial|low
壶|hu2|古代滴水计时的器具|virtue|low
葫|hu2|∶蒜或大蒜的别名|flora|low
糊|hu2|用浆糊或用别的粘剂粘合|flora|low
蝴|hu2|蝴蝶|bird|low
虎|hu3|亚洲产的一种大型食肉类哺乳动物|virtue|low
唬|hu3|虚张声势、夸大事实来吓人|warm|low
许|hu3|同意，赞同||false
糊|hu4|用浆糊或用别的粘剂粘合||false
互|hu4|差错|virtue|low
户|hu4|住户，人家。一家称一户|virtue|low
护|hu4|爱护|virtue|low
沪|hu4|上海；沪上。|water
花|hua1|花朵；花样。|flora
哗|hua1|人声嘈杂，喧闹||false
华|hua1|通花，花朵||false
化|hua1|教化||false
哗|hua2|人声嘈杂，喧闹|warm|low
滑|hua2|流利；婉转|water|low
猾|hua2|扰乱；侵犯|virtue|low
划|hua2|以桨拨水使船前进|strength|low
豁|hua2|空缺；露出缺口；缺损||false
华|hua4|通花，花朵||false
化|hua4|教化|virtue
划|hua4|以桨拨水使船前进||false
话|hua4|话题|literary|low
桦|hua4|桦树。|flora
徊|huai2|回环。也作回、迴|virtue|low
淮|huai2|淮河。|water
槐|huai2|槐树；荫庇祥瑞。|flora,warm
坏|huai4|破坏；毁坏|mountain|low
还|huan2|回头；回顾||false
环|huan2|环佩；玉环。|jade
缓|huan3|慢；不急迫。与急相对|literary|low
幻|huan4|惑乱|virtue|low
宦|huan4|学习官吏的事务|virtue|low
唤|huan4|呼唤使来|warm|low
换|huan4|变易，改变|virtue
涣|huan4|帝王发布号令|water|low
患|huan4|憎恶；讨厌；厌烦|virtue|low
痪|huan4|瘫痪|virtue|low
荒|huang1|年成不好；凶年；歉收|flora|low
慌|huang1|散亡|virtue|low
皇|huang2|美好|virtue|low
黄|huang2|黄色|virtue|low
惶|huang2|恐惧，惊慌|virtue|low
蝗|huang2|蝗虫|bird|low
簧|huang2|弹簧圈|flora|low
恍|huang3|昏瞶不明的样子|virtue|low
晃|huang3|明亮；晃耀。||false
谎|huang3|梦中讲的话|literary|low
幌|huang3|窗帘、帷幔|virtue|low
晃|huang4|明亮；晃耀。|celestial
堕|hui1|脱落||false
灰|hui1|灰尘|warm|low
恢|hui1|宽广；恢复。|strength
挥|hui1|舞动；摇动|virtue|low
徽|hui1|徽章；标志。|literary
回|hui2|环绕； 包围|virtue|low
悔|hui3|过失；灾祸|virtue|low
毁|hui3|毁坏；破坏|virtue|low
卉|hui4|草木|flora
汇|hui4|汇集；交汇。|water
会|hui4|晤见|virtue|low
讳|hui4|隐；隐蔽|literary|low
绘|hui4|绘画|literary
诲|hui4|明示，诱使|literary|low
贿|hui4|贿赂的财物|jade|low
晦|hui4|夜；晚|celestial|low
秽|hui4|弄脏，弄污|flora|low
惠|hui4|恩惠；仁爱。|virtue
溃|hui4|冲破||false
昏|hun1|昏暗；无光|celestial|low
荤|hun1|指鸡、鸭、鱼、肉等食物。与素相对|flora|low
婚|hun1|妻之家|warm|low
浑|hun2|河名|water|low
魂|hun2|精神，神志|virtue|low
混|hun2|浑浊，水多泥多杂质而不清澈||false
棍|hun4|能够转动，用以缠绕线、弦的旋纽||false
混|hun4|浑浊，水多泥多杂质而不清澈|water|low
豁|huo1|空缺；露出缺口；缺损|mountain|low
和|huo2|不分胜负||false
火|huo3|火焰；光明。|warm
伙|huo3|合伙；由若干人结成的一群|virtue|low
和|huo4|不分胜负||false
豁|huo4|空缺；露出缺口；缺损||false
或|huo4|用作虚词|strength|low
货|huo4|财物，金钱珠玉布帛的总称|jade|low
获|huo4|俘获|flora|low
祸|huo4|灾荒之处|virtue|low
惑|huo4|迷惑，使…辨不清|virtue|low
霍|huo4|疾速|water|low
讥|ji1|讽刺；讥笑|literary|low
击|ji1|攻击；攻打|virtue|low
叽|ji1|稍微吃一点|warm|low
饥|ji1|∶通飢。吃不饱，饿|warm|low
圾|ji1|见垃圾|mountain|low
机|ji1|木名。桤木树|flora|low
肌|ji1|皮肤|celestial|low
鸡|ji1|鸟纲雉科家禽|bird|low
唧|ji1|突然有力的喷射出|warm|low
积|ji1|累积；堆叠。|strength
基|ji1|根基；基础。|mountain,strength
缉|ji1|搜捕|literary|low
畸|ji1|数的零头；余数|mountain|low
箕|ji1|指纹形状之一种|flora|low
稽|ji1|囤积|flora|low
激|ji1|激扬；激荡。|water,strength
几|ji1|苗头；预兆||false
期|ji1|会，会合||false
其|ji1|期限||false
奇|ji1|单数，偶之对||false
革|ji2|皮革；变革。||false
及|ji2|至，达到|virtue|low
吉|ji2|善；美|warm
级|ji2|等级，特指官阶爵位的品级|literary|low
即|ji2|登上；走上|virtue|low
极|ji2|极致；极点。|strength
急|ji2|紧，紧缩|virtue|low
疾|ji2|轻微的叫疾|virtue|low
棘|ji2|有芒刺的草木|flora|low
集|ji2|聚集；集市。|bird
嫉|ji2|忌妒|warm|low
辑|ji2|车子|strength|low
藉|ji2|践踏；欺凌||false
给|ji3|使对方得到或遭受到||false
几|ji3|苗头；预兆|virtue|low
己|ji3|天干的第六位|virtue|low
挤|ji3|排斥；排挤|virtue|low
脊|ji3|物体上像脊梁骨似的隆起部分|celestial|low
纪|ji3|开端，头绪||false
济|ji3|州名||false
计|ji4|计较；关心于|literary
记|ji4|记载，记录|literary
纪|ji4|开端，头绪|literary
妓|ji4|妓女|warm|low
忌|ji4|嫉妒|virtue|low
技|ji4|歌舞。亦指以歌舞为业的艺人|virtue|low
际|ji4|合缝的地方；缝隙|mountain
剂|ji4|调节；调和|strength|low
既|ji4|食尽。指日全食或月全食|celestial|low
迹|ji4|留下的印子|virtue|low
寂|ji4|安详闲静，心志淡泊|cool,virtue|low
祭|ji4|使用，旧小说中谓用咒语施放神秘武器|virtue|low
绩|ji4|把麻纤维披开接续起来搓成线|literary
鲫|ji4|鲫鱼，亦称鲋|water|low
冀|ji4|希望；冀望。|virtue
齐|ji4|整齐||false
系|ji4|拴；绑||false
加|jia1|增添；嘉益。|warm
夹|jia1|栽插在物体的两边|virtue|low
茄|jia1|荷梗||false
挟|jia1|挟制|virtue|low
夹|jia2|栽插在物体的两边||false
颊|jia2|侧，旁边|literary|low
甲|jia3|甲子；第一。|celestial
贾|jia3|坐卖。泛指卖|jade|low
钾|jia3|碱金属族的一价金属元素|jade|low
假|jia3|代理，非正式|virtue|low
假|jia4|代理，非正式||false
价|jia4|钱款、费用|virtue|low
驾|jia4|把鞍加在马背上|strength|low
架|jia4|搁置或支持东西的用具|flora|low
嫁|jia4|往，赴|warm|low
稼|jia4|庄稼；耕稼。|flora
奸|jian1|作乱或窃夺|warm|low
尖|jian1|音调细而高，刺耳|virtue|low
歼|jian1|歼残|virtue|low
间|jian1|中间；内|virtue|low
肩|jian1|动物的腿根部|celestial|low
艰|jian1|艰难；困难|virtue|low
兼|jian1|同时具有或涉及几种事务或若干方面|virtue|low
监|jian1|掌管；主管|virtue|low
煎|jian1|折磨；使其痛苦|warm|low
渐|jian1|古水名||false
溅|jian1|液体受到冲激向四外飞射||false
浅|jian1|实行，实现||false
拣|jian3|同捡。拾起|virtue|low
柬|jian3|信札、名帖等的统称|flora|low
茧|jian3|指茧丝|flora|low
捡|jian3|约束|virtue|low
减|jian3|不足；不到；少于|cool|low
剪|jian3|本作前，通作翦，俗作剪|strength|low
检|jian3|检点；查验。|virtue
碱|jian3|盐鹵|mountain|low
间|jian4|中间；内||false
监|jian4|掌管；主管||false
件|jian4|物件|virtue|low
建|jian4|建立、创设|virtue
荐|jian4|再；又；接连|flora|low
贱|jian4|地位低下，人格卑鄙|jade|low
涧|jian4|涧谷，山谷|mountain,water
舰|jian4|舰船；远航。|water,strength
渐|jian4|古水名|water|low
溅|jian4|液体受到冲激向四外飞射|water|low
践|jian4|履行；实现|virtue|low
鉴|jian4|镜子；借鉴。|jade,virtue
键|jian4|关键；键钥。|strength
箭|jian4|箭矢；弓箭。|strength
槛|jian4|槛车；囚车||false
姜|jiang1|∶通咧。强|warm|low
将|jiang1|扶持，扶助|virtue|low
浆|jiang1|古代一种微酸的饮料|water|low
僵|jiang1|死去|virtue|low
缰|jiang1|马缰绳|literary|low
疆|jiang1|疆域；疆界。|mountain
港|jiang3|港口；港湾。||false
讲|jiang3|讲习|literary|low
奖|jiang3|劝勉；鼓励|virtue|low
桨|jiang3|划船用具|flora|low
蒋|jiang3|古国名|flora|low
虹|jiang4|彩虹。||false
将|jiang4|扶持，扶助||false
浆|jiang4|古代一种微酸的饮料||false
匠|jiang4|亦泛指工匠|virtue|low
降|jiang4|投降|mountain|low
酱|jiang4|用麦、面、豆等发酵制成的调味品|virtue|low
强|jiang4|襁褓||false
交|jiao1|脚胫相交|virtue|low
郊|jiao1|郊区|mountain|low
娇|jiao1|娇美；娇柔。|warm
浇|jiao1|饮酒|water|low
骄|jiao1|骄傲；骄健。|strength
胶|jiao1|古代大学之称，后泛指学校|celestial|low
椒|jiao1|芸香科植物|flora|low
焦|jiao1|干枯；枯焦|warm|low
跤|jiao1|跟头。也写作交|virtue|low
蕉|jiao1|指蕉布|flora|low
礁|jiao1|由珊瑚虫的遗骸堆积成的岩石状物|mountain|low
教|jiao1|叫；让||false
矫|jiao2|把弯曲的物体弄直||false
嚼|jiao2|剥蚀、蛀蚀、冲蚀或冰川侵蚀|warm|low
角|jiao3|突起的额骨|virtue|low
侥|jiao3|贪求不止||false
狡|jiao3|传说中的兽名|virtue|low
绞|jiao3|缠绕|literary|low
饺|jiao3|饺子；食物。|warm|low
矫|jiao3|把弯曲的物体弄直|strength|low
脚|jiao3|足的别称|celestial|low
搅|jiao3|混合；拌合；搅拌|virtue|low
剿|jiao3|抄袭|strength|low
缴|jiao3|缠绕|literary|low
叫|jiao4|招唤，招呼|warm|low
轿|jiao4|竹舆。古代过山用的交通工具|strength|low
较|jiao4|车箱|strength|low
教|jiao4|叫；让|virtue|low
窖|jiao4|藏谷麦的地穴|virtue|low
酵|jiao4|酒滓|virtue|low
觉|jiao4|觉悟；知觉。||false
嚼|jiao4|剥蚀、蛀蚀、冲蚀或冰川侵蚀||false
校|jiao4|古代刑具。枷械的统称||false
阶|jie1|台阶；阶梯。|mountain
皆|jie1|通偕；一同|virtue|low
接|jie1|交合；会合|virtue|low
秸|jie1|谷物脱馏的茎杆|flora|low
揭|jie1|标志|virtue|low
街|jie1|城市的大道|virtue|low
节|jie1|草木枝干间坚实结节的部分||false
结|jie1|植物生长果实||false
楷|jie1|楷模；楷树。||false
劫|jie2|威胁；威逼|strength|low
洁|jie2|操行清白，品德高尚|virtue,water,cool
结|jie2|植物生长果实|literary|low
桔|jie2|桔梗，一种多年生草本植物||false
捷|jie2|胜利；捷报。|virtue
睫|jie2|迅速而无意地眨眼|virtue|low
截|jie2|拦阻；阻挡|strength|low
竭|jie2|干涸；枯竭|virtue|low
姐|jie3|尊称年纪和自己差不多的女子|warm|low
她|jie3|称代美好的事物或者自己所敬重、热爱和喜欢的事物||false
藉|jie4|践踏；欺凌|flora|low
价|jie4|钱款、费用||false
解|jie4|解体，离散||false
介|jie4|耿介；介绍。|virtue
戒|jie4|告诫|strength|low
芥|jie4|小草|flora|low
届|jie4|极限；穷极|virtue|low
界|jie4|界限；境界。|mountain
诫|jie4|规劝|literary|low
借|jie4|借进|virtue|low
巾|jin1|缠束或覆盖用的织物|virtue|low
今|jin1|现代；当代。与古相对|virtue|low
斤|jin1|古代一种似锄但比锄小的农具|strength|low
金|jin1|金石；金玉。|jade
津|jin1|渡口；津润。|water
筋|jin1|肌肉的旧称|flora|low
禁|jin1|胜任，承受得起||false
仅|jin3|将近|virtue|low
尽|jin3|尽量，尽可能||false
紧|jin3|物体受拉力或压力后呈现的紧张状态|literary|low
锦|jin3|锦绣；华美。|literary
仅|jin4|将近||false
尽|jin4|尽量，尽可能|virtue|low
劲|jin4|笔法遒劲|strength
进|jin4|进取；奋进。|strength
晋|jin4|晋升；晋阳。|celestial
浸|jin4|泡在水里，被水渗入|water|low
禁|jin4|胜任，承受得起|virtue|low
京|jing1|京都；京华。|virtue
经|jing1|经纶；经世。|literary
茎|jing1|柱；竿|flora|low
荆|jing1|紫荆；荆楚。|flora
惊|jing1|惊喜；惊才。|virtue
晶|jing1|晶莹；光亮。|celestial
睛|jing1|眼睛|virtue|low
兢|jing1|兢兢；谨慎。|virtue
精|jing1|精气；精诚。|literary
鲸|jing1|大；巨大|water|low
井|jing3|水井；井泉。|water
颈|jing3|脖子|literary|low
警|jing3|戒备；防备|literary|low
劲|jing4|笔法遒劲||false
经|jing4|经纶；经世。||false
净|jing4|洁净；干净。|cool
径|jing4|经过，行经|virtue|low
竞|jing4|竞争；竞逐。|strength
竟|jing4|结束，完毕|virtue
靖|jing4|安定；和平|warm
境|jing4|境界；境域。|mountain
镜|jing4|镜子；明镜。|jade
窘|jiong3|急的|virtue|low
纠|jiu1|缠绕|literary|low
究|jiu1|谋划；研究；探求|virtue|low
揪|jiu1|抓；扯住|virtue|low
九|jiu3|第九|virtue|low
灸|jiu3|烧灼|warm|low
玖|jiu3|数词九的大写|jade
韭|jiu3|某些葱属植物的通称|virtue|low
酒|jiu3|酒席，酒筵|virtue|low
臼|jiu4|又指用以形容臼状物|virtue|low
疚|jiu4|贫穷|virtue|low
救|jiu4|援救别人|virtue|low
就|jiu4|靠近；走近；趋向|virtue|low
舅|jiu4|妻的弟或兄|virtue|low
车|ju1|特指战车，兵车||false
居|ju1|居住；居所。|virtue
拘|ju1|束缚；限制|virtue|low
驹|ju1|少壮的马|strength
鞠|ju1|弯曲，弯身|strength|low
俱|ju1|等同||false
据|ju1|依靠，凭借||false
锯|ju1|锯形物||false
且|ju1|此，这；今||false
桔|ju2|桔梗，一种多年生草本植物|flora
局|ju2|距离近|virtue|low
菊|ju2|菊花。|flora
橘|ju2|橘树|flora|low
柜|ju3|小匣||false
沮|ju3|同阻。阻止，阻遏；终止|water|low
举|ju3|拿起；提起|virtue
矩|ju3|法度|strength|low
沮|ju4|同阻。阻止，阻遏；终止||false
巨|ju4|巨大；巨人。|strength
句|ju4|勾销|warm|low
拒|ju4|拒绝，抵制|virtue|low
具|ju4|准备，备办|virtue|low
炬|ju4|火炬；目光如炬。|warm
俱|ju4|等同|virtue|low
剧|ju4|繁多；繁忙|strength|low
惧|ju4|∶惊慌失措的样子|virtue|low
据|ju4|依靠，凭借|virtue|low
距|ju4|距离|virtue|low
锯|ju4|锯形物|jade|low
聚|ju4|聚集；团聚。|virtue
渠|ju4|水渠；渠道。||false
娟|juan1|娟秀；美好。|warm
捐|juan1|除去；废除|virtue|low
鹃|juan1|鸟名，即杜鹃|bird
圈|juan1|曲木做成的饮器||false
卷|juan3|把物弯转成圆筒形||false
卷|juan4|把物弯转成圆筒形|virtue|low
倦|juan4|懈怠，厌烦，厌倦|virtue|low
绢|juan4|麦青色的丝织物|literary|low
眷|juan4|恩顾，器重|virtue|low
圈|juan4|曲木做成的饮器||false
角|jue2|突起的额骨||false
脚|jue2|足的别称||false
诀|jue2|自杀|literary|low
绝|jue2|断，断绝|literary|low
觉|jue2|觉悟；知觉。|virtue
倔|jue2|奇谲||false
崛|jue2|高峻的样子|mountain|low
掘|jue2|竭尽；穷尽|virtue|low
爵|jue2|爵位；爵禄。|virtue
嚼|jue2|剥蚀、蛀蚀、冲蚀或冰川侵蚀||false
倔|jue4|奇谲|virtue|low
龟|jun1|即金龟，亦称乌龟||false
军|jun1|军队；军旅。|strength
君|jun1|君子；君王。|warm
菌|jun1|低等植物的一大类|flora|low
筠|jun1|古州名||false
菌|jun4|低等植物的一大类||false
竣|jun4|竣工；完竣。|virtue
咖|ka1|见gā|warm|low
卡|ka3|适用于写或印刷的小纸片|virtue|low
揩|kai1|擦揩；拭去。|virtue|low
凯|kai3|和乐；欢乐|warm
慨|kai3|疲惫的样子|virtue|low
楷|kai3|楷模；楷树。|virtue,literary
岂|kai3|同恺。安乐||false
刊|kan1|删除|strength|low
勘|kan1|审问|strength|low
堪|kan1|指天道|mountain|low
看|kan1|探望；问候||false
坎|kan3|墓穴；墓坑|mountain|low
砍|kan3|∶ 挖|mountain|low
槛|kan3|槛车；囚车|flora|low
看|kan4|探望；问候|virtue|low
嵌|kan4|张开的样子||false
慷|kang1|性格豪爽|virtue|low
糠|kang1|本作穅，康。谷的外壳|flora|low
扛|kang2|用两手举重物|virtue|low
亢|kang4|刚强|strength|low
抗|kang4|抗节；刚正不屈。|virtue,strength
炕|kang4|断绝|warm|low
考|kao3|去世的父亲|virtue|low
拷|kao3|打|virtue|low
烤|kao3|用火把东西烘干或烘熟|warm|low
铐|kao4|戴上手铐|jade|low
靠|kao4|相依|virtue|low
呵|ke1|喝道，喝令行人让路||false
苛|ke1|疥疮|flora|low
科|ke1|科学；科目。|literary
棵|ke1|指某些植物的茎|flora|low
颗|ke1|多用于圆形或粒状物|literary|low
磕|ke1|碰击，碰撞|mountain|low
蝌|ke1|蝌蚪|bird|low
坷|ke1|道路或土地高低不平||false
咳|ke2|哎呀，唉，呜呼|warm|low
壳|ke2|∶物的坚硬外皮|virtue|low
坷|ke3|道路或土地高低不平|mountain|low
渴|ke3|口渴|water|low
可|ke4|许可；同意；准许||false
克|ke4|能够|virtue
刻|ke4|绘画；修饰|strength|low
客|ke4|宾客；客人。|warm
课|ke4|督促完成指定的工作|literary|low
肯|ken3|假借为可。表示应允，同意|celestial|low
垦|ken3|损伤|mountain|low
恳|ken3|请求，表露愿望和要求|virtue|low
啃|ken3|刻苦钻研|warm|low
吭|keng1|鸟的喉咙，泛指喉咙；咽喉|warm|low
坑|keng1|矿穴，矿场|mountain|low
空|kong3|罄尽；空其所有。引申为没有||false
孔|kong3|小窟窿|virtue|low
恐|kong3|恐吓，使之害怕|virtue|low
空|kong4|罄尽；空其所有。引申为没有||false
控|kong4|勒马|virtue|low
抠|kou1|抓牢|virtue|low
口|kou3|人类用来发声和进食的器官|warm|low
叩|kou4|叩头、拜|warm|low
扣|kou4|捆绑；拘押|virtue|low
寇|kou4|砍伐|virtue|low
枯|ku1|弃市暴死|flora|low
哭|ku1|吊唁，祭奠死者并慰问家属|warm|low
窟|ku1|洞穴|virtue|low
挎|ku1|胳膊弯起来挂着东西||false
苦|ku3|即荼|flora|low
库|ku4|库房；贮藏。|virtue
裤|ku4|裤子|virtue|low
酷|ku4|残暴；苛刻|virtue|low
夸|kua1|自大；炫耀|virtue|low
垮|kua3|溃败；遭到彻底失败|mountain|low
夸|kua4|自大；炫耀||false
挎|kua4|胳膊弯起来挂着东西|virtue|low
跨|kua4|超过|virtue|low
会|kuai4|晤见||false
块|kuai4|成块的东西|mountain|low
快|kuai4|舒适；舒畅|virtue,warm|low
筷|kuai4|筷子；食具。|flora|low
款|kuan3|空；空洞，不真实|virtue|low
筐|kuang1|亦用柳条或荆条等编成|flora|low
狂|kuang2|也指狗发疯|virtue|low
况|kuang4|情形，景况|cool|low
旷|kuang4|心境开阔，开朗|celestial|low
矿|kuang4|开采矿物的场所或单位|mountain|low
框|kuang4|棺门|flora|low
眶|kuang4|眼眶|virtue|low
亏|kui1|欠缺，短少。与盈、满相对|virtue|low
盔|kui1|盂一类容器|virtue|low
窥|kui1|暗中察看。亦泛指观看|virtue|low
葵|kui2|菊科草本植物|flora
魁|kui2|首领，领头人|virtue
愧|kui4|同媿|virtue|low
溃|kui4|冲破|water|low
馈|kui4|进食|warm|low
坤|kun1|地，大地|mountain
昆|kun1|昆仲；后裔。|warm
捆|kun3|用绳、链或带子系、拴、扎紧|virtue|low
困|kun4|梱的本字。门槛|virtue|low
扩|kuo4|扩大；张开|virtue|low
括|kuo4|用绳或带子结扎，捆束|virtue|low
阔|kuo4|宽阔；辽阔。|strength
廓|kuo4|物体的外缘|virtue|low
适|kuo4|适宜；舒适。||false
垃|la1|垃圾|mountain|low
拉|la1|牵；引；扯；拽|virtue
喇|la1|喇lá 1.见哈喇子||false
啦|la1|同拉。闲扯，闲谈|warm|low
拉|la2|牵；引；扯；拽||false
喇|la2|喇lá 1.见哈喇子||false
拉|la3|牵；引；扯；拽||false
喇|la3|喇lá 1.见哈喇子|warm|low
拉|la4|牵；引；扯；拽||false
腊|la4|腊月；腊日。|season
蜡|la4|动物、矿物或植物所产生的油质|bird|low
辣|la4|姜、蒜、辣椒等带刺激性的味道|virtue|low
落|la4|捞，赚||false
莱|lai2|草名，又名藜|flora
睐|lai4|瞳仁不正|virtue|low
赖|lai4|依靠；依赖；依恃、凭藉|jade|low
拦|lan2|拦截|virtue|low
栏|lan2|由扶手和支柱构成的栅杆护围|flora|low
婪|lan2|古称行酒一巡|warm|low
蓝|lan2|蓝色；蔚蓝。|flora
篮|lan2|篮球架上供投球用的带网的铁圈|flora|low
览|lan3|观赏|virtue|low
揽|lan3|总揽；一把抓|virtue|low
缆|lan3|许多股绞成的粗绳|literary|low
榄|lan3|木名。橄榄的省称|flora|low
懒|lan3|疲惫|virtue|low
烂|lan4|火烧伤|warm|low
滥|lan4|大水漫出，泛滥|water|low
郎|lang2|少年；郎君。|warm
狼|lang2|即倆人|virtue|low
廊|lang2|走廊|virtue|low
榔|lang2|槟榔，又叫桄榔|flora|low
郎|lang4|少年；郎君。||false
浪|lang4|波浪，水因风吹、石激而形成的涌动|water
捞|lao1|用不正当的手段获取|virtue|low
劳|lao2|烦劳；麻烦|strength|low
牢|lao2|古代祭祀或宴享时用的牲畜|virtue|low
唠|lao2|∶说；谈||false
老|lao3|五十至七十岁的高龄|virtue|low
姥|lao3|用同老|warm|low
唠|lao4|∶说；谈|warm|low
涝|lao4|水淹没；雨多成灾|water|low
烙|lao4|在烧热的锅内焙烤|warm|low
酪|lao4|用果子或果子的仁做的糊状食品|virtue|low
乐|lao4|喜悦；愉快||false
络|lao4|用网状物兜住||false
落|lao4|捞，赚||false
肋|le1|房屋或其它建筑物中的构架木材||false
勒|le4|对数能量损失|strength|low
勒|lei1|对数能量损失||false
雷|lei2|雷声；雷霆。|celestial,water
擂|lei2|将某物从上处滚下来以打击敌人||false
累|lei2|也作缧||false
垒|lei3|壁垒；营垒。|mountain
磊|lei3|磊落；光明坦荡。|virtue,strength
蕾|lei3|花蕾；含苞未放。|flora
累|lei3|也作缧||false
擂|lei4|将某物从上处滚下来以打击敌人|virtue|low
肋|lei4|房屋或其它建筑物中的构架木材|celestial|low
泪|lei4|某些形似眼泪的东西|water|low
类|lei4|族类|flora|low
累|lei4|也作缧|literary|low
棱|leng1|同一物体的面与面的交接处，即棱角||false
棱|leng2|同一物体的面与面的交接处，即棱角|flora|low
冷|leng3|寒冷|cool
愣|leng4|发愣；愣呆呆；愣神|virtue|low
哩|li1|用在陈述句末||false
厘|li2|极小，极少量|virtue|low
狸|li2|黄鼠狼的别名|virtue|low
离|li2|离别；离明。|warm
犁|li2|犁铧；耕作。|flora
漓|li2|浅薄；浇薄|water|low
璃|li2|璃lí 1.见琉璃。 2.见玻璃|jade|low
黎|li2|黎明；黎民。|celestial
篱|li2|用竹、苇或树枝等编成的蔽障物|flora|low
丽|li2|成对◇作俪||false
哩|li3|用在陈述句末|warm|low
李|li3|落叶乔木|flora|low
里|li3|内，中。与外相反|virtue|low
理|li3|治理；条理。|virtue
鲤|li3|鲤鱼|water|low
历|li4|行；游历|virtue|low
厉|li4|祸患；危险|virtue|low
吏|li4|专指官府中的胥吏或差役|warm|low
利|li4|快；敏捷|strength
励|li4|勉励；奋进。|strength,virtue
沥|li4|水、泪、酒等液体下滴|water|low
例|li4|类；列|virtue|low
隶|li4|跟从；附属|virtue|low
俐|li4|伶俐聪慧；机灵|virtue
栗|li4|栗树；坚实饱满。|flora,strength
砾|li4|砾石|mountain|low
莉|li4|茉莉。|flora
粒|li4|粒状物|flora|low
痢|li4|表示与疾病有关|virtue|low
雳|li4|见霹雳|water|low
俩|lia3|几个||false
连|lian2|姻亲关系|virtue
帘|lian2|帘子，遮蔽门窗的用具|virtue|low
怜|lian2|爱，惜|virtue|low
联|lian2|联合；联系|virtue
镰|lian2|锋利的棱角|jade|low
敛|lian3|收获|virtue|low
脸|lian3|指某些物体的前部|celestial|low
练|lian4|练习；操演|literary
炼|lian4|修炼；锻炼；造就|warm
恋|lian4|思念，怀念|virtue
链|lian4|链条|jade|low
凉|liang2|微寒，稍冷|cool
梁|liang2|房梁；栋梁。|strength
粮|liang2|谷类；粮食|flora|low
粱|liang2|高粱|flora|low
量|liang2|数量；数目||false
俩|liang3|几个|virtue|low
两|liang3|16两为1斤|virtue|low
凉|liang4|微寒，稍冷||false
谅|liang4|固执，坚持己见|literary|low
辆|liang4|用于车，指单个数|strength|low
晾|liang4|把东西放在通风或阴凉的地方使干燥|celestial|low
撩|liao1|揭起，向上掀起||false
撩|liao2|揭起，向上掀起|virtue|low
辽|liao2|辽阔；高远。|mountain,strength
疗|liao2|治愈，治好；止|virtue|low
聊|liao2|依赖，凭藉|virtue|low
僚|liao2|古代一种服苦役的官奴|virtue|low
寥|liao2|假借为赖。凭依；聊赖|virtue|low
嘹|liao2|声音清脆悠扬|warm|low
缭|liao2|围绕；绕道而行|literary|low
了|liao3|用在动词或形容词后，表示完成|virtue|low
瞭|liao3|—||false
料|liao4|计数；计量；核计|virtue|low
瞭|liao4|—||false
咧|lie1|口微张，嘴角向两边伸展||false
咧|lie2|口微张，嘴角向两边伸展||false
咧|lie3|口微张，嘴角向两边伸展|warm|low
裂|lie3|裂缝||false
列|lie4|排列；陈列。|strength
劣|lie4|少，不足|strength|low
烈|lie4|猛烈；激烈|warm
猎|lie4|搜求，追求|virtue|low
裂|lie4|裂缝|virtue|low
拎|lin1|∶提|virtue|low
邻|lin2|邻里；相邻。|mountain
淋|lin2|让水或其他液体自上落下|water
磷|lin2|含有磷酸盐的|mountain|low
鳞|lin2|鳞片状物|water|low
凛|lin3|严肃而可敬畏|cool|low
淋|lin4|让水或其他液体自上落下||false
吝|lin4|认为耻辱|warm|low
赁|lin4|租用、租借|jade|low
躏|lin4|欺压；伤害|virtue|low
棱|ling2|同一物体的面与面的交接处，即棱角||false
伶|ling2|伶俐；伶人。|literary
凌|ling2|凌云；凌寒。|cool
铃|ling2|铃铛；铃声。|jade,literary
羚|ling2|羚羊。|strength
聆|ling2|明了，清楚|virtue|low
菱|ling2|柳叶菜科，菱属植物的泛称|flora
零|ling2|如雨一般地落下；降落|water|low
龄|ling2|年龄；年岁。|season
令|ling2|命名||false
岭|ling3|山峰；山岭。|mountain
领|ling3|领袖；引领。|virtue
令|ling3|命名||false
另|ling4|分居，分开居住而各自谋生|warm|low
溜|liu1|滑动|water|low
刘|liu2|克，战胜|strength|low
浏|liu2|风轻吹的样子|water|low
流|liu2|顺水漂流|water
留|liu2|留驻；挽留。|virtue
琉|liu2|琉璃|jade|low
硫|liu2|硫磺。一种非金属的、多价的、无味无嗅不溶于水的元素|mountain|low
馏|liu2|通过加热使物质分离或分解|warm|low
榴|liu2|一种落叶灌木|flora|low
瘤|liu2|树木干、根外皮隆起的块状物|virtue|low
柳|liu3|柳树；柳枝。|flora
溜|liu4|滑动||false
馏|liu4|通过加热使物质分离或分解||false
六|liu4|五加一的和|virtue|low
陆|liu4|路；道||false
碌|liu4|小石||false
隆|long1|丰大；高||false
咙|long2|喉咙，咽部和喉部的统称|warm|low
胧|long2|灯在月胧明，觉来闻晓莺|celestial|low
笼|long2|用竹片编成的盛物的器具|flora|low
聋|long2|愚昧；不明事理|virtue|low
隆|long2|丰大；高|mountain
窿|long2|高起；突出|virtue|low
笼|long3|用竹片编成的盛物的器具||false
垄|long3|土埂|mountain
拢|long3|总计；合计|virtue|low
弄|long4|戏耍；游戏||false
搂|lou1|兜揽||false
娄|lou2|物体中空的|warm|low
楼|lou2|楼阁；高楼。|literary
搂|lou3|兜揽|virtue|low
篓|lou3|篾篓|flora|low
陋|lou4|简陋|mountain|low
漏|lou4|孔隙，孔穴；漏洞|water|low
露|lou4|水气||false
卢|lu2|房屋|virtue|low
庐|lu2|古代沿途迎候宾客的房舍|virtue|low
芦|lu2|芦菔，似芜菁。今作萝卜|flora|low
炉|lu2|火炉|warm
颅|lu2|头，头颅|literary|low
卤|lu3|天然生成的盐称为卤。泛指食盐|virtue|low
虏|lu3|亦指虏掠、抄掠|virtue|low
鲁|lu3|鲁地；鲁直。|virtue
六|lu4|五加一的和||false
陆|lu4|路；道|mountain|low
录|lu4|记录；名录。|literary
赂|lu4|行贿，用钱、物买通别人|jade|low
禄|lu4|福禄；禄位。|virtue,warm
碌|lu4|小石|mountain|low
绿|lu4|颜色昏暗，乌黑色||false
峦|luan2|山脉，相连的群山|mountain|low
卵|luan3|成熟的雌性生殖细胞|virtue|low
乱|luan4|治理|virtue|low
抡|lun1|挥动或挥舞||false
抡|lun2|挥动或挥舞|virtue|low
仑|lun2|条理；昆仑。|virtue
沦|lun2|沉沦；没落|water|low
轮|lun2|车子|strength|low
论|lun2|议论， 分析和说明事理||false
论|lun4|议论， 分析和说明事理|literary|low
啰|luo1|啰嗦；言语繁复。|virtue|low
落|luo1|捞，赚||false
啰|luo2|啰嗦；言语繁复。||false
罗|luo2|轻软的丝织品|virtue|low
萝|luo2|通常指某些能爬蔓的植物茑|flora|low
逻|luo2|遮拦|virtue|low
锣|luo2|带卷边的青铜圆盘|jade|low
箩|luo2|箩筛|flora|low
骡|luo2|动物名。骡子|strength|low
螺|luo2|螺髻的简称|bird|low
裸|luo3|捋，撩|virtue|low
烙|luo4|在烧热的锅内焙烤||false
络|luo4|用网状物兜住|literary|low
骆|luo4|骆驼|strength|low
落|luo4|捞，赚|flora|low
驴|lv2|驴子|strength|low
吕|lv3|膂的古字|warm|low
侣|lv3|结为伴侣；陪伴|virtue|low
旅|lv3|军队编制单位|virtue|low
铝|lv3|金属元素，轻而耐腐蚀。|virtue|low
屡|lv3|屡次；反复。|virtue|low
缕|lv3|细而长的东西，线状物|literary|low
履|lv3|步履；履行。|virtue
虑|lv4|用绳结缀|virtue|low
率|lv4|法令；条例|virtue|low
绿|lv4|颜色昏暗，乌黑色|literary|low
氯|lv4|氯元素；化学气体。|season|low
滤|lv4|过滤；筛选。|water|low
掠|lve4|拷打；拷问||false
略|lve4|巡视；巡行|mountain
妈|ma1|尊称长一辈或年长的妇女|warm|low
蚂|ma1|蚂蟥||false
摩|ma1|迫近，接近||false
抹|ma1|揩；擦||false
麻|ma2|麻的茎皮纤维|virtue|low
蟆|ma2|蛤蟆；蛙类。|bird|low
吗|ma2|∶什么|warm|low
嘛|ma2|表示道理显而易见|warm|low
马|ma3|单蹄食草大型哺乳动物|strength|low
玛|ma3|玛瑙|jade
码|ma3|码磟|mountain|low
蚂|ma3|蚂蟥|bird|low
吗|ma3|∶什么||false
蚂|ma4|蚂蟥||false
骂|ma4|增益。通雈|strength|low
埋|mai2|藏，掩盖|mountain|low
买|mai3|雇，租|virtue|low
迈|mai4|行走；跨步|virtue
麦|mai4|麦穗；麦田。|flora
卖|mai4|背地里害人以利己；背叛|virtue|low
脉|mai4|指事物如血管连贯有条理者|celestial|low
埋|man2|藏，掩盖||false
蛮|man2|对奴婢的贱称|bird|low
馒|man2|馒首|warm|low
瞒|man2|通满|virtue|low
蔓|man2|蔓延；滋长||false
曼|man4|柔美；曼妙。|warm
慢|man4|怠慢|virtue|low
漫|man4|充满；遍，周遍|water
忙|mang2|事情多，繁忙|virtue|low
芒|mang2|光芒；锋芒。|celestial,strength
氓|mang2|古代称百姓|virtue|low
盲|mang2|昏暗|virtue|low
茫|mang2|迷蒙不明；凝不清|flora|low
莽|mang3|草丛|flora
猫|mao1|狸猫，亦称山猫|virtue|low
猫|mao2|狸猫，亦称山猫||false
毛|mao2|兽类|virtue|low
矛|mao2|两种兵器。矛用于进攻敌人，盾用于保护自己|strength|low
茅|mao2|茅屋，简陋的居住|flora|low
锚|mao2|船停泊时所用的设备|jade|low
卯|mao3|地支的第四位|virtue|low
茂|mao4|茂盛；繁茂。|flora
冒|mao4|帽的古字。帽子|virtue|low
贸|mao4|改变|jade|low
帽|mao4|戴帽|virtue|low
貌|mao4|外表的形象，外观|virtue|low
没|mei2|不领有，不具有，不存在|water|low
枚|mei2|枚数；衔枚。|literary
玫|mei2|玫瑰。|flora,jade
眉|mei2|眉毛；眉目。|virtue
媒|mei2|媒介|warm|low
煤|mei2|指墨|warm|low
霉|mei2|真菌；霉菌|water|low
每|mei3|常常，经常|warm|low
妹|mei4|古邑|warm|low
昧|mei4|眼不明的样子|celestial|low
媚|mei4|逢迎取悦|warm
魅|mei4|迷信传说中所谓的鬼怪画鬼|virtue|low
谜|mei4|猜谜儿||false
闷|men1|气闷，因气不通畅而引起的不快之感||false
瞒|men2|通满||false
门|men2|房屋垣墙等建筑物|virtue|low
们|men2|么的变音字|virtue|low
闷|men4|气闷，因气不通畅而引起的不快之感|virtue|low
蒙|meng1|蒙昧；承蒙。||false
氓|meng2|古代称百姓||false
萌|meng2|萌芽；萌发。|flora
盟|meng2|盟约；联盟。|virtue
蒙|meng2|蒙昧；承蒙。|virtue
朦|meng2|朦胧。|celestial
檬|meng2|见柠檬|flora|low
蒙|meng3|蒙昧；承蒙。||false
猛|meng3|勇猛；猛烈。|strength
锰|meng3|一种灰白色多价金属元素|jade,cool|low
咪|mi1|猫叫声或唤猫声|warm|low
眯|mi1|眼皮微微合拢|virtue|low
眯|mi2|眼皮微微合拢||false
弥|mi2|充满；填满|strength
迷|mi2|迷惑，使…辨不清|virtue|low
谜|mi2|猜谜儿|literary|low
靡|mi2|水边，河岸|water|low
弥|mi3|充满；填满||false
靡|mi3|水边，河岸||false
米|mi3|特指稻米|flora|low
泌|mi4|水名|water|low
秘|mi4|不可测知；不公开|flora|low
蜜|mi4|甜蜜；蜂蜜。|warm
眠|mian2|睡觉|virtue|low
绵|mian2|绵长；柔软。|warm
棉|mian2|木棉，也叫攀枝花、英雄树|flora|low
免|mian3|脱掉；脱落|strength|low
勉|mian3|尽力，用尽所有力量|strength
缅|mian3|缅甸的简称|literary|low
面|mian4|外表；表面|virtue|low
描|miao2|描写|virtue|low
瞄|miao2|眼睛迅速地注视，迅速地看|virtue|low
秒|miao3|末端|flora|low
渺|miao3|遥远；邈远；渺茫|water
藐|miao3|孤独的|flora|low
庙|miao4|古时供奉神佛的处所|virtue|low
灭|mie4|消失，隐没|warm|low
蔑|mie4|细小；轻微|flora|low
皿|min3|器皿|virtue|low
闽|min3|闽地；福建。|water
悯|min3|忧愁；烦闷|virtue|low
名|ming2|名字；名声。|warm
鸣|ming2|发声|bird
冥|ming2|深远；幽深|virtue|low
铭|ming2|铭记；铭刻。|literary
命|ming4|取名；命名|warm|low
谬|miu4|欺诈；迷误|literary|low
摸|mo1|用手探取|virtue|low
么|mo2|用在句末，表示疑问或反诘的语气|virtue|low
馍|mo2|饼类食品|warm|low
摹|mo2|仿效|virtue|low
模|mo2|模型；楷模。|literary
膜|mo2|通常有柔韧性的透明薄片|celestial|low
摩|mo2|迫近，接近|virtue|low
磨|mo2|磨擦|mountain|low
蘑|mo2|蘑菇|flora|low
魔|mo2|恶鬼，怪物|virtue|low
无|mo2|哲学范畴||false
抹|mo3|揩；擦||false
嘿|mo4|咳嗽||false
蟆|mo4|蛤蟆；蛙类。||false
脉|mo4|指事物如血管连贯有条理者||false
冒|mo4|帽的古字。帽子||false
没|mo4|不领有，不具有，不存在||false
磨|mo4|磨擦||false
抹|mo4|揩；擦|virtue|low
末|mo4|物的末端、末尾|flora|low
沫|mo4|泡沫，沫子|water
陌|mo4|道路|mountain|low
莫|mo4|莫非；莫大。|literary
寞|mo4|寂静；无声响|cool|low
漠|mo4|淡泊，恬淡，即不追求名利|cool,water|low
万|mo4|万千；万方。||false
谋|mou2|计议；商议|literary
某|mou3|指一定的不明说的人或事物|flora|low
模|mu2|模型；楷模。||false
姥|mu3|用同老||false
母|mu3|家族或亲戚中的长辈女子|warm|low
亩|mu3|农田，田地|virtue|low
牡|mu3|男性生殖器|virtue|low
姆|mu3|乳母|warm|low
拇|mu3|手大指|virtue|low
莫|mu4|莫非；莫大。||false
目|mu4|目光；眼力|virtue|low
牧|mu4|牧养；牧野。|virtue
募|mu4|假借为膜|strength|low
墓|mu4|不加区别，统称作墓|mountain|low
幕|mu4|帐幕；篷帐|virtue|low
睦|mu4|调和|virtue|low
穆|mu4|肃穆；和穆。|virtue
那|na1|指示代词||false
南|na1|南方；南风。||false
拿|na2|捉拿|virtue|low
哪|na3|表示任何一个|warm|low
那|na4|指示代词|mountain|low
呐|na4|呐喊，大叫|warm|low
纳|na4|接纳；容纳。|literary
娜|na4|婀娜。|warm
钠|na4|一种银白色的软的、蜡状而有延展性的金属元素|jade,cool|low
捺|na4|抑制|virtue|low
内|na4|交入；接纳◇作纳||false
哪|nai3|表示任何一个||false
乃|nai3|你，你的|virtue|low
奶|nai3|乳汁|warm|low
奈|nai4|如，如何|virtue|low
耐|nai4|忍耐；耐久。|virtue
能|nai4|传说中的一种像熊的兽||false
男|nan2|男子；男儿。|strength
南|nan2|南方；南风。|season
难|nan2|困难；艰难；不容易|bird|low
难|nan4|困难；艰难；不容易||false
囊|nang1|像口袋的东西||false
囊|nang2|像口袋的东西|warm|low
挠|nao2|搅，搅动|virtue|low
恼|nao3|懊恼；烦闷|virtue|low
脑|nao3|形状或颜色像脑髓的东西|celestial|low
瑙|nao3|玛瑙；宝石。|jade|low
闹|nao4|热闹|virtue|low
哪|ne2|表示任何一个||false
哪|nei3|表示任何一个||false
馁|nei3|气馁；泄气，丧气|warm|low
那|nei4|指示代词||false
内|nei4|交入；接纳◇作纳|virtue|low
嫩|nen4|指某些食物烹调时间短、容易咀嚼|warm|low
妮|ni1|少女|warm
呢|ni2|用在疑问句末，表示疑问|warm|low
尼|ni2|尼山；僧尼。|virtue
泥|ni2|中国古水名|water|low
你|ni3|不明确指明的集团中的某一个体|virtue|low
拟|ni3|类似；比拟|virtue|low
泥|ni4|中国古水名||false
逆|ni4|迎击；迎战|virtue|low
匿|ni4|隐瞒|virtue|low
溺|ni4|排泄小便◇来作尿|water|low
腻|ni4|粘糊|celestial|low
粘|nian2|粘的东西互相连接或附着在别的东西上||false
捻|nian3|领导|virtue|low
撵|nian3|∶追赶|virtue|low
碾|nian3|碾磨|mountain|low
辗|nian3|磙压；碾压|strength|low
娘|niang2|∶母亲|warm|low
酿|niang4|原专指酿酒|virtue|low
鸟|niao3|从高处往下看登高|bird|low
溺|niao4|排泄小便◇来作尿||false
尿|niao4|排出小便|virtue|low
捻|nie1|领导||false
捏|nie1|用手按|virtue|low
聂|nie4|假借为摄。握持|virtue|low
孽|nie4|地位低贱的|virtue|low
摄|nie4|执；持||false
您|nin2|—||false
拧|ning2|用力扭转||false
狞|ning2|凶恶，恶相难看|virtue|low
凝|ning2|凝聚；积聚|cool
拧|ning3|用力扭转|virtue|low
宁|ning4|安定||false
拧|ning4|用力扭转||false
泞|ning4|泥浆|water|low
牛|niu2|牛属或近缘属的成员|virtue|low
扭|niu3|揪住|virtue|low
纽|niu3|事物的根本，关键|literary|low
钮|niu3|器物上面可以提携或系绳带的部分|jade|low
拗|niu4|固执|virtue|low
农|nong2|努力，勉力|virtue|low
浓|nong2|稠密；厚；多|water
脓|nong2|腐烂|celestial|low
弄|nong4|戏耍；游戏|virtue|low
奴|nu2|对人的鄙称|warm|low
努|nu3|向外突出|strength|low
怒|nu4|谴责|virtue|low
娜|nuo2|婀娜。||false
难|nuo2|困难；艰难；不容易||false
挪|nuo2|移动，从一处移到另一处|virtue|low
诺|nuo4|诺言；允诺。|literary
懦|nuo4|柔软|virtue|low
糯|nuo4|粘性稻|flora|low
女|nv3|女儿|warm|low
疟|nve4|残暴；灾害|virtue|low
虐|nve4|暴烈；险恶|virtue|low
哦|o2|吟咏||false
哦|o4|吟咏|literary,warm|low
欧|ou1|欧洲；欧歌。|literary
殴|ou1|同怄。气恼|virtue|low
呕|ou1|古通讴。唱歌||false
区|ou1|隐匿||false
呕|ou3|古通讴。唱歌|warm|low
偶|ou3|伙伴；同伴；与人共处|virtue|low
藕|ou3|莲的地下茎|flora|low
呕|ou4|古通讴。唱歌||false
趴|pa1|胸腹部向下卧倒|virtue|low
啪|pa1|一种突然、尖锐的响声|warm|low
扒|pa2|刨，挖||false
耙|pa2|用耙碎土平地|virtue|low
爬|pa2|爬行，匍匐。躯体贴地缓慢向前行|virtue|low
帕|pa4|束额巾|virtue|low
怕|pa4|用在谓语前面或句首|virtue|low
拍|pai1|抚慰|virtue|low
徘|pai2|徘徊|virtue|low
排|pai2|排斥；排挤|virtue|low
牌|pai2|户籍板。犹今之户口簿|virtue|low
排|pai3|排斥；排挤||false
迫|pai3|硬逼，逼迫||false
派|pai4|江河的流水|water
湃|pai4|冰镇或用冷水浸；漂|water,cool|low
扳|pan1|拉；引；拨动||false
番|pan1|更替，轮值||false
潘|pan1|淘米水|water|low
攀|pan1|攀登；攀援。|strength
般|pan2|种，类||false
盘|pan2|古代的一种盥洗用具|virtue|low
胖|pan2|肥胖||false
拌|pan4|搅和；调匀||false
判|pan4|判决|strength|low
叛|pan4|零乱的|virtue|low
畔|pan4|湖畔；田畔。|water
胖|pan4|肥胖||false
膀|pang1|臂膀。指肩和肘之间的手臂||false
乓|pang1|突然的强烈的响声|virtue|low
膀|pang2|臂膀。指肩和肘之间的手臂||false
磅|pang2|称东西的器件|mountain|low
庞|pang2|脸盘|virtue|low
旁|pang2|别的，其他的|virtue|low
螃|pang2|螃蟹|bird|low
胖|pang4|肥胖|celestial|low
抛|pao1|抛，掷|virtue|low
泡|pao1|古水名。又名丰水||false
刨|pao2|刨子|strength|low
袍|pao2|有夹层、中着棉絮的长衣|virtue|low
跑|pao2|急走||false
炮|pao2|焚烧，燃烧||false
跑|pao3|急走|virtue|low
泡|pao4|古水名。又名丰水|water|low
炮|pao4|焚烧，燃烧|warm|low
坏|pei1|破坏；毁坏||false
胚|pei1|初期发育的幼孢子体|celestial|low
坏|pei2|破坏；毁坏||false
陪|pei2|辅佐之臣，公卿之臣|mountain|low
培|pei2|增益；增添|mountain
赔|pei2|陪嫁|jade|low
妃|pei4|妃子；天妃。||false
佩|pei4|钦佩，敬仰|virtue
配|pei4|结婚，婚配|virtue|low
喷|pen1|气味浓郁|warm|low
盆|pen2|古代量器。容量为古制十二斗八升|virtue|low
喷|pen4|气味浓郁||false
砰|peng1|猛地碰撞或关上的声音|mountain|low
烹|peng1|冶炼|warm|low
澎|peng1|澎湃。||false
苹|peng1|苹果；苹草。||false
朋|peng2|朋友；朋辈。|warm
彭|peng2|古国名|literary|low
棚|peng2|棚屋；凉棚。|virtue
蓬|peng2|蓬草；蓬勃。|flora
澎|peng2|澎湃。|water
篷|peng2|船帆|flora|low
膨|peng2|膨胀；壮大。|celestial|low
捧|peng3|拱手|virtue|low
碰|peng4|用手、脚或器械触及|mountain|low
被|pi1|表面||false
坏|pi1|破坏；毁坏||false
批|pi1|打、攻击|virtue|low
坯|pi1|没有烧过的砖瓦、陶器|mountain|low
披|pi1|古夹具。即用在柩车两旁牵挽的帛|virtue|low
劈|pi1|俗称雷击为劈|strength|low
霹|pi1|雷电轰击|water|low
辟|pi1|君主||false
罢|pi2|遣返，遣归||false
皮|pi2|酥脆的东西变韧|virtue|low
疲|pi2|衰老；衰弱|virtue|low
啤|pi2|啤酒厂|warm|low
脾|pi2|大腿|celestial|low
否|pi3|闭塞；阻隔不通||false
劈|pi3|俗称雷击为劈||false
匹|pi3|量词。用于纺织品或缧马等|virtue|low
屁|pi4|肠道产生但从肛门突然排出的臭气|virtue|low
辟|pi4|君主|virtue|low
僻|pi4|偏僻；偏远；很少有人去的|virtue|low
譬|pi4|晓谕，使人知晓|literary|low
扁|pian1|∶把东西掖在腰间||false
偏|pian1|边远|virtue|low
篇|pian1|特指诗歌、辞赋等文艺著作|literary,flora|low
翩|pian1|轻舞，飘扬|bird|low
片|pian1|用刀将物斜削成扁薄形状||false
便|pian2|便利，方便||false
片|pian4|用刀将物斜削成扁薄形状|virtue|low
骗|pian4|跃上马背而骑乘；骑。同騗|strength|low
飘|piao1|飘扬；飘然。|cool
票|piao1|轻举的样子||false
漂|piao1|被水流、风或气流冲走、冲毁|water|low
瓢|piao2|瓠的一种。也称葫芦|flora|low
朴|piao2|树木的皮，木皮||false
漂|piao3|被水流、风或气流冲走、冲毁||false
票|piao4|轻举的样子|virtue|low
漂|piao4|被水流、风或气流冲走、冲毁||false
撇|pie1|平着扔出去||false
撇|pie3|平着扔出去|virtue|low
拼|pin1|随从|virtue|low
贫|pin2|缺少，不足|jade|low
频|pin2|接近；临近|literary|low
聘|pin4|聘请|virtue
乒|ping1|好像枪弹击中金属障碍物时的尖锐声|virtue|low
冯|ping2|大，盛||false
评|ping2|评判|literary|low
凭|ping2|依托；仰仗|virtue|low
坪|ping2|山区和丘陵地区局部的平地|mountain
苹|ping2|苹果；苹草。|flora
屏|ping2|退避；隐退|virtue|low
瓶|ping2|腹大颈长的容器|virtue|low
萍|ping2|浮萍。|flora
坡|po1|山坡。|mountain
泊|po1|栖止，停留||false
泼|po1|淹死|water|low
颇|po1|偏，倾斜，不平正|literary|low
朴|po1|树木的皮，木皮||false
繁|po2|繁华；繁盛。||false
婆|po2|盘旋；停留|warm|low
迫|po4|硬逼，逼迫|virtue|low
破|po4|破坏；损坏|mountain|low
魄|po4|有别于可游离于人体之外的魂|virtue|low
朴|po4|树木的皮，木皮||false
剖|pou1|分辨；分析|strength|low
仆|pu1|驾车的人||false
扑|pu1|进攻|virtue|low
铺|pu1|把东西展开或摊平||false
卜|pu2|选择||false
仆|pu2|驾车的人|virtue|low
脯|pu2|干燥脱水的瓜果|celestial|low
菩|pu2|菩提；智慧觉悟。|flora,literary|low
葡|pu2|葡糖|flora|low
蒲|pu2|菖蒲|flora
圃|pu3|帝王贵族游乐观赏的地方|virtue|low
浦|pu3|指池、塘、江河等水面|water
普|pu3|遍，普遍；全面|celestial
谱|pu3|乐谱；谱系。|literary
堡|pu4|指堡垒||false
暴|pu4|显露；暴露||false
铺|pu4|把东西展开或摊平|jade|low
瀑|pu4|急雨，暴风雨||false
曝|pu4|暴露|celestial|low
缉|qi1|搜捕||false
七|qi1|七次|virtue|low
妻|qi1|周代宫中女御|warm|low
柒|qi1|七的大写|flora|low
凄|qi1|寒冷|cool|low
栖|qi1|停留|flora|low
戚|qi1|亦用为舞具|strength|low
欺|qi1|欺诈，用狡猾奸诈的手段骗人|virtue|low
漆|qi1|古水名|water|low
齐|qi2|整齐|virtue
其|qi2|期限|virtue|low
歧|qi2|分歧；歧路。|virtue
祈|qi2|请求；希望|virtue|low
脐|qi2|螃蟹腹部的厣|celestial|low
崎|qi2|险峻|mountain
骑|qi2|跨于物上或两边叫骑，跨坐|strength|low
棋|qi2|棋局；琴棋。|literary
旗|qi2|旗帜；旗开得胜。|strength
鳍|qi2|鱼类和某些其他水生动物的类似翅或桨的附肢|water|low
枝|qi2|枝条；枝叶。||false
稽|qi3|囤积||false
乞|qi3|请求，希望|virtue|low
企|qi3|立，站立|virtue|low
岂|qi3|同恺。安乐|mountain,warm|low
起|qi3|起床|virtue|low
揭|qi4|标志||false
妻|qi4|周代宫中女御||false
气|qi4|气体的通称|season|low
迄|qi4|竟，毕竟，终究|virtue|low
弃|qi4|废，废除|virtue|low
汽|qi4|水枯竭|water|low
泣|qi4|眼泪|water|low
契|qi4|感情志趣投合的朋友|virtue|low
砌|qi4|门限，门槛|mountain|low
器|qi4|用具|warm|low
掐|qia1|用指甲按或切入|virtue|low
卡|qia3|适用于写或印刷的小纸片||false
恰|qia4|才，刚刚|virtue|low
洽|qia4|合，符合|water
千|qian1|数甚大；许许多多|virtue
迁|qian1|晋升或调动|virtue
牵|qian1|牵拉|virtue|low
铅|qian1|遵循，因袭|jade|low
签|qian1|用简单的文字拟具意见|flora,literary|low
前|qian2|引导|strength|low
钱|qian2|金属货币。特指铜钱|jade|low
钳|qian2|古刑具。束颈的铁圈|jade|low
乾|qian2|乾坤；乾阳。|celestial
潜|qian2|隐藏|water
黔|qian2|黔首；贵州。|virtue
浅|qian3|实行，实现|water|low
遣|qian3|派。派去|virtue|low
谴|qian3|旧时官吏被贬或谪戍|literary|low
欠|qian4|身体或身体的一部分稍微向上移动|virtue|low
嵌|qian4|张开的样子|mountain|low
歉|qian4|收成不好|virtue|low
纤|qian4|吝啬，花钱小气||false
将|qiang1|扶持，扶助||false
呛|qiang1|鸟啄食物||false
枪|qiang1|古时长柄有尖头的刺击武器|flora|low
腔|qiang1|曲调；曲谱|celestial|low
抢|qiang1|撞；碰；触||false
疆|qiang2|疆域；疆界。||false
墙|qiang2|门屏|mountain|low
强|qiang3|襁褓||false
抢|qiang3|撞；碰；触|virtue|low
呛|qiang4|鸟啄食物|warm|low
悄|qiao1|寂静无声|virtue,cool|low
跷|qiao1|竖起|virtue|low
敲|qiao1|推敲|virtue|low
锹|qiao1|掘土器，用于开沟掘土、铲取什物，|jade|low
雀|qiao1|小鸟，鸟||false
乔|qiao2|乔木；高乔。|flora,mountain
侨|qiao2|客居异地|virtue
憔|qiao2|脸色黄瘦面容|virtue|low
瞧|qiao2|偷看|virtue|low
翘|qiao2|翘楚；翘首。||false
悄|qiao3|寂静无声||false
巧|qiao3|机巧|virtue
雀|qiao3|小鸟，鸟||false
壳|qiao4|∶物的坚硬外皮||false
俏|qiao4|俏丽；俊俏。|warm
峭|qiao4|挺拔；直立而高耸|mountain|low
窍|qiao4|指耳鼻目口等器官之孔|virtue|low
翘|qiao4|翘楚；翘首。|bird,strength
撬|qiao4|以物拨开或挑开|virtue|low
切|qie1|台阶|strength|low
茄|qie2|荷梗|flora|low
且|qie3|此，这；今|virtue|low
契|qie4|感情志趣投合的朋友||false
砌|qie4|门限，门槛||false
切|qie4|台阶||false
怯|qie4|土气|virtue|low
窃|qie4|侵害；桅|virtue|low
亲|qin1|亲密。与疏相对|virtue
侵|qin1|侵犯进攻|virtue|low
钦|qin1|敬佩；恭敬|jade,virtue
芹|qin2|芹菜|flora
秦|qin2|秦地；秦岭。|mountain
禽|qin2|鸟类的总称|virtue|low
擒|qin2|捉拿|virtue|low
寝|qin3|搁置|virtue|low
氢|qing1|化学元素名|season|low
轻|qing1|轻车|strength|low
倾|qing1|倾塌，倒下|virtue|low
卿|qing1|卿相；温雅有礼。|virtue,literary
蜻|qing1|蜻蜓|bird|low
顷|qing3|田地面积的单位，等于一百亩|literary|low
请|qing3|情况，实情|literary|low
亲|qing4|亲密。与疏相对||false
庆|qing4|庆祝；喜庆。|warm
穷|qiong2|贫穷，缺乏衣食钱财|virtue|low
龟|qiu1|即金龟，亦称乌龟||false
丘|qiu1|山丘；丘陵。|mountain
蚯|qiu1|蚯蚓|bird|low
仇|qiu2|怨恨||false
囚|qiu2|俘获，在战争中抓获|virtue|low
求|qiu2|追求；求索。|virtue
球|qiu2|美玉；球琳。|jade
区|qu1|隐匿|virtue|low
曲|qu1|弯曲，不直||false
岖|qu1|道路险阻不平|mountain|low
驱|qu1|赶马|strength|low
屈|qu1|委屈；冤屈|virtue|low
躯|qu1|身孕|virtue|low
趋|qu1|步，行走|virtue|low
渠|qu2|水渠；渠道。|water
曲|qu3|弯曲，不直|virtue|low
取|qu3|斩获敌人的首级为取|virtue|low
娶|qu3|带进，接收|warm|low
去|qu4|除去；去掉|virtue|low
趣|qu4|催促；督促|virtue|low
圈|quan1|曲木做成的饮器|virtue|low
权|quan2|权衡；权柄。|virtue
拳|quan2|拳术；拳击|virtue|low
痊|quan2|病除；病愈|virtue|low
犬|quan3|古时特指大狗，后来犬、狗通名|virtue|low
劝|quan4|劝说|strength|low
券|quan4|古代用于买卖或债务的契据|strength|low
缺|que1|短少；缺乏|virtue|low
瘸|que2|本谓手或脚偏废的病◇特指腿脚有病|virtue|low
却|que4|除；去|virtue|low
雀|que4|小鸟，鸟|bird|low
确|que4|坚定；坚决|mountain,strength|low
鹊|que4|喜鹊|bird|low
裙|qun2|古指下裳，今专指裙子|virtue|low
燃|ran2|引火点着|warm
冉|ran3|逐渐，渐进。常作冉冉|virtue
染|ran3|传染，感染|flora|low
嚷|rang1|吵闹||false
瓤|rang2|瓜橘等内部包着种子的肉瓣|flora|low
嚷|rang3|吵闹|warm|low
壤|rang3|土壤|mountain|low
让|rang4|退让；谦让|literary,virtue|low
饶|rao2|富裕，丰足|warm|low
扰|rao3|叨扰，指受人财物、饮食|virtue|low
绕|rao4|环绕|literary|low
惹|re3|触犯；触动|virtue|low
若|re3|如同；像||false
热|re4|跟冷相对|warm|low
人|ren2|仁人；人才。|virtue
壬|ren2|天干的第九位，用以纪旬|virtue|low
任|ren2|信任；责任。||false
忍|ren3|抑制； 克制|virtue
刃|ren4|刀剑一类利器|strength|low
认|ren4|看作；认为|literary|low
任|ren4|信任；责任。|virtue
纫|ren4|缝纫； 缝补|literary|low
扔|reng1|摧残|virtue|low
仍|reng2|接续；连续|virtue|low
日|ri4|白天，白昼|celestial
戎|rong2|兵车|strength
绒|rong2|丝、棉纱或羊毛等的纺织物|literary
茸|rong2|鹿茸的简称|flora|low
荣|rong2|繁荣；荣耀。|flora
溶|rong2|溶溶；溶化。|water
蓉|rong2|芙蓉。|flora
榕|rong2|榕树；枝繁叶茂。|flora,warm
熔|rong2|熔炼；熔化。|warm
冗|rong3|多余|virtue|low
柔|rou2|温柔；柔美。|warm
揉|rou2|用手来回擦或搓|virtue|low
蹂|rou2|欺压、侵凌；侵袭|virtue|low
肉|rou4|指供食用的动物肉|virtue|low
蠕|ru2|虫类爬行的样子；微动貌|bird|low
女|ru3|女儿||false
汝|ru3|汝水；汝辈。|water
乳|ru3|喂奶|virtue|low
辱|ru3|或加手的形象|celestial|low
入|ru4|参加， 加入|virtue|low
褥|ru4|坐卧的垫具|virtue|low
软|ruan3|质地不硬，与硬相对。也作輭|strength|low
兑|rui4|通锐。锋利||false
锐|rui4|锐利；敏锐。|strength
闰|run4|副；偏；伪。对正而言|virtue|low
弱|ruo4|与强相对|strength|low
撒|sa1|抛开；放开|virtue|low
撒|sa3|抛开；放开||false
洒|sa3|东西散落|water|low
萨|sa4|佛教用语，即菩萨|flora|low
塞|sai1|填塞；充满|mountain|low
腮|sai1|水生动物的呼吸器官|celestial|low
思|sai1|思慕；想念||false
塞|sai4|填塞；充满||false
赛|sai4|赛会；比赛。|strength
参|san1|加入||false
三|san1|表示多数或多次|virtue|low
叁|san1|三的大写；数词三。|virtue|low
伞|san3|特指伞盖|virtue|low
散|san3|逍遥，懒散||false
散|san4|逍遥，懒散|virtue|low
桑|sang1|桑树；田园生机。|flora,warm
丧|sang1|丧仪；丧事||false
嗓|sang3|喉咙|warm|low
丧|sang4|丧仪；丧事|virtue|low
搔|sao1|骚扰；骚乱|virtue|low
骚|sao1|骚动；动乱|strength|low
臊|sao1|丑恶的||false
骚|sao3|骚动；动乱||false
扫|sao3|掠过|virtue|low
嫂|sao3|对年纪较大的已婚妇女的敬称|warm|low
臊|sao4|丑恶的|celestial|low
扫|sao4|掠过||false
梢|sao4|树木的枝条||false
塞|se4|填塞；充满||false
色|se4|颜色|virtue|low
涩|se4|味不甘滑|water|low
僧|seng1|指出家修行的男性佛教徒|virtue|low
杀|sha1|攻杀，激战|flora|low
沙|sha1|沙地；水边可耕之地|water
纱|sha1|轻细的丝麻织物|literary|low
刹|sha1|指佛寺|strength|low
砂|sha1|沙的俗字。指石之细碎者|mountain|low
煞|sha1|同杀。弄死，杀死||false
鲨|sha1|吹沙鱼|water|low
杉|sha1|亦称沙木，杉木，杉树||false
啥|sha2|甚么|warm|low
傻|sha3|头脑蠢笨，不谙事理，缺乏想象力|virtue|low
沙|sha4|沙地；水边可耕之地||false
煞|sha4|同杀。弄死，杀死|warm|low
厦|sha4|大厦。|mountain
霎|sha4|很短时间；瞬间|water|low
筛|shai1|用筛子过物|flora|low
色|shai3|颜色||false
晒|shai4|暴晒；晒干|celestial|low
删|shan1|削除；勾划掉|strength|low
杉|shan1|亦称沙木，杉木，杉树|flora
衫|shan1|古代指无袖头的开衩上衣|virtue|low
煽|shan1|扇火使炽盛|warm|low
扇|shan1|摇扇||false
栅|shan1|营寨|flora|low
掺|shan3|搓；涂抹||false
闪|shan3|闪光；闪烁。|celestial
陕|shan3|古地名。战国陕邑，在今河南省陕县|mountain|low
禅|shan4|表示与佛教有关的事物||false
单|shan4|单纯；单一。||false
扇|shan4|摇扇|virtue|low
擅|shan4|占有，据有|virtue|low
赡|shan4|周济；帮助|jade|low
伤|shang1|丧事；丧祭|virtue|low
商|shang1|商业；商议；商代。|literary
汤|shang1|菜汤||false
晌|shang3|正午或午时前后|celestial|low
赏|shang3|玩赏；欣赏|jade|low
上|shang3|上天；天帝||false
上|shang4|上天；天帝|virtue|low
尚|shang4|尊崇；崇尚；高尚。|virtue
捎|shao1|掠拂|virtue|low
烧|shao1|烘烤；曝晒|warm|low
梢|shao1|树木的枝条|flora|low
稍|shao1|事物的末端，枝叶|flora|low
勺|shao2|舀东西的器具，有柄|virtue|low
少|shao3|薄弱||false
捎|shao4|掠拂||false
稍|shao4|事物的末端，枝叶||false
少|shao4|少年；年轻。|season
哨|shao4|细狭尖锐|warm|low
召|shao4|召唤。用言语叫人来||false
奢|she1|过分|virtue|low
舌|she2|代指言语|virtue|low
蛇|she2|象征国君、君子等|bird|low
折|she2|曲折；弯|virtue|low
舍|she3|房屋|virtue|low
舍|she4|房屋||false
设|she4|创立，建立，开创|literary|low
社|she4|社稷；社会。|virtue
射|she4|用推力、压力或弹力送出|virtue|low
涉|she4|渡水|water|low
赦|she4|宽容|virtue|low
摄|she4|执；持|virtue|low
拾|she4|收敛，收集||false
谁|shei2|哪个人或哪些人||false
参|shen1|加入||false
申|shen1|申请；申明。|virtue
伸|shen1|伸展；伸张。|virtue
身|shen1|修身；立身。|virtue
呻|shen1|病痛时低声哼|warm|low
绅|shen1|束上带子，佩大带|literary|low
信|shen1|真实，不虚伪||false
什|shen2|十倍||false
神|shen2|神灵|virtue|low
甚|shen2|过分||false
沈|shen3|埋没|water|low
审|shen3|知道，知悉|virtue|low
婶|shen3|叔母。父亲弟弟的妻子|warm|low
肾|shen4|指外肾，即睾丸|celestial|low
甚|shen4|过分|warm|low
渗|shen4|水枯竭|water|low
慎|shen4|谨慎；慎重。|virtue
升|sheng1|上升；升腾。|strength
声|sheng1|音乐；诗歌|literary
牲|sheng1|供祭祀、盟誓及食用的家畜|virtue|low
笙|sheng1|笙歌；笙箫。|literary
甥|sheng1|女婿|virtue|low
胜|sheng1|胜利；胜景。||false
绳|sheng2|绳索；准绳。|literary
省|sheng3|王宫禁署，禁中|virtue|low
乘|sheng4|骑乘；乘坐。||false
甸|sheng4|古时都城的郭外称郊，郊外称甸||false
圣|sheng4|圣明；圣贤。|virtue,literary
胜|sheng4|胜利；胜景。|strength
盛|sheng4|盛大；丰盛。|strength
剩|sheng4|表示程度，相当于更、更加|strength|low
尸|shi1|神主牌，以木为之|virtue|low
失|shi1|错过|virtue|low
师|shi1|军队|virtue|low
施|shi1|施行；施予。|virtue
狮|shi1|狮子。|strength
湿|shi1|迟缓；不通畅|water|low
什|shi2|十倍|virtue|low
十|shi2|指十分；十份|virtue|low
石|shi2|石头；坚实。|strength
时|shi2|时辰|celestial
实|shi2|真实；诚实|virtue
拾|shi2|收敛，收集|virtue|low
蚀|shi2|损失；亏耗|bird|low
食|shi2|粮食|warm|low
硕|shi2|硕大；丰硕。||false
史|shi3|古官名。职别各异|warm|low
矢|shi3|以竹为箭，以木为矢|strength|low
使|shi3|派遣|virtue|low
驶|shi3|疾速|strength|low
屎|shi3|粪便。|virtue|low
士|shi4|将领|virtue|low
氏|shi4|旧时放在已婚妇女的姓后|virtue|low
世|shi4|父子相继为世。一代|virtue
市|shi4|集镇；城镇；城市|virtue|low
示|shi4|显现；表示|virtue|low
式|shi4|榜样；楷模|virtue|low
事|shi4|职守；政事；事务|virtue|low
侍|shi4|服侍、侍奉|virtue|low
势|shi4|力量；威力|strength|low
视|shi4|考察，察看，审察|virtue|low
试|shi4|尝试|literary|low
饰|shi4|装饰；修饰|warm|low
室|shi4|堂后之正室|virtue|low
恃|shi4|依恃；凭借。|virtue|low
拭|shi4|擦拭；拭目。|virtue|low
是|shi4|对的，正确的|celestial|low
柿|shi4|柿树|flora|low
适|shi4|适宜；舒适。|virtue
逝|shi4|死亡，去世|virtue|low
释|shi4|解释|virtue|low
嗜|shi4|嗜好；喜爱。|warm|low
誓|shi4|接受爵位|literary|low
似|shi4|似乎||false
泽|shi4|水深的湖泽或水草丛杂的湖泽||false
收|shou1|收拾；收取|virtue|low
熟|shou2|谷物、水果或微生物等成熟||false
手|shou3|专司某事或擅长某种技艺的人|virtue|low
寿|shou4|年寿，寿限|virtue
受|shou4|蒙受；遭受|virtue|low
兽|shou4|四足的哺乳动物，多指野兽|virtue|low
售|shou4|酬谢|warm|low
授|shou4|同本堰|virtue|low
瘦|shou4|与胖、肥相对|virtue|low
抒|shu1|表达；发泄|virtue
叔|shu1|叔父；叔伯。|virtue
枢|shu1|中枢；枢纽。|strength
殊|shu1|特殊；殊荣。|virtue
梳|shu1|用梳整理头发|flora|low
淑|shu1|善良；美好。|virtue
输|shu1|交出；缴纳|strength|low
蔬|shu1|种菜|flora|low
赎|shu2|用财物脱罪或抵免过失|jade|low
熟|shu2|谷物、水果或微生物等成熟|warm|low
术|shu2|街道、道路||false
朱|shu2|指朱色的物品||false
属|shu3|种类。亦特指牲类|virtue|low
暑|shu3|炎热的日子|celestial|low
署|shu3|签名，签署|virtue|low
蜀|shu3|蜀地；巴蜀。|mountain
鼠|shu3|通皃，忧；病|virtue|low
薯|shu3|薯类作物的统称|flora|low
数|shu3|数目；数量||false
束|shu4|约束；限制|flora|low
述|shu4|陈述，记叙|virtue
树|shu4|树木；树立。|flora
竖|shu4|纵。与横相反|virtue|low
庶|shu4|庶民；庶几。|virtue
数|shu4|数目；数量|virtue|low
墅|shu4|田庐；村舍。田间土舍|mountain|low
漱|shu4|洗涤|water|low
刷|shua1|清除；洗雪|cool,strength|low
耍|shua3|玩耍，游玩；消闲取乐|virtue|low
刷|shua4|清除；洗雪||false
衰|shuai1|古代用粗麻布制成的毛边丧服|virtue|low
摔|shuai1|甩开，摆脱|virtue|low
甩|shuai3|扔；抛开|virtue|low
率|shuai4|法令；条例||false
帅|shuai4|将帅；元帅。|strength
蟀|shuai4|蟋蟀|bird|low
拴|shuan1|拴住；拴马。|strength
栓|shuan1|门栓；螺栓。|strength
涮|shuan4|欺骗或哄骗|water|low
双|shuang1|双倍；成双。|warm
爽|shuang3|畅快；舒适|warm
谁|shui2|哪个人或哪些人|literary|low
水|shui3|特指河流|water
税|shui4|一切赋税|flora|low
睡|shui4|睡着|virtue|low
说|shui4|谈说，讲说||false
吮|shun3|用口含吸，缓饮|warm|low
顺|shun4|顺遂；和顺。|virtue,warm
瞬|shun4|眼珠转动|virtue|low
说|shuo1|谈说，讲说|literary|low
数|shuo4|数目；数量||false
烁|shuo4|闪烁；烁亮。|warm
硕|shuo4|硕大；丰硕。|strength
丝|si1|纤细如丝的东西|virtue
司|si1|主持；司法。|virtue
私|si1|中国古时女子称姊妹之夫为私|flora|low
斯|si1|斯文。|literary
嘶|si1|虫鸟声凄切幽咽的|warm|low
撕|si1|零购布帛|virtue|low
死|si3|为某事或某人而牺牲性命|virtue|low
伺|si4|观察|virtue|low
食|si4|粮食||false
巳|si4|地支的第六位|virtue|low
四|si4|∶工尺谱中音名之一|virtue|low
似|si4|似乎|virtue|low
寺|si4|佛教的庙宇|virtue|low
祀|si4|祭祀|virtue|low
饲|si4|饲养，给动物吃东西|warm|low
肆|si4|古时处死刑后陈尸示众|virtue|low
耸|song3|高起；矗立|virtue|low
讼|song4|打官司|literary|low
宋|song4|周代诸侯国名|virtue|low
诵|song4|述说，发表详细内容|literary|low
送|song4|送行；送别|virtue|low
颂|song4|歌颂；颂扬。|literary
搜|sou1|聚集|virtue|low
艘|sou1|海中大船|strength|low
嗽|sou4|他干嗽了几声|warm|low
苏|su1|苏醒；复苏。|flora
酥|su1|搽脸的油脂|virtue|low
俗|su2|佛教称尘世间为俗，与出家相对|virtue|low
苏|su4|苏醒；复苏。||false
诉|su4|告诉，说给人听|literary|low
速|su4|速度；迅速。|strength
宿|su4|值宿守卫，守夜||false
粟|su4|今北方通称谷子|flora
塑|su4|呆愣|mountain|low
溯|su4|追朔|water|low
缩|su4|收缩||false
酸|suan1|像醋一样的气味或味道|virtue|low
蒜|suan4|指这种植物的鳞茎|flora|low
算|suan4|推测；料想|flora|low
尿|sui1|排出小便||false
虽|sui1|即使…也；纵使|bird|low
隋|sui2|城墙倒塌|mountain|low
遂|sui2|顺遂；遂愿。|virtue
髓|sui3|精华|virtue|low
祟|sui4|指行动诡密，不正当|virtue|low
遂|sui4|顺遂；遂愿。||false
碎|sui4|因极度忧伤而感到心痛难忍|mountain|low
隧|sui4|地道|mountain|low
孙|sun1|跟孙子同辈的同性或异性亲属|virtue|low
损|sun3|与益相对|virtue|low
笋|sun3|竹子初从土里长出的嫩芽|flora|low
唆|suo1|∶用嘴吮吸|warm|low
梭|suo1|梭子|flora|low
嗦|suo1|嗦suō 1.见哆嗦|warm|low
缩|suo1|收缩|literary|low
所|suo3|所假借为处。处所；地方|virtue|low
索|suo3|求索；绳索。|literary
琐|suo3|镂玉为连环叫琐|jade|low
锁|suo3|置于可启闭的器物上|jade|low
他|ta1|古代、近代泛指男女及一切事物|virtue|low
它|ta1|称代人以外的事物|virtue|low
她|ta1|称代美好的事物或者自己所敬重、热爱和喜欢的事物|warm,virtue|low
塌|ta1|因凹陷而倒塌|mountain|low
踏|ta1|边走边唱；打拍||false
塔|ta3|宝塔；塔楼。|mountain
拓|ta4|举，托起||false
踏|ta4|边走边唱；打拍|virtue|low
蹋|ta4|同踏。践踏；踩|virtue|low
胎|tai1|怀孕或生育的次数|celestial|low
台|tai1|台阁；台阶。||false
苔|tai1|长有苔藓类植物的东西或地方||false
台|tai2|台阁；台阶。|mountain
抬|tai2|高举，使升高|virtue|low
苔|tai2|长有苔藓类植物的东西或地方|flora|low
太|tai4|身分最高或辈数更高的|virtue|low
汰|tai4|淘洗。通汏|water|low
态|tai4|情状，神情|virtue|low
贪|tan1|贪婪。多欲而不知满足|jade|low
摊|tan1|摊派|virtue|low
滩|tan1|等级|water|low
瘫|tan1|与疾病有关|virtue|low
弹|tan2|形状像弹丸的东西||false
坛|tan2|像坛之物|mountain|low
谈|tan2|相处融洽|literary|low
痰|tan2|呼吸道分泌而由口、鼻腔排出的粘液|virtue|low
谭|tan2|绵延相及|literary|low
潭|tan2|深潭；水潭。|water
檀|tan2|香木檀的省称，即檀香|flora|low
毯|tan3|厚实有毛绒的织品|virtue|low
叹|tan4|赞叹，赞美|warm|low
炭|tan4|像炭的东西|warm|low
探|tan4|探求|virtue|low
碳|tan4|一种主要呈四价的非金属元素|mountain|low
汤|tang1|菜汤|water|low
趟|tang1|遍，次。专指走动的次数||false
唐|tang2|广大|warm|low
堂|tang2|厅堂；正屋。|virtue
塘|tang2|池塘。|water
膛|tang2|器物中空的部分|celestial|low
糖|tang2|糖果；糖块|flora|low
倘|tang3|表示假设。同黨、儻|virtue|low
淌|tang3|迅速流动|water|low
躺|tang3|停止劳动或努力|virtue|low
烫|tang4|以热水温物|warm|low
趟|tang4|遍，次。专指走动的次数|virtue|low
叨|tao1|话多||false
涛|tao1|像波涛一样的声音|water
掏|tao1|同搯。挖取|virtue|low
滔|tao1|滔滔；滔天。|water
逃|tao2|逃避，回避|virtue|low
陶|tao2|陶然；陶铸。|warm
淘|tao2|淘洗；淘汰。|water
萄|tao2|如葡萄|flora|low
跳|tao2|越过障碍||false
讨|tao3|讨伐；诛戮|literary|low
套|tao4|指已成固定格式的办法或语言|virtue|low
特|te4|特别；独特。|virtue
疼|teng2|疼爱|virtue|low
誊|teng2|照原稿抄写清楚|literary|low
藤|teng2|藤蔓。|flora
剔|ti1|挑；拔|strength|low
梯|ti1|形状像梯的分级的东西|flora|low
踢|ti1|用脚特别是足尖触击|virtue|low
体|ti1|身体；体魄。||false
啼|ti2|叫鸣|warm|low
提|ti2|紧紧拿着；执持|virtue|low
题|ti2|物品的前端或顶端|literary,virtue|low
蹄|ti2|指牲口|virtue|low
体|ti3|身体；体魄。|virtue
弟|ti4|弟弟||false
屉|ti4|鞍屉，马鞍垫子|virtue|low
剃|ti4|用刀刮去毛发|strength|low
涕|ti4|鼻涕|water|low
惕|ti4|忧伤|virtue|low
替|ti4|停止|virtue|low
天|tian1|天空；天地。|celestial
添|tian1|增添。|warm
佃|tian2|佃户；耕作。||false
甸|tian2|古时都城的郭外称郊，郊外称甸||false
田|tian2|后作佃。耕作|mountain
甜|tian2|像糖或蜜的味道|warm
填|tian2|填写，写入|mountain|low
舔|tian3|使…湿润|virtue|low
挑|tiao1|用肩膀担|virtue|low
条|tiao1|一般长条形的物体||false
调|tiao2|盐或提拔官吏||false
条|tiao2|一般长条形的物体|flora|low
迢|tiao2|高貌，高峻貌|mountain|low
挑|tiao3|用肩膀担||false
跳|tiao4|越过障碍|virtue|low
帖|tie1|安定|virtue|low
贴|tie1|贴补。补偿，补益|jade|low
帖|tie3|安定||false
铁|tie3|钢铁；铁石。|strength
帖|tie4|安定||false
厅|ting1|官署中听事问案之处|virtue|low
廷|ting2|官署。地方官吏办事的地方|virtue
亭|ting2|亭台；亭亭。|literary
庭|ting2|堂阶前的地坪|virtue
停|ting2|停留，暂时居住|virtue
蜓|ting2|蜓diàn 1.见蝘蜓|bird|low
挺|ting3|举起|virtue
艇|ting3|大船|strength|low
通|tong1|通往|virtue|low
洞|tong2|洞天；幽深。||false
彤|tong2|彤云；彤红。|warm
铜|tong2|铜镜；青铜。|jade,strength
童|tong2|小孩。年幼未成年的人|virtue
瞳|tong2|瞳孔；瞳仁。|virtue
统|tong3|世代相继的系统|literary
捅|tong3|用棍、棒、刀或枪等戳刺|virtue|low
桶|tong3|古量器名。方形斛|flora|low
筒|tong3|捕鱼的器具|flora|low
通|tong4|通往||false
同|tong4|相同，一样，共同||false
痛|tong4|痛恨|virtue|low
偷|tou1|浅薄；不厚道|virtue|low
愉|tou1|愉悦；欢愉。||false
头|tou2|发，毛发|virtue|low
投|tou2|跳进去；投入|virtue|low
透|tou4|穿过，透过|virtue|low
凸|tu1|高出|virtue|low
秃|tu1|山无草木|flora|low
突|tu1|狗从穴中突然而出|virtue|low
图|tu2|图画；宏图。|literary
徒|tu2|步兵，兵卒|virtue|low
涂|tu2|道路。也作途|water|low
屠|tu2|大屠杀，残杀|virtue|low
土|tu3|沉积于地面上的泥沙混合物|mountain
吐|tu3|口说，陈说|warm|low
吐|tu4|口说，陈说||false
兔|tu4|传说中的月中玉兔|virtue|low
揣|tuan2|藏入；塞进||false
团|tuan2|团圆；团聚。|warm
推|tui1|使工具向前移动进行工作|virtue|low
弟|tui2|弟弟||false
颓|tui2|本作跕|literary|low
腿|tui3|胫和股的总称|celestial|low
退|tui4|退却；打退|virtue|low
蜕|tui4|蝉、蛇等脱皮。亦谓鸟换羽|bird|low
褪|tui4|消除|virtue|low
吞|tun1|吞并，消灭掉|warm|low
囤|tun2|用木栅围成||false
屯|tun2|聚集|virtue|low
豚|tun2|小猪；豚儿。|virtue|low
臀|tun2|屁股|celestial|low
褪|tun4|消除||false
拖|tuo1|牵累，牵制|virtue|low
脱|tuo1|离；脱离|celestial|low
驮|tuo2|挨；受|strength|low
驼|tuo2|也单用作驼|strength|low
鸵|tuo2|鸵鸟|bird|low
妥|tuo3|适当，合适|warm|low
椭|tuo3|指某些长圆形的容器|flora|low
唾|tuo4|吐唾沫|warm|low
凹|wa1|周围高，中间低||false
挖|wa1|探索；深入研究|virtue|low
洼|wa1|低凹的地方|water|low
蛙|wa1|淫邪|bird|low
哇|wa1|呕吐，使胃内容物通过口腔吐出|warm|low
娃|wa2|小孩子；尤指仍在怀抱中的年幼孩子|warm
瓦|wa3|屋瓦|virtue|low
瓦|wa4|屋瓦||false
袜|wa4|抹胸。俗称肚兜|virtue|low
歪|wai1|不正当；不正派；不正直|virtue|low
外|wai4|与内或里相对|celestial|low
弯|wan1|弯曲；弯月。|strength
湾|wan1|海湾|water
豌|wan1|豌豆|flora|low
丸|wan2|特指弹丸|virtue|low
完|wan2|坚固|virtue|low
玩|wan2|玩耍；玩弄|jade|low
顽|wan2|愚顽之人；顽固派|literary|low
宛|wan3|宛转；宛然。|warm
挽|wan3|悼念死者|virtue|low
婉|wan3|柔美|warm
惋|wan3|中医学术语。内热|virtue|low
晚|wan3|夜晚|celestial
皖|wan3|春秋时国名|season|low
碗|wan3|一种圆形凹心盛食品的器具|mountain|low
蔓|wan4|蔓延；滋长||false
万|wan4|万千；万方。|virtue
腕|wan4|和臂相仿的任何某些突起物|celestial|low
汪|wang1|汪洋；水汪。|water
亡|wang2|丢失；丧失|virtue|low
王|wang2|殷周时代对帝王的称呼|jade|low
网|wang3|多孔而状如网的东西|virtue|low
枉|wang3|邪恶|flora|low
王|wang4|殷周时代对帝王的称呼||false
妄|wang4|虚妄，极不真实|warm|low
忘|wang4|玩忽，怠忽|virtue|low
旺|wang4|兴旺；旺盛。|warm,strength
危|wei1|恐惧；忧惧|virtue|low
威|wei1|威力；威风。|strength
偎|wei1|依傍，紧靠着|virtue|low
巍|wei1|巍峨；高巍。|mountain
委|wei1|委任；委婉。||false
围|wei2|包围|virtue
违|wei2|避开|virtue|low
帷|wei2|用幕布遮挡|virtue|low
维|wei2|维系；维纲。|literary
为|wei2|假借为伪。做，作，干，搞|virtue|low
伪|wei3|人为；矫饰|virtue|low
尾|wei3|末端，末尾|virtue|low
纬|wei3|经纬；纬线。|literary
苇|wei3|芦苇。|flora
委|wei3|委任；委婉。|warm
萎|wei3|病危|flora|low
卫|wei4|护卫；保卫。|strength
为|wei4|假借为伪。做，作，干，搞||false
未|wei4|未来；未央。|season
位|wei4|位置；方位|virtue
味|wei4|食物|warm|low
畏|wei4|敬畏；畏敬。|virtue
胃|wei4|星名|celestial|low
尉|wei4|尉官；校尉。|strength
谓|wei4|评论|literary|low
喂|wei4|喂食|warm|low
猬|wei4|兽名。即刺猬|virtue|low
蔚|wei4|蔚蓝；蔚然。|celestial,flora
慰|wei4|安慰；慰藉。|warm
魏|wei4|阙宫门的台观|virtue|low
遗|wei4|遗漏，因疏忽而漏掉||false
瘟|wen1|神情呆滞、没有生气的|virtue|low
纹|wen2|物品表面的皱痕，或指水面涟漪|water,literary
闻|wen2|听说；知道|virtue
蚊|wen2|蚊子|bird|low
吻|wen3|嘴；口|warm|low
紊|wen3|繁盛|literary|low
纹|wen4|物品表面的皱痕，或指水面涟漪||false
翁|weng1|祖父|bird|low
嗡|weng1|飞虫特有的持续刺耳声或很快的不规则的震动产生的声音|warm|low
涡|wo1|水流旋转形成中间低洼的地方|water|low
窝|wo1|鸟兽昆虫的巢穴|virtue|low
蜗|wo1|动物名，蜗牛|bird|low
我|wo3|自称；自己|strength|low
沃|wo4|大水量的灌溉|water|low
卧|wo4|躺；卧而不眠|virtue|low
握|wo4|屈指成拳|virtue|low
恶|wu1|通乌，疑问。哪，何，怎么路||false
乌|wu1|古代神话传说太阳中有三足乌|virtue|low
污|wu1|浊水池。一说小水坑|water|low
呜|wu1|口中舒发而出的声音，叹息声。悲叹|warm|low
巫|wu1|中国古代医师也称巫|virtue|low
屋|wu1|古代半地穴式住室建筑的顶部覆盖|virtue|low
诬|wu1|欺骗|literary|low
亡|wu2|丢失；丧失||false
无|wu2|哲学范畴|virtue|low
吴|wu2|∶大|warm|low
吾|wu2|我们|warm
芜|wu2|丛生的杂草|flora|low
梧|wu2|木名。梧桐|flora
蜈|wu2|蜈蚣|bird|low
捂|wu2|抵触||false
五|wu3|四加一的和|virtue|low
午|wu3|地支的第七位|virtue|low
伍|wu3|伍列；队伍。|strength
侮|wu3|欺负|virtue|low
捂|wu3|抵触|virtue|low
鹉|wu3|见鹦鹉。鸟名|bird|low
舞|wu3|钟体的顶部|celestial|low
恶|wu4|通乌，疑问。哪，何，怎么路||false
乌|wu4|古代神话传说太阳中有三足乌||false
勿|wu4|古代大夫、士所建旗帜|virtue|low
务|wu4|务实；事务。|strength
戊|wu4|天干的第五位。方位属中央|strength|low
物|wu4|物件，东西|virtue|low
误|wu4|谬误；错误|literary|low
悟|wu4|觉醒；觉悟。通寤。睡醒|virtue|low
雾|wu4|接近地面的空气中的水蒸气|water|low
腊|xi1|腊月；腊日。||false
栖|xi1|停留||false
吸|xi1|张开口吸，急饮|warm|low
西|xi1|往西走；向西去|virtue|low
希|xi1|希望；希冀。|virtue
昔|xi1|假借为昨。从前；过去|celestial|low
析|xi1|分析，辨认|flora|low
息|xi1|叹气|virtue|low
牺|xi1|指伏羲氏|virtue|low
悉|xi1|全都，全部|virtue|low
惜|xi1|珍惜；爱惜。|virtue
晰|xi1|清晰；明晰。|celestial
犀|xi1|犀牛|virtue|low
稀|xi1|少，不多|flora|low
锡|xi1|锡金属。|jade
熄|xi1|消亡；平息；止|warm|low
嘻|xi1|表示悲痛、或斥责|warm|low
膝|xi1|膝头|celestial|low
蟋|xi1|蟋蟀的简称|bird|low
习|xi2|反覆练习，钻研|virtue
席|xi2|席次；席上。|virtue
袭|xi2|衣一套为一袭|virtue|low
媳|xi2|儿子的配偶|warm|low
洒|xi3|东西散落||false
洗|xi3|假借为洒。用水涤除污垢|water|low
徙|xi3|改变，变化|virtue|low
戏|xi4|将军的旌旗|strength|low
系|xi4|拴；绑|literary|low
隙|xi4|也泛指孔穴、空隙|mountain|low
虾|xia1|动物名|bird|low
瞎|xia1|双目失明|virtue|low
夹|xia2|栽插在物体的两边||false
匣|xia2|一般呈方形，大的叫箱，小的叫匣|virtue|low
侠|xia2|侠客|virtue
峡|xia2|峡谷；海峡。|mountain
狭|xia2|心胸狭窄|virtue|low
暇|xia2|悠闲|celestial|low
辖|xia2|侍卫|strength|low
唬|xia4|虚张声势、夸大事实来吓人||false
厦|xia4|大厦。||false
下|xia4|指下巴|virtue|low
吓|xia4|用以表示不满|warm|low
掺|xian1|搓；涂抹||false
仙|xian1|仙女|virtue
先|xian1|先锋；先贤。|strength
纤|xian1|吝啬，花钱小气|literary|low
掀|xian1|撩起；揭开|virtue|low
闲|xian2|马厩，关养马的地方|virtue|low
贤|xian2|贤德；贤才。|virtue
咸|xian2|咸和；咸宁。|warm
衔|xian2|口含|virtue|low
嫌|xian2|避忌|warm|low
洗|xian3|假借为洒。用水涤除污垢||false
鲜|xian3|假借为鱻。鲜鱼，活鱼||false
险|xian3|地势险峻、危险|mountain|low
见|xian4|进见；会见||false
县|xian4|系挂|virtue|low
现|xian4|显现；现在。|jade
线|xian4|细长如线的东西|literary|low
限|xian4|限制；限定|mountain|low
宪|xian4|宪法；宪章。|literary
陷|xian4|陷溺，淹没|mountain|low
馅|xian4|被包裹的人或物|warm|low
羡|xian4|羡慕；欣羡。|virtue
献|xian4|下对上、卑对尊的进献|virtue
腺|xian4|生物体内能分泌某些化学物质的组织|celestial|low
乡|xiang1|乡假借为行政区域名|virtue|low
相|xiang1|交互；互相||false
香|xiang1|气味美好|warm
厢|xiang1|厢房，在正房前面两侧的房屋|virtue|low
箱|xiang1|旁◇作厢|flora|low
镶|xiang1|铸铜铁器模型的瓤子|jade|low
降|xiang2|投降||false
详|xiang2|详细说明|literary
祥|xiang2|吉祥；祥瑞。|warm
羊|xiang2|吉利◇作祥||false
享|xiang3|人享受福禄|virtue
响|xiang3|声音|warm
想|xiang3|思考，思索|virtue|low
相|xiang4|相貌；辅佐。|virtue
巷|xiang4|矿坑里的通道|virtue|low
项|xiang4|人颈|literary|low
象|xiang4|象牙的省称|virtue|low
像|xiang4|模拟|virtue|low
橡|xiang4|栎树的别名|flora|low
宵|xiao1|前半夜|virtue
消|xiao1|消失，完全不存在|water|low
萧|xiao1|萧然；萧洒。|cool,flora
硝|xiao1|硝石|mountain|low
销|xiao1|溶化；消融|jade|low
箫|xiao1|笙箫；箫声。|literary
嚣|xiao1|害臊；害羞|warm|low
肖|xiao1|肖像；肖似。|virtue
削|xiao1|曲刀，书刀，削刀||false
淆|xiao2|彻底地搀和；搅合|water|low
小|xiao3|年幼|virtue|low
俏|xiao4|俏丽；俊俏。||false
孝|xiao4|孝道；孝亲。|virtue
肖|xiao4|肖像；肖似。||false
哮|xiao4|呼喊||false
效|xiao4|效法；效果。|virtue
校|xiao4|古代刑具。枷械的统称|flora|low
笑|xiao4|讥笑；嘲笑|flora|low
啸|xiao4|长啸；呼啸。|strength
些|xie1|细小|virtue|low
歇|xie1|停止，中止活动|virtue|low
蝎|xie1|毒虫名。也称钳蝎。节肢动物门，蜘蛛纲，蜘蛛亚纲，蝎目|bird|low
协|xie2|合；共同|virtue
邪|xie2|不正当，不正派|mountain|low
胁|xie2|肋骨|celestial|low
挟|xie2|挟制||false
斜|xie2|舀出|virtue|low
携|xie2|拿着，持|virtue|low
鞋|xie2|鞋子|strength|low
叶|xie2|树叶；枝叶。||false
写|xie3|输送|virtue|low
血|xie3|血液||false
解|xie4|解体，离散||false
契|xie4|感情志趣投合的朋友||false
泄|xie4|假借为歇。发泄；发散|water|low
泻|xie4|倾泻|water|low
卸|xie4|解除；解下。亦指褪下；脱下|virtue|low
屑|xie4|研成碎末|virtue|low
械|xie4|器械，用具|flora|low
谢|xie4|用言辞委婉地推辞拒绝|literary|low
懈|xie4|疲困；松散|virtue|low
蟹|xie4|螃蟹|bird|low
芯|xin1|花芯；灯芯。|flora
辛|xin1|辛勤；辛苦。|virtue
锌|xin1|一种蓝白色的晶状的二价金属元素|jade,cool|low
薪|xin1|薪火；生生不息。|flora,warm
馨|xin1|馨香；温馨。|warm
芯|xin4|花芯；灯芯。||false
衅|xin4|缝隙；裂痕|virtue|low
猩|xing1|猩猩的省称|virtue|low
腥|xing1|病猪肉中像星或米粒的息肉|celestial|low
兴|xing1|兴起；兴盛。|strength
刑|xing2|惩罚|strength|low
形|xing2|形体，实体|literary|low
型|xing2|楷模|mountain|low
省|xing3|王宫禁署，禁中||false
醒|xing3|醒悟|virtue
兴|xing4|使兴盛；流行||false
姓|xing4|命，性命|warm|low
幸|xing4|幸运；幸福。|warm
性|xing4|事物的性质或性能|virtue|low
凶|xiong1|凶恶可怕|virtue|low
兄|xiong1|亲戚中同辈男性中年龄比自己大的|virtue|low
匈|xiong1|胸的古字|virtue|low
汹|xiong1|声音大；喧嚣|water|low
熊|xiong2|古代以熊皮为饰的箭靶|warm|low
休|xiu1|停止、中止或结束|virtue
羞|xiu1|推荐；进用|virtue|low
宿|xiu3|值宿守卫，守夜|virtue|low
朽|xiu3|衰老；衰弱|flora|low
臭|xiu4|气味之总名||false
宿|xiu4|值宿守卫，守夜||false
绣|xiu4|锦绣；刺绣。|literary
袖|xiu4|袖口|virtue|low
锈|xiu4|金属表面所生的氧化物|jade|low
嗅|xiu4|用鼻子辨别气味|warm|low
吁|xu1|叹息，叹气||false
戌|xu1|又与天干相配用以纪年或纪日|celestial,strength|low
须|xu1|流苏|literary|low
虚|xu1|谦虚；虚怀。|virtue
墟|xu1|废址，故城|mountain|low
需|xu1|需要|water|low
邪|xu2|不正当，不正派||false
徐|xu2|徐徐；徐缓。|virtue
休|xu3|停止、中止或结束||false
许|xu3|同意，赞同|literary|low
畜|xu4|饲养||false
序|xu4|秩序；序文。|virtue
叙|xu4|同序。书籍的序言|literary
恤|xu4|体恤|virtue|low
绪|xu4|头绪，开端|literary
酗|xu4|撒酒疯|virtue|low
婿|xu4|成年男子的美称|warm|low
絮|xu4|像絮一样轻柔、洁白的东西|literary
蓄|xu4|畜养|flora|low
轩|xuan1|轩昂；轩窗。|literary,strength
宣|xuan1|宣扬；宣布。|virtue
喧|xuan1|显赫|warm|low
县|xuan2|系挂||false
悬|xuan2|牵挂；挂念|virtue|low
旋|xuan2|旋转；凯旋。|strength
选|xuan3|选择；精选。|virtue
癣|xuan3|由真菌所引起的人类和家畜皮肤、毛发或趾甲的接触性传染|virtue|low
券|xuan4|古代用于买卖或债务的契据||false
旋|xuan4|打转转的||false
炫|xuan4|炫丽；炫彩。|celestial
绚|xuan4|绚丽；绚烂。|warm,literary
渲|xuan4|用水墨或淡色颜料涂染画面|water,literary|low
削|xue1|曲刀，书刀，削刀|strength|low
靴|xue1|高到踝骨以上的长筒鞋|strength|low
薛|xue1|一种草本植物，即赖蒿|flora|low
穴|xue2|墓穴；埋棺材的坑|virtue|low
血|xue4|血液|virtue|low
勋|xun1|功勋；勋业。|strength
熏|xun1|烧灼，火烫|warm|low
旬|xun2|十岁为一旬，多指人的年龄|celestial|low
巡|xun2|审视；细看|virtue|low
询|xun2|查考；打听|literary
循|xun2|按照；依序|virtue
孙|xun4|跟孙子同辈的同性或异性亲属||false
熏|xun4|烧灼，火烫||false
训|xun4|训练；讲习|literary
讯|xun4|询问；请教|literary
汛|xun4|防守|water|low
迅|xun4|迅速；迅捷。|strength
驯|xun4|亦指鸟兽驯服|strength|low
逊|xun4|辞让；退让|virtue
殉|xun4|献身或丧生|virtue|low
丫|ya1|像树枝的分叉|virtue|low
压|ya1|从上往下增加重力，加压|virtue|low
押|ya1|抵押，典当|virtue|low
鸦|ya1|黑色|bird|low
鸭|ya1|水禽名。俗称鸭子|bird|low
哑|ya1|乌鸦之类的叫声||false
雅|ya1|正确；合乎规范||false
呀|ya1|表示惊异|warm|low
邪|ya2|不正当，不正派||false
牙|ya2|形状像齿的东西|virtue|low
芽|ya2|新芽；萌芽。|flora
崖|ya2|事物的边际；界域|mountain|low
涯|ya2|边际；极限|water
衙|ya2|旧时官署之称|virtue|low
哑|ya3|乌鸦之类的叫声|warm|low
压|ya4|从上往下增加重力，加压||false
轧|ya4|排挤，倾轧||false
亚|ya4|亚洲；亚于。|virtue
讶|ya4|诧异，感到意外|literary|low
烟|yan1|烟状物；云气；雾气|warm|low
淹|yan1|浸泡|water|low
焉|yan1|鸟名|warm|low
咽|yan1|填塞；充塞|warm|low
燕|yan1|白颈鸦||false
殷|yan1|殷实；殷勤。||false
铅|yan2|遵循，因袭||false
严|yan2|严厉；严肃|virtue
沿|yan2|遵循；因袭|water|low
炎|yan2|炎阳；炎热。|warm
研|yan2|研究；探讨|mountain
盐|yan2|由金属离子和酸根离子组成的化合物|virtue|low
阎|yan2|内巷内的门，亦指里巷|virtue|low
蜒|yan2|蜿蜒，龙蛇爬行|bird|low
颜|yan2|颜色；容颜。|literary
檐|yan2|某些器物上形状像屋檐的部分|flora|low
衍|yan3|水循河道流汇于海|water
掩|yan3|乘其不备|virtue|low
眼|yan3|眼睛|virtue|low
演|yan3|演绎；演漾。|water
研|yan4|研究；探讨||false
厌|yan4|一物压在另一物上|virtue|low
咽|yan4|填塞；充塞||false
唁|yan4|对遭遇非常变故者的慰问◇多指对遭遇丧事的人的慰问|warm|low
宴|yan4|宴席；宴乐。|warm
艳|yan4|鲜艳；明艳。|warm
验|yan4|证据；凭证|strength|low
谚|yan4|慰问死者家属|literary|low
堰|yan4|田边用以分界或防止水土流失的土埂|mountain,water
焰|yan4|火光；辉光|warm
央|yang1|中央；未央。|virtue
殃|yang1|使受祸害败坏；为害|virtue|low
秧|yang1|稻的初生幼苗|flora|low
鸯|yang1|见鸳鸯|bird|low
详|yang2|详细说明||false
扬|yang2|飞扬；昂扬。|strength
羊|yang2|吉利◇作祥|warm|low
杨|yang2|杨柳科杨属植物的泛称|flora|low
仰|yang3|跟俯相对|virtue|low
养|yang3|供养，奉养；抚育|virtue
氧|yang3|一种非金属元素|season|low
痒|yang3|某些难以抑制的强烈愿望|virtue|low
样|yang4|假借为像。式样|flora|low
漾|yang4|古水名。漾水|water|low
么|yao1|用在句末，表示疑问或反诘的语气||false
夭|yao1|短命，早死。未成年而死|virtue|low
吆|yao1|大声喊。通常指大声斥责人，大声驱赶牲口，高声叫卖，喊|warm|low
妖|yao1|怪诞，怪异|warm|low
腰|yao1|肾脏的俗称|celestial|low
邀|yao1|逢，遇到|virtue|low
要|yao1|腰的古字||false
约|yao1|盟约；相期的诺言||false
侥|yao2|贪求不止|virtue|low
陶|yao2|陶然；陶铸。||false
尧|yao2|上古圣王；高远明德。|virtue,strength
肴|yao2|做熟的鱼肉等|celestial|low
姚|yao2|长|warm|low
窑|yao2|指陶瓷器|virtue|low
谣|yao2|流言|literary|low
摇|yao2|动摇|virtue|low
咬|yao3|吐字发音|warm|low
舀|yao3|用瓢、勺等取东西|virtue|low
乐|yao4|喜悦；愉快||false
疟|yao4|残暴；灾害||false
药|yao4|指某些有化学作用的物质|flora|low
要|yao4|腰的古字|virtue|low
钥|yao4|钥匙，开锁的工具|jade|low
椰|ye1|椰子树|flora|low
邪|ye2|不正当，不正派||false
爷|ye2|也作耶|warm|low
也|ye3|亦表示同样|virtue|low
冶|ye3|陶冶；冶金。|warm
喝|ye4|用以表示惊讶。同嗬||false
射|ye4|用推力、压力或弹力送出||false
咽|ye4|填塞；充塞||false
业|ye4|事业；功业。|virtue
叶|ye4|树叶；枝叶。|flora
页|ye4|书页|literary|low
液|ye4|在动物或植物体内的非固态物质|water|low
腋|ye4|腋状物|celestial|low
拽|ye4|同曳、抴。拉，牵引◇作曳||false
伊|yi1|伊人；伊水。|water
衣|yi1|服装的通称∠上衣下裳而言|virtue|low
医|yi1|医术；医学|virtue|low
壹|yi1|统一；一致|virtue|low
椅|yi1|木名。即山桐子||false
蛇|yi2|象征国君、君子等||false
仪|yi2|法度；礼法|virtue
夷|yi2|平夷；夷然。|virtue
姨|yi2|母之姊妹|warm|low
贻|yi2|遗留|jade
胰|yi2|胰腺|celestial|low
移|yi2|移植|flora|low
遗|yi2|遗漏，因疏忽而漏掉|virtue|low
疑|yi2|迷惑，犹豫不定|virtue|low
蛾|yi3|蛾眉的简称||false
尾|yi3|末端，末尾||false
乙|yi3|第二，次一等|virtue
已|yi3|完成，完毕|virtue|low
以|yi3|有一部分现已弱化成了介词|virtue|low
矣|yi3|表示完成时态|strength|low
蚁|yi3|膜翅类昆虫名。俗称蚂蚁|bird|low
倚|yi3|依靠；依赖|virtue|low
椅|yi3|木名。即山桐子|flora|low
艾|yi4|艾草；艾蒿。||false
疙|yi4|皮肤或肌肉上起的硬块腿上起了个||false
射|yi4|用推力、压力或弹力送出||false
食|yi4|粮食||false
泄|yi4|假借为歇。发泄；发散||false
衣|yi4|服装的通称∠上衣下裳而言||false
亿|yi4|安宁；安定|warm,virtue|low
议|yi4|评议是非|literary|low
屹|yi4|屹立；屹然。|mountain
异|yi4|不同|virtue
役|yi4|役使，驱使|virtue|low
抑|yi4|抑制|virtue|low
译|yi4|解释；阐述|literary
邑|yi4|古代称侯国为邑|virtue|low
易|yi4|容易；和易。|warm
绎|yi4|引出头绪，寻求事理|literary|low
疫|yi4|急性传染病流行的通称|virtue|low
谊|yi4|情谊；友谊。|literary
溢|yi4|洋溢；丰溢。|water
翼|yi4|羽翼；机翼。|bird
因|yin1|原因|virtue|low
阴|yin1|北面|mountain|low
姻|yin1|结亲的男家，指夫或夫之父|warm|low
荫|yin1|荫蔽；荫凉。|flora
音|yin1|音乐|literary
殷|yin1|殷实；殷勤。|virtue
寅|yin2|寅时；寅初。|celestial,season
淫|yin2|涂染|water|low
银|yin2|银白；银河。|jade,cool
殷|yin3|殷实；殷勤。||false
引|yin3|拉，牵挽|strength
饮|yin3|有时特指喝酒|warm|low
蚓|yin3|蚯蚓|bird|low
隐|yin3|藏匿；隐蔽|mountain
瘾|yin3|浓厚的兴趣|virtue|low
荫|yin4|荫蔽；荫凉。||false
饮|yin4|有时特指喝酒||false
隐|yin4|藏匿；隐蔽||false
印|yin4|图章|virtue
应|ying1|应当，应该|virtue|low
婴|ying1|初生的女孩|warm
鹦|ying1|鸟名，鹦鹉。俗称鹦哥|bird|low
鹰|ying1|雄鹰；鹰扬。|bird
迎|ying2|迎接；欢迎|virtue
盈|ying2|丰盈；轻盈。|virtue
荧|ying2|荧荧；荧光。|celestial
莹|ying2|似玉的宝石|jade,flora
萤|ying2|微弱的亮光|flora|low
营|ying2|经营；营建。|strength
蝇|ying2|多指苍蝇。动物名。属昆虫类中的双翅类|bird|low
赢|ying2|赢胜；盈余。|strength
景|ying3|太阳||false
颖|ying3|聪颖；颖悟。|literary
影|ying3|光影；身影。|literary
应|ying4|应当，应该||false
硬|ying4|与软相对|mountain|low
哟|yo1|表示轻微的惊异|warm|low
育|yo1|养育；教育。||false
佣|yong1|雇工||false
拥|yong1|拥戴；拥护。|virtue
庸|yong1|中庸；庸和。|virtue
泳|yong3|潜行水中；游泳|water
涌|yong3|涌泉；涌动。|water
踊|yong3|登，登上|virtue|low
佣|yong4|雇工|virtue|low
用|yong4|任用|virtue|low
优|you1|优秀；优雅。|virtue
忧|you1|反映出来◇加攵|virtue|low
悠|you1|悠然；悠长。|virtue
尤|you2|尤其；尤美。|virtue
犹|you2|兽名★属，也叫犹猢，形如麂|virtue|low
邮|you2|传递文书的驿站|mountain,literary|low
油|you2|涂油|water|low
游|you2|游历；游心。|water
友|you3|朋友；友爱。|virtue
酉|you3|地支的第十位|virtue|low
有|you4|存在||false
又|you4|复，再，再一次|virtue|low
右|you4|助；帮助◇多作佑|warm|low
幼|you4|小孩儿|virtue
佑|you4|辅助；帮助|virtue
诱|you4|引诱|literary|low
吁|yu1|叹息，叹气||false
迂|yu1|迂腐，不合事理|virtue|low
淤|yu1|泥沙冲积成的地带|water|low
邪|yu2|不正当，不正派||false
于|yu2|于是；于飞。|virtue
余|yu2|我，我的|virtue|low
鱼|yu2|某些像鱼的水生动物|water|low
娱|yu2|戏乐，使欢乐|warm|low
渔|yu2|渔歌；渔火。|water
隅|yu2|角，角落|mountain|low
愉|yu2|愉悦；欢愉。|warm
渝|yu2|不渝；渝水。|water
逾|yu2|超过；胜过|virtue|low
愚|yu2|自称之谦词|virtue|low
舆|yu2|车辆，尤指马车|virtue|low
与|yu2|交往；交好||false
予|yu2|予假借为余，我||false
羽|yu3|鸟类|bird
禹|yu3|远古夏部落领袖|virtue
奥|yu4|深奥；精深。||false
谷|yu4|两山之间的水流||false
尉|yu4|尉官；校尉。||false
蔚|yu4|蔚蓝；蔚然。||false
吾|yu4|我们||false
吁|yu4|叹息，叹气|warm|low
与|yu4|交往；交好||false
雨|yu4|雨，从云层中降向地面的水||false
语|yu4|交谈，说话||false
芋|yu4|薯类植物|flora|low
育|yu4|养育；教育。|virtue
郁|yu4|郁郁；芬芳。|flora
狱|yu4|讼案|virtue|low
浴|yu4|鸟飞忽上忽下|water|low
预|yu4|预先，事先。事先有准备。通豫|literary|low
域|yu4|疆域；开阔。|mountain
欲|yu4|想要；希望|virtue|low
喻|yu4|比喻；晓喻。|warm
寓|yu4|寄托|virtue|low
御|yu4|也作驭|virtue|low
裕|yu4|宽裕；丰足。|warm
愈|yu4|胜过|virtue
誉|yu4|名誉；赞誉。|virtue
豫|yu4|安豫；豫悦。|warm
粥|yu4|柔弱的样子||false
宛|yuan1|宛转；宛然。||false
冤|yuan1|上当；不合算|virtue|low
鸳|yuan1|同事，同僚|bird|low
员|yuan2|官员的定额。又指官员、官吏|warm
园|yuan2|庭园；园林。|flora
袁|yuan2|姓氏；袁氏。|virtue|low
援|yuan2|攀援|virtue
缘|yuan2|缘分；缘起。|literary
猿|yuan2|灵长类动物，形态与猴相似|virtue|low
远|yuan4|引申距离大，相隔远。与近相对||false
苑|yuan4|荟萃之处|flora
怨|yuan4|责怪；埋怨|virtue|low
院|yuan4|四周有墙垣围绕、自成部分的房屋|mountain
曰|yue1|叫做|virtue|low
约|yue1|盟约；相期的诺言|literary
兑|yue4|通锐。锋利||false
乐|yue4|音乐；和谐之声。|literary
说|yue4|谈说，讲说||false
钥|yue4|钥匙，开锁的工具||false
阅|yue4|阅览；阅世。|literary
跃|yue4|跃动；飞跃。|strength
粤|yue4|粤地；广东。|water
晕|yun1|昏倒|celestial|low
员|yun2|官员的定额。又指官员、官吏||false
云|yun2|云霞；云天。|celestial
匀|yun2|假借为均。分，分出|virtue|low
耘|yun2|耕耘。|flora
允|yun3|公平|virtue
陨|yun3|丧失，失去|mountain|low
员|yun4|官员的定额。又指官员、官吏||false
晕|yun4|昏倒||false
孕|yun4|孕育|virtue|low
运|yun4|搬运；运输|virtue
酝|yun4|逐渐造成|virtue|low
蕴|yun4|包藏；包含|flora
扎|za1|捆绑；缠束；拴；系||false
杂|za2|混合；搀杂|flora|low
砸|za2|重物掉落在物体上，或用重物撞击|mountain|low
咱|za2|我们||false
咋|za3|∶怎；怎么|warm|low
咱|za3|我们||false
灾|zai1|灾害，祸患|warm|low
哉|zai1|感叹悲|warm|low
栽|zai1|种植|flora|low
宰|zai3|古代官吏的通称|virtue|low
载|zai3|描绘|strength|low
仔|zai3|∶指小孩|virtue|low
再|zai4|两次|virtue
载|zai4|描绘||false
咱|zan2|我们|warm|low
暂|zan4|暂时|celestial|low
赞|zan4|赞美；赞颂。|virtue
赃|zang1|贪污；行贿|jade|low
脏|zang1|玷污，不干净或不纯洁|celestial|low
藏|zang4|储积，收藏||false
脏|zang4|玷污，不干净或不纯洁||false
葬|zang4|处理尸体的方式|flora|low
遭|zao1|受到；遭受|virtue|low
糟|zao1|指粗恶的食物|flora|low
凿|zao2|挖掘；开凿|virtue|low
早|zao3|早晨；早春。|season,celestial
枣|zao3|枣树所结的果实|flora|low
蚤|zao3|指月初或早晨|season,bird|low
澡|zao3|后泛指洗涤|water|low
藻|zao3|文藻；辞采。|flora,literary
灶|zao4|烧炼或锻造的设备|warm|low
皂|zao4|皂斗的略称|virtue|low
造|zao4|创造；造就。|strength
噪|zao4|大声喧嚷|warm|low
燥|zao4|剁细的肉|warm|low
躁|zao4|急疾；迅速|virtue|low
咋|ze2|∶怎；怎么||false
则|ze2|等级|strength|low
择|ze2|通殬。败坏；不合法度|virtue|low
责|ze2|索取|jade|low
侧|ze4|亦用作谦词||false
贼|zei2|特指杀害|jade|low
怎|zen3|不论怎么样|virtue|low
曾|zeng1|已经||false
增|zeng1|增加；增益。|strength
憎|zeng1|犹愤恨)|virtue|low
赠|zeng4|送走；逐去|jade|low
综|zeng4|总聚；总合||false
查|zha1|同楂||false
咋|zha1|∶怎；怎么||false
扎|zha1|捆绑；缠束；拴；系|virtue|low
喳|zha1|下级对上级的应诺声|warm|low
渣|zha1|碎屑|water|low
轧|zha2|排挤，倾轧|strength|low
扎|zha2|捆绑；缠束；拴；系||false
闸|zha2|水闸|virtue|low
炸|zha2|把食物放在滚沸的油锅中熬熟||false
眨|zha3|时间极短|virtue|low
蜡|zha4|动物、矿物或植物所产生的油质||false
乍|zha4|刚；才|virtue|low
诈|zha4|假装；冒充|literary|low
栅|zha4|营寨||false
炸|zha4|把食物放在滚沸的油锅中熬熟|warm|low
榨|zha4|压出物体里汁液的器具|flora|low
侧|zhai1|亦用作谦词||false
齐|zhai1|整齐||false
斋|zhai1|斋戒；书斋。|literary
摘|zhai1|除去，去掉|virtue|low
择|zhai2|通殬。败坏；不合法度||false
宅|zhai2|家，常指大家族的家|virtue|low
窄|zhai3|短缺；生活不宽裕|virtue|low
祭|zhai4|使用，旧小说中谓用咒语施放神秘武器||false
责|zhai4|索取||false
债|zhai4|喻指应兑现的事情或所造成的损失|virtue|low
寨|zhai4|寨子，村庄|virtue|low
沾|zhan1|古水名|water|low
毡|zhan1|用兽毛压制而成的片状物|virtue|low
粘|zhan1|粘的东西互相连接或附着在别的东西上|flora|low
瞻|zhan1|瞻望；前瞻。|virtue
占|zhan1|窥察||false
斩|zhan3|砍；砍断|strength|low
展|zhan3|舒展；伸展|virtue
盏|zhan3|浅而小的杯子酒|virtue|low
崭|zhan3|∶好|mountain|low
辗|zhan3|磙压；碾压||false
颤|zhan4|颤抖，发抖||false
占|zhan4|窥察|virtue|low
战|zhan4|搏斗，争斗，争胜负，比高低|strength|low
栈|zhan4|栈道|flora|low
站|zhan4|停止前进；直立不动|virtue|low
绽|zhan4|俗称开线|literary|low
张|zhang1|与弛相对|strength|low
樟|zhang1|常绿乔木|flora
长|zhang3|与短相对||false
涨|zhang3|增长；高出|water|low
掌|zhang3|脚的底部|virtue|low
涨|zhang4|增长；高出||false
丈|zhang4|古时对长辈男子的尊称|virtue|low
仗|zhang4|依靠，依赖|virtue|low
帐|zhang4|蚊帐，床帐|virtue|low
杖|zhang4|凭倚；依靠|flora|low
胀|zhang4|膨胀，体积变大|celestial|low
账|zhang4|债务，欠别人的东西|jade|low
障|zhang4|阻挡；拒绝|mountain|low
嘲|zhao1|唱，按音律发声||false
招|zhao1|招收；招募|virtue
着|zhao1|放置|virtue|low
着|zhao2|放置||false
爪|zhao3|鸟兽的脚趾|virtue|low
找|zhao3|退有余，把超过应收的钱物退还|virtue|low
沼|zhao3|池水|water|low
召|zhao4|召唤。用言语叫人来|warm
兆|zhao4|征兆，预兆|virtue
赵|zhao4|古国名|virtue|low
罩|zhao4|捕鸟的竹笼或掩网|virtue|low
肇|zhao4|创建|virtue
遮|zhe1|掩蔽|virtue|low
折|zhe1|曲折；弯||false
折|zhe2|曲折；弯||false
辙|zhe2|车子|strength|low
者|zhe3|用在数词之后|virtue|low
这|zhe4|此刻，现在|virtue|low
浙|zhe4|水名。即今钱塘江，上游为新安江|water|low
蔗|zhe4|甜美|flora|low
这|zhei4|此刻，现在||false
贞|zhen1|坚贞；贞洁。|virtue
针|zhen1|刻度盘上的指针|jade|low
侦|zhen1|问，卜问。凭借占卜来寻求预言|virtue|low
珍|zhen1|珍宝；珍贵。|jade
斟|zhen1|用壶倒酒或茶水|virtue|low
诊|zhen3|验看；辨别|literary|low
枕|zhen3|枕骨|flora|low
疹|zhen3|皮肤上起的红色小疙瘩。也指痘疮|virtue|low
填|zhen4|填写，写入||false
阵|zhen4|阵地|mountain
振|zhen4|振奋；振兴。|strength
镇|zhen4|镇守；镇静。|strength
震|zhen4|震动；雷霆。|celestial,strength
丁|zheng1|丁为钉的古字||false
争|zheng1|辩论；争论|strength|low
怔|zheng1|发愣，发呆|virtue|low
挣|zheng1|用力摆脱||false
狰|zheng1|传说中的奇兽|virtue|low
睁|zheng1|看，望；瞪|virtue|low
蒸|zheng1|细小的木柴|flora|low
正|zheng1|农历一年的第一个月||false
症|zheng1|腹中结块的病||false
拯|zheng3|救济；援救|virtue
整|zheng3|端正，端庄|virtue|low
怔|zheng4|发愣，发呆||false
挣|zheng4|用力摆脱|virtue|low
证|zheng4|谏正|literary|low
郑|zheng4|原指春秋战国时郑国的民间音乐|season,mountain|low
政|zheng4|主持政事|virtue
症|zheng4|腹中结块的病|virtue|low
氏|zhi1|旧时放在已婚妇女的姓后||false
支|zhi1|枝条◇作枝|virtue|low
汁|zhi1|雨夹雪|water|low
吱|zhi1|细小的声音||false
枝|zhi1|枝条；枝叶。|flora
织|zhi1|编制，组成|literary|low
肢|zhi1|指人体的腰部|celestial|low
脂|zhi1|润滑脂|celestial|low
蜘|zhi1|蜘蛛|bird|low
只|zhi1|凡物之单者曰只。单一|warm|low
拓|zhi2|举，托起||false
执|zhi2|拿；持|virtue
侄|zhi2|弟兄或其他同辈男性亲属的子女|virtue|low
值|zhi2|持，拿住|virtue|low
职|zhi2|主管；任职|virtue|low
植|zhi2|种植；植根。|flora
殖|zhi2|生长，繁殖|virtue|low
止|zhi3|停住，中断进程|virtue|low
只|zhi3|凡物之单者曰只。单一||false
旨|zhi3|美好|celestial|low
址|zhi3|地点；地址；处所|mountain|low
纸|zhi3|冥钱，旧俗为祭奠鬼神而焚化的纸钱|literary|low
指|zhi3|手指。手掌的五个终端部分之一|virtue|low
趾|zhi3|脚指头|virtue|low
识|zhi4|认识||false
知|zhi4|懂得，了解，理会||false
织|zhi4|编制，组成||false
至|zhi4|至诚；至美。|virtue
制|zhi4|制定，用文字规定|strength|low
帜|zhi4|标记|virtue|low
治|zhi4|治理；管理；统治|water
质|zhi4|质朴；品质。|virtue
挚|zhi4|古国名|virtue|low
秩|zhi4|按次序排列|flora|low
致|zhi4|招引；招致|virtue
掷|zhi4|投射|virtue|low
窒|zhi4|抑止住使不发泄|virtue|low
滞|zhi4|积压。长期积存，未作处理|water|low
稚|zhi4|稚子；稚气。|warm
置|zhi4|安放；搁；摆|virtue|low
蚣|zhong1|见蜈蚣||false
中|zhong1|内，里面。与外相对|virtue|low
忠|zhong1|忠厚|virtue
终|zhong1|终了；结束。与始相对|literary|low
钟|zhong1|钟声；钟灵。|jade,literary
衷|zhong1|内心|virtue|low
肿|zhong3|浮胀；肿胀|celestial|low
种|zhong3|幼稚|flora|low
中|zhong4|内，里面。与外相对||false
种|zhong4|幼稚||false
重|zhong4|重复，重叠||false
调|zhou1|盐或提拔官吏||false
州|zhou1|州郡；神州。|water
粥|zhou1|柔弱的样子|flora|low
轴|zhou2|车子|strength|low
肘|zhou3|用肘触人示意；拉住肘部|celestial|low
帚|zhou3|扫帚|virtue|low
轴|zhou4|车子||false
咒|zhou4|诅咒，乞求神灵降祸|warm|low
宙|zhou4|宇宙；宙始。|celestial
皱|zhou4|衣、物等经折叠而显出痕迹|virtue|low
骤|zhou4|使马奔驰|strength|low
朱|zhu1|指朱色的物品|flora|low
株|zhu1|草木|flora|low
珠|zhu1|珠玉|jade
诸|zhu1|众；各|literary|low
猪|zhu1|猪只|virtue|low
蛛|zhu1|蜘蛛|bird|low
术|zhu2|街道、道路||false
烛|zhu2|蜡烛|warm|low
逐|zhu2|驱逐|virtue|low
筑|zhu2|建筑；筑梦。||false
属|zhu3|种类。亦特指牲类||false
主|zhu3|君主|virtue|low
拄|zhu3|执持；靠|virtue|low
煮|zhu3|煮盐，熟盐|warm|low
嘱|zhu3|嘱托|warm|low
瞩|zhu3|见；看见|virtue|low
住|zhu4|停止|virtue|low
助|zhu4|帮助；相助。|strength
注|zhu4|集中；聚集|water|low
贮|zhu4|等待。通伫|jade|low
驻|zhu4|停留；止住|strength|low
柱|zhu4|柱石；中柱。|mountain,strength
祝|zhu4|祝福；祝愿。|virtue
著|zhu4|著名；著述。|literary
蛀|zhu4|用同疰|bird|low
筑|zhu4|建筑；筑梦。|strength
铸|zhu4|铸造；铸就。|strength
抓|zhua1|用手或爪取物|virtue|low
爪|zhua3|鸟兽的脚趾||false
拽|zhuai1|同曳、抴。拉，牵引◇作曳||false
转|zhuai3|旋转；打转||false
拽|zhuai4|同曳、抴。拉，牵引◇作曳|virtue|low
专|zhuan1|纺专，收丝器|virtue|low
砖|zhuan1|像砖的东西|mountain|low
转|zhuan3|旋转；打转|strength|low
传|zhuan4|驿站所备的车||false
转|zhuan4|旋转；打转||false
赚|zhuan4|赢得；获得||false
撰|zhuan4|纂集|virtue|low
妆|zhuang1|假装。同装|warm|low
庄|zhuang1|谨严持重|virtue
桩|zhuang1|储物备用的内库|flora|low
装|zhuang1|服装|virtue|low
幢|zhuang4|张挂在舟、车上的帷幔|virtue|low
状|zhuang4|形状，形态|virtue
撞|zhuang4|遇上，碰到|virtue|low
揣|zhui1|藏入；塞进||false
追|zhui1|追求；追取|virtue|low
椎|zhui1|捶击的工具◇亦为兵器|flora|low
锥|zhui1|形如尖锥的东西|jade|low
坠|zhui4|丧失；败坏|mountain|low
缀|zhui4|著作。组织文字以成篇章|literary|low
赘|zhui4|聚会|jade|low
淳|zhun1|敦厚；质朴；朴实||false
屯|zhun1|聚集||false
谆|zhun1|多叠用，也单用|literary|low
准|zhun3|准绳；标准。|virtue
拙|zhuo1|我的|virtue|low
捉|zhuo1|捉拿，擒拿；追捕|virtue|low
桌|zhuo1|常用的一种家具|flora|low
缴|zhuo2|缠绕||false
着|zhuo2|放置||false
著|zhuo2|著名；著述。||false
灼|zhuo2|灼灼；灼见。|warm
茁|zhuo2|生出；生长|flora|low
浊|zhuo2|液体浑浊。与清相对|water|low
酌|zhuo2|饮酒|virtue|low
啄|zhuo2|用嘴理|warm|low
齐|zi1|整齐||false
吱|zi1|细小的声音|warm|low
兹|zi1|草席|virtue|low
咨|zi1|叹息；赞叹|warm|low
姿|zi1|容貌|warm
资|zi1|资质；资才。|virtue
滋|zi1|滋润；滋长。|water
仔|zi1|∶指小孩||false
仔|zi3|∶指小孩||false
姊|zi3|指母亲|warm|low
籽|zi3|植物的种子|flora|low
紫|zi3|紫气；紫薇。|celestial,warm
字|zi4|怀孕，体内怀着胎儿|virtue|low
宗|zong1|宗本；根本所系。|virtue
综|zong1|总聚；总合|literary|low
棕|zong1|植物名。棕榈的省称|flora|low
踪|zong1|事物的痕迹|virtue|low
总|zong3|聚合；汇集|virtue|low
纵|zong3|南北称纵，东西称横。古作从衡||false
纵|zong4|南北称纵，东西称横。古作从衡|literary|low
走|zou3|逃跑|virtue|low
奏|zou4|特指向帝王进言或上书|virtue|low
揍|zou4|∶打|virtue|low
租|zu1|赋税|flora|low
足|zu2|支撑器物的脚|virtue|low
卒|zu2|步兵|virtue|low
族|zu2|家族，氏族|virtue|low
阻|zu3|妨碍物；障隔|mountain|low
组|zu3|代指官印或官吏|literary|low
祖|zu3|祖父|virtue
钻|zuan1|钻研，集中精力学习，推究事理||false
赚|zuan4|赢得；获得|jade|low
钻|zuan4|钻研，集中精力学习，推究事理|jade|low
嘴|zui3|鸟嘴|warm|low
最|zui4|聚，聚合|virtue|low
罪|zui4|罪人|virtue|low
醉|zui4|用酒浸制的|virtue|low
尊|zun1|敬重；推崇|virtue
遵|zun1|顺着，沿着|virtue
作|zuo1|起来；开始工作||false
昨|zuo2|往日；过去|celestial|low
琢|zuo2|撰文时的修改加工，琢磨||false
撮|zuo3|用三指取物；抓取||false
左|zuo3|贬谪，从朝廷下放到地方为官|virtue|low
佐|zuo3|陪同|virtue
作|zuo4|起来；开始工作|virtue|low
坐|zuo4|现代在椅、凳出现后|mountain|low
座|zuo4|供人坐的地方，也指位置，座次|virtue|low
做|zuo4|作。从事某种工作或活动|virtue|low
# === GENERATED COMMON CHARACTERS END ===
`;

  const NAMING_EXAMPLE_ROWS = `
# 双字名：按名内声调分组，每种组合三例
知章|zhi1 zhang1|贺知章 · 唐|史|清亮端方，有书卷气。|贺|he4
徽因|hui1 yin1|林徽因 · 近代|史|音色明亮，雅而亲切。|林|lin2
淑真|shu1 zhen1|朱淑真 · 宋|史|温静端秀，音韵清和。|朱|zhu1
渊明|yuan1 ming2|陶渊明 · 东晋|史|开阔澄明，有田园清气。|陶|tao2
宗元|zong1 yuan2|柳宗元 · 唐|史|端方沉稳，声调舒展。|柳|liu3
湘云|xiang1 yun2|《红楼梦》· 史湘云|文|柔中有朗，轻盈自然。|史|shi3
商隐|shang1 yin3|李商隐 · 唐|史|含蓄深致，尾音轻收。|李|li3
修远|xiu1 yuan3|屈原《离骚》|诗|取路远而心定之意。||
疏影|shu1 ying3|林逋《山园小梅》|诗|清疏有致，诗意淡远。||
清照|qing1 zhao4|李清照 · 宋|史|清澈明亮，光意盈盈。|李|li3
居易|ju1 yi4|白居易 · 唐|史|平和从容，读来安稳。|白|bai2
嘉树|jia1 shu4|屈原《橘颂》|诗|嘉美如树，清正有生机。||
文君|wen2 jun1|卓文君 · 汉|史|文雅明朗，音色温润。|卓|zhuo2
灵均|ling2 jun1|屈原 · 字灵均|史|空灵匀净，有楚辞气韵。|屈|qu1
晴川|qing2 chuan1|崔颢《黄鹤楼》|诗|开阔明净，山川在望。||
从文|cong2 wen2|沈从文 · 现代|史|沉静文雅，气质舒展。|沈|shen3
玄龄|xuan2 ling2|房玄龄 · 唐|史|深稳有度，音韵厚实。|房|fang2
则徐|ze2 xu2|林则徐 · 清|史|端凝从容，收束有力。|林|lin2
弘景|hong2 jing3|陶弘景 · 南朝|史|宏阔明净，气度舒展。|陶|tao2
明远|ming2 yuan3|鲍照 · 字明远|史|明亮悠远，志向开阔。|鲍|bao4
文举|wen2 ju3|孔融 · 字文举|史|文雅端正，声调上扬。|孔|kong3
灵运|ling2 yun4|谢灵运 · 南朝|史|灵秀而有远意。|谢|xie4
廷玉|ting2 yu4|张廷玉 · 清|史|端正温润，如玉在朝。|张|zhang1
玄烨|xuan2 ye4|玄烨 · 清康熙帝|史|深静光明，气韵不凡。||
宝钗|bao3 chai1|《红楼梦》· 薛宝钗|文|温润明丽，音色清亮。|薛|xue1
采薇|cai3 wei1|《诗经·小雅》|诗|草木清气，朴素有诗意。||
子衿|zi3 jin1|《诗经·郑风》|诗|书卷气浓，音节轻灵。||
子昂|zi3 ang2|陈子昂 · 唐|史|清越上扬，意气自生。|陈|chen2
采苹|cai3 ping2|《诗经·召南》|诗|清新柔美，水草有香。||
子房|zi3 fang2|张良 · 字子房|史|从容有谋，音节平稳。|张|zhang1
可久|ke3 jiu3|张可久 · 元|史|朗润耐读，有余韵。|张|zhang1
小宛|xiao3 wan3|董小宛 · 明末|史|轻巧温婉，气韵柔和。|董|dong3
子美|zi3 mei3|杜甫 · 字子美|史|温厚清正，尽显雅意。|杜|du4
宝玉|bao3 yu4|《红楼梦》· 贾宝玉|文|温润珍重，明亮可亲。|贾|jia3
子建|zi3 jian4|曹植 · 字子建|史|清朗俊逸，收束有力。|曹|cao2
婉若|wan3 ruo4|曹植《洛神赋》|诗|柔美灵动，如游龙之姿。||
若虚|ruo4 xu1|张若虚 · 唐|史|冲淡清远，有虚静之美。|张|zhang1
仲淹|zhong4 yan1|范仲淹 · 宋|史|宽厚深沉，气象开阔。|范|fan4
望舒|wang4 shu1|屈原《离骚》|诗|清朗悠远，有月御之意。||
浩然|hao4 ran2|孟浩然 · 唐|史|开阔正大，气象充沛。|孟|meng4
相如|xiang4 ru2|司马相如 · 汉|史|温润而有风骨。|司马|si1 ma3
志摩|zhi4 mo2|徐志摩 · 现代|史|清朗洒脱，有余韵。|徐|xu2
万里|wan4 li3|杨万里 · 宋|史|辽阔开阔，收束有力。|杨|yang2
孟頫|meng4 fu3|赵孟頫 · 元|史|端雅有古意。|赵|zhao4
慧远|hui4 yuan3|慧远 · 东晋高僧|史|静远澄明，余味清长。||
道韫|dao4 yun4|谢道韫 · 东晋|史|清雅有才情，声调沉稳。|谢|xie4
黛玉|dai4 yu4|《红楼梦》· 林黛玉|文|清冷灵秀，诗意深长。|林|lin2
弄玉|nong4 yu4|《列仙传》· 秦穆公女|文|轻灵和美，有仙气。||
# 补充名例：二十四史、金庸、琼瑶与古典小说
昭君|zhao1 jun1|《汉书》· 王昭君|史|明净端庄，有远行清气。|王|wang2
七公|qi1 gong1|《射雕英雄传》· 洪七公|文|疏朗豪迈，音节开阔。|洪|hong2
三丰|san1 feng1|《倚天屠龙记》· 张三丰|文|冲和清静，气韵绵长。|张|zhang1
天祥|tian1 xiang2|《宋史》· 文天祥|史|正气开阔，音色清越。|文|wen2
青桐|qing1 tong2|《书剑恩仇录》· 霍青桐|文|清挺明快，有草木气。|霍|huo4
之洋|zhi1 yang2|《镜花缘》· 林之洋|文|开阔自在，有远航之意。|林|lin2
声谷|sheng1 gu3|《倚天屠龙记》· 莫声谷|文|清越沉静，有余韵。|莫|mo4
飞虎|fei1 hu3|《封神演义》· 黄飞虎|文|昂扬有力，气魄开阔。|黄|huang2
光启|guang1 qi3|《明史》· 徐光启|史|明达开阔，含启新之意。|徐|xu2
东野|dong1 ye3|孟郊 · 字东野|史|朴野清远，声调舒展。|孟|meng4
光弼|guang1 bi4|《旧唐书》· 李光弼|史|刚正明朗，收束有力。|李|li3
居正|ju1 zheng4|《明史》· 张居正|史|端方持重，音色沉稳。|张|zhang1
一笑|yi1 xiao4|《倚天屠龙记》· 韦一笑|文|轻捷洒落，余味清长。|韦|wei2
文姬|wen2 ji1|《后汉书》· 蔡文姬|史|文雅清婉，音节明亮。|蔡|cai4
伯通|bo2 tong1|《射雕英雄传》· 周伯通|文|通达自在，声调舒展。|周|zhou1
莲舟|lian2 zhou1|《倚天屠龙记》· 俞莲舟|文|清润端稳，有水意。|俞|yu2
仁杰|ren2 jie2|《旧唐书》· 狄仁杰|史|端直明达，读来沉稳。|狄|di2
青牛|qing2 niu2|《倚天屠龙记》· 胡青牛|文|朴厚清宁，有山野气。|胡|hu2
重阳|chong2 yang2|《射雕英雄传》· 王重阳|文|开阔清朗，气韵高远。|王|wang2
实甫|shi2 fu3|《西厢记》· 王实甫|文|温厚含蓄，音节抑扬。|王|wang2
炎武|yan2 wu3|顾炎武 · 明末清初|史|刚健笃实，收束沉稳。|顾|gu4
伯虎|bo2 hu3|唐寅 · 字伯虎|史|洒脱明快，音色清朗。|唐|tang2
无忌|wu2 ji4|《倚天屠龙记》· 张无忌|文|开阔果决，收束有力。|张|zhang1
灵素|ling2 su4|《飞狐外传》· 程灵素|文|灵秀清素，余韵微凉。|程|cheng2
延庆|yan2 qing4|《天龙八部》· 段延庆|文|沉郁开阔，声调顿挫。|段|duan4
语嫣|yu3 yan1|《天龙八部》· 王语嫣|文|轻灵婉转，音色柔美。|王|wang2
可卿|ke3 qing1|《红楼梦》· 秦可卿|文|柔婉清丽，余味悠长。|秦|qin2
雨村|yu3 cun1|《红楼梦》· 贾雨村|文|清润疏朗，有书卷气。|贾|jia3
紫菱|zi3 ling2|《一帘幽梦》· 汪紫菱|文|清灵婉约，音色柔亮。|汪|wang1
雨荷|yu3 he2|《还珠格格》· 夏雨荷|文|清润柔美，荷意盈盈。|夏|xia4
宝琴|bao3 qin2|《红楼梦》· 薛宝琴|文|温润清雅，余韵悠长。|薛|xue1
小宝|xiao3 bao3|《鹿鼎记》· 韦小宝|文|轻快灵动，读来亲切。|韦|wei2
巧姐|qiao3 jie3|《红楼梦》· 贾巧姐|文|轻巧温婉，音节清亮。|贾|jia3
铁手|tie3 shou3|《碧血剑》· 何铁手|文|刚健利落，收束有力。|何|he2
芷若|zhi3 ruo4|《倚天屠龙记》· 周芷若|文|清婉有致，尾音轻收。|周|zhou1
小倩|xiao3 qian4|《聊斋志异》· 聂小倩|文|清幽婉转，余味幽长。|聂|nie4
雨凤|yu3 feng4|《苍天有泪》· 萧雨凤|文|清越利落，收束明快。|萧|xiao1
世忠|shi4 zhong1|《宋史》· 韩世忠|史|沉毅忠正，音色端稳。|韩|han2
秀夫|xiu4 fu1|《宋史》· 陆秀夫|史|清正端方，尾音沉稳。|陆|lu4
遇春|yu4 chun1|《明史》· 常遇春|史|明快开阔，有春意。|常|chang2
继光|ji4 guang1|《明史》· 戚继光|史|刚健明朗，气度开阔。|戚|qi1
世杰|shi4 jie2|《宋史》· 张世杰|史|端毅清朗，收束有力。|张|zhang1
孝祥|xiao4 xiang2|《宋史》· 张孝祥|史|清朗端方，音色明亮。|张|zhang1
问陶|wen4 tao2|《清史稿》· 张问陶|史|温厚清雅，余韵悠然。|张|zhang1
正淳|zheng4 chun2|《天龙八部》· 段正淳|文|温厚清润，声调安稳。|段|duan4
梦竹|meng4 zhu2|《几度夕阳红》· 李梦竹|文|清雅有节，余韵悠长。|李|li3
破虏|po4 lu3|《神雕侠侣》· 郭破虏|文|刚健沉雄，收束有力。|郭|guo1
世纬|shi4 wei3|《婉君》· 何世纬|文|端方温厚，音节沉稳。|何|he2
士隐|shi4 yin3|《红楼梦》· 甄士隐|文|沉静隐逸，余味清远。|甄|zhen1
去病|qu4 bing4|《史记》· 霍去病|史|果决明快，气魄凌厉。|霍|huo4
玉菡|yu4 han4|《红楼梦》· 蒋玉菡|文|温润含蓄，音色清雅。|蒋|jiang3
素素|su4 su4|《倚天屠龙记》· 殷素素|文|素净清朗，音节简洁。|殷|yin1
# 补充名例：全名声调覆盖（二十四史、金庸、琼瑶、古典小说）
策|ce4|《三侠五义》· 公孙策|文|清朗端方，音节沉稳。|公孙|gong1 sun1
绿萼|lv4 e4|《神雕侠侣》· 公孙绿萼|文|温润有致，余韵清长。|公孙|gong1 sun1
锋|feng1|《射雕英雄传》· 欧阳锋|文|开阔明净，气度舒展。|欧阳|ou1 yang2
苞|bao1|《清史稿》· 方苞|史|清雅含蓄，声调从容。|方|fang1
嘉|jia1|《三国志》· 郭嘉|史|端凝有力，读来顺口。|郭|guo1
襄|xiang1|《神雕侠侣》· 郭襄|文|灵秀清润，余味悠远。|郭|guo1
发|fa1|《封神演义》· 姬发|文|疏朗自然，音色清亮。|姬|ji1
淹|yan1|《南史》· 江淹|史|厚重端正，收束沉稳。|江|jiang1
轲|ke1|《史记》· 荆轲|史|轻盈婉转，音节柔和。|荆|jing1
安|an1|《晋书》· 潘安|史|刚健明快，气韵开阔。|潘|pan1
芳|fang1|《连城诀》· 戚芳|文|文雅清和，书卷气足。|戚|qi1
单|dan1|《史记》· 邬单|史|朴素冲淡，读来安静。|邬|wu1
峰|feng1|《天龙八部》· 萧峰|文|清朗端方，音节沉稳。|萧|xiao1
涛|tao1|唐代 · 薛涛|文|温润有致，余韵清长。|薛|xue1
莺莺|ying1 ying1|《西厢记》· 崔莺莺|文|开阔明净，气度舒展。|崔|cui1
依依|yi1 yi1|《哑妻》· 方依依|文|清雅含蓄，声调从容。|方|fang1
仙芝|xian1 zhi1|《旧唐书》· 高仙芝|史|端凝有力，读来顺口。|高|gao1
东坡|dong1 po1|宋代 · 苏轼（号东坡）|文|灵秀清润，余味悠远。|苏|su1
青青|qing1 qing1|《碧血剑》· 温青青|文|疏朗自然，音色清亮。|温|wen1
丁山|ding1 shan1|《薛丁山征西》· 薛丁山|文|厚重端正，收束沉稳。|薛|xue1
松溪|song1 xi1|《倚天屠龙记》· 张松溪|文|轻盈婉转，音节柔和。|张|zhang1
金藏|jin1 cang2|《元史》· 安金藏|史|刚健明快，气韵开阔。|安|an1
天培|tian1 pei2|《清史稿》· 关天培|史|文雅清和，书卷气足。|关|guan1
光年|guang1 nian2|现代 · 张光年|文|朴素冲淡，读来安静。|张|zhang1
英莲|ying1 lian2|《红楼梦》· 甄英莲|文|清朗端方，音节沉稳。|甄|zhen1
敦颐|dun1 yi2|《宋史》· 周敦颐|史|温润有致，余韵清长。|周|zhou1
叔豪|shu1 hao2|《婉君》· 周叔豪|文|开阔明净，气度舒展。|周|zhou1
诗尧|shi1 yao2|《在水一方》· 朱诗尧|文|清雅含蓄，声调从容。|朱|zhu1
思邈|si1 miao3|《旧唐书》· 孙思邈|史|端凝有力，读来顺口。|孙|sun1
苍水|cang1 shui3|《明史》· 张煌言（号苍水）|史|灵秀清润，余味悠远。|张|zhang1
希祖|xi1 zu3|近代 · 朱希祖|史|疏朗自然，音色清亮。|朱|zhu1
公豹|gong1 bao4|《封神演义》· 申公豹|文|厚重端正，收束沉稳。|申|shen1
天佑|tian1 you4|《清史稿》· 詹天佑|史|轻盈婉转，音节柔和。|詹|zhan1
金凤|jin1 feng4|《儿女英雄传》· 张金凤|文|刚健明快，气韵开阔。|张|zhang1
邦彦|bang1 yan4|《宋史》· 周邦彦|史|文雅清和，书卷气足。|周|zhou1
柔|rou2|《鹿鼎记》· 曾柔|文|朴素冲淡，读来安静。|曾|zeng1
怡|yi2|《鹿鼎记》· 方怡|文|清朗端方，音节沉稳。|方|fang1
瑜|yu2|《情深深雨濛濛》· 方瑜|文|温润有致，余韵清长。|方|fang1
芙|fu2|《神雕侠侣》· 郭芙|文|开阔明净，气度舒展。|郭|guo1
荣|rong2|《水浒传》· 花荣|文|清雅含蓄，声调从容。|花|hua1
农|nong2|清代 · 金农|文|端凝有力，读来顺口。|金|jin1
南|nan2|《窗外》· 康南|文|灵秀清润，余味悠远。|康|kang1
洋|yang2|《笑傲江湖》· 曲洋|文|疏朗自然，音色清亮。|曲|qu1
琅|lang2|《清史稿》· 施琅|史|厚重端正，收束沉稳。|施|shi1
荃|quan2|《鹿鼎记》· 苏荃|文|轻盈婉转，音节柔和。|苏|su1
和|he2|《明史》· 汤和|史|刚健明快，气韵开阔。|汤|tang1
峤|qiao2|《晋书》· 温峤|史|文雅清和，书卷气足。|温|wen1
何|he2|《史记》· 萧何|史|朴素冲淡，读来安静。|萧|xiao1
离|li2|《倚天屠龙记》· 殷离|文|清朗端方，音节沉稳。|殷|yin1
邯|han2|《史记》· 章邯|史|温润有致，余韵清长。|章|zhang1
灵|ling2|《天龙八部》· 钟灵|文|开阔明净，气度舒展。|钟|zhong1
繇|yao2|《三国志》· 钟繇|史|清雅含蓄，声调从容。|钟|zhong1
国藩|guo2 fan1|《清史稿》· 曾国藩|史|端凝有力，读来顺口。|曾|zeng1
长恭|chang2 gong1|《北齐书》· 高长恭|史|灵秀清润，余味悠远。|高|gao1
择端|ze2 duan1|宋代 · 张择端|史|疏朗自然，音色清亮。|张|zhang1
含烟|han2 yan1|《庭院深深》· 章含烟|文|厚重端正，收束沉稳。|章|zhang1
元璋|yuan2 zhang1|《明史》· 朱元璋|史|轻盈婉转，音节柔和。|朱|zhu1
怀德|huai2 de2|《宋史》· 高怀德|史|刚健明快，气韵开阔。|高|gao1
袭人|xi2 ren2|《红楼梦》· 花袭人|文|文雅清和，书卷气足。|花|hua1
传庭|chuan2 ting2|《明史》· 孙传庭|史|朴素冲淡，读来安静。|孙|sun1
元量|yuan2 liang2|《宋史》· 汪元量|史|清朗端方，音节沉稳。|汪|wang1
庭筠|ting2 yun2|《旧唐书》· 温庭筠|史|温润有致，余韵清长。|温|wen1
梨亭|li2 ting2|《倚天屠龙记》· 殷梨亭|文|清雅含蓄，声调从容。|殷|yin1
煌言|huang2 yan2|《明史》· 张煌言|史|端凝有力，读来顺口。|张|zhang1
学诚|xue2 cheng2|《清史稿》· 章学诚|史|灵秀清润，余味悠远。|章|zhang1
仁美|ren2 mei3|《宋史》· 潘美|史|疏朗自然，音色清亮。|潘|pan1
明允|ming2 yun3|《宋史》· 苏洵（字明允）|史|厚重端正，收束沉稳。|苏|su1
同敞|tong2 chang3|《明史》· 张同敞|史|轻盈婉转，音节柔和。|张|zhang1
长发|chang2 fa4|《连城诀》· 戚长发|文|刚健明快，气韵开阔。|戚|qi1
仁贵|ren2 gui4|《旧唐书》· 薛仁贵|史|文雅清和，书卷气足。|薛|xue1
伯健|bo2 jian4|《婉君》· 周伯健|文|朴素冲淡，读来安静。|周|zhou1
巩|gong3|《宋史》· 曾巩|史|清朗端方，音节沉稳。|曾|zeng1
子|zi3|《史记》· 曾子|史|温润有致，余韵清长。|曾|zeng1
羽|yu3|《三国志》· 关羽|史|开阔明净，气度舒展。|关|guan1
总|zong3|《陈书》· 江总|史|清雅含蓄，声调从容。|江|jiang1
锁|suo3|《还珠格格》· 金锁|文|端凝有力，读来顺口。|金|jin1
海|hai3|现代 · 康海|文|灵秀清润，余味悠远。|康|kang1
统|tong3|《梁书》· 萧统|史|疏朗自然，音色清亮。|萧|xiao1
衍|yan3|《梁书》· 萧衍|史|厚重端正，收束沉稳。|萧|xiao1
宝桢|bao3 zhen1|《清史稿》· 丁宝桢|史|轻盈婉转，音节柔和。|丁|ding1
汝昌|ru3 chang1|《清史稿》· 丁汝昌|史|刚健明快，气韵开阔。|丁|ding1
铁干|tie3 gan1|《连城诀》· 花铁干|文|文雅清和，书卷气足。|花|hua1
九思|jiu3 si1|《元史》· 柯九思|史|朴素冲淡，读来安静。|柯|ke1
起轩|qi3 xuan1|《鬼丈夫》· 柯起轩|文|清朗端方，音节沉稳。|柯|ke1
雨鹃|yu3 juan1|《苍天有泪》· 萧雨鹃|文|温润有致，余韵清长。|萧|xiao1
柬之|jian3 zhi1|《旧唐书》· 张柬之|史|开阔明净，气度舒展。|张|zhang1
子期|zi3 qi1|《列子》· 钟子期|文|清雅含蓄，声调从容。|钟|zhong1
子仪|zi3 yi2|《旧唐书》· 郭子仪|史|端凝有力，读来顺口。|郭|guo1
子牙|zi3 ya2|《封神演义》· 姜子牙|文|灵秀清润，余味悠远。|姜|jiang1
广仁|guang3 ren2|《清史稿》· 康广仁|史|疏朗自然，音色清亮。|康|kang1
九龄|jiu3 ling2|《旧唐书》· 张九龄|史|厚重端正，收束沉稳。|张|zhang1
买臣|mai3 chen2|《汉书》· 朱买臣|史|轻盈婉转，音节柔和。|朱|zhu1
显祖|xian3 zu3|《明史》· 汤显祖|史|刚健明快，气韵开阔。|汤|tang1
子野|zi3 ye3|《宋史》· 张先（字子野）|史|文雅清和，书卷气足。|张|zhang1
以智|yi3 zhi4|《明史》· 方以智|史|朴素冲淡，读来安静。|方|fang1
守敬|shou3 jing4|《元史》· 郭守敬|史|清朗端方，音节沉稳。|郭|guo1
有为|you3 wei4|《清史稿》· 康有为|史|温润有致，余韵清长。|康|kang1
养浩|yang3 hao4|《元史》· 张养浩|史|开阔明净，气度舒展。|张|zhang1
载堉|zai3 yu4|《明史》· 朱载堉|史|清雅含蓄，声调从容。|朱|zhu1
骥|ji4|《儿女英雄传》· 安骥|文|端凝有力，读来顺口。|安|an1
颢|hao4|《旧唐书》· 崔颢|史|灵秀清润，余味悠远。|崔|cui1
护|hu4|唐代 · 崔护|文|疏朗自然，音色清亮。|崔|cui1
奉|feng4|《三国志》· 丁奉|史|厚重端正，收束沉稳。|丁|ding1
靖|jing4|《射雕英雄传》· 郭靖|文|轻盈婉转，音节柔和。|郭|guo1
岳|yue4|《晋书》· 潘岳|史|刚健明快，气韵开阔。|潘|pan1
宓|mi4|《洛神赋》· 甄宓|文|文雅清和，书卷气足。|甄|zhen1
会|hui4|《三国志》· 钟会|史|朴素冲淡，读来安静。|钟|zhong1
进|jin4|《儒林外史》· 周进|文|清朗端方，音节沉稳。|周|zhou1
自珍|zi4 zhen1|《清史稿》· 龚自珍|史|温润有致，余韵清长。|龚|gong1
汉卿|han4 qing1|《元史》· 关汉卿|史|开阔明净，气度舒展。|关|guan1
日磾|ri4 di1|《汉书》· 金日磾|史|清雅含蓄，声调从容。|金|jin1
耐庵|nai4 an1|《水浒传》· 施耐庵|文|端凝有力，读来顺口。|施|shi1
庆春|qing4 chun1|现代 · 老舍（舒庆春）|文|灵秀清润，余味悠远。|舒|shu1
定方|ding4 fang1|《旧唐书》· 苏定方|史|疏朗自然，音色清亮。|苏|su1
曼殊|man4 shu1|近代 · 苏曼殊|文|厚重端正，收束沉稳。|苏|su1
尚香|shang4 xiang1|《三国志》· 孙尚香|史|轻盈婉转，音节柔和。|孙|sun1
悟空|wu4 kong1|《西游记》· 孙悟空|文|刚健明快，气韵开阔。|孙|sun1
啸风|xiao4 feng1|《连城诀》· 汪啸风|文|文雅清和，书卷气足。|汪|wang1
若花|ruo4 hua1|《镜花缘》· 阴若花|文|朴素冲淡，读来安静。|阴|yin1
翠山|cui4 shan1|《倚天屠龙记》· 张翠山|文|清朗端方，音节沉稳。|张|zhang1
释之|shi4 zhi1|《史记》· 张释之|史|温润有致，余韵清长。|张|zhang1
自忠|zi4 zhong1|近代 · 张自忠|史|开阔明净，气度舒展。|张|zhang1
念琛|nian4 chen1|《三朵花》· 章念琛|文|清雅含蓄，声调从容。|章|zhang1
去非|qu4 fei1|宋代 · 周去非|史|端凝有力，读来顺口。|周|zhou1
亚夫|ya4 fu1|《史记》· 周亚夫|史|灵秀清润，余味悠远。|周|zhou1
仲康|zhong4 kang1|《婉君》· 周仲康|文|疏朗自然，音色清亮。|周|zhou1
自清|zi4 qing1|现代 · 朱自清|文|厚重端正，收束沉稳。|朱|zhu1
世臣|shi4 chen2|清代 · 包世臣|文|轻盈婉转，音节柔和。|包|bao1
孝孺|xiao4 ru2|《明史》· 方孝孺|史|刚健明快，气韵开阔。|方|fang1
士其|shi4 qi2|现代 · 高士其|文|文雅清和，书卷气足。|高|gao1
木兰|mu4 lan2|《木兰诗》· 花木兰|文|朴素冲淡，读来安静。|花|hua1
雁容|yan4 rong2|《窗外》· 江雁容|文|清朗端方，音节沉稳。|江|jiang1
梦凡|meng4 fan2|《望夫崖》· 康梦凡|文|温润有致，余韵清长。|康|kang1
世纶|shi4 lun2|《清史稿》· 施世纶|史|开阔明净，气度舒展。|施|shi1
道临|dao4 lin2|现代 · 孙道临|文|清雅含蓄，声调从容。|孙|sun1
绿萍|lv4 ping2|《一帘幽梦》· 汪绿萍|文|端凝有力，读来顺口。|汪|wang1
应辰|ying4 chen2|《宋史》· 汪应辰|史|灵秀清润，余味悠远。|汪|wang1
道成|dao4 cheng2|《南齐书》· 萧道成|史|疏朗自然，音色清亮。|萧|xiao1
念琦|nian4 qi2|《三朵花》· 章念琦|文|厚重端正，收束沉稳。|章|zhang1
念瑜|nian4 yu2|《三朵花》· 章念瑜|文|轻盈婉转，音节柔和。|章|zhang1
太炎|tai4 yan2|近代 · 章太炎|文|刚健明快，气韵开阔。|章|zhang1
树人|shu4 ren2|现代 · 鲁迅（周树人）|文|文雅清和，书卷气足。|周|zhou1
用纯|yong4 chun2|清初 · 朱用纯|史|朴素冲淡，读来安静。|朱|zhu1
万里|wan4 li3|《宋史》· 江万里|史|清朗端方，音节沉稳。|江|jiang1
仲景|zhong4 jing3|《后汉书》· 张仲景|史|温润有致，余韵清长。|张|zhang1
圣叹|sheng4 tan4|明末清初 · 金圣叹|文|开阔明净，气度舒展。|金|jin1
悟净|wu4 jing4|《西游记》· 沙悟净|文|清雅含蓄，声调从容。|沙|sha1
味道|wei4 dao4|《旧唐书》· 苏味道|史|端凝有力，读来顺口。|苏|su1
若望|ruo4 wang4|清代 · 汤若望|史|灵秀清润，余味悠远。|汤|tang1
必大|bi4 da4|《宋史》· 周必大|史|疏朗自然，音色清亮。|周|zhou1
参|can1|《旧唐书》· 岑参|史|厚重端正，收束沉稳。|岑|cen2
英|ying1|《神雕侠侣》· 程英|文|轻盈婉转，音节柔和。|程|cheng2
彰|zhang1|《三侠五义》· 韩彰|文|刚健明快，气韵开阔。|韩|han2
颇|po1|《史记》· 廉颇|史|文雅清和，书卷气足。|廉|lian2
方|fang1|《三侠五义》· 卢方|文|朴素冲淡，读来安静。|卢|lu2
丹|dan1|《还珠格格》· 蒙丹|文|清朗端方，音节沉稳。|蒙|meng2
迁|qian1|《水浒传》· 时迁|文|温润有致，余韵清长。|时|shi2
康|kang1|《射雕英雄传》· 杨康|文|开阔明净，气度舒展。|杨|yang2
逍|xiao1|《倚天屠龙记》· 杨逍|文|清雅含蓄，声调从容。|杨|yang2
谦|qian1|《明史》· 于谦|史|端凝有力，读来顺口。|于|yu2
书桓|shu1 huan2|《情深深雨濛濛》· 何书桓|文|灵秀清润，余味悠远。|何|he2
中则|zhong1 ze2|《笑傲江湖》· 宁中则|文|疏朗自然，音色清亮。|宁|ning2
归农|gui1 nong2|《雪山飞狐》· 田归农|文|厚重端正，收束沉稳。|田|tian2
青文|qing1 wen2|《雪山飞狐》· 田青文|文|轻盈婉转，音节柔和。|田|tian2
秋雨|qiu1 yu3|现代 · 余秋雨|文|刚健明快，气韵开阔。|余|yu2
家洛|jia1 luo4|《书剑恩仇录》· 陈家洛|文|文雅清和，书卷气足。|陈|chen2
千叶|qian1 ye4|《倚天屠龙记》· 韩千叶|文|朴素冲淡，读来安静。|韩|han2
风怪|feng1 guai4|《西游记》· 黄风怪|文|清朗端方，音节沉稳。|黄|huang2
三藏|san1 zang4|《西游记》· 唐三藏|文|温润有致，余韵清长。|唐|tang2
熙凤|xi1 feng4|《红楼梦》· 王熙凤|文|开阔明净，气度舒展。|王|wang2
中鹤|zhong1 he4|《天龙八部》· 云中鹤|文|清雅含蓄，声调从容。|云|yun2
云|yun2|《连城诀》· 狄云|文|端凝有力，读来顺口。|狄|di2
蓉|rong2|《射雕英雄传》· 黄蓉|文|灵秀清润，余味悠远。|黄|huang2
敖|ao2|《镜花缘》· 唐敖|文|疏朗自然，音色清亮。|唐|tang2
吟霜|yin2 shuang1|《梅花烙》· 白吟霜|文|厚重端正，收束沉稳。|白|bai2
朝英|chao2 ying1|《射雕英雄传》· 林朝英|文|轻盈婉转，音节柔和。|林|lin2
平之|ping2 zhi1|《笑傲江湖》· 林平之|文|刚健明快，气韵开阔。|林|lin2
濛初|meng2 chu1|明代 · 凌濛初|文|文雅清和，书卷气足。|凌|ling2
乘风|cheng2 feng1|《连城诀》· 刘乘风|文|朴素冲淡，读来安静。|刘|liu2
兰芳|lan2 fang1|现代 · 梅兰芳|文|清朗端方，音节沉稳。|梅|mei2
伯光|bo2 guang1|《笑傲江湖》· 田伯光|文|温润有致，余韵清长。|田|tian2
云奇|yun2 qi2|《雪山飞狐》· 曹云奇|文|开阔明净，气度舒展。|曹|cao2
孩儿|hai2 er2|《西游记》· 红孩儿|文|清雅含蓄，声调从容。|红|hong2
尧臣|yao2 chen2|《宋史》· 梅尧臣|史|端凝有力，读来顺口。|梅|mei2
白石|bai2 shi2|现代 · 齐白石|文|灵秀清润，余味悠远。|齐|qi2
成龙|cheng2 long2|《清史稿》· 于成龙|史|疏朗自然，音色清亮。|于|yu2
文本|wen2 ben3|《旧唐书》· 岑文本|史|厚重端正，收束沉稳。|岑|cen2
文鼎|wen2 ding3|《清史稿》· 梅文鼎|史|轻盈婉转，音节柔和。|梅|mei2
明远|ming2 yuan3|《几度夕阳红》· 杨明远|文|刚健明快，气韵开阔。|杨|yang2
人凤|ren2 feng4|《雪山飞狐》· 苗人凤|文|文雅清和，书卷气足。|苗|miao2
元璐|yuan2 lu4|《明史》· 倪元璐|史|朴素冲淡，读来安静。|倪|ni2
承志|cheng2 zhi4|《碧血剑》· 袁承志|文|清朗端方，音节沉稳。|袁|yuan2
斐|fei3|《飞狐外传》· 胡斐|文|温润有致，余韵清长。|胡|hu2
统|tong3|《三国志》· 凌统|史|开阔明净，气度舒展。|凌|ling2
冕|mian3|《儒林外史》· 王冕|文|清雅含蓄，声调从容。|王|wang2
戬|jian3|《封神演义》· 杨戬|文|端凝有力，读来顺口。|杨|yang2
骨精|gu3 jing1|《西游记》· 白骨精|文|灵秀清润，余味悠远。|白|bai2
锦枫|jin3 feng1|《镜花缘》· 廉锦枫|文|疏朗自然，音色清亮。|廉|lian2
小山|xiao3 shan1|《镜花缘》· 唐小山|文|厚重端正，收束沉稳。|唐|tang2
子安|zi3 an1|《雪山飞狐》· 陶子安|文|轻盈婉转，音节柔和。|陶|tao2
紫绡|zi3 xiao1|《镜花缘》· 颜紫绡|文|刚健明快，气韵开阔。|颜|yan2
坦之|tan3 zhi1|《天龙八部》· 游坦之|文|文雅清和，书卷气足。|游|you2
紫衣|zi3 yi1|《飞狐外传》· 袁紫衣|文|朴素冲淡，读来安静。|袁|yuan2
友文|you3 wen2|《在水一方》· 卢友文|文|清朗端方，音节沉稳。|卢|lu2
采臣|cai3 chen2|《聊斋志异》· 宁采臣|文|温润有致，余韵清长。|宁|ning2
雪琴|xue3 qin2|《情深深雨濛濛》· 王雪琴|文|开阔明净，气度舒展。|王|wang2
子久|zi3 jiu3|《元史》· 黄公望（字子久）|史|清雅含蓄，声调从容。|黄|huang2
子孝|zi3 xiao4|《三国志》· 曹仁（字子孝）|史|端凝有力，读来顺口。|曹|cao2
好问|hao3 wen4|《金史》· 元好问|史|灵秀清润，余味悠远。|元|yuan2
瓒|zan4|《明史》· 倪瓒|史|疏朗自然，音色清亮。|倪|ni2
庆|qing4|《三侠五义》· 徐庆|文|厚重端正，收束沉稳。|徐|xu2
过|guo4|《神雕侠侣》· 杨过|文|轻盈婉转，音节柔和。|杨|yang2
禁|jin4|《三国志》· 于禁|史|刚健明快，气韵开阔。|于|yu2
慕天|mu4 tian1|《几度夕阳红》· 何慕天|文|文雅清和，书卷气足。|何|he2
药师|yao4 shi1|《射雕英雄传》· 黄药师|文|朴素冲淡，读来安静。|黄|huang2
退思|tui4 si1|《连城诀》· 凌退思|文|清朗端方，音节沉稳。|凌|ling2
正风|zheng4 feng1|《笑傲江湖》· 刘正风|文|温润有致，余韵清长。|刘|liu2
日休|ri4 xiu1|唐代 · 皮日休|文|开阔明净，气度舒展。|皮|pi2
破天|po4 tian1|《侠客行》· 石破天|文|清雅含蓄，声调从容。|石|shi2
岫烟|xiu4 yan1|《红楼梦》· 邢岫烟|文|端凝有力，读来顺口。|邢|xing2
玉堂|yu4 tang2|《三侠五义》· 白玉堂|文|灵秀清润，余味悠远。|白|bai2
近南|jin4 nan2|《鹿鼎记》· 陈近南|文|疏朗自然，音色清亮。|陈|chen2
若鸿|ruo4 hong2|《水云间》· 梅若鸿|文|厚重端正，收束沉稳。|梅|mei2
若兰|ruo4 lan2|《飞狐外传》· 苗若兰|文|轻盈婉转，音节柔和。|苗|miao2
嗣同|si4 tong2|《清史稿》· 谭嗣同|史|刚健明快，气韵开阔。|谭|tan2
大猷|da4 you2|《明史》· 俞大猷|史|文雅清和，书卷气足。|俞|yu2
岱岩|dai4 yan2|《倚天屠龙记》· 俞岱岩|文|朴素冲淡，读来安静。|俞|yu2
乐梅|le4 mei2|《鬼丈夫》· 袁乐梅|文|清朗端方，音节沉稳。|袁|yuan2
震子|zhen4 zi3|《封神演义》· 雷震子|文|温润有致，余韵清长。|雷|lei2
玉凤|yu4 feng4|《儿女英雄传》· 何玉凤|文|开阔明净，气度舒展。|何|he2
振玉|zhen4 yu4|近代 · 罗振玉|史|清雅含蓄，声调从容。|罗|luo2
斯|si1|《史记》· 李斯|史|端凝有力，读来顺口。|李|li3
青|qing1|《还珠格格》· 柳青|文|灵秀清润，余味悠远。|柳|liu3
笙|sheng1|《连城诀》· 水笙|文|疏朗自然，音色清亮。|水|shui3
惜春|xi1 chun1|《红楼梦》· 贾惜春|文|厚重端正，收束沉稳。|贾|jia3
师师|shi1 shi1|《水浒传》· 李师师|文|轻盈婉转，音节柔和。|李|li3
春花|chun1 hua1|《飞狐外传》· 马春花|文|刚健明快，气韵开阔。|马|ma3
公权|gong1 quan2|《旧唐书》· 柳公权|史|文雅清和，书卷气足。|柳|liu3
湘莲|xiang1 lian2|《红楼梦》· 柳湘莲|文|朴素冲淡，读来安静。|柳|liu3
秋水|qiu1 shui3|《天龙八部》· 李秋水|文|清朗端方，音节沉稳。|李|li3
三宝|san1 bao3|《旧唐书》· 马三宝|史|温润有致，余韵清长。|马|ma3
家骏|jia1 jun4|《白马啸西风》· 马家骏|文|开阔明净，气度舒展。|马|ma3
平|ping2|《三侠五义》· 蒋平|文|清雅含蓄，声调从容。|蒋|jiang3
红|hong2|《还珠格格》· 柳红|文|端凝有力，读来顺口。|柳|liu3
迎春|ying2 chun1|《红楼梦》· 贾迎春|文|灵秀清润，余味悠远。|贾|jia3
元春|yuan2 chun1|《红楼梦》· 贾元春|文|疏朗自然，音色清亮。|贾|jia3
琼枝|qiong2 zhi1|《儒林外史》· 沈琼枝|文|厚重端正，收束沉稳。|沈|shen3
延年|yan2 nian2|《汉书》· 李延年|史|轻盈婉转，音节柔和。|李|li3
德潜|de2 qian2|《清史稿》· 沈德潜|史|刚健明快，气韵开阔。|沈|shen3
宏甫|hong2 fu3|《明史》· 李贽（字宏甫）|史|文雅清和，书卷气足。|李|li3
吉甫|ji2 fu3|《旧唐书》· 李吉甫|史|朴素冲淡，读来安静。|李|li3
文蔚|wen2 wei4|近代 · 柏文蔚|史|清朗端方，音节沉稳。|柏|bai3
文秀|wen2 xiu4|《白马啸西风》· 李文秀|文|温润有致，余韵清长。|李|li3
如是|ru2 shi4|明末 · 柳如是|文|开阔明净，气度舒展。|柳|liu3
广|guang3|《史记》· 李广|史|清雅含蓄，声调从容。|李|li3
广森|guang3 sen1|《清史稿》· 孔广森|史|端凝有力，读来顺口。|孔|kong3
子胥|zi3 xu1|《史记》· 伍子胥|史|灵秀清润，余味悠远。|伍|wu3
颖达|ying3 da2|《旧唐书》· 孔颖达|史|疏朗自然，音色清亮。|孔|kong3
五儿|wu3 er2|《红楼梦》· 柳五儿|文|厚重端正，收束沉稳。|柳|liu3
祖常|zu3 chang2|《元史》· 马祖常|史|轻盈婉转，音节柔和。|马|ma3
子远|zi3 yuan3|《三国志》· 许攸（字子远）|史|刚健明快，气韵开阔。|许|xu3
子厚|zi3 hou4|《旧唐书》· 柳宗元（字子厚）|史|文雅清和，书卷气足。|柳|liu3
尹默|yin3 mo4|近代 · 沈尹默|史|朴素冲淡，读来安静。|沈|shen3
式|shi4|《汉书》· 卜式|史|清朗端方，音节沉稳。|卜|bu3
贺|he4|《新唐书》· 李贺|史|温润有致，余韵清长。|李|li3
煜|yu4|《新五代史》· 李煜|史|开阔明净，气度舒展。|李|li3
括|kuo4|《宋史》· 沈括|史|清雅含蓄，声调从容。|沈|shen3
探春|tan4 chun1|《红楼梦》· 贾探春|文|端凝有力，读来顺口。|贾|jia3
义山|yi4 shan1|《旧唐书》· 李商隐（字义山）|史|灵秀清润，余味悠远。|李|li3
易安|yi4 an1|《宋史》· 李清照（号易安）|史|疏朗自然，音色清亮。|李|li3
霈文|pei4 wen2|《庭院深深》· 柏霈文|文|厚重端正，收束沉稳。|柏|bai3
莫愁|mo4 chou2|《神雕侠侣》· 李莫愁|文|轻盈婉转，音节柔和。|李|li3
静言|jing4 yan2|《哑妻》· 柳静言|文|刚健明快，气韵开阔。|柳|liu3
必武|bi4 wu3|近代 · 董必武|史|文雅清和，书卷气足。|董|dong3
后主|hou4 zhu3|《新五代史》· 李煜|史|朴素冲淡，读来安静。|李|li3
亚子|ya4 zi3|近代 · 柳亚子|文|清朗端方，音节沉稳。|柳|liu3
致远|zhi4 yuan3|《元史》· 马致远|史|温润有致，余韵清长。|马|ma3
尚任|shang4 ren4|《清史稿》· 孔尚任|史|开阔明净，气度舒展。|孔|kong3
既济|ji4 ji4|《旧唐书》· 沈既济|史|清雅含蓄，声调从容。|沈|shen3
冲|chong1|《笑傲江湖》· 令狐冲|文|端凝有力，读来顺口。|令狐|ling4 hu2
昇|sheng1|《梦溪笔谈》· 毕昇|史|灵秀清润，余味悠远。|毕|bi4
飞|fei1|《情深深雨濛濛》· 杜飞|文|疏朗自然，音色清亮。|杜|du4
芊芊|qian1 qian1|《水云间》· 杜芊芊|文|厚重端正，收束沉稳。|杜|du4
贞观|zhen1 guan1|《清史稿》· 顾贞观|史|轻盈婉转，音节柔和。|顾|gu4
依萍|yi1 ping2|《情深深雨濛濛》· 陆依萍|文|刚健明快，气韵开阔。|陆|lu4
宾王|bin1 wang2|《旧唐书》· 骆宾王|史|文雅清和，书卷气足。|骆|luo4
宣怀|xuan1 huai2|《清史稿》· 盛宣怀|史|朴素冲淡，读来安静。|盛|sheng4
公明|gong1 ming2|《封神演义》· 赵公明|文|清朗端方，音节沉稳。|赵|zhao4
光祖|guang1 zu3|《元史》· 郑光祖|史|温润有致，余韵清长。|郑|zheng4
之问|zhi1 wen4|《新唐书》· 宋之问|史|开阔明净，气度舒展。|宋|song4
金桂|jin1 gui4|《红楼梦》· 夏金桂|文|清雅含蓄，声调从容。|夏|xia4
飞燕|fei1 yan4|《汉书》· 赵飞燕|史|端凝有力，读来顺口。|赵|zhao4
遥|yao2|《倚天屠龙记》· 范遥|文|灵秀清润，余味悠远。|范|fan4
濂|lian2|《明史》· 宋濂|史|疏朗自然，音色清亮。|宋|song4
云帆|yun2 fan1|《一帘幽梦》· 费云帆|文|厚重端正，收束沉稳。|费|fei4
无双|wu2 shuang1|《神雕侠侣》· 陆无双|文|轻盈婉转，音节柔和。|陆|lu4
如萍|ru2 ping2|《情深深雨濛濛》· 陆如萍|文|刚健明快，气韵开阔。|陆|lu4
红蕖|hong2 qu2|《镜花缘》· 骆红蕖|文|文雅清和，书卷气足。|骆|luo4
盈盈|ying2 ying2|《笑傲江湖》· 任盈盈|文|朴素冲淡，读来安静。|任|ren4
元佐|yuan2 zuo3|《宋史》· 赵元佐|史|清朗端方，音节沉稳。|赵|zhao4
文佩|wen2 pei4|《情深深雨濛濛》· 傅文佩|文|温润有致，余韵清长。|傅|fu4
禹|yu3|《后汉书》· 邓禹|史|开阔明净，气度舒展。|邓|deng4
敏|min3|《倚天屠龙记》· 赵敏|文|清雅含蓄，声调从容。|赵|zhao4
少卿|shao3 qing1|《儒林外史》· 杜少卿|文|端凝有力，读来顺口。|杜|du4
小双|xiao3 shuang1|《在水一方》· 杜小双|文|灵秀清润，余味悠远。|杜|du4
恺之|kai3 zhi1|《晋书》· 顾恺之|史|疏朗自然，音色清亮。|顾|gu4
紫芝|zi3 zhi1|《镜花缘》· 孟紫芝|文|厚重端正，收束沉稳。|孟|meng4
紫樱|zi3 ying1|《镜花缘》· 魏紫樱|文|轻盈婉转，音节柔和。|魏|wei4
紫薇|zi3 wei1|《还珠格格》· 夏紫薇|文|刚健明快，气韵开阔。|夏|xia4
我行|wo3 xing2|《笑傲江湖》· 任我行|文|文雅清和，书卷气足。|任|ren4
远桥|yuan3 qiao2|《倚天屠龙记》· 宋远桥|文|朴素冲淡，读来安静。|宋|song4
雪宜|xue3 yi2|《碧血剑》· 夏雪宜|文|清朗端方，音节沉稳。|夏|xia4
祖禹|zu3 yu3|《清史稿》· 顾祖禹|史|温润有致，余韵清长。|顾|gu4
子尹|zi3 yin3|《清史稿》· 郑珍（字子尹）|史|开阔明净，气度舒展。|郑|zheng4
小玉|xiao3 yu4|《霍小玉传》· 霍小玉|文|清雅含蓄，声调从容。|霍|huo4
子固|zi3 gu4|《宋史》· 赵孟坚（字子固）|史|端凝有力，读来顺口。|赵|zhao4
照|zhao4|《宋书》· 鲍照|史|灵秀清润，余味悠远。|鲍|bao4
誉|yu4|《天龙八部》· 段誉|文|疏朗自然，音色清亮。|段|duan4
进|jin4|《儒林外史》· 范进|文|厚重端正，收束沉稳。|范|fan4
逊|xun4|《倚天屠龙记》· 谢逊|文|轻盈婉转，音节柔和。|谢|xie4
孝通|xiao4 tong1|现代 · 费孝通|文|刚健明快，气韵开阔。|费|fei4
桂英|gui4 ying1|《杨家将》· 穆桂英|文|文雅清和，书卷气足。|穆|mu4
震山|zhen4 shan1|《连城诀》· 万震山|文|朴素冲淡，读来安静。|万|wan4
问天|wen4 tian1|《笑傲江湖》· 向问天|文|清朗端方，音节沉稳。|向|xiang4
自严|zi4 yan2|《明史》· 毕自严|史|温润有致，余韵清长。|毕|bi4
亚蒙|ya4 meng2|《雪珂》· 顾亚蒙|文|开阔明净，气度舒展。|顾|gu4
又琳|you4 lin2|《青青河边草》· 华又琳|文|清雅含蓄，声调从容。|华|hua4
梦萍|meng4 ping2|《情深深雨濛濛》· 陆梦萍|文|端凝有力，读来顺口。|陆|lu4
念慈|nian4 ci2|《射雕英雄传》· 穆念慈|文|灵秀清润，余味悠远。|穆|mu4
二娘|er4 niang2|《天龙八部》· 叶二娘|文|疏朗自然，音色清亮。|叶|ye4
复古|fu4 gu3|《宋史》· 戴复古|史|厚重端正，收束沉稳。|戴|dai4
力子|li4 zi3|近代 · 邵力子|史|轻盈婉转，音节柔和。|邵|shao4
令畤|ling4 zhi4|《宋史》· 赵令畤|史|刚健明快，气韵开阔。|赵|zhao4
# 张姓名例补全：每个全名声调至少三例
苍|cang1|《史记》· 张苍|史|清朗端方，音色明亮。|张|zhang1
良|liang2|《史记》· 张良|史|从容有谋，音节平稳。|张|zhang1
仪|yi2|《史记》· 张仪|史|开阔明净，气度舒展。|张|zhang1
咏|yong3|《宋史》· 张咏|史|厚重端正，收束沉稳。|张|zhang1
溥|pu3|《明史》· 张溥|史|文雅清和，书卷气足。|张|zhang1
謇|jian3|近代 · 张謇|史|端毅清朗，收束有力。|张|zhang1
旭|xu4|《新唐书》· 张旭|史|清朗端方，音色明亮。|张|zhang1
继|ji4|《唐才子传》· 张继|史|平稳开阔，读来端正。|张|zhang1
岱|dai4|明末清初 · 张岱|史|冲淡清远，有虚静之美。|张|zhang1
春帆|chun1 fan1|清代 · 张春帆|文|轻盈婉转，音节柔和。|张|zhang1
方平|fang1 ping2|《宋史》· 张方平|史|端正温润，如玉在朝。|张|zhang1
昌龄|chang1 ling2|《新唐书》· 张昌龄|史|清朗端方，音色明亮。|张|zhang1
君宝|jun1 bao3|《倚天屠龙记》· 张君宝|文|灵秀清润，余味悠远。|张|zhang1
公谨|gong1 jin3|《旧唐书》· 张公谨|史|端毅清朗，收束有力。|张|zhang1
之洞|zhi1 dong4|《清史稿》· 张之洞|史|端方持重，音色沉稳。|张|zhang1
闻天|wen2 tian1|近代 · 张闻天|史|开阔明净，气度舒展。|张|zhang1
伯驹|bo2 ju1|现代 · 张伯驹|文|文雅清和，书卷气足。|张|zhang1
伯苓|bo2 ling2|近代 · 张伯苓|史|端凝有力，读来顺口。|张|zhang1
齐贤|qi2 xian2|《宋史》· 张齐贤|史|厚重端正，收束沉稳。|张|zhang1
延赏|yan2 shang3|《旧唐书》· 张延赏|史|温润有致，余韵清长。|张|zhang1
涵予|han2 yu3|现代 · 张涵予|文|清灵婉约，音色柔亮。|张|zhang1
承志|cheng2 zhi4|现代 · 张承志|文|疏朗自然，音色清亮。|张|zhang1
九思|jiu3 si1|《元史》· 张九思|史|冲和清静，气韵绵长。|张|zhang1
百熙|bai3 xi1|《清史稿》· 张百熙|史|温厚清雅，余韵悠然。|张|zhang1
守节|shou3 jie2|《史记正义》· 张守节|史|端方持重，音色沉稳。|张|zhang1
九成|jiu3 cheng2|《宋史》· 张九成|史|文雅清和，书卷气足。|张|zhang1
友鸾|you3 luan2|现代 · 张友鸾|文|轻盈婉转，音节柔和。|张|zhang1
雨绮|yu3 qi3|现代 · 张雨绮|文|清丽明快，音节灵动。|张|zhang1
子厚|zi3 hou4|《宋史》· 张载（字子厚）|史|厚重端正，收束沉稳。|张|zhang1
子寿|zi3 shou4|《旧唐书》· 张九龄（字子寿）|史|温润有致，余韵清长。|张|zhang1
仲冶|zhong4 ye3|《清史稿》· 张问陶（字仲冶）|史|文雅清和，书卷气足。|张|zhang1
瑞敏|rui4 min3|现代 · 张瑞敏|文|端毅清朗，收束有力。|张|zhang1
仲素|zhong4 su4|《全唐诗》· 张仲素|诗|平稳开阔，读来端正。|张|zhang1
道济|dao4 ji4|《旧唐书》· 张说（字道济）|史|开阔明净，气度舒展。|张|zhang1
曼玉|man4 yu4|现代 · 张曼玉|文|清灵婉约，音色柔亮。|张|zhang1
# 夏姓名例补全：每个全名声调至少一例
圭|gui1|南宋 · 夏圭|史|清朗端方，音色明亮。|夏|xia4
言|yan2|《明史》· 夏言|史|端凝有力，读来顺口。|夏|xia4
衍|yan3|现代 · 夏衍|文|开阔明净，气度舒展。|夏|xia4
梦|meng4|现代 · 夏梦|文|轻盈婉转，音节柔和。|夏|xia4
之光|zhi1 guang1|现代 · 夏之光|文|灵秀清润，余味悠远。|夏|xia4
征农|zheng1 nong2|现代 · 夏征农|文|温厚清雅，余韵悠然。|夏|xia4
东海|dong1 hai3|《家有儿女》· 夏东海|文|开阔明净，气度舒展。|夏|xia4
无且|wu2 ju1|《史记》· 夏无且|史|古朴沉静，音节铿锵。|夏|xia4
原吉|yuan2 ji2|《明史》· 夏原吉|史|端方温厚，音节沉稳。|夏|xia4
国勇|guo2 yong3|姓名语料 · 夏国勇|名|刚健明朗，收束有力。|夏|xia4
明翰|ming2 han4|现代 · 夏明翰|史|清正端方，尾音沉稳。|夏|xia4
晓宇|xiao3 yu3|姓名语料 · 夏晓宇|名|清灵婉约，音色柔亮。|夏|xia4
子健|zi3 jian4|姓名语料 · 夏子健|名|刚健明快，气韵开阔。|夏|xia4
志清|zhi4 qing1|现代 · 夏志清|文|清朗端方，音节沉稳。|夏|xia4
贺良|he4 liang2|《汉书》· 夏贺良|史|温润有致，余韵清长。|夏|xia4
瀚宇|han4 yu3|现代 · 夏瀚宇|文|开阔明净，气度舒展。|夏|xia4
克立|ke4 li4|现代 · 夏克立|文|刚健沉雄，收束有力。|夏|xia4
完淳|wan2 chun2|明末 · 夏完淳|史|端毅清朗，收束有力。|夏|xia4
文汐|wen2 xi1|现代 · 夏文汐|文|清灵婉约，音色柔亮。|夏|xia4
济安|ji4 an1|现代 · 夏济安|文|温厚清雅，余韵悠然。|夏|xia4
敬渠|jing4 qu2|清代 · 夏敬渠|文|文雅清和，书卷气足。|夏|xia4
丏尊|mian3 zun1|现代 · 夏丏尊|文|温厚清雅，余韵悠然。|夏|xia4
鲁奇|lu3 qi2|《新五代史》· 夏鲁奇|史|端方持重，音色沉稳。|夏|xia4
# 单字名：每种声调三例
昭|zhao1|班昭 · 汉|史|温雅明净，有史家风范。|班|ban1
骞|qian1|张骞 · 汉|史|开阔高远，音色清亮。|张|zhang1
超|chao1|班超 · 汉|史|昂扬进取，读来有力。|班|ban1
原|yuan2|屈原 · 战国|史|本真开阔，有草木原野之气。|屈|qu1
白|bai2|李白 · 唐|史|明净简练，音色清越。|李|li3
游|you2|陆游 · 宋|史|从容自在，有余韵。|陆|lu4
甫|fu3|杜甫 · 唐|史|端正厚实，读来沉稳。|杜|du4
永|yong3|柳永 · 宋|史|悠长温润，余音舒展。|柳|liu3
岛|dao3|贾岛 · 唐|史|清寂有诗意，音节轻收。|贾|jia3
轼|shi4|苏轼 · 宋|史|端正有力，收束沉稳。|苏|su1
牧|mu4|杜牧 · 唐|史|清朗宽阔，有原野之意。|杜|du4
愈|yu4|韩愈 · 唐|史|明朗有力，余韵清长。|韩|han2
飞|fei1|《三国志》· 张飞|史|昂扬清亮，收束有力。|张|zhang1
轲|ke1|《史记》· 孟轲|史|清越慷慨，有余韵。|孟|meng4
衡|heng2|《后汉书》· 张衡|史|平稳开阔，读来端正。|张|zhang1
辙|zhe2|《宋史》· 苏辙|史|沉静含蓄，音色温润。|苏|su1
武|wu3|《汉书》· 苏武|史|刚正沉毅，短促有力。|苏|su1
拯|zheng3|《宋史》· 包拯|史|端方刚直，读来沉稳。|包|bao1
信|xin4|《史记》· 韩信|史|果决明快，收束沉稳。|韩|han2
固|gu4|《后汉书》· 班固|史|笃实端正，音色厚重。|班|ban1
# 稀见姓氏名例：取自史书、诸子与古典文学
舒|shu1|《左传》· 酆舒|史|古朴沉静，音节铿锵。|酆|feng1
半千|ban4 qian1|《旧唐书》· 员半千|史|清朗端方，音色明亮。|员|yun4
扶|fu2|《三国志》· 句扶|史|端正温润，有古人之风。|句|gou1
演|yan3|北宋 · 秘演|文|清寂有诗意，音节轻收。|秘|bi4
钦|qin1|《后汉书》· 繁钦|史|文雅清和，书卷气足。|繁|po2
固|gu4|《三国志》· 眭固|史|厚重端正，收束沉稳。|眭|sui1
德扆|de2 yi3|《宋史》· 折德扆|史|端方持重，音色沉稳。|折|she2
公奭|gong1 shi4|《史记》· 召公奭|史|端庄古雅，有金石之声。|召|shao4
虎|hu3|《史记》· 召虎|史|刚健有力，音节短促。|召|shao4
予|yu3|《史记》· 宰予|史|温润含蓄，音色清雅。|宰|zai3
到|dao4|《史记》· 慎到|史|果决明快，收束沉稳。|慎|shen4
信|xin4|《北史》· 庾信|史|端凝有力，读来顺口。|庾|yu3
亮|liang4|《晋书》· 庾亮|史|开阔明净，气度舒展。|庾|yu3
肩吾|jian1 wu2|《梁书》· 庾肩吾|史|文雅清和，书卷气足。|庾|yu3
咏|yong3|北宋 · 万俟咏|文|悠长温润，余音舒展。|万俟|mo4 qi2
灭明|mie4 ming2|《史记》· 澹台灭明|史|清正端方，尾音沉稳。|澹台|tan2 tai2
长|chang2|《论语》· 公冶长|史|从容有谋，音节平稳。|公冶|gong1 ye3
兴|xing1|《三国志》· 濮阳兴|史|昂扬进取，读来有力。|濮阳|pu2 yang2
意|yi4|《史记》· 淳于意|史|端方温厚，音节沉稳。|淳于|chun2 yu2
髡|kun1|《史记》· 淳于髡|史|古朴沉静，音节铿锵。|淳于|chun2 yu2
缇萦|ti2 ying2|《史记》· 淳于缇萦|史|清灵婉约，音色柔亮。|淳于|chun2 yu2
湫|qiu1|《左传》· 仲孙湫|史|古朴沉静，音节铿锵。|仲孙|zhong4 sun1
黄帝|huang2 di4|《史记》· 轩辕黄帝|史|厚重端正，气度恢宏。|轩辕|xuan1 yuan2
楚|chu3|《旧唐书》· 令狐楚|史|清朗端方，音节沉稳。|令狐|ling4 hu2
德棻|de2 fen1|《旧唐书》· 令狐德棻|史|文雅清和，书卷气足。|令狐|ling4 hu2
冲|chong1|《笑傲江湖》· 令狐冲|文|疏朗自然，音色清亮。|令狐|ling4 hu2
无忌|wu2 ji4|《旧唐书》· 长孙无忌|史|端凝有力，读来顺口。|长孙|zhang3 sun1
露薇|lu4 wei1|现代 · 闾丘露薇|文|清灵婉约，音色柔亮。|闾丘|lv2 qiu1
曙|shu3|《唐才子传》· 司空曙|史|清朗端方，音色明亮。|司空|si1 kong1
图|tu2|《旧唐书》· 司空图|史|厚重端正，收束沉稳。|司空|si1 kong1
氏|shi4|《孔子家语》· 亓官氏|史|端庄古雅，音节沉稳。|亓官|qi2 guan1
奄息|yan3 xi1|《诗经·秦风·黄鸟》· 子车奄息|诗|古朴沉静，音节铿锵。|子车|zi3 ju1
仲行|zhong4 hang2|《诗经·秦风·黄鸟》· 子车仲行|诗|厚重端正，收束沉稳。|子车|zi3 ju1
针虎|zhen1 hu3|《诗经·秦风·黄鸟》· 子车针虎|诗|刚健有力，音节短促。|子车|zi3 ju1
师|shi1|《史记》· 颛孙师|史|端凝有力，读来顺口。|颛孙|zhuan1 sun1
赤|chi4|《史记》· 公西赤|史|明朗有力，余韵清长。|公西|gong1 xi1
开|kai1|《史记》· 漆雕开|史|开阔明净，气度舒展。|漆雕|qi1 diao1
赤|chi4|《史记》· 壤驷赤|史|明朗有力，余韵清长。|壤驷|rang3 si4
焘|tao1|《魏书》· 拓跋焘|史|厚重端正，收束沉稳。|拓跋|tuo4 ba2
宏|hong2|《魏书》· 拓跋宏|史|开阔明净，气度舒展。|拓跋|tuo4 ba2
珪|gui1|《魏书》· 拓跋珪|史|清朗端方，音色明亮。|拓跋|tuo4 ba2
黑|hei1|《史记》· 宰父黑|史|古朴沉静，音节铿锵。|宰父|zai3 fu3
赤|chi4|《谷梁传》· 谷梁赤|史|明朗有力，余韵清长。|谷梁|gu3 liang2
牙|ya2|《左传》· 东郭牙|史|端凝有力，读来顺口。|东郭|dong1 guo1
先生|xian1 sheng1|《中山狼传》· 东郭先生|文|朴素冲淡，读来安静。|东郭|dong1 guo1
肸|xi1|《左传》· 羊舌肸|史|清朗端方，音色明亮。|羊舌|yang2 she2
职|zhi2|《左传》· 羊舌职|史|端方温厚，音节沉稳。|羊舌|yang2 she2
高|gao1|《论语》· 微生高|史|清朗端方，音色明亮。|微生|wei1 sheng1
亩|mu3|《论语》· 微生亩|史|厚重端正，收束沉稳。|微生|wei1 sheng1
襄仲|xiang1 zhong4|《左传》· 东门襄仲|史|开阔明净，气度舒展。|东门|dong1 men2
豹|bao4|《史记》· 西门豹|史|刚健明快，气韵开阔。|西门|xi1 men2
伦|lun2|《后汉书》· 第五伦|史|端方温厚，音节沉稳。|第五|di4 wu3
琦|qi2|《旧唐书》· 第五琦|史|温润有致，余韵清长。|第五|di4 wu3
# 稀见姓氏名例补遗：史书与百家姓人物
伯|bo2|《诗经·曹风·下泉》· 郇伯|诗|端庄古雅，有金石之声。|郇|huan2
越|yue4|汉代 · 郇越|史|清朗开阔，音节沉稳。|郇|huan2
谟|mo2|唐代 · 郇谟|史|端凝有力，读来顺口。|郇|huan2
旃|zhan1|明代 · 郇旃|史|古朴沉静，音节铿锵。|郇|huan2
野|ye3|明代 · 莘野|史|开阔疏朗，有原野之气。|莘|shen1
开|kai1|清代 · 莘开|文|开阔明净，气度舒展。|莘|shen1
融|rong2|宋代 · 莘融|史|温厚清润，声调安稳。|莘|shen1
珍孙|zhen1 sun1|《魏书》· 宗政珍孙|史|厚重端正，收束沉稳。|宗政|zong1 zheng4
辨|bian4|唐代 · 宗政辨|史|端方持重，音色沉稳。|宗政|zong1 zheng4
仪|yi2|《左传》· 太叔仪|史|温润有致，余韵清长。|太叔|tai4 shu1
惠子|hui4 zi3|《礼记》· 司寇惠子|史|温厚清雅，余韵悠然。|司寇|si1 kou4
亥|hai4|《左传》· 司寇亥|史|厚重端正，收束沉稳。|司寇|si1 kou4
文|wen2|周代 · 司寇文|史|文雅清和，书卷气足。|司寇|si1 kou4
清臣|qing1 chen2|《金史》· 夹谷清臣|史|清正端方，尾音沉稳。|夹谷|jia1 gu3
衡|heng2|《金史》· 夹谷衡|史|平稳开阔，读来端正。|夹谷|jia1 gu3
谢奴|xie4 nu2|《金史》· 夹谷谢奴|史|刚健明快，气韵开阔。|夹谷|jia1 gu3
之奇|zhi1 qi2|《元史》· 夹谷之奇|史|端凝有力，读来顺口。|夹谷|jia1 gu3
蠕|ru2|商代 · 南门蠕|史|古朴沉静，音节铿锵。|南门|nan2 men2
# 双字名例补全：常见复姓与古典人物字号
娜娜|na4 na4|现代 · 欧阳娜娜|文|清灵婉约，音色柔亮。|欧阳|ou1 yang2
震华|zhen4 hua2|现代 · 欧阳震华|文|明朗有力，余韵清长。|欧阳|ou1 yang2
予倩|yu3 qian4|现代 · 欧阳予倩|文|清雅含蓄，声调从容。|欧阳|ou1 yang2
中石|zhong1 shi2|现代 · 欧阳中石|文|文雅清和，书卷气足。|欧阳|ou1 yang2
夏丹|xia4 dan1|现代 · 欧阳夏丹|文|清朗端方，音色明亮。|欧阳|ou1 yang2
自远|zi4 yuan3|现代 · 欧阳自远|文|开阔明净，气度舒展。|欧阳|ou1 yang2
明高|ming2 gao1|现代 · 欧阳明高|文|厚重端正，收束沉稳。|欧阳|ou1 yang2
晓平|xiao3 ping2|现代 · 欧阳晓平|文|温润有致，余韵清长。|欧阳|ou1 yang2
平凯|ping2 kai3|现代 · 欧阳平凯|文|平稳开阔，读来端正。|欧阳|ou1 yang2
钟灿|zhong1 can4|现代 · 欧阳钟灿|文|端凝有力，读来顺口。|欧阳|ou1 yang2
山尊|shan1 zun1|现代 · 欧阳山尊|文|端庄古雅，有金石之声。|欧阳|ou1 yang2
奋强|fen4 qiang2|现代 · 欧阳奋强|文|刚健明快，气韵开阔。|欧阳|ou1 yang2
常林|chang2 lin2|现代 · 欧阳常林|文|从容有谋，音节平稳。|欧阳|ou1 yang2
友权|you3 quan2|现代 · 欧阳友权|文|温厚清雅，余韵悠然。|欧阳|ou1 yang2
明日|ming2 ri4|《雪花女神龙》· 欧阳明日|文|清朗端方，音色明亮。|欧阳|ou1 yang2
婉儿|wan3 er2|唐代 · 上官婉儿|史|清灵婉约，音色柔亮。|上官|shang4 guan1
云珠|yun2 zhu1|现代 · 上官云珠|文|温润有致，余韵清长。|上官|shang4 guan1
元让|yuan2 rang4|《三国志》· 夏侯惇（字元让）|史|端方持重，音色沉稳。|夏侯|xia4 hou2
孔明|kong3 ming2|《三国志》· 诸葛亮（字孔明）|史|清正端方，尾音沉稳。|诸葛|zhu1 ge3
不败|bu4 bai4|《笑傲江湖》· 东方不败|文|刚健沉雄，收束有力。|东方|dong1 fang1
勃勃|bo2 bo2|《晋书》· 赫连勃勃|史|厚重端正，收束沉稳。|赫连|he4 lian2
惟明|wei2 ming2|《旧唐书》· 皇甫惟明|史|清朗端方，音色明亮。|皇甫|huang2 fu3
敬德|jing4 de2|《旧唐书》· 尉迟恭（字敬德）|史|刚健明快，气韵开阔。|尉迟|yu4 chi2
子方|zi3 fang1|《汉书》· 闻人通汉（字子方）|史|端方温厚，音节沉稳。|闻人|wen2 ren2
黑獭|hei1 ta3|《周书》· 宇文泰（小字黑獭）|史|古朴沉静，音节铿锵。|宇文|yu3 wen2
道明|dao4 ming2|《晋书》· 慕容垂（字道明）|史|开阔明净，气度舒展。|慕容|mu4 rong2
伯机|bo2 ji1|元代 · 鲜于枢（字伯机）|文|文雅清和，书卷气足。|鲜于|xian1 yu2
雷登|lei2 deng1|现代 · 司徒雷登|史|厚重端正，收束沉稳。|司徒|si1 tu2
表圣|biao3 sheng4|《旧唐书》· 司空图（字表圣）|史|清雅含蓄，声调从容。|司空|si1 kong1
子张|zi3 zhang1|《史记》· 颛孙师（字子张）|史|端凝有力，读来顺口。|颛孙|zhuan1 sun1
蕻良|hong2 liang2|现代 · 端木蕻良|文|温厚清雅，余韵悠然。|端木|duan1 mu4
子期|zi3 qi1|《史记》· 巫马施（字子期）|史|温润有致，余韵清长。|巫马|wu1 ma3
舆如|yu2 ru2|《史记》· 公西舆如|史|端方温厚，音节沉稳。|公西|gong1 xi1
徒父|tu2 fu4|《史记》· 漆雕徒父|史|厚重端正，收束沉稳。|漆雕|qi1 diao1
子春|zi3 chun1|《礼记》· 乐正子春|史|清朗端方，音色明亮。|乐正|yue4 zheng4
子徒|zi3 tu2|《史记》· 壤驷赤（字子徒）|史|端凝有力，读来顺口。|壤驷|rang3 si4
佛狸|fo2 li2|《宋书》· 拓跋焘（小字佛狸）|史|古朴沉静，音节铿锵。|拓跋|tuo4 ba2
子黑|zi3 hei1|《史记》· 宰父黑（字子黑）|史|厚重端正，收束沉稳。|宰父|zai3 fu3
孟明|meng4 ming2|《左传》· 百里视（字孟明）|史|端方持重，音色沉稳。|百里|bai3 li3
长万|chang2 wan4|《左传》· 南宫长万|史|刚健明快，气韵开阔。|南宫|nan2 gong1
伯鱼|bo2 yu2|《后汉书》· 第五伦（字伯鱼）|史|温润有致，余韵清长。|第五|di4 wu3
丑奴|chou3 nu2|《魏书》· 万俟丑奴|史|古朴沉静，音节铿锵。|万俟|mo4 qi2
文子|wen2 zi3|《左传》· 太叔仪（谥文子）|史|文雅清和，书卷气足。|太叔|tai4 shu1
何忌|he2 ji4|《左传》· 仲孙何忌|史|端方温厚，音节沉稳。|仲孙|zhong4 sun1
子龙|zi3 long2|《后汉书》· 申屠蟠（字子龙）|史|刚健明快，气韵开阔。|申屠|shen1 tu2
叔向|shu1 xiang4|《左传》· 羊舌肸（字叔向）|史|端凝有力，读来顺口。|羊舌|yang2 she2
长翁|chang2 weng1|《汉书》· 梁丘贺（字长翁）|史|厚重端正，收束沉稳。|梁丘|liang2 qiu1
丕显|pi1 xian3|《呼家将》· 呼延丕显|文|端方持重，音色沉稳。|呼延|hu1 yan2
吹雪|chui1 xue3|《陆小凤传奇》· 西门吹雪|文|清冷疏朗，音色清越。|西门|xi1 men2
子长|zi3 chang2|《论语》· 公冶长（字子长）|史|温厚清雅，余韵悠然。|公冶|gong1 ye3
休伯|xiu1 bo2|《后汉书》· 繁钦（字休伯）|史|温润有致，余韵清长。|繁|po2
叔耕|shu1 geng1|明代 · 莘野（字叔耕）|史|朴素冲淡，读来安静。|莘|shen1
子我|zi3 wo3|《史记》· 宰予（字子我）|史|古朴沉静，音节铿锵。|宰|zai3
臣仲|chen2 zhong4|汉代 · 郇越（字臣仲）|史|端方温厚，音节沉稳。|郇|huan2
元进|yuan2 jin4|《三国演义》· 眭元进|文|刚健明朗，收束有力。|眭|sui1
子始|zi3 shi3|《春秋谷梁传》· 谷梁赤（字子始）|史|清雅含蓄，声调从容。|谷梁|gu3 liang2
子正|zi3 zheng4|《史记》· 公良孺（字子正）|史|端凝有力，读来顺口。|公良|gong1 liang2
晓虹|xiao3 hong2|姓名语料 · 牧晓虹|名|清灵婉约，音色柔亮。|牧|mu4
雨辰|yu3 chen2|姓名语料 · 广雨辰|名|清润温厚，声调安稳。|广|guang3
维宁|wei2 ning2|姓名语料 · 益维宁|名|端方温厚，音节沉稳。|益|yi4
# === GENERATED SAME-SURNAME EXAMPLES START ===
# 由 scripts/build-example-fills.cjs 生成；仅补无手写名例的姓氏与声调组合。
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
东初|dong1 chu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
东勇|dong1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
仁基|ren2 ji1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
仁哲|ren2 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
久峰|jiu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
久海|jiu3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
义兰|yi4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赵|zhao4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
丹青|dan1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
仁康|ren2 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
国敏|guo2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
国义|guo2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
子恩|zi3 en1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
敏瑾|min3 jin3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
凤林|feng4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
凤敏|feng4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钱|qian2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
仁宇|ren2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
乔圣|qiao2 sheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
久峰|jiu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
久国|jiu3 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
久海|jiu3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
义敏|yi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
义亮|yi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孙|sun1
东仁|dong1 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|李|li3
乔松|qiao2 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|李|li3
久东|jiu3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|李|li3
久全|jiu3 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|李|li3
久海|jiu3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|李|li3
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|李|li3
义善|yi4 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|李|li3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
东丰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
久英|jiu3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
久明|jiu3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
勇敏|yong3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|周|zhou1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
东初|dong1 chu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
东儒|dong1 ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
乔生|qiao2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
仁全|ren2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
仁敏|ren2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
乔木|qiao2 mu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
久清|jiu3 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
勇敏|yong3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
勇义|yong3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
义仁|yi4 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
义凤|yi4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吴|wu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
东兰|dong1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
乔文|qiao2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
勇亮|yong3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
义春|yi4 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
义哲|yi4 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
义顺|yi4 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郑|zheng4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
东仁|dong1 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
东勇|dong1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
乔生|qiao2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
乔凤|qiao2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
久武|jiu3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
义仁|yi4 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
义亮|yi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|王|wang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
东昕|dong1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
东城|dong1 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
元山|yuan2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
勇超|yong3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
启海|qi3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
健生|jian4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
义国|yi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
健美|jian4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
义志|yi4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冯|feng2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
东冬|dong1 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
东仁|dong1 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
东勇|dong1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
乔恩|qiao2 en1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
乔年|qiao2 nian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
久东|jiu3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
久海|jiu3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
义丰|yi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
义亮|yi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陈|chen2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
东星|dong1 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
光宇|guang1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
天旭|tian1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
全超|quan2 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
玲敏|ling2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
启元|qi3 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|褚|chu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
新江|xin1 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
春晓|chun1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
文江|wen2 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
龙武|long2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
祥玉|xiang2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
宇航|yu3 hang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
志芳|zhi4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
志成|zhi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
俊秀|jun4 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卫|wei4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
东兰|dong1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
东义|dong1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
仁生|ren2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
元勇|yuan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
勇辉|yong3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
子亮|zi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒋|jiang3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
东子|dong1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
勇辉|yong3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
久成|jiu3 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
敏海|min3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
义辉|yi4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
义哲|yi4 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沈|shen3
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
东子|dong1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
乔生|qiao2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
仁全|ren2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
仁美|ren2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
仁亮|ren2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
久松|jiu3 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
久明|jiu3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
启宇|qi3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
勇义|yong3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
凤敏|feng4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
向义|xiang4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韩|han2
东安|dong1 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
东仁|dong1 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
东勇|dong1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
东义|dong1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
乔安|qiao2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
乔博|qiao2 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
久春|jiu3 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
勇敏|yong3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
久义|jiu3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
义元|yi4 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
义亮|yi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杨|yang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
乔禾|qiao2 he2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
久安|jiu3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
健勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
义亮|yi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朱|zhu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
元生|yuan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
久明|jiu3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
守礼|shou3 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
凤山|feng4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
义杰|yi4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秦|qin2
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
佳期|jia1 qi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
丹霞|dan1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
东敏|dong1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
元芝|yuan2 zhi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
哲明|zhe2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
全勇|quan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
启冬|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
志国|zhi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
玉柱|yu4 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尤|you2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
东哲|dong1 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
仁安|ren2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
乔林|qiao2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
全亮|quan2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
久英|jiu3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
久龙|jiu3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
健康|jian4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
健美|jian4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|许|xu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
东初|dong1 chu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
乔新|qiao2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
仁全|ren2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
义兰|yi4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|何|he2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
东尧|dong1 yao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
仁英|ren2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
仁明|ren2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
启超|qi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
义山|yi4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
义国|yi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
义敏|yi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
凤义|feng4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吕|lv3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
博仁|bo2 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
启文|qi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
凤海|feng4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
岳定|yue4 ding4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|施|shi1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
思佳|si1 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
仁良|ren2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
国瑞|guo2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
敏智|min3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孔|kong3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
东义|dong1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
仁清|ren2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
元勇|yuan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
勇安|yong3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
启敏|qi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
义生|yi4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
义成|yi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曹|cao2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
仁英|ren2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
卓慧|zhuo2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
启超|qi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
义明|yi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
彦子|yan4 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|严|yan2
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
山峰|shan1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
勤勇|qin2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
国柱|guo2 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
子春|zi3 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
启梅|qi3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
向宝|xiang4 bao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|华|hua4
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
东勇|dong1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
东健|dong1 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
仁哲|ren2 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
仁敏|ren2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
启辉|qi3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
久哲|jiu3 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
勇健|yong3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
义城|yi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
亮宇|liang4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|金|jin1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
东初|dong1 chu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
东敏|dong1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
仁康|ren2 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
仁敏|ren2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
启敏|qi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
凤山|feng4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
亿勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|魏|wei4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
丹英|dan1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
佳宇|jia1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
元生|yuan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
元亮|yuan2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
凤芝|feng4 zhi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
善海|shan4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
定玉|ding4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陶|tao2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
乔生|qiao2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
仁慧|ren2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
久春|jiu3 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
凤山|feng4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姜|jiang1
丹青|dan1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
佳明|jia1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
叔玉|shu1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
怀英|huai2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
成海|cheng2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
宇飞|yu3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
晓雪|xiao3 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戚|qi1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
东兰|dong1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
仁安|ren2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
仁全|ren2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
元海|yuan2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
启东|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
启宇|qi3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
勇毅|yong3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
亮生|liang4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
义明|yi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
亮子|liang4 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谢|xie4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
东仁|dong1 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
仁博|ren2 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
元海|yuan2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
元亮|yuan2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
启超|qi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
勇明|yong3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
启宇|qi3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
义春|yi4 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
义鹏|yi4 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邹|zou1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
开朗|kai1 lang3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
家睿|jia1 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
国安|guo2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
文亮|wen2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
亮星|liang4 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
凤琴|feng4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|喻|yu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
冬青|dong1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
佳骏|jia1 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
兰芝|lan2 zhi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
成林|cheng2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
铭久|ming2 jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
敏霜|min3 shuang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
海霞|hai3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
志英|zhi4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
璐璐|lu4 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柏|bai3
一山|yi1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
清龙|qing1 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
文青|wen2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
泉祥|quan2 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
锦花|jin3 hua1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
建国|jian4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
木锦|mu4 jin3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
旺旺|wang4 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|水|shui3
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
新英|xin1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
安平|an1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
春凤|chun1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
仁安|ren2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
兰群|lan2 qun2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
学海|xue2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
国柱|guo2 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
启玲|qi3 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
晓玉|xiao3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
志芳|zhi4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
凤霞|feng4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|窦|dou4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
东新|dong1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
国义|guo2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
勇思|yong3 si1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
勇武|yong3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
启月|qi3 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
月秀|yue4 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|章|zhang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
昌钦|chang1 qin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
松林|song1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
飞宇|fei1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
洋洋|yang2 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
龙子|long2 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
文耀|wen2 yao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
子龙|zi3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
晓虎|xiao3 hu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
凤山|feng4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
志海|zhi4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|云|yun2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
东博|dong1 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
东敏|dong1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
勇生|yong3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
勇文|yong3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
启旺|qi3 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
健宇|jian4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苏|su1
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
东文|dong1 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
东子|dong1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
久辉|jiu3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
勇全|yong3 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
义清|yi4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
凤亮|feng4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|潘|pan1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
东轩|dong1 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
东林|dong1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
学勇|xue2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
元凤|yuan2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
启超|qi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
守礼|shou3 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
启耀|qi3 yao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
亮明|liang4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|葛|ge3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
康生|kang1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
家伟|jia1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
哲|zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
国峰|guo2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
鸿雁|hong2 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
启新|qi3 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
敏霞|min3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
旦立|dan4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|奚|xi1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
仁芳|ren2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
仁全|ren2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
勤勇|qin2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
全旺|quan2 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
启东|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
勇毅|yong3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
义鹏|yi4 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|范|fan4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
东安|dong1 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
东岳|dong1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
仁文|ren2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
元瑞|yuan2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
勇辉|yong3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
启海|qi3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
义安|yi4 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
健美|jian4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
健慧|jian4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|彭|peng2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
青山|qing1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
新明|xin1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
丰伟|feng1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
国清|guo2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
元鹏|yuan2 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
鹏宇|peng2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
学政|xue2 zheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
子玉|zi3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
志超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郎|lang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
平玉|ping2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
子英|zi3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
义轩|yi4 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
毅智|yi4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲁|lu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
全生|quan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
兰秀|lan2 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
启昕|qi3 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
勇全|yong3 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
子玉|zi3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
健辉|jian4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
善勇|shan4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韦|wei2
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|昌|chang1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|昌|chang1
梅生|mei2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|昌|chang1
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|昌|chang1
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|昌|chang1
子杰|zi3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|昌|chang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|昌|chang1
玉杰|yu4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|昌|chang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
仁卓|ren2 zhuo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
久生|jiu3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
勇健|yong3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
义学|yi4 xue2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
凤旭|feng4 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|马|ma3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
春玉|chun1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
元礼|yuan2 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苗|miao2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
青青|qing1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
飞云|fei1 yun2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
菊云|ju2 yun2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
晓|xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
建涛|jian4 tao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
建国|jian4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凤|feng4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
清渊|qing1 yuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
忠伟|zhong1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
清露|qing1 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
国清|guo2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
如海|ru2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
含露|han2 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
子晴|zi3 qing2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
海子|hai3 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
水月|shui3 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
瑞卿|rui4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
智勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
建慧|jian4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|花|hua1
东兰|dong1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
仁生|ren2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
勇飞|yong3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
勇霞|yong3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
子敏|zi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
义清|yi4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
义海|yi4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
健志|jian4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|方|fang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
东江|dong1 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
仁美|ren2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
子东|zi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
启元|qi3 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
启定|qi3 ding4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
凤美|feng4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|俞|yu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
全英|quan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
全志|quan2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
健康|jian4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
义亮|yi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|任|ren4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
仁松|ren2 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
仁国|ren2 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
勇明|yong3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
勇敏|yong3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
久凤|jiu3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
义江|yi4 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
凤宇|feng4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|袁|yuan2
东青|dong1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
冬雪|dong1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
家顺|jia1 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
仁英|ren2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
元景|yuan2 jing3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
宇轩|yu3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
志湛|zhi4 zhan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柳|liu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
家辉|jia1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
思蕊|si1 rui3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
家善|jia1 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
承毅|cheng2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
子龙|zi3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
子墨|zi3 mo4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
凤林|feng4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
义志|yi4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲍|bao4
嘉佳|jia1 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
洪波|hong2 bo1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
玲玲|ling2 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
德贵|de2 gui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
海东|hai3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
雪梅|xue3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
显秀|xian3 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
志超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
秀文|xiu4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
璐璐|lu4 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|班|ban1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
国义|guo2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
久峰|jiu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
久成|jiu3 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
久武|jiu3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
敏慧|min3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
亮芳|liang4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
健勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|史|shi3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
仁佳|ren2 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
仁元|ren2 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
久玉|jiu3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
义山|yi4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
义武|yi4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
义亮|yi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|唐|tang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
思佳|si1 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
丹旭|dan1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
文勇|wen2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
元禄|yuan2 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
敏英|min3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
璐彦|lu4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|费|fei4
冬英|dong1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
佳楠|jia1 nan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
英武|ying1 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
友利|you3 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
志军|zhi4 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
志洁|zhi4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
毅敏|yi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
翠翠|cui4 cui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廉|lian2
嘉辉|jia1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
佳楠|jia1 nan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
嘉毅|jia1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
国安|guo2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
国明|guo2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
国庆|guo2 qing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
永安|yong3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
敏玲|min3 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
晓晓|xiao3 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
启智|qi3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
志辉|zhi4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
夏敏|xia4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|岑|cen2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
元清|yuan2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
仁明|ren2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
凤山|feng4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
健平|jian4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薛|xue1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
丹宇|dan1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
丰玉|feng1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
仁芳|ren2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
全林|quan2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
勇生|yong3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
显武|xian3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雷|lei2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
东久|dong1 jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
全勇|quan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
国志|guo2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
子清|zi3 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
健康|jian4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
善定|shan4 ding4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贺|he4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
兰心|lan2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
勤武|qin2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
启超|qi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
健英|jian4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
凤美|feng4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|倪|ni2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
丹峰|dan1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
元霄|yuan2 xiao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
仁明|ren2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
子嘉|zi3 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
健辉|jian4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
义武|yi4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汤|tang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
嘉欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
丹霞|dan1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
昭义|zhao1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
学武|xue2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
怀玉|huai2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
久昕|jiu3 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
久明|jiu3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
义高|yi4 gao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
志成|zhi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
慧旭|hui4 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|滕|teng2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
嘉欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
佳兰|jia1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
冬雪|dong1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
文勇|wen2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
国志|guo2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
启辉|qi3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
久玲|jiu3 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
健灵|jian4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|殷|yin1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
东健|dong1 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
乔欣|qiao2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
仁全|ren2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
勇江|yong3 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
启敏|qi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
义兰|yi4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|罗|luo2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
元龙|yuan2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
文亮|wen2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
凤睿|feng4 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毕|bi4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
东恒|dong1 heng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
国海|guo2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
国瑞|guo2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
子萱|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
凤春|feng4 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
义明|yi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
健宇|jian4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
亮义|liang4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郝|hao3
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
丹莹|dan1 ying2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
宽海|kuan1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
家柱|jia1 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
明海|ming2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
子丹|zi3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
晓岚|xiao3 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
武永|wu3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
义明|yi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
旭亮|xu4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邬|wu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
东子|dong1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
子峰|zi3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
启元|qi3 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
启念|qi3 nian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
志义|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|安|an1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
国新|guo2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
国武|guo2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
国志|guo2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
宇春|yu3 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
久龙|jiu3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
凤杰|feng4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|常|chang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
嘉春|jia1 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
嘉平|jia1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
天宇|tian1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
嘉庆|jia1 qing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
国安|guo2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
国富|guo2 fu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
宇轩|yu3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
美美|mei3 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
伟毅|wei3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
彦博|yan4 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
善耀|shan4 yao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐|yue4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
东雪|dong1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
仁安|ren2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
全美|quan2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
仁泰|ren2 tai4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
久江|jiu3 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
久龙|jiu3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
子勇|zi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
子亮|zi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
健飞|jian4 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
义良|yi4 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
凤海|feng4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
凤月|feng4 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|于|yu2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
成龙|cheng2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
学志|xue2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
宇星|yu3 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
启龙|qi3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
晓颖|xiao3 ying3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
凤琴|feng4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
圣敏|sheng4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
玉静|yu4 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|时|shi2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
丰志|feng1 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
元峰|yuan2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
仁宇|ren2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
勇国|yong3 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
子敏|zi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
健杰|jian4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
善勇|shan4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
志义|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|傅|fu4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
光辉|guang1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
青文|qing1 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
卓|zhuo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
文星|wen2 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
文霞|wen2 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
德义|de2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
雪梅|xue3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
义明|yi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
志武|zhi4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
树义|shu4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皮|pi2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
春英|chun1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
修武|xiu1 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
恒凤|heng2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
启武|qi3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卞|bian4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
东超|dong1 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
国敏|guo2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
子平|zi3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
凤山|feng4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
义鹏|yi4 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
凤敏|feng4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
志静|zhi4 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|齐|qi2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
佳玉|jia1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
仁春|ren2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
元年|yuan2 nian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
国志|guo2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
宇轩|yu3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
健生|jian4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
凤立|feng4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|康|kang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
嘉欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
修平|xiu1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
家敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
元新|yuan2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
元杰|yuan2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
文勇|wen2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
启元|qi3 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
健平|jian4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
碧玉|bi4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伍|wu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
东晖|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
东兰|dong1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
丰慧|feng1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
久安|jiu3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
启敏|qi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
健辉|jian4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|余|yu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
千山|qian1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
真子|zhen1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
英进|ying1 jin4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
明松|ming2 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
明明|ming2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
德秀|de2 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
海山|hai3 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
海霞|hai3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
向辉|xiang4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
秀莲|xiu4 lian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|元|yuan2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
一帆|yi1 fan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
冰武|bing1 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
国成|guo2 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
凡勇|fan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
学亮|xue2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
子龙|zi3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
子夏|zi3 xia4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
彦文|yan4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
志秀|zhi4 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卜|bu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
元初|yuan2 chu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
兰凤|lan2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
健新|jian4 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|顾|gu4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
元超|yuan2 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
勤国|qin2 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
久成|jiu3 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
子敏|zi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|孟|meng4
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
春花|chun1 hua1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
元康|yuan2 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
如衡|ru2 heng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
晓芳|xiao3 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
晓琳|xiao3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
秀英|xiu4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
义杰|yi4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
四海|si4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
慧善|hui4 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|平|ping2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
东初|dong1 chu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
东全|dong1 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
乔生|qiao2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
仁元|ren2 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
久生|jiu3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
义仁|yi4 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
义敏|yi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
义志|yi4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黄|huang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
思佳|si1 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
星宇|xing1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
文新|wen2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
成龙|cheng2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
子涵|zi3 han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
志文|zhi4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
志武|zhi4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|和|he2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
家善|jia1 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
怀宇|huai2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
仁智|ren2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
宇欣|yu3 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
启国|qi3 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
宇静|yu3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
克瑞|ke4 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|穆|mu4
新春|xin1 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
飞雪|fei1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
思健|si1 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
国基|guo2 ji1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
博仁|bo2 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
寒子|han2 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
启良|qi3 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
子显|zi3 xian3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
志东|zhi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|萧|xiao1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
东凤|dong1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
元江|yuan2 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
元龙|yuan2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
国武|guo2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
元凤|yuan2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
启生|qi3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
健康|jian4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
义林|yi4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尹|yin3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
东照|dong1 zhao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
仁安|ren2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
元勇|yuan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
仁禄|ren2 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
启东|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
久龙|jiu3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
启武|qi3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
健英|jian4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
义林|yi4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
彦宇|yan4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
志义|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姚|yao2
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
乔茵|qiao2 yin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
全海|quan2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
国义|guo2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
启英|qi3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
勇敏|yong3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
义安|yi4 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
义龙|yi4 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
志健|zhi4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邵|shao4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|湛|zhan4
娟娟|juan1 juan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|湛|zhan4
新霞|xin1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|湛|zhan4
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|湛|zhan4
洁儿|jie2 er2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|湛|zhan4
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|湛|zhan4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|湛|zhan4
俊杰|jun4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|湛|zhan4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
东城|dong1 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
元亮|yuan2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
久生|jiu3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
子美|zi3 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|汪|wang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
开宇|kai1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
恩进|en1 jin4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
元明|yuan2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
鹏宇|peng2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
国凤|guo2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
宇轩|yu3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
子龙|zi3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
勇耀|yong3 yao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
凤霞|feng4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
玉柱|yu4 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祁|qi2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
东芳|dong1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
元辉|yuan2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
仁凤|ren2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
勇仁|yong3 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
义芳|yi4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
义兰|yi4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
凤美|feng4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|毛|mao2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
丹丹|dan1 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
山林|shan1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
文东|wen2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
成明|cheng2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
良俊|liang2 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
晓梅|xiao3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
伟业|wei3 ye4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
秀英|xiu4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
治水|zhi4 shui3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
露露|lu4 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禹|yu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
佳春|jia1 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
春玲|chun1 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
怀英|huai2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
国栋|guo2 dong4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
子旭|zi3 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
亿|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
志高|zhi4 gao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
会翔|hui4 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
亚莉|ya4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|狄|di2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
星宇|xing1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
嘉乐|jia1 le4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
国超|guo2 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
国良|guo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
子兰|zi3 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
向辉|xiang4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
凤琴|feng4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|米|mi3
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
芳芳|fang1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
思哲|si1 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
楠|nan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
人龙|ren2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
海|hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
晓丹|xiao3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
宇杰|yu3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
晓晓|xiao3 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
智康|zhi4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
志城|zhi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
跃俊|yue4 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贝|bei4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
霜雪|shuang1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
心志|xin1 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
国辉|guo2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
国良|guo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
晓平|xiao3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
秀英|xiu4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
志国|zhi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
照岳|zhao4 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|明|ming2
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
文清|wen2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
学慧|xue2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
晓丹|xiao3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
启武|qi3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
永亮|yong3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
智渊|zhi4 yuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
志国|zhi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
智勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
立志|li4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|臧|zang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
春芳|chun1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
春梅|chun1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
凤霞|feng4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|计|ji4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
开歌|kai1 ge1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
开彩|kai1 cai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
文超|wen2 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
明霞|ming2 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
晴艳|qing2 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
永平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
彩瑞|cai3 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
玉芳|yu4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
圣群|sheng4 qun2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伏|fu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
家生|jia1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
佳文|jia1 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
佳俊|jia1 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
乔明|qiao2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
国玉|guo2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
宇飞|yu3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
晓凤|xiao3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
凤洋|feng4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|成|cheng2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
东原|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
元安|yuan2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
元永|yuan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
元璐|yuan2 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
启新|qi3 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
勇亮|yong3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戴|dai4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
家嘉|jia1 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
东林|dong1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
佳颖|jia1 ying3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
家瑞|jia1 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
仁年|ren2 nian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
哲敏|zhe2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
文彦|wen2 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
宇飞|yu3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
宇文|yu3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
宇猛|yu3 meng3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
晓玉|xiao3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
凤杰|feng4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
毅敏|yi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谈|tan2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
乔生|qiao2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
仁国|ren2 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
久生|jiu3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
勇亮|yong3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
义峰|yi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
善玉|shan4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宋|song4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
江峰|jiang1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
家琦|jia1 qi2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
天翼|tian1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
国新|guo2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
文杰|wen2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
于海|yu2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
子良|zi3 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
孔颖|kong3 ying3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
雪峻|xue3 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
慧|hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
义英|yi4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
志成|zhi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
忆挺|yi4 ting3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
善玉|shan4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茅|mao2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
佳玉|jia1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
元新|yuan2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
学武|xue2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
学慧|xue2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
子山|zi3 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
义成|yi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庞|pang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
东林|dong1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
仁芳|ren2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
仁国|ren2 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
国敏|guo2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
元义|yuan2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
勇清|yong3 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
义春|yi4 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
义成|yi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
义志|yi4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|熊|xiong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
东江|dong1 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
东瑞|dong1 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
元文|yuan2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
仁凤|ren2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
子英|zi3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
子瑞|zi3 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
凤武|feng4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|纪|ji4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
丹飞|dan1 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
忠义|zhong1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
国欣|guo2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
仁福|ren2 fu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
文圣|wen2 sheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
子英|zi3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
凤平|feng4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
义海|yi4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|舒|shu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
新峰|xin1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
星宇|xing1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
全福|quan2 fu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
学武|xue2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
成玉|cheng2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
子涵|zi3 han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
晓凤|xiao3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
志国|zhi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屈|qu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
思嘉|si1 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
东文|dong1 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
光宇|guang1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
新月|xin1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
全生|quan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
明武|ming2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
怀顺|huai2 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
子龙|zi3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
志峰|zhi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
志全|zhi4 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
凤武|feng4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
立志|li4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|项|xiang4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
丰溪|feng1 xi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
嘉敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
仁豪|ren2 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
文海|wen2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
兰玉|lan2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
子森|zi3 sen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
健康|jian4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
励立|li4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祝|zhu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
东文|dong1 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
乔峰|qiao2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
元礼|yuan2 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
启清|qi3 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
启平|qi3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
启立|qi3 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
义峰|yi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
义霞|yi4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
义旺|yi4 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|董|dong3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
仁春|ren2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
仁元|ren2 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
勇基|yong3 ji1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
久成|jiu3 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
健毅|jian4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁|liang2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
元峰|yuan2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
全勇|quan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
元志|yuan2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
久明|jiu3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
义生|yi4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
义鹏|yi4 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
凤敏|feng4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
凤瑞|feng4 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杜|du4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
东湘|dong1 xiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
佳蕊|jia1 rui3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
嘉慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
仁良|ren2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
成武|cheng2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
国峻|guo2 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
敏丹|min3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
健平|jian4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阮|ruan3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
仁哲|ren2 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
文勇|wen2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
文亮|wen2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
勇飞|yong3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
圣文|sheng4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蓝|lan2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
家辉|jia1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
春雷|chun1 lei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
春晓|chun1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
祥宇|xiang2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
文义|wen2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
宇生|yu3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
永良|yong3 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
子马|zi3 ma3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
志廉|zhi4 lian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
志海|zhi4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闵|min3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
思川|si1 chuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
佳琳|jia1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
君宇|jun1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
青骥|qing1 ji4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
元明|yuan2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
文启|wen2 qi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
敏杰|min3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
敏敏|min3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
彦群|yan4 qun2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
殿晋|dian4 jin4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|席|xi2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
勤龙|qin2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
学勇|xue2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
仁旭|ren2 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
宇轩|yu3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
敏慧|min3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
凤泉|feng4 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
向宇|xiang4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|季|ji4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
东坤|dong1 kun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
春梅|chun1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
张伟|zhang1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
书静|shu1 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
成龙|cheng2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
承照|cheng2 zhao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
子明|zi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
玉秀|yu4 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|麻|ma2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
清真|qing1 zhen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
金伟|jin1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
光照|guang1 zhao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
宏杰|hong2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
晓初|xiao3 chu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
玉芳|yu4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
彦明|yan4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
莉莉|li4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|强|qiang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
东岩|dong1 yan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
启文|qi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
义杰|yi4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
健美|jian4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
凤月|feng4 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贾|jia3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
东尚|dong1 shang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
仁飞|ren2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
文海|wen2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
承志|cheng2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
宇轩|yu3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
子明|zi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
子野|zi3 ye3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
凤琴|feng4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
旦俊|dan4 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|路|lu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
心星|xin1 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
丹洁|dan1 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
国辉|guo2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
成武|cheng2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
晓丹|xiao3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
启阳|qi3 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
志东|zhi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
义毅|yi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|娄|lou2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
春兰|chun1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
国|guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
文平|wen2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
海英|hai3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
起伟|qi3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
伟汉|wei3 han4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
秀英|xiu4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
志鹏|zhi4 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
秀旺|xiu4 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|危|wei1
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
东城|dong1 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
元森|yuan2 sen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
勇飞|yong3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
勇明|yong3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
勇武|yong3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
志凤|zhi4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|江|jiang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
安东|an1 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
东城|dong1 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
之磊|zhi1 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
仁武|ren2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
国柱|guo2 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|童|tong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
丹青|dan1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
东煌|dong1 huang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
嘉敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
学勇|xue2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
全毅|quan2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
义洲|yi4 zhou1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
义哲|yi4 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|颜|yan2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
东子|dong1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
乔楠|qiao2 nan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
久辉|jiu3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
义山|yi4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
义全|yi4 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
凤义|feng4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郭|guo1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
丹青|dan1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
东霞|dong1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
秋月|qiu1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梅|mei2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
全生|quan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
元龙|yuan2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
国柱|guo2 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
义兰|yi4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盛|sheng4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
东勇|dong1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
元武|yuan2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
久丰|jiu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
久福|jiu3 fu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
勇宇|yong3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
勇健|yong3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
义博|yi4 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|林|lin2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
春英|chun1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
国新|guo2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
成伟|cheng2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
晓辉|xiao3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
子翔|zi3 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
永海|yong3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
志新|zhi4 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
彦文|yan4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
望顺|wang4 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刁|diao1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
佳宇|jia1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
仁辉|ren2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
国敏|guo2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
启宇|qi3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
久蔚|jiu3 wei4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
义山|yi4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
义成|yi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟|zhong1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
东冬|dong1 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
仁修|ren2 xiu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
仁全|ren2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
仁宇|ren2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
久生|jiu3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
勇亮|yong3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
义东|yi4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
义顺|yi4 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|徐|xu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
东子|dong1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
东岳|dong1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
仁松|ren2 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
仁明|ren2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
仁宇|ren2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
国义|guo2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
久钦|jiu3 qin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
子敏|zi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
启圣|qi3 sheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
健康|jian4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
义仁|yi4 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
健勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
志义|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邱|qiu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
文勇|wen2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
成志|cheng2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
亿生|yi4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
向明|xiang4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|骆|luo4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
东博|dong1 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
仁美|ren2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
仁玉|ren2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
勇安|yong3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
子朗|zi3 lang3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
义山|yi4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
健智|jian4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|高|gao1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
东儒|dong1 ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
仁明|ren2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
元勇|yuan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
久英|jiu3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
启敏|qi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
义江|yi4 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
义明|yi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
志健|zhi4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔡|cai4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
仁礼|ren2 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
勇峰|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
义飞|yi4 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
义龙|yi4 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
健勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
凤义|feng4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|田|tian2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
峰宇|feng1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
元生|yuan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
仁文|ren2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
元武|yuan2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
元智|yuan2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
启英|qi3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
勇明|yong3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
启武|qi3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
凤秋|feng4 qiu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
夏璐|xia4 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|樊|fan2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
东兰|dong1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
乔生|qiao2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
仁宇|ren2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
久春|jiu3 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
久敏|jiu3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
义丰|yi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
义仁|yi4 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
向玉|xiang4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胡|hu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
冬生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
春晓|chun1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
国琴|guo2 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
兰美|lan2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
福顺|fu2 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
子佳|zi3 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
子武|zi3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|凌|ling2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
东英|dong1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
元真|yuan2 zhen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
元龙|yuan2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
启山|qi3 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
启仁|qi3 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
守磊|shou3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|霍|huo4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
冬青|dong1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
佳杰|jia1 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
国敏|guo2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
明慧|ming2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
子期|zi3 qi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
子平|zi3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
晓毅|xiao3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
定国|ding4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
定海|ding4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|虞|yu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
仁芝|ren2 zhi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
仁元|ren2 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
启星|qi3 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
勇善|yong3 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
义全|yi4 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|万|wan4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
新军|xin1 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
光明|guang1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
清壮|qing1 zhuang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
文龙|wen2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
仁敏|ren2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
海峰|hai3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
大伟|da4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|支|zhi1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
博仁|bo2 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
林海|lin2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
全健|quan2 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
敏勇|min3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
子静|zi3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
善海|shan4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
善志|shan4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柯|ke1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
丹冬|dan1 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
东霞|dong1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
恩敏|en1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
国春|guo2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
翔宇|xiang2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|管|guan3
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
仁辉|ren2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
仁龙|ren2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
仁灿|ren2 can4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
启东|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
子敏|zi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
义峰|yi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
义杰|yi4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
健美|jian4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
圣义|sheng4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卢|lu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
元武|yuan2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
吟月|yin2 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
勇辉|yong3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
子亮|zi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
义明|yi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
健勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|莫|mo4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
新海|xin1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
春艳|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
鹏宇|peng2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
启龙|qi3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|房|fang2
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
佳妮|jia1 ni1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
松良|song1 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
东耀|dong1 yao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
圆|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
国春|guo2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
国骥|guo2 ji4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
宇清|yu3 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
宇航|yu3 hang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
海索|hai3 suo3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
晓蕙|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
志新|zhi4 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
志平|zhi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
剑敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
益政|yi4 zheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裘|qiu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
嘉慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
学海|xue2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
宇超|yu3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
乃志|nai3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|缪|miao4
基|ji1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
嘉欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
家伟|jia1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
嘉俊|jia1 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
卓|zhuo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
国超|guo2 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
杰豪|jie2 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
伟|wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
永康|yong3 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
敏玲|min3 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
伟健|wei3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
夏|xia4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
健辉|jian4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
细妹|xi4 mei4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|区|ou1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
仁安|ren2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
文智|wen2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
勇飞|yong3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
子恒|zi3 heng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
凤清|feng4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|覃|qin2
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
东春|dong1 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
东哲|dong1 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
星宇|xing1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
仁英|ren2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
仁焕|ren2 huan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
敏英|min3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
勇宇|yong3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
敏智|min3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
善英|shan4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
顺福|shun4 fu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
善美|shan4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
善玉|shan4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|朴|piao2
康|kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
金子|jin1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
恒|heng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
明辉|ming2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
凯|kai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
衍民|yan3 min2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
晓艳|xiao3 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
玉良|yu4 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|种|chong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
光宇|guang1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
生瑞|sheng1 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
仁江|ren2 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
学智|xue2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
勇国|yong3 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
志芳|zhi4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
志浩|zhi4 hao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|解|xie4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
东轩|dong1 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
嘉俐|jia1 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
国兰|guo2 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
翔宇|xiang2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
明亮|ming2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
敏慧|min3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
向文|xiang4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
力敏|li4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|应|ying1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
春山|chun1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
山林|shan1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
春启|chun1 qi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
成志|cheng2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
永生|yong3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
凤霞|feng4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宗|zong1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
全海|quan2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
久明|jiu3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
久海|jiu3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
义山|yi4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
向宇|xiang4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
义慧|yi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丁|ding1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
丹丹|dan1 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
新明|xin1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
恩裕|en1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
明智|ming2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
晓文|xiao3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
晓庆|xiao3 qing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
玉英|yu4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
月明|yue4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
建伟|jian4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宣|xuan1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
东哲|dong1 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
仁安|ren2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
仁亮|ren2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
勇晖|yong3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
子勇|zi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
义清|yi4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
峻智|jun4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邓|deng4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
东升|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
佳杰|jia1 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
冰珺|bing1 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
文生|wen2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
豪伟|hao2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
怀智|huai2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
晓丹|xiao3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
子涵|zi3 han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
义康|yi4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
义鸿|yi4 hong2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
震宇|zhen4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
尚校|shang4 jiao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郁|yu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
佳美|jia1 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
卓然|zhuo2 ran2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
仁亮|ren2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
子英|zi3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
宇静|yu3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
义杰|yi4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
志健|zhi4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单|shan4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
春晖|chun1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
一平|yi1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
春晓|chun1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
春翠|chun1 cui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
琳峰|lin2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
海英|hai3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
久成|jiu3 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
颖颖|ying3 ying3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
晓艳|xiao3 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
慧琼|hui4 qiong2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
立武|li4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
世骏|shi4 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|杭|hang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
东国|dong1 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
哲宇|zhe2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
卓立|zhuo2 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
勇飞|yong3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
启文|qi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
启旺|qi3 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
健康|jian4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
义梅|yi4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
健美|jian4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|洪|hong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
丰源|feng1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
心鉴|xin1 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
明宇|ming2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
国柱|guo2 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|包|bao1
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
科峰|ke1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
家瑜|jia1 yu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
淑敏|shu1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
天卫|tian1 wei4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
群飞|qun2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
文龙|wen2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
文俊|wen2 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
晓玲|xiao3 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
敏敏|min3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
伟亮|wei3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
月芳|yue4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
玉文|yu4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
大海|da4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
大建|da4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸|zhu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
东岭|dong1 ling3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
仁辉|ren2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
元杰|yuan2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
全海|quan2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
国柱|guo2 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
启林|qi3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
晓凤|xiao3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
向宇|xiang4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
志凤|zhi4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左|zuo3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
东岳|dong1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
乔玉|qiao2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
勇超|yong3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
守永|shou3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
义国|yi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|石|shi2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
东哲|dong1 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
元东|yuan2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
仁元|ren2 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
全慧|quan2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
久峰|jiu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
久明|jiu3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
义清|yi4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
义玄|yi4 xuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
凤善|feng4 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|崔|cui1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
东升|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
康敏|kang1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
星照|xing1 zhao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
学平|xue2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
学勇|xue2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
仁太|ren2 tai4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
子玉|zi3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
志海|zhi4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|吉|ji2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
佳璐|jia1 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
仁芳|ren2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
仁平|ren2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
元武|yuan2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
仁智|ren2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
勇超|yong3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
义成|yi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
向宇|xiang4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龚|gong1
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
仁丰|ren2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
仁国|ren2 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
元敏|yuan2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
勇生|yong3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
义峰|yi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
义全|yi4 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
志义|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|程|cheng2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
春彦|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
国峰|guo2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
元敏|yuan2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
元志|yuan2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
子超|zi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
启文|qi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邢|xing2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
仁基|ren2 ji1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
仁国|ren2 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
学海|xue2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
怀亮|huai2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
子超|zi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
子野|zi3 ye3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|裴|pei2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
元敏|yuan2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
久生|jiu3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
久全|jiu3 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
启敏|qi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
勇健|yong3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|陆|lu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
新江|xin1 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
冬雪|dong1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
东岳|dong1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
卓岩|zhuo2 yan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
文瑞|wen2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
子嘉|zi3 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
子慧|zi3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
健霄|jian4 xiao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
凤毅|feng4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荣|rong2
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
佳文|jia1 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
仁康|ren2 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
元龙|yuan2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
启东|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
启文|qi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
健恩|jian4 en1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
亮阳|liang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翁|weng1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
金花|jin1 hua1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
国|guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
文祥|wen2 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
晓娟|xiao3 juan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
皓|hao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
慧生|hui4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
建国|jian4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荀|xun2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
金花|jin1 hua1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
昭业|zhao1 ye4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
仁安|ren2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
文杰|wen2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
子林|zi3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
旭峰|xu4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
慧明|hui4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
贝贝|bei4 bei4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|羊|yang2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
新春|xin1 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
春梅|chun1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
佳美|jia1 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
春艳|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
兰心|lan2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
学林|xue2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
翔宇|xiang2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
永勤|yong3 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
旭辉|xu4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
利健|li4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|惠|hui4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
英江|ying1 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
新义|xin1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
荣典|rong2 dian3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
明亮|ming2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
子丹|zi3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
子杰|zi3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
晓景|xiao3 jing3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
凤山|feng4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
志国|zhi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
静慧|jing4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甄|zhen1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
东阳|dong1 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
冬雪|dong1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
佳瑞|jia1 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
学礼|xue2 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
国瑞|guo2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
久辉|jiu3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
启翔|qi3 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
凤清|feng4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
凤杰|feng4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曲|qu1
川|chuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|家|jia1
哲|zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|家|jia1
启|qi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|家|jia1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|家|jia1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
安东|an1 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
新城|xin1 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
秋子|qiu1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
思孝|si1 xiao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
国生|guo2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
国林|guo2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
国宝|guo2 bao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
明月|ming2 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
彦卿|yan4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
越健|yue4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|封|feng1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
嘉晖|jia1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
嘉宇|jia1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
冬旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
哲|zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
吟飞|yin2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
博瑜|bo2 yu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
怀瑾|huai2 jin3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
博彦|bo2 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
子昕|zi3 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
勇勤|yong3 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
雪磊|xue3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
宇翰|yu3 han4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
健晖|jian4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
圣文|sheng4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
志满|zhi4 man3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
毅健|yi4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|芮|rui4
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
嘉康|jia1 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
昭玉|zhao1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
德武|de2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
成志|cheng2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
永生|yong3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
智勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|储|chu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
安佳|an1 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
家彦|jia1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
学东|xue2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
博宇|bo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
文志|wen2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
子萱|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
子明|zi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
凤林|feng4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
秀凤|xiu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|靳|jin4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
丹青|dan1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
元星|yuan2 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
启超|qi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
义山|yi4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
志义|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段|duan4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
坚真|jian1 zhen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
新园|xin1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
森美|sen1 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
心振|xin1 zhen4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
国良|guo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
荣海|rong2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
明慧|ming2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
子梅|zi3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
世康|shi4 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
志侠|zhi4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
万利|mo4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|富|fu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
秋英|qiu1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
佳静|jia1 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
文武|wen2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
国瑞|guo2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
宇轩|yu3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
伟亮|wei3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
俊峰|jun4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
善明|shan4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
俊毅|jun4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫|wu1
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
芝芝|zhi1 zhi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
家培|jia1 pei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
卓|zhuo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
文琳|wen2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
廷玉|ting2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
丙安|bing3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
雪雪|xue3 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
羽玉|yu3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
志良|zhi4 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
裕尔|yu4 er3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
艳艳|yan4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乌|wu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
家志|jia1 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
全英|quan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
国成|guo2 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
子明|zi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
彦勇|yan4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|焦|jiao1
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
新刚|xin1 gang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
光明|guang1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
家伟|jia1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
淑艳|shu1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
云鹏|yun2 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
晓光|xiao3 guang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
智超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
俊宇|jun4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
岳特|yue4 te4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巴|ba1
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牧|mu4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牧|mu4
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牧|mu4
月|yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牧|mu4
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
青松|qing1 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
冬晨|dong1 chen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
一鼎|yi1 ding3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
佳俊|jia1 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
国芳|guo2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
卓平|zhuo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
文景|wen2 jing3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
明玉|ming2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
子洲|zi3 zhou1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
子博|zi3 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
子木|zi3 mu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
益真|yi4 zhen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
慧玲|hui4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
玉桂|yu4 gui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|山|shan1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
元平|yuan2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
福海|fu2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
子丰|zi3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
勇哲|yong3 zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
凤春|feng4 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
亮敏|liang4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
瑞玉|rui4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谷|gu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
冬生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
星宇|xing1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
功灿|gong1 can4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
国兰|guo2 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
恒武|heng2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
文毅|wen2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
宇驰|yu3 chi2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
晓璐|xiao3 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|车|che1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
仁宽|ren2 kuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
元恒|yuan2 heng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
全亮|quan2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
勇超|yong3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
启文|qi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
亮生|liang4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
义明|yi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
健美|jian4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
志义|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|侯|hou2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秋|qiu1
之原|zhi1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秋|qiu1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秋|qiu1
云飞|yun2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秋|qiu1
明杰|ming2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秋|qiu1
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秋|qiu1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秋|qiu1
素英|su4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|秋|qiu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
昭欣|zhao1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
星宇|xing1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
秋月|qiu1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
国民|guo2 min2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
崇磊|chong2 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
崇义|chong2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
伟美|wei3 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
慧峰|hui4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
向平|xiang4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
继寿|ji4 shou4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仲|zhong4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
淑英|shu1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
佳仁|jia1 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
秋水|qiu1 shui3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
之秀|zhi1 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
明江|ming2 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
洪亮|hong2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
永秀|yong3 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
泰安|tai4 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
秀文|xiu4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
建敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
日贵|ri4 gui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|伊|yi1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
新忠|xin1 zhong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
佳明|jia1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
国辉|guo2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
全美|quan2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
文健|wen2 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
子龙|zi3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
子玉|zi3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
玉柱|yu4 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宫|gong1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
冬雪|dong1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
家骏|jia1 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
元生|yuan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
学礼|xue2 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
宇清|yu3 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
子雪|zi3 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
凤莲|feng4 lian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宁|ning2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
东杰|dong1 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
家海|jia1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
冰玉|bing1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
学宝|xue2 bao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
国立|guo2 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
勇海|yong3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
向洋|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
志秀|zhi4 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|仇|qiu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
春晖|chun1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
春海|chun1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
春旭|chun1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
明辉|ming2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
成显|cheng2 xian3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
国志|guo2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
启平|qi3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
静惠|jing4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|栾|luan2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
佳伟|jia1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
星瑞|xing1 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
元平|yuan2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
文勇|wen2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
勇辉|yong3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
勇明|yong3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
健成|jian4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
沛露|pei4 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|甘|gan1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
开波|kai1 bo1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
英明|ying1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
新建|xin1 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
福刚|fu2 gang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
成鹏|cheng2 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
文礼|wen2 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
晓辉|xiao3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
永伟|yong3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
永建|yong3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
志辉|zhi4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
彦明|yan4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
志海|zhi4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
彦玉|yan4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|厉|li4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
佳森|jia1 sen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
丹霞|dan1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
宗海|zong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
家洛|jia1 luo4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
城|cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
仁开|ren2 kai1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
国年|guo2 nian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
文敏|wen2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
玲慧|ling2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
子森|zi3 sen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
子豪|zi3 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
淼淼|miao3 miao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
海立|hai3 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
志青|zhi4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
朔涵|shuo4 han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
彦宇|yan4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
彦静|yan4 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戎|rong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
漪清|yi1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
春玲|chun1 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
生利|sheng1 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
国栋|guo2 dong4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
晓平|xiao3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
启慧|qi3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
立国|li4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
旭蕊|xu4 rui3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
力亚|li4 ya4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|祖|zu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
东江|dong1 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
东博|dong1 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
元英|yuan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
全勇|quan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
元亮|yuan2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
子超|zi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
善凤|shan4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|武|wu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
家钦|jia1 qin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
东勇|dong1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
春妹|chun1 mei4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
文美|wen2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
敏佳|min3 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
启文|qi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
凤山|feng4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
凤莲|feng4 lian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
畅慧|chang4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|符|fu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
东丰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
东启|dong1 qi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
东义|dong1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
仁元|ren2 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
久安|jiu3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
久儒|jiu3 ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
久敏|jiu3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
久亮|jiu3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
义元|yi4 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
义亮|yi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|刘|liu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
新超|xin1 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
新义|xin1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
文轩|wen2 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
元霞|yuan2 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
明朗|ming2 lang3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
学义|xue2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
宇飞|yu3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
志芳|zhi4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
凤琴|feng4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
俊利|jun4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|景|jing3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
嘉欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
国健|guo2 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
启生|qi3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
子晴|zi3 qing2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
启敏|qi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
子亮|zi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|詹|zhan1
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
春芳|chun1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
丹霞|dan1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
新水|xin1 shui3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
芳悦|fang1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
学龙|xue2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
怀瑞|huai2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
伟星|wei3 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
晓梅|xiao3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
晓悦|xiao3 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
定芳|ding4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
越梅|yue4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
亚凯|ya4 kai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|束|shu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
冬生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
佳明|jia1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
仁青|ren2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
元平|yuan2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
元勇|yuan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
仁志|ren2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
启江|qi3 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
勇明|yong3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
启凤|qi3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
凤丹|feng4 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
健美|jian4 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|龙|long2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
东成|dong1 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
仁芳|ren2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
乔林|qiao2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
仁敏|ren2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
久英|jiu3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
久林|jiu3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
子敏|zi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
勇义|yong3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
健清|jian4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
义问|yi4 wen4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|叶|ye4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
丹丹|dan1 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
春梅|chun1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
春艳|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
平|ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
迎春|ying2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
子涵|zi3 han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
世斌|shi4 bin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
世平|shi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
世亮|shi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|幸|xing4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
欣芳|xin1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
春晓|chun1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
博英|bo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
明海|ming2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
子杰|zi3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
久义|jiu3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
志超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司|si1
江|jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韶|shao2
涵|han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韶|shao2
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|韶|shao2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
仁超|ren2 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
仁龙|ren2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
仁美|ren2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
仁凤|ren2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
子安|zi3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
勇杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
凤清|feng4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
健平|jian4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
健勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
志健|zhi4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|黎|li2
冰|bing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
官辉|guan1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
一凡|yi1 fan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
宗义|zong1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
平|ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
云峰|yun2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
云龙|yun2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
纯敏|chun2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
国瑞|guo2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
海洋|hai3 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
晓虎|xiao3 hu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
海艳|hai3 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
玉霞|yu4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
静艳|jing4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|薄|bo2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
佳妮|jia1 ni1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
春梅|chun1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
家厚|jia1 hou4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
国|guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
国忠|guo2 zhong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
文杰|wen2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
晓星|xiao3 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
晓蕾|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
晓莉|xiao3 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
玉芳|yu4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
毅俊|yi4 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|印|yin4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
淑英|shu1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
思莹|si1 ying2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
春礼|chun1 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
馨月|xin1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
儒|ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
怡轩|yi2 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
怀文|huai2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
久高|jiu3 gao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
晓雪|xiao3 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
宝贵|bao3 gui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
瑞芳|rui4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
志霞|zhi4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
大伟|da4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
圣悦|sheng4 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宿|su4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
全永|quan2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
勇文|yong3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
守礼|shou3 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
子义|zi3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
健生|jian4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
义海|yi4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|白|bai2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|怀|huai2
冬冬|dong1 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|怀|huai2
忠民|zhong1 min2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|怀|huai2
岩|yan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|怀|huai2
晴峰|qing2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|怀|huai2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|怀|huai2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|怀|huai2
效锋|xiao4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|怀|huai2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
春艳|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
国辉|guo2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
国良|guo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
显清|xian3 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
晓兰|xiao3 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
勇健|yong3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
志安|zhi4 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒲|pu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
秋芳|qiu1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
先莉|xian1 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
文峰|wen2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
学菊|xue2 ju2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
宇航|yu3 hang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
宇悦|yu3 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
睿英|rui4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
志梅|zhi4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
大伟|da4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
璐璐|lu4 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|邰|tai2
冬|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
金花|jin1 hua1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
金龙|jin1 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
金宝|jin1 bao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
哲|zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
维熙|wei2 xi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
林林|lin2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
林海|lin2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
学亮|xue2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
永平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
凯瑞|kai3 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
志新|zhi4 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
玉文|yu4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|从|cong2
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
书勤|shu1 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
怡君|yi2 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
云龙|yun2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
学礼|xue2 li3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
宏克|hong2 ke4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
海|hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
晓丹|xiao3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
美蝶|mei3 die2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
岳|yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
志超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
栋臣|dong4 chen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鄂|e4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
松玲|song1 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
文清|wen2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
河文|he2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
瑜雪|yu2 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
明秀|ming2 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
海峰|hai3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
海龙|hai3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
宝柱|bao3 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
志超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
志杰|zhi4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
彦彦|yan4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|索|suo3
清|qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
西康|xi1 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
杰|jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
哲龙|zhe2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
成浩|cheng2 hao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
武|wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
海生|hai3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
海蓉|hai3 rong2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
海水|hai3 shui3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
慧|hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
志新|zhi4 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
利平|li4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|咸|xian2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
东川|dong1 chuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
东成|dong1 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
元芳|yuan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
仁琼|ren2 qiong2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
兰玉|lan2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
启生|qi3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
久平|jiu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
健清|jian4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
健全|jian4 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
志旺|zhi4 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赖|lai4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
春英|chun1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
之敏|zhi1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
家瑞|jia1 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
德勇|de2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
怀智|huai2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
晓丹|xiao3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
勇良|yong3 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
敏敏|min3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
子越|zi3 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
义峰|yi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
志国|zhi4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
彦志|yan4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|卓|zhuo2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
新英|xin1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
安林|an1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
军社|jun1 she4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
文博|wen2 bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
晓艳|xiao3 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
玉辉|yu4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
志杰|zhi4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
智勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
桂瑞|gui4 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔺|lin4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
丹青|dan1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
佳莹|jia1 ying2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
春晓|chun1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
秋月|qiu1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
宇平|yu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
启宇|qi3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
晓凤|xiao3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
志飞|zhi4 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
振宇|zhen4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
立毅|li4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|屠|tu2
春辉|chun1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
卓|zhuo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
文东|wen2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
文龙|wen2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
鹏宇|peng2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
兰凤|lan2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
晓平|xiao3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
晓艳|xiao3 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
志文|zhi4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
曼莉|man4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蒙|meng2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
金芳|jin1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
新全|xin1 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
天宇|tian1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
英范|ying1 fan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
仁春|ren2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
成龙|cheng2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
仁勇|ren2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
子翔|zi3 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
敏敏|min3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
慧琴|hui4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
大治|da4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|池|chi2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
东霞|dong1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
全生|quan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
仁全|ren2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
全美|quan2 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
国瑞|guo2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
启元|qi3 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
子义|zi3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
亮生|liang4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
义龙|yi4 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
凤义|feng4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乔|qiao2
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
春晖|chun1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
君意|jun1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
国|guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
阳生|yang2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
兰兰|lan2 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
晓雪|xiao3 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
秀霞|xiu4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阴|yin1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
青山|qing1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
忠义|zhong1 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
明虎|ming2 hu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
晓青|xiao3 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
永杰|yong3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
柳曼|liu3 man4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
志平|zhi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
佑富|you4 fu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|胥|xu1
修|xiu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|能|nai4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|能|nai4
武|wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|能|nai4
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|能|nai4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|能|nai4
静静|jing4 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|能|nai4
峰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苍|cang1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苍|cang1
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苍|cang1
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|苍|cang1
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|双|shuang1
飞龙|fei1 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|双|shuang1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|双|shuang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|双|shuang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|双|shuang1
剑峰|jian4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|双|shuang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
春香|chun1 xiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
春林|chun1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
君武|jun1 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
金艳|jin1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
国生|guo2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
兰亭|lan2 ting2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
如玉|ru2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
宇航|yu3 hang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
海虎|hai3 hu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
伟桦|wei3 hua4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
岳春|yue4 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
玉梅|yu4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
四海|si4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
旭耀|xu4 yao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻|wen2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
安芳|an1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
英明|ying1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
丹勇|dan1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
宗彦|zong1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
宇飞|yu3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
晓颖|xiao3 ying3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
永亮|yong3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
向辉|xiang4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|党|dang3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
丹青|dan1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
元平|yuan2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
学智|xue2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
启安|qi3 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
凤芝|feng4 zhi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
凤林|feng4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|翟|zhai2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
佳敏|jia1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
仁兰|ren2 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
仁凤|ren2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
启东|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
启平|qi3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
守勇|shou3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
健欣|jian4 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|谭|tan2
新|xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
晨阳|chen2 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
祥敏|xiang2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
辰浩|chen2 hao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
海斌|hai3 bin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
雪梅|xue3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
夏|xia4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
建平|jian4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
振宇|zhen4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|贡|gong4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
嘉欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
嘉慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
云峰|yun2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
文杰|wen2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
文浩|wen2 hao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
守泉|shou3 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
永乐|yong3 le4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
志英|zhi4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
定国|ding4 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
莉莉|li4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|劳|lao2
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
天宇|tian1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
恒飞|heng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
翔宇|xiang2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
文亮|wen2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
宇飞|yu3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
子宜|zi3 yi2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
玉峰|yu4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
会敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
亚莉|ya4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|姬|ji1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
元英|yuan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
国志|guo2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
子瑜|zi3 yu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
显旭|xian3 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
凤善|feng4 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申|shen1
芳|fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|扶|fu2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|扶|fu2
元明|yuan2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|扶|fu2
海|hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|扶|fu2
伟聪|wei3 cong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|扶|fu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|扶|fu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
开勇|kai1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
冰玉|bing1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
原生|yuan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
翔宇|xiang2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
勇康|yong3 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
启全|qi3 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
启亮|qi3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
凤莲|feng4 lian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
茂志|mao4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冉|ran3
山|shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
国|guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
凌晖|ling2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
哲明|zhe2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
羽|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
永刚|yong3 gang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
建军|jian4 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
旭琴|xu4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|郦|li4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
青松|qing1 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
宗满|zong1 man3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
文涛|wen2 tao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
玲玲|ling2 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
景轩|jing3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
建军|jian4 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
璐瑶|lu4 yao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
莉莉|li4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|雍|yong1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
青松|qing1 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
峰勇|feng1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
元飞|yuan2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
鸿伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
子儒|zi3 ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
永磊|yong3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
子皓|zi3 hao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
志超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
凤琴|feng4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
震宇|zhen4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桑|sang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
青山|qing1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
思文|si1 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
先勇|xian1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
金凤|jin1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
明东|ming2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
全智|quan2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
敏杰|min3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
晓凤|xiao3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
夏生|xia4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
向明|xiang4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
震宇|zhen4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桂|gui4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
东辉|dong1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
元峰|yuan2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
学勇|xue2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
仁亮|ren2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
子儒|zi3 ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
子美|zi3 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
凤玉|feng4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|牛|niu2
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
春晖|chun1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
佳琦|jia1 qi2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
佳伟|jia1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
国春|guo2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
国梁|guo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
永昌|yong3 chang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
永年|yong3 nian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
彩凤|cai3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
圣|sheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
建新|jian4 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
志勤|zhi4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
莉惠|li4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寿|shou4
嘉|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|通|tong1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|通|tong1
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|通|tong1
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|通|tong1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
春晖|chun1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
新志|xin1 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
兰春|lan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
国良|guo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
洪敏|hong2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
全义|quan2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
宇航|yu3 hang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
晓旭|xiao3 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|边|bian1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
松霞|song1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
心敏|xin1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
心悦|xin1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
国飞|guo2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
翔宇|xiang2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
文慧|wen2 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
子丹|zi3 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
子明|zi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
子子|zi3 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
晓静|xiao3 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
志俊|zhi4 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|燕|yan1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
东升|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
书鹏|shu1 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
文超|wen2 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
承龙|cheng2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
文海|wen2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
成亮|cheng2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
月霞|yue4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
惠彦|hui4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冀|ji4
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
安修|an1 xiu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
金龙|jin1 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
金凤|jin1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
文英|wen2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
卓琳|zhuo2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
晓艳|xiao3 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
俊杰|jun4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
佩玉|pei4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|浦|pu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
东峰|dong1 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
修磊|xiu1 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
子超|zi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
勇智|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
凤杰|feng4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尚|shang4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
春山|chun1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
秋月|qiu1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
哲|zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
文斌|wen2 bin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
兰梅|lan2 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
德孟|de2 meng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
晓娟|xiao3 juan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
海兰|hai3 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
万春|mo4 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
玉梅|yu4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
艳艳|yan4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|农|nong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
丹凤|dan1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
儒敏|ru2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
学亮|xue2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
启东|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
敏子|min3 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
健生|jian4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
健文|jian4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
健勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
圣亮|sheng4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|温|wen1
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
开新|kai1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
之龙|zhi1 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
平|ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
文涛|wen2 tao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
福泉|fu2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
国范|guo2 fan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
立|li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
竟成|jing4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
桂敏|gui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
静静|jing4 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|别|bie2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
东晓|dong1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
恩岳|en1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
学勇|xue2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
博智|bo2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
启东|qi3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
凤梅|feng4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|庄|zhuang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
清秀|qing1 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
国生|guo2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
林子|lin2 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
国政|guo2 zheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
晓春|xiao3 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
子翔|zi3 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
子友|zi3 you3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
志辉|zhi4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
义平|yi4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
义勇|yi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
焕义|huan4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晏|yan4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
佳楠|jia1 nan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
春彦|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
国生|guo2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
成武|cheng2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
国义|guo2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
守峰|shou3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
子文|zi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
秀凤|xiu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|柴|chai2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
嘉东|jia1 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
佳琳|jia1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
秋月|qiu1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
明亮|ming2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
宇佳|yu3 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
启文|qi3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
晓颖|xiao3 ying3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
晓凤|xiao3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
健文|jian4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
世伟|shi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
世秀|shi4 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|瞿|qu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
思慧|si1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
文照|wen2 zhao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
子勤|zi3 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
玉秀|yu4 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阎|yan2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
家辉|jia1 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
春晓|chun1 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
承敏|cheng2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
城璧|cheng2 bi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
子恒|zi3 heng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
晓旭|xiao3 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
志文|zhi4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
健敏|jian4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
惠玉|hui4 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|连|lian2
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
佳心|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
嘉瑶|jia1 yao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
昕宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
嘉睿|jia1 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
兰萱|lan2 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
文楠|wen2 nan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
怀敏|huai2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
晨绚|chen2 xuan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
子帆|zi3 fan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
子澜|zi3 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
永武|yong3 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
永志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
凤|feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
木芝|mu4 zhi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
向杰|xiang4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
圣凯|sheng4 kai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
立岸|li4 an4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|茹|ru2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
天文|tian1 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
莲花|lian2 hua1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
黎明|li2 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
雄伟|xiong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
武|wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
勇锋|yong3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
晓鹏|xiao3 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
义斌|yi4 bin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
秀兰|xiu4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|习|xi2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
丹青|dan1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
家静|jia1 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
国清|guo2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
国永|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
国柱|guo2 zhu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
启平|qi3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
晓晓|xiao3 xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
晓玉|xiao3 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
义龙|yi4 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|艾|ai4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鱼|yu2
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鱼|yu2
鹏辉|peng2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鱼|yu2
海|hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鱼|yu2
海萍|hai3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鱼|yu2
素|su4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鱼|yu2
幼微|you4 wei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鱼|yu2
梦洁|meng4 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鱼|yu2
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
欣青|xin1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
春美|chun1 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
嘉亮|jia1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
明江|ming2 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
铜芸|tong2 yun2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
卓磊|zhuo2 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
恒健|heng2 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
启|qi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
启康|qi3 kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
久梅|jiu3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
启海|qi3 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
启望|qi3 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
健洲|jian4 zhou1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
健成|jian4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
志毅|zhi4 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|容|rong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
儒|ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
儒安|ru2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
国宇|guo2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
文凤|wen2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
子恒|zi3 heng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
守志|shou3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
凤林|feng4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
凤武|feng4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|向|xiang4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
东林|dong1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
嘉露|jia1 lu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
兰丹|lan2 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
卓良|zhuo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
文法|wen2 fa3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
宇峰|yu3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
凤林|feng4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|古|gu3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
东林|dong1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
东木|dong1 mu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
元生|yuan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
国圣|guo2 sheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
晓敏|xiao3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
健翔|jian4 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
善永|shan4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
继凤|ji4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|易|yi4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
钦松|qin1 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
春艳|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
文辉|wen2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
国龙|guo2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
林雪|lin2 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
明亮|ming2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
亚芳|ya4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
利亚|li4 ya4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|戈|ge1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
东安|dong1 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
东兰|dong1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
东宇|dong1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
仁松|ren2 song1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
元平|yuan2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
全旺|quan2 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
勇生|yong3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
久明|jiu3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
启志|qi3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
义生|yi4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
健文|jian4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
圣勇|sheng4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
义智|yi4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|廖|liao4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
春花|chun1 hua1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
春林|chun1 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
家乐|jia1 le4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
文英|wen2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
玲玲|ling2 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
维伟|wei2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
文沛|wen2 pei4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
晓波|xiao3 bo1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
晓晨|xiao3 chen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
俊峰|jun4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
建平|jian4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|居|ju1
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
丹丹|dan1 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
春梅|chun1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
永芳|yong3 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
雪梅|xue3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
凤德|feng4 de2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
艳艳|yan4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|衡|heng2
峰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
春兵|chun1 bing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
青云|qing1 yun2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
春敏|chun1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
星耀|xing1 yao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
平|ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
云轩|yun2 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
晓杰|xiao3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
玉英|yu4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
玉兰|yu4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
近智|jin4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|步|bu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
京芳|jing1 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
春梅|chun1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
基伟|ji1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
英玉|ying1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
成元|cheng2 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
晓辉|xiao3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
晓霞|xiao3 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
本伟|ben3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
业辉|ye4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
业平|ye4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
大爽|da4 shuang3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
静静|jing4 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|都|du1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
东山|dong1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
元生|yuan2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
仁文|ren2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
国武|guo2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
仁义|ren2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
子超|zi3 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
子涵|zi3 han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
凤兰|feng4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
志亮|zhi4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|耿|geng3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
天新|tian1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
家福|jia1 fu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
江雪|jiang1 xue3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
江月|jiang1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
园春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
云龙|yun2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
延磊|yan2 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
守东|shou3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
海菊|hai3 ju2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
秀英|xiu4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
月圆|yue4 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
艳艳|yan4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|满|man3
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|弘|hong2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|弘|hong2
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|弘|hong2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|弘|hong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
新生|xin1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
安仁|an1 ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
星宇|xing1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
光力|guang1 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
哲江|zhe2 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
国文|guo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
洪宇|hong2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
文立|wen2 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
晓慧|xiao3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
凤瑜|feng4 yu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|匡|kuang1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
新生|xin1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
馨月|xin1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
城|cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
文清|wen2 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
云鹏|yun2 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
宏宇|hong2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
文玉|wen2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
海江|hai3 jiang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
宇翔|yu3 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
颖颖|ying3 ying3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
玉春|yu4 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
玉霞|yu4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
建勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
艳莉|yan4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|国|guo2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
佳英|jia1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
心子|xin1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
全山|quan2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
成武|cheng2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
元善|yuan2 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
久|jiu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
子英|zi3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
健明|jian4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
志向|zhi4 xiang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|文|wen2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
新春|xin1 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
东梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
国东|guo2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
文宇|wen2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
国栋|guo2 dong4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
子明|zi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
志超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
健明|jian4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
志敏|zhi4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|寇|kou4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|广|guang3
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|广|guang3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|广|guang3
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|广|guang3
山|shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禄|lu4
平|ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禄|lu4
海|hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禄|lu4
智|zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禄|lu4
智明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|禄|lu4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
丹丹|dan1 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
春兰|chun1 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
东岳|dong1 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
岚|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
文龙|wen2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
海英|hai3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
晓梅|xiao3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
慧|hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
慧娟|hui4 juan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
贵善|gui4 shan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|阙|que1
冬|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
晓飞|xiao3 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
海潮|hai3 chao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
秀山|xiu4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
爱梅|ai4 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
耀峻|yao4 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东|dong1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
东勇|dong1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
修智|xiu1 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
明武|ming2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
国瑞|guo2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
子欣|zi3 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
勇健|yong3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
智慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧|ou1
峰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沃|wo4
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沃|wo4
美|mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沃|wo4
曙东|shu3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沃|wo4
祖全|zu3 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沃|wo4
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沃|wo4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
家安|jia1 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
嘉儿|jia1 er2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
光秘|guang1 bi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
国伟|guo2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
永贞|yong3 zhen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
尔湖|er3 hu2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
碧君|bi4 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
亚雷|ya4 lei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|利|li4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔚|wei4
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔚|wei4
国银|guo2 yin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔚|wei4
成亮|cheng2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔚|wei4
海|hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔚|wei4
晓晖|xiao3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔚|wei4
映|ying4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔚|wei4
曼曼|man4 man4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|蔚|wei4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|越|yue4
圆|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|越|yue4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|越|yue4
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|越|yue4
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
英豪|ying1 hao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
昌海|chang1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
言泉|yan2 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
学义|xue2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
海涛|hai3 tao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
海洋|hai3 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
太成|tai4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|隆|long2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
安东|an1 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
娟子|juan1 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
昌绪|chang1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
文芳|wen2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
兰言|lan2 yan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
学伟|xue2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
文玉|wen2 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
晓文|xiao3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
子悦|zi3 yue4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
彦平|yan4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
慧敏|hui4 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
彦俊|yan4 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|师|shi1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
秋娟|qiu1 juan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
春霞|chun1 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
淑敏|shu1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
新亮|xin1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
元芳|yuan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
国顺|guo2 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
宇航|yu3 hang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
伟伟|wei3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
晓艳|xiao3 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
志顺|zhi4 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巩|gong3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
佳欣|jia1 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
家勇|jia1 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
仁东|ren2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
仁杰|ren2 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
国勇|guo2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
国旺|guo2 wang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
勇辉|yong3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
启勇|qi3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
健林|jian4 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
志宇|zhi4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
凤智|feng4 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|聂|nie4
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
丹丹|dan1 dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
恩祥|en1 xiang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
明春|ming2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
福林|fu2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
怡敏|yi2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
海龙|hai3 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
旭东|xu4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
秀棠|xiu4 tang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
大伟|da4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
艳艳|yan4 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|晁|chao2
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
晶晶|jing1 jing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
清泉|qing1 quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
清亮|qing1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
岩|yan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
文娟|wen2 juan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
亦军|yi4 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
艳玲|yan4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|勾|gou1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
春生|chun1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
嘉年|jia1 nian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
春艳|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
林生|lin2 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
成林|cheng2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
文志|wen2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
敏辉|min3 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
子涵|zi3 han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
秉义|bing3 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
志辉|zhi4 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
四海|si4 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
莉莉|li4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|敖|ao2
心|xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|融|rong2
岩|yan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|融|rong2
景|jing3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|融|rong2
圣|sheng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|融|rong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
冬青|dong1 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
东阳|dong1 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
新宇|xin1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
国辉|guo2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
学平|xue2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
寒羽|han2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
文义|wen2 yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
子秋|zi3 qiu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
启明|qi3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
美凤|mei3 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
志高|zhi4 gao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|冷|leng3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
冬生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
丰年|feng1 nian2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
清武|qing1 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
佳乐|jia1 le4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
全东|quan2 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
全平|quan2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
龙子|long2 zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
国凤|guo2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
宇轩|yu3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
子涵|zi3 han2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
义生|yi4 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
凤玲|feng4 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
善宇|shan4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|辛|xin1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
春英|chun1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
东明|dong1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
先友|xian1 you3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
金凤|jin1 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
兰英|lan2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
学林|xue2 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
学武|xue2 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
文秀|wen2 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
宇平|yu3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
健明|jian4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
志健|zhi4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|简|jian3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
佳星|jia1 xing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
东平|dong1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
家伟|jia1 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
东亮|dong1 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
元丰|yuan2 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
元龙|yuan2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
明勇|ming2 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
兰秀|lan2 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
子钦|zi3 qin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
启弘|qi3 hong2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
亮英|liang4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
义龙|yi4 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
志莉|zhi4 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|饶|rao2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
东安|dong1 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
东元|dong1 yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
仁文|ren2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
仁海|ren2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
久生|jiu3 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
勇平|yong3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
子敏|zi3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
勇志|yong3 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
义峰|yi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
义成|yi4 cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
健勇|jian4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
义凤|yi4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|曾|zeng1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
开山|kai1 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
思宇|si1 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
东旭|dong1 xu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
元森|yuan2 sen1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
桐宇|tong2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
启峰|qi3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
子岩|zi3 yan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
晓伟|xiao3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
敏慧|min3 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
凤英|feng4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
彦晨|yan4 chen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|沙|sha1
丰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
家坤|jia1 kun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
江平|jiang1 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
思敏|si1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
兰芳|lan2 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
国平|guo2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
宏宇|hong2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
明凤|ming2 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
晓平|xiao3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
晓亮|xiao3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
秀芳|xiu4 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
凤琴|feng4 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鞠|ju1
征|zheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|须|xu1
平|ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|须|xu1
文柳|wen2 liu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|须|xu1
健|jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|须|xu1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
新春|xin1 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
明辉|ming2 hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
国良|guo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
雪梅|xue3 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
子凯|zi3 kai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
凤清|feng4 qing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
志明|zhi4 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|丰|feng1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
安国|an1 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
国新|guo2 xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
国琴|guo2 qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
磊|lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
伟民|wei3 min2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
峻|jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
浩刚|hao4 gang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
继萍|ji4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
振宇|zhen4 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巢|chao2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
东生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
佳慧|jia1 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
仁山|ren2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
卓文|zhuo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
学敏|xue2 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
国亮|guo2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
子杰|zi3 jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
晓磊|xiao3 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
义霞|yi4 xia2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
玉凤|yu4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|关|guan1
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
冬生|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
金海|jin1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
天赐|tian1 ci4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
勤|qin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
博安|bo2 an1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
博文|bo2 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
宏宇|hong2 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
文静|wen2 jing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
晓峰|xiao3 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
显友|xian3 you3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
汝俊|ru3 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
志峰|zhi4 feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
志文|zhi4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
桂凤|gui4 feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|查|zha1
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|后|hou4
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|后|hou4
德智|de2 zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|后|hou4
景|jing3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|后|hou4
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|后|hou4
瑞军|rui4 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|后|hou4
世健|shi4 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|后|hou4
一帆|yi1 fan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
山玉|shan1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
儒|ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
玲英|ling2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
仁龙|ren2 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
鹏举|peng2 ju3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
元瑞|yuan2 rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
晓文|xiao3 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
晓宇|xiao3 yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
永亮|yong3 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
向阳|xiang4 yang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
继武|ji4 wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|荆|jing1
冰|bing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|红|hong2
一军|yi1 jun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|红|hong2
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|红|hong2
菊花|ju2 hua1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|红|hong2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|红|hong2
美玲|mei3 ling2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|红|hong2
凤|feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|红|hong2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
思佳|si1 jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
佳龙|jia1 long2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
春秀|chun1 xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
吟歌|yin2 ge1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
元良|yuan2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
学海|xue2 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
国顺|guo2 shun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
子平|zi3 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
晓勇|xiao3 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
子健|zi3 jian4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
向东|xiang4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
健文|jian4 wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
志勇|zhi4 yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
志慧|zhi4 hui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|游|you2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
飞英|fei1 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
家怡|jia1 yi2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
香玉|xiang1 yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
学|xue2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
国英|guo2 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
林平|lin2 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
洁磊|jie2 lei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
宏照|hong2 zhao4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
曙芳|shu3 fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
永林|yong3 lin2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
亚|ya4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
兆英|zhao4 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
旭莹|xu4 ying2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
建伟|jian4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|竺|zhu2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
东升|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
春梅|chun1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
熙甫|xi1 fu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
东卫|dong1 wei4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
元春|yuan2 chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
儒学|ru2 xue2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
延赤|yan2 chi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
晓英|xiao3 ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
晓鹏|xiao3 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
永敏|yong3 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
启爱|qi3 ai4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
振东|zhen4 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
玉兰|yu4 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
赫俊|he4 jun4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|权|quan2
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
东升|dong1 sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
冬梅|dong1 mei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
东海|dong1 hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
天力|tian1 li4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
卓|zhuo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
鹏飞|peng2 fei1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
国良|guo2 liang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
宏伟|hong2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
国栋|guo2 dong4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
晓东|xiao3 dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
晓明|xiao3 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
永伟|yong3 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
喜乐|xi3 le4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
志超|zhi4 chao1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
志鹏|zhi4 peng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
志伟|zhi4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
亮亮|liang4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|盖|ge3
嘉|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|益|yi4
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|益|yi4
武|wu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|益|yi4
凤|feng4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|益|yi4
嘉|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桓|huan2
文|wen2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桓|huan2
子|zi3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桓|huan2
瑞|rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桓|huan2
建忠|jian4 zhong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|桓|huan2
冰|bing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
方明|fang1 ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
方敏|fang1 min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
春艳|chun1 yan4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
明山|ming2 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
维国|wei2 guo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
维伟|wei2 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
维亮|wei2 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
子轩|zi3 xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
子兰|zi3 lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
衍美|yan3 mei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
子木|zi3 mu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
茂山|mao4 shan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
建平|jian4 ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
绪伟|xu4 wei3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
绪亮|xu4 liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公|gong1
冰|bing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司马|si1 ma3
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司马|si1 ma3
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司马|si1 ma3
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司马|si1 ma3
峰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|上官|shang4 guan1
城|cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|上官|shang4 guan1
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|上官|shang4 guan1
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|上官|shang4 guan1
元|yuan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧阳|ou1 yang2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧阳|ou1 yang2
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|欧阳|ou1 yang2
芳|fang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|夏侯|xia4 hou2
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|夏侯|xia4 hou2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|夏侯|xia4 hou2
睿|rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|夏侯|xia4 hou2
冰|bing1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸葛|zhu1 ge3
仁|ren2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸葛|zhu1 ge3
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸葛|zhu1 ge3
智|zhi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|诸葛|zhu1 ge3
杰|jie2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻人|wen2 ren2
庆|qing4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|闻人|wen2 ren2
英|ying1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东方|dong1 fang1
哲|zhe2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东方|dong1 fang1
海|hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东方|dong1 fang1
毅|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|东方|dong1 fang1
天|tian1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|赫连|he4 lian2
康|kang1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皇甫|huang2 fu3
全|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皇甫|huang2 fu3
晓|xiao3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皇甫|huang2 fu3
义|yi4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|皇甫|huang2 fu3
佳|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尉迟|yu4 chi2
平|ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|尉迟|yu4 chi2
生|sheng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公羊|gong1 yang2
轩|xuan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单于|chan2 yu2
维|wei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|单于|chan2 yu2
嘉|jia1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申屠|shen1 tu2
雷|lei2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申屠|shen1 tu2
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申屠|shen1 tu2
秀|xiu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|申屠|shen1 tu2
修|xiu1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公孙|gong1 sun1
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公孙|gong1 sun1
宇|yu3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公孙|gong1 sun1
春|chun1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟离|zhong1 li2
权|quan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|钟离|zhong1 li2
峰|feng1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宇文|yu3 wen2
博|bo2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宇文|yu3 wen2
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宇文|yu3 wen2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|宇文|yu3 wen2
欣|xin1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|慕容|mu4 rong2
城|cheng2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|慕容|mu4 rong2
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|慕容|mu4 rong2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|慕容|mu4 rong2
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲜于|xian1 yu2
煌|huang2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|鲜于|xian1 yu2
丹|dan1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司徒|si1 tu2
乔|qiao2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司徒|si1 tu2
敏|min3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司徒|si1 tu2
瑞|rui4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|司徒|si1 tu2
辉|hui1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|端木|duan1 mu4
兰|lan2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|端木|duan1 mu4
玉|yu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|端木|duan1 mu4
施|shi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|巫马|wu1 ma3
海|hai3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|乐正|yue4 zheng4
儒|ru2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|公良|gong1 liang2
木|mu4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|段干|duan4 gan1
溪|xi1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|百里|bai3 li3
东|dong1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|呼延|hu1 yan2
平|ping2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|呼延|hu1 yan2
勇|yong3|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|呼延|hu1 yan2
亮|liang4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|呼延|hu1 yan2
贺|he4|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|梁丘|liang2 qiu1
明|ming2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|左丘|zuo3 qiu1
天|tian1|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|南宫|nan2 gong1
民|min2|120W 中文姓名语料|名|同名实录，姓氏与声调均一致。|南宫|nan2 gong1
# === GENERATED SAME-SURNAME EXAMPLES END ===
`;

  const COMMON_SURNAMES = [
    "王", "李", "张", "刘", "陈", "杨", "黄", "赵",
    "吴", "周", "徐", "孙", "马", "朱", "胡", "郭",
    "何", "高", "林", "罗", "郑", "梁", "谢", "宋"
  ];

  function parseSurnameRows(raw) {
    const result = {};
    raw.trim().split(/\r?\n/).forEach(function (line) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.charAt(0) === "#") return;
      const parts = trimmed.split("|");
      if (parts.length < 2) return;
      result[parts[0]] = [parts[1]];
    });
    return result;
  }

  function parseCompoundRows(raw) {
    const result = {};
    raw.trim().split(/\r?\n/).forEach(function (line) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.charAt(0) === "#") return;
      const parts = trimmed.split("|");
      if (parts.length < 2) return;
      result[parts[0]] = parts[1].split(/\s+/);
    });
    return result;
  }

  function parseNamingExamples(raw) {
    const result = [];
    raw.trim().split(/\r?\n/).forEach(function (line) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.charAt(0) === "#") return;
      const parts = trimmed.split("|");
      if (parts.length < 5) return;
      result.push({
        given: parts[0],
        pinyin: parts[1],
        origin: parts[2],
        type: parts[3],
        note: parts[4],
        surname: (parts[5] || "").trim(),
        surnamePinyin: (parts[6] || "").trim()
      });
    });
    return result;
  }

  const characters = [];
  const bySyllableTone = {};
  const seenRows = {};

  CHAR_ROWS.trim().split(/\r?\n/).forEach(function (line) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.charAt(0) === "#") return;
    const parts = trimmed.split("|");
    if (parts.length < 4) return;
    const char = parts[0];
    const pinyin = parts[1];
    const meaning = parts[2];
    const tags = parts[3].split(",").map(function (tag) { return tag.trim(); }).filter(Boolean);
    const flag = parts.length >= 5 ? parts[4].trim() : "";
    const nameable = flag !== "false";
    const lowPriority = flag === "low";
    const match = /^([a-zv]+)([1-4])$/.exec(pinyin);
    if (!match) return;
    const syllable = match[1];
    const tone = Number(match[2]);
    const key = char + "|" + pinyin;
    if (seenRows[key]) {
      const existing = seenRows[key];
      tags.forEach(function (tag) {
        if (existing.tags.indexOf(tag) === -1) existing.tags.push(tag);
      });
      existing.nameable = existing.nameable || nameable;
      existing.lowPriority = existing.lowPriority && lowPriority;
      return;
    }
    const entry = {
      char: char,
      pinyin: pinyin,
      syllable: syllable,
      tone: tone,
      meaning: meaning,
      tags: tags,
      nameable: nameable,
      lowPriority: lowPriority
    };
    seenRows[key] = entry;
    characters.push(entry);
    const stKey = syllable + tone;
    if (!bySyllableTone[stKey]) bySyllableTone[stKey] = [];
    bySyllableTone[stKey].push(entry);
  });

  const namingBySyllableTone = {};
  Object.keys(bySyllableTone).forEach(function (key) {
    const pool = bySyllableTone[key].filter(function (entry) { return entry.nameable; });
    if (pool.length) namingBySyllableTone[key] = pool;
  });

  const syllablesByTone = { 1: [], 2: [], 3: [], 4: [] };
  Object.keys(bySyllableTone).forEach(function (key) {
    const pool = bySyllableTone[key];
    const tone = pool[0].tone;
    syllablesByTone[tone].push(pool[0].syllable);
  });
  Object.keys(syllablesByTone).forEach(function (tone) {
    syllablesByTone[tone].sort();
  });

  const namingSyllablesByTone = { 1: [], 2: [], 3: [], 4: [] };
  Object.keys(namingBySyllableTone).forEach(function (key) {
    const pool = namingBySyllableTone[key];
    const tone = pool[0].tone;
    namingSyllablesByTone[tone].push(pool[0].syllable);
  });
  Object.keys(namingSyllablesByTone).forEach(function (tone) {
    namingSyllablesByTone[tone].sort();
  });

  window.NameData = {
    imagery: IMAGERY,
    imageryById: IMAGERY.reduce(function (acc, item) {
      acc[item.id] = item;
      return acc;
    }, {}),
    surnames: parseSurnameRows(SURNAME_ROWS),
    compoundSurnames: parseCompoundRows(COMPOUND_SURNAME_ROWS),
    commonSurnames: COMMON_SURNAMES,
    namingExamples: parseNamingExamples(NAMING_EXAMPLE_ROWS),
    characters: characters,
    bySyllableTone: bySyllableTone,
    syllablesByTone: syllablesByTone,
    namingBySyllableTone: namingBySyllableTone,
    namingSyllablesByTone: namingSyllablesByTone,
    maxImagery: 3
  };
})();
