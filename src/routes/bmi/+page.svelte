<script lang="ts">
    let tall = 0;
    let weight = 0;
    $: bmi = weight / ((tall/100)**2);
</script>
<h1>BMI Calculator</h1>

<input bind:value={tall} placeholder="tall">
<input bind:value={weight} placeholder="weight">
<h1>{bmi}</h1>



