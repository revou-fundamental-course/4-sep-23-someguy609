const areaSide = document.getElementById('area-side');
const perimiterSide = document.getElementById('perimiter-side');
const areaResult = document.getElementById('area-result');
const perimiterResult = document.getElementById('perimiter-result');

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