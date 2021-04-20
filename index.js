fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then(response => response.json())
    .then(data => printQuestions(data.results))

fetch("https://opentdb.com/api_category.php")
    .then(response => response.json())
    .then(datos => printCategories(datos.trivia_categories))


function printQuestions(resultados) {
    const container = document.getElementById('questions-container')
    let i = 1;
    resultados.forEach((resultado) => {
        container.innerHTML += `
                    <div class="col-4 mt-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="display-5 text-center">
                        Pregúnta # ${i++}
                        </h5>
                        <p class="text-center">${resultado.question}</p>
                        
                            <div class="row mx-auto justify-content-center">
                                <button type="button" class="btn btn-outline-primary ">
                                    ${resultado.incorrect_answers[0]}
                                </button>                                     
                                <button type="button" class="btn btn-outline-primary ">
                                    ${resultado.incorrect_answers[1]}
                                </button>                                         
                                <button type="button" class="btn btn-outline-primary ">
                                    ${resultado.incorrect_answers[2]}
                                </button>       
                            </div>
                    </div>
                </div>
            </div>
        `
    })
}

function printCategories(categories) {
    const categoriesContainer = document.getElementById('categories-container')
    categories.forEach((category) => {
        categoriesContainer.innerHTML += `
             <div class="col-4 mt-3">
                 <div class="card h-100">
                     <div class="card-body">
                         ${category.name}
                     </div>
                 </div>
             </div>
         `
    })
}

// categoriesContainer.innerHTML += `
//             <div class="col-4 mt-3">
//                 <div class="card h-100">
//                     <div class="card-body">
//                         ${category.name}
//                     </div>
//                 </div>
//             </div>
//         `