void setup() {
	pinMode(0, INPUT);
	digitalWrite(0, HIGH);
	Serial.begin(9600);
}

void loop() {
	delay(1000);
	Serial.println(analogRead(0));
}
