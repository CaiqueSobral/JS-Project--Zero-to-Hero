'use strict';

////////////////////////////////////////////////////////////
///////////////////  TABBED COMPONENT  /////////////////////
////////////////////////////////////////////////////////////

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  // Guard Clause
  if (!clicked) return;

  //Remove active class
  tabs.forEach((tabs) => tabs.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//==========================================================
//==========================================================
