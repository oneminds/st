
let x = 0;
let but = document.getElementById('but');
let u = Math.random() * 5;
u = Math.ceil(u);
if (u == 1) {
	let h11 = document.getElementById('f');
	h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 1 minutes';
	setTimeout( function(){
		x = 1;
		but.style.background = '#5476aa';
		h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 0 minutes';
	}, 1000);
}
if (u == 2) {
	let h11 = document.getElementById('f');
	h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 2 minutes';
	setTimeout( function(){
		x = 1;
		but.style.background = '#5476aa';
		h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 0 minutes';
	}, 1000);

}
if (u == 3) {
	let h11 = document.getElementById('f');
	h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 3 minutes';
	setTimeout( function(){
		x = 1;
		but.style.background = '#5476aa';
		h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 0 minutes';
	}, 180000);
}
if (u == 4) {
	x = 1;
	let h11 = document.getElementById('f');
	h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 4 minutes';
	setTimeout( function(){
		but.style.background = '#5476aa';
		h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 0 minutes';
	}, 240000);
}

if (u == 5) {
	x = 1;
	let h11 = document.getElementById('f');
	h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 5 minutes';
	setTimeout( function(){
		but.style.background = '#5476aa';
		h11.innerHTML = '🎉To start using Story house you have to wait until the end of the queue. Than we start! About to wait: 0 minutes';
	}, 300000);
}
but.addEventListener('click', function(){
	let f = document.getElementById('log');
	let all = document.getElementById('all');

	if (x == 1) {
		f.style.display = 'none';
		all.style.display = 'block';
	}
	else {
		f.style.display = 'block';
		all.style.display = 'none';
	}
});
