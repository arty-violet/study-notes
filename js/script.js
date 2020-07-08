let blocksToggles = document.querySelectorAll('.info-blocks__toggle-bar');
let infoBlocksOff = document.querySelectorAll('.info-blocks__toggle._off');
let infoBlocksOn = document.querySelectorAll('.info-blocks__toggle._on');
let infoBlocksContainers = document.querySelectorAll('.info-blocks');
let infoBlocks = document.querySelectorAll('.info-block');
let pins = document.querySelectorAll('.icon-pin');
let titles = document.querySelectorAll('.info-block__title');
let contents = document.querySelectorAll('.info-block__content');
let tagNames = document.querySelectorAll('.tag__name');
let attrNames = document.querySelectorAll('.attribute__name');
let exampleButtons = document.querySelectorAll('.example-button');
let exampleBlocks = document.querySelectorAll('.example-block');

for (let element of titles) {
	element.onclick = function () {
		element.classList.toggle('_open');
		element.parentNode.classList.toggle('_open');
		element.previousElementSibling.classList.toggle('_pinned');
		for (let element of contents) {
			if (element.parentNode.classList.contains('_open')) {
				element.classList.add('_open');
			} else {
				element.classList.remove('_open');
			};
		};
	};
};

for (let element of exampleButtons) {
	element.onclick = function () {
		element.classList.toggle('_checked');
		element.parentNode.nextElementSibling.classList.toggle('_open');
	};
};

for (let element of tagNames) {
	element.onclick = function (evt) {
		evt.preventDefault();
		element.previousElementSibling.classList.toggle('_checked');
		element.parentNode.nextElementSibling.classList.toggle('_open');
	};
};

for (let element of attrNames) {
	element.onclick = function (evt) {
		evt.preventDefault();
		element.previousElementSibling.classList.toggle('_checked');
		element.parentNode.nextElementSibling.classList.toggle('_open');
	};
};

for (let element of infoBlocksOff) {
	element.onclick = function () {
		for (let element of pins) {
			element.classList.remove('_pinned');
		};
		for (let element of titles) {
			element.classList.remove('_open');
		};
		for (let element of contents) {
			element.classList.remove('_open');
		};
		for (let element of exampleButtons) {
			element.classList.remove('_checked');
		};
		for (let element of exampleBlocks) {
			element.classList.remove('_open');
		};
	};
};

for (let element of infoBlocksOn) {
	element.onclick = function () {
		for (let element of pins) {
			element.classList.add('_pinned');
		};
		for (let element of titles) {
			element.classList.add('_open');
		};
		for (let element of contents) {
			element.classList.add('_open');
		};
	};
};
