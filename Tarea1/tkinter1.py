from tkinter import *

from tkinter import messagebox

def DefInformatica():
####    messagebox.showinfo("XXX",message = "!!")
    lb2 = Label(ventana, image=imagenbt).place(x=0,y=0)

def Matematica():
    messagebox.showinfo("MATEMATICAS",message = "Las  Matemáticas  ofrecen  herramientas  que  permiten  analizar, evaluar   y   gestionar   dichas   amenazas   con  el   objetivo   deminimizar su impacto:Algoritmos   criptográficos   para   proteger   la   información (confidencialidad, integridad, autenticidad, etc.)Modelos  matemáticos  para  detectar,  evaluar  y  gestionar potenciales amenazas en la red. Modelos  matemáticos  para  el  análisis  y  comportamiento  de redes terroristas.")


def Electronica():
    messagebox.showinfo("ELECTRONICA",message = "Es una relacion muy importante ya que es el medio fisico de la informatica, tanto su relacion estrechamente que a medida que la electronica mejora, reduciendo tamaño y precio y aumentando su calidad, asi se consiguen ordenadores rapidos, economicos y eficaces")


def Fisica():
    messagebox.showinfo("FISICA",message = "De acuerdo al gran físico, recientemente fallecido, Rolf Landauer “information is physical”, la información es un proceso físico pues algo debe transmitirse por lo que debe ser algo medible tanto antes de enviarse, como también al procesarse o al ser recibida; independientemente de que se transmitan,ondas electromagnéticas, ondas mecánicas o señales de humo, el hecho es que algo que va a transmitirse debe ser medido y cuantificado con precisión matemática y rigor lógico, es decir, debe ser una cantidad física")


ventana = Tk()
ventana.geometry('600x600')
ventana.title("Tarea 1 Informatica")

imagen1 = PhotoImage(file="grafica2.png")
imagenbt = PhotoImage(file="grafica1.png")

lbl = Label(ventana, image=imagen1).place(x=0,y=0)

boton = Button(ventana, text="INFORMATICA",
               command=DefInformatica,height=2, width=12).place(x=262, y=229)

boton1 = Button(ventana, text="MATEMATICA",
               command=Matematica,height=2, width=15).place(x=400, y=165)
boton2 = Button(ventana, text="ELECTRONICA",
               command=Electronica,height=2, width=15).place(x=100, y=165)
boton3 = Button(ventana, text="FISICA",
               command=Fisica,height=2, width=12).place(x=250, y=400)

ventana.mainloop()
