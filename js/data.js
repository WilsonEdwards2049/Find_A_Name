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
`;

  const NAMING_EXAMPLE_ROWS = `
# 双字名：按名内声调分组，每种组合三例
知章|zhi1 zhang1|贺知章 · 唐|史|清亮端方，有书卷气。
徽因|hui1 yin1|林徽因 · 近代|史|音色明亮，雅而亲切。
淑真|shu1 zhen1|朱淑真 · 宋|史|温静端秀，音韵清和。
渊明|yuan1 ming2|陶渊明 · 东晋|史|开阔澄明，有田园清气。
宗元|zong1 yuan2|柳宗元 · 唐|史|端方沉稳，声调舒展。
湘云|xiang1 yun2|《红楼梦》· 史湘云|文|柔中有朗，轻盈自然。
商隐|shang1 yin3|李商隐 · 唐|史|含蓄深致，尾音轻收。
修远|xiu1 yuan3|屈原《离骚》|诗|取路远而心定之意。
疏影|shu1 ying3|林逋《山园小梅》|诗|清疏有致，诗意淡远。
清照|qing1 zhao4|李清照 · 宋|史|清澈明亮，光意盈盈。
居易|ju1 yi4|白居易 · 唐|史|平和从容，读来安稳。
嘉树|jia1 shu4|屈原《橘颂》|诗|嘉美如树，清正有生机。
文君|wen2 jun1|卓文君 · 汉|史|文雅明朗，音色温润。
灵均|ling2 jun1|屈原 · 字灵均|史|空灵匀净，有楚辞气韵。
晴川|qing2 chuan1|崔颢《黄鹤楼》|诗|开阔明净，山川在望。
从文|cong2 wen2|沈从文 · 现代|史|沉静文雅，气质舒展。
玄龄|xuan2 ling2|房玄龄 · 唐|史|深稳有度，音韵厚实。
则徐|ze2 xu2|林则徐 · 清|史|端凝从容，收束有力。
弘景|hong2 jing3|陶弘景 · 南朝|史|宏阔明净，气度舒展。
明远|ming2 yuan3|鲍照 · 字明远|史|明亮悠远，志向开阔。
文举|wen2 ju3|孔融 · 字文举|史|文雅端正，声调上扬。
灵运|ling2 yun4|谢灵运 · 南朝|史|灵秀而有远意。
廷玉|ting2 yu4|张廷玉 · 清|史|端正温润，如玉在朝。
玄烨|xuan2 ye4|玄烨 · 清康熙帝|史|深静光明，气韵不凡。
宝钗|bao3 chai1|《红楼梦》· 薛宝钗|文|温润明丽，音色清亮。
采薇|cai3 wei1|《诗经·小雅》|诗|草木清气，朴素有诗意。
子衿|zi3 jin1|《诗经·郑风》|诗|书卷气浓，音节轻灵。
子昂|zi3 ang2|陈子昂 · 唐|史|清越上扬，意气自生。
采苹|cai3 ping2|《诗经·召南》|诗|清新柔美，水草有香。
子房|zi3 fang2|张良 · 字子房|史|从容有谋，音节平稳。
可久|ke3 jiu3|张可久 · 元|史|朗润耐读，有余韵。
小宛|xiao3 wan3|董小宛 · 明末|史|轻巧温婉，气韵柔和。
子美|zi3 mei3|杜甫 · 字子美|史|温厚清正，尽显雅意。
宝玉|bao3 yu4|《红楼梦》· 贾宝玉|文|温润珍重，明亮可亲。
子建|zi3 jian4|曹植 · 字子建|史|清朗俊逸，收束有力。
婉若|wan3 ruo4|曹植《洛神赋》|诗|柔美灵动，如游龙之姿。
若虚|ruo4 xu1|张若虚 · 唐|史|冲淡清远，有虚静之美。
仲淹|zhong4 yan1|范仲淹 · 宋|史|宽厚深沉，气象开阔。
望舒|wang4 shu1|屈原《离骚》|诗|清朗悠远，有月御之意。
浩然|hao4 ran2|孟浩然 · 唐|史|开阔正大，气象充沛。
相如|xiang4 ru2|司马相如 · 汉|史|温润而有风骨。
志摩|zhi4 mo2|徐志摩 · 现代|史|清朗洒脱，有余韵。
万里|wan4 li3|杨万里 · 宋|史|辽阔开阔，收束有力。
孟頫|meng4 fu3|赵孟頫 · 元|史|端雅有古意。
慧远|hui4 yuan3|慧远 · 东晋高僧|史|静远澄明，余味清长。
道韫|dao4 yun4|谢道韫 · 东晋|史|清雅有才情，声调沉稳。
黛玉|dai4 yu4|《红楼梦》· 林黛玉|文|清冷灵秀，诗意深长。
弄玉|nong4 yu4|《列仙传》· 秦穆公女|文|轻灵和美，有仙气。
# 单字名：每种声调三例
昭|zhao1|班昭 · 汉|史|温雅明净，有史家风范。
骞|qian1|张骞 · 汉|史|开阔高远，音色清亮。
超|chao1|班超 · 汉|史|昂扬进取，读来有力。
原|yuan2|屈原 · 战国|史|本真开阔，有草木原野之气。
白|bai2|李白 · 唐|史|明净简练，音色清越。
游|you2|陆游 · 宋|史|从容自在，有余韵。
甫|fu3|杜甫 · 唐|史|端正厚实，读来沉稳。
永|yong3|柳永 · 宋|史|悠长温润，余音舒展。
岛|dao3|贾岛 · 唐|史|清寂有诗意，音节轻收。
轼|shi4|苏轼 · 宋|史|端正有力，收束沉稳。
牧|mu4|杜牧 · 唐|史|清朗宽阔，有原野之意。
愈|yu4|韩愈 · 唐|史|明朗有力，余韵清长。
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
        note: parts[4]
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
      if (existing.meaning.length < meaning.length) existing.meaning = meaning;
      return;
    }
    const entry = {
      char: char,
      pinyin: pinyin,
      syllable: syllable,
      tone: tone,
      meaning: meaning,
      tags: tags
    };
    seenRows[key] = entry;
    characters.push(entry);
    const stKey = syllable + tone;
    if (!bySyllableTone[stKey]) bySyllableTone[stKey] = [];
    bySyllableTone[stKey].push(entry);
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
    maxImagery: 3
  };
})();
