import random

class carta:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return " of ".join((self.value, self.suit))


class Baraja:
    def __init__(self):
        self.cartas = [carta(s, v) for s in ["Espadas", "Picas", "Corazones", "Diamantes"] for v in
                      ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]]

    def shuffle(self):
        if len(self.cartas) > 1:
            random.shuffle(self.cartas)

    def deal(self):
        if len(self.cartas) > 1:
            return self.cartas.pop(0)


class Mano:
    def __init__(self, dealer=False):
        self.dealer = dealer
        self.cartas = []
        self.value = 0

    def agregar_carta(self, carta):
        self.cartas.append(carta)

    def calculate_value(self):
        self.value = 0
        has_ace = False
        for carta in self.cartas:
            if carta.value.isnumeric():
                self.value += int(carta.value)
            else:
                if carta.value == "A":
                    has_ace = True
                    self.value += 11
                else:
                    self.value += 10

        if has_ace and self.value > 21:
            self.value -= 10

    def get_value(self):
        self.calculate_value()
        return self.value

    def display(self):
        if self.dealer:
            print("Oculta")
            print(self.cartas[1])
        else:
            for carta in self.cartas:
                print(carta)
            print("Valor:", self.get_value())


class Game:
    def __init__(self):
        pass

    def play(self):
        playing = True
        
        while playing:
            self.Baraja = Baraja()
            self.Baraja.shuffle()

            self.mano_jugador = Mano()
            self.mano_dealer = Mano(dealer=True)

            for i in range(2):
                self.mano_jugador.agregar_carta(self.Baraja.deal())
                self.mano_dealer.agregar_carta(self.Baraja.deal())

            print("Tu mano es:")
            self.mano_jugador.display()
            print()
            print("Dealer mano:")
            self.mano_dealer.display()

            game_over = False

            while not game_over:
                player_tiene_blackjack, dealer_tiene_blackjack = self.check_for_blackjack()
                if player_tiene_blackjack or dealer_tiene_blackjack:
                    game_over = True
                    self.show_blackjack_results(player_tiene_blackjack, dealer_tiene_blackjack)
                    continue

                choice = input("Por favor escoja [Pedir carta 'P'/ Plantarse 'S'] ").lower()
                while choice not in ["p", "s", "pedir", "plantarse"]:
                    choice = input("Por favor escoja [Pedir carta 'P'/ Plantarse 'S']").lower()
                if choice in ['pedir', 'p']:
                    self.mano_jugador.agregar_carta(self.Baraja.deal())
                    self.mano_jugador.display()
                    if self.player_is_over():
                        print("You has perdido!")
                        game_over = True
                else:
                    player_hand_value = self.mano_jugador.get_value()
                    dealer_hand_value = self.mano_dealer.get_value()

                    print("Resultados finales")
                    print("Tu mano:", player_hand_value)
                    print("Dealer mano:", dealer_hand_value)

                    if player_hand_value > dealer_hand_value:
                        print("Tu ganaste!")
                    elif player_hand_value == dealer_hand_value:
                        print("Empate!")
                    else:
                        print("Dealer Gana!")
                    game_over = True
            
            again = input("Jugar de nuevo? [S/N] ")
            while again.lower() not in ["s", "s"]:
                again = input("Digite S o N ")
            if again.lower() == "n":
                print("Gracias por jugar")
                playing = False
            else:
                game_over = False

    def player_is_over(self):
        return self.mano_jugador.get_value() > 21

    def check_for_blackjack(self):
        player = False
        dealer = False
        if self.mano_jugador.get_value() == 21:
            player = True
        if self.mano_dealer.get_value() == 21:
            dealer = True

        return player, dealer

    def show_blackjack_results(self, player_tiene_blackjack, dealer_tiene_blackjack):
        if player_tiene_blackjack and dealer_tiene_blackjack:
            print("Los dos jugadores tienen 21, es un empate!")

        elif player_tiene_blackjack:
            print("Tu tienes blackjack, has ganado!")

        elif dealer_tiene_blackjack:
            print("El dealer tiene blackjack, has perdido!")


if __name__ == "__main__":
    g = Game()
    g.play()
