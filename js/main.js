//preloader
let mask = document.querySelector('.preloader')
window.addEventListener('load', () => {
	mask.classList.add('hide')
	setTimeout(() => {
		mask.remove()
	}, 800)
})

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

// modal window
$(document).ready(function () {
	$('.general__inner').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300)
		$(this).next().toggleClass('active')
	})
})
