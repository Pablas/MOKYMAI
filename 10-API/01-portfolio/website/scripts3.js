fetch('http://localhost:7788/projects')
    .then(response => response.json())
    .then(duomenys =>{
        
        let block = document.querySelector(`.projects-and-section`);

        block.innerHTML = ``;

        for (const x of duomenys) {
            block.innerHTML += `<div class="project-box">
            <h3>${x.name}</h3>

            <p>${x.description}</p>

            <p>${x.technologies.map(technology =>
                `<span class="badge">${technology}</span>`).join(``)}</p>

            <p> 
                <a href="${x.link}" target="_blank" class="button"> Žiūrėti</a>
            </p>
        </div>`
        }
    })