const CurrFormat = new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})

export function FormatCurr(number:number){
return CurrFormat.format(number)
}