function Price (strings, type, type2) {
    let s1 = strings[0]
    let s2 = strings[1]
    const retailPrice = 20
    const wholesalePrice = 16
    let txt = ''
    if (type === 'retail') {
        txt = `购买单价是：${retailPrice}`
    } else {
        txt = `批发价是：${retailPrice}`
    }
    return `${s1}${txt}${s2}${type2}`
}
let showTxt = Price`你此次的${'retail'}啊啊啊${'vvvv'}`
console.log(showTxt)