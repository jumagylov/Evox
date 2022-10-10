let logo = document.getElementById("logo");
let dropdownBlock = document.getElementById("logoDropDown");
console.log(dropdownBlock);

logo.onclick = function (e) {
  e.stopPropagation();
  e.preventDefault();
  dropdownBlock.classList.toggle("show");
};
let a = 0
let card2 = document.createElement('div')

let imgRem = document.getElementById('imgId1')
  let imgRem2 = document.getElementById('appendImg')
  let noRem = document.createElement('img')
  noRem.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAM1BMVEX///8AAACmpqaioqKvr6+qqqqysrLn5+fx8fGPj49mZmbQ0NAoKCgcHBwTExMkJCQYGBj8f4a0AAAC00lEQVRogcVb57qDIAwFtXV2vP/T3s9rtQ6MIaMnf8GeZpBARggLNe0Quz64Ut/FoW1SK/UjjlR4ohf/EI86gf6OE5V+6OUH4n3Ar19xppsX+m2BeO3wP5KfqPJBr1YQW/nXz7gmF/0XG4jnCn+H7qL/cgfxxd9I3on/4gAxy39ldW76rxIQk/0tJ25LpvZ/S0KM5685Sn4iQ/3v9b7IvwntyZKh/o96n6kNw+maFf45ehzC+VqMdwv0O4UQOmrVgH+C9xi70FPLenwSPfZXG5T2f2bzK+boLarznz7vO9boTQr/l/J1CcbobWL902qtuBuF+mfoXbDVhvcyZ7NA/5kKZZoJl7LNmf4gU/60MJPMGOpfZMr0Rxn4wh+iP2PHPzLGUWzQHzLtjzYikgkD/6MyIbX9KRlQxj9WjJP/wIX/M3Beivhn4rrF59/IcQjtzyxsi4RoeGkRmJDplS07/gliHEW0/g+KzNyuxd+xo/Y2R8qIf+IYRxE7/ilinJz/RaQO1+SMH3Z8JDLsz8HqvnTpTIwv6Hu6cKXmz5M90QD0n9OjK/D9U1M/QL/S/wkZpmVp+0+SaVI2W/7GKXHa/xzIvCCQJX+HclCG/bkUg9j6dyoFMvXvVghk8e9YBmXYn1sRcqRL+3MqQc50IX/XAjQcHit8rOlhDx7W7WCdLjbkYAMu9rqBvWxhr5rYizb2mYF9ZGGfmNgHNja9wMhVmtb/toRNLWETa+xcpVH9L4f3jVE79B9kZcjN7S/ToIz1jy0nYIsp2FKSS/2djY8tI2KLqNgSMraArg5fKv+DbZ4wqceJ4x+2cQbbNmRYBRb8FH1kM69sNH7CeWAb5rDtgthmSWyrKLZRlkZ3axOuOELybpLGtojTDfLqBBmN36PHA6jVHwxHgEdDwIMx4LGg1EDYSD8YipqGwrAjYeiBOPQ4IHoYEj0Kih6ERY8Bo4egMSPgf5o3IYUN8Gp0AAAAAElFTkSuQmCC'
  noRem.style.width = '30px'
  noRem.style.marginTop = '10px'

  let withRem = document.createElement('img')
  withRem.src = 'https://img2.freepng.ru/20180611/abz/kisspng-computer-icons-plus-and-minus-signs-clip-art-5b1e62a4baa424.2731478915287179887645.jpg'
  withRem.style.width = '50px'
  withRem.style.height = '50px'
  

function submitFun(){
  let card = document.getElementById('func')
  card2.innerHTML = 'Эта бесплатная услуга'
  card2.style.marginTop = '30px'
  card.append(card2)
  a++

  if(a===2){
    noRem.remove()
    card2.remove();
    imgRem2.append(withRem)

    a=0
  }
  if(a===1){
    if(imgRem){
    imgRem.remove()
    withRem.remove()
    }
    imgRem2.append(noRem)
  }
  console.log(a);
}


  let imgRemCard = document.getElementById('imgId2')
  let imgRemCard2 = document.getElementById('appendImg2')
  let noRem2 = document.createElement('img')
  noRem2.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAM1BMVEX///8AAACmpqaioqKvr6+qqqqysrLn5+fx8fGPj49mZmbQ0NAoKCgcHBwTExMkJCQYGBj8f4a0AAAC00lEQVRogcVb57qDIAwFtXV2vP/T3s9rtQ6MIaMnf8GeZpBARggLNe0Quz64Ut/FoW1SK/UjjlR4ohf/EI86gf6OE5V+6OUH4n3Ar19xppsX+m2BeO3wP5KfqPJBr1YQW/nXz7gmF/0XG4jnCn+H7qL/cgfxxd9I3on/4gAxy39ldW76rxIQk/0tJ25LpvZ/S0KM5685Sn4iQ/3v9b7IvwntyZKh/o96n6kNw+maFf45ehzC+VqMdwv0O4UQOmrVgH+C9xi70FPLenwSPfZXG5T2f2bzK+boLarznz7vO9boTQr/l/J1CcbobWL902qtuBuF+mfoXbDVhvcyZ7NA/5kKZZoJl7LNmf4gU/60MJPMGOpfZMr0Rxn4wh+iP2PHPzLGUWzQHzLtjzYikgkD/6MyIbX9KRlQxj9WjJP/wIX/M3Beivhn4rrF59/IcQjtzyxsi4RoeGkRmJDplS07/gliHEW0/g+KzNyuxd+xo/Y2R8qIf+IYRxE7/ilinJz/RaQO1+SMH3Z8JDLsz8HqvnTpTIwv6Hu6cKXmz5M90QD0n9OjK/D9U1M/QL/S/wkZpmVp+0+SaVI2W/7GKXHa/xzIvCCQJX+HclCG/bkUg9j6dyoFMvXvVghk8e9YBmXYn1sRcqRL+3MqQc50IX/XAjQcHit8rOlhDx7W7WCdLjbkYAMu9rqBvWxhr5rYizb2mYF9ZGGfmNgHNja9wMhVmtb/toRNLWETa+xcpVH9L4f3jVE79B9kZcjN7S/ToIz1jy0nYIsp2FKSS/2djY8tI2KLqNgSMraArg5fKv+DbZ4wqceJ4x+2cQbbNmRYBRb8FH1kM69sNH7CeWAb5rDtgthmSWyrKLZRlkZ3axOuOELybpLGtojTDfLqBBmN36PHA6jVHwxHgEdDwIMx4LGg1EDYSD8YipqGwrAjYeiBOPQ4IHoYEj0Kih6ERY8Bo4egMSPgf5o3IYUN8Gp0AAAAAElFTkSuQmCC'
  noRem2.style.width = '30px'
  noRem2.style.marginTop = '10px'

  let withRem2 = document.createElement('img')
  withRem2.src = 'https://img2.freepng.ru/20180611/abz/kisspng-computer-icons-plus-and-minus-signs-clip-art-5b1e62a4baa424.2731478915287179887645.jpg'
  withRem2.style.width = '50px'
  withRem2.style.height = '50px'

