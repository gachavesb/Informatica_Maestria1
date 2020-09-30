municipios_cundinamarca('Chia').
municipios_cundinamarca('Soacha').
municipios_cundinamarca('Cota').
municipios_cundinamarca('Funza').
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

municipios_boyaca('Tunja').
municipios_boyaca('Paipa').
municipios_boyaca('Villa de Leyva').
municipios_boyaca('Duitama').
municipios_boyaca('Mongui').

cercania_a_bogota('Soacha',5).
cercania_a_bogota('Girardot',100).
cercania_a_bogota('Sasaima',80).
cercania_a_bogota('Zipaquira',30).
cercania_a_bogota('La Vega',50).

temperatura_pueblo_engrados('Soacha',16).
temperatura_pueblo_engrados('Chia',16).
temperatura_pueblo_engrados('Girardot',25).
temperatura_pueblo_engrados('Fusa',22).
temperatura_pueblo_engrados('Ubate',10).
temperatura_pueblo_engrados('La Vega',23).
temperatura_pueblo_engrados('Choachi',16).

viajar_cerca_cundinamarca(X,Y):-
	X < 31 -> Y = muy_cercanos; 
	X < 60 -> Y = cercanos;
	true -> Y = lejos.

muy_cercanos(X):-cercania_a_bogota(X,Z),viajar_cerca_cundinamarca(Z,W),W=muy_cercanos.
cercanos(X):-cercania_a_bogota(X,Z),viajar_cerca_cundinamarca(Z,W),W=cercanos.
lejanos(X):-cercania_a_bogota(X,Z),viajar_cerca_cundinamarca(Z,W),W=lejos.

pertenece_cundinamarca(L):-municipios_cundinamarca(X),not(municipios_boyaca(X)).





