<template>
  <div class="loncom_energy_text">
    <p>{{energyText.title}}</p>
    <strong>{{energyText.num}}</strong>
    <p><em :class="energyText.rateClass">{{energyText.rate}}</em>{{energyText.rateDetail}}</p>
  </div>
</template>

<script>
export default {
    props:["energyText"],  
}
</script>

