
 
interface IProperty<T> {
    count: (elements: Array<T>)=> number;
}

class OddProperty implements IProperty<number> {
    count = (elements: Array<number>)=> {
        let counter:number = 0; 
        elements.forEach((element)=>{
            if(element % 2 === 1){
                counter+=1;
            }
        })
        return counter;
    }
}

// const a = new OddProperty();
// console.log(a.count([1,2,3,4]));

class PrimeProperty implements IProperty<number> {
    count = (elements: Array<number>)=> {
        let counter:number = 0; 
        let flag:boolean = true;
        elements.forEach((element)=>{
            if (element > 1){
                for (let i = 2; i < element; i++){
                    if (element % i ==0){
                        flag = false;
                    }
                }if(flag){
                    counter+=1;
                }
            }
        })
        return counter;
    }
}

// const checkPrimeArr = new PrimeProperty();
// console.log(checkPrimeArr.count([2,3,5,7]));

class PalindromesProperty implements IProperty<number> {
    count = (elements: Array<number>)=> {
        
        let counter:number=0;
        elements.forEach((element:number)=>{
            let number = String(element);
            let original: Array<number> = [];
            let reversed: Array<number> = [];
            let flag:boolean=false;
            let digits:Array<string>=number.split('')
            
            digits.forEach((digit)=>{
                original.push(Number(digit))
            })
            // console.log(`original:${original} `)

            for(let i = original.length-1; i>-1 ;i--){
                // console.log(`i:${i}`)
                reversed.push(original[i]);
                // console.log(reversed)
            }
            // console.log(`reversed:${reversed} `)
            while(original.length>0 && reversed.length>0){
                if(original[0]==reversed[0]){
                    original = original.slice(1,-1);
                    reversed = reversed.slice(1,-1);
                }else if (original.length==1 && reversed.length==1){
                    if (original[0]==reversed[0]){
                        flag = true;
                    }
                }else{
                    break
                }
            }
            // console.log('here')
            if (original.length == 0 && reversed.length==0){
                flag=true;
            }
            if(flag){
                counter+=1;
            }
            
        // console.log(`counter:${counter}`)
        
        })
        
        
        
    return counter;
    }
}

// const checkPalindromArr = new PalindromesProperty();
// console.log(checkPalindromArr.count([1234321,312,456,4447444]));

class Person {
    name: string;
    id: number;
    
    constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    }
}
    
class PalindromeIdProperty implements IProperty<Person> {
    count = (persons: Array<Person>)=> {
        return this.checkPalindromes(persons)
    }
    checkPalindromes(persons: Array<Person>) {
        let personsIds:Array<number> = []
        persons.forEach((person)=>{
            personsIds.push(person.id);
        })
        const palindromesProperty = new PalindromesProperty();
        return (palindromesProperty.count(personsIds));
    }
}


// const checkPalindromIDs = new PalindromeIdProperty();
// console.log(checkPalindromIDs.count([{name:'shahaf',id: 1234321},{name:'amit',id:123454321}]));
