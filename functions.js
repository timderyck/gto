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
		document.getElementById('position_lj').setAttribute('style', 'background: #111318;');
		document.getElementById('position_hj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_co').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bu').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_sb').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bb').setAttribute('style', 'background: #29313d;');
		document.getElementById('chart_lj_firstin').setAttribute('style', 'display: block;');
		document.getElementById('chart_hj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_co_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb_firstin').setAttribute('style', 'display: none;');
		updateLegend('lj_firstin');
	}
	if (scenario == 'hj_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_hj').setAttribute('style', 'background: #111318;');
		document.getElementById('position_co').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bu').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_sb').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bb').setAttribute('style', 'background: #29313d;');
		document.getElementById('chart_lj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj_firstin').setAttribute('style', 'display: block;');
		document.getElementById('chart_co_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb_firstin').setAttribute('style', 'display: none;');
		updateLegend('hj_firstin');
	}
	if (scenario == 'co_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_hj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_co').setAttribute('style', 'background: #111318;');
		document.getElementById('position_bu').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_sb').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bb').setAttribute('style', 'background: #29313d;');
		document.getElementById('chart_lj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_co_firstin').setAttribute('style', 'display: block;');
		document.getElementById('chart_bu_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb_firstin').setAttribute('style', 'display: none;');
		updateLegend('co_firstin');
	}
	if (scenario == 'bu_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_hj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_co').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bu').setAttribute('style', 'background: #111318;');
		document.getElementById('position_sb').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bb').setAttribute('style', 'background: #29313d;');
		document.getElementById('chart_lj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_co_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu_firstin').setAttribute('style', 'display: block;');
		document.getElementById('chart_sb_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb_firstin').setAttribute('style', 'display: none;');
		updateLegend('bu_firstin');
	}
	if (scenario == 'sb_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_hj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_co').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bu').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_sb').setAttribute('style', 'background: #111318;');
		document.getElementById('position_bb').setAttribute('style', 'background: #29313d;');
		document.getElementById('chart_lj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_co_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb_firstin').setAttribute('style', 'display: block;');
		document.getElementById('chart_bb_firstin').setAttribute('style', 'display: none;');
		updateLegend('sb_firstin');
	}
	if (scenario == 'bb_firstin') {
		document.getElementById('position_lj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_hj').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_co').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bu').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_sb').setAttribute('style', 'background: #29313d;');
		document.getElementById('position_bb').setAttribute('style', 'background: #111318;');
		document.getElementById('chart_lj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_co_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb_firstin').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb_firstin').setAttribute('style', 'display: block;');
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



















