const input1 = $('.number-1')
const input2 = $('.number-2')
const btnPlus = $('.btn__plus')
const btnMin = $('.btn__minus')
const btnMulti = $('.btn__multiplication')
const btnDev = $('.btn__division')
const btnDeg = $('.btn__degree')
const btnRoot = $('.btn__root')

const result = $('.result')



btnPlus.on('click', function(){
    let sum = +input1.val() + +input2.val()
    result.text(sum)
})

btnMin.on('click', function(){
    let minus = input1.val() - input2.val()
    result.text(minus)
})

btnMulti.on('click', function(){
    let multi = input1.val() * input2.val()
    result.text(multi)
})

btnDev.on('click', function(){
    let devision = input1.val() / input2.val()
    result.text(devision)
})
btnDeg.on('click', function(){
    let degree = input1.val() ** input2.val()
    result.text(degree)
})
btnRoot.on('click', function(){
    let root = Math.sqrt(input1.val() || input2.val())
    result.text(root)
})





