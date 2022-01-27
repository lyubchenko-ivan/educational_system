import $ from 'jquery';

function getBitSet() {
    return $('#js-bitset');
}

function set() {
    let bitSet = getBitSet();
    let input = prompt('Enter index:');
    let arr = bitSet[0].innerHTML.split('');
    if (isNaN(input) || input > 10 || input < 0) {
        arr = arr.map(() => {
            return '1';
        });
    } else {
       arr[+input] = '1';
    }

    bitSet[0].innerHTML = arr.join('');
}

function get() {
    let input = prompt('Enter index:');
    let bitSet = getBitSet();
    let arr = bitSet[0].innerHTML.split('');
    alert(arr[+input]);
}

function reset() {
    let index = prompt('Enter index: ');
    let bitSet = getBitSet();
    let arr = bitSet[0].innerHTML.split('');
    if (isNaN(index) || index > 10 || index < 0) {
        arr = arr.map(() => {
            return '0';
        });
    } else {
        arr[index] = '0';
    }
    bitSet[0].innerHTML = arr.join('');
}

function flip() {
    let bitset = getBitSet();
    let arr = bitset[0].innerHTML.split('');
    arr = arr.map((el) => {
        return (el === '0')? '1': '0';
    });
    bitset[0].innerHTML = arr.join('');
}

$(window).ready(() => {
    $('#js-set').on('click', set);
    $('#js-get').on('click', get);
    $('#js-reset').on('click', reset);
    $('#js-flip').on('click', flip);
})
