const areaSide = document.getElementById('area-side');
const perimiterSide = document.getElementById('perimiter-side');
const areaResult = document.getElementById('area-result');
const perimiterResult = document.getElementById('perimiter-side');

areaSide.addEventListener('input', () => {
    if (areaSide.value < 0) {
        areaResult.innerText = 'Sisi invalid (s < 0)';
        return;
    }
    areaResult.innerText = 'Luas: ' + (areaSide.value * areaSide.value);
});

perimiterSide.addEventListener('input', () => {
    if (perimiterSide.value < 0) {
        perimiterResult.innerText = 'Sisi invalid (s < 0)';
        return;
    }
    perimiterResult.innerText = 'Keliling: ' + (perimiterSide.value * 4);
});

// function countArea() {
//     const side = document.getElementById('area-side').value;
//     const result = document.getElementById('area-result');
//     if (side < 0) {
//         result.innerText = 'Sisi invalid (s < 0)';
//         return;
//     }
//     result.innerText = 'Luas: ' + (side * side);
// }

// function countPerimiter() {
//     const side = document.getElementById('perimiter-side').value;
//     const result = document.getElementById('perimiter-result');
//     if (side < 0) {
//         result.innerText = 'Sisi invalid (s < 0)';
//         return;
//     }
//     result.innerText = 'Keliling: ' + (side * 4);
// }