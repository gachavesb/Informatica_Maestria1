
from tkinter import *


ventana = Tk()
Infoption=IntVar()

def imprimir():
    if Infoption.get()== 1 :
        lb2.config(text= "El uso avanzado de sistemas para ubicacion, geonavegacion y deteccion de elemtos")

    elif Infoption.get()== 2:
        lb2.config(text= "En el uso de dispositivos para poder realizar examenes medicos, hasta el uso de protesis biomedicas")
    elif Infoption.get()== 3:
        lb2.config(text= "En el uso de las redes, el internet como nuevo centro educativo y presentacion de nueva informacion de formas mas didacticas e interactivas")

    elif Infoption.get()== 4:
        lb2.config(text= "Uso de deteccion de rosotros, comportamientos criminales, tecnologica de ubicacion y rastreo GPS")
    else:
        lb2.config(text= "Realizacion de calculos complejos, hasta deteccion de fallas por dispositivos electronicos con modelos matematicos")


ventana.geometry('800x600')
ventana.title("Relacion informatica")

imagen1 = PhotoImage(file="grafica2.png")
imagenbt = PhotoImage(file="grafica1.png")


Radiobutton(ventana, text="Navegacion", variable=Infoption, value = 1, command = imprimir).pack()
Radiobutton(ventana, text="Salud", variable=Infoption, value = 2, command = imprimir).pack()
Radiobutton(ventana, text="Educacion",variable=Infoption, value = 3, command = imprimir).pack()
Radiobutton(ventana, text="Vigilancia",variable=Infoption, value = 4, command = imprimir).pack()
Radiobutton(ventana, text="Ciencia",variable=Infoption, value = 5, command = imprimir).pack()


lb2 = Label(ventana, image=imagenbt).place(x=0,y=0)
lb2 = Label(ventana)
lb2.pack()
