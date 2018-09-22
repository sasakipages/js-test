//ToDoリスト
function todo(){
    var box,list,a,i;
    box = ["あああ","いいい","ううう","えええ"];
    list = document.getElementById("todo");
    a = "";
    for(i = 0; i < box.length; i++){
        a = a + box[i] + "<br />";
    }
    list.innerHTML = a;

    if(list.style.display == "none"){
        list.style.display = "";
    }else{
        list.style.display = "none";
    }
};
window.addEventListener("load",todo,false);


//お客様情報
function soshin(){
	var sei, mei, add;
	sei = document.getElementById("sei").value;
	mei = document.getElementById("mei").value;
	add = document.getElementById("add").value;

	if(confirm("送信しますか？")){
		if(sei == "" || mei == "" || add == ""){
			alert("入力漏れがあります！");
		}else{
			alert("こんにちは！" + add + "にお住まいの" + sei + mei + "さん！");
		};
	};
};

function nen(){
	var a, i;
	a = 0;
	for(i = 1950; i <= 2018; i++){
		a = a + "<option>" + i + "</option>";
	};
	document.getElementById("nen").innerHTML = a;
};
window.addEventListener("load", nen, false);

function gatsu(){
	var a, i;
	a = 0;
	for(i = 1; i <= 12; i++){
		a = a + "<option>" + i + "</option>";
	};
	document.getElementById("gatsu").innerHTML = a;
};
window.addEventListener("load", gatsu, false);

function hi(){
	var a, i;
	a = 0;
	for(i = 1; i <= 31; i++){
		a = a + "<option>" + i + "</option>";
	};
	document.getElementById("hi").innerHTML = a;
};
window.addEventListener("load", hi, false);

//りんごの個数
function rx(){
	var a, i;
	a = "";
	for(i = 0; i <= 10; i++){
		a = a + "<option>" + i + "</option>";
	};
	document.getElementById("rx").innerHTML = a;
};
window.addEventListener("load", rx, false);

function rxbuy(x){
	rxx = document.getElementById("rx").selectedIndex;
	document.getElementById("rxbuy").innerHTML = "合計金額は" + (rxx * x) + "円です。";
};

//りんごとみかんの合計金額
function ringo(){
	var a, i;
	a = "";
	for(i = 0; i < 11; i++){
		a = a + "<option>" + i + "</option>";
	}
	document.getElementById("ringo").innerHTML = a;
};
window.addEventListener("load", ringo, false);

function mikan(){
	var a, i;
	a = "";
	for(i = 0; i < 11; i++){
		a = a + "<option>" + i + "</option>";
	}
	document.getElementById("mikan").innerHTML = a;
};
window.addEventListener("load", mikan, false);

function gokei(x, y){
	var rin, mik;
	rin = document.getElementById("ringo").selectedIndex;
	mik = document.getElementById("mikan").selectedIndex;

	document.getElementById("gokei").innerHTML = "合計金額は" + (rin * x + mik * y) + "円です。"
};

//オレンジの注文個数
orange = 0;
function plus(){
	orange = orange + 1;

	if(orange == 16){
		alert("もう注文できません。");
		return false;
	};
	document.getElementById("oko").innerHTML = orange;
};
function minas(){
	orange = orange - 1;

	if(orange < 0){
		alert("もう注文できません。");
		return false;
	};
	document.getElementById("oko").innerHTML = orange;
};
function og(x){
	ogx = document.getElementById("oko").innerHTML;

	document.getElementById("orange").innerHTML = "合計金額は" + (ogx * x) + "です。"
};

//forの練習
function ff(){
	var a, i;
	a = 0;
	for(i = 0; i < 11; i++){
		a = a + i + "<br />";
	}
	document.getElementById("for").innerHTML = a;
};

//永遠コンファーム
function cc(){
	var i = 0;
	do{
		i++;
	}while(confirm("どうですか？"));
	alert("なんですか？");
};

//数字の計算
function done(){
	var on, tw;
	on = document.getElementById("one").value;
	tw = document.getElementById("two").value;

	alert("答えは" + (parseInt(on) + parseInt(tw)) + "です！")
};

//りんごかトマト
function aort(){
	var ppap;
	ppap = document.getElementById("aop").value;
	if(ppap == "りんご" || ppap == "リンゴ"){
		alert("おいしいね！");
	}else if(ppap == "とまと" || ppap == "トマト"){
		alert("クソ不味いね！");
	};
};

//永遠の足し算
function ppap(){
	var box, pro, prox, a, i;
	box = [];

	while(pro = prompt("数字を入力してね！")){
		box.push(parseInt(pro));
	};

	a = 0;
	for(i = 0; i < box.length; i++){
		a = a + box[i];
	};

	alert("答えは" + a + "です！");
};


//コンマ区切り
function kanma(){
	var pro, prox, a, i;
	pro = prompt("どうぞ！");
	prox = pro.split(",");

	a = 0;
	for(i = 0; i < prox.length; i++){
		a = a + parseInt(prox[i]);
	};
	alert("答えは" + a + "です！");
};

//回分チェッカー
function kaibun(){
	var pro,a,b,c;
	pro = prompt("回文をどうぞ！");
	a = pro.split("");
	b = a.reverse();
	c = b.join("");

	if(pro == c){
		alert("回分です！");
	}else{
		alert("回分じゃありません！")
	};
};

//検索
function　k(){
	var a,b;
	a = ["りんご","ゴリラ","ラッパ","パンツ"];
	b = ["100","3000","10000","2000"];

	pro = prompt("商品名を入力してね！");

	nedan = a.indexOf(pro);

	alert(b[nedan] + "円です！");
};


//果物屋さん
function check(){
	var list,pro;
	list = ["りんご","メロン","パイナップル","スイカ","バナナ","なし","もも","みかん","オレンジ"];
	pro = prompt("果物の名前を入力してね！");

	if(list.includes(pro)){
		alert("美味しいね！");
	}else{
		alert("果物じゃないよ！");
	};
};
