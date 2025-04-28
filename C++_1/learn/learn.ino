#include "MyFunctions.h"

const int ledPin = 6;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  turnOnLED(ledPin);
  delay(1000);
  turnOffLED(ledPin);
  delay(1000);
}