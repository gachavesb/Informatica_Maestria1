municipios_cundinamarca('Chia').
municipios_cundinamarca('Soacha').
municipios_cundinamarca('Cota').
municipios_cundinamarca('Fusa').
municipios_cundinamarca('Mosquera').
municipios_cundinamarca('Madrid').
municipios_cundinamarca('El rosal').
municipios_cundinamarca('Tenjo').
municipios_cundinamarca('Cajica').
municipios_cundinamarca('Zipaquira').
municipios_cundinamarca('La Vega').
municipios_cundinamarca('Girardot').
municipios_cundinamarca('Fusagasuga').
municipios_cundinamarca('Tocaima').
municipios_cundinamarca('Sasaima').
municipios_cundinamarca('Choachi').
municipios_cundinamarca('Silvania').
municipios_cundinamarca('Ubate').

municipios_tolima('Melgar').
municipios_tolima('Ibague').
municipios_tolima('Espinal').
municipios_tolima('Libano').
municipios_tolima('Mariquita').

municipios_boyaca('tunja').
municipios_boyaca('Paipa').
municipios_boyaca('Villa de Leyva').
municipios_boyaca('Duitama').
municipios_boyaca('Mongui').

cercania_a_bogota('Soacha',5).
cercania_a_bogota('Girardot',100).
cercania_a_bogota('Sasaima',80).
cercania_a_bogota('Zipaquira',30).
cercania_a_bogota('La Vega',50).
cercania_a_bogota('Melgar',70).
cercania_a_bogota('Girardot',100).
cercania_a_bogota('Ibague',150).
cercania_a_bogota('Paipa',100).
cercania_a_bogota('Duitama',150).

temperatura_pueblo_engrados('Soacha',16).
temperatura_pueblo_engrados('Chia',16).
temperatura_pueblo_engrados('Girardot',25).
temperatura_pueblo_engrados('Fusa',21).
temperatura_pueblo_engrados('Ubate',10).
temperatura_pueblo_engrados('La Vega',22).
temperatura_pueblo_engrados('Choachi',16).
temperatura_pueblo_engrados('Melgar',25).
temperatura_pueblo_engrados('Ibague',24).
temperatura_pueblo_engrados('Mongui',6).
temperatura_pueblo_engrados('Tunja',8).
temperatura_pueblo_engrados('Sasaima',23).
temperatura_pueblo_engrados('Duitama',16).

viajar_cerca_cundinamarca(X,Y):-
	X < 31 -> Y = muy_cercanos; 
	X < 60 -> Y = cercanos;
	true -> Y = lejos.

muy_cercanos(X):-cercania_a_bogota(X,Z),viajar_cerca_cundinamarca(Z,W),W=muy_cercanos.
cercanos(X):-cercania_a_bogota(X,Z),viajar_cerca_cundinamarca(Z,W),W=cercanos.
lejanos(X):-cercania_a_bogota(X,Z),viajar_cerca_cundinamarca(Z,W),W=lejos.

temperatura_pueblo(X,Y):-
	X < 10 -> Y = frio; 
	X < 22 -> Y = templado;
	true -> Y = caliente.

pueblo_frio(X):-temperatura_pueblo_engrados(X,Z),temperatura_pueblo(Z,W),W=frio.
pueblo_templado(X):-temperatura_pueblo_engrados(X,Z),temperatura_pueblo(Z,W),W=templado.
pueblo_caluroso(X):-temperatura_pueblo_engrados(X,Z),temperatura_pueblo(Z,W),W=caliente.


cercanos_en_cundinamarca(X):-municipios_cundinamarca(X);
                            muy_cercanos(X).