let b = 0
console.log(b);
let second2 = document.createElement('div')
function submitFun2(){
  b++
  let second = document.getElementById('func2')
  second2.innerHTML = 'Конечно. Об этом нужно будет сказать специалисту или нашему менеджеру по телефону до начала составления договора'
  second2.style.marginTop = '30px'
  second.append(second2)
console.log(b);
  if(b===2){
    second2.remove();
    b=0
    noRem2.remove()
    imgRemCard2.append(withRem2)
  }
  if(b===1){
    if(imgRemCard){
      imgRemCard.remove()
    withRem2.remove()
    }
    imgRemCard2.append(noRem2)
  }
}


let thirdRemCard = document.getElementById('imgId3')
let thirdRemCard2 = document.getElementById('appendImg3')
let noRem3 = document.createElement('img')
noRem3.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAM1BMVEX///8AAACmpqaioqKvr6+qqqqysrLn5+fx8fGPj49mZmbQ0NAoKCgcHBwTExMkJCQYGBj8f4a0AAAC00lEQVRogcVb57qDIAwFtXV2vP/T3s9rtQ6MIaMnf8GeZpBARggLNe0Quz64Ut/FoW1SK/UjjlR4ohf/EI86gf6OE5V+6OUH4n3Ar19xppsX+m2BeO3wP5KfqPJBr1YQW/nXz7gmF/0XG4jnCn+H7qL/cgfxxd9I3on/4gAxy39ldW76rxIQk/0tJ25LpvZ/S0KM5685Sn4iQ/3v9b7IvwntyZKh/o96n6kNw+maFf45ehzC+VqMdwv0O4UQOmrVgH+C9xi70FPLenwSPfZXG5T2f2bzK+boLarznz7vO9boTQr/l/J1CcbobWL902qtuBuF+mfoXbDVhvcyZ7NA/5kKZZoJl7LNmf4gU/60MJPMGOpfZMr0Rxn4wh+iP2PHPzLGUWzQHzLtjzYikgkD/6MyIbX9KRlQxj9WjJP/wIX/M3Beivhn4rrF59/IcQjtzyxsi4RoeGkRmJDplS07/gliHEW0/g+KzNyuxd+xo/Y2R8qIf+IYRxE7/ilinJz/RaQO1+SMH3Z8JDLsz8HqvnTpTIwv6Hu6cKXmz5M90QD0n9OjK/D9U1M/QL/S/wkZpmVp+0+SaVI2W/7GKXHa/xzIvCCQJX+HclCG/bkUg9j6dyoFMvXvVghk8e9YBmXYn1sRcqRL+3MqQc50IX/XAjQcHit8rOlhDx7W7WCdLjbkYAMu9rqBvWxhr5rYizb2mYF9ZGGfmNgHNja9wMhVmtb/toRNLWETa+xcpVH9L4f3jVE79B9kZcjN7S/ToIz1jy0nYIsp2FKSS/2djY8tI2KLqNgSMraArg5fKv+DbZ4wqceJ4x+2cQbbNmRYBRb8FH1kM69sNH7CeWAb5rDtgthmSWyrKLZRlkZ3axOuOELybpLGtojTDfLqBBmN36PHA6jVHwxHgEdDwIMx4LGg1EDYSD8YipqGwrAjYeiBOPQ4IHoYEj0Kih6ERY8Bo4egMSPgf5o3IYUN8Gp0AAAAAElFTkSuQmCC'
noRem3.style.width = '30px'
noRem3.style.marginTop = '10px'

let withRem3 = document.createElement('img')
withRem3.src = '-'
withRem3.style.width = '50px'
withRem3.style.height = '50px'

let c = 0
let third2 = document.createElement('div')
function submitFun3(){
  let third = document.getElementById('func3')
  third2.innerHTML = 'Это зависит от типа проекта и размера площади.'
  third2.style.marginTop = '30px'
  third.append(third2)
  c++
  if(c===2){
    third2.remove();
    c=0
    second2.remove();
    noRem3.remove()
    thirdRemCard2.append(withRem3)
  }
  if(c===1){
    if(thirdRemCard){
      thirdRemCard.remove()
    withRem3.remove()
    }
    thirdRemCard2.append(noRem3)
  }
}

