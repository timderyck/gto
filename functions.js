// Hide splash screen
function hideSplash() {
	window.scrollTo(0, 0);
	document.getElementById('page').setAttribute('style', 'display: block;');
	document.getElementById('splash').classList.add('hide');
}

// Navigation
function goToPage(page) {
	if (page == 'contact') {
		document.getElementById('positions').setAttribute('style', 'display: none;');
		document.getElementById('page').setAttribute('style', 'display: none;');
		document.getElementById('contact').setAttribute('style', 'display: block;');
	}
	if (page == 'terms') {
		document.getElementById('positions').setAttribute('style', 'display: none;');
		document.getElementById('page').setAttribute('style', 'display: none;');
		document.getElementById('terms').setAttribute('style', 'display: block;');
	}
	if (page == 'privacy') {
		document.getElementById('positions').setAttribute('style', 'display: none;');
		document.getElementById('page').setAttribute('style', 'display: none;');
		document.getElementById('privacy').setAttribute('style', 'display: block;');
	}
}


// Navigation
function changePosition(pos) {
	if (pos == 'lj') {
		document.getElementById('position_lj').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_hj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_lj').setAttribute('style', 'display: block;');
		document.getElementById('chart_hj').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'hj') {
		document.getElementById('position_lj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_hj').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_lj').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj').setAttribute('style', 'display: block;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'co') {
		document.getElementById('position_lj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_hj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_co').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_lj').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: block;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'bu') {
		document.getElementById('position_lj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_hj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bu').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_lj').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: block;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'sb') {
		document.getElementById('position_lj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_hj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_sb').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_lj').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: block;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'bb') {
		document.getElementById('position_lj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_hj').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_bb').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		
		document.getElementById('chart_lj').setAttribute('style', 'display: none;');
		document.getElementById('chart_hj').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: block;');
	}

}








