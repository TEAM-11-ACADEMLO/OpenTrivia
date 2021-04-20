fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(data => printQuestions(data.results))

fetch("https://opentdb.com/api_category.php")
    .then(response => response.json())
    .then(datos => printCategories(datos.trivia_categories))

fetch("https://opentdb.com/api.php?amount=1")
    .then(respuesta => console.log(respuesta.json()))

fetch("https://opentdb.com/api.php?amount=1")
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))




function printQuestions(questions) {
    const container = document.getElementById('questions-container')
    questions.forEach((question) => {
        container.innerHTML += `
                    <div class="col-4 mt-3">
                <div class="card h-100">
                    <div class="card-body">
                        ${question.question}
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