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
cercania_a_Bogota('Soacha','5').
cercania_a_Bogota('Girardot','100').-0oi9>A+
.540
BN 
0V CVNM,
cercania_a_Bogota('Sasaima','80').
cercania_a_Bogota('Zipaquira','30').
cercania_a_Bogota('La Vega','50').
temperatura_pueblo_engrados('Soacha','16').
temperatura_pueblo_engrados('Chia','16').
temperatura_pueblo_engrados('Girardot','25').
temperatura_pueblo_engrados('Fusa','22').
temperatura_pueblo_engrados('Ubate','10').
temperatura_pueblo_engrados('La Vega','23').
temperatura_pueblo_engrados('Choachi','16').
viajar_cerca_cundinamarca(X,Y):-
	X < 31 -> Y = muy_cercanos; 
	X < 60 -> Y = cercanos;
	true -> Y = lejos.

muy_cercanos(X):-cercania_a_bogota(X,Z),viajar_cerca_cundinamarca(Z,W),W=muy_cercanos.



