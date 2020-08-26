
from tkinter import *



ventana = Tk()
Infoption=IntVar()

def imprimir():
    if Infoption.get()==1:
        lb2.config(text= "asdasd")

    if Infoption.get()==2:
        lb2.config(text= "123124")

        
ventana.geometry('800x600')
ventana.title("Relacion informatica")

imagen1 = PhotoImage(file="grafica2.png")
imagenbt = PhotoImage(file="grafica1.png")


Radiobutton(ventana, variable=Infoption, value = 1, command = imprimir).pack()
Radiobutton(ventana, variable=Infoption, value = 2, command = imprimir).pack()
Radiobutton(ventana, variable=Infoption, value = 3, command = imprimir).pack()

lb2 = Label(ventana, image=imagenbt).place(x=0,y=0)
lb2.pack()
