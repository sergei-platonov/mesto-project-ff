// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function addCard(cardData, deleteCardOnClick) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.setAttribute('src', cardData.link);
  cardImage.setAttribute('alt', cardData.name);
  cardTitle.textContent = cardData.name;
  cardDeleteButton.addEventListener('click', () => {
    deleteCardOnClick(cardElement);
  })
  
  return cardElement
}

// @todo: Функция удаления карточки
function deleteCard(CardItem) {
  CardItem.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  placesList.append(addCard(item, deleteCard));
})