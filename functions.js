// Hide splash screen
function hideSplash() {
	window.scrollTo(0, 0);
	document.getElementById('page').setAttribute('style', 'display: block;');
	document.getElementById('splash').classList.add('hide');
}

// Navigation
function goToPage(page) {
	if (page == 'home') {
		window.scrollTo(0, 0);
		document.getElementById('page').setAttribute('style', 'display: block;');
		document.getElementById('contact').setAttribute('style', 'display: none;');
		document.getElementById('terms').setAttribute('style', 'display: none;');
		document.getElementById('privacy').setAttribute('style', 'display: none;');
	}
	if (page == 'contact') {
		window.scrollTo(0, 0);
		document.getElementById('page').setAttribute('style', 'display: none;');
		document.getElementById('contact').setAttribute('style', 'display: block;');
		document.getElementById('terms').setAttribute('style', 'display: none;');
		document.getElementById('privacy').setAttribute('style', 'display: none;');
	}
	if (page == 'terms') {
		window.scrollTo(0, 0);
		document.getElementById('page').setAttribute('style', 'display: none;');
		document.getElementById('contact').setAttribute('style', 'display: none;');
		document.getElementById('terms').setAttribute('style', 'display: block;');
		document.getElementById('privacy').setAttribute('style', 'display: none;');
	}
	if (page == 'privacy') {
		window.scrollTo(0, 0);
		document.getElementById('page').setAttribute('style', 'display: none;');
		document.getElementById('contact').setAttribute('style', 'display: none;');
		document.getElementById('terms').setAttribute('style', 'display: none;');
		document.getElementById('privacy').setAttribute('style', 'display: block;');
	}
}


// Navigation
function changeScenario(scenario) {
	if (scenario == 'lj_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		resetChart();
		document.getElementById('aa').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aks').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ajs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ats').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a2s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ako').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kk').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k6s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('k5s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('aqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qq').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ajo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjo').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('jj').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ato').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('tt').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('99').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('88').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('77').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('66').setAttribute('style', 'background: #f9d175; color: #272a42;');
		updateLegend('lj_firstin');
	}
	if (scenario == 'hj_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		resetChart();
		document.getElementById('aa').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aks').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ajs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ats').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a2s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ako').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kk').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k5s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('k4s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('aqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qq').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ajo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jj').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ato').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qto').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('tt').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a9o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('99').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('88').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('77').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('66').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('55').setAttribute('style', 'background: #f9d175; color: #272a42;');
		updateLegend('hj_firstin');
	}
	if (scenario == 'co_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		resetChart();
		document.getElementById('aa').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aks').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ajs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ats').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a2s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ako').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kk').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k3s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('k2s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('aqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qq').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q7s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('q6s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('ajo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jj').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j7s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('ato').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('tt').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('99').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('98s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a8o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('88').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('87s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('77').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('76s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('66').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('65s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a5o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('55').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('54s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('44').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('33').setAttribute('style', 'background: #f9d175; color: #272a42;');
		updateLegend('co_firstin');
	}
	if (scenario == 'bu_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		resetChart();
		document.getElementById('aa').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aks').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ajs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ats').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a2s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ako').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kk').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k2s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qq').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q2s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('ajo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jj').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j4s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('j3s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('ato').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('tt').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t5s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('99').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('98s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('97s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('96s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a8o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k8o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q8o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('t8o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('98o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('88').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('87s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('86s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('85s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a7o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k7o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('77').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('76s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('75s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('74s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a6o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('66').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('65s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('64s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a5o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('55').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('54s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('53s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a4o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('44').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a3o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('33').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a2o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('22').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		updateLegend('bu_firstin');
	}
	if (scenario == 'sb_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		resetChart();
		document.getElementById('aa').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aks').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ajs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ats').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a2s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ako').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kk').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k2s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('aqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kqo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qq').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjs').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q4s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q3s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q2s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('ajo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kjo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qjo').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jj').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jts').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j5s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j4s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('j3s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('ato').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('kto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('qto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('jto').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('tt').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t9s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t8s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t7s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t6s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t5s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('j9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('t9o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('99').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('98s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('97s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('96s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a8o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k8o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('q8o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('t8o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('98o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('88').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('87s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('86s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('85s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a7o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('k7o').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('77').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('76s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('75s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('74s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a6o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('66').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('65s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('64s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a5o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('55').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('54s').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('53s').setAttribute('style', 'background: #f9d175; color: #272a42;');
		document.getElementById('a4o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('44').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('a3o').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('33').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		document.getElementById('22').setAttribute('style', 'background: #dd1c3f; color: #f2f2f2;');
		updateLegend('sb_firstin');
	}
	if (scenario == 'bb_firstin') {
		// Never happens
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #3d4470;');
	}
}

function updateLegend(scenario) {
	if (scenario == 'lj_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color red"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color yellow"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'hj_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color red"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color yellow"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'co_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color red"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color yellow"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'bu_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color red"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color yellow"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'sb_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color red"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color yellow"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'bb_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color red"></div><div class="legend_description">3Bet (re-raise)</div></li><li><div class="legend_color green"></div><div class="legend_description">Call</div></li><ul>';
	}
}

function resetChart() {
	// Row 1
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aks').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aqs').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('ajs').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('ats').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('a9s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('a8s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('a7s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('a6s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('a5s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('a4s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('a3s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('a2s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 2
	document.getElementById('ako').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('kk').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('kqs').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('kjs').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('kts').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k9s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k8s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k7s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k6s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k5s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k4s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k3s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k2s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 3
	document.getElementById('aqo').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('kqo').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('qq').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('qjs').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('qts').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q9s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q8s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q7s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q6s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q5s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q4s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q3s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q2s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 4
	document.getElementById('ajo').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('kjo').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('qjo').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('jj').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('jts').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j9s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j8s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j7s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j6s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j5s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j4s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j3s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j2s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 5
	document.getElementById('ato').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('kto').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('qto').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('jto').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('tt').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t9s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t8s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t7s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t6s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t5s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t4s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t3s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t2s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 6
	document.getElementById('a9o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k9o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q9o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j9o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t9o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('99').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('98s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('97s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('96s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('95s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('94s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('93s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('92s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 7
	document.getElementById('a8o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k8o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q8o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j8o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t8o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('98o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('88').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('87s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('86s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('85s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('84s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('83s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('82s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 8
	document.getElementById('a7o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k7o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q7o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j7o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t7o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('97o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('87o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('77').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('76s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('75s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('74s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('73s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('72s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 9
	document.getElementById('a6o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k6o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q6o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j6o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t6o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('96o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('86o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('76o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('66').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('65s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('64s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('63s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('62s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 10
	document.getElementById('a5o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k5o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q5o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j5o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t5o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('95o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('85o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('75o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('65o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('55').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('54s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('53s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('52s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 11
	document.getElementById('a4o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k4o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q4o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j4o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t4o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('94o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('84o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('74o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('64o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('54o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('44').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('43s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('42s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 12
	document.getElementById('a3o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k3o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q3o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j3o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t3o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('93o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('83o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('73o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('63o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('53o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('43o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('33').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('32s').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 13
	document.getElementById('a2o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('k2o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('q2o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('j2o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('t2o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('92o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('82o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('72o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('62o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('52o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('42o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('32o').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('22').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
}


































