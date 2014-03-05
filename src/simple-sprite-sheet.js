var SimpleSpriteSheet = function(){

	// 追加したスプライトシートの配列
	var itemDomArr = [];

	var speed 		= 100 ,		// コマ送りの速度（フレームレート）
	divWidth 		= 80 ,		// スプライトシートコマの横幅
	divHeight 		= 170 ,		// スプライトシートコマの高さ
	xValue 			= 10 ,		// 横方向のコマ枚数
	yValue 			= 3 , 		// 縦方向のコマ枚数
	frameValue		= 0;		// 全部何コマあるか

	var motionSwitch;			// setInterval用のオブジェクト
	var switchStatic = false;	// 実行状態を記録する変数

	/*
	* 
	* ローカル変数
	* 
	*/

	var _count = 0 , _xPio = 0 , _yPio = 0;

	function init( options ){

		// 初期設定
		if ( options.speed ) 		speed 		= options.speed;
		if ( options.divWidth ) 	divWidth 	= options.divWidth;
		if ( options.divHeight ) 	divHeight 	= options.divHeight;
		if ( options.xValue ) 		xValue 		= options.xValue;
		if ( options.yValue ) 		yValue 		= options.yValue;

		frameValue = xValue * yValue;

	}

	function addItem( itemId , imagePath ){

		if ( itemDomArr.length < 5 ){

			// DOMをキャッシュしておく
			itemDomArr.push(document.getElementById(itemId));
			// 背景画像設置
			itemDomArr[(itemDomArr.length-1)].style.backgroundImage = "url("+imagePath+")";

			console.log('itemDomArr '+itemDomArr.length+" has add.");
		}else{
			console.log('is full '+ itemDomArr.length +".");
		}
	}

	function stop(){
		console.log('stop');
		switchStatic = false;
		clearInterval(motionSwitch);
	}

	function play(){

		if(!switchStatic){

			switchStatic = true;

			motionSwitch = setInterval(function() {

				_count ++;

				_xPio -= divWidth;

				if ( _xPio <= (xValue * divWidth * -1 ) ){
					// 横の段が最後になったら0に戻す
					_xPio = 0;
					// 縦方向の処理。次の段
					_yPio -= divHeight;
				}

				if ( _count > (frameValue-1) ) {
					_count 		= 0;
					_xPio = 0;
					_yPio = 0;
				}

				if (itemDomArr[0]) itemDomArr[0].style.backgroundPosition = _xPio + "px " + _yPio + "px";
				if (itemDomArr[1]) itemDomArr[1].style.backgroundPosition = _xPio + "px " + _yPio + "px";
				if (itemDomArr[2]) itemDomArr[2].style.backgroundPosition = _xPio + "px " + _yPio + "px";
				if (itemDomArr[3]) itemDomArr[3].style.backgroundPosition = _xPio + "px " + _yPio + "px";
				if (itemDomArr[4]) itemDomArr[4].style.backgroundPosition = _xPio + "px " + _yPio + "px";

			}, speed );
		}
	}

	// 各関数をプライベート化に
	return {
		init		: init,
		stop 		: stop,
		play 		: play,
		addItem		: addItem
	}

};


