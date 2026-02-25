// Hide splash screen
function hideSplash() {
	//document.getElementById('splash').classList.add('hide');
	document.getElementById('splash').setAttribute('style', 'display: none;');
}

// Navigation
function changePosition(pos) {
	if (pos == 'ep') {
		document.getElementById('position_filter_ep').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_filter_mp').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_ep').setAttribute('style', 'display: block;');
		document.getElementById('chart_mp').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
		
		document.getElementById('title_ep').setAttribute('style', 'display: block;');
		document.getElementById('title_mp').setAttribute('style', 'display: none;');
		document.getElementById('title_co').setAttribute('style', 'display: none;');
		document.getElementById('title_bu').setAttribute('style', 'display: none;');
		document.getElementById('title_sb').setAttribute('style', 'display: none;');
		document.getElementById('title_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'mp') {
		document.getElementById('position_filter_ep').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_mp').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_filter_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_ep').setAttribute('style', 'display: none;');
		document.getElementById('chart_mp').setAttribute('style', 'display: block;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
		
		document.getElementById('title_ep').setAttribute('style', 'display: none;');
		document.getElementById('title_mp').setAttribute('style', 'display: block;');
		document.getElementById('title_co').setAttribute('style', 'display: none;');
		document.getElementById('title_bu').setAttribute('style', 'display: none;');
		document.getElementById('title_sb').setAttribute('style', 'display: none;');
		document.getElementById('title_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'co') {
		document.getElementById('position_filter_ep').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_mp').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_co').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_filter_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_ep').setAttribute('style', 'display: none;');
		document.getElementById('chart_mp').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: block;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
		
		document.getElementById('title_ep').setAttribute('style', 'display: none;');
		document.getElementById('title_mp').setAttribute('style', 'display: none;');
		document.getElementById('title_co').setAttribute('style', 'display: block;');
		document.getElementById('title_bu').setAttribute('style', 'display: none;');
		document.getElementById('title_sb').setAttribute('style', 'display: none;');
		document.getElementById('title_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'bu') {
		document.getElementById('position_filter_ep').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_mp').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bu').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_filter_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_ep').setAttribute('style', 'display: none;');
		document.getElementById('chart_mp').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: block;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
		
		document.getElementById('title_ep').setAttribute('style', 'display: none;');
		document.getElementById('title_mp').setAttribute('style', 'display: none;');
		document.getElementById('title_co').setAttribute('style', 'display: none;');
		document.getElementById('title_bu').setAttribute('style', 'display: block;');
		document.getElementById('title_sb').setAttribute('style', 'display: none;');
		document.getElementById('title_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'sb') {
		document.getElementById('position_filter_ep').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_mp').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_sb').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		document.getElementById('position_filter_bb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		
		document.getElementById('chart_ep').setAttribute('style', 'display: none;');
		document.getElementById('chart_mp').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: block;');
		document.getElementById('chart_bb').setAttribute('style', 'display: none;');
		
		document.getElementById('title_ep').setAttribute('style', 'display: none;');
		document.getElementById('title_mp').setAttribute('style', 'display: none;');
		document.getElementById('title_co').setAttribute('style', 'display: none;');
		document.getElementById('title_bu').setAttribute('style', 'display: none;');
		document.getElementById('title_sb').setAttribute('style', 'display: block;');
		document.getElementById('title_bb').setAttribute('style', 'display: none;');
	}
	if (pos == 'bb') {
		document.getElementById('position_filter_ep').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_mp').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_co').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bu').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_sb').setAttribute('style', 'background: #343842; border: #343842 solid 1px;');
		document.getElementById('position_filter_bb').setAttribute('style', 'background: #292a2e; border: #666 solid 1px;');
		
		document.getElementById('chart_ep').setAttribute('style', 'display: none;');
		document.getElementById('chart_mp').setAttribute('style', 'display: none;');
		document.getElementById('chart_co').setAttribute('style', 'display: none;');
		document.getElementById('chart_bu').setAttribute('style', 'display: none;');
		document.getElementById('chart_sb').setAttribute('style', 'display: none;');
		document.getElementById('chart_bb').setAttribute('style', 'display: block;');
		
		document.getElementById('title_ep').setAttribute('style', 'display: none;');
		document.getElementById('title_mp').setAttribute('style', 'display: none;');
		document.getElementById('title_co').setAttribute('style', 'display: none;');
		document.getElementById('title_bu').setAttribute('style', 'display: none;');
		document.getElementById('title_sb').setAttribute('style', 'display: none;');
		document.getElementById('title_bb').setAttribute('style', 'display: block;');
	}

}

