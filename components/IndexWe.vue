<template>
  <div class="IndexWe fullheight">
    <h2>Мы</h2>
    <h3>Находим и разрабатываем оригинальные визуальные решения для брендов, помогая им выражать себя в цифровой среде</h3>
    <div class="description">
      <p class="pt-102 pb-40">Мы мобильные и гибкие в работе, подстраиваемся под сроки и поставленные задачи. Наш опыт позволяет нам работать с нестандартными задачами, балансируя между сроками без потери качества.</p>
      <p class="pt-102 pb-40">Мы работаем на результат, а он возможен только в персональном подходе к проекту и рабочей команде.Наша открытость к диалогу нередко превращает клиентов в друзей агентства и выстраивает долгосрочные отношения.</p>
    </div>
    <h2 class="pt-102 pb-44">Команда</h2>
    <div class="team">
      <IndexWePerson
        class="person"
        name="Сергей Петров"
        position="Управляющий партнер"
        text="Мы мобильные и гибкие в работе, подстраиваемся под сроки и поставленные задачи"
      />
      <IndexWePerson
        class="person"
        name="Сергей Петров"
        position="Управляющий партнер"
        text="Мы мобильные и гибкие в работе, подстраиваемся под сроки и поставленные задачи"
      />
      <IndexWePerson
        class="person"
        name="Сергей Петров"
        position="Управляющий партнер"
        text="Мы мобильные и гибкие в работе, подстраиваемся под сроки и поставленные задачи"
      />
      <IndexWePerson
        class="person"
        name="Сергей Петров"
        position="Управляющий партнер"
        text="Мы мобильные и гибкие в работе, подстраиваемся под сроки и поставленные задачи"
      />
      <IndexWePerson
        class="person"
        name="Сергей Петров"
        position="Управляющий партнер"
        text="Мы мобильные и гибкие в работе, подстраиваемся под сроки и поставленные задачи"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/style.scss';

.IndexWe {

  .description {
    display: block;
    
    p {
      display: block;
      text-transform: none;
    }
  }
}

// .viewport-PHONE {}
// .viewport-SMARTPHONE {}
.viewport-TABLED {
  .IndexWe .team .person {
    display: inline-block;
    width: 48%;
    margin-right: 2%;
    margin-bottom: 3%;
    margin-top: 3%;
  }
}
.viewport-DESKTOP {
  .IndexWe  .description {
    display: flex;
    justify-content: flex-end;

    p {
      width: 35%;
      margin-left: 12%;
      display: inline-block;
    }
  }
  .IndexWe .team .person {
    display: inline-block;
    width: 48%;
    margin-right: 2%;
    margin-bottom: 3%;
    margin-top: 3%;
  }
}
</style>
