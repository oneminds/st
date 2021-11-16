let buty = document.getElementById('bb');
buty.addEventListener('click', function(){
	let welc = document.getElementById('welc');
	welc.style.display = 'none';
	let nx = document.getElementById('nick');
	nx.style.display = 'block';
});
let nx = document.getElementById('nx');
nx.addEventListener('click', function(){
	let nick = document.getElementById('nick');
	let iin = document.getElementById('nn').value;
	let errs = document.getElementById('err3');
	let bbv = document.getElementById('nu');
	
	if (iin != '') {
		nick.style.display = 'none';
		bbv.innerHTML = 'New user - ' + iin;
		localStorage.setItem('new', iin);
		let pass = document.getElementById('pass')
		pass.style.display = 'block';
	} 
	if (iin == '') {

		errs.style.display = 'block';
		setTimeout( function(){
			errs.style.display = 'none';
		}, 2000);
	}
});


let nx2 = document.getElementById('nx2');
nx2.addEventListener('click', function(){
	let nick = document.getElementById('nick');
	let iin = document.getElementById('nn2').value;
	let iin3 = document.getElementById('nn3').value;
	let errs2 = document.getElementById('err4');

	if (iin != '' && iin3 != '' && iin == iin3) {
		nick.style.display = 'none';
		let pass = document.getElementById('pass')
		pass.style.display = 'none';
		let loginn = document.getElementById('log');
		loginn.style.display = 'block';
		localStorage.setItem('jqs63gsdbcb3', 'none');
		localStorage.setItem('qwersdb3f', 'block');
		// let n = localStorage.getItem('jqs63gsdbcb3');
		
	} 
	
	if (iin == '') {

		errs2.style.display = 'block';
		setTimeout( function(){
			errs2.style.display = 'none';
		}, 2000);
		let allt = document.getElementById('log');
		allt.style.display = 'none';
	}
	if (iin != iin3) {
		errs2.style.display = 'block';
		nick.style.display = 'none';
		let pass = document.getElementById('pass')
		pass.style.display = 'block';
		setTimeout( function(){
			errs2.style.display = 'none';
		}, 2000);
		let allt = document.getElementById('log');
		allt.style.display = 'none';
	}
});
let xx = 0;
let ss2 = document.getElementById('ss2');
ss2.addEventListener('click', function(){
	console.log(xx);
	let ua = Math.random() * 20;
	ua = Math.ceil(ua);
	console.log(ua);
	ss2.innerHTML = 'Cancel';
	let nos = document.getElementById('nos').value;
	let yn = document.getElementById('yn');
	let yn2 = document.getElementById('yn2');
	yn.innerHTML = nos;
	if(ua <= 2){
		yn2.innerHTML = 'iam' + nos;
		ress2.style.display = 'block';
	}
	if(ua <= 4){
		yn2.innerHTML = 'the' + nos;
		ress2.style.display = 'block';
	}

	if(ua == 6){
		yn2.innerHTML = '00' + nos + '';
		ress2.style.display = 'block';

	}
	if(ua <= 8){
		yn2.innerHTML = '_' + nos + 'top';
		ress2.style.display = 'block';
	}
	if(ua <= 10){
		yn2.innerHTML = nos + 'love';
		ress2.style.display = 'block';
	}

	if(ua == 12){
		yn2.innerHTML = '0_' + nos + '_0';
		ress2.style.display = 'block';

	}

	if (nos != '') {
		ress.style.display = 'block';
		
	}
	xx+=1;
	if (xx == 2) {
		let lgo = document.getElementById('logo');
		lgo.style.display = 'block';
		let searc = document.getElementById('rrs');
		searc.style.display = 'none';
		let ress = document.getElementById('ress');
		ress.style.display = 'none';
		let ress2 = document.getElementById('ress2');
		ress2.style.display = 'none';
		if (ress.style.display = 'none') {
			ss2.innerHTML = 'Search';
			xx = 0;
		}
	}

	
	ss2.style.left = '704px';
});
let seao = document.getElementById('sea');
seao.addEventListener('click', function(){
	
	let lgo = document.getElementById('logo');
	lgo.style.display = 'none';
	let searc = document.getElementById('rrs');
	searc.style.display = 'block';
		
});

window.onload = function (){
	if (localStorage.getItem('jqs63gsdbcb3')!=null){
		let n = localStorage.getItem('jqs63gsdbcb3')
		let allt = document.getElementById('alt');
		allt.style.display = n;
	}
	if (localStorage.getItem('qwersdb3f')!=null){
		let qq = localStorage.getItem('qwersdb3f');
		let n = localStorage.getItem('jqs63gsdbcb3');
		let allt = document.getElementById('alt');
		allt.style.display = n;
		let allt2 = document.getElementById('log');
		allt2.style.display = qq;
	}
	if (localStorage.getItem('new')!=null) {
		let bvc = localStorage.getItem('new');
		let bbv = document.getElementById('nu');
		bbv.innerHTML = 'New user - ' + bvc;
	}
}