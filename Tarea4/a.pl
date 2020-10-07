info_materia('Informatica',[5,5,5]).
info_materia('Seminario',[4,4,4]).
info_materia('Herramientas',[3,3,3]).
info_materia('DB',[2,2,2]).

sum([],0).
sum([X|Y],R):- sum(Y,R1), R is R1 +X.
long([],0).
long([_|Y],R):- long(Y, R1), R is R1 + 1.

promedio(List,X):-
    long(List,L),
    sum(List,S),
    X is S/L.

referencia(X,Y):-
	X < 3 -> Y = mal;
	X < 3.5 -> Y = regular;
	X < 4.5 -> Y = sobresaliente;
	true -> Y = excelente.

rendimiento(X,Y):- info_materia(X,P),promedio(P,Y),referencia(P,Y).
