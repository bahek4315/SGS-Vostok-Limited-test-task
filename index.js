const city = document.querySelector('#city');
const workshop = document.querySelector('#workshop');
const employee = document.querySelector('#employee');
const brigade = document.querySelector('#brigade');
const shift = document.querySelector('#shift');
const resetButton = document.querySelector('.buttons__button-reset');
const submitButton = document.querySelector('.buttons__button-submit');
const modalWindow = document.querySelector('.modal-window');
const closeButton = document.querySelector('.modal-window__close');


const cityOptions = [
    `<option value="Moscow">Москва</option>`,
    `<option value="London">Лондон</option>`,
    `<option value="Paris">Париж</option>`,
    `<option value="Dubai">Дубаи</option>`,
    `<option value="Erevan">Ереван</option>`
];
const workshopOptions = [
    `<option value="vegetable-shop">Овощной цех</option>`,
    `<option value="confectionery-shop">Кондитерский цех</option>`,
    `<option value="dairy-shop">Молочный цех</option>`,
    `<option value="repair-shop">Ремонтный цех</option>`,
    `<option value="butcher-shop">Мясной цех</option>`,
    `<option value="dumpling-shop">Пельменный цех</option>`
];

const employeeOptions = [
    `<option value="Tverskaya">Тверская Мария Сергеевна</option>`,
    `<option value="Zhukov">Жуков Борис Алексеевич</option>`,
    `<option value="Dumskoy">Думской Петр Евгеньевич</option>`,
    `<option value="Tretiakova">Третьякова Екатерина Григорьевна</option>`,
    `<option value="Petrovsky">Петровский Роман Андреевич</option>`,
    `<option value="Mokhovaya">Моховая Анастасия Сергеевна</option>`,
    `<option value="Sadoviy">Садовый Глеб Аркадьевич</option>`,
    `<option value="Gogol">Гоголь Аркадий Иванович</option>`,
    `<option value="Pyatnitskaya">Пятницкая Мария Владимировна</option>`,
    `<option value="Pushkinsky">Пушкинский Иван Иванович</option>`
];

brigade.addEventListener('change', () => {
    shift.value = brigade.value;
});

shift.addEventListener('change', () => {
    brigade.value = shift.value;
});

city.addEventListener('change', () => {
    if (city.value === 'Moscow') {
        workshop.innerHTML = workshopOptions[0] + workshopOptions[1];
        employee.innerHTML = employeeOptions[0] + employeeOptions[1];
    }
    if (city.value === 'London') {
        workshop.innerHTML = workshopOptions[2];
        employee.innerHTML = employeeOptions[2] + employeeOptions[3];
    }
    if (city.value === 'Paris') {
        workshop.innerHTML = workshopOptions[3];
        employee.innerHTML = employeeOptions[4] + employeeOptions[5];
    }
    if (city.value === 'Dubai') {
        workshop.innerHTML = workshopOptions[4];
        employee.innerHTML = employeeOptions[6] + employeeOptions[7];
    }
    if (city.value === 'Erevan') {
        workshop.innerHTML = workshopOptions[5];
        employee.innerHTML = employeeOptions[8] + employeeOptions[9];
    }
});

workshop.addEventListener('change', () => {
    if (workshop.value === 'vegetable-shop' || workshop.value === 'confectionery-shop') {
        city.innerHTML = cityOptions[0];
        employee.innerHTML = employeeOptions[0] + employeeOptions[1];
    }
    if (workshop.value === 'dairy-shop') {
        city.innerHTML = cityOptions[1];
        employee.innerHTML = employeeOptions[2] + employeeOptions[3];
    }
    if (workshop.value === 'repair-shop') {
        city.innerHTML = cityOptions[2];
        employee.innerHTML = employeeOptions[4] + employeeOptions[5];
    }
    if (workshop.value === 'butcher-shop') {
        city.innerHTML = cityOptions[3];
        employee.innerHTML = employeeOptions[6] + employeeOptions[7];
    }
    if (workshop.value === 'dumpling-shop') {
        city.innerHTML = cityOptions[4];
        employee.innerHTML = employeeOptions[8] + employeeOptions[9];
    }
});

employee.addEventListener('change', () => {
    if (employee.value === 'Tverskaya' || employee.value === 'Zhukov') {
        city.innerHTML = cityOptions[0];
        workshop.innerHTML = workshopOptions[0] + workshopOptions[1];
    }
    if (employee.value === 'Dumskoy' || employee.value === 'Tretiakova') {
        city.innerHTML = cityOptions[1];
        workshop.innerHTML = workshopOptions[2];
    }
    if (employee.value === 'Petrovsky' || employee.value === 'Mokhovaya') {
        city.innerHTML = cityOptions[2];
        workshop.innerHTML = workshopOptions[3];
    }
    if (employee.value === 'Sadoviy' || employee.value === 'Gogol') {
        city.innerHTML = cityOptions[3];
        workshop.innerHTML = workshopOptions[4];
    }
    if (employee.value === 'Pyatnitskaya' || employee.value === 'Pushkinsky') {
        city.innerHTML = cityOptions[4];
        workshop.innerHTML = workshopOptions[5];
    }
});

resetButton.addEventListener('click', () => {
    city.innerHTML = cityOptions.reduce((acc, i) => acc + i, '');
    workshop.innerHTML = workshopOptions.reduce((acc, i) => acc + i, '');
    employee.innerHTML = employeeOptions.reduce((acc, i) => acc + i, '');
    brigade.value = 'day'
    shift.value = 'day';
});

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.cookie = encodeURIComponent(city.name) + '=' + encodeURIComponent(city.value);
    document.cookie = encodeURIComponent(workshop.name) + '=' + encodeURIComponent(workshop.value);
    document.cookie = encodeURIComponent(employee.name) + '=' + encodeURIComponent(employee.value);
    document.cookie = encodeURIComponent(brigade.name) + '=' + encodeURIComponent(brigade.value);
    document.cookie = encodeURIComponent(shift.name) + '=' + encodeURIComponent(shift.value);

    modalWindow.style.display = 'flex';
    modalWindow.querySelector('.modal-window__text').textContent = document.cookie;
})

closeButton.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})