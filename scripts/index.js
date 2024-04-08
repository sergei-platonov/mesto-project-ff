// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function addCard(cardName, cardLink, delCardOnClick) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const delButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.setAttribute('src', cardLink);
  cardImage.setAttribute('alt', cardName);
  cardTitle.textContent = cardName;
  delButton.addEventListener('click', () => {
    delCardOnClick(cardElement);
  })
  
  return cardElement
}

// @todo: Функция удаления карточки
function delCard(CardItem) {
  CardItem.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  placesList.append(addCard(item.name, item.link, delCard));
})