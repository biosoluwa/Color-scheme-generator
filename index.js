const form = document.querySelector("form")

form.addEventListener('submit', function(e){
      e.preventDefault()
    //   form.reset()
      fetchColorScheme()
      
})

function fetchColorScheme(){
    const color = document.getElementById("color-input").value
    plainColor = color.replace('#', '')
    const schemeMode = document.getElementById("mode-options").value
        fetch(`https://www.thecolorapi.com/scheme?hex=${plainColor}&mode=${schemeMode}`)
          .then(res => res.json())
          .then(data => {
            displayColorScheme(data)
            displayHexValue(data)
        })   
}


function displayColorScheme(data){
    let eachColor = ''

        data.colors.forEach(function(color){
             eachColor += `<img src="${color.image.bare}"/>`
        })
         document.getElementById("display-colors").innerHTML = eachColor
}

function displayHexValue(data){
    let eachHex = ''
    data.colors.forEach(function(color){
         eachHex += `<p>${color.hex.value}</p>`
    })
    document.getElementById("footer").innerHTML = eachHex
}


