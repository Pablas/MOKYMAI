fetch(`http://localhost:7788/projects/latest/3`) // uzklausa i serverio adresa
    .then(response => response.json()) //konvertuojam gauta info is json i js objektus
    .then(data => { // musu masyvas gautas, uzsivadinom kaip "data"

        let block = document.querySelector(`.projects-list`);
        
        block.innerHTML = ``;
        for (const project of data) { //project viena dalis is masyvo
            block.innerHTML += `
            <div class="project-box">
                <h3>${project.name}</h3>

                <p>${project.description}</p>

                <p>${project.technologies.map(technology =>
                    `<span class="badge">${technology}</span>`).join(``)}</p>

                <p> 
                    <a href="${project.link}" target="_blank" class="button"> Žiūrėti</a>
                </p>
            </div>`;
        }
    })