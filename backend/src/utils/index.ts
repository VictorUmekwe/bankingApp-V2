

export const generateAccountNum = (length: number = 10):string => {
     if(length < 6){
        throw new Error('Account number length should be at least 6 digits')
     }

     let accountNumber = ""

     for(let i = 0; i < length; i++){
        const digit = Math.floor(Math.random() * 10)
        accountNumber += digit.toString()
     }

     return accountNumber
}