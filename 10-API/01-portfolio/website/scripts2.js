fetch(`http://localhost:7788/work-experience/latest/2`)
    .then(response => response.json())
    .then(duomenys => {
        let block = document.querySelector(`.work-experience-list`);
        
        block.innerHTML = ``;

        for (const duomuo of duomenys) {
            block.innerHTML += `
        <div>
            <h3>${duomuo.company}</h3>
            <p>${duomuo.title}</p>
            <p>${duomuo.date}</p>
            <p>${duomuo.description}</p>
            <p> Lokacija: ${duomuo.location}</p>
            <p>${duomuo.skills.map(x => `<span class="badge">${x}</span>`).join(``)}</p>
        </div>`
        }
    })