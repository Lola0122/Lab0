// riemann left sum sin(x)*x

function LeftRiemann(f, a, b, n) {
    if (a > b) {
        [a, b] = [b, a];
    }
    let delta = (b - a) / n;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += f(a + i * delta);
    }
    return sum * delta;
}

function integrate(f, a, b, prec) {
    let n = 1000;
    let prev;
    let curr = LeftRiemann(f, a, b, n);

    do {
        prev = curr;
        n *= 2;
        curr = LeftRiemann(f, a, b, n);
    } while (Math.abs(curr - prev) >= prec);

    return curr;
}



function f(x) {
    return x * Math.sin(x) + Math.cos(x);
}

function func(x) {
    return x * Math.cos(x);
}

let a = parseFloat(prompt("Введите начало интервала интегрирования:"));
let b = parseFloat(prompt("Введите конец интервала интегрирования:"));

if (isNaN(a) || isNaN(b)) {
    alert("Ошибка: введите корректные числа!");
} else {
    let result = integrate(func, a, b, 0.00001);

    alert(`Интеграл f(x) = x*cos(x) от ${a} до ${b} (левая сумма Римана) = ${result}\nЧерез первообразную ${(f(b) - f(a))}`);

}


