const form = document.querySelector("form")

form.addEventListener('submit', function(e){
      e.preventDefault()
      fetchColorScheme()
})

document.addEventListener('click', function(e){
      if(e.target.dataset.clr){
        copyHexCode(e.target.dataset.clr)
      }
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
             eachColor += `<img src="${color.image.bare}" data-clr="${color.hex.value}"/>`
        })
         document.getElementById("display-colors").innerHTML = eachColor
}

function displayHexValue(data){
    let eachHex = ''
    data.colors.forEach(function(color){
         eachHex += `<p data-clr="${color.hex.value}">${color.hex.value}</p>`
    })
    document.getElementById("footer").innerHTML = eachHex
}

function copyHexCode(clr){
   navigator.clipboard.writeText(clr)
   alert('hex copied: ' + clr)
}


