import sys
import random

if sys.version_info < (3, 0):
    from Tkinter import Tk, Label, Radiobutton, PhotoImage, IntVar
    import tkMessageBox as messagebox
else:
    from tkinter import Tk, Label, Radiobutton, PhotoImage, IntVar
    from tkinter import messagebox

class presentacion1:
    def __init__(self, parent):
        self.imagen_grafica1 = PhotoImage(file="grafica1.jpg")
        self.imagen_grafica2 = PhotoImage(file="grafica2.jpg")
    self.ancho_grafica2= 60
    self.alto_grafica2 = 140
    self.container = parent

    self.Chozas = []
    self.result = ""


    self.setup()
        def setup(self):
        self.crear_widgets()
        self.setup_layout()


    if __name__ == "__main__":

    mainwin = Tk()
    WIDTH = 1280
    HEIGHT = 700
    mainwin.geometry("%sx%s" % (WIDTH, HEIGHT))
    mainwin.resizable(0, 0)
    mainwin.title("Informatica")
    game_app = presentacion1(mainwin)
    mainwin.mainloop()
