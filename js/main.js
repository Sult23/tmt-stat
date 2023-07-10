//Datepicker
$(function () {
	$('#datestart').datepicker()
})
$(function () {
	$('#dateend').datepicker()
})

//toggle menu (Burger)
const tMenu = document.querySelector('.boorger>a')
const navBar = document.querySelector('.header__list')

tMenu.addEventListener('click', function () {
	navBar.classList.toggle('active')
	tMenu.classList.toggle('active')
})

//стилизация активной страницы
jQuery(() => {
	$('.header__list [href]').each(function () {
		if (this.href == window.location.href) {
			$(this).addClass('header__list-link--active')
		}
	})
})
