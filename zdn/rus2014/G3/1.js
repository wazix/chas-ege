(function(){'use strict';

window.vopr.txt='Ука­жи­те при­мер с ошиб­кой в об­ра­зо­ва­нии формы слова.<br/>';
	
var ver=[//Список (на самом деле массив) правильных словосочетаний
	'лягте (на пол)',
	'их ра­бо­та',
	'го­ря­чие супы',
	'ше­стью­ста­ми уче­ни­ка­ми',
];//Лучше их располагать по алфавиту

var nev=[//Список (на самом деле массив) неправильных словосочетаний
	'ше­сти­ста­ми уче­ни­ка­ми',
	'взвод сол­да­тов',
	'при­шел более позд­нее',
];//Внимание: после последнего элемента тоже ставится запятая. Её можно и не ставить, но так удобнее.

window.vopr.ver=nev;
window.vopr.nev=ver;
AtoB();

})();

