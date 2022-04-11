export default function MainContainer() {
  return(
    <div class="bg-[#141414]">
      <div class="con-main">
        <p class="text-red-200 text-2xl text-center pt-10"> Esi sveicināts REACT aplikācijā!</p>
        <div class="flex flex-wrap justify-center items-center py-3">
          <a class="text-gray-500 hover:underline hover:text-green-600 whitespace-nowrap" href="https://github.com/autocorrect613/express-react-tailwind-app_1">Spied šeit,&nbsp;</a>
          <p class="text-white"> lai redzētu source code šai lapai!</p>
        </div>
        <div class="flex w-full relative p-2">
          <div class="flex flex-col w-1/2 bg-green-900" >
            <p class="text-white p-2">TODO list:</p>
            <p class="todo-item">- Pārrakstīt dropownu un eventlisteneru funkcijas EJS stilā, tad nebūs kļūdu konsolē + tagad viņi krašo visu javascriptu</p>
            <p class="todo-item">- Izveidot drag-n-drop todo list, to savienojot DB, lai rūdis arī var likt piezīmes</p>
            <p class="todo-item">- izveidot React stila routingu navigācijas joslai (express pagaidām būs tikai viens routs) </p>
            <p class="todo-item">- Izveidot log failu datu bāzē, kur redzami apdeiti latviski</p>
            <p class="todo-item">- Pārrakstīt js funkciju, kura norāda, kad pēdējo reizi rediģēta lapa</p>
          </div>
          <div class="flex flex-col w-1/2 bg-sky-700" >
            <p class="text-white p-2">DONE list:</p>
            <p class="todo-item line-through">- Atjaunot linku kodam</p>
            <p class="todo-item line-through">- izveidot jaunu projektu un pārmainīt mapju, failu struktūru priekš react</p>
            <p class="todo-item line-through">- pārveidot navigācijas EJS failu par komponentiem JSX failos </p>
            <p class="todo-item line-through">- react un express abi reizē būs palaisti zem viena porta - izdomāt, kā menedžēt "./build" direktoriju (reģistrēt tailwind pirms vai pēc build vai kā citādi) </p>
            <p class="todo-item line-through">- Pārliecināties, vai un cik jaudīgi ir React routi salīdzinājumā ar express+ejs routiem</p>
          </div>
        </div>    
      </div>
    </div>
  )
}