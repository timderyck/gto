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
		document.getElementById('aa').setAttribute('style', 'background: #dd1c3f;');
		document.getElementById('aks').setAttribute('style', 'background: #dd1c3f;');
		document.getElementById('aqs').setAttribute('style', 'background: #dd1c3f;');
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
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aks').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aqs').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('ajs').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('ats').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('a9s').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('a8s').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('a7s').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('a6s').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('a5s').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('a4s').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('a3s').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('a2s').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 2
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 3
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 4
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	//
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 5
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 6
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 7
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 8
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 9
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 10
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 11
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 12
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	// Row 13
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
	document.getElementById('aa').setAttribute('style', 'background: #3d4470; color: #fff;');
}





















