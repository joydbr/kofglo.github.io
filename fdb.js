const tankP = 'assets/images/types/ttank.png';
const gankP = 'assets/images/types/tgank.png';
const dpsP = 'assets/images/types/tdps.png';

const tortoiseP = 'assets/images/souls/stortoise.png';
const viperP = 'assets/images/souls/sviper.png';
const tigerP = 'assets/images/souls/stiger.png';
const bearP = 'assets/images/souls/sbear.png';
const otherP = 'assets/images/souls/sother.png';

const goldP = 'assets/images/misc/coin.png';

/* female = femal, to filter to work */
let gategen = 'assets/images/fighters/fpart1.jpg';

let fdb = [
    {id:1, avatar:'assets/images/fighters/kim.jpg', ap:12, name:'Kim', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true'},
    {id:2, avatar:'assets/images/fighters/yuri.jpg', ap:12, name:'Yuri', type:['dps', dpsP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true', ryu:'true'},
    {id:3, avatar:'assets/images/fighters/andy.jpg', ap:12, name:'Andy', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:4, avatar:'assets/images/fighters/athena.jpg', ap:12, name:'Athena', type:['gank', gankP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true', heal:'true'},
    {id:5, avatar:'assets/images/fighters/benimaru.jpg', ap:12, name:'Benimaru', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true'},
    {id:6, avatar:'assets/images/fighters/brian.jpg', ap:12, name:'Brian', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:7, avatar:'assets/images/fighters/daimon.jpg', ap:12, name:'Daimon', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:8, avatar:'assets/images/fighters/joe.jpg', ap:12, name:'Joe', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:9, avatar:'assets/images/fighters/king.jpg', ap:12, name:'King', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true'},
    {id:10, avatar:'assets/images/fighters/lucky.jpg', ap:12, name:'Lucky', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:11, avatar:'assets/images/fighters/mature.jpg', ap:12, name:'Mature', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal', orochi:'true'},
    {id:12, avatar:'assets/images/fighters/ralf.jpg', ap:12, name:'Ralf', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male',aid:'true', ikari:'true'},
    {id:13, avatar:'assets/images/fighters/ryo.jpg', ap:12, name:'Ryo', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:['assets/images/fighters/yuri.jpg', 'assets/images/fighters/takuma.jpg', 'assets/images/fighters/robert.jpg'], gender:'male', aid:'true', ryu:'true'},
    {id:14, avatar:'assets/images/fighters/shermie.jpg', ap:12, name:'Shermie', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal', orochi:'true'},
    {id:15, avatar:'assets/images/fighters/shingo.jpg', ap:12, name:'Shingo', type:['tank', tankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:16, avatar:'assets/images/fighters/kensou.jpg', ap:12, name:'Kensou', type:['gank', gankP], soul:['tortoise', tortoiseP], fpart:['assets/images/fighters/athena.jpg', 'assets/images/fighters/shingo.jpg', 'assets/images/fighters/chin.jpg'], gender:'male', aid:'true', heal:'true'},
    {id:17, avatar:'assets/images/fighters/takuma.jpg', ap:12, name:'Takuma', type:['tank', tankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', ryu:'true'},
    {id:18, avatar:'assets/images/fighters/vice.jpg', ap:12, name:'Vice', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal', orochi:'true'},
    {id:19, avatar:'assets/images/fighters/yashiro.jpg', ap:12, name:'Yashiro', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', orochi:'true'},
    {id:20, avatar:'assets/images/fighters/angel.jpg', ap:13, name:'Angel', type:['dps', dpsP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'fmal'},
    {id:21, avatar:'assets/images/fighters/bao.jpg', ap:13, name:'Bao', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', heal:'true'},
    {id:22, avatar:'assets/images/fighters/billy.jpg', ap:13, name:'Billy', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true'},
    {id:23, avatar:'assets/images/fighters/mary.jpg', ap:13, name:'Blue Mary', type:['tank', tankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true'},
    {id:24, avatar:'assets/images/fighters/chang.jpg', ap:13, name:'Chang', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:25, avatar:'assets/images/fighters/chin.jpg', ap:13, name:'Chin', type:['gank', gankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', flame:'true'},
    {id:26, avatar:'assets/images/fighters/chizuru.jpg', ap:13, name:'Chizuru', type:['gank', gankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true'},
    {id:27, avatar:'assets/images/fighters/choi.jpg', ap:13, name:'Choi', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:28, avatar:'assets/images/fighters/chris.jpg', ap:13, name:'Chris', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', orochi:'true'},
    {id:29, avatar:'assets/images/fighters/clark.jpg', ap:13, name:'Clark', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', ikari:'true'},
    {id:30, avatar:'assets/images/fighters/eiji.jpg', ap:13, name:'Eiji', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:31, avatar:'assets/images/fighters/foxy.jpg', ap:13, name:'Foxy', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal'},
    {id:32, avatar:'assets/images/fighters/heavyd.jpg', ap:13, name:'Heavy D', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:33, avatar:'assets/images/fighters/heidern.jpg', ap:13, name:'Heidern', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male', heal:'true', ikari:'true'},
    {id:34, avatar:'assets/images/fighters/hinako.jpg', ap:13, name:'Hinako', type:['gank', gankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'femal'},
    {id:35, avatar:'assets/images/fighters/iori.jpg', ap:13, name:'Iori', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', prota:'true', orochi:'true', flame:'true', aid:'true'},
    {id:36, avatar:'assets/images/fighters/krauser.jpg', ap:13, name:'Krauser', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:37, avatar:'assets/images/fighters/kyo.jpg', ap:13, name:'Kyo', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', prota:'true', flame:'true'},
    {id:38, avatar:'assets/images/fighters/leona.jpg', ap:13, name:'Leona', type:['gank', gankP], soul:['viper', viperP], fpart:['assets/images/fighters/ralf.jpg', 'assets/images/fighters/clark.jpg', 'assets/images/fighters/heidern.jpg'], gender:'femal', aid:'true', orochi:'true', heal:'true', ikari:'true'},
    {id:39, avatar:'assets/images/fighters/mai.jpg', ap:13, name:'Mai', type:['gank', gankP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true', flame:'true', iSkill:'true'},
    {id:40, avatar:'assets/images/fighters/maxima.jpg', ap:13, name:'Maxima', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:41, avatar:'assets/images/fighters/momoko.jpg', ap:13, name:'Momoko', type:['dps', dpsP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal', heal:'true'},
    {id:42, avatar:'assets/images/fighters/mrbig.jpg', ap:13, name:'Mr. Big', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:43, avatar:'assets/images/fighters/nakoruru.jpg', ap:13, name:'Nakoruru', type:['gank', gankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal'},
    {id:44, avatar:'assets/images/fighters/ochris.jpg', ap:13, name:'Orochi Chris', type:['dps', dpsP], soul:['bear', bearP], fpart:['assets/images/fighters/yashiro.jpg', 'assets/images/fighters/choi.jpg', 'assets/images/fighters/oshermie.jpg'], gender:'male', aid:'true', orochi:'true', flame:'true'},
    {id:45, avatar:'assets/images/fighters/oshermie.jpg', ap:13, name:'Orochi Shermie', type:['gank', gankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true', orochi:'true', iSkill:'true'},
    {id:46, avatar:'assets/images/fighters/oyashiro.jpg', ap:13, name:'Orochi Yashiro', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', orochi:'true'},
    {id:47, avatar:'assets/images/fighters/robert.jpg', ap:13, name:'Robert', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', ryu:'true'},
    {id:48, avatar:'assets/images/fighters/saisyu.jpg', ap:13, name:'Saisyu', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', flame:'true'},
    {id:49, avatar:'assets/images/fighters/terry.jpg', ap:13, name:'Terry', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:50, avatar:'assets/images/fighters/todo.jpg', ap:13, name:'Todo Kasumi', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'femal'},
    {id:51, avatar:'assets/images/fighters/whip.jpg', ap:13, name:'Whip', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal', ikari:'true'},
    {id:52, avatar:'assets/images/fighters/yamazaki.jpg', ap:13, name:'Yamazaki', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', orochi:'true'},
    {id:53, avatar:'assets/images/fighters/adelheid.jpg', ap:14, name:'Adelheid', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', captain:'true', aid:'true', captain:'true'},
    {id:54, avatar:'assets/images/fighters/athena2002.jpg', ap:14, name:'Athena 2002 UM', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal', heal:'true', aid:'true'},
    {id:55, avatar:'assets/images/fighters/benimaru2003.jpg', ap:14, name:'Benimaru 2003', type:['gank', gankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true'},
    {id:56, avatar:'assets/images/fighters/clone.jpg', ap:14, name:'Clone Zero', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male', leaders:'true'},
    {id:57, avatar:'assets/images/fighters/ciori.jpg', ap:14, name:'Crazy Iori', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', prota:'true', orochi:'true', flame:'true', captain:'true'},
    {id:58, avatar:'assets/images/fighters/geese.jpg', ap:14, name:'Geese', type:['tank', tankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', heal:'true'},
    {id:59, avatar:'assets/images/fighters/goenitz.jpg', ap:14, name:'Goenitz', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', leaders:'true', aid:'true', orochi:'true'},
    {id:60, avatar:'assets/images/fighters/haomaru.jpg', ap:14, name:'haomaru', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:61, avatar:'assets/images/fighters/igniz.jpg', ap:14, name:'Igniz', type:['gank', gankP], soul:['other', otherP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', leaders:'true', captain:'true'},
    {id:62, avatar:'assets/images/fighters/jhun.jpg', ap:14, name:'Jhun Hoon', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:63, avatar:'assets/images/fighters/k.jpg', ap:14, name:"K'", type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', prota:'true', flame:'true'},
    {id:64, avatar:'assets/images/fighters/krizalid.jpg', ap:14, name:'Krizalid', type:['dps', dpsP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male', flame:'true', leaders:'true', aid:'true', captain:'true'},
    {id:65, avatar:'assets/images/fighters/kula.jpg', ap:14, name:'Kula', type:['gank', gankP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true'},
    {id:66, avatar:'assets/images/fighters/kyonests.jpg', ap:14, name:'Kyo NESTS', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', prota:'true', flame:'true'},
    {id:67, avatar:'assets/images/fighters/lin.jpg', ap:14, name:'Lin', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:68, avatar:'assets/images/fighters/maki.jpg', ap:14, name:'Maki Kagura', type:['gank', gankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal'},
    {id:69, avatar:'assets/images/fighters/maylee.jpg', ap:14, name:'May Lee', type:['gank', gankP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'femal'},
    {id:70, avatar:'assets/images/fighters/newmrkarate.jpg', ap:14, name:'New Mr. Karate', type:['tank', tankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', ryu:'true'},
    {id:71, avatar:'assets/images/fighters/nameless.jpg', ap:14, name:'Nameless', type:['dps', dpsP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', flame:'true', captain:'true'},
    {id:72, avatar:'assets/images/fighters/orochi.jpg', ap:14, name:'Orochi', type:['gank', gankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', leaders:'true', aid:'true', orochi:'true'},
    {id:73, avatar:'assets/images/fighters/oleona.jpg', ap:14, name:'Orochi Leona', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal', heal:'true', ikari:'true', aid:'true', orochi:'true', iSkill:'true'},
    {id:74, avatar:'assets/images/fighters/robert2002.jpg', ap:14, name:'Robert 2002 UM', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', ryu:'true'},
    {id:75, avatar:'assets/images/fighters/rugal.jpg', ap:14, name:'Rugal', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true', leaders:'true', orochi:'true'},
    {id:76, avatar:'assets/images/fighters/terry2003.jpg', ap:14, name:'Terry 2003', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male', captain:'true'},
    {id:77, avatar:'assets/images/fighters/ukyo.jpg', ap:14, name:'Ukyo Tachibana', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'fluid'},
    {id:78, avatar:'assets/images/fighters/vanessa.jpg', ap:14, name:'Vanessa', type:['dps', dpsP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal', aid:'true'},
    {id:79, avatar:'assets/images/fighters/zero.jpg', ap:14, name:'Zero', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', aid:'true'},
    {id:80, avatar:'assets/images/fighters/orugal.jpg', ap:15, name:'Omega Rugal', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:['assets/images/fighters/saisyu.jpg', 'assets/images/fighters/oleona.jpg', 'assets/images/fighters/ciori.jpg'], gender:'male', leaders:'true', aid:'true', orochi:'true'},
    {id:81, avatar:'assets/images/fighters/ash.jpg', ap:15, name:'Ash', type:['dps', dpsP], soul:['viper', viperP], fpart:['assets/images/fighters/kyo.jpg', 'assets/images/fighters/k.jpg', 'assets/images/fighters/kyonests.jpg'], gender:'male', aid:'true', prota:'true', flame:'true', iSkill:'true'},
    {id:82, avatar:'assets/images/fighters/mukai.jpg', ap:15, name:'Mukai', type:['gank', gankP], soul:['tiger', tigerP], fpart:['assets/images/fighters/oyashiro.jpg', 'assets/images/fighters/zero.jpg', 'assets/images/fighters/kyonests.jpg'], gender:'male', leaders:'true'},
    {id:83, avatar:'assets/images/fighters/magaki.jpg', ap:15, name:'Magaki', type:['tank', tankP], soul:['bear', bearP], fpart:['assets/images/fighters/iori.jpg', 'assets/images/fighters/orochi.jpg', 'assets/images/fighters/rugal.jpg'], gender:'male', leaders:'true', heal:'true', iSkill:'true'},
    {id:84, avatar:'assets/images/fighters/iiori.jpg', ap:15, name:'Instinct Iori', type:['dps', dpsP], soul:['other', otherP], fpart:['assets/images/fighters/iori.jpg', 'assets/images/fighters/orochi.jpg', 'assets/images/fighters/ciori.jpg'], gender:'male', prota:'true', orochi:'true', captain:'true'},
    {id:85, avatar:'assets/images/fighters/ngeese.jpg', ap:15, name:'Nightmare Geese', type:['gank', gankP], soul:['bear', bearP], fpart:['assets/images/fighters/robert.jpg', 'assets/images/fighters/mai.jpg', 'assets/images/fighters/k.jpg'], gender:'male'},
    {id:86, avatar:'assets/images/fighters/goeniko.jpg', ap:15, name:'Goeniko', type:['dps', dpsP], soul:['viper', viperP], fpart:['assets/images/fighters/oshermie.jpg', 'assets/images/fighters/orochi.jpg', 'assets/images/fighters/goenitz.jpg'], gender:'femal', orochi:'true'},
    {id:87, avatar:'assets/images/fighters/mrkarate.jpg', ap:15, name:'Mr. Karate', type:['gank', gankP], soul:['tortoise', tortoiseP], fpart:['assets/images/fighters/robert.jpg', 'assets/images/fighters/zero.jpg', 'assets/images/fighters/newmrkarate.jpg'], gender:'male', ryu:'true'},
    {id:88, avatar:'assets/images/fighters/elizabeth.jpg', ap:15, name:'Elizabeth', type:['tank', tankP], soul:['tiger', tigerP], fpart:['assets/images/fighters/todo.jpg', 'assets/images/fighters/k.jpg', 'assets/images/fighters/kula.jpg'], gender:'femal', iSkill:'true', prota:'true'},
    {id:89, avatar:'assets/images/fighters/fkyo.jpg', ap:15, name:'Flame Kyo', type:['dps', dpsP], soul:['other', otherP], fpart:[gategen, gategen, gategen], gender:'male', prota:'true', flame:'true', captain:'true'},
    {id:90, avatar:'assets/images/fighters/saiki.jpg', ap:15, name:'Saiki', type:['tank', tankP], soul:['viper', viperP], fpart:['assets/images/fighters/robert.jpg', 'assets/images/fighters/mai.jpg', 'assets/images/fighters/kyonests.jpg'], gender:'male', leaders:'true', flame:'true'},
    {id:91, avatar:'assets/images/fighters/alluringmai.jpg', ap:15, name:'Alluring Mai', type:['gank', gankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'femal', flame:'true'},
    {id:92, avatar:'assets/images/fighters/tung.jpg', ap:15, name:'Tung Fue Rue', type:['dps', dpsP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', iSkill:'true', heal:'true'},
    {id:93, avatar:'assets/images/fighters/shunei.jpg', ap:15, name:"Shun'ei", type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male', prota:'true', flame:'true', heal:'true'},
    {id:94, avatar:'assets/images/fighters/oswald.jpg', ap:15, name:'Oswald', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'male', heal:'true'},
    {id:95, avatar:'assets/images/fighters/ssleona.jpg', ap:15, name:'Silent Soldier Leona', type:['gank', gankP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'femal', ikari:'true'},
    {id:96, avatar:'assets/images/fighters/shion.jpg', ap:15, name:'Shion', type:['dps', dpsP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'fluid'},
    {id:97, avatar:'assets/images/fighters/cleona.jpg', ap:15, name:'Catty Leona', type:['gank', gankP], soul:['viper', viperP], fpart:['assets/images/fighters/robert.jpg', 'assets/images/fighters/mai.jpg', 'assets/images/fighters/k.jpg'], gender:'femal', ikari:'true'},
    {id:98, avatar:'assets/images/fighters/ssathena.jpg', ap:15, name:'Superstar Athena', type:['gank', gankP], soul:['tortoise', tortoiseP], fpart:['assets/images/fighters/bao.jpg', 'assets/images/fighters/momoko.jpg', 'assets/images/fighters/kula.jpg'], gender:'femal', heal:'true'},
    {id:99, avatar:'assets/images/fighters/robertxi.jpg', ap:15, name:'Robert XI', type:['gank', gankP], soul:['viper', viperP], fpart:['assets/images/fighters/ryo.jpg', 'assets/images/fighters/takuma.jpg', 'assets/images/fighters/robert2002.jpg'], gender:'male', ryu:'true', iSkill:'true'},
    {id:100, avatar:'assets/images/fighters/rdkensou.jpg', ap:15, name:'Rising Dragon Kensou', type:['dps', dpsP], soul:['viper', viperP], fpart:['assets/images/fighters/bao.jpg', 'assets/images/fighters/chin.jpg', 'assets/images/fighters/athena2002.jpg'], gender:'male'},
    {id:101, avatar:'assets/images/fighters/oralf.jpg', ap:15, name:'One-man Army Ralf', type:['tank', tankP], soul:['bear', bearP], fpart:['assets/images/fighters/heidern.jpg', 'assets/images/fighters/clark.jpg', 'assets/images/fighters/oleona.jpg'], gender:'male', iSkill:'true', ikari:'true'},
    {id:102, avatar:'assets/images/fighters/dvice.jpg', ap:15, name:'Death Vice', type:['gank', gankP], soul:['tiger', tigerP], fpart:['assets/images/fighters/vice.jpg', 'assets/images/fighters/mature.jpg', 'assets/images/fighters/orochi.jpg'], gender:'femal', orochi:'true', iSkill:'true'},
    {id:103, avatar:'assets/images/fighters/cterry.png', ap:15, name:'Cutie Terry', type:['dps', dpsP], soul:['bear', bearP], fpart:['assets/images/fighters/terry.jpg', 'assets/images/fighters/geese.jpg', 'assets/images/fighters/terry2003.jpg'], gender:'femal'},
    {id:104, avatar:'assets/images/fighters/clarkxiii.jpg', ap:15, name:'Clark XIII', type:['dps', dpsP], soul:['bear', bearP], fpart:[gategen, gategen, gategen], gender:'male', ikari:'true'},
    {id:105, avatar:'assets/images/fighters/cbmature.jpg', ap:15, name:'Cruel Beauty Mature', type:['dps', dpsP], soul:['tortoise', tortoiseP], fpart:['assets/images/fighters/mature.jpg', 'assets/images/fighters/vice.jpg', 'assets/images/fighters/ciori.jpg'], gender:'femal', iSkill:'true', orochi:'true'},
    {id:106, avatar:'assets/images/fighters/tk.jpg', ap:15, name:"Transcendence K'", type:['dps', dpsP], soul:['tiger', tigerP], fpart:['assets/images/fighters/k.jpg', 'assets/images/fighters/maxima.jpg', 'assets/images/fighters/whip.jpg'], gender:'male', prota:'true', flame:'true'},
    {id:107, avatar:'assets/images/fighters/mizuchi.jpg', ap:15, name:'Mizuchi', type:['gank', gankP], soul:['other', otherP], fpart:['assets/images/fighters/leona.jpg', 'assets/images/fighters/iori.jpg', 'assets/images/fighters/orochi.jpg'], gender:'male', captain:'true', orochi:'true'},
    {id:108, avatar:'assets/images/fighters/duolon.jpg', ap:15, name:'Duo Lon', type:['tank', tankP], soul:['viper', viperP], fpart:[gategen, gategen, gategen], gender:'male'},
    {id:109, avatar:'assets/images/fighters/idkula.jpg', ap:15, name:'Ice Doll Kula', type:['tank', tankP], soul:['tortoise', tortoiseP], fpart:[gategen, gategen, gategen], gender:'femal', iSkill:'true'},
    {id:110, avatar:'assets/images/fighters/xkarate.jpg', ap:15, name:'Extreme Mr. Karate II', type:['tank', tankP], soul:['tiger', tigerP], fpart:[gategen, gategen, gategen], gender:'male', ryu:'true'}
];

/* ,
    {id:, avatar:'assets/images/fighters/.jpg', ap:15, name:'', type:['', ], soul:['', ], fpart:[gategen, gategen, gategen], gender:'male'}
    'assets/images/fighters/.jpg'
*/
/*, leaders:'true', captain:'true', iSkill:'true', aid:'true', prota:'true', orochi:'true', flame:'true', heal:'true', ikari:'true', ryu:'true'*/

fdb.reverse();


/* prom aps [mat principal, mat secundario, enhance potion, ouro]*/

let promdb = [
    {id:1, lv:'Green', rcolor:'bggreen', iname:'GreenSteel', ap15:[1, 1, 6, 3000], ap14:[1, 1, 5, 3000], ap13:[1, 1, 3, 3000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:2, lv:'Green +1', rcolor:'bggreen', iname:'GreenSteel', ap15:['?', '?', '?', '?'], ap14:[3, 3, 15, 6000], ap13:[2, 2, 10, 6000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:3, lv:'Green +2', rcolor:'bggreen', iname:'Jade', ap15:['?', '?', '?', '?'], ap14:[8, 4, 20, 10000], ap13:[6, 3, 15, 10000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:4, lv:'Blue', rcolor:'bgblue', iname:'Jade', ap15:['?', '?', '?', '?'], ap14:[16, 6, 30, 20000], ap13:[12, 4, 20, 20000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:5, lv:'Blue +1', rcolor:'bgblue', iname:'Sapphire', ap15:['?', '?', '?', '?'], ap14:[24, 8, 42, 40000], ap13:[18, 6, 30, 40000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:6, lv:'Blue +2', rcolor:'bgblue', iname:'Vajra', ap15:['?', '?', '?', '?'], ap14:[36, 12, 56, 60000], ap13:[24, 8, 40, 60000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:7, lv:'Blue +3', rcolor:'bgblue', iname:'Vajra', ap15:['?', '?', '?', '?'], ap14:[42, 14, 84, 80000], ap13:[30, 10, 60, 80000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:8, lv:'Purple', rcolor:'bgpurple', iname:'Amethyst', ap15:['?', '?', '?', '?'], ap14:[66, 22, 126, 100000], ap13:[45, 15, 90, 100000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:9, lv:'Purple +1', rcolor:'bgpurple', iname:'Amethyst', ap15:['?', '?', '?', '?'], ap14:[84, 28, 168, 120000], ap13:[60, 20, 120, 120000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:10, lv:'Purple +2', rcolor:'bgpurple', iname:'Frostpulse', ap15:[162, 54, 335, 140000], ap14:[135, 45, 280, 140000], ap13:[96, 32, 200, 140000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:11, lv:'Purple +3', rcolor:'bgpurple', iname:'Frostpulse', ap15:[246, 82, 540, 160000], ap14:[270, 560, 90, '?'], ap13:[144, 48, 320, 160000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:12, lv:'Purple +4', rcolor:'bgpurple', iname:'Obsidian', ap15:[330, 110, 670, 180000], ap14:[270, 90, 560, 0000], ap13:[192, 64, 400, 180000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:13, lv:'Orange', rcolor:'bgorange', iname:'Obsidian', ap15:[480, 160, 1010, '?'], ap14:[405, 135, 840, 200000], ap13:[288, 96, 600, 200000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:14, lv:'Orange +1', rcolor:'bgorange', iname:'Lightforger', ap15:[645, 215, 1340, 00000], ap14:[540, 180, 1120, 240000], ap13:[384, 128, 800, 240000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:15, lv:'Orange +2', rcolor:'bgorange', iname:'Lightforger', ap15:[1005, 335, 2100, 280000], ap14:[840, 280, 1750, 000000], ap13:[600, 200, 1250, 000000], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:16, lv:'Orange +3', rcolor:'bgorange', iname:'Molten', ap15:[1515, 505, 2690, 320000], ap14:['?', '?', '?', '?'], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:17, lv:'Orange +4', rcolor:'bgorange', iname:'Kingly', ap15:[2010, 670, 3360, 000000], ap14:[1680, 560, 2800, 000000], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:18, lv:'Orange +5', rcolor:'bgorange', iname:'Emperor', ap15:[2265, 755, 4200, 400000], ap14:['?', '?', '?', '?'], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:19, lv:'Red', rcolor:'bgred', iname:'Gods', ap15:[2520, 840, 3360, '?'], ap14:['?', '?', '?', '?'], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:20, lv:'Red +1', rcolor:'bgred', iname:'Genesis', ap15:['?', '?', '?', '?'], ap14:['?', '?', '?', '?'], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:21, lv:'Red +2', rcolor:'bgred', iname:'Celling', ap15:['?', '?', '?', '?'], ap14:['?', '?', '?', '?'], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:22, lv:'Red +3', rcolor:'bgred', iname:'Azure', ap15:['?', '?', '?', '?'], ap14:['?', '?', '?', '?'], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:23, lv:'Red +4', rcolor:'bgred', iname:'Gods Flame', ap15:['?', '?', '?', '?'], ap14:['?', '?', '?', '?'], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']},
    {id:24, lv:'Red +5', rcolor:'bgred', iname:'Meteorite', ap15:['?', '?', '?', '?'], ap14:['?', '?', '?', '?'], ap13:['?', '?', '?', '?',], imgi:['assets/images/upgrades/sh1.jpg','assets/images/upgrades/st1.jpg','assets/images/upgrades/sw1.jpg']}
];

/* xp [ap15, 14, 13, 12]*/

let updb = [
    {lv:2, xp:['?', 48, 36, 28]},
    {lv:3, xp:['?', 96, 72, 56]},
    {lv:4, xp:['?', 144, 108, 84]},
    {lv:5, xp:['?', 192, 144, 112]},
    {lv:6, xp:['?', 240, 180, 140]},
    {lv:7, xp:['?', 288, 216, 168]},
    {lv:8, xp:['?', 360, 270, 210]},
    {lv:9, xp:['?', 480, 360, 280]},
    {lv:10, xp:['?', 720, 540, 420]},
    {lv:11, xp:['?', 960, 720, 560]},
    {lv:12, xp:['?', 1200, 900, 700]},
    {lv:13, xp:['?', 1440, 1080, 840]},
    {lv:14, xp:['?', 1920, 1440, 1120]},
    {lv:15, xp:['?', 2400, 1800, 1400]},
    {lv:16, xp:['?', 2880, 2160, 1680]},
    {lv:17, xp:['?', 4080, 3060, 2380]},
    {lv:18, xp:['?', 4800, 3600, 2800]},
    {lv:19, xp:['?', 5520, 4140, 3220]},
    {lv:20, xp:['?', 6240, 4680, 3639]},
    {lv:21, xp:['?', 6960, 5220, 4059]},
    {lv:22, xp:['?', 7680, 5760, 4480]},
    {lv:23, xp:['?', 8400, 6300, 4900]},
    {lv:24, xp:['?', 8880, 6660, 5180]},
    {lv:25, xp:['?', 9600, 7200, 5600]},
    {lv:26, xp:['?', 10320, 7740, 6020]},
    {lv:27, xp:['?', 12480, 9360, 7279]},
    {lv:28, xp:['?', 12720, 9540, 7419]},
    {lv:29, xp:['?', 13680, 10260, 7979]},
    {lv:30, xp:['?', 14640, 10980, 8540]},
    {lv:31, xp:['?', 15600, 11700, 9100]},
    {lv:32, xp:['?', 18000, 13500, 10500]},
    {lv:33, xp:['?', 19200, 14400, 11200]},
    {lv:34, xp:['?', 20400, 15300, 11900]},
    {lv:35, xp:['?', 21840, 16380, 12740]},
    {lv:36, xp:['?', 23500, 17460, 13580]},
    {lv:37, xp:['?', 28800, 21600, 16800]},
    {lv:38, xp:['?', 28800, 21600, 16800]},
    {lv:39, xp:['?', 31200, 23400, 18200]},
    {lv:40, xp:['?', 33600, 25200, 19600]},
    {lv:41, xp:[100, 38400, 28800, 22400]},
    {lv:42, xp:[100, 50400, 37800, 29399]},
    {lv:43, xp:[100, 57600, 43200, 33600]},
    {lv:44, xp:[100, 64800, 48600, 37800]},
    {lv:45, xp:['?', 72000, 54000, 42000]},
    {lv:46, xp:['?', 79200, 59400, 46200]},
    {lv:47, xp:[100, 88800, 66600, 51800]},
    {lv:48, xp:[100, 98400, 73800, 57399]},
    {lv:49, xp:[100, 108000, 81000, 62999]},
    {lv:50, xp:['?', 117600, 88200, 68600]},
    {lv:51, xp:[100, 129600, 97200, 75600]},
    {lv:52, xp:[100, 158400, 118800, 92400]},
    {lv:53, xp:[100, 172800, 129600, 100800]},
    {lv:54, xp:['?', 189600, 142200, 110600]},
    {lv:55, xp:[275200, 206400, 154800, 120399]},
    {lv:56, xp:[307200, 230400, 172800, 134400]},
    {lv:57, xp:[352000, 264000, 198000, 154000]},
    {lv:58, xp:[384000, 288000, 216000, 168000]},
    {lv:59, xp:[416000, 312000, 234000, 182000]},
    {lv:60, xp:[448000, 336000, 252000, 196000]},
    {lv:61, xp:[512000, 384000, 288000, 224000]},
    {lv:62, xp:[640000, 480000, 360000, 280000]},
    {lv:63, xp:['?', 528000, 396000, 308000]},
    {lv:64, xp:[100, 600000, 450000, 350000]},
    {lv:65, xp:[864000, 648000, 486000, 378000]},
    {lv:66, xp:[100, 720000, 540000, 420000]},
    {lv:67, xp:['?', 768000, 576000, 448000]},
    {lv:68, xp:[1120000, 840000, '?', 489999]},
    {lv:69, xp:['?', 936000, '?', 546000]},
    {lv:70, xp:[100, 1008000, 756000, 588000]},
    {lv:71, xp:[100, 1152000, 100, 100]},
    {lv:72, xp:[100, 1272000, 100, 100]},
    {lv:73, xp:[100, 100, 1080000, 100]},
    {lv:74, xp:['?', '?', 1188000, '?']},
    {lv:75, xp:[100, 1752000, 1314000, 1021999]},
    {lv:76, xp:[2784000, 100, 100, 100]},
    {lv:77, xp:[3168000, 2376000, 100, 100]},
    {lv:78, xp:[3520000, 2640000, 100, 100]},
    {lv:79, xp:[3840000, 100, 100, 100]},
    {lv:80, xp:[4480000, '?', '?', '?']},
    {lv:81, xp:[4480000, '?', '?', '?']},
    {lv:82, xp:[4480000, 3360000, 100, 100]},
    {lv:83, xp:[4480000, '?', '?', '?']},
    {lv:84, xp:[4800000, '?', '?', '?']},
    {lv:85, xp:[4800000, 100, 100, 100]},
    {lv:86, xp:[5120000, '?', '?', '?']},
    {lv:87, xp:['?', '?', '?', '?']},
    {lv:88, xp:['?', '?', '?', '?']},
    {lv:89, xp:['?', '?', '?', '?']},
    {lv:90, xp:['?', '?', '?', '?']},
    {lv:91, xp:[5760000, 100, 100, 100]},
    {lv:92, xp:['?', '?', '?', '?']},
    {lv:93, xp:[6080000, 100, 100, 100]},
    {lv:94, xp:[6240000, '?', '?', '?']},
    {lv:95, xp:['?', '?', '?', '?']},
    {lv:96, xp:['?', '?', '?', '?']},
    {lv:97, xp:['?', '?', '?', '?']},
    {lv:98, xp:['?', '?', '?', '?']},
    {lv:100, xp:['?', '?', '?', '?']},
    {lv:101, xp:['?', '?', '?', '?']},
    {lv:102, xp:['?', '?', '?', '?']},
    {lv:103, xp:['?', '?', '?', '?']},
    {lv:104, xp:['?', '?', '?', '?']},
    {lv:105, xp:['?', '?', '?', '?']},
    {lv:106, xp:['?', '?', '?', '?']},
    {lv:107, xp:['?', '?', '?', '?']},
    {lv:108, xp:['?', '?', '?', '?']},
    {lv:109, xp:['?', '?', '?', '?']},
    {lv:110, xp:['?', '?', '?', '?']},
    {lv:111, xp:['?', '?', '?', '?']},
    {lv:112, xp:['?', '?', '?', '?']},
    {lv:113, xp:['?', '?', '?', '?']},
    {lv:114, xp:['?', '?', '?', '?']},
    {lv:115, xp:['?', '?', '?', '?']},
    {lv:116, xp:['?', '?', '?', '?']},
    {lv:117, xp:['?', '?', '?', '?']},
    {lv:118, xp:['?', '?', '?', '?']},
    {lv:119, xp:['?', '?', '?', '?']}
];

/* js equipment */
/* xp[ weapon, coat, pants/boots, badge/tome]*/

let equipedb = [
    {lv:2, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 15], xp12:[2400, 1600, 1200, '?']},
    {lv:3, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 20], xp12:[2400, '?', '?', '?']},
    {lv:4, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 25], xp12:[2400, '?', '?', '?']},
    {lv:5, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 30], xp12:[2400, '?', '?', '?']},
    {lv:6, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 35], xp12:[2400, '?', '?', '?']},
    {lv:7, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 40], xp12:[2400, '?', '?', '?']},
    {lv:8, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 45], xp12:[2400, '?', '?', '?']},
    {lv:9, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 50], xp12:[2400, '?', '?', '?']},
    {lv:10, xp15:[5000, 0, 2500, 0], xp14:[4500, 3000, 2250, '?'], xp13:['?', '?', '?', 55], xp12:[2400, '?', '?', '?']},
    {lv:'Green', xp15:['1 Junior eqpt scroll | 5000', 'same', 'same', 'same'], xp14:['1 Junior eqpt scroll | 5000', '?', '?', '?'], xp13:['1 Junior eqpt scroll | 5000', '?', '?', '?'], xp12:['1 Junior eqpt scroll | 5000', '?', '?', '?']},
    {lv:11, xp15:[5500, 0, 2750, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:12, xp15:[6000, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:13, xp15:[6500, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:14, xp15:[7000, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:15, xp15:[7500, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:16, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:17, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:18, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:19, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:20, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:21, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:22, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:23, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:24, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:25, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:26, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:27, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:28, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:29, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:30, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:31, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:32, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:33, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:34, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:35, xp15:['?', '?', '?', 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:36, xp15:['?', '?', '?', 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:37, xp15:['?', '?', 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:38, xp15:['?', '?', 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:39, xp15:['?', '?', '?', 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:40, xp15:['?', '?', '?', 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:41, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:42, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:43, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:44, xp15:[0, 0, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:45, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:46, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:47, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:48, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:49, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:50, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:51, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:52, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:53, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:54, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:55, xp15:[275200, 100, 100, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:56, xp15:[307200, 100, 172800, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:57, xp15:[352000, 100, 100, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:58, xp15:[384000, 100, 100, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:59, xp15:[416000, 100, 100, 182000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:60, xp15:[448000, 100, 252000, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:61, xp15:[100, 100, 288000, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:62, xp15:[100, 100, 360000, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:63, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:64, xp15:[100, 600000, 100, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:65, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:66, xp15:['?', '?', 540000, '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:67, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:68, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:69, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:70, xp15:['?', '?', 756000, '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:71, xp15:['?', 1152000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:72, xp15:['?', 1272000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:73, xp15:['?', '?', 1080000, '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:74, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:75, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:76, xp15:[2784000, '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:77, xp15:[3168000, 2376000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:78, xp15:['?', 2640000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:79, xp15:[3840000, '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:80, xp15:['?', , '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:'Orange +2', xp15:['6 Legendary eqpt scroll +2 | 54 of each Lightforger material | 160000', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:81, xp15:['?', 759000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:82, xp15:['?', 792000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:83, xp15:['?', 825000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:84, xp15:['?', 858000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:85, xp15:[4800000, 891000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:'Orange +3', xp15:['8 Hades eqpt scroll +3 | 72 of each Molten material | 180000', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:86, xp15:['?', 924000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:87, xp15:['?', 957000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:88, xp15:['?', 1023000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:89, xp15:['?', 1023000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:90, xp15:['?', 1056000, '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:'Orange +4', xp15:['10 Cosmos eqpt scroll +4 | 100 of each Kingly material | 200000', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:91, xp15:[1650000, 1089000, '?', 5200], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:92, xp15:[1700000, 1122000, '?', 5400], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:93, xp15:[1750000, 1155000, '?', 5600], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:94, xp15:[1800000, 1188000, '?', 5800], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:95, xp15:[1850000, 1221000, '?', 6000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:'Orange +5', xp15:['12 KOF eqpt scroll +5 | 150 of each Emperor material | 200000', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:96, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:97, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:98, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:100, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:101, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:102, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:103, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:104, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:105, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:106, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:107, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:108, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:109, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:110, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:111, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:112, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:113, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:114, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:115, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:116, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:117, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:118, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:119, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']}
];


/* dark force awaken base */

let dfabase = [{
    lv:1, dpb:[5, 15, 0.2, 0.1], gdb:[5, 8, 0.08, 0.08], tdb:[5, 50, 0.2, 0.1]
}];

/* fighters skills*/
/* xp [passive, ultimate, skill, dmg] */
/* sport team has 30% less cost upgrade */ 

let fskilldb = [
    {lv:2, xp15:['?', '?', '?', '?'], xp14:[2500, 1500, 1000, 100], xp13:[1250, 750, 500, 1250], xp12:[1000, 750, 500, 1250]},
    {lv:3, xp15:['?', '?', '?', '?'], xp14:[2750, 1650, 1100, 100], xp13:[1375, 825, 550, 1375], xp12:[1100, 825, 550, 1375]},
    {lv:4, xp15:['?', '?', '?', '?'], xp14:[3000, 1800, 1200, 100], xp13:[1500, 900, 600, 1500], xp12:[1200, 900, 600, 1500]},
    {lv:5, xp15:['?', '?', '?', '?'], xp14:[3250, 1950, 1300, 100], xp13:[1625, 975, 650, 1625], xp12:[1300, 975, 650, 1625]},
    {lv:6, xp15:['?', '?', '?', '?'], xp14:[3500, 2100, 1400, '?'], xp13:[1750, 1050, '?', 1750], xp12:[1400, 1050, 700, 1750]},
    {lv:7, xp15:['?', '?', '?', '?'], xp14:[3750, 2250, 1500, '?'], xp13:[1875, 1125, '?', 1875], xp12:[1500, 1125, 750, 1875]},
    {lv:8, xp15:['?', '?', '?', '?'], xp14:[4000, 2400, 1600, '?'], xp13:[2000, 1200, '?', 2000], xp12:[1600, 1200, 800, 2000]},
    {lv:9, xp15:['?', '?', '?', '?'], xp14:[4250, 2550, 1700, '?'], xp13:[2125, 1275, '?', 2125], xp12:[1700, 1275, 850, 2125]},
    {lv:10, xp15:['?', '?', '?', '?'], xp14:[4500, 2700, 1800, '?'], xp13:[2250, 1350, '?', 2250], xp12:[1800, 1350, 900, 2250]},
    {lv:11, xp15:['?', '?', '?', '?'], xp14:[4750, 2850, 1900, '?'], xp13:[2375, 1425, '?', 2375], xp12:[1900, 1425, 950, 2375]},
    {lv:12, xp15:['?', '?', '?', '?'], xp14:[5000, 3000, 2000, '?'], xp13:[2500, 1500, '?', 2500], xp12:[2000, 1500, 1000, 2500]},
    {lv:13, xp15:['?', '?', '?', '?'], xp14:[5250, 3150, 2100, '?'], xp13:[2625, 1575, '?', 2625], xp12:[2100, 1575, 1050, 2625]},
    {lv:14, xp15:['?', '?', '?', '?'], xp14:[5500, 3300, 2200, '?'], xp13:[2750, 1650, '?', 2750], xp12:[2200, 1650, 1100, 2750]},
    {lv:15, xp15:['?', '?', '?', '?'], xp14:[5750, 3450, 2300, '?'], xp13:[2850, '?', '?', 2875], xp12:[2300, 1725, 1150, 2875]},
    {lv:16, xp15:['?', '?', '?', '?'], xp14:[6000, 3600, 2400, '?'], xp13:[3000, '?', '?', 3000], xp12:[2400, 1800, 1200, 3000]},
    {lv:17, xp15:['?', '?', '?', '?'], xp14:[6250, 3750, 2500, '?'], xp13:[3125, '?', '?', 3125], xp12:[2500, 1875, 1250, 3125]},
    {lv:18, xp15:['?', '?', '?', '?'], xp14:[6500, 3900, 2600, '?'], xp13:[3250, '?', '?', 3250], xp12:[2600, 1950, 1300, 3250]},
    {lv:19, xp15:['?', '?', '?', '?'], xp14:[6750, 4050, 2700, '?'], xp13:[3375, '?', '?', 3375], xp12:[2700, 2025, 1350, 3375]},
    {lv:20, xp15:['?', '?', '?', '?'], xp14:[7000, 4200, 2800, '?'], xp13:[3500, '?', '?', 3500], xp12:[2800, 2100, 1400, 3500]},
    {lv:21, xp15:['?', '?', '?', '?'], xp14:[7250, 4350, 2900, '?'], xp13:[3625, '?', '?', 3625], xp12:[2900, 2175, 1450, 3625]},
    {lv:22, xp15:['?', '?', '?', '?'], xp14:[7500, 4500, 3000, '?'], xp13:[3750, '?', '?', 3750], xp12:[3000, 2250, 1500, 3750]},
    {lv:23, xp15:['?', '?', '?', '?'], xp14:[7750, 4650, 3100, '?'], xp13:[3875, '?', '?', 3875], xp12:[3100, 2325, 1550, 3875]},
    {lv:24, xp15:['?', '?', '?', '?'], xp14:[8000, 4800, 3200, '?'], xp13:[4000, '?', '?', 4000], xp12:[3200, 2400, 1600, 4000]},
    {lv:25, xp15:['?', '?', '?', '?'], xp14:[8250, 4950, 3300, '?'], xp13:[4125, '?', '?', 4125], xp12:[3300, 2475, 1650, 4125]},
    {lv:26, xp15:['?', '?', '?', '?'], xp14:[8500, 5100, 3400, '?'], xp13:[4250, '?', '?', 4250], xp12:[3400, 2550, 1700, 4250]},
    {lv:27, xp15:['?', '?', '?', '?'], xp14:[8750, 5250, 3500, '?'], xp13:[4375, '?', '?', 4375], xp12:[3500, 2625, 1750, 4375]},
    {lv:28, xp15:['?', '?', '?', '?'], xp14:[9000, 5400, 3600, '?'], xp13:[4500, '?', '?', 4500], xp12:[3600, 2700, 1800, 4500]},
    {lv:29, xp15:['?', '?', '?', '?'], xp14:[9250, 5550, 3700, '?'], xp13:[4625, '?', '?', 4625], xp12:[3700, 2775, 1850, 4625]},
    {lv:30, xp15:['?', '?', '?', '?'], xp14:[9500, 5700, 3800, '?'], xp13:[4750, '?', '?', '?'], xp12:[3800, 2850, 1900, 4750]},
    {lv:31, xp15:['?', '?', '?', '?'], xp14:[9750, 5850, 3900, '?'], xp13:[4875, '?', '?', '?'], xp12:[3900, 2925, 1950, 4875]},
    {lv:32, xp15:['?', '?', '?', '?'], xp14:[10000, 6000, 4000, '?'], xp13:[5000, '?', '?', '?'], xp12:[4000, 3000, 2000, 5000]},
    {lv:33, xp15:['?', '?', '?', '?'], xp14:[25000, 15000, 10000, '?'], xp13:[12500, '?', '?', '?'], xp12:[10000, 7500, 5000, 12500]},
    {lv:34, xp15:['?', '?', '?', '?'], xp14:[26000, 15600, '?', '?'], xp13:[13000, '?', '?', '?'], xp12:['?', 7800, '?', 13000]},
    {lv:35, xp15:['?', '?', '?', '?'], xp14:[27000, 16200, '?', '?'], xp13:[13500, '?', '?', '?'], xp12:['?', '?', '?', 13500]},
    {lv:36, xp15:['?', '?', '?', '?'], xp14:[28000, 16800, '?', '?'], xp13:[14000, '?', '?', '?'], xp12:['?', '?', '?', 14000]},
    {lv:37, xp15:['?', '?', '?', '?'], xp14:[29000, 17400, '?', '?'], xp13:[14500, '?', '?', '?'], xp12:['?', '?', '?', 14500]},
    {lv:38, xp15:['?', '?', '?', '?'], xp14:[30000, 18000, '?', '?'], xp13:[15000, '?', '?', '?'], xp12:['?', '?', '?', 15000]},
    {lv:39, xp15:['?', '?', '?', '?'], xp14:[31000, 18600, '?', '?'], xp13:[15500, 9300, '?', '?'], xp12:['?', '?', '?', 15500]},
    {lv:40, xp15:['?', '?', '?', '?'], xp14:[32000, '?', '?', '?'], xp13:[16000, '?', '?', '?'], xp12:['?', '?', '?', 16000]},
    {lv:41, xp15:['?', '?', '?', '?'], xp14:[33000, '?', '?', '?'], xp13:[16500, '?', '?', '?'], xp12:['?', '?', '?', 16500]},
    {lv:42, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:[17000, '?', '?', '?'], xp12:['?', '?', '?', 17000]},
    {lv:43, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:[17500, '?', '?', '?'], xp12:['?', '?', '?', 17500]},
    {lv:44, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:[19000, '?', '?', '?'], xp12:['?', '?', '?', 19000]},
    {lv:45, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:[20750, '?', '?', '?'], xp12:['?', '?', '?', 20750]},
    {lv:46, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:[22250, '?', '?', '?'], xp12:['?', '?', '?', 22250]},
    {lv:47, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:[24000, '?', '?', '?'], xp12:['?', '?', '?', 24000]},
    {lv:48, xp15:[100, 30000, 0, 100], xp14:['?', '?', '?', '?'], xp13:[25000, '?', '?', '?'], xp12:['?', '?', '?', 25000]},
    {lv:49, xp15:[100, 33000, 100, 100], xp14:['?', '?', '?', '?'], xp13:[27500, '?', '?', '?'], xp12:['?', '?', '?', 27500]},
    {lv:50, xp15:[100, 36000, 100, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', 30000]},
    {lv:51, xp15:[100, 36000, 100, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', 12000, 30000], xp12:['?', '?', '?', 30000]},
    {lv:52, xp15:[100, 39000, 100, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', 13000, 32500], xp12:['?', '?', '?', 32500]},
    {lv:53, xp15:[70000, 100, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', 14000, 35000], xp12:['?', '?', '?', 35000]},
    {lv:54, xp15:[75000, 45000, 30000, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', 15000, 37500], xp12:['?', '?', '?', 37500]},
    {lv:55, xp15:[80000, 48000, 32000, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', 16000, 40000], xp12:['?', '?', '?', 40000]},
    {lv:56, xp15:[90000, 54000, 36000, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', 18000, 45000], xp12:['?', '?', '?', 45000]},
    {lv:57, xp15:[95000, 57000, 100, 0], xp14:['?', '?', '?', '?'], xp13:[47500, 28500, 19000, 47500], xp12:['?', '?', '?', 47500]},
    {lv:58, xp15:[100000, 60000, 100, 0], xp14:['?', '?', '?', '?'], xp13:[50000, 30000, 20000, 50000], xp12:['?', '?', '?', 50000]},
    {lv:59, xp15:[110000, 66000, 100, 0], xp14:['?', '?', '?', '?'], xp13:[55000, 33000, 22000, 55000], xp12:[44000, 33000, 22000, 55000]},
    {lv:60, xp15:[120000, 72000, 0, 0], xp14:['?', '?', '?', '?'], xp13:[60000, 36000, 24000, 60000], xp12:[48000, '?', '?', 60000]},
    {lv:61, xp15:[130000, 78000, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', 65000], xp12:[52000, '?', '?', 65000]},
    {lv:62, xp15:[140000, 84000, 0, 0], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', 70000], xp12:[56000, '?', '?', 70000]},
    {lv:63, xp15:[150000, 90000, 100, 100], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', 75000], xp12:[60000, '?', '?', 75000]},
    {lv:64, xp15:[160000, 96000, 100, 100], xp14:[160000, 96000, 64000, '?'], xp13:['?', '?', '?', 80000], xp12:[64000, '?', '?', 80000]},
    {lv:65, xp15:['?', '?', '?', '?'], xp14:[170000, 102000, 68000, '?'], xp13:['?', '?', '?', 85000], xp12:[68000, '?', '?', 85000]},
    {lv:66, xp15:['?', '?', '?', '?'], xp14:[185000, 111000, 74000, '?'], xp13:['?', '?', '?', 92500], xp12:[74000, '?', '?', 92500]},
    {lv:67, xp15:['?', '?', '?', '?'], xp14:[195000, 117000, 78000, '?'], xp13:['?', '?', '?', '?'], xp12:[78000, '?', '?', 97500]},
    {lv:68, xp15:['?', '?', '?', '?'], xp14:[205000, 123000, 82000, '?'], xp13:['?', '?', '?', '?'], xp12:[82000, '?', '?', 102500]},
    {lv:69, xp15:['?', '?', '?', '?'], xp14:[215000, 129000, 86000, '?'], xp13:['?', '?', '?', '?'], xp12:[86000, '?', '?', 107500]},
    {lv:70, xp15:['?', '?', '?', '?'], xp14:[240000, 144000, 96000, '?'], xp13:['?', '?', '?', '?'], xp12:[96000, '?', '?', 120000]},
    {lv:71, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', 130000]},
    {lv:72, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', 142500]},
    {lv:73, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', 155000]},
    {lv:74, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', 167500]},
    {lv:75, xp15:[365000, 219000, 146000, 182500], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', 182500]},
    {lv:76, xp15:[550000, 330000, 220000, 275000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:77, xp15:[600000, 360000, 240000, 300000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:78, xp15:[700000, 420000, 280000, 350000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:79, xp15:[700000, 420000, 280000, 350000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:80, xp15:[750000, 450000, 300000, 375000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:81, xp15:[800000, 480000, 320000, 400000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:82, xp15:[800000, 480000, 320000, 400000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:83, xp15:[850000, 510000, 340000, 425000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:84, xp15:[900000, 540000, 360000, 450000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:85, xp15:[950000, 570000, 380000, '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:86, xp15:[950000, 570000, 380000, '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:87, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:88, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:89, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:90, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:91, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:92, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:93, xp15:[1200000, 720000, 480000, 600000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:94, xp15:[1250000, 750000, 500000, 625000], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:95, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:96, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:97, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:98, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:100, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:101, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:102, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:103, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:104, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:105, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:106, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:107, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:108, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:109, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:110, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:111, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:112, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:113, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:114, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:115, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:116, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:117, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:118, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']},
    {lv:119, xp15:['?', '?', '?', '?'], xp14:['?', '?', '?', '?'], xp13:['?', '?', '?', '?'], xp12:['?', '?', '?', '?']}
];


/* fight soul */
/* FALCON and ROCK solid same info */

let figsoul = [
    {lv:2, xp:[60, 45, 30, 15]}, {lv:3, xp:[80, 60, 40, 20]}, {lv:4, xp:[100, 75, 50, 25]},
    {lv:5, xp:[144, 108, 72, 36]}, {lv:6, xp:[168, 126, 84, 42]}, {lv:7, xp:[192, 144, 96, 48]},
    {lv:8, xp:[216, 162, 108, 54]}, {lv:9, xp:[241, 180, 120, 60]},{lv:10, xp:[10, 288, 216, 144, 77]},
    {lv:11, xp:[384, 288, 196, 98]}, {lv:12, xp:[480, 360, 240, 120]}, {lv:13, xp:[480, 360, 240, 120]},
    {lv:14, xp:[560, 420, 280, 140]}, {lv:15, xp:[640, 480, 320, 160]}, {lv:16, xp:[800, 600, 400, 200]},
    {lv:17, xp:[1000, 750, 500, 250]}, {lv:18, xp:[1200, 900, 600, 300]}, {lv:19, xp:[1400, 1050, 700, 350]},
    {lv:20, xp:[1600, 1200, 800, 400]}
];
let pohesoul = [
    {lv:2, xp:[72, 54, 36, 18]}, {lv:3, xp:[96, 72, 48, 24]}, {lv:4, xp:[120, 90, 60, 30]},
    {lv:5, xp:[120, 90, 60, 30]}, {lv:6, xp:[140, 105, 70, 35]}, {lv:7, xp:[160, 120, 80, 40]},
    {lv:8, xp:[180, 135, 90, 45]}, {lv:9, xp:[200, 150, 100, 50]}, {lv:10, xp:[240, 180, 120, 60]},
    {lv:11, xp:[320, 240, 160, 80]}, {lv:12, xp:[480, 360, 240, 120]}, {lv:13, xp:[576, 432, 288, 144]},
    {lv:14, xp:[672, 504, 336, 168]}, {lv:15, xp:[768, 576, 384, 192]}, {lv:16, xp:[960, 720, 480, 240]},
    {lv:17, xp:[1200, 900, 600, 300]}, {lv:18, xp:[1440, 1080, 720, 360]}, {lv:19, xp:[1680, 1260, 840, 420]},
    {lv:20, xp:[1920, 1440, 960, 480]}
];
let falrocksoul = [
    {lv:2, xp:[120, 90, 60, 30]}, {lv:3, xp:[160, 120, 80, 40]}, {lv:4, xp:[200, 150, 100, 50]},
    {lv:5, xp:[240, 180, 120, 60]}, {lv:6, xp:[280, 210, 140, 70]}, {lv:7, xp:[320, 240, 160, 80]},
    {lv:8, xp:[360, 270, 180, 90]}, {lv:9, xp:[400, 300, 200, 100]}, {lv:10, xp:[480, 360, 240, 120]},
    {lv:11, xp:[640, 480, 320, 160]}, {lv:12, xp:[800, 600, 400, 200]}, {lv:13, xp:[960, 720, 480, 240]},
    {lv:14, xp:[1120, 840, 560, 280]}, {lv:15, xp:[1280, 960, 640, 320]}, {lv:16, xp:[1600, 1200, 800, 400]},
    {lv:17, xp:[2000, 1500, 1000, 500]}, {lv:18, xp:[2400, 1800, 1200, 600]},
    {lv:19, xp:[2800, 2100, 1400, 700]}, {lv:20, xp:[3200, 2400, 1600, 800]}
]


/* eigth elements*/
/* for ap15 */

let hgrq1 = 'Quality Orange+1';
let hgrq2 = 'Fighter 5 stars';
let hgrq3 = 'FightSoul lv sum 40';

let lgrq1 = 'Heaven 4 stars';
let lgrq2 = 'Sum of all equipment stars minimum 10';
let lgrq3 = 'Esoteric all unlocked and embedded sum minimum +600';

let fgrq1 = 'Lake 4 stars';
let fgrq2 = 'Quality orange+2';
let fgrq3 = 'FightSoul lv sum 60';

let tgrq1 = 'Fire 4 stars';
let tgrq2 = 'Fighter 6 stars';
let tgrq3 = 'Partners fighters quality purple+3';

let wgrq1 = 'Thunder 5 stars';
let wgrq2 = 'Quality orange+3';
let wgrq3 = 'Partners fighters Lake element open';

let wagrq1 = 'Wind 5 stars';
let wagrq2 = 'Esoteric all quality orange';
let wagrq3 = 'Esoteric all unlocked and embedded sum minimum +1200';

let mgrq1 = 'Water 5 stars';
let mgrq2 = 'Quality orange+4';
let mgrq3 = 'Sum of all equipment stars minimum 25';

let egrq1 = 'Mountain/Rock 5 stars';
let egrq2 = 'Esoteric all unlocked and embedded sum minimum +1600';
let egrq3 = 'Partners fighters Wind element open';

/*for ap14*/

let hg14rq1 = 'Quality Orange+1';
let hg14rq2 = 'Fighter 5 stars';
let hg14rq3 = 'FightSoul lv sum 40';

let lg14rq1 = 'Heaven 4 stars';
let lg14rq2 = 'Sum of all equipment stars minimum 10';
let lg14rq3 = 'Esoteric all unlocked and embedded sum minimum +600';

let fg14rq1 = 'Lake 4 stars';
let fg14rq2 = 'Quality orange+2';
let fg14rq3 = 'FightSoul lv sum 60';

let tg14rq1 = 'Fire 4 stars';
let tg14rq2 = 'Fighter 6 stars';
let tg14rq3 = 'Partners fighters quality purple+3';

let wg14rq1 = 'Thunder 5 stars';
let wg14rq2 = 'Quality orange+3';
let wg14rq3 = 'Partners fighters Lake element open';

let wag14rq1 = 'Wind 5 stars';
let wag14rq2 = 'Esoteric all quality purple';
let wag14rq3 = 'Esoteric all unlocked and embedded sum minimum +1200';

let mg14rq1 = 'Water 5 stars';
let mg14rq2 = 'Quality orange+4';
let mg14rq3 = 'Sum of all equipment stars minimum 25';

let eg14rq1 = 'Mountain/Rock 5 stars';
let eg14rq2 = 'Esoteric all quality orange';
let eg14rq3 = 'Partners fighters Wind element open';

/*for ap13*/

let hg13rq1 = 'Quality Orange';
let hg13rq2 = 'Fighter 4 stars';
let hg13rq3 = 'FightSoul lv sum 30';

let lg13rq1 = 'Heaven 4 stars';
let lg13rq2 = 'Sum of all equipment stars minimum 5';
let lg13rq3 = 'Esoteric all unlocked and embedded sum minimum +200';

let fg13rq1 = 'Lake 4 stars';
let fg13rq2 = 'Quality orange+1';
let fg13rq3 = 'FightSoul lv sum 45';

let tg13rq1 = 'Fire 4 stars';
let tg13rq2 = 'Fighter 5 stars';
let tg13rq3 = 'Partners fighters quality purple+2';

let wg13rq1 = 'Thunder 4 stars';
let wg13rq2 = 'Quality orange+2';
let wg13rq3 = 'Partners fighters Lake element open';

let wag13rq1 = 'Wind 4 stars';
let wag13rq2 = 'Esoteric all quality purple';
let wag13rq3 = 'Esoteric all unlocked and embedded sum minimum +800';

let mg13rq1 = 'Water 5 stars';
let mg13rq2 = 'Quality orange+3';
let mg13rq3 = 'Sum of all equipment stars minimum 20';

let eg13rq1 = 'Mountain/Rock 5 stars';
let eg13rq2 = 'Esoteric all quality orange';
let eg13rq3 = 'Partners fighters Wind element open';

/*for ap12*/

let hg12rq1 = 'Quality purple+4';
let hg12rq2 = 'Fighter 4 stars';
let hg12rq3 = 'FightSoul lv sum 30';

let lg12rq1 = 'Heaven 3 stars';
let lg12rq2 = 'Sum of all equipment stars minimum 5';
let lg12rq3 = 'Esoteric all unlocked and embedded sum minimum +200';

let fg12rq1 = 'Lake 3 stars';
let fg12rq2 = 'Quality orange';
let fg12rq3 = 'FightSoul lv sum 45';

let tg12rq1 = 'Fire 3 stars';
let tg12rq2 = 'Fighter 5 stars';
let tg12rq3 = 'Partners fighters quality purple+1';

let wg12rq1 = 'Thunder 4 stars';
let wg12rq2 = 'Quality orange+1';
let wg12rq3 = 'Partners fighters Lake element open';

let wag12rq1 = 'Wind 4 stars';
let wag12rq2 = 'Esoteric Junior & Senior quality purple';
let wag12rq3 = 'Esoteric all unlocked and embedded sum minimum +500';

let mg12rq1 = 'Water 4 stars';
let mg12rq2 = 'Quality orange+2';
let mg12rq3 = 'Sum of all equipment stars minimum 10';

let eg12rq1 = 'Mountain/Rock 5 stars';
let eg12rq2 = 'Esoteric all quality purple';
let eg12rq3 = 'Partners fighters Wind element open';

/* rssreq [fighter frags, awakening stones, gold, badge, tome, power frag, arma] */

let eegdbap15 = [
    {gate:'Heaven', req:[hgrq1, hgrq2, hgrq3], rssreq:[25, 6, 6900000, '0', '0', '0', '0']},
    {gate:'Lake', req:[lgrq1, lgrq2, lgrq3], rssreq:[38, 11, 9000000, '0', '0', '0', '0']},
    {gate:'Fire', req:[fgrq1, fgrq2, fgrq3], rssreq:[50, 14, 11400000, '0', '0', '0', '0']},
    {gate:'Thunder', req:[tgrq1, tgrq2, tgrq3], rssreq:[62, 16, 13600000, '1', '0', '0', '0']},
    {gate:'Wind', req:[wgrq1, wgrq2, wgrq3], rssreq:[75, 20, 18000000, '0', '1', '0', '0']},
    {gate:'Water', req:[wagrq1, wagrq2, wagrq3], rssreq:[88, 30, 27000000, '1', '1', '24', '1']},
    {gate:'Mountain<br/>Rock', req:[mgrq1, mgrq2, mgrq3], rssreq:[100, 48, 36000000, '1', '1', '0', '0']},
    {gate:'Earth', req:[egrq1, egrq2, egrq3], rssreq:[125, 56, 45000000, '2', '2', '45', '3']}
];

let eegdbap14 = [
    {gate:'Heaven', req:[hg14rq1, hg14rq2, hg14rq3], rssreq:[25, 3, 4500000, '0', '0', '0', '0']},
    {gate:'Lake', req:[lg14rq1, lg14rq2, lg14rq3], rssreq:[38, 6, 6000000, '0', '0', '0', '0']},
    {gate:'Fire', req:[fg14rq1, fg14rq2, fg14rq3], rssreq:[50, 9, 7500000, '0', '0', '0', '0']},
    {gate:'Thunder', req:[tg14rq1, tg14rq2, tg14rq3], rssreq:[62, 11, 9000000, '1', '0', '0', '0']},
    {gate:'Wind', req:[wg14rq1, wg14rq2, wg14rq3], rssreq:[75, 15, 12000000, '0', '1', '0', '0']},
    {gate:'Water', req:[wag14rq1, wag14rq2, wag14rq3], rssreq:[88, 23, 18000000, '1', '1', '15', '1']},
    {gate:'Mountain<br/>Rock', req:[mg14rq1, mg14rq2, mg14rq3], rssreq:[100, 30, 24000000, '1', '1', '0', '0']},
    {gate:'Earth', req:[eg14rq1, eg14rq2, eg14rq3], rssreq:[140, 31, 30000000, '2', '2', '0', '3']}
];

let eegdbap13 = [
    {gate:'Heaven', req:[hg13rq1, hg13rq2, hg13rq3], rssreq:[20, 2, 3000000, '0', '0', '0', '0']},
    {gate:'Lake', req:[lg13rq1, lg13rq2, lg13rq3], rssreq:[30, 4, 4000000, '0', '0', '0', '0']},
    {gate:'Fire', req:[fg13rq1, fg13rq2, fg13rq3], rssreq:[40, 6, 5000000, '0', '0', '0', '0']},
    {gate:'Thunder', req:[tg13rq1, tg13rq2, tg13rq3], rssreq:[50, 9, 5920000, '1', '0', '0', '0']},
    {gate:'Wind', req:[wg13rq1, wg13rq2, wg13rq3], rssreq:[60, 10, 8040000, '0', '0', '0', '0']},
    {gate:'Water', req:[wag13rq1, wag13rq2, wag13rq3], rssreq:[70, 15, 12000000, '1', '1', '10', '1']},
    {gate:'Mountain<br/>Rock', req:[mg13rq1, mg13rq2, mg13rq3], rssreq:[80, 20, 16000000, '0', '1', '0', '0']},
    {gate:'Earth', req:[eg13rq1, eg13rq2, eg13rq3], rssreq:[100, 30, 20000000, '1', '1', '20', '2']}
];

let eegdbap12 = [
    {gate:'Heaven', req:[hg12rq1, hg12rq2, hg12rq3], rssreq:[16, 1, 2400000, '0', '0', '0', '0']},
    {gate:'Lake', req:[lg12rq1, lg12rq2, lg12rq3], rssreq:[24, 4, 3200000, '0', '0', '0', '0']},
    {gate:'Fire', req:[fg12rq1, fg12rq2, fg12rq3], rssreq:[26, 1, 4000000, '0', '0', '0', '0']},
    {gate:'Thunder', req:[tg12rq1, tg12rq2, tg12rq3], rssreq:[38, 4, 4800000, '1', '0', '0', '0']},
    {gate:'Wind', req:[wg12rq1, wg12rq2, wg12rq3], rssreq:[48, 8, 6300000, '0', '0', '0', '0']},
    {gate:'Water', req:[wag12rq1, wag12rq2, wag12rq3], rssreq:[56, 4, 96000000, '0', '0', '5', '1']},
    {gate:'Mountain<br/>Rock', req:[mg12rq1, mg12rq2, mg12rq3], rssreq:[64, 48, 12800000, '0', '1', '0', '0']},
    {gate:'Earth', req:[eg12rq1, eg12rq2, eg12rq3], rssreq:[80, 10, 16000000, '1', '1', '10', '0']}
];


/* aid */

let aiddb = [
    {aidr:['Unlock', 'bgwhite'], aps13:['50/20', '1'], aps14:['100', '1'], promef:'-'},
    {aidr:['Green', 'bggreen'], aps13:[2, 5], aps14:[3, 5], promef:'Unlock aid skill slot 1'},
    {aidr:['Green +1', 'bggreen'], aps13:[5, 5], aps14:[6, 10], promef:'-'},
    {aidr:['Blue', 'bgblue'], aps13:[12, 10], aps14:[15, 15], promef:'Aid chances +1'},
    {aidr:['Blue +1', 'bgblue'], aps13:[24, 10], aps14:[27, 15], promef:'-'},
    {aidr:['Purple', 'bgpurple'], aps13:[36, 15], aps14:[42, 20], promef:'Unlock aid skill slot 2'},
    {aidr:['Purple +1', 'bgpurple'], aps13:[50, 15], aps14:[60, 20], promef:'-'},
    {aidr:['Purple +2', 'bgpurple'], aps13:[75, 20], aps14:[81, 25], promef:'Deployable since round 3'},
    {aidr:['Orange', 'bgorange'], aps13:[100, 20], aps14:[105, 25], promef:'Unlock aid skill slot 3'},
    {aidr:['Orange +1', 'bgorange'], aps13:[120, 25], aps14:[130, 30], promef:'-'},
    {aidr:['Orange +2', 'bgorange'], aps13:[150, 30], aps14:[160, 30], promef:'-'},
    {aidr:['Orange +3', 'bgorange'], aps13:[180, 30], aps14:[200, 30], promef:'Deployable since round 1'},
    {aidr:['Red', 'bgred'], aps13:['-', '-'], aps14:[100, '40 + Badge/Tome'], promef:'Changes Ult'},
    {aidr:['Red +1', 'bgred'], aps13:['-', '-'], aps14:[100, '1 Weapon'], promef:'Damage increase 20% + aid chance +1 '},
    {aidr:['Total', 'bgwhite'], aps13:['804/774', 186], aps14:[1129, 266], promef:'-'}
];