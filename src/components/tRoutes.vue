<template>
<form name="Routes">
  <h4>Описание вариантов маршрутов прохождения линейного
    объекта по территории района строительства (реконструкции),
    обоснование выбранного варианта трассы</h4>
  <div name="RoutesNote">
    <t-text-block title="Описание вариантов маршрутов
    прохождения линейного объекта по территории района
    строительства (реконструкции), обоснование выбранного
    варианта трассы"></t-text-block>
  </div>
  <t-route></t-route>
</form>
</template>

<script>
import TTextBlock from "@/components/tTextBlock.vue";
import TRoute from "@/components/tRoute.vue";

export default {
  name: "tRoutes",
  components: {TRoute, TTextBlock}
}
</script>

<style scoped>

</style>
