// from https://codesnippet.io/github-api-tutorial/
function getOrgRepo(orgName) {
        const oldDate = document.getElementById("date");
        if (oldDate) {
            const xhr = new XMLHttpRequest();
            const url = `https://api.github.com/orgs/${orgName}/repos`;
            xhr.open('GET', url, true);

            // what to do once request received
            xhr.onload = function() {
                const data = JSON.parse(this.response);
                let dateString = data[0].updated_at;
                let date = niceDate(dateString);
                // check that function is for correct page
                oldDate.innerHTML = "Updated " + date;
            }

            xhr.send();
        }
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

function sortList(ul) {
    const ulRef = document.getElementById(ul);
    // check that the function is being executed for the correct page
    if (ulRef) {
        let list = ulRef.getElementsByTagName("LI");
        let sortedList = Array.from(list).sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        for (let i = 0; i < sortedList.length; i++) {
            ulRef.appendChild(sortedList[i]);
        }
        console.log(sortedList);
    }
}

window.onload = function() {
    getOrgRepo('MUN-Anime-Society');
    sortList("manga-list-ul");
}