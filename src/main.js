import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { arrData, fetchGallery, totalImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import { totalPages } from './js/pixabay-api';
import { _per_page } from './js/pixabay-api';
export let search = '';
export let _page = 1;
export const refs = {
  userContainerUL: document.querySelector('.users-list'),
  loader: document.querySelector('.loader'),
  loaderButton: document.querySelector('.loader-button'),
  form: document.querySelector('.form-serch'), // форма поиска
  btn: document.querySelector('.loadButton'), // кнопка загрузки
  gallery: document.querySelector('.gallery'),
  input: document.querySelector('.input-serch'), // поле ввода поиска
};

// Показать или скрыть лоадер
function showLoader() {
  refs.loader.classList.add('loader');
}
function hideLoader() {
  refs.loader.classList.remove('loader');
}

// Показать или скрыть лоадер кнопки
function showLoaderButton() {
  refs.loaderButton.style.display = 'flex';
}
function hideLoaderButton() {
  refs.loaderButton.style.display = 'none';
}

// Показать или скрыть кнопку
function showBtn() {
  refs.btn.classList.remove('buttonHiden');
}
function hideBtn() {
  refs.btn.classList.add('buttonHiden');
}

// Скрываем лоадер при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
});

// Очистка страницы
function clearPage() {
  if (refs.userContainerUL) {
    refs.userContainerUL.innerHTML = '';
  }
}

// Обработка отправки формы
async function handleFormSubmit(event) {
  event.preventDefault(); // предотвращаем перезагрузку страницы
  clearPage();
  search = refs.input.value.trim(); // убираем лишние пробелы
  _page = 30;

  if (!search) {
    hideBtn();
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
    return;
  }

  showLoader(); // показываем лоадер

  try {
    await fetchGallery(search); // выполняем запрос по ключевому слову

    // Переносим проверку после того, как данные загружены
    if (totalPages <= 1) {
      hideBtn(); // Если только одна страница, скрываем кнопку "Load More"
      console.log('Только одна страница, скрываем кнопку');
    } else {
      showBtn(); // Показать кнопку, если больше одной страницы
    }

    if (arrData.length === 0) {
      hideBtn();
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
    }

    hideLoader(); // скрываем лоадер
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    hideLoader();
    iziToast.error({
      message: 'Произошла ошибка при загрузке данных',
      backgroundColor: '#ff0000',
      position: 'topRight',
    });
  }

  refs.input.value = ''; // очищаем поле ввода
}

// Добавляем обработчик события на отправку формы
refs.form.addEventListener('submit', handleFormSubmit);
hideLoaderButton();

// Обработка кнопки загрузки следующей страницы
refs.btn.addEventListener('click', async () => {
  try {
    _page += 1; // увеличиваем номер страницы при клике

    if (_page > totalPages) {
      renderGallery(arrData); // Отрисовываем последнюю страницу
      hideBtn();
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
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
      return;
    }

    showLoaderButton(); // показываем лоадер кнопки
    await fetchGallery(search, _page); // загружаем следующую страницу

    renderGallery(arrData); // отрисовываем данные
    smoothScroll();
  } catch (error) {
    console.log('Ошибка при загрузке следующей страницы:', error);
    iziToast.error({
      message: 'Ошибка при загрузке следующей страницы',
      backgroundColor: '#ff0000',
      position: 'topRight',
    });
  } finally {
    hideLoaderButton(); // всегда скрываем лоадер кнопки
  }
});

// Скрол страницы
function smoothScroll() {
  const lastArticle = refs.userContainerUL.lastElementChild;
  const ArticleHeight = lastArticle.getBoundingClientRect().height;
  const scrolHeight = ArticleHeight * 2;

  window.scrollBy({
    top: scrolHeight,
    left: 0,
    behavior: 'smooth',
  });
  console.log(`Страница ${_page}`);
}
