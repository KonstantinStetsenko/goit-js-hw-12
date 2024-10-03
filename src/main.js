import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { arrData, fetchGallery } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export let search = '';
export let _page = 1;
export let _per_page = 15;

export const refs = {
  userContainerUL: document.querySelector('.users-list'),
  loader: document.querySelector('.loader'),
  form: document.querySelector('.form-serch'), // форма поиска
  btn: document.querySelector('.loadButton'), // кнопка загрузки
  gallery: document.querySelector('.gallery'),
  input: document.querySelector('.input-serch'), // поле ввода поиска
};

console.log(refs.input); // Исправляем ошибку здесь, должно быть `input`, а не `searchInput`
console.log(refs.form); // Проверяем, что форма найдена

// показать или скрыть лоадер
function showLoader() {
  refs.loader.classList.add('loader');
}
function hideLoader() {
  refs.loader.classList.remove('loader');
}

// Показать или скрыть кнопку
function showBtn() {
  refs.btn.classList.add('buttonHiden');
}
function hideBtn() {
  refs.btn.classList.remove('buttonHiden');
}

// скрываем лоадер при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
});

// очистка страницы
function clearPage() {
  if (refs.userContainerUL) {
    refs.userContainerUL.innerHTML = '';
  }
}

// обработка отправки формы
async function handleFormSubmit(event) {
  event.preventDefault(); // предотвращаем перезагрузку страницы

  search = refs.input.value; // получаем значение из поля поиска

  console.log(search);

  if (!search) {
    hideLoader();
    iziToast.warning({
      message: 'Запрос пустой',
      backgroundColor: '#ffa500',
      messageSize: 16,
      messageColor: '#FFF',
      iconColor: '',
      titleColor: '#fa0598e5',
      icon: 'info-outline',
      titleSize: 16,
      messageLineHeight: 24,
      position: 'topRight',
    });
    clearPage(); // очищаем контейнер для новых
    showBtn();
    console.log('Запрос пустой');
    return;
  }

  showLoader(); // показываем лоадер

  try {
    await fetchGallery(search); // выполняем запрос по ключевому слову

    if (arrData.length === 0) {
      showBtn();
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#ffa500',
        messageSize: 16,
        messageColor: '#FFF',
        iconColor: '',
        titleColor: '#ffa500',
        icon: 'info-outline',
        titleSize: 16,
        messageLineHeight: 24,
        position: 'topRight',
      });
    } else {
      renderGallery(arrData); // отрисовываем результаты
      if (arrData.length > 14) {
        hideBtn();
      }
    }
    hideLoader(); // скрываем лоадер
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    hideLoader();
  }

  refs.input.value = ''; // очищаем поле ввода
}

// добавляем обработчик события на отправку формы
refs.form.addEventListener('submit', handleFormSubmit);

// обработка кнопки загрузки следующей страницы
refs.btn.addEventListener('click', async () => {
  try {
    _page += 1; // увеличиваем номер страницы при клике

    await fetchGallery(search, _page); // загружаем следующую страницу
    renderGallery(arrData); // отрисовываем данные
  } catch (error) {
    console.log('Ошибка при загрузке следующей страницы:', error);
  }
});
