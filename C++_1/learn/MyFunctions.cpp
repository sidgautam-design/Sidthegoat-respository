#include "MyFunctions.h"
#include <Arduino.h> // Always include Arduino.h in .cpp files for Arduino functions like digitalWrite

void turnOnLED(int pin) {
  digitalWrite(pin, HIGH);
}

void turnOffLED(int pin) {
  digitalWrite(pin, LOW);
}
