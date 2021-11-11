// from https://codesnippet.io/github-api-tutorial/
function getOrgRepo(orgName) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/orgs/${orgName}/repos`;
    xhr.open('GET', url, true);

    // what to do once request received
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        let dateString = data[0].updated_at;
        let date = niceDate(dateString);
        document.getElementById("date").innerHTML = "Updated " + date;
    }

    xhr.send();
}

function niceDate(dateString) {
    let dateArr = dateString.split(/-|T/);
    let month = getMonth(dateArr[1]);
    let day = dateArr[2];
    let year = dateArr[0];
    return month + " " + day + ", " + year;
}

function getMonth(monthNum) {
    const months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    };
    return months[monthNum];
}

getOrgRepo('MUN-Anime-Society');