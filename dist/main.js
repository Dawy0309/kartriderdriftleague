var num;

for(num = 0; num < 14; num++){
    document.getElementById('Team'+ num).textContent = Team[num].name;
    document.getElementById('Team' + num + '_img').src = Team[num].img;
    document.getElementById('TeamResult'+ num).textContent = TeamResult[num].name;
    document.getElementById('TeamResult' + num + '_score').textContent = TeamResult[num].score;
    document.getElementById('TeamResult' + num + '_img').src = TeamResult[num].img;
}

for(num = 0; num < 16; num++){
    document.getElementById('Player' + num).textContent = Player[num].name;
    document.getElementById('Player' + num + '_img').src = Player[num].img;
    document.getElementById('PlayerResult' + num).textContent = PlayerResult[num].name;
    document.getElementById('PlayerResult' + num + '_score').textContent = PlayerResult[num].score;
    document.getElementById('PlayerResult' + num + '_img').src = PlayerResult[num].img;
}

document.getElementById('teamSatMatch').textContent = teamSatMatch;
document.getElementById('teamSunMatch').textContent = teamSunMatch;
document.getElementById('teamWedMatch').textContent = teamWedMatch;
document.getElementById('teamSatResult').textContent = teamSatResult;
document.getElementById('teamSunResult').textContent = teamSunResult;
document.getElementById('teamWedResult').textContent = teamWedResult;

document.getElementById('indSatMatch').textContent = indSatMatch;
document.getElementById('indSunMatch').textContent = indSunMatch;
document.getElementById('indSatMatchTitle').textContent = indSatMatchTitle;
document.getElementById('indSunMatchTitle').textContent = indSunMatchTitle;
document.getElementById('indSatResult').textContent = indSatResult;
document.getElementById('indSunResult').textContent = indSunResult;