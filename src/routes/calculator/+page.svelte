<script lang="ts">
    let nums = [1,2,3,4,5,6,7,8,9]
    let syms = ["+", "-", "*", "/"]
    let result1 = '';
    let result2 = '';
    let result3 = '';
    let realResult = 0;
    let tt = 0;

    function cal(){
        let result11 = Number(result1);
        let result33 = Number(result3);
        if(result2 === "+"){
            realResult = result11 + result33;
        }
        else if(result2 === "-"){
            realResult = result11 - result33;
        }
        else if(result2 === "*"){
            realResult = result11 * result33;
        }
        else if(result2 === "/"){
            realResult = result11 / result33;
        }
    }
    
    function addNum(num:number){
        if(tt === 0){
            result1 += num.toString();
        }
        else{
            result3 += num.toString();
        }
    }
    function addCal(sym:String){
        result2 += sym;
        tt = 1;
    }

</script>

<h1>CALCULATOR</h1>
<h1>{result1}</h1>
<h1>{result2}</h1>
<h1>{result3}</h1>
<h1>{realResult}</h1>


{#each nums as num}
    <button on:click={() => {addNum(num)}}>{num}</button>
{/each}


{#each syms as sym}
    <button on:click={() => {addCal(sym)}}>{sym}</button>
{/each}


<button on:click={cal}>=</button>

