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
		updateLegend('lj_firstin');
	}
	if (scenario == 'hj_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		updateLegend('hj_firstin');
	}
	if (scenario == 'co_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		updateLegend('co_firstin');
	}
	if (scenario == 'bu_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		updateLegend('bu_firstin');
	}
	if (scenario == 'sb_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #3d4470;');
		document.getElementById('position_bb').setAttribute('style', 'background: #242841;');
		updateLegend('sb_firstin');
	}
	if (scenario == 'bb_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_hj').setAttribute('style', 'background: #242841;');
		document.getElementById('position_co').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bu').setAttribute('style', 'background: #242841;');
		document.getElementById('position_sb').setAttribute('style', 'background: #242841;');
		document.getElementById('position_bb').setAttribute('style', 'background: #3d4470;');
		updateLegend('bb_firstin');
	}
}

function updateLegend(scenario) {
	if (scenario == 'lj_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color pink"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color blue"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'hj_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color pink"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color blue"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'co_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color pink"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color blue"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'bu_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color pink"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color blue"></div><div class="legend_description">Raise optional</div></li><ul>';
	}
	if (scenario == 'sb_firstin') {
		document.getElementById('legend').innerHTML = '<ul><li><div class="legend_color pink"></div><div class="legend_description">Raise 3x BB</div></li><li><div class="legend_color blue"></div><div class="legend_description">Raise optional</div></li><ul>';
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
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 8
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 9
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 10
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 11
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 12
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	// Row 13
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #d2d2d2;');
}
























