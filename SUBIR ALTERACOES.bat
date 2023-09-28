git status
set /p "var=-----ADICIONAR ALTERACOES PARA STAGE?----- "
git add .

git status

set /p "var=Qual mensagem do commit? "
echo %var%

git commit -m "%var%"

set /p "var=-----DESEJA SUBIR ALTERACOES?----- "

git push -u origin main

set /p "var=-----FIM----- "