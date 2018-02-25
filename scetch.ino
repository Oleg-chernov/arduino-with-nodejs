void setup() {
	pinMode(0, INPUT); // устанавливаем 0 аналоговый пин как вход;
	Serial.begin(9600);
}

void loop() {
	Serial.println(analogRead(0)); // выводим значение
    delay(500); //делаем задержку в 500 миллисекунд
}