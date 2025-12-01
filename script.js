document.addEventListener('DOMContentLoaded', function(){
const bt_pr = document.getElementById('botao_pr');
const inf_pr = document.getElementById('informacoes_pr');

 botao_pr.addEventListener('click', function() {
if (inf_pr.style.display === 'none' || inf_pr.style.display === '') {
            inf_pr.style.display = 'block';
            bt_pr.textContent = 'Ocultar Texto';
        } else {
            inf_pr.style.display = 'none';
            bt_pr.textContent = 'Mostrar Texto';
        });
